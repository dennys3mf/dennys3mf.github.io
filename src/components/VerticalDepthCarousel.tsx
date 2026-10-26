"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronUp, ChevronDown, MousePointer } from "lucide-react";
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
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  const isWheelingRef = useRef(false);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev < ALL_PROJECTS.length - 1 ? prev + 1 : 0));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : ALL_PROJECTS.length - 1));
  }, []);

  // Wheel listener with boundary escape for natural page scrolling
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (e: WheelEvent) => {
      // If at boundary, let natural page scroll happen
      if (activeIdx === 0 && e.deltaY < 0) return;
      if (activeIdx === ALL_PROJECTS.length - 1 && e.deltaY > 0) return;

      if (isWheelingRef.current) return;

      if (Math.abs(e.deltaY) > 30) {
        e.preventDefault();
        isWheelingRef.current = true;

        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }

        setTimeout(() => {
          isWheelingRef.current = false;
        }, 550);
      }
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => stage.removeEventListener("wheel", handleWheel);
  }, [activeIdx, handleNext, handlePrev]);

  // Touch gestures for mobile/tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartY.current = null;
  };

  // 3D Depth Card Stacking Transform Calculator
  const getCardStyle = (index: number) => {
    const diff = index - activeIdx;

    if (diff === 0) {
      return {
        transform: "translate3d(0, 0, 0px) scale(1)",
        opacity: 1,
        zIndex: 30,
        filter: "blur(0px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1) {
      return {
        transform: "translate3d(0, 42px, -80px) scale(0.93)",
        opacity: 0.65,
        zIndex: 25,
        filter: "blur(0.5px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === 2) {
      return {
        transform: "translate3d(0, 80px, -160px) scale(0.86)",
        opacity: 0.35,
        zIndex: 20,
        filter: "blur(1.5px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff >= 3) {
      return {
        transform: "translate3d(0, 114px, -240px) scale(0.8)",
        opacity: 0.12,
        zIndex: 15,
        filter: "blur(3px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === -1) {
      return {
        transform: "translate3d(0, -85px, 60px) scale(1.04)",
        opacity: 0,
        zIndex: 10,
        filter: "blur(2px)",
        pointerEvents: "none" as const,
      };
    } else {
      return {
        transform: "translate3d(0, -130px, 120px) scale(1.08)",
        opacity: 0,
        zIndex: 5,
        filter: "blur(4px)",
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section id="casos" className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        {/* Simple & Professional Header (Zero Chips) */}
        <div className={styles.carouselHeader}>
          <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
          <h2 className={styles.title} data-gsap="heading">
            {t.projects.heading}
          </h2>
          <p className={styles.subheading}>{t.projects.subheading}</p>
        </div>

        {/* 3D Vertical Depth Carousel Stage */}
        <div className={styles.stageWrapper}>
          <div
            className={styles.stage3D}
            ref={stageRef}
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
                  className={styles.card3D}
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

          {/* Minimalist Vertical Navigation Rail */}
          <div
            className={styles.navRail}
            role="toolbar"
            aria-label="Controles del carrusel"
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              className={styles.navArrowBtn}
              aria-label="Proyecto anterior"
              title="Proyecto anterior"
            >
              <ChevronUp size={20} />
            </button>

            <span className={styles.navFraction} aria-hidden="true">
              0{activeIdx + 1}/0{ALL_PROJECTS.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIdx === ALL_PROJECTS.length - 1}
              className={styles.navArrowBtn}
              aria-label="Siguiente proyecto"
              title="Siguiente proyecto"
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>

        {/* Minimal Subtle Navigation Hint */}
        <div className={styles.stageFooterHint}>
          <span>
            <MousePointer size={14} className="text-slate-400" />
            {t.projects.scrollHint}
          </span>
          <span>
            {language === "en"
              ? "Click any background project to focus"
              : "Haz clic en cualquier proyecto del fondo para enfocarlo"}
          </span>
        </div>
      </div>
    </section>
  );
}
