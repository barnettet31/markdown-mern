import { useQuery } from "react-query";
import { getDocuments } from "../../api/document.handler";
import { DocumentLink } from "../documentLink/documentLink.component";

export const DocumentLinks = ()=>{
    const {data, isLoading, isError, refetch} = useQuery('documents', getDocuments)

    if(isLoading) return <div>Loading...</div>; 
      
    if(isError)return <div onClick={() => refetch()}>
            Ooops something wrong happened... Retry?
          </div>
      if(data?.documents){
        return (
          <>
            {data.documents.length > 0 ? (data.documents.map(({ createdAt, name, id }) => (
              <DocumentLink key={id} createdAt={new Date(createdAt).toLocaleDateString()} name={name} id={id} />
            ))) : <p className="text-white text-base">No current documents</p>}
          </>
        ); 
      }
    return <div/>;
}