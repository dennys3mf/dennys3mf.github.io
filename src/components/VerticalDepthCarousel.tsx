"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronUp,
  ChevronDown,
  Lock,
  Sparkles,
  MousePointer,
  Layers,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon } from "./Icons";
import styles from "./VerticalDepthCarousel.module.css";

interface ProjectItem {
  index: number;
  category: "ai-web" | "mobile" | "cloud-systems";
  image: string;
  href: string;
  displayUrl: string;
  isLive: boolean;
  techStack: string[];
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    index: 0,
    category: "ai-web",
    image: "/images/projects/ahorratiempo-preview.webp",
    href: "https://ahorratiempo.pe",
    displayUrl: "https://ahorratiempo.pe",
    isLive: true,
    techStack: ["React 18", "Next.js", "Voice AI", "Tailwind CSS", "Culqi Gateway"],
  },
  {
    index: 1,
    category: "cloud-systems",
    image: "/images/projects/controla-servilex-preview.webp",
    href: "https://github.com/dennys3mf",
    displayUrl: "controla.servilex.pe",
    isLive: false,
    techStack: ["Python", "Django", "PostgreSQL", "SG-SST Matrix", "Multi-Tenant"],
  },
  {
    index: 2,
    category: "mobile",
    image: "/images/projects/chansa-app-preview.webp",
    href: "https://github.com/dennys3mf",
    displayUrl: "app.chansa.pe/mobile",
    isLive: false,
    techStack: ["Flutter", "Dart", "Firebase", "Realtime Chat", "Geolocation API"],
  },
  {
    index: 3,
    category: "cloud-systems",
    image: "/images/projects/safety-helmet-preview.webp",
    href: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
    displayUrl: "iot.safety-helmet.io",
    isLive: false,
    techStack: ["C++", "Arduino", "IoT Telemetry", "MQ-2 Gas Sensors", "GPS Tracker"],
  },
  {
    index: 4,
    category: "cloud-systems",
    image: "/images/projects/fintech-sunat-preview.webp",
    href: "https://github.com/dennys3mf",
    displayUrl: "billing.sunat-api.cloud",
    isLive: false,
    techStack: ["Python", "Culqi API", "SUNAT Electronic Invoicing", "XML / CDR"],
  },
  {
    index: 5,
    category: "mobile",
    image: "/images/projects/fiscalizacion-joya-preview.webp",
    href: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
    displayUrl: "fiscalizacion.joya.gob.pe",
    isLive: false,
    techStack: ["Flutter", "SQLite Local", "Offline-First Sync", "Android Tablet"],
  },
];

