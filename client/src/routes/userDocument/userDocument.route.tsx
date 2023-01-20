import { useLocation } from "react-router-dom";

export const UserDocument = () => {
    const location = useLocation();
    return <div>Document {location.pathname}</div>

};