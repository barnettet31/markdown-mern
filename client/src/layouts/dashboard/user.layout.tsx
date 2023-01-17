import { Outlet } from "react-router-dom";
import {Bars3Icon, DocumentIcon, TrashIcon, } from "@heroicons/react/24/outline";
import { SaveIcon } from "../../components/saveIcon/saveIcon.component";
import { DashBoardLogo } from "../../components/logo/dashboardLogo.component";
import { MenuIcon } from "../../components/menuIcon/menuIcon.component";
export const UserDashboard = () => {
    return (
      <div>
        <div className="flex justify-between items-center bg-tertiary-black">
          <MenuIcon/>
          <DashBoardLogo />
          <div className="flex justify-between gap-3 md:gap-0 px-2 md:px-5 w-full">
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
        <main>
          <Outlet />
        </main>
      </div>
    );};
