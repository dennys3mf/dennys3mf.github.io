"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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
      {/* Desktop Floating Bottom Capsule (Enhanced with Motion micro-interactions) */}
      <header className={styles.navbarWrapper}>
        <motion.nav
          className={styles.navbar}
          aria-label="Navegación principal"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {item.label}
              </motion.a>
            );
          })}
        </motion.nav>
      </header>

      {/* Mobile Top Header (Clean sticky top navigation) */}
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
            <motion.button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={styles.mobileMenuBtn}
              aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className={styles.mobileDrawerBackdrop}
              onClick={() => setMobileOpen(false)}
              aria-modal="true"
              role="dialog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.nav
                className={styles.mobileDrawer}
                onClick={(e) => e.stopPropagation()}
                aria-label="Menú móvil"
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              >
                <div className={styles.mobileDrawerLinks}>
                  {NAV_ITEMS.map((item, idx) => {
                    const isActive = activeItem === item.label;
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setActiveItem(item.label);
                          setMobileOpen(false);
                        }}
                        className={`${styles.mobileDrawerLink} ${
                          isActive ? styles.mobileDrawerLinkActive : ""
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className={styles.mobileDrawerIndex}>0{idx + 1}</span>
                        <span className={styles.mobileDrawerLabel}>{item.label}</span>
                        {isActive && <span className={styles.mobileDrawerActiveDot}>•</span>}
                      </motion.a>
                    );
                  })}
                </div>

                <div className={styles.mobileDrawerFooter}>
                  <motion.a
                    href="https://wa.me/51922466078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileDrawerCta}
                    onClick={() => setMobileOpen(false)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Conversar por WhatsApp</span>
                    <ArrowUpRight size={18} />
                  </motion.a>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
