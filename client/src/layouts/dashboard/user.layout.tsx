import { Outlet } from "react-router-dom";
import { DocumentIcon, TrashIcon, } from "@heroicons/react/24/outline";
import { SaveIcon } from "../../components/saveIcon/saveIcon.component";
import { DashBoardLogo } from "../../components/logo/dashboardLogo.component";
import { MenuIcon } from "../../components/menuIcon/menuIcon.component";
import styles from  "./userLayout.module.css";
import { useState } from "react";
import { Navigation } from "../../components/navigation/navigation.component";
import { Aside } from "../../components/aside/aside.component";
export const UserDashboard = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = ()=> setNavOpen(!navOpen);
    return (
      <div className={`${styles.gridContainer} ${navOpen? styles.active : ""}`}>
        <Aside/>
        <Navigation navOpen={navOpen} handleToggle={()=>handleToggle()}/>
        <main className={`${styles.main} dark:bg-black text-white bg-secondary-gray`}>
          <Outlet />
        </main>
      </div>
    );};
