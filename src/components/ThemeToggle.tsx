"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Eye } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const cycleTheme = () => {
    let nextTheme = "dark";
    if (theme === "light") nextTheme = "dark";
    else if (theme === "dark") nextTheme = "accessible";
    else if (theme === "accessible") nextTheme = "light";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const getThemeLabel = () => {
    if (theme === "light") return "Moddo Paper (Claro)";
    if (theme === "accessible") return "Accesible (Miopía / Astigmatismo)";
    return "Moddo Dark (Oscuro)";
  };

  if (!mounted) {
    return <div style={{ width: "36px", height: "36px" }} />;
  }

  return (
    <button
      onClick={cycleTheme}
      title={`Tema: ${getThemeLabel()} (Click para cambiar)`}
      aria-label={`Cambiar tema: actual ${getThemeLabel()}`}
      style={{
        background: "var(--theme-btn-bg, rgba(0, 0, 0, 0.05))",
        border: "1px solid var(--border-color, rgba(0, 0, 0, 0.1))",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        padding: "0.45rem 0.8rem",
        borderRadius: "999px",
        color: "var(--text-main)",
        fontSize: "0.78rem",
        fontFamily: "var(--font-heading)",
        fontWeight: "600",
        transition: "all 0.25s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {theme === "light" && <Sun size={14} color="var(--accent-orange)" />}
      {theme === "dark" && <Moon size={14} color="var(--accent-azure)" />}
      {theme === "accessible" && <Eye size={14} color="var(--accent-yellow)" />}
      <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {theme === "light" ? "LIGHT" : theme === "accessible" ? "A11Y" : "DARK"}
      </span>
    </button>
  );
}
