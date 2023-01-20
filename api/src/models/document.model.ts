import { model, Schema } from "mongoose";
import { IDocument } from "../interfaces/document.interface";

const documentScema = new Schema<IDocument>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  content: { type: String, },
});

export default model("Document", documentScema);
