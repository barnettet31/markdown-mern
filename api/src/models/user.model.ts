import { model, Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const User = new Schema({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  sessions: Array,
  documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});

User.plugin(passportLocalMongoose);
export default model("User", User);
