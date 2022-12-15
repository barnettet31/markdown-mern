import { Link } from "react-router-dom";
import { Logo } from "../logo/logo.component";

export const HomeNavBar = () => {
  return (
    <nav className="flex gap-3 bg-tertiary-black py-7 px-5 items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <div className="self-end flex gap-6">
        <Link className="text-primary-white hover:opacity-70 ease-in-out" to="/login">
          Login
        </Link>
        <Link className="text-primary-white hover:opacity-70 ease-in-out" to="/signup">
          SignUp
        </Link>
        <Link className="text-primary-white hover:opacity-70 ease-in-out" to="/code">
          Code
        </Link>
        <Link className="text-primary-white hover:opacity-70 ease-in-out" to="/disclaimer">
          Disclaimer
        </Link>
      </div>
    </nav>
  );
};
