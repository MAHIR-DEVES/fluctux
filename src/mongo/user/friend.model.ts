import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "./user.model";

export interface FriendType extends Document {
  sender_id: UserType;
  receiver_id: UserType;
}

const friend_schema: Schema<FriendType> = new Schema(
  {
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
  },
  {
    /**
     * createdAt -> friends since
     */
    timestamps: true,
  }
);

const Friend =
  (mongoose.models.Friend as mongoose.Model<FriendType>) ||
  mongoose.model<FriendType>("Friend", friend_schema);
export default Friend;
