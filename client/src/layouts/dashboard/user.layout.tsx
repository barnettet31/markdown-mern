import { Navigate, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import styles from  "./userLayout.module.css";
import { useState } from "react";
import { Navigation } from "../../components/navigation/navigation.component";
import { Aside } from "../../components/aside/aside.component";
import { deleteDocument } from "../../api/document.handler";
import { useQueryClient } from "react-query";
export type Preview = {
  preview: boolean;
  setPreview: () => void;
  name:string;
  setName:(d:string)=>void;
  markdown:string;
  setMarkDown:(d:string)=>void;
};
export function usePreview(){
  return useOutletContext<Preview>();
}
export const UserDashboard = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [preview, setPreviewOpen] = useState(true);
  const [markdown, setMarkDown] = useState("");
  const [name, setName] = useState("");
  const setPreview = () => setPreviewOpen(!preview);
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const handleToggle = ()=> setNavOpen(!navOpen);
  const setDocName = (d:string)=>setName(d);
  const setMarkDownChanges = (d: string) => setMarkDown(d);
  const handleSubmit = async (id:string)=>{
    if(!markdown) return;

  }
  const handleDelete = async (id:string| undefined)=>{
    if(!id) return;
    try{
      const response = await deleteDocument(id);
      
      if(response.status ===200){
        queryClient.invalidateQueries('documents')
        navigate('/welcome', {replace:true});
      }
    }
    catch(e){
      if(e instanceof Error)throw new Error(e.message);
      
    }
  }
    return (
      <div
        className={`${styles.gridContainer} ${navOpen ? styles.active : ""}`}>
        <Aside handleToggle={()=>handleToggle()}/>
        <Navigation navOpen={navOpen} handleToggle={() => handleToggle()} handleSubmit={handleSubmit} handleDelete={handleDelete} />
        <main
          className={`${styles.main} ${preview ? styles.previewActive: "" } dark:bg-black text-white bg-secondary-gray grid`}>
          <Outlet context={{ preview, setPreview, name, setName:setDocName, markdown, setMarkDown:setMarkDownChanges }} />
        </main>
      </div>
    );};
