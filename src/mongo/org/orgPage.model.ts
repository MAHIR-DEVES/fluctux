import mongoose, { Schema, Document } from "mongoose";
import { OrgType } from "./org.model";
import { UserType } from "../user/user.model";

export interface OrgPageType extends Document {
  org: OrgType;
  user: UserType;
  thumbnail: string;
  title: string;
  desc: string;
  slug: string;
  content: string;
  isPublished: boolean;
}

const orgPageSchema: Schema<OrgPageType> = new Schema(
  {
    org: {
      type: Schema.Types.ObjectId,
      ref: "Org",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrgPage =
  (mongoose.models.OrgPage as mongoose.Model<OrgPageType>) ||
  mongoose.model<OrgPageType>("OrgPage", orgPageSchema);
export default OrgPage;
