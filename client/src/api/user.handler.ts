import {
  IAuthFormData,
  AuthFormData,
} from "../components/authForm/authForm.types";
import api from "./api.client";
import { ISignInResult, IUserResult } from "./api.types";

export const loginUser = async ({ email, password }: IAuthFormData) => {
  return api.post<ISignInResult>("/users/login", { username: email, password });
};


export const registerUser = async ({
  email,
  password,
  fullName,
}: AuthFormData) => {
  return api.post("/users/register", { email, password, fullName });
};

export const logoutUser = async () => {
  return api.post("/users/logout");
}
export const me = async () => {
  return api.get<IUserResult>("/users/me");
}
