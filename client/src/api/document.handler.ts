import api from "./api.client";
import { IDocumentResult } from "./api.types";

export const getDocuments = async () => {
    return api.get("/documents");
}
export const getDocument = async (id: string) => {
    const {data}= await api.get<IDocumentResult>(`/documents/${id}`);
    return data;

}
export const createDocument = async (data: any) => {
    return api.post("/documents", data);
}
export const updateDocument = async (id: string, data: any) => {
    return api.put(`/documents/${id}`, data);
}
export const deleteDocument = async (id: string) => {
    return api.delete(`/documents/${id}`);
}