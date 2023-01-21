import api from "./api.client";
import { ICreateResponse, IDocumentResult, IDocumentsResults } from "./api.types";

export const getDocuments = async () => {
    const { data } = await api.get<IDocumentsResults>("/documents");
    
    return data;
}
export const getDocument = async (id: string | undefined) => {
    if(id === undefined) return;
    const {data}= await api.get<IDocumentResult>(`/documents/${id}`);
    return data;

}
export const createDocument = async () => {
    return api.post<ICreateResponse>("/documents");
}
interface IUpdateData {
    name: string;
    markdown: string;
}
export const updateDocument = async (id: string |undefined, data: IUpdateData) => {
    if(id === undefined) return;
    return api.put(`/documents/${id}`, data);
}
export const deleteDocument = async (id: string) => {
    return api.delete(`/documents/${id}`);
}