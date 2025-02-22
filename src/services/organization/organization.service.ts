import { ERROR, ErrorCodes } from "@/constants";
import { serverSession } from "@/helpers";
import connDb from "@/lib/db.conn";
import Org from "@/mongo/org/org.model";
import ApiResponse from "@/utils/ApiResponse";
import { CreateNewTeamDataType, CreateOrganizationDataType } from "./type";
import ApiError from "@/utils/ApiError";
import { createOrgZodSchema } from "@/zod/organization";
import { getFormattedZodErrors } from "@/utils/zod-error-formatter";
import { User as UserSessionType } from "next-auth";

class Orgranization {
  private authorizedUser: UserSessionType | null = null;
  constructor() {
    this.authorize();
  }

  async authorize() {
    const session = await serverSession();
    if (!session) return;
    this.authorizedUser = (await serverSession()) as UserSessionType;
  }

  async createNewOrg(data: CreateOrganizationDataType) {
    try {
      if (!this.authorizedUser) {
        return { error: ERROR.UNAUTHORIZED_USER };
      }

      const senitizedData = createOrgZodSchema.safeParse(data);

      if (!senitizedData.success) {
        const error = senitizedData.error.format();
        const zodErrors = getFormattedZodErrors(error);
        return { error: zodErrors };
      }

      await connDb();

      const isOrgExisted = await Org.findOne({ org_slug: data.org_slug });

      if (!isOrgExisted) {
        return { error: ERROR.INVALID_REQUEST };
      }

      const newOrg = new Org({
        ...data,
        admin: this.authorizedUser._id,
      });

      await newOrg.save();

      return {
        message: new ApiResponse(
          200,
          "Organization created successfully",
          {
            _id: newOrg._id,
          },
          true
        ),
      };
    } catch (error) {
      // TODO: testing
      return {
        error: new ApiError(500, ErrorCodes.INTERNAL_SERVER_ERROR, false, "", [
          ERROR.INTERNAL_SERVER_ERROR,
        ]),
      };
    }
  }

  async createNewTeam(data: CreateNewTeamDataType) {}
}

export const orgranization = new Orgranization();
