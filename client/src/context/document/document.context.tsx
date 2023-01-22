import {createContext, useContext, useEffect, useState} from 'react';
import { deleteDocument, getDocument, updateDocument } from '../../api/document.handler';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingIndicator from '../../components/loadingIndicator/loading.component';

interface IContext {
  handleDelete:(id:string)=>void;
  updateMarkDown:(data:string)=>void;
  updateName:(data:string)=>void;
  postUpdate:()=>void;
  name:string;
  markdown:string;
}
const DocumentContext = createContext<IContext>({} as IContext);


export const useDocumentContext = ()=>useContext(DocumentContext);
interface IContextProviderProps{
    children:React.ReactNode;
}
export const DocumentContextProvider = ({children}:IContextProviderProps)=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [markdown, setMarkDown] = useState('');
    const [documentName, setDocumentName] = useState('');
    const { refetch } = useQuery("document", () => getDocument(id), {
      onSuccess: (data) => {
        console.log(data?.document)
        if(data){
          setMarkDown(data.document.content);
          setDocumentName(data.document.name);
        }
      },
    });
    const {isLoading, mutate} = useMutation('updateDocument', ()=>updateDocument(id, {markdown:markdown, name:documentName}), {
      onSuccess:()=>queryClient.invalidateQueries('documents')
    });
    const queryClient = useQueryClient();

    const handleDelete = async (id: string | undefined) => {
      if (!id) return;
      try {
        const response = await deleteDocument(id);
        if (response.status === 200) {
          queryClient.invalidateQueries("documents");
          navigate("/welcome", { replace: true });
        }
      } catch (e) {
        if (e instanceof Error) throw new Error(e.message);
      }
    };

    const updateMarkDown = (data:string)=>setMarkDown(data);
    const updateName = (data: string) => setDocumentName(data);
    const postUpdate =()=>mutate()
    useEffect(()=>{
      console.log(id)
     queryClient.invalidateQueries('document');
    },[id])
    
    return (
      <DocumentContext.Provider
        value={{ handleDelete:handleDelete, updateMarkDown:updateMarkDown, updateName:updateName, postUpdate:postUpdate, name:documentName, markdown }}>
        <>
          {children}
          {isLoading ? <LoadingIndicator /> : null}
        </>
      </DocumentContext.Provider>
    );
}