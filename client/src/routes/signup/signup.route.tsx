import { AuthForm } from "../../components/authForm/authForm.component";
import { schema, inputData } from "./signup.config";
import { useMutation } from "react-query";
import { registerUser } from "../../api/api.handler";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../components/loadingIndicator/loading.component";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isLoading, mutateAsync } = useMutation("register", registerUser, {
    onSuccess: async (data) => {
      navigate("/login", { state: { success: true } });
    },
    onError: (error) => {
      throw Error("This is my error text");
    },
  });
  if (isLoading) return <LoadingIndicator />;
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-white">
          Sign Up For An Account
        </h2>
      </div>
      <AuthForm
        schema={schema}
        submitHandler={mutateAsync}
        inputs={inputData}
      />
    </div>
  );
};

export default SignUpPage;
