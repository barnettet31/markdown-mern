import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import styles from '../../layouts/dashboard/userLayout.module.css';
import { useOutletContext } from 'react-router-dom';
import { usePreview } from '../../layouts/dashboard/user.layout';
export const Welcome = () => {
    const {preview, setPreview} = usePreview()

    return (
      <>
        <div
          className={`dark:bg-primary-black bg-secondary-white border-r border-gray-100 ${
            styles.editor
          } ${preview ? "hidden" : ""}`}>
          <div className="flex justify-between w-full px-4 py-3 dark:bg-secondary-black bg-primary-white">
            <h2 className="text-sm leading-4 text-default dark:text-tertiary-gray text-secondary-gray">
              MARKDOWN
            </h2>
            <EyeIcon
              onClick={() => setPreview()}
              className="w-4 cursor-pointer md:hidden hover:text-primary-orange"
            />
          </div>
        </div>
        <div
          className={`dark:bg-primary-black bg-secondary-white border-r border-gray-100  ${styles.preview}`}>
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
        </div>
      </>
    );
}