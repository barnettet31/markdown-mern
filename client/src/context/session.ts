import cookies from 'js-cookie';
import { IUserResult } from '../api/api.types';

export const setSessionCookie = async(session:IUserResult)=>{
    cookies.remove('token');
    cookies.set('token', JSON.stringify(session));
}
export const removeSessionCookie = ()=>{
    cookies.remove('token');
}
export const getSessionCookie = ():IUserResult|null=>{
    const session = cookies.get('token');
    if(session){
        return JSON.parse(session);
    }
    return null;
}