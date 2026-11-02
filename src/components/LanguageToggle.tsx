"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  variant?: "compact" | "segmented" | "pill";
  className?: string;
  showLabels?: boolean;
}

export default function LanguageToggle({
  variant = "segmented",
  className = "",
  showLabels = false,
}: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
        className={`inline-flex items-center gap-2 px-3.5 py-2 min-h-[42px] rounded-lg text-sm font-extrabold tracking-wide transition-all border-2 border-[#152B49] shadow-[2px_2px_0_#152B49] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer ${
          language === "es"
            ? "bg-[#2563EB] text-white"
            : "bg-[#FFFFFF] text-[#152B49] hover:bg-[#BDEBFF]"
        } ${className}`}
        title={language === "en" ? "Cambiar a Español" : "Switch to English"}
        aria-label="Language Switcher"
      >
        <Globe size={16} className="shrink-0" />
        <span>{language === "en" ? "Español" : "English"}</span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-[#EDF5FC] border-2 border-[#152B49] shadow-[2px_2px_0_#152B49] ${className}`}
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[40px] text-sm font-extrabold rounded-lg transition-all cursor-pointer select-none ${
          language === "es"
            ? "bg-[#2563EB] text-white shadow-[2px_2px_0_#152B49]"
            : "text-[#152B49] hover:bg-[#BDEBFF] hover:text-[#152B49]"
        }`}
        aria-pressed={language === "es"}
      >
        <span>ES</span>
        {showLabels && <span className="text-xs font-bold opacity-90">Español</span>}
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[40px] text-sm font-extrabold rounded-lg transition-all cursor-pointer select-none ${
          language === "en"
            ? "bg-[#2563EB] text-white shadow-[2px_2px_0_#152B49]"
            : "text-[#152B49] hover:bg-[#BDEBFF] hover:text-[#152B49]"
        }`}
        aria-pressed={language === "en"}
      >
        <span>EN</span>
        {showLabels && <span className="text-xs font-bold opacity-90">English</span>}
      </button>
    </div>
  );
}
