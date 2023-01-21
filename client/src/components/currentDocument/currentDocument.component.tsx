import { DocumentIcon } from "@heroicons/react/24/outline";
import { useLocation, useParams } from "react-router-dom";
import { getDocument } from "../../api/document.handler";
import { useQuery } from "react-query";
interface IProps {
  documentName: string;
  handleChange: (value: string) => void;
}
export const CurrentDocument = ({ documentName, handleChange }: IProps) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    "document",
    () => getDocument(id),
    { enabled: id !== "welcome" }
  );
  if (pathname === "/welcome") return <div />;
  if (isLoading)
    return (
      <div className="flex gap-4 items-center lg:pl-5 lg:border-l-2 lg:border-gray-500 justify-between">
        <div className="flex items-center gap-4">
          <DocumentIcon className="text-white h-4 w-4 hover:opacity-100" />
          <div className="rounded-md px-3 py-2">
            <div className="block text-sm font-default font-light rounded animate-pulse"></div>
            <div className="block w-full bg-transparent border-0 p-0 animate-pulse rounded" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex gap-4 items-center lg:pl-5 lg:border-l-2 lg:border-gray-500 justify-between">
      <div className="flex items-center gap-4">
        <DocumentIcon className="text-white h-4 w-4 hover:opacity-100" />
        <div className="rounded-md px-3 py-2">
          <label
            htmlFor="name"
            className="block text-sm font-default font-light leading-4 text-secondary-gray">
            Document Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full bg-transparent border-0 p-0 text-white outline-none placeholder-white sm:text-sm focus-within:border-b-primary-orange focus-within:border-b"
            value={data?.document.name}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
