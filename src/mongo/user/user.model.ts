import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
import UserBasicInfo from "./userBasicInfo.model";
import UserAddress from "./userAddress.model";
import { AuthProviderType, UserRoleType, UserStatusType } from "@/mongo/types";

export interface UserType extends Document {
  avatar: string;
  name: string;
  email: string;
  username: string;
  password: string;
  role: UserRoleType;
  status: UserStatusType;
  isVerified: boolean;
  provider: AuthProviderType;
  verify_code: string;
  verify_expiry: Date;
  isPasswordCorrect(password: string): Promise<boolean>;
}

const user_schema: Schema<UserType> = new Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address.",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: UserRoleType,
      default: UserRoleType.USER,
    },
    status: {
      type: String,
      enum: UserStatusType,
      default: UserStatusType.NORMAL,
    },
    isVerified: {
      type: Boolean,
      default: false,
      required: true,
    },
    provider: {
      type: String,
      enum: AuthProviderType,
      default: AuthProviderType.CUSTOM,
    },
    verify_code: {
      type: String,
    },
    verify_expiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * hash the password before saving, if password is modified
 */
user_schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

user_schema.post("save", async function (user: UserType, next) {
  const userBasicInfo = await UserBasicInfo.findOne({ user: user._id });
  const userAddress = await UserAddress.findOne({ user: user._id });

  if (!userBasicInfo) {
    const newUserInfo = await new UserBasicInfo({
      user: user._id,
    });

    await newUserInfo.save({
      validateBeforeSave: false,
    });
  }

  if (!userAddress) {
    const newUserAddress = await new UserAddress({
      user: user._id,
    });

    await newUserAddress.save({
      validateBeforeSave: false,
    });
  }

  next();
});

// custom method for password validation
user_schema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User =
  (mongoose.models.User as mongoose.Model<UserType>) ||
  mongoose.model<UserType>("User", user_schema);
export default User;
