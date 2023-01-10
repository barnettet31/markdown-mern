import {useEffect} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

export type ProtectedRouteProps ={
    isAuthenticated:boolean;
    authenticationPath:string;
    redirectPath:string;
    setRedirectPath:(path:string)=>void;
    outlet:JSX.Element;
}

export default function ProtectedRoute({isAuthenticated, authenticationPath, redirectPath, setRedirectPath, outlet}:ProtectedRouteProps){
    const currentLocation = useLocation();
    useEffect(()=>{
        if(!isAuthenticated){
            setRedirectPath(currentLocation.pathname);
        }
    },[currentLocation, setRedirectPath, currentLocation]);
    if(isAuthenticated && redirectPath === currentLocation.pathname){
        return outlet;
    }else{
        return <Navigate to={{pathname: isAuthenticated ? redirectPath : authenticationPath}} />;
    }
}