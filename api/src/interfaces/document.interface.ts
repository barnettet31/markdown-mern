import mongoose from "mongoose";

export interface IDocument extends mongoose.Document {
    _id:string;
    path:string;
    createdAt: Date;
}