import { Suspense} from "react";
import {  Outlet } from "react-router-dom";
import { HomeContainer } from "../../components/containers/home-containers.component";
import { HomeNavBar } from "../../components/navbar/homeNavbar.component";
import { useDarkModePreference } from "../../hooks/darkMode";

export const HomeLayout = () => {
  const { prefersDarkMode } = useDarkModePreference();


  return (
    <div className={prefersDarkMode ? 'dark':""}>
      <HomeNavBar />
      <Suspense fallback={<div>Loading</div>}>
        <HomeContainer>
          <Outlet />
        </HomeContainer>
      </Suspense>
    </div>
  );
};
