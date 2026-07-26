"use client";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const cycleTheme = () => {
    let nextTheme = "light";
    if (theme === "light") nextTheme = "dark";
    else if (theme === "dark") nextTheme = "accessible";
    
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const getThemeIcon = () => {
    if (theme === "light") return "☀️";
    if (theme === "dark") return "🌙";
    return "👓";
  };

  const getThemeName = () => {
    if (theme === "light") return "Claro";
    if (theme === "dark") return "Oscuro";
    return "Accesible";
  };

  return (
    <button 
      onClick={cycleTheme}
      title={`Tema Actual: ${getThemeName()}`}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem",
        borderRadius: "20px",
        color: "var(--foreground)",
        transition: "background 0.2s"
      }}
      onMouseOver={(e) => e.currentTarget.style.background = "var(--btn-hover)"}
      onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
    >
      {getThemeIcon()}
    </button>
  );
}
