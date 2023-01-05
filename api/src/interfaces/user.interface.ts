import mongoose from "mongoose";

export interface IUserDocument extends mongoose.Document {
  active: boolean;
  email: string;
  password: string;
  fullName: string;
  createdAt: Date;
  sessions:AuthToken[];
  documents: string[];
  comparePassword:comparePasswordFunction;
}
export interface AuthToken {
  accessToken:string;
  kind:string;
}
export type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => void) => void;