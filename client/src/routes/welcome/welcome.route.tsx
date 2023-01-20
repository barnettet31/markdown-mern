import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import styles from '../../layouts/dashboard/userLayout.module.css';
import { usePreview } from '../../layouts/dashboard/user.layout';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import data from '../../data/data.json';
import {  useState } from 'react';
import { CodeEditor } from '../../components/codeEditor/codeEditor.component';
import { MarkDown } from '../../components/markdown/markdown.component';
const markdown = data[1].content
export const Welcome = () => {
    const {preview, setPreview} = usePreview();
    const [myMarkdown, setMyMarkdown] = useState<string | undefined>(markdown);
    return (
      <div className='w-full'>
          <MarkDown markdown={markdown}/>
      </div>
    );
}