import { useEffect, useState } from "react";
import { isDarkModeEnabled } from "../utilities/darkMode";



export default function useDarkMode(){
const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('theme') ==='dark' ? true : false);


useEffect(()=>{
    if(darkMode){
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }else{
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
},[darkMode])
const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
}
return [darkMode, toggleDarkMode] as const
}