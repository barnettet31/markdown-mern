import mongoose, { Schema } from "mongoose";

export interface IVerification extends mongoose.Document {
  expireAt: Date;
  verifyHash: string;
  userRef: Schema.Types.ObjectId;
}
