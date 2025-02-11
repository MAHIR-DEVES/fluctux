import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "./user.model";
import { DateOfBirthType, GenderType, NumberType, SocialLinkType, SocialMediaType, VisibilityType } from "@/mongo/types";

export interface UserBasicInfoType extends Document {
  user: UserType;
  numbers: NumberType[];
  socialLinks: SocialLinkType[];
  gender: GenderType;
  date_of_birth: DateOfBirthType;
}

const numberSchema: Schema<NumberType> = new Schema({
  number: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    enum: VisibilityType,
    default: VisibilityType.PUBLIC,
    required: true,
  },
});

const socialLinkSchema: Schema<SocialLinkType> = new Schema({
  link: {
    type: String,
    required: true,
  },
  social_media: {
    type: String,
    enum: SocialMediaType,
    required: true,
  },
  visibility: {
    type: String,
    enum: VisibilityType,
    default: VisibilityType.PUBLIC,
    required: true,
  },
});

const dateOfBirthSchema: Schema<DateOfBirthType> = new Schema({
  day_month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    enum: VisibilityType,
    default: VisibilityType.PUBLIC,
    required: true,
  },
})

const UserBasicInfoSchema: Schema<UserBasicInfoType> = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  numbers: {
    type: [numberSchema],
    validate: {
      validator: function (array: NumberType[]) {
        return array.length <= 5; // Maximum of 5 numbers allowed
      },
      message: "Maximum of 5 numbers allowed",
    },
  },
  socialLinks: {
    type: [socialLinkSchema],
    validate: {
      validator: function (array: SocialLinkType[]) {
        return array.length <= 5; // Maximum of 5 social links allowed
      },
      message: "Maximum of 5 social links allowed",
    },
  },
  gender: {
    type: String,
    enum: GenderType,
    required: true,
  },
  date_of_birth: {
    type: dateOfBirthSchema
  },
});

const UserBasicInfo =
  (mongoose.models.UserBasicInfo as mongoose.Model<UserBasicInfoType>) ||
  mongoose.model<UserBasicInfoType>("UserBasicInfo", UserBasicInfoSchema);
export default UserBasicInfo;
 