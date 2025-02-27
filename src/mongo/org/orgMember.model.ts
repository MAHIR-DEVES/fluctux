import mongoose, { Schema, Document } from "mongoose";
import { OrgType } from "./org.model";
import { UserType } from "../user/user.model";
import { OrgMemberRoleType, OrgMemberStatusType } from "@/mongo/types";


export interface OrgMemberType extends Document {
  org: OrgType;
  user: UserType;
  role: OrgMemberRoleType;
  status: OrgMemberStatusType;
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
        enum: OrgMemberRoleType,
        default: OrgMemberRoleType.FOLLOWER,
    },
    status: {
        type: String,
        enum: OrgMemberStatusType,
        default: OrgMemberStatusType.NORMAL,
    },
}, {
    timestamps: true
})

const OrgMember = (mongoose.models.OrgMember as mongoose.Model<OrgMemberType>) || mongoose.model<OrgMemberType>("OrgMember", orgMemberSchema);
export default OrgMember;