import { AuthForm } from "../../components/authForm/authForm.component";
import { inputData, schema } from "./login.config";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { loginUser, me } from "../../api/user.handler";
import LoadingIndicator from "../../components/loadingIndicator/loading.component";
import { IErrorState } from "../signup/signup.route";
import { useState } from "react";
import ErrorModal from "../../components/error/errorModal.component";
import { setSessionCookie } from "../../context/session";
  const initialState = {
    message: "",
    isError: false,
  };

const LoginPage = () =>
{

  const [error, setError] = useState<IErrorState>(initialState);
  const { state } = useLocation();

  const navigate = useNavigate();
  const { isLoading, mutateAsync, reset } = useMutation("register", loginUser, {
    onSuccess: async ({status}) =>
    {
      if (status === 200)
      {
        const {data, status} = await me();
        if(status !== 200) throw Error("An error occured while trying to get user data");
        setSessionCookie(data).then(() =>setTimeout(()=>navigate("/welcome", { replace: true }),500))
      }
      
    },
    onError: (error) =>
    {
      if (error instanceof Error)
      {
        handleSetError(error.message);
        throw Error("This is my error text");
      }
    },
    retry: 0,

  });
  const handleSetError = (data: string) =>setError({ isError: true, message: data });
  const removeError = () => {
    setError(initialState);
    reset();
  };
  if (error.isError)
    return (
      <ErrorModal
        message={`An error occured while trying to signup! ${error.message}`}
        open={error.isError}
        callback={removeError}
      />
    );

  if (isLoading) return <LoadingIndicator />;
  return (
    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-primary-white">
          Sign in to your account
        </h2>
        {state?.success === true ? (
          <p className="mt-3 text-xs font-bold text-center">
            Please log in to your new account
          </p>
        ) : null}
      </div>
      <AuthForm
        schema={schema}
        submitHandler={mutateAsync}
        inputs={inputData}
      />
    </div>
  );
};

export default LoginPage;
