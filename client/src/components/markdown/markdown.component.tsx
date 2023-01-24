import ReactMarkdown from "react-markdown";
interface IMarkDownProps{
    markdown:string | undefined;
}
export const MarkDown = ({ markdown }: IMarkDownProps) => {
    return (
      <ReactMarkdown className="px-12 py-6 flex flex-col gap-5 font-display text-tertiary-black dark:text-quaternary-gray [&_h1]:text-4xl [&_h1]:font-bold [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:text-2xl [&_h3]:font-bold [&_h4]:text-2xl [&_h4]:font-bold [&_h5]:text-xl [&_h5]:font-bold [&_h6]:text-lg [&_h6]:font-bold [&_h6]:text-primary-orange [&_p]:text-regular dark:[&_p]:text-tertiary-gray [&_p]:text-secondary-gray  [&_blockquote]:p-6 [&_blockquote]:border-x-[4px] [&_blockquote]:rounded-[4px] [&_blockquote]:border-x-primary-orange dark:[&_blockquote]:bg-tertiary-black [&_blockquote]:bg-primary-white dark:[&_pre]:bg-tertiary-black [&_pre]:rounded-[4px] [&_pre]:bg-primary-white [&_pre]:p-6 [&_ol]:list-decimal [&_ul]:marker:text-primary-orange [&_ul]:list-disc [&_ul]:pl-12 [&_ol]:pl-12 dark:[&_ol]:text-tertiary-gray [&_ol]:text-tertiary-gray dark:[&_ul]:text-tertiary-gray [&_ul]:text-secondary-gray">
        {markdown ? markdown : ""}
      </ReactMarkdown>
    );
}