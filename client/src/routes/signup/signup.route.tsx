const SignUpPage = ()=>{
    return(   <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-white">Sign Up For An Account</h2>
      
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white dark:bg-secondary-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-primary-white">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-primary-white">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-primary-orange hover:bg-secondary-orange py-2 px-4 text-sm font-medium text-white shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>)
}

export default SignUpPage;