import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const User = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase:true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});

export default model("User", User);
