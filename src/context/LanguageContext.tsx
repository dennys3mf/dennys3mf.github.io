"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationContent, translations } from "../lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.en,
});

const STORAGE_KEY = "dennys_portfolio_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read persisted language preference or browser language
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "es" || saved === "en") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      } else {
        const browserLang = navigator.language?.toLowerCase();
        if (browserLang.startsWith("es")) {
          setLanguageState("es");
          document.documentElement.lang = "es";
        } else {
          setLanguageState("en");
          document.documentElement.lang = "en";
        }
      }
    } catch {
      // fallback to en
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next: Language = language === "en" ? "es" : "en";
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider
      value={{
        language: mounted ? language : "en",
        setLanguage,
        toggleLanguage,
        t: translations[mounted ? language : "en"],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
