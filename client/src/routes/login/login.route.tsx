import { SubmitHandler } from "react-hook-form";
import { AuthForm } from "../../components/authForm/authForm.component";
import { AuthFormData } from "../../components/authForm/authForm.types";
import { inputData, schema } from "./login.config";

const LoginPage = () => {
  const submitHandler: SubmitHandler<AuthFormData> = (data) =>
    alert(JSON.stringify(data));

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-white">
          Sign in to your account
        </h2>
      </div>
      <AuthForm
        schema={schema}
        submitHandler={submitHandler}
        inputs={inputData}
      />
    </div>
  );
};

export default LoginPage;
