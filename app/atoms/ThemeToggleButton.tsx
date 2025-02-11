"use client";

import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  if (!isMounted) return null; // Evita errores de SSR

  return (
    <button
      className="fixed bottom-4 right-4 p-3 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg hover:bg-gray-400 dark:hover:bg-gray-700 transition-all z-50"
      onClick={toggleTheme}
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
