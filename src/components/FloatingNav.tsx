"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import styles from "../app/page.module.css";

interface NavItem {
  label: string;
  href: string;
  sectionIds: string[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#home", sectionIds: ["home"] },
  { label: "Servicios", href: "#servicios", sectionIds: ["servicios"] },
  { label: "Proyectos", href: "#casos", sectionIds: ["casos", "proceso", "whyus"] },
  { label: "Sobre mí", href: "#about", sectionIds: ["about"] },
  { label: "Contacto", href: "#contacto", sectionIds: ["contacto", "footer"] },
];

export default function FloatingNav() {
  const [activeItem, setActiveItem] = useState<string>("Inicio");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

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

      // Default to Inicio if near top
      if (window.scrollY < 200) {
        setActiveItem("Inicio");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
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

  return (
    <>
      {/* Desktop Floating Bottom Capsule (Hidden on mobile) */}
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

      {/* Mobile Top Header (Sticky at top, frees up the bottom of mobile viewport) */}
      <header className={styles.mobileTopBar}>
        <div className={styles.mobileTopBarInner}>
          <a
            href="#home"
            className={styles.mobileLogo}
            onClick={() => setMobileOpen(false)}
            aria-label="Dennys Marquez — Inicio"
          >
            <span className={styles.mobileIsotipo}>
              d<span className={styles.mobileIsotipoDot}>.</span>
            </span>
            <span className={styles.mobileLogoText}>
              dennys <span className={styles.mobileLogoBlue}>marquez</span>
            </span>
          </a>

          <div className={styles.mobileTopActions}>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={styles.mobileMenuBtn}
              aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div
            className={styles.mobileDrawerBackdrop}
            onClick={() => setMobileOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <nav
              className={styles.mobileDrawer}
              onClick={(e) => e.stopPropagation()}
              aria-label="Menú móvil"
            >
              <div className={styles.mobileDrawerLinks}>
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = activeItem === item.label;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.label);
                        setMobileOpen(false);
                      }}
                      className={`${styles.mobileDrawerLink} ${
                        isActive ? styles.mobileDrawerLinkActive : ""
                      }`}
                    >
                      <span className={styles.mobileDrawerIndex}>0{idx + 1}</span>
                      <span className={styles.mobileDrawerLabel}>{item.label}</span>
                      {isActive && <span className={styles.mobileDrawerActiveDot}>•</span>}
                    </a>
                  );
                })}
              </div>

              <div className={styles.mobileDrawerFooter}>
                <a
                  href="https://wa.me/51922466078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileDrawerCta}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Conversar por WhatsApp</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
