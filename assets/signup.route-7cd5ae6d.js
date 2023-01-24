import{r as g,c as d,d as f,a as s,e as E,j as h,g as p}from"./index-d3d00194.js";import{m as a,E as x,A as b}from"./errorModal.component-fc36740b.js";const w=a.object({email:a.string().email({message:"Enter A Valid Email"}),confirmEmail:a.string().email({message:"Invalid Confirmation Email"}),password:a.string().min(6,{message:"Password must be at least 6 characters"}).max(15,{message:"Password cannot be longer than 15 characters"}),fullName:a.string()}).required().refine(e=>e.confirmEmail===e.email,{path:["confirmEmail"],message:"Emails Must Match"}),y=[{required:!0,name:"fullName",label:"Full Name"},{required:!0,name:"email",label:"E-mail"},{required:!0,name:"confirmEmail",label:"Confirm E-mail"},{required:!0,name:"password",label:"Password"}],i={message:"",isError:!1},N=()=>{const[e,t]=g.exports.useState(i),n=d(),{isLoading:m,mutateAsync:o,reset:l}=f("register",p,{onSuccess:async({status:r})=>{n("/login",{state:{success:!0}})},onError:r=>{if(r instanceof Error)throw c(r.message),Error("This is my error text")}}),c=r=>t({isError:!0,message:r}),u=()=>{t(i),l()};return e.isError?s(x,{message:`An error occured while trying to signup! ${e.message}`,open:e.isError,callback:u}):m?s(E,{}):h("div",{className:"flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8",children:[s("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:s("h2",{className:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-white",children:"Sign Up For An Account"})}),s(b,{schema:w,submitHandler:o,inputs:y})]})};export{N as default};
