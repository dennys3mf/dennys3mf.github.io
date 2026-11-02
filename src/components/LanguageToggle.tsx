"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./LanguageToggle.module.css";

interface LanguageToggleProps {
  className?: string;
  showLabels?: boolean;
}

export default function LanguageToggle({
  className = "",
  showLabels = false,
}: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage();
  const isEs = language === "es";

  return (
    <div className={`${styles.switchContainer} ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={isEs}
        aria-label={
          isEs
            ? "Idioma actual: Español. Cambiar a Inglés"
            : "Current language: English. Switch to Spanish"
        }
        title={isEs ? "Cambiar a English" : "Switch to Español"}
        onClick={toggleLanguage}
        className={styles.switchTrack}
      >
        {/* Sliding Thumb Knob */}
        <span
          className={`${styles.switchThumb} ${!isEs ? styles.switchThumbEn : ""}`}
          aria-hidden="true"
        />

        {/* Option ES */}
        <span
          className={`${styles.switchOption} ${isEs ? styles.switchOptionActive : ""}`}
        >
          ES
        </span>

        {/* Option EN */}
        <span
          className={`${styles.switchOption} ${!isEs ? styles.switchOptionActive : ""}`}
        >
          EN
        </span>
      </button>

      {showLabels && (
        <span className={styles.switchLabel}>
          {isEs ? "Español" : "English"}
        </span>
      )}
    </div>
  );
}
