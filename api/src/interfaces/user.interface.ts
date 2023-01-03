import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  active: boolean;
  email: string;
  password: string;
  fullName: string;
  createdAt: Date;
  sessions:string[];
  documents: string[];
}
