import { DocumentIcon, TrashIcon } from "@heroicons/react/24/outline";
import { DashBoardLogo } from "../logo/dashboardLogo.component";
import { MenuIcon } from "../menuIcon/menuIcon.component";
import { SaveIcon } from "../saveIcon/saveIcon.component";
import styles from "../../layouts/dashboard/userLayout.module.css";
import { useLocation } from "react-router-dom";
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

const DocumentControls = ()=>{
  const {pathname} = useLocation();
  if(pathname ==='/welcome') return <div/>
  return (
    <div className="flex items-center gap-6 md:gap-8">
      <TrashIcon className="text-secondary-gray h-5 w-5 hover:text-primary-orange cursor-pointer" />
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-primary-orange px-3 md:px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-orange">
        <SaveIcon className="h-4 w-4 md:-ml-1 md:mr-3 md:h-5 md:w-5" />
        <span className="hidden md:inline">Save Changes</span>
      </button>
    </div>
  );
}
export const Navigation = ({
  navOpen,
  handleToggle,
}: {
  navOpen: boolean;
  handleToggle: () => void;
}) => {
  const location = useLocation();
  return (
    <div
      className={`flex justify-between items-center bg-tertiary-black ${styles.nav}`}>
      <MenuIcon isOpen={navOpen} toggleHandle={() => handleToggle()} />
      <DashBoardLogo />
      <div className="flex justify-between gap-3 md:gap-0 px-4 md:px-5 w-full">
       <CurrentDocument/>
       <DocumentControls/>
      </div>
    </div>
  );
};
