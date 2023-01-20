import {createContext, useContext, useEffect, useState} from 'react';

export const ThemeContext = createContext({darkMode: 'dark', toggleDarkMode: () => {}});
export const useTheme = () => useContext(ThemeContext);
interface IContextProps{
    children: React.ReactNode;
}
export const ThemeProvider = ({children}:IContextProps) => {
    const [darkMode, setDarkMode] = useState<string>('dark');
  const toggleDarkMode = () => setDarkMode((prev) => (prev === "light" ? "dark" : "light"));      
  
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      document.querySelector("body")?.classList.add("dark");
     
    } else if (darkMode === "light") {
       document.querySelector("body")?.classList.remove("dark");

    } else {
        document.querySelector("body")?.classList.add("dark");
    }
}, [darkMode]);
    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
        </ThemeContext.Provider>
    );
};

