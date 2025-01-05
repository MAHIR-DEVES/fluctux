import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "./user.model";

type NumberType = {
  number: string;
  visibility: string;
  number_type: string;
};

type SocialLinkType = {
  link: string;
  social_media: string;
  visibility: string;
};

type DateOfBirthType = {
  day_month: string;
  year: string;
  visibility: string;
};

export interface UserBasicInfoType extends Document {
  user: UserType;
  numbers: NumberType[];
  socialLinks: SocialLinkType[];
  gender: string;
  date_of_birth: DateOfBirthType;
}

const NumberSchema: Schema<NumberType> = new Schema({
  number: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    enum: ["ORG", "FRIEND", "PUBLIC", "PRIVATE"],
    required: true,
  },
  number_type: {
    type: String,
    enum: ["PRIMARY", "LOCAL"],
    required: true,
  },
});

const SocialLinkSchema: Schema<SocialLinkType> = new Schema({
  link: {
    type: String,
    required: true,
  },
  social_media: {
    type: String,
    enum: ["FACEBOOK", "TWITTER", "INSTAGRAM", "LINKEDIN", "GITHUB"],
    required: true,
  },
  visibility: {
    type: String,
    enum: ["ORG", "FRIEND", "PUBLIC", "PRIVATE"],
    required: true,
  },
});

const UserBasicInfoSchema: Schema<UserBasicInfoType> = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  numbers: {
    type: [NumberSchema],
    validate: {
      validator: function (array: NumberType[]) {
        return array.length <= 5; // Maximum of 5 numbers allowed
      },
      message: "Maximum of 5 numbers allowed",
    },
  },
  socialLinks: {
    type: [SocialLinkSchema],
    validate: {
      validator: function (array: SocialLinkType[]) {
        return array.length <= 5; // Maximum of 5 social links allowed
      },
      message: "Maximum of 5 social links allowed",
    },
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "CUSTOM"],
    required: true,
  },
  date_of_birth: {
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
      enum: ["ORG", "FRIEND", "PUBLIC", "PRIVATE"],
      required: true,
    },
  },
});

const UserBasicInfo =
  (mongoose.models.UserBasicInfo as mongoose.Model<UserBasicInfoType>) ||
  mongoose.model<UserBasicInfoType>("UserBasicInfo", UserBasicInfoSchema);
export default UserBasicInfo;
 