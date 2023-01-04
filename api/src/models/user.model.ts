import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
const SALT_ROUNDS = 10;
import bcrypt from "bcrypt";
const User = new Schema<IUser>({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  sessions: [{ type: Schema.Types.ObjectId, ref: "Verification" }],
  documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});
User.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
});
export default model("User", User);
