"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { Language, TranslationContent, translations } from "../lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.es,
});

const STORAGE_KEY = "dennys_portfolio_lang";

const emptySubscribe = () => () => {};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (saved === "es" || saved === "en") return saved;
        const browserLang = navigator.language?.toLowerCase();
        if (browserLang?.startsWith("es")) return "es";
      } catch {
        // fallback to en
      }
    }
    return "es";
  });

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
    }
  }, [mounted, language]);

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

  const currentLang = mounted ? language : "es";

  return (
    <LanguageContext.Provider
      value={{
        language: currentLang,
        setLanguage,
        toggleLanguage,
        t: translations[currentLang],
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
