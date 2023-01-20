import express from 'express'
import { createDocument, getDocuments, getDocument, updateDocument, deleteDocument } from '../../controllers/document.controller';


const router = express.Router();

router
.get("/", getDocuments)
.get('/:id', getDocument)
.post("/",createDocument)
.put("/:id",updateDocument)
.delete("/:id",deleteDocument)


export default router;