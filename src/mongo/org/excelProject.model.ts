import mongoose, { Schema, Document } from "mongoose";
import { OrgType } from "./org.model";
import { UserType } from "../user/user.model";
import { VisibilityType } from "@/types/user-types";

export interface ExcelProjectType extends Document {
    org: OrgType;
    user: UserType;
    title: string;
    desc: string;
    content: string;
    isPublished: boolean;
    status: VisibilityType;
    isLocked: boolean;
}

const excelDataSchema: Schema<ExcelProjectType> = new Schema({
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
    title: {
        type: String,
        required: true,
    },
    desc: {
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
    status: {
        type: String,
        enum: VisibilityType,
        default: VisibilityType.ORG,
        required: true,
    },
    isLocked: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});

const ExcelData = (mongoose.models.ExcelData as mongoose.Model<ExcelProjectType>) || mongoose.model<ExcelProjectType>("ExcelData", excelDataSchema);
export default ExcelData;