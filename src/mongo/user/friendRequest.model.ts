import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "./user.model";
import { RequestStatusType } from "@/mongo/types";

export interface FriendRequestType extends Document {
    sender_id: UserType;
    receiver_id: UserType;
    status: RequestStatusType;
}

const friendRequestSchema: Schema<FriendRequestType> = new Schema({
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
        enum: RequestStatusType,
        default: RequestStatusType.PENDING,
    },        
}, {
    timestamps: true,
})

const FriendRequest = (mongoose.models.FriendRequest as mongoose.Model<FriendRequestType>) || mongoose.model<FriendRequestType>("FriendRequest", friendRequestSchema);
export default FriendRequest;