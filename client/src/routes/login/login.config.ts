import { z } from "zod";
import { IInput } from "../../components/formInput/formInput.component";

const LoginSchema = z
  .object({
    email: z.string().email({ message: "Enter A Valid Email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(15, { message: "Password cannot be longer than 15 characters" }),
  })
  .required();

const inputs: IInput[] = [
  {
    required: true,
    name: "email",
    label: "E-mail",
  },
  {
    required: true,
    name: "password",
    label: "Password",
  },
];

export { LoginSchema as schema, inputs as inputData };
