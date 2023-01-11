import { model, Schema, PassportLocalDocument, PassportLocalSchema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
/**
 * Interface to model the User Schema for TypeScript.
 * @param email: string
 * @param username: string
 * **/
export interface IUser extends PassportLocalDocument{
  email: string;
  createdAt: Date;
  documents: string[];
  fullName: string;

}
const UserSchema = new Schema({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  createdAt: { type: Date, default: Date.now },
  documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});

UserSchema.plugin(passportLocalMongoose);


export default model("Auth", UserSchema, "user");
// usermodel.create({
//   fullName: "Travis Barnette",
//   email: "barnette.travis31@gmail.com",
//   password: "@Dalinar2015",
// });
