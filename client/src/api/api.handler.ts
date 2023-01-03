import {
  IAuthFormData,
  AuthFormData,
} from "../components/authForm/authForm.types";

export const checkLogin = async ({ email, password }: IAuthFormData) => {
  return fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const registerUser = async (data: AuthFormData) => {
  console.log("registerUser", data);
  return fetch("http://localhost:8080/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
