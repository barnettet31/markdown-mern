import { DashBoardLogo } from "../logo/dashboardLogo.component";
import { MenuIcon } from "../menuIcon/menuIcon.component";
import styles from "../../layouts/dashboard/userLayout.module.css";
import {  useParams } from "react-router-dom";
import { DocumentControls } from "../documentControls/documentControls.component";
import { useState } from "react";
import { DeleteConfirmation } from "../deleteConfirmation/deleteConfirmation.component";
import { CurrentDocument } from "../currentDocument/currentDocument.component";



export const Navigation = ({
  navOpen,
  handleToggle,
  handleSubmit,
  handleDelete
}: {
  navOpen: boolean;
  handleToggle: () => void;
  handleSubmit:(id:string)=>void;
  handleDelete:(id:string | undefined)=>void;
}) => {
  const [showDelete, setDelete] = useState(false);
  const {id} = useParams();
  const toggleDelete =()=>{
    setDelete(false);
    handleDelete(id);
  }
  return (
    <div
      className={`flex justify-between items-center bg-tertiary-black ${styles.nav}`}>
      <MenuIcon isOpen={navOpen} toggleHandle={() => handleToggle()} />
      <DashBoardLogo />
      <div className="flex justify-between gap-3 md:gap-0 px-4 md:px-5 w-full">
       <CurrentDocument documentName="document.md" handleChange={(value)=>console.log(value)}/>
       <DocumentControls onClick={()=>{
        if(id) return handleSubmit(id)

        }} onDelete={()=>setDelete(true)}/>
         <DeleteConfirmation confirmDelete={()=>toggleDelete()} cancelDelete={()=>setDelete(false)} isDelete={showDelete}/>
      </div>
    </div>
  );
};
