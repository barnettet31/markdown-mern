import mongoose, { Model } from "mongoose";

export interface IUserDocument {
  active: boolean;
  email: string;
  password: string;
  fullName: string;
  createdAt: Date;
  sessions: AuthToken[];
  documents: string[];
  comparePassword: (enteredPassword: string) => Promise<boolean>;
}
export interface AuthToken {
  accessToken: string;
  kind: string;
}

export interface UserModel extends Model<IUserDocument> {}
