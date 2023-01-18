import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const MenuIcon = ({
  toggleHandle,
  isOpen,
}: {
  toggleHandle: () => void;
  isOpen: boolean;
}) => {

  return (
    <div
      onClick={() => toggleHandle()}
      className="flex items-center justify-center bg-[#35393F] cursor-pointer flex-auto h-[72px] w-[72px]">
      {isOpen ? (
        <XMarkIcon className="h-[30px] w-[30px] text-white" />
      ) : (
        <Bars3Icon className="h-[30px] w-[30px] text-white" />
      )}
    </div>
  );
};
