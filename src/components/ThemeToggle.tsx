"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("brand-theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("brand-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  if (!mounted) {
    return <div style={{ width: "88px", height: "34px" }} />;
  }

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
      aria-label={isLight ? "Modo oscuro" : "Modo claro"}
      style={{
        background: isLight ? "rgba(15, 17, 21, 0.05)" : "rgba(247, 248, 251, 0.1)",
        border: "1px solid var(--border-color)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.45rem",
        padding: "0.38rem 0.85rem",
        borderRadius: "9999px",
        color: "var(--text-main)",
        fontSize: "0.78rem",
        fontFamily: "var(--font-heading)",
        fontWeight: "700",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        userSelect: "none",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.borderColor = "var(--brand-blue, #4F6BFF)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border-color)";
      }}
    >
      {isLight ? (
        <>
          <Moon size={14} color="#4F6BFF" />
          <span style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}>Oscuro</span>
        </>
      ) : (
        <>
          <Sun size={14} color="#8A7BFF" />
          <span style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}>Claro</span>
        </>
      )}
    </button>
  );
}
