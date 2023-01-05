import mongoose, { model, Schema } from "mongoose";
import { IUserDocument, comparePasswordFunction } from "../interfaces/user.interface";
const SALT_ROUNDS = 10;
import bcrypt from "bcrypt";
const User = new Schema<IUserDocument>({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  sessions: Array,
  documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});
User.pre("save", async function (next) {
  const user = this as IUserDocument;
  if (!user.isModified("password")) {return next();}
  bcrypt.genSalt(SALT_ROUNDS, (err, salt)=>{
    if(err) return next(err);
    bcrypt.hash(user.password, salt).then((hash)=>user.password = hash).catch((err:mongoose.Error)=>next(err))
  })
});

const comparePassword:comparePasswordFunction = function(this: any, potentialPassword, callback){
  bcrypt.compare(potentialPassword, this.password, (err, isMatch)=>{
    callback(err, isMatch)
  })
}
User.methods.comparePassword = comparePassword;
export default model("User", User);
