import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "../user/user.model";
import { OrgStatusType, OrgVisibilityType } from "@/mongo/types";

export interface OrgType extends Document {
  org_thumbnail: string;
  org_name: string;
  org_description: string;
  org_slug: string;
  org_visibility: OrgVisibilityType;
  admin: UserType;
  tags: string[];
  category: string;
  country: string;
  city: string;
  status: OrgStatusType;
  isVerified: boolean;
}

const org_schema: Schema<OrgType> = new Schema(
  {
    org_thumbnail: {
      type: String,
    },
    org_name: {
      type: String,
      required: true,
    },
    org_description: {
      type: String,
    },
    org_slug: {
      type: String,
      unique: true,
      required: true,
    },
    org_visibility: {
      type: String,
      enum: OrgVisibilityType,
      default: OrgVisibilityType.PUBLIC,
      required: true,
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: [String],
    },
    category: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    status: {
      type: String,
      enum: OrgStatusType,
      default: OrgStatusType.NORMAL,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Org =
  (mongoose.models.Org as mongoose.Model<OrgType>) ||
  mongoose.model<OrgType>("Org", org_schema);
export default Org;
