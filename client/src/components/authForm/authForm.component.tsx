import { useForm } from "react-hook-form";
import { AuthFormData } from "./authForm.types";
import { FormTextInput, IInput } from "../formInput/formInput.component";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
interface IAuthFormProps {
  submitHandler: (data: AuthFormData) => void;
  inputs: IInput[];
  schema: z.ZodSchema<AuthFormData>;
}
export const AuthForm = ({ submitHandler, inputs, schema }: IAuthFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<AuthFormData>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(schema),
  });
  const handleOnSubmit = (data: AuthFormData) => {
    submitHandler(data);
    reset();
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white dark:bg-secondary-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(
            (data) => handleOnSubmit(data),
            (data) => console.error({ ...data })
          )}>
          {inputs.map(({ name, required, label }) => (
            <FormTextInput
              key={crypto.randomUUID()}
              required={required}
              label={label}
              name={name}
              register={register}
            />
          ))}
          {errors ? (
            <p className="text-red-900 text-xs">
              {errors.confirmEmail?.message ||
                errors.email?.message ||
                errors.password?.message}
            </p>
          ) : null}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-primary-orange hover:bg-secondary-orange py-2 px-4 text-sm font-medium text-white shadow-sm">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
