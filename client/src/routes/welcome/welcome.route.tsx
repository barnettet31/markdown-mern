import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import styles from '../../layouts/dashboard/userLayout.module.css';
import { usePreview } from '../../layouts/dashboard/user.layout';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import data from '../../data/data.json';
import Editor, { useMonaco } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import {useDarkMode} from '../../hooks/darkMode';
const markdown = data[1].content
export const Welcome = () => {
    const {preview, setPreview} = usePreview();
    const  [darkMode, setDarkMode] = useDarkMode();
    const [myMarkdown, setMyMarkdown] = useState<string | undefined>(markdown);
    const monaco = useMonaco()
    useEffect(()=>{
      function updateEditorTheme() {
        if(monaco) monaco.editor.setTheme(darkMode ? 'vs-dark' : 'vs-light');
      }
      updateEditorTheme();
    },[darkMode]);
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
              className="w-4 cursor-pointer md:hidden hover:text-primary-orange"
            />
          </div>
          <Editor
            width={"100%"}
            defaultLanguage="markdown"
            defaultValue={myMarkdown}
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
            keepCurrentModel={false}
            theme=""
            onChange={(value) => setMyMarkdown(value)}
          />
        </div>
        <div
          className={`dark:bg-primary-black  bg-secondary-white border-r border-gray-100  ${styles.preview}`}>
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
          <ReactMarkdown>{myMarkdown ? myMarkdown : ""}</ReactMarkdown>
        </div>
      </>
    );
}