import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "./user.model";

export interface AddressType extends Document {
  user: UserType;
  city: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  postal_code: string;
  state: string;
  street: string;
  visibility: string;
}

const address_schema: Schema<AddressType> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    city: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    country_code: {
      type: String,
      required: true,
    },

    latitude: {
      type: Number,
      required: true,
    },

    longitude: {
      type: Number,
      required: true,
    },

    postal_code: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },

    visibility: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Address =
  (mongoose.models.Address as mongoose.Model<AddressType>) ||
  mongoose.model<AddressType>("Address", address_schema);
export default Address;
