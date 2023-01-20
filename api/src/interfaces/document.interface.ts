import mongoose, { ObjectId } from "mongoose";
interface IDocumentData{
    name: string;
    createdAt: Date;
    content: string;
    user: ObjectId;
}
export interface IDocument extends mongoose.Document, IDocumentData {
    
}