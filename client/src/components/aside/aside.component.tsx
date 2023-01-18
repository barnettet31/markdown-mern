import { PlusIcon } from "@heroicons/react/24/outline";
import styles from "../../layouts/dashboard/userLayout.module.css";
import { Logo } from "../logo/logo.component";
import { ThemeSlider } from "../themeSlider/themeSlider.component";
export const Aside = () => {
  return (
    <div
      className={`bg-primary-black flex flex-col justify-between px-6 py-7 ${styles.aside}`}>
      <div className="">
        <Logo classes="lg:hidden" />
        <h2 className="text-default text-secondary-gray text-sm leading-4 font-[500] text-left mt-7 lg:mt-0 self-start">
          My Documents
        </h2>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-primary-orange py-2 mt-7 w-full justify-center text-white shadow-sm hover:bg-secondary-orange">
          <PlusIcon className="h-3 w-3 md:-ml-1 md:mr-1" />
          <span className="text-sm leading-5 font-default font-regular">
            Save Changes
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-7"></div>
      <ThemeSlider/>
    </div>
  );
};
