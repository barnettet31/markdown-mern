import {  Outlet,  useOutletContext } from "react-router-dom";
import styles from  "./userLayout.module.css";
import {  useState } from "react";
import { Navigation } from "../../components/navigation/navigation.component";
import { Aside } from "../../components/aside/aside.component";
export type Preview = {
  preview: boolean;
  setPreview: () => void;
};
export function usePreview(){
  return useOutletContext<Preview>();
}
export const UserDashboard = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [preview, setPreviewOpen] = useState(true);  
  const setPreview = () => setPreviewOpen(!preview);
  const handleToggle = ()=> setNavOpen(!navOpen);
    return (
      <div
        className={`${styles.gridContainer} ${navOpen ? styles.active : ""}`}>
        <Aside handleToggle={() => handleToggle()} />
        <Navigation
          navOpen={navOpen}
          handleToggle={() => handleToggle()}
        />
        <main
          className={`${styles.main} ${
            preview ? styles.previewActive : ""
          } dark:bg-black text-white bg-white grid h-full`}>
          <Outlet
            context={{
              preview,
              setPreview,
            }}
          />
        </main>
      </div>
    );};
