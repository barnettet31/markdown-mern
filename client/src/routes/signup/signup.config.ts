import { z } from "zod";
import { IInput } from "../../components/formInput/formInput.component";

const SignUpSchema = z
  .object({
    email: z.string().email({ message: "Enter A Valid Email" }),
    confirmEmail: z.string().email({ message: "Invalid Confirmation Email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(15, { message: "Password cannot be longer than 15 characters" }),
    fullName: z.string(),
  })
  .required()
  .refine((data) => data.confirmEmail === data.email, {
    path: ["confirmEmail"],
    message: "Emails Must Match",
  });

const inputs: IInput[] = [
  { required: true, name: "fullName", label: "Full Name" },
  {
    required: true,
    name: "email",
    label: "E-mail",
  },
  {
    required: true,
    name: "confirmEmail",
    label: "Confirm E-mail",
  },
  {
    required: true,
    name: "password",
    label: "Password",
  },
];

export { SignUpSchema as schema, inputs as inputData };
