import { PlusIcon } from "@heroicons/react/24/outline";
import styles from "../../layouts/dashboard/userLayout.module.css";
import { Logo } from "../logo/logo.component";
import { ThemeSlider } from "../themeSlider/themeSlider.component";
import { LogoutButton } from "../logoutButton/logoutButton.component";
import { logoutUser } from "../../api/user.handler";
import { removeSessionCookie } from "../../context/session";
import {  useNavigate } from "react-router-dom";

import { DocumentLinks } from "../documentLinks/documentLinks.component";
import { createDocument } from "../../api/document.handler";
import { useQueryClient } from "react-query";
interface IProps {
  handleToggle:()=>void;
}
export const Aside = ({handleToggle}:IProps) => {
  const navigation = useNavigate();
  const queryClient = useQueryClient()
  const logout = async() => {
    await logoutUser(); 
    removeSessionCookie();
    navigation('/login', {replace:true})
  }
  const createADocument = async ()=>{
    try{
      const {data} = await createDocument();
      console.log(data);
      queryClient.invalidateQueries('documents');
      handleToggle();
      navigation(`/${data.id}`, {replace:true});

    }catch(e){
      console.log("An Error Occurred while creating the document",e)
    }
  }
  return (
    <div
      className={`bg-primary-black flex flex-col justify-between px-6 py-7 ${styles.aside}`}>
      <div className="flex flex-col gap-4">
        <div className="">
          <Logo classes="lg:hidden" />
          <h2 className="text-default text-secondary-gray text-sm leading-4 font-[500] text-left mt-7 lg:mt-0 self-start">
            My Documents
          </h2>
          <button
            type="button"
            onClick={createADocument}
            className="inline-flex items-center justify-center w-full py-2 text-white border border-transparent rounded-md shadow-sm bg-primary-orange mt-7 hover:bg-secondary-orange">
            <PlusIcon className="w-3 h-3 md:-ml-1 md:mr-1" />
            <span className="text-sm leading-5 font-default font-regular">
              New Document
            </span>
          </button>
        </div>
        <div className="flex flex-col self-start flex-1 py-4 mt-6 overflow-scroll max-h-[500px] md:max-h-[1024px] lg:max-h-[900px] gap-7 scrollbar-hide">
          <DocumentLinks />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <LogoutButton logout={() => logout()} />
        <ThemeSlider />
      </div>
    </div>
  );
};
