import { AuthForm } from "../../components/authForm/authForm.component";
import { schema, inputData } from "./signup.config";
import { useMutation } from "react-query";
import { registerUser } from "../../api/api.handler";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isLoading, mutateAsync } = useMutation("register", registerUser, {
    onSuccess: async (data) => {
      const json = await data.json();
      console.log(json);
      navigate("/login", { state: { success: true } });
    },
    onError: (error) => console.log(error),
  });
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-white">
          Sign Up For An Account
        </h2>
      </div>
      {isLoading ? (
        <p className="text-bold text-white text-md">Loading...</p>
      ) : (
        <AuthForm
          schema={schema}
          submitHandler={mutateAsync}
          inputs={inputData}
        />
      )}
    </div>
  );
};

export default SignUpPage;
