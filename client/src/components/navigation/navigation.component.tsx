import { DocumentIcon, TrashIcon } from "@heroicons/react/24/outline";
import { DashBoardLogo } from "../logo/dashboardLogo.component";
import { MenuIcon } from "../menuIcon/menuIcon.component";
import { SaveIcon } from "../saveIcon/saveIcon.component";
import styles from "../../layouts/dashboard/userLayout.module.css";
import { useLocation, useParams } from "react-router-dom";
import { DocumentControls } from "../documentControls/documentControls.component";
import { usePreview } from "../../layouts/dashboard/user.layout";
const CurrentDocument = ()=>{
  const {pathname} = useLocation();
  if(pathname ==='/welcome') return <div/>;
  return (
    <div className="flex gap-4 items-center lg:pl-5 lg:border-l-2 lg:border-gray-500 justify-between">
      <div className="flex items-center gap-4">
        <DocumentIcon className="text-white h-4 w-4 hover:opacity-100" />
        <div>
          <p className="text-secondary-gray text-sm font-light hidden md:inline">
            Document Name
          </p>
          <p className="text-primary-white text-sm">welcome.md</p>
        </div>
      </div>
    </div>
  );
}


export const Navigation = ({
  navOpen,
  handleToggle,
  handleSubmit,
  handleDelete
}: {
  navOpen: boolean;
  handleToggle: () => void;
  handleSubmit:(id:string)=>void;
  handleDelete:(id:string)=>void;
}) => {
  const {id} = useParams();
  return (
    <div
      className={`flex justify-between items-center bg-tertiary-black ${styles.nav}`}>
      <MenuIcon isOpen={navOpen} toggleHandle={() => handleToggle()} />
      <DashBoardLogo />
      <div className="flex justify-between gap-3 md:gap-0 px-4 md:px-5 w-full">
       <CurrentDocument/>
       <DocumentControls onClick={()=>{
        if(id) return handleSubmit(id)

        }} onDelete={()=>{
          if(id) return handleDelete(id);
        }}/>
      </div>
    </div>
  );
};
