"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon } from "./Icons";
import styles from "./VerticalDepthCarousel.module.css";

interface ProjectItem {
  index: number;
  image: string;
  href: string;
  isLive: boolean;
  discipline: {
    en: string;
    es: string;
  };
  stack: string;
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    index: 0,
    image: "/images/projects/ahorratiempo-preview.webp",
    href: "https://ahorratiempo.pe",
    isLive: true,
    discipline: {
      en: "AI Citizen SaaS",
      es: "SaaS Ciudadano con IA",
    },
    stack: "React 18 · Next.js · Voice AI · Tailwind CSS · Culqi Gateway",
  },
  {
    index: 1,
    image: "/images/projects/controla-servilex-preview.webp",
    href: "https://github.com/dennys3mf",
    isLive: false,
    discipline: {
      en: "Enterprise Cloud & Legal IT",
      es: "Plataforma Cloud & Legal IT",
    },
    stack: "Python · Django · PostgreSQL · SG-SST Compliance · Multi-Tenant",
  },
  {
    index: 2,
    image: "/images/projects/chansa-app-preview.webp",
    href: "https://github.com/dennys3mf",
    isLive: false,
    discipline: {
      en: "Cross-Platform Mobile App",
      es: "App Móvil Multiplataforma",
    },
    stack: "Flutter · Dart · Firebase · Realtime Chat · Geolocation API",
  },
  {
    index: 3,
    image: "/images/projects/safety-helmet-preview.webp",
    href: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
    isLive: false,
    discipline: {
      en: "Industrial IoT & Telemetry",
      es: "IoT & Telemetría Industrial",
    },
    stack: "C++ · Arduino · Microservices · MQ-2 Sensors · GPS Telemetry",
  },
  {
    index: 4,
    image: "/images/projects/fintech-sunat-preview.webp",
    href: "https://github.com/dennys3mf",
    isLive: false,
    discipline: {
      en: "Fintech & Electronic Billing",
      es: "Fintech & Facturación Electrónica",
    },
    stack: "Python · Culqi API · SUNAT XML / CDR · RESTful Services",
  },
  {
    index: 5,
    image: "/images/projects/fiscalizacion-joya-preview.webp",
    href: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
    isLive: false,
    discipline: {
      en: "Field Inspection Tablet App",
      es: "App de Inspección en Campo",
    },
    stack: "Flutter · SQLite Local · Offline-First Sync · Android Tablet",
  },
];

export default function VerticalDepthCarousel() {
  const { t, language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartY = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev < ALL_PROJECTS.length - 1 ? prev + 1 : 0));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : ALL_PROJECTS.length - 1));
  }, []);

  // Touch gesture handler for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartY.current = null;
  };

  // Orderly layered vertical sliding card transform
  const getCardStyle = (index: number) => {
    const diff = index - activeIdx;

    if (diff === 0) {
      return {
        transform: "translateY(0px) scale(1)",
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1) {
      return {
        transform: "translateY(24px) scale(0.96)",
        opacity: 0.65,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    } else if (diff === 2) {
      return {
        transform: "translateY(48px) scale(0.92)",
        opacity: 0.35,
        zIndex: 10,
        pointerEvents: "auto" as const,
      };
    } else if (diff >= 3) {
      return {
        transform: "translateY(70px) scale(0.88)",
        opacity: 0,
        zIndex: 5,
        pointerEvents: "none" as const,
      };
    } else if (diff === -1) {
      return {
        transform: "translateY(-55px) scale(0.96)",
        opacity: 0,
        zIndex: 5,
        pointerEvents: "none" as const,
      };
    } else {
      return {
        transform: "translateY(-90px) scale(0.92)",
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section id="casos" className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        {/* Header Row: Title on Left, Sleek Navigation on Right */}
        <div className={styles.carouselHeaderRow}>
          <div className={styles.carouselHeaderLeft}>
            <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
            <h2 className={styles.title} data-gsap="heading">
              {t.projects.heading}
            </h2>
            <p className={styles.subheading}>{t.projects.subheading}</p>
          </div>

          {/* Sleek Navigation Controls */}
          <div
            className={styles.navControlsGroup}
            role="toolbar"
            aria-label="Controles de navegación de proyectos"
          >
            <div className={styles.navCounter} aria-live="polite">
              <span>0{activeIdx + 1}</span>
              <span className={styles.navCounterTotal}> / 0{ALL_PROJECTS.length}</span>
            </div>

            <div className={styles.navButtonsRow}>
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIdx === 0}
                className={styles.navBtn}
                aria-label="Proyecto anterior"
                title="Proyecto anterior"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeIdx === ALL_PROJECTS.length - 1}
                className={styles.navBtn}
                aria-label="Siguiente proyecto"
                title="Siguiente proyecto"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Orderly Layered Card Deck */}
        <div className={styles.stageWrapper}>
          <div
            className={styles.deckStage}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {ALL_PROJECTS.map((proj, idx) => {
              const item = t.projects.items[proj.index];
              if (!item) return null;
              const cardStyle = getCardStyle(idx);
              const isCurrent = idx === activeIdx;

              return (
                <div
                  key={proj.index}
                  className={styles.cardDeckItem}
                  style={cardStyle}
                  onClick={() => {
                    if (!isCurrent) setActiveIdx(idx);
                  }}
                  role="region"
                  aria-label={`${item.title} (${idx + 1} de ${ALL_PROJECTS.length})`}
                  aria-hidden={!isCurrent && idx < activeIdx}
                >
                  <div className={styles.cardInner}>
                    {/* Visual Screenshot Stage */}
                    <div className={styles.cardVisual}>
                      <Image
                        src={proj.image}
                        alt={item.title}
                        width={1200}
                        height={825}
                        priority={idx === 0}
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    </div>

                    {/* Information Stage: Pure Clean Typography, Zero Chips */}
                    <div className={styles.cardInfo}>
                      <div className={styles.cardMetaTop}>
                        <span className={styles.cardDiscipline}>
                          {proj.discipline[language]}
                        </span>
                        <span className={styles.cardCounter}>
                          0{idx + 1} / 0{ALL_PROJECTS.length}
                        </span>
                      </div>

                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>

                      {/* Plain-Text Tech Stack (No Chips/Badges) */}
                      <div className={styles.cardTechRow}>
                        <span className={styles.cardTechLabel}>
                          {language === "en" ? "Technologies" : "Tecnologías"}
                        </span>
                        <span className={styles.cardTechText}>{proj.stack}</span>
                      </div>

                      {/* Professional Clean Action Link */}
                      <div className={styles.cardActions}>
                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardPrimaryBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          {proj.isLive ? (
                            <>
                              <span>{t.projects.visitProject}</span>
                              <ArrowUpRight size={17} />
                            </>
                          ) : (
                            <>
                              <GithubIcon size={15} />
                              <span>{t.projects.viewGithub}</span>
                              <ArrowUpRight size={17} />
                            </>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Minimalist Dot/Pill Track */}
          <div className={styles.deckDotsTrack} aria-hidden="true">
            {ALL_PROJECTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={`${styles.dotBtn} ${
                  i === activeIdx ? styles.dotBtnActive : styles.dotBtnInactive
                }`}
                aria-label={`Ir al proyecto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
