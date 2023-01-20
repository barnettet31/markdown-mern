import express from 'express'
import { createDocument, getDocuments, getDocument, updateDocument, deleteDocument } from '../../controllers/document.controller';


const router = express.Router();

router
.get("/documents", getDocuments)
.get('/documents/:id', getDocument)
.post("/documents",createDocument)
.put("/documents/:id",updateDocument)
.delete("/documents/:id",deleteDocument)


export default router;