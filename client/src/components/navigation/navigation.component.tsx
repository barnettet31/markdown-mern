import { DashBoardLogo } from "../logo/dashboardLogo.component";
import { MenuIcon } from "../menuIcon/menuIcon.component";
import styles from "../../layouts/dashboard/userLayout.module.css";
import {  Link, useParams } from "react-router-dom";
import { DocumentControls } from "../documentControls/documentControls.component";
import { useState } from "react";
import { DeleteConfirmation } from "../deleteConfirmation/deleteConfirmation.component";
import { CurrentDocument } from "../currentDocument/currentDocument.component";
import { useDocumentContext } from "../../context/document/document.context";



export const Navigation = ({
  navOpen,
  handleToggle,
}: {
  navOpen: boolean;
  handleToggle: () => void;
}) => {
  const [showDelete, setDelete] = useState(false);
  const {handleDelete, postUpdate, name, updateName} = useDocumentContext();
  const { id } = useParams();
  const toggleDelete = () => {
    if(!id) return
    setDelete(false);
    handleDelete(id);
  };
  return (
    <div
      className={`flex justify-between items-center bg-tertiary-black ${styles.nav}`}>
      <MenuIcon isOpen={navOpen} toggleHandle={() => handleToggle()} />
      <Link to="/welcome">
        <DashBoardLogo />
      </Link>
      <div className="flex justify-between gap-3 md:gap-0 px-4 md:px-5 w-full">
        <CurrentDocument handleChange={(d) => updateName(d)} name={name} />
        <DocumentControls
          onClick={() => {
            if (id) return postUpdate();
          }}
          onDelete={() => setDelete(true)}
        />
        <DeleteConfirmation
          confirmDelete={() => toggleDelete()}
          cancelDelete={() => setDelete(false)}
          isDelete={showDelete}
        />
      </div>
    </div>
  );
};
