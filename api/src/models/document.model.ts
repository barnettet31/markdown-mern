import { model, Schema } from "mongoose";
import { IDocument } from "../interfaces/document.interface";

const documentScema = new Schema<IDocument>({
  path:String,
  createdAt: { type: Date, default: Date.now },
});

export default model("Document", documentScema);
