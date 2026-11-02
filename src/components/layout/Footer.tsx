"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "../LanguageToggle";
import { siteConfig } from "../../data/siteConfig";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();

  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footerWrapper} id="footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerTopGrid}>
          {/* Brand Statement */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo} aria-label="Gabriel Márquez — Home">
              <span className={styles.brandBadge}>G</span>
              <span>Gabriel Márquez</span>
            </Link>
            <p className={styles.brandTagline}>{t.footer.tagline}</p>
            <span className={styles.brandLocation}>
              Full Stack Developer — Peru
            </span>
          </div>

          {/* Navigation */}
          <div className={styles.navCol}>
            <span className={styles.colTitle}>{t.footer.navigation}</span>
            <Link href="/" className={styles.footerLink}>
              {t.nav.home}
            </Link>
            <Link href="/work" className={styles.footerLink}>
              {t.nav.work}
            </Link>
            <Link href="/about" className={styles.footerLink}>
              {t.nav.about}
            </Link>
            <Link href="/experience" className={styles.footerLink}>
              {t.nav.experience}
            </Link>
            <Link href="/services" className={styles.footerLink}>
              {t.nav.services}
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              {t.nav.contact}
            </Link>
          </div>

          {/* Connect Links */}
          <div className={styles.navCol}>
            <span className={styles.colTitle}>{t.footer.connect}</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles.footerLink}
            >
              <span>Email</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <span>{t.nav.resume} (PDF)</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.footerBottom}>
          <span>
            Gabriel Márquez © {new Date().getFullYear()}. {t.footer.rights}
          </span>

          <div className={styles.bottomActions}>
            <LanguageToggle variant="segmented" />
            <button
              type="button"
              onClick={handleBackToTop}
              className={styles.backToTopBtn}
              aria-label="Scroll back to top"
            >
              {t.footer.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
