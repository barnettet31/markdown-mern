import { createContext, useContext, useEffect, useState} from "react";
import { useQuery } from "react-query";
import { me } from "../api/user.handler";
import { boolean } from "zod";
import { IUserResult } from "../api/api.types";
import { getSessionCookie } from "./session";
interface SessionContextType {
  session: IUserResult | null;
}
export const SessionContext = createContext({session:getSessionCookie()});
export const useSessionContext = () => useContext(SessionContext);
interface IContextProps {
    children:React.ReactNode;
}

export const SessionContextProvider =({children}:IContextProps)=>{
    const [session, setSession] = useState<IUserResult | null>(getSessionCookie());
    
    useEffect(() => {
        setSession(getSessionCookie())
    }, [session])
    
    return (
        <SessionContext.Provider value={{session:session}}>{children}</SessionContext.Provider>
    )

}