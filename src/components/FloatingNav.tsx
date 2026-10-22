"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";

interface NavItem {
  label: string;
  href: string;
  sectionIds: string[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", sectionIds: ["home"] },
  { label: "Services", href: "#servicios", sectionIds: ["about", "servicios"] },
  { label: "Cases", href: "#casos", sectionIds: ["casos", "proceso", "stats", "whyus"] },
  { label: "Contact", href: "#contacto", sectionIds: ["contacto", "footer"] },
];

export default function FloatingNav() {
  const [activeItem, setActiveItem] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      // Find current section
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        for (const secId of item.sectionIds) {
          const el = document.getElementById(secId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveItem(item.label);
              return;
            }
          }
        }
      }

      // Default to Home if near top
      if (window.scrollY < 200) {
        setActiveItem("Home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar} aria-label="Navegación principal">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
