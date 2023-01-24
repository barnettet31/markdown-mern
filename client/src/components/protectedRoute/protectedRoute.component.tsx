import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSessionContext } from "../../context/session.context";


export default function ProtectedRoutes() {
  const session = useSessionContext();
  return session.session ? (
    <Outlet/>
  ) : (
    <Navigate to="/login" state={{ from: useLocation() }} />
  );
}
