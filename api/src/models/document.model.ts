import { model, Schema } from "mongoose";
import { IDocument } from "../interfaces/document.interface";

const documentScema = new Schema<IDocument>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true, default:"untitled.md" },
  createdAt: { type: Date, default: Date.now },
  content: { type: String, },
});

export default model<IDocument>("Document", documentScema);
