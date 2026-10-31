"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon } from "./Icons";
import styles from "./VerticalDepthCarousel.module.css";

interface ProjectItem {
  index: number;
  image: string;
  video?: string;
  href: string;
  isLive: boolean;
  shortName: {
    en: string;
    es: string;
  };
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
    video: "/videos/ahorratiempo.mp4",
    href: "https://ahorratiempo.pe",
    isLive: true,
    shortName: {
      en: "ahorratiempo.pe",
      es: "ahorratiempo.pe",
    },
    discipline: {
      en: "AI Citizen SaaS",
      es: "SaaS Ciudadano con IA",
    },
    stack: "React 18 · Next.js · Voice AI · Tailwind CSS · Culqi Gateway",
  },
  {
    index: 1,
    image: "/images/projects/controla-servilex-preview.webp",
    video: "/videos/controla.mp4",
    href: "https://github.com/dennys3mf",
    isLive: false,
    shortName: {
      en: "CONTROLA Cloud",
      es: "CONTROLA Cloud",
    },
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
    shortName: {
      en: "CHANSA App",
      es: "CHANSA App",
    },
    discipline: {
      en: "Cross-Platform Mobile App",
      es: "App Móvil Multiplataforma",
    },
    stack: "Flutter · Dart · Firebase · Realtime Chat · Geolocation API",
  },
  {
    index: 3,
    image: "/images/projects/safety-helmet-preview.webp",
    video: "/videos/casco-inteligente.mp4",
    href: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
    isLive: false,
    shortName: {
      en: "Safety Helmet IoT",
      es: "Safety Helmet IoT",
    },
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
    shortName: {
      en: "Facturación SUNAT",
      es: "Facturación SUNAT",
    },
    discipline: {
      en: "Fintech & Electronic Billing",
      es: "Fintech & Facturación Electrónica",
    },
    stack: "Python · Culqi API · SUNAT XML / CDR · RESTful Services",
  },
  {
    index: 5,
    image: "/images/projects/fiscalizacion-joya-preview.webp",
    video: "/videos/app-fiscalizacion.mp4",
    href: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
    isLive: false,
    shortName: {
      en: "Fiscalización Joya",
      es: "Fiscalización Joya",
    },
    discipline: {
      en: "Field Inspection Tablet App",
      es: "App de Inspección en Campo",
    },
    stack: "Flutter · SQLite Local · Offline-First Sync · Android Tablet",
  },
];

const AUTOPLAY_INTERVAL_MS = 6500;

