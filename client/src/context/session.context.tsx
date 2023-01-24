import { createContext, useContext, useEffect, useState} from "react";
import { IUserResult } from "../api/api.types";
import { getSessionCookie } from "./session";
interface SessionContextType {
  session: IUserResult | null;
}
export const SessionContext = createContext({session:getSessionCookie(), setSession:(session: IUserResult | null) => {}});
export const useSessionContext = () => useContext(SessionContext);
interface IContextProps {
    children:React.ReactNode;
}

export const SessionContextProvider =({children}:IContextProps)=>{
    const [session, setSession] = useState<IUserResult | null>(getSessionCookie());
    const setMySession = (session:IUserResult | null) => setSession(session);
    return (
        <SessionContext.Provider value={{session:session, setSession:setMySession}}>{children}</SessionContext.Provider>
    )

}