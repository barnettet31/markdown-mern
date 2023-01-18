import {
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
interface IProps {
logout:()=>void;
}
export const LogoutButton = ({logout}:IProps) => {
  return (
    <button
      type="button"
        onClick={()=>logout()}
      className="inline-flex items-center justify-center w-full py-2 text-white border border-transparent rounded-md shadow-sm bg-primary-orange mt-7 hover:bg-secondary-orange">
      <ArrowRightOnRectangleIcon className="w-3 h-3 md:-ml-1 md:mr-1" />
      <span className="text-sm leading-5 font-default font-regular">
        Logout
      </span>
    </button>
  );
};
