import { Link } from "react-router-dom";
import { Logo } from "../logo/logo.component";

export const HomeNavBar = () => {
  return (
    <nav className="bg-tertiary-black py-4 px-4 md:px-0">
      <div className="container mx-auto sm:px-6 lg:px-8 flex gap-3 items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="self-end flex gap-6">
          <Link
            className="text-primary-white hover:opacity-70 ease-in-out"
            to="/login">
            Login
          </Link>
          <Link
            className="text-primary-white hover:opacity-70 ease-in-out"
            to="/signup">
            SignUp
          </Link>
          <Link
            className="text-primary-white hover:opacity-70 ease-in-out"
            to="/code">
            Code
          </Link>
          <Link
            className="text-primary-white hover:opacity-70 ease-in-out"
            to="/disclaimer">
            Disclaimer
          </Link>
        </div>
      </div>
    </nav>
  );
};
