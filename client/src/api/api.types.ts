export interface ISignInResult {
    message: string;
    status: number;
}
export interface IUserResult{
    email:string;
    fullName:string;
    id:string;
}
export interface IDocumentResult{
    document:{
        createdAt:string;
        name:string;
        content:string
    }
}
interface IDocumentsElement{
    createdAt:string;
    name:string;
    id:string;
}
export interface IDocumentsResults {
    documents:IDocumentsElement[]
}
export interface ICreateResponse{
    id:string;
}