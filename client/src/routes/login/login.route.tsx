import { AuthForm } from "../../components/authForm/authForm.component";
import { inputData, schema } from "./login.config";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { loginUser, me } from "../../api/user.handler";
import LoadingIndicator from "../../components/loadingIndicator/loading.component";
import { IErrorState } from "../signup/signup.route";
import { useState } from "react";
import ErrorModal from "../../components/error/errorModal.component";
  const initialState = {
    message: "",
    isError: false,
  };

const LoginPage = () =>
{

  const [error, setError] = useState<IErrorState>(initialState);


  const { state } = useLocation();

  const navigate = useNavigate();
  const { isLoading, mutateAsync } = useMutation("register", loginUser, {
    onSuccess: async ({status, data:{message}}) =>
    {
     console.log(status, message);
     if(status === 200) {
      const myUser =  await me();
      console.log("is this the user", myUser)
      if(myUser.status === 200) {
        console.log(myUser.data);
        navigate("/dashboard");
      }
      handleSetError("Something went wrong, please try again later");
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
  const removeError = () => setError(initialState);
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
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-white">
          Sign in to your account
        </h2>
        {state?.success === true ? (
          <p className="font-bold text-xs text-center mt-3">
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
