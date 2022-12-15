import { Link, Outlet } from "react-router-dom";
import { Logo } from "../../components/logo/logo.component";
import { HomeNavBar } from "../../components/navbar/homeNavbar.component";

 const HomeLayout = () => {
  return (
    <div>
      <HomeNavBar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;