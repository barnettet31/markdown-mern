import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import styles from '../../layouts/dashboard/userLayout.module.css';
import { usePreview } from '../../layouts/dashboard/user.layout';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import data from '../../data/data.json';
import {  useState } from 'react';
import { CodeEditor } from '../../components/codeEditor/codeEditor.component';
const markdown = data[1].content
export const Welcome = () => {
    const {preview, setPreview} = usePreview();
    const [myMarkdown, setMyMarkdown] = useState<string | undefined>(markdown);
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
          <CodeEditor markdown={myMarkdown} callback={setMyMarkdown} />
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
          <ReactMarkdown className=" px-12 py-6 flex flex-col gap-5 font-display text-tertiary-black dark:text-quaternary-gray [&_h1]:text-4xl [&_h1]:font-bold [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:text-2xl [&_h3]:font-bold [&_h4]:text-2xl [&_h4]:font-bold [&_h5]:text-xl [&_h5]:font-bold [&_h6]:text-lg [&_h6]:font-bold [&_h6]:text-primary-orange [&_p]:text-regular dark:[&_p]:text-tertiary-gray [&_p]:text-secondary-gray  [&_blockquote]:p-6 [&_blockquote]:border-x-[4px] [&_blockquote]:rounded-[4px] [&_blockquote]:border-x-primary-orange dark:[&_blockquote]:bg-tertiary-black [&_blockquote]:bg-primary-white dark:[&_pre]:bg-tertiary-black [&_pre]:rounded-[4px] [&_pre]:bg-primary-white [&_pre]:p-6 [&_ol]:list-decimal [&_ul]:marker:text-primary-orange [&_ul]:list-disc [&_ul]:pl-12 [&_ol]:pl-12 dark:[&_ol]:text-tertiary-gray [&_ol]:text-secondary-gray dark:[&_ul]:text-tertiary-gray [&_ul]:text-secondary-gray">
            {myMarkdown ? myMarkdown : ""}
          </ReactMarkdown>
        </div>
      </>
    );
}