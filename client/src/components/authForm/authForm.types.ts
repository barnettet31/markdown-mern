export interface IAuthFormData {
  email: string;
  password: string;
}
export interface AuthFormData extends IAuthFormData {
  confirmEmail?: string;
  fullName?:string;
}
