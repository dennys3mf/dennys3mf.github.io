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
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.en,
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
    return "en";
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

  const currentLang = mounted ? language : "en";

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
