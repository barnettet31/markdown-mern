import { createContext, useContext, useEffect, useState} from "react";
interface SessionContextType {
  session: boolean | null;
  setSession: (session:boolean)=>void;
}
export const SessionContext = createContext<SessionContextType | null>(null);
export const useSessionContext = () => useContext(SessionContext);
interface IContextProps {
    children:React.ReactNode;
}

export const SessionContextProvider =({children}:IContextProps)=>{
    const [session, setSession] = useState<boolean | null>(null);
    const value = {session, setSession};
    return (
        <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
    )

}