import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "./user.model";

export interface FriendRequestType extends Document {
    sender_id: UserType;
    receiver_id: UserType;
    status: string;
}

const friendRequest_schema: Schema<FriendRequestType> = new Schema({
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
        enum: ["PENDING", "ACCEPTED", "REJECTED"],
        default: "PENDING",
    },        
}, {
    timestamps: true,
})

const FriendRequest = (mongoose.models.FriendRequest as mongoose.Model<FriendRequestType>) || mongoose.model<FriendRequestType>("FriendRequest", friendRequest_schema);
export default FriendRequest;