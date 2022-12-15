import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { Logo } from "../../components/logo/logo.component";
import { HomeNavBar } from "../../components/navbar/homeNavbar.component";

export const HomeLayout = () => {
  return (
    <div>
      <HomeNavBar />
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
