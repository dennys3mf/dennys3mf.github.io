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
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all border-2 border-[#152B49] shadow-[2px_2px_0_#152B49] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${
          language === "es"
            ? "bg-[#2563EB] text-white"
            : "bg-[#FFFFFF] text-[#152B49] hover:bg-[#BDEBFF]"
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
      className={`inline-flex items-center p-0.5 rounded-lg bg-[#EDF5FC] border-2 border-[#152B49] shadow-[2px_2px_0_#152B49] ${className}`}
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
          language === "es"
            ? "bg-[#2563EB] text-white shadow-[1px_1px_0_#152B49]"
            : "text-[#526780] hover:text-[#152B49] hover:bg-[#BDEBFF]/50"
        }`}
        aria-pressed={language === "es"}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
          language === "en"
            ? "bg-[#2563EB] text-white shadow-[1px_1px_0_#152B49]"
            : "text-[#526780] hover:text-[#152B49] hover:bg-[#BDEBFF]/50"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
