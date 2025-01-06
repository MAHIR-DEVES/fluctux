import mongoose, { Schema, Document } from "mongoose";
import { OrgType } from "./org.model";
import { UserType } from "../user/user.model";
import { OrgPageType } from "./orgPage.model";

export interface OrgCommentType extends Document {
    org: OrgType;
    user: UserType;
    context: OrgPageType;
    comment: string;
    isHidden: boolean;
}

const orgCommentSchema: Schema<OrgCommentType> = new Schema({
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
    context: {
        type: Schema.Types.ObjectId,
        ref: "OrgPage",
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    isHidden: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
})

const OrgComment = (mongoose.models.OrgComment as mongoose.Model<OrgCommentType>) || mongoose.model<OrgCommentType>("OrgComment", orgCommentSchema);
export default OrgComment;