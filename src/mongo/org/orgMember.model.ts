import mongoose, { Schema, Document } from "mongoose";
import { OrgType } from "./org.model";
import { UserType } from "../user/user.model";


export interface OrgMemberType extends Document {
  org: OrgType;
  user: UserType;
  role: string;
  status: string;
}


const orgMemberSchema: Schema<OrgMemberType> = new Schema({
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
    role: {
        type: String,
        enum: ["OWNER", "MODERATOR", "MEMBER"],
        default: "MEMBER",
    },
    status: {
        type: String,
        enum: ["NORMAL", "RESTRICTED", "BLOCKED", "PENDING", "REJECTED"],
        default: "NORMAL", 
        // in default, org is public, so user is normal
    },
})

const OrgMember = (mongoose.models.OrgMember as mongoose.Model<OrgMemberType>) || mongoose.model<OrgMemberType>("OrgMember", orgMemberSchema);
export default OrgMember;