import { AuthForm } from "../../components/authForm/authForm.component";
import { schema, inputData } from "./signup.config";
import { useMutation } from "react-query";
import { registerUser } from "../../api/user.handler";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../components/loadingIndicator/loading.component";
import { useState } from "react";
import ErrorModal from "../../components/error/errorModal.component";
export interface IErrorState{
  message:string;
  isError:boolean;
}
const initialState = {
  message:'',
  isError:false
}
const SignUpPage = () => {
  const [error, setError] = useState<IErrorState>(initialState);
  const navigate = useNavigate();
  const { isLoading, mutateAsync, reset } = useMutation("register", registerUser, {
    onSuccess: async ({status}) => {
      navigate("/login", { state: { success: true } });
    },
    onError: (error) => {
      if(error instanceof Error){
        handleSetError(error.message);
        throw Error("This is my error text",);
      }
    },
  });
  const handleSetError=(data:string)=>setError({isError:true,message:data});
  const removeError = ()=>{
    setError(initialState);
    reset();
  
  }
  
  if(error.isError) return <ErrorModal message={`An error occured while trying to signup! ${error.message}`} open={error.isError} callback={removeError}/>
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
