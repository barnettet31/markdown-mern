import mongoose from "mongoose";

export interface IDocument extends mongoose.Document {
    _id:string;
    name:string;
    createdAt: Date;
    content: string;
}