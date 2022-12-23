import { useCallback, useEffect, useState } from "react";
function checkSystemPreference() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // dark mode
    return "dark";
  }
  return "light";
}

const USER_PREFERENCE =
  localStorage.getItem("theme") === null
    ? checkSystemPreference()
    : localStorage.getItem("theme");

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
      localStorage.setItem("theme", "dark");
    } else if (darkMode === "light") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode] as const;
}
