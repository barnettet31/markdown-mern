import styles from "../../layouts/dashboard/userLayout.module.css";
import { Logo } from "../logo/logo.component";
export const Aside = () => {
  return (
    <div
      className={`bg-primary-black flex flex-col justify-between items-center py-7 ${styles.aside}`}>
      <div className="">
        <Logo classes="lg:hidden" />
        <h2 className="text-default text-secondary-gray text-sm leading-4 font-[500] text-left mt-7 lg:mt-0 self-start">
          My Documents
        </h2>
      </div>
    </div>
  );
};