export default function VerticalDepthCarousel() {
  const { t, language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const lastWheelTime = useRef<number>(0);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev < ALL_PROJECTS.length - 1 ? prev + 1 : 0));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : ALL_PROJECTS.length - 1));
  }, []);

  // Smooth automatic rotation with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch gesture handler for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    } else if (Math.abs(diffY) > 50) {
      if (diffY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Wheel interaction over the carousel stage
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 700) return;

    if (e.deltaY > 45 && activeIdx < ALL_PROJECTS.length - 1) {
      setActiveIdx((prev) => prev + 1);
      lastWheelTime.current = now;
    } else if (e.deltaY < -45 && activeIdx > 0) {
      setActiveIdx((prev) => prev - 1);
      lastWheelTime.current = now;
    }
  };

  // 3D Depth Card Stacking Transform
  const getCardStyle = (index: number) => {
    const diff = index - activeIdx;

    if (diff === 0) {
      // In focus
      return {
        transform: "translate3d(0, 0px, 0) scale(1)",
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto" as const,
        visibility: "visible" as const,
      };
    } else if (diff === 1) {
      // Next card peeking from depth
      return {
        transform: "translate3d(0, 26px, 0) scale(0.96)",
        opacity: 0.5,
        zIndex: 20,
        pointerEvents: "auto" as const,
        visibility: "visible" as const,
      };
    } else if (diff === 2) {
      // 2nd card in background
      return {
        transform: "translate3d(0, 50px, 0) scale(0.92)",
        opacity: 0.18,
        zIndex: 10,
        pointerEvents: "none" as const,
        visibility: "visible" as const,
      };
    } else if (diff === -1) {
      // Previous card gliding up and fading out
      return {
        transform: "translate3d(0, -45px, 0) scale(0.97)",
        opacity: 0,
        zIndex: 5,
        pointerEvents: "none" as const,
        visibility: "hidden" as const,
      };
    } else {
      // Far cards hidden
      return {
        transform: "translate3d(0, 65px, 0) scale(0.88)",
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none" as const,
        visibility: "hidden" as const,
      };
    }
  };

  return (
    <section id="casos" className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        {/* Header Row: Title & Subtitle */}
        <div className={styles.carouselHeaderRow}>
          <div className={styles.carouselHeaderLeft}>
            <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
            <h2 className={styles.title} data-gsap="heading">
              {t.projects.heading}
            </h2>
            <p className={styles.subheading}>{t.projects.subheading}</p>
          </div>
        </div>

        {/* Minimalist Project Index Tabs (Without < and > buttons) */}
        <nav
          className={styles.projectTabsRow}
          role="tablist"
          aria-label="Proyectos destacados"
        >
          {ALL_PROJECTS.map((proj, idx) => {
            const isCurrent = idx === activeIdx;
            return (
              <button
                key={proj.index}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-controls={`project-panel-${idx}`}
                onClick={() => setActiveIdx(idx)}
                className={`${styles.projectTabBtn} ${
                  isCurrent ? styles.projectTabBtnActive : ""
                }`}
              >
                <span className={styles.tabNum}>0{idx + 1}</span>
                <span className={styles.tabName}>{proj.shortName[language]}</span>
                {isCurrent && (
                  <span className={styles.tabActiveIndicator} aria-hidden="true">
                    <span
                      key={activeIdx}
                      className={styles.tabProgressFill}
                      style={{
                        animationDuration: `${AUTOPLAY_INTERVAL_MS}ms`,
                        animationPlayState: isPaused ? "paused" : "running",
                      }}
                    />
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* 3D Depth Card Stage with Orderly Fluid Transition */}
        <div
          ref={stageRef}
          className={styles.stageWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <div className={styles.deckStage}>
            {ALL_PROJECTS.map((proj, idx) => {
              const item = t.projects.items[proj.index];
              if (!item) return null;

              const isCurrent = idx === activeIdx;
              const cardStyle = getCardStyle(idx);

              return (
                <article
                  key={proj.index}
                  id={`project-panel-${idx}`}
                  role="tabpanel"
                  aria-hidden={!isCurrent}
                  className={`${styles.cardDeckItem} ${
                    isCurrent ? styles.cardActive : ""
                  }`}
                  style={cardStyle}
                  onClick={() => {
                    if (!isCurrent) setActiveIdx(idx);
                  }}
                  tabIndex={isCurrent ? 0 : -1}
                >
                  <div className={styles.cardInner}>
                    {/* Visual Media Stage: Video or Crisp High-Fidelity Poster */}
                    <div className={styles.cardVisual}>
                      {proj.video ? (
                        <video
                          ref={(el) => {
                            if (el) {
                              el.defaultMuted = true;
                              el.muted = true;
                              if (isCurrent) {
                                el.play().catch(() => {});
                              } else {
                                el.pause();
                              }
                            }
                          }}
                          src={proj.video}
                          poster={proj.image}
                          loop
                          muted
                          playsInline
                          preload={isCurrent ? "auto" : "metadata"}
                          className={styles.cardVideo}
                          aria-label={`${item.title} video`}
                        />
                      ) : (
                        <Image
                          src={proj.image}
                          alt={item.title}
                          width={1200}
                          height={825}
                          priority={idx === 0}
                          loading={idx === 0 ? "eager" : "lazy"}
                          className={styles.cardImage}
                        />
                      )}
                    </div>

                    {/* Editorial Information Stage (Pure Typography, Zero Chips) */}
                    <div className={styles.cardInfo}>
                      <div className={styles.cardMetaTop}>
                        <span className={styles.cardDiscipline}>
                          {proj.discipline[language]}
                        </span>
                      </div>

                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>

                      {/* Plain-Text Tech Stack (No Chips / Badges) */}
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
