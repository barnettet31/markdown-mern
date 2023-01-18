import { Outlet } from "react-router-dom";
import { DocumentIcon, TrashIcon, } from "@heroicons/react/24/outline";
import { SaveIcon } from "../../components/saveIcon/saveIcon.component";
import { DashBoardLogo } from "../../components/logo/dashboardLogo.component";
import { MenuIcon } from "../../components/menuIcon/menuIcon.component";
import styles from  "./userLayout.module.css";
import { useState } from "react";
export const UserDashboard = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = ()=> setNavOpen(!navOpen);
    return (
      <div className={`${styles.gridContainer} ${navOpen? styles.active : ""}`}>
        <div className={`bg-primary-black flex flex-col justify-between items-center py-7 ${styles.aside}`}>
          <h2 className="text-default text-secondary-gray text-sm leading-4 font-[500] text-center">My Documents</h2>
        </div>
        <div className={`flex justify-between items-center bg-tertiary-black ${styles.nav}`}>
          <MenuIcon isOpen={navOpen} toggleHandle={()=>handleToggle()}/>
          <DashBoardLogo />
          <div className="flex justify-between gap-3 md:gap-0 px-4 md:px-5 w-full">
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
            <div className="flex items-center gap-6 md:gap-8">
              <TrashIcon className="text-secondary-gray h-5 w-5 hover:text-primary-white cursor-pointer" />
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-primary-orange px-3 md:px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-orange">
                <SaveIcon className="h-4 w-4 md:-ml-1 md:mr-3 md:h-5 md:w-5" />
                <span className="hidden md:inline">Save Changes</span>
              </button>
            </div>
          </div>
        </div>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    );};
