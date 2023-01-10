import { createContext, useContext, useState} from "react";
import { initialSession, Session } from "../models/session";
import { GeneralImportGlobOptions } from "vite/types/importGlob";

export const SessionContext = createContext<[Session, (session: Session) => void]>([
  initialSession,
  () => {},
]);
export const useSessionContext = () => useContext(SessionContext);
interface IContextProps {
    children:React.ReactNode;
}

export const SessionContextProvider =({children}:IContextProps)=>{
    const [session, setSession] = useState(initialSession);
    const defaultSessionContext: [Session, typeof setSession] = [session, setSession];
    return (
        <SessionContext.Provider value={defaultSessionContext}>{children}</SessionContext.Provider>
    )

}