import { IAuthFormData } from "../components/authForm/authForm.types";

export const checkLogin = async ({ email, password }: IAuthFormData) => {
  return fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const registerUser = async ({ email, password }: IAuthFormData) => {
  const data = JSON.stringify({ email, password });
  console.log(data);
  return fetch("http://localhost:8080/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
};
