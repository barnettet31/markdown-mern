import { model, Schema } from "mongoose";
import { IDocument } from "../interfaces/document.interface";

const documentScema = new Schema<IDocument>({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  content: { type: String, required: true },
});

export default model("Document", documentScema);
