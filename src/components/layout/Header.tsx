"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "../LanguageToggle";
import { siteConfig } from "../../data/siteConfig";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile drawer on route change during render
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/experience", label: t.nav.experience },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        {/* Brand Monogram */}
        <Link href="/" className={styles.brandLink} aria-label="Gabriel Márquez — Home">
          <span className={styles.brandBadge}>G</span>
          <span className={styles.brandName}>Gabriel Márquez</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Group */}
        <div className={styles.actionsGroup}>
          <LanguageToggle variant="segmented" />

          {/* Resume Link */}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            title={t.nav.resume}
          >
            <FileText size={15} />
            <span>{t.nav.resume}</span>
          </a>

          {/* Primary CTA */}
          <Link
            href="/contact?intent=project"
            className={styles.workWithMeBtn}
          >
            <span>{t.nav.workWithMe}</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={styles.mobileDrawerOverlay}
          onClick={() => setMobileOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.mobileDrawer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mobileDrawerTop}>
              <Link href="/" className={styles.brandLink} onClick={() => setMobileOpen(false)}>
                <span className={styles.brandBadge}>G</span>
                <span className={styles.brandName}>Gabriel Márquez</span>
              </Link>
              <button
                type="button"
                className={styles.mobileCloseBtn}
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className={styles.mobileDrawerLinks} aria-label="Mobile Navigation">
              <Link
                href="/"
                className={`${styles.mobileNavLink} ${pathname === "/" ? styles.mobileNavLinkActive : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.home}
              </Link>
              {navLinks.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.mobileDrawerBottom}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
                <LanguageToggle showLabels />
              </div>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeBtn}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <FileText size={15} />
                <span>{t.nav.resume} (PDF)</span>
              </a>
              <Link
                href="/contact?intent=project"
                className={styles.workWithMeBtn}
                style={{ display: "flex", justifyContent: "center" }}
                onClick={() => setMobileOpen(false)}
              >
                <span>{t.nav.workWithMe}</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
