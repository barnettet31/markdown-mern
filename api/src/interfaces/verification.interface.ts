import mongoose, { Schema } from "mongoose";

export interface IVerification extends mongoose.Document {
  expireAt: Date;
  session: string;
  userRef: Schema.Types.ObjectId;
}
