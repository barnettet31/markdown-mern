import { TrashIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { SaveIcon } from "../saveIcon/saveIcon.component";

export const DocumentControls = ({onClick, onDelete}:{onClick:()=>void, onDelete:()=>void;}) => {
  const { pathname } = useLocation();
  if (pathname === "/welcome") return <div />;
  return (
    <div className="flex items-center gap-6 md:gap-8">
      <TrashIcon onClick={onDelete} className="text-secondary-gray h-5 w-5 hover:text-primary-orange cursor-pointer" />
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center rounded-md border border-transparent bg-primary-orange px-3 md:px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-orange">
        <SaveIcon className="h-4 w-4 md:-ml-1 md:mr-3 md:h-5 md:w-5" />
        <span className="hidden md:inline">Save Changes</span>
      </button>
    </div>
  );
}; 