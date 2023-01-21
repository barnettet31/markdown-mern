import { DocumentIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";

export const DocumentLink = ({
  id,
  name,
  createdAt,
}: {
  id: string;
  name: string;
  createdAt: string;
}) => {
  const queryClient = useQueryClient();
  return (
    <Link to={`/${id}`}>
      <div key={id} className="flex items-center gap-4 cursor-pointer group">
        <DocumentIcon className="w-4 h-4 text-white hover:opacity-100" />
        <div>
          <p className="hidden text-sm font-light text-secondary-gray md:inline">
            {createdAt}
          </p>
          <p className="text-sm text-primary-white group-hover:text-primary-orange">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};