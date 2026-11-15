"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "../data/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { playTactileClick } from "../lib/sound";
import styles from "./EditorialHeader.module.css";

interface EditorialHeaderProps {
  className?: string;
}

export default function EditorialHeader({ className = "" }: EditorialHeaderProps) {
  const { language } = useLanguage();
  const pathname = usePathname() || "";
  const isEs = language === "es";

  const navItems = [
    { href: "/work", label: isEs ? "Proyectos" : "Work" },
    { href: "/experience", label: isEs ? "Trayectoria" : "Experience" },
    { href: "/services", label: isEs ? "Servicios" : "Services" },
    { href: "/about", label: isEs ? "Acerca de mí" : "About" },
    { href: "/contact", label: isEs ? "Contacto" : "Contact" },
  ];

  return (
    <header className={`${styles.headerWrapper} ${className}`}>
      <div className={styles.headerContainer}>
        {/* Brand Emblem Logo Link */}
        <Link
          href="/"
          className={styles.brandLink}
          aria-label="Dennys Marquez — Home"
          onClick={() => playTactileClick()}
        >
          <Image
            src={siteConfig.logoUrl}
            alt="Dennys Marquez"
            width={32}
            height={32}
            className={styles.brandLogo}
            priority
          />
        </Link>

        {/* Editorial Text Navigation */}
        <nav className={styles.navRow} aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/work"
                ? pathname.startsWith("/work")
                : pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                onClick={() => playTactileClick()}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Language Switch */}
        <div className={styles.actionsGroup}>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
