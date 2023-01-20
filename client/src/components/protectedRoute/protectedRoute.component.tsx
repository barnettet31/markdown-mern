import { Navigate, useLocation } from "react-router-dom";
import { useSessionContext } from "../../context/session.context";

export type ProtectedRouteProps = {
  children: JSX.Element;
};
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const session = useSessionContext();
  return session.session ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: useLocation() }} />
  );
}
