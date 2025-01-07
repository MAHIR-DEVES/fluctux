import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface UserType extends Document {
  avatar: string;
  name: string;
  email: string;
  username: string;
  password: string;
  role: string;
  status: string;
  isVerified: boolean;
  provider: string;
  verify_code: string;
  verify_expiry: Date;
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
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    status: {
      type: String,
      enum: ["SUSPENDED", "RESTRICTED", "NORMAL"],
      default: "NORMAL",
    },
    isVerified: {
      type: Boolean,
      default: false,
      required: true,
    },
    provider: {
      type: String,
      enum: ["GITHUB", "DISCORD", "GOOGLE", "CUSTOM"],
      default: "CUSTOM",
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

// custom method
user_schema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User =
  (mongoose.models.User as mongoose.Model<UserType>) ||
  mongoose.model<UserType>("User", user_schema);
export default User;
