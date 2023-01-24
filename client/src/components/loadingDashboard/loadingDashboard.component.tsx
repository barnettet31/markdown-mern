import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon } from "../menuIcon/menuIcon.component";
import { DashBoardLogo } from "../logo/dashboardLogo.component";
import { DocumentIcon } from "@heroicons/react/24/outline";

export const LoadingDashboard = () => {
  return (
    <div>
      <div className={`flex justify-between items-center bg-tertiary-black`}>
        <MenuIcon isOpen={false} toggleHandle={() => null} />

        <DashBoardLogo />

        <div className="flex justify-between gap-3 md:gap-0 px-4 md:px-5 w-full">
          <div className="flex gap-4 items-center lg:pl-5 lg:border-l-2 lg:border-gray-500 justify-between">
            <div className="flex items-center gap-4">
              <DocumentIcon className="text-white h-4 w-4 hover:opacity-100" />
              <div className="rounded-md px-3 py-2">
                <div className="block w-12 text-sm font-default font-light leading-4 text-secondary-gray bg-secondary-gray rounded animate-pulse"></div>
                <div className="block w-16 bg-transparent border-0 rounded animate-pulse p-2 text-white outline-none placeholder-white sm:text-sm border-b-primary-orange border-b" />
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={true}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 ">
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/75 z-20">
          <svg
            className="animate-spin h-20 w-20 text-primary-orange"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </Transition>
    </div>
  );
};
