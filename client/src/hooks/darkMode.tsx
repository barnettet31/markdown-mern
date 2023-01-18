import { useCallback, useEffect, useState } from "react";
function checkSystemPreference() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // dark mode
    console.log('fired')
    return "dark";
  }
  return "light";
}

const USER_PREFERENCE = checkSystemPreference();
   

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<string | null>(USER_PREFERENCE);
  const toggleDarkMode = () => {
    switch (darkMode) {
      case "light":
        setDarkMode("dark");
        break;
      case "dark":
        setDarkMode("light");
        break;
      default:
        break;
    }
  };
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

  return [darkMode, toggleDarkMode] as const;
}