export default function VerticalDepthCarousel() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "ai-web" | "mobile" | "cloud-systems">("all");
  const [activeIdx, setActiveIdx] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  const isWheelingRef = useRef(false);

  // Filter projects by category
  const filteredProjects = ALL_PROJECTS.filter((proj) => {
    if (activeCategory === "all") return true;
    return proj.category === activeCategory;
  });

  // Safe active index calculation
  const safeActiveIdx = activeIdx >= filteredProjects.length ? 0 : activeIdx;

  const handleCategorySelect = (category: "all" | "ai-web" | "mobile" | "cloud-systems") => {
    setActiveCategory(category);
    setActiveIdx(0);
  };

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  }, [filteredProjects.length]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  }, [filteredProjects.length]);

  // Wheel listener with boundary escape for natural page scrolling
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (e: WheelEvent) => {
      // If at start and scrolling up, let standard page scroll continue
      if (activeIdx === 0 && e.deltaY < 0) return;
      // If at end and scrolling down, let standard page scroll continue
      if (activeIdx === filteredProjects.length - 1 && e.deltaY > 0) return;

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
  }, [activeIdx, filteredProjects.length, handleNext, handlePrev]);

  // Touch swipe support
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
    const diff = index - safeActiveIdx;

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
        transform: "translate3d(0, 48px, -110px) scale(0.92)",
        opacity: 0.72,
        zIndex: 25,
        filter: "blur(0.6px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === 2) {
      return {
        transform: "translate3d(0, 92px, -220px) scale(0.84)",
        opacity: 0.42,
        zIndex: 20,
        filter: "blur(1.6px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff >= 3) {
      return {
        transform: "translate3d(0, 130px, -330px) scale(0.76)",
        opacity: 0.18,
        zIndex: 15,
        filter: "blur(3px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === -1) {
      return {
        transform: "translate3d(0, -90px, 80px) scale(1.05)",
        opacity: 0,
        zIndex: 10,
        filter: "blur(2px)",
        pointerEvents: "none" as const,
      };
    } else {
      return {
        transform: "translate3d(0, -140px, 140px) scale(1.1)",
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
        {/* Header with High-Contrast Typography */}
        <div className={styles.carouselHeader}>
          <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
          <h2 className={styles.title} data-gsap="heading">
            {t.projects.heading}
          </h2>
          <p className={styles.subheading}>{t.projects.subheading}</p>

          {/* Interactive Category Filter Pills */}
          <div
            className={styles.filterBar}
            role="tablist"
            aria-label="Filtrar proyectos"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "all"}
              onClick={() => handleCategorySelect("all")}
              className={`${styles.filterPill} ${
                activeCategory === "all" ? styles.filterPillActive : ""
              }`}
            >
              <span>{t.projects.categories.all}</span>
              <span className={styles.filterCount}>{ALL_PROJECTS.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "ai-web"}
              onClick={() => handleCategorySelect("ai-web")}
              className={`${styles.filterPill} ${
                activeCategory === "ai-web" ? styles.filterPillActive : ""
              }`}
            >
              <span>{t.projects.categories.aiWeb}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "mobile"}
              onClick={() => handleCategorySelect("mobile")}
              className={`${styles.filterPill} ${
                activeCategory === "mobile" ? styles.filterPillActive : ""
              }`}
            >
              <span>{t.projects.categories.mobile}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "cloud-systems"}
              onClick={() => handleCategorySelect("cloud-systems")}
              className={`${styles.filterPill} ${
                activeCategory === "cloud-systems" ? styles.filterPillActive : ""
              }`}
            >
              <span>{t.projects.categories.cloudSystems}</span>
            </button>
          </div>
        </div>

        {/* 3D Vertical Depth Carousel Stage */}
        <div className={styles.stageWrapper}>
          <div
            className={styles.stage3D}
            ref={stageRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {filteredProjects.map((proj, idx) => {
              const item = t.projects.items[proj.index];
              if (!item) return null;
              const cardStyle = getCardStyle(idx);
              const isCurrent = idx === safeActiveIdx;

              return (
                <div
                  key={proj.index}
                  className={styles.card3D}
                  style={cardStyle}
                  onClick={() => {
                    if (!isCurrent) setActiveIdx(idx);
                  }}
                  role="region"
                  aria-label={`${item.title} (${idx + 1} de ${filteredProjects.length})`}
                  aria-hidden={!isCurrent && idx < safeActiveIdx}
                >
                  <div className={styles.cardInner}>
                    {/* Visual Mockup Stage */}
                    <div className={styles.cardVisual}>
                      <div className={styles.cardBrowserHeader}>
                        <div className={styles.browserDots} aria-hidden="true">
                          <span className={`${styles.dot} ${styles.dotRed}`} />
                          <span className={`${styles.dot} ${styles.dotYellow}`} />
                          <span className={`${styles.dot} ${styles.dotGreen}`} />
                        </div>
                        <div className={styles.browserUrlPill}>
                          <Lock size={10} className="text-slate-400 shrink-0" />
                          <span>{proj.displayUrl}</span>
                        </div>
                      </div>

                      <div className={styles.cardImageWrap}>
                        <Image
                          src={proj.image}
                          alt={item.title}
                          width={1200}
                          height={825}
                          priority={idx === 0}
                          loading={idx === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>

                    {/* Information & Impact Stage */}
                    <div className={styles.cardInfo}>
                      <div className={styles.cardMetaTop}>
                        <span className={styles.cardCounter}>
                          {t.projects.projectCounter} 0{idx + 1} / 0{filteredProjects.length}
                        </span>
                        <span className={styles.cardTagPill}>{item.tag}</span>
                      </div>

                      <div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>

                      {item.metrics && (
                        <div className={styles.cardMetricsRow}>
                          <span className={styles.cardMetricsBadge}>
                            <Sparkles size={13} className="shrink-0" />
                            <span>{item.metrics}</span>
                          </span>
                        </div>
                      )}

                      <div className={styles.cardTechList}>
                        {proj.techStack.map((tech) => (
                          <span key={tech} className={styles.cardTechChip}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className={styles.cardActions}>
                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardPrimaryBtn}
                          onClick={(e) => {
                            // Don't trigger card selection if clicking CTA
                            e.stopPropagation();
                          }}
                        >
                          {proj.isLive ? (
                            <>
                              <span>{t.projects.visitProject}</span>
                              <ArrowUpRight size={18} />
                            </>
                          ) : (
                            <>
                              <GithubIcon size={16} />
                              <span>{t.projects.viewGithub}</span>
                              <ArrowUpRight size={18} />
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

          {/* Vertical Navigation Rail */}
          <div
            className={styles.navRail}
            role="toolbar"
            aria-label="Controles del carrusel 3D"
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              className={styles.navArrowBtn}
              aria-label="Proyecto anterior"
              title="Proyecto anterior"
            >
              <ChevronUp size={22} />
            </button>

            <div className={styles.trackPills} aria-hidden="true">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={`${styles.trackDot} ${
                    i === safeActiveIdx ? styles.trackDotActive : ""
                  }`}
                  aria-label={`Ir al proyecto ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIdx === filteredProjects.length - 1}
              className={styles.navArrowBtn}
              aria-label="Siguiente proyecto"
              title="Siguiente proyecto"
            >
              <ChevronDown size={22} />
            </button>
          </div>
        </div>

        {/* Interaction Hint */}
        <div className={styles.stageFooterHint}>
          <span>
            <MousePointer size={14} className="text-blue-400" />
            {t.projects.scrollHint}
          </span>
          <span className="text-slate-600">•</span>
          <span>
            <Layers size={14} className="text-purple-400" />
            {language === "en" ? "Click any card in background to focus" : "Haz clic en cualquier tarjeta del fondo para enfocarla"}
          </span>
        </div>
      </div>
    </section>
  );
}
