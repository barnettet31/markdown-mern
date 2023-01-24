import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodePage = () => {
  const passportString = `
   app.use(cookieSession({
    name: 'session',
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours

  }));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  `;
  const editorComponent = `
  import Editor, { useMonaco } from "@monaco-editor/react";
import { useTheme } from "../../context/theme.context";
import { useEffect } from "react";

export interface IEditorProps {
  markdown: string | undefined;
  callback: (value: string) => void;
}
export const CodeEditor = ({ markdown, callback }: IEditorProps) => {
  const { darkMode } = useTheme();
  const monaco = useMonaco();
  useEffect(() => {
    function updateEditorTheme() {
      if (monaco)
        return monaco.editor.setTheme(
          darkMode === "dark" ? "vs-dark" : "vs-light"
        );
    }
    updateEditorTheme();
  }, [darkMode]);
  return (
    <Editor
      width={"100%"}
      defaultLanguage="markdown"
      value={markdown}
      options={{
        codeLens: false,
        contextmenu: false,
        fontFamily: "Roboto Mono",
        fontSize: 16,
        minimap: {
          enabled: false,
        },
        scrollBeyondLastLine: false,
        scrollBeyondLastColumn: 0,
        lineNumbers: "off",
        links: false,
        automaticLayout: true,
        padding: {
          top: 16,
          bottom: 16,
        },
        wordWrap: "on",
        renderLineHighlight: "none",
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        scrollbar: {
          vertical: "hidden",
        },
        overviewRulerBorder: false,
      }}
      theme="vs-dark"
      keepCurrentModel={false}
      onChange={(value) => {
        if (!value) return;
        callback(value);
      }}
    />
  );
};`;
const documentContext = `
import {createContext, useContext, useEffect, useState} from 'react';
import { deleteDocument, getDocument, updateDocument } from '../../api/document.handler';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingDashboard } from '../../components/loadingDashboard/loadingDashboard.component';

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
    const { refetch, isFetching } = useQuery(
      ["document", id],
      () => getDocument(id),
      {
        onSuccess: (data) => {
          console.log(data?.document);
          if (data) {
            setMarkDown(data.document.content ?? "# No Content Created So Far");
            setDocumentName(data.document.name);
          }
        },
        onError: (err) => {
          console.log(err);
        },
        staleTime: 300000,
      }
    );
    const {isLoading, mutateAsync} = useMutation('updateDocument', ()=>updateDocument(id, {markdown:markdown, name:documentName}), {
      onSuccess:()=>{
        queryClient.invalidateQueries('documents');
      }
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
    const postUpdate =()=>mutateAsync()
    useEffect(()=>{
     queryClient.invalidateQueries('document');
    },[id]);
    
    return (
      <DocumentContext.Provider
        value={{ handleDelete:handleDelete, updateMarkDown:updateMarkDown, updateName:updateName, postUpdate:postUpdate, name:documentName, markdown }}>
        <>
          {isFetching || isLoading ? <LoadingDashboard /> : children}
        </>
      </DocumentContext.Provider>
    );
}
`;
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-2xl rounded-2xl p-2 flex flex-col gap-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg border-primary-black dark:border-primary-orange border px-4 py-2 text-left text-sm font-medium text-primary-orange hover:bg-primary-orange/20">
                <span>How did you handle the login?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-primary-orange`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-primary-white flex flex-col gap-4">
                <p className="text-2xl">
                  Login was actually handled via session cookie on the backend
                  of the website! I used a library called passport.js that helps
                  authenticate and maintain user sessions. The library actually
                  uses a cookie that's saved on the client side to maintain the
                  user session id, then compares to see if it is valid, and
                  returns if the user is authorized or not! That cookie will be
                  valid for 24 hours! Here's what that code looks like!
                </p>
                <SyntaxHighlighter
                  wrapLines={true}
                  language="typescript"
                  style={nightOwl}>
                  {passportString}
                </SyntaxHighlighter>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg border-primary-black dark:border-primary-orange border px-4 py-2 text-left text-sm font-medium text-primary-orange hover:bg-secondary-orange">
                <span>How did you handle the markdown editing?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-primary-orange`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col gap-4">
                <p className="text-2xl">
                  That's actually the simplest part of the project. All I had to
                  do was use a React component called Monaco that serves as an
                  in browser code editor that you can configure with certain
                  properties, and returns the same kind of function as a
                  standard input would. I received the value from that and then
                  used that to update a react-markdown renderer with the input!
                  I maintained the state of the elements in a higher context so
                  that when the user clicked submit then I would have access to
                  the editted markdown! Here's the context component AND the
                  markdown component!
                </p>
                <SyntaxHighlighter
                  wrapLongLines={true}
                  language="tsx"
                  style={nightOwl}>
                  {documentContext}
                </SyntaxHighlighter>
                <SyntaxHighlighter
                  wrapLongLines={true}
                  language="tsx"
                  style={nightOwl}>
                  {editorComponent}
                </SyntaxHighlighter>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
export default CodePage;
