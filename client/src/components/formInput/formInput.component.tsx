import { UseFormRegister, Path } from "react-hook-form";
import { AuthFormData } from "../authForm/authForm.types";

export interface IInput {
  required: boolean;
  name: Path<AuthFormData>;
  label: string;
}
interface IInputProps extends IInput {
  register: UseFormRegister<AuthFormData>;
}

export const FormTextInput = ({
  required,
  name,
  register,
  label,
}: IInputProps) => {
  const _returnFormInputType = (name: string) => {
    switch (name) {
      case "email":
        return name;
      case "password":
        return name;
      case "confirmEmail":
        return "email";
      case "fullName":
        return "text";
    }
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-primary-white">
        {label}
      </label>
      <div className="mt-1">
        <input
          {...register(name, { required })}
          type={_returnFormInputType(name)}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 dark:placeholder-black shadow-sm sm:text-sm text-black focus:outline-primary-orange"
        />
      </div>
    </div>
  );
};
