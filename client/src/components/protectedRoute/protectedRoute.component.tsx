import {Navigate, useLocation} from 'react-router-dom';
import { useSessionContext } from '../../context/session.context';

export type ProtectedRouteProps ={
   children: JSX.Element;
}
export default function ProtectedRoute({children}:ProtectedRouteProps){
      const session = useSessionContext();
console.log(session.session)
return session? children: <Navigate to="/login" state={{from:useLocation()}} />;
}