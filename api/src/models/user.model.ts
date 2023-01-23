import { model,  PassportLocalDocument, PassportLocalSchema, Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
export interface IUser extends PassportLocalDocument{
  email: string;
  createdAt: Date;
  documents: string[];
  fullName: string;

}
const UserSchema = new Schema({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  username:{ type: String, required: true, unique: true, lowercase: true},
  createdAt: { type: Date, default: Date.now },
  documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});
UserSchema.pre('save', function(next){
  this.username = this.email;
  next();
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField:'email'
});


export default model("User", UserSchema);
// usermodel.create({
//   fullName: "Travis Barnette",
//   email: "barnette.travis31@gmail.com",
//   password: "@Dalinar2015",
// });
