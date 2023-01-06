import {
  IAuthFormData,
  AuthFormData,
} from "../components/authForm/authForm.types";

export const loginUser = async ({ email, password }: IAuthFormData) => {
  return fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email:email, password:password }),
  });
};

export const registerUser = async ({
  email,
  password,
  fullName,
}: AuthFormData) => {
  return fetch("http://localhost:8080/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, fullName }),
  });
};
