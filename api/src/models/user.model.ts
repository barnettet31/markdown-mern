import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const User = new Schema<IUser>({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  sessions:[{type:String}],
  documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});

export default model("User", User);
