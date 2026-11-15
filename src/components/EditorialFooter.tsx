"use client";

import React from "react";
import { siteConfig } from "../data/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { playTactileClick } from "../lib/sound";
import styles from "./EditorialFooter.module.css";

interface EditorialFooterProps {
  className?: string;
}

export default function EditorialFooter({ className = "" }: EditorialFooterProps) {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <footer className={`${styles.footerWrapper} ${className}`} aria-label="Site footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerMeta}>
          <span className={styles.name}>Dennys Marquez</span>
          <span className={styles.separator}>·</span>
          <span className={styles.role}>
            {isEs ? "Ingeniero Full Stack & Producto" : "Full Stack & Product Engineer"}
          </span>
          <span className={styles.separator}>·</span>
          <span className={styles.location}>Lima, Perú</span>
        </div>

        <div className={styles.linksRow}>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={() => playTactileClick()}
          >
            LinkedIn
          </a>
          <span className={styles.separator}>·</span>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={() => playTactileClick()}
          >
            GitHub
          </a>
          <span className={styles.separator}>·</span>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={() => playTactileClick()}
          >
            CV / Resume
          </a>
          <span className={styles.separator}>·</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className={styles.link}
            onClick={() => playTactileClick()}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
