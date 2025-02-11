import { ERROR } from "@/constants";
import { serverSession } from "@/helpers";
import connDb from "@/lib/db.conn";
import Org from "@/mongo/org/org.model";
import ApiResponse from "@/utils/ApiResponse";
import { CreateOrganizationDataType } from "./type";
import ApiError from "@/utils/ApiError";

class Orgranization {
  async createNewOrg(data: CreateOrganizationDataType) {
    try {
      const authorizedUser = await serverSession();

      if (!authorizedUser) {
        return { error: ERROR.UNAUTHORIZED_USER };
      }

      await connDb();

      const isOrgExisted = await Org.findOne({ org_slug: data.org_slug });

      if (!isOrgExisted) {
        return { error: ERROR.INVALID_REQUEST };
      }

      const newOrg = new Org({
        ...data,
        admin: authorizedUser._id,
      });

      await newOrg.save();

      return {
        message: new ApiResponse(
          200,
          "Organization created successfully",
          null,
          true
        ),
      };
    } catch (error) {
      // TODO: testing
      return {error: new ApiError(500, "INTERNAL SERVER ERROR", false) }
    }
  }
}

export const orgranization = new Orgranization();
