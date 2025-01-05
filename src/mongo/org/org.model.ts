import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "../user/user.model";

export interface OrgType extends Document {
  org_thumbnail: string;
  org_name: string;
  org_description: string;
  org_visibility: string;
  org_uname: string;
  owner: UserType;
  tags: string[];
  category: string;
  country: string;
  city: string;
  status: string;
  isVerified: boolean;
}

const org_schema: Schema<OrgType> = new Schema(
  {
    org_thumbnail: {
      type: String,
      required: true,
    },
    org_name: {
      type: String,
      required: true,
    },
    org_description: {
      type: String,
    },
    org_visibility: {
      type: String,
      enum: ["PUBLIC", "PRIVATE"],
      default: "PUBLIC",
      required: true,
    },
    org_uname: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["NORMAL", "SUSPENDED", "RESTRICTED"],
      default: "NORMAL",
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
