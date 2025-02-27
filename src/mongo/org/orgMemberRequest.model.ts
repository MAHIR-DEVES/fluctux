import mongoose, { Schema, Document } from "mongoose";
import { OrgType } from "./org.model";
import { UserType } from "../user/user.model";
import { RequestStatusType, OrgMemberRoleType } from "@/mongo/types";

export interface OrgMemberRequestType extends Document {
    requested_to: OrgType;
    sender_id: UserType;
    receiver_id: UserType;
    status: RequestStatusType;
    requested_role: OrgMemberRoleType;
}

const orgMemberRequestSchema: Schema<OrgMemberRequestType> = new Schema({
    requested_to: {
        type: Schema.Types.ObjectId,
        ref: "Org",
        required: true,
    },
    sender_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiver_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: RequestStatusType,
        default: RequestStatusType.PENDING,
    },
    requested_role: {
        type: String,
        enum: OrgMemberRoleType,
        default: OrgMemberRoleType.FOLLOWER,
    },
}, {
    timestamps: true,
})

const OrgMemberRequest = (mongoose.models.OrgMemberRequest as mongoose.Model<OrgMemberRequestType>) || mongoose.model<OrgMemberRequestType>("OrgMemberRequest", orgMemberRequestSchema);
export default OrgMemberRequest;