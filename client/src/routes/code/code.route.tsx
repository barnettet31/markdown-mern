import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

const CodePage = () => {
  return (
    <div className="w-full px-4 pt-16">
    <div className="mx-auto w-full max-w-md rounded-2xl p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg border-primary-black dark:border-primary-orange border px-4 py-2 text-left text-sm font-medium text-primary-orange hover:bg-primary-orange/20">
              <span>How did you handle the login?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-primary-orange`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              This is where my login code will go.
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
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-primary-orange`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              This is where my markdown editing text will go.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  </div>
  );
};
export default CodePage;
