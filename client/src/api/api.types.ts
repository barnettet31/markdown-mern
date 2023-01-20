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