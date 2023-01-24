import { Link } from "react-router-dom";
import { AppTypography } from "../../components/typography/app-typography.component";
import { LoadingDashboard } from "../../components/loadingDashboard/loadingDashboard.component";

const HomePage = () => {

  return (
    <div className="flex flex-col gap-4 w-full text-justify px-4 md:py-8">
      <AppTypography
        intent="h2"
        className="text-2xl md:text-3xl lg:text-4xl underline">
        Welcome To Mark Down
      </AppTypography>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        This app is both the completion of the{" "}
        <a
          className="underline font-bold"
          href="https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9/hub">
          Front End Mentor
        </a>{" "}
        challenge and one of my capstone projects for Promineo Tech Bootcamp.
      </AppTypography>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        The class requirements for this application are as follows:
      </AppTypography>
      <ol className="text-prose font-default text-lg md:text-xl lg:text-2xl list-decimal list-inside text-secondary-gray dark:text-secondary-white">
        <li>Create a full CRUD application of your choice. </li>
        <li>When using an existing API, use AJAX to interact with it</li>
        <li>Use a form to add new entities</li>
        <li>Build a way for users to update or delete entities</li>
        <li>Use Bootstrap and CSS to style your project</li>
      </ol>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        Now technically I didn't actually follow these rules exactly. For
        example, instead of writing this app using bootstrap for styling, I
        opted to use tailwind to create my own design system.
      </AppTypography>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        Additionally, I decided that it would be best to challenge myself
        further and write my own{" "}
        <span className="text-green-700 font-semibold">node.js</span> backend to
        handle my CRUD operations server side!
      </AppTypography>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        The app is built in React with Typescript for type safety and is capable
        of rendering Markdown added by the user into a preview window in the
        browser, and saving user data to be updated OR deleted in the future.
      </AppTypography>
      <Link
        to="/code"
        className="inline-flex w-72 justify-center items-center mt-4 rounded-md border border-transparent bg-primary-orange px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-orange ">
        Check out the Code Here
      </Link>
    </div>
  );
};

export default HomePage;
