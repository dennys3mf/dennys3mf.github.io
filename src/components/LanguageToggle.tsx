"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  variant?: "compact" | "segmented" | "pill";
  className?: string;
}

export default function LanguageToggle({
  variant = "segmented",
  className = "",
}: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all border shadow-sm ${
          language === "es"
            ? "bg-blue-600 text-white border-blue-600 shadow-blue-500/20"
            : "bg-white text-slate-800 border-slate-200 hover:border-slate-300"
        } ${className}`}
        title={language === "en" ? "Cambiar a Español" : "Switch to English"}
        aria-label="Language Switcher"
      >
        <Globe size={13} className="shrink-0" />
        <span className="uppercase">{language === "en" ? "ES" : "EN"}</span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200/80 shadow-inner ${className}`}
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          language === "es"
            ? "bg-white text-slate-900 shadow-sm font-extrabold"
            : "text-slate-500 hover:text-slate-900"
        }`}
        aria-pressed={language === "es"}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-white text-slate-900 shadow-sm font-extrabold"
            : "text-slate-500 hover:text-slate-900"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
