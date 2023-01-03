import mongoose, { model, Schema } from "mongoose";
import { IVerification } from "../interfaces/verification.interface";

const Verification = new Schema<IVerification>({
  userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  verifyHash: String,
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: "5m" },
  },
});

export default model("Verification", Verification);
