import { usePreview } from '../../layouts/dashboard/user.layout';
import data from '../../data/data.json';
import {  useState } from 'react';
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