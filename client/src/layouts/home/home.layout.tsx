import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HomeContainer } from "../../components/containers/home-containers.component";
import { HomeFooter } from "../../components/footer/home-footer.component";
import { HomeNavBar } from "../../components/navbar/homeNavbar.component";

export const HomeLayout = () => {
  return (
    <>
      <HomeNavBar />
      <Suspense fallback={<div>Loading</div>}>
        <HomeContainer>
          <Outlet />
        </HomeContainer>
      </Suspense>
      <HomeFooter />
    </>
  );
};
