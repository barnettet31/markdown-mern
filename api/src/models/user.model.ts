import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { UserModel, IUserDocument } from "../interfaces/user.interface";
import usermodel from "./user.model";
const UserSchema = new Schema<IUserDocument, UserModel>({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  sessions: Array,
  documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});

UserSchema.pre("save", async function (this, next: Function) {
  if (!this.isModified("password")) next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (enteredPassword: string) {
  const user = await usermodel
    .findOne({ username: this.email })
    .select("password");
  return await bcrypt.compare(enteredPassword, user!.password);
};

export default model("User", UserSchema);
// usermodel.create({
//   fullName: "Travis Barnette",
//   email: "barnette.travis31@gmail.com",
//   password: "@Dalinar2015",
// });
