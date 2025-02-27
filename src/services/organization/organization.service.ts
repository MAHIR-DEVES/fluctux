import { ERROR, ErrorCodes, HTTPErrorCodes, ORG_CREATED } from "@/constants";
import { serverSession } from "@/helpers";
import connDb from "@/lib/db.conn";
import Org from "@/mongo/org/org.model";
import ApiResponse from "@/utils/ApiResponse";
import { CreateOrganizationDataType } from "./type";
import ApiError from "@/utils/ApiError";
import { createOrgZodSchema } from "@/zod/organization";
import { getFormattedZodErrors } from "@/utils/zod-error-formatter";
import { User as UserSessionType } from "next-auth";
import { HTTPSuccessCodes } from "@/constants/success";


export class Organization {
  protected authorizedUser: UserSessionType | null = null;

  constructor() {
    this.authorize();
  }

  async authorize() {
    // TODO: uncomment
    const session = await serverSession();
    if (!session) return
    this.authorizedUser = (await serverSession()) as UserSessionType;
  }


  async createNewOrg(data: CreateOrganizationDataType) {
    try {
      // TODO: uncomment
      // if (!this.authorizedUser) {
      //   return {
      //     error: JSON.parse(
      //       JSON.stringify(
      //         new ApiError(HTTPErrorCodes.UNAUTHORIZED, ErrorCodes.UNAUTHORIZED_USER, false, "", [
      //           ERROR.UNAUTHORIZED_USER,
      //         ])
      //       )
      //     ),
      //   }
      // }

      const sanitizedData = createOrgZodSchema.safeParse(data);

      if (!sanitizedData.success) {
        const error = sanitizedData.error.format();
        const zodErrors = getFormattedZodErrors(error);
        return { error: zodErrors };
      }

      await connDb();

      const isOrgExisted = await Org.findOne({ org_slug: data.org_slug });

      if (isOrgExisted) {
        return {
          error: JSON.parse(
            JSON.stringify(
              new ApiError(
                HTTPErrorCodes.BAD_REQUEST,
                ErrorCodes.INVALID_REQUEST,
                false,
                "",
                [ERROR.INVALID_REQUEST]
              )
            )
          ),
        };
      }

      const newOrg = new Org({
        ...data,
        admin:
          (this.authorizedUser && this.authorizedUser._id) ||
          "66d61f647fadea5bd3aec0c2",
      });

      await newOrg.save();

      return {
        message: JSON.parse(
          JSON.stringify(
            new ApiResponse(
              HTTPSuccessCodes.CREATED,
              ORG_CREATED,
              {
                _id: newOrg._id,
              },
              true
            )
          )
        ),
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        error: JSON.parse(
          JSON.stringify(
            new ApiError(
              HTTPErrorCodes.INTERNAL_SERVER_ERROR,
              ErrorCodes.INTERNAL_SERVER_ERROR,
              false,
              "",
              [ERROR.INTERNAL_SERVER_ERROR]
            )
          )
        ),
      };
    }
  }
}

export const organization = new Organization();
