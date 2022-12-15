import { useEffect, useState } from "react";
import { isDarkModeEnabled } from "../utilities/darkMode";

const systemPreferDarkMode = isDarkModeEnabled()
export function useDarkModePreference (){
const  darkStringSet = localStorage.getItem('dark') ? Boolean(localStorage.getItem('dark')) : false;
const  [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(darkStringSet? darkStringSet : systemPreferDarkMode);

useEffect(()=>{
    localStorage.setItem('dark', JSON.stringify(prefersDarkMode));
},[prefersDarkMode])
return {
 prefersDarkMode, 
 setPrefersDarkMode
}
}