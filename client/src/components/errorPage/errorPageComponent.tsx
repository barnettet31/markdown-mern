import { Link } from "react-router-dom";

export const ErrorPage = ()=>{
    return (
      <div className="min-h-full bg-white dark:bg-tertiary-black dark:text-tertiary-gray py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <section className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-primary-orange sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-tertiary-gray sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to="/welcome"
                  className="inline-flex items-center rounded-md border border-transparent bg-primary-orange px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary-orange">
                  Go back to the welcome page
                </Link>
                
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}