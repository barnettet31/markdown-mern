import { useQuery } from "react-query";
import { getDocuments } from "../../api/document.handler";
import { DocumentLink } from "../documentLink/documentLink.component";

export const DocumentLinks = ()=>{
    const {data, isLoading, isError, refetch} = useQuery('documents', getDocuments)

    if(isLoading) return <div>Loading...</div>; 
      
    if(isError)return <div onClick={() => refetch()}>
            Ooops something wrong happened... Retry?
          </div>
        
      console.log("docs:",data?.documents);
      if(data){
        return (
          <>
            {data.documents.map(({ createdAt, name, id }) => (
              <DocumentLink key={id} createdAt={new Date(createdAt).toLocaleDateString()} name={name} id={id} />
            ))}
          </>
        ); 
      }
    return <div/>;
}