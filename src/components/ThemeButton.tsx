"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function SwitchButton() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  // Synchronize local state with theme changes
  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="relative inline-flex items-center">
      <span className="mr-2">{isDark ? <Moon /> : <Sun />}</span>
      <div
        onClick={toggleTheme}
        className="relative flex items-center cursor-pointer"
        style={{ width: "60px", height: "30px" }}
        role="button"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-gray-600 dark:bg-gray-300 rounded-full transition-transform duration-300 ease-in-out ${isDark ? "translate-x-full" : "translate-x-0"}`}
        />
        <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded-full" />
      </div>
    </div>
  );
}
