import mongoose, { Schema, Document } from "mongoose";
import { ExcelProjectType } from "./excelProject.model";
import { UserType } from "../user/user.model";

export interface ExcelDataType extends Document {
  root_excel: ExcelProjectType;
  user: UserType;
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G: string;
  H: string;
  I: string;
  J: string;
  K: string;
  L: string;
  M: string;
  N: string;
  O: string;
  P: string;
  Q: string;
  R: string;
  S: string;
  T: string;
  U: string;
  V: string;
  W: string;
  X: string;
  Y: string;
  Z: string;
  status: string;
  isLocked: boolean;
}

const excelDataSchema: Schema<ExcelDataType> = new Schema(
  {
    root_excel: {
      type: Schema.Types.ObjectId,
      ref: "ExcelProject",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    A: {
      type: String,
    },
    B: {
      type: String,
    },
    C: {
      type: String,
    },
    D: {
      type: String,
    },
    E: {
      type: String,
    },
    F: {
      type: String,
    },
    G: {
      type: String,
    },
    H: {
      type: String,
    },
    I: {
      type: String,
    },
    J: {
      type: String,
    },
    K: {
      type: String,
    },
    L: {
      type: String,
    },
    M: {
      type: String,
    },
    N: {
      type: String,
    },
    O: {
      type: String,
    },
    P: {
      type: String,
    },
    Q: {
      type: String,
    },
    R: {
      type: String,
    },
    S: {
      type: String,
    },
    T: {
      type: String,
    },
    U: {
      type: String,
    },
    V: {
      type: String,
    },
    W: {
      type: String,
    },
    X: {
      type: String,
    },
    Y: {
      type: String,
    },
    Z: {
      type: String,
    },
    status: {
      type: String,
      enum: ["ORG", "FRIEND", "PUBLIC", "PRIVATE"],
      required: true,
    },
    isLocked: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ExcelData =
  (mongoose.models.ExcelData as mongoose.Model<ExcelDataType>) ||
  mongoose.model<ExcelDataType>("ExcelData", excelDataSchema);
export default ExcelData;
