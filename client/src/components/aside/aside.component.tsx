import {  DocumentIcon, PlusIcon } from "@heroicons/react/24/outline";
import styles from "../../layouts/dashboard/userLayout.module.css";
import { Logo } from "../logo/logo.component";
import { ThemeSlider } from "../themeSlider/themeSlider.component";
import { LogoutButton } from "../logoutButton/logoutButton.component";
import { logoutUser } from "../../api/user.handler";
import { removeSessionCookie } from "../../context/session";
import {  useNavigate } from "react-router-dom";

export const Aside = () => {
  const navigation = useNavigate()
  const logout = async() => {
    await logoutUser(); 
    removeSessionCookie();
    navigation('/login', {replace:true})
  }//TODO implement logout
  return (
    <div
      className={`bg-primary-black flex flex-col justify-between px-6 py-7 ${styles.aside}`}>
      <div className="">
        <Logo classes="lg:hidden" />
        <h2 className="text-default text-secondary-gray text-sm leading-4 font-[500] text-left mt-7 lg:mt-0 self-start">
          My Documents
        </h2>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full py-2 text-white border border-transparent rounded-md shadow-sm bg-primary-orange mt-7 hover:bg-secondary-orange">
          <PlusIcon className="w-3 h-3 md:-ml-1 md:mr-1" />
          <span className="text-sm leading-5 font-default font-regular">
            New Document
          </span>
        </button>
      </div>
      <div className="flex flex-col self-start flex-1 py-4 mt-6 overflow-scroll max-h-[500px] md:max-h-[1024px] lg:max-h-[900px] gap-7 scrollbar-hide">
        {Array(25).fill(1).map((dta) => (
          <div key={dta + Math.random()} className="flex items-center gap-4 cursor-pointer group">
            <DocumentIcon className="w-4 h-4 text-white hover:opacity-100" />
            <div>
              <p className="hidden text-sm font-light text-secondary-gray md:inline">
                Document Name
              </p>
              <p className="text-sm text-primary-white group-hover:text-primary-orange">
                welcome.md
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <LogoutButton logout={() => logout()} />
        <ThemeSlider />
      </div>
    </div>
  );
};
