import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // try to read saved preference
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("isDark");
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const toggleTheme = () => setIsDark(prev => !prev);

  useEffect(() => {
    // Use the <html> element so CSS variables apply globally and before paint
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    } catch {}
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
