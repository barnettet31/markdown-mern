import { useParams } from "react-router-dom";
import styles from "../../layouts/dashboard/userLayout.module.css";
import { usePreview } from "../../layouts/dashboard/user.layout";
import { useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { CodeEditor } from "../../components/codeEditor/codeEditor.component";
import { MarkDown } from "../../components/markdown/markdown.component";
import { getDocument } from "../../api/document.handler";
import { useQuery } from "react-query";
import { ErrorPage } from "../../components/errorPage/errorPageComponent";
import { useDocumentContext } from "../../context/document/document.context";
export const UserDocument = () => {
  const [myMarkdown, setMyMarkdown] = useState<string | undefined>("");
  const { id } = useParams();
  const {updateMarkDown} = useDocumentContext()
  const { isLoading, data, isError, error, refetch } = useQuery(
    "document",
    () => getDocument(id),
    {
      onSuccess: (data) => {
        if(data){
          if(data.document){
            updateMarkDown(data.document.content);
            setMyMarkdown(data.document.content)
          }
        }
      },
    }
  );
  useEffect(()=>{
    refetch()
  },[id])
  const { preview, setPreview } = usePreview();
  if (isLoading) return <div>Loading....</div>;

  if (data?.document)
    return (
      <>
        <div
          className={`dark:bg-primary-black flex flex-col min-w-[50vw] bg-secondary-white border-r border-quaternary-gray dark:border-primary-gray ${
            styles.editor
          } ${preview ? "hidden" : ""}`}>
          <div className="flex gap-4 justify-between min-w-full px-4 py-3 dark:bg-secondary-black bg-primary-white">
            <h2 className="text-sm leading-4 text-default dark:text-tertiary-gray text-secondary-gray">
              MARKDOWN
            </h2>
            <EyeIcon
              onClick={() => setPreview()}
              className="w-4 cursor-pointer md:hidden text-secondary-gray dark:text-tertiary-gray hover:text-primary-orange"
            />
          </div>
          <CodeEditor
            markdown={myMarkdown}
            callback={(v) => {
              updateMarkDown(v);
              setMyMarkdown(v);
            }}
          />
        </div>
        <div
          className={`min-w-[50vw] dark:bg-primary-black  bg-secondary-white border-r border-gray-100  ${styles.preview}`}>
          <div className="flex justify-between w-full px-4 py-3 dark:bg-secondary-black bg-primary-white">
            <h2 className="text-sm leading-4 text-default dark:text-tertiary-gray text-secondary-gray">
              PREVIEW
            </h2>
            {preview ? (
              <EyeSlashIcon
                onClick={() => setPreview()}
                className="w-4 cursor-pointer hover:text-primary-orange"
              />
            ) : (
              <EyeIcon
                onClick={() => setPreview()}
                className="w-4 cursor-pointer hover:text-primary-orange"
              />
            )}
          </div>
          <MarkDown markdown={myMarkdown} />
        </div>
      </>
    );
  if (isError) return <ErrorPage />;
  return <ErrorPage />;
};
