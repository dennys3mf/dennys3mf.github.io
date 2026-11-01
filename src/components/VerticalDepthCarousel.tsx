"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, VolumeX } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon } from "./Icons";
import CaseStudyModal from "./CaseStudyModal";
import styles from "./VerticalDepthCarousel.module.css";

interface ProjectItem {
  id: string;
  index: number;
  image: string;
  video?: string;
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
    id: "ahorratiempo.pe",
    index: 0,
    image: "/images/projects/ahorratiempo-preview.webp",
    video: "/videos/ahorratiempo.mp4",
    href: "https://ahorratiempo.pe",
    isLive: true,
    discipline: {
      en: "AI Citizen SaaS",
      es: "SaaS Ciudadano con IA",
    },
    stack: "React 18 · Next.js · Voice AI · Tailwind CSS · Culqi Gateway",
  },
  {
    id: "controla-servilex",
    index: 1,
    image: "/images/projects/controla-servilex-preview.webp",
    video: "/videos/controla.mp4",
    href: "https://github.com/dennys3mf",
    isLive: false,
    discipline: {
      en: "Enterprise Cloud & Legal IT",
      es: "Plataforma Cloud & Legal IT",
    },
    stack: "Python · Django · PostgreSQL · SG-SST Compliance · Multi-Tenant",
  },
  {
    id: "chansa-app",
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
    id: "safety-helmet",
    index: 3,
    image: "/images/projects/safety-helmet-preview.webp",
    video: "/videos/casco-inteligente.mp4",
    href: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
    isLive: false,
    discipline: {
      en: "Industrial IoT & Telemetry",
      es: "IoT & Telemetría Industrial",
    },
    stack: "C++ · Arduino · Microservices · MQ-2 Sensors · GPS Telemetry",
  },
  {
    id: "fintech-sunat",
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
    id: "fiscalizacion-joya",
    index: 5,
    image: "/images/projects/fiscalizacion-joya-preview.webp",
    video: "/videos/app-fiscalizacion.mp4",
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth Intersection Observer to synchronize scroll with sticky cinematic video
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          rootMargin: "-20% 0px -40% 0px",
          threshold: 0.25,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const activeProject = ALL_PROJECTS[activeIndex] || ALL_PROJECTS[0];
  const activeTranslation = t.projects.items[activeProject.index] || t.projects.items[0];

  return (
    <section id="casos" className={styles.showcaseSection}>
      <div className={styles.showcaseContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadgeRow}>
            <span className={styles.sproutIcon} aria-hidden="true">🌿</span>
            <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
          </div>
          <h2 className={styles.title} data-gsap="heading">
            {t.projects.heading}
          </h2>
          <p className={styles.subheading}>{t.projects.subheading}</p>
        </div>

        {/* Option 2: Split Cinematic Showcase Stage */}
        <div className={styles.splitStage}>
          {/* ============================================================
              LEFT COLUMN: STICKY CINEMATIC VIDEO MONITOR
              ============================================================ */}
          <div className={styles.stickyColumn}>
            <div className={styles.cinematicViewportWrap}>
              {/* Soft Ambient Dynamic Backlight */}
              <div className={styles.ambientBacklight} aria-hidden="true" />

              {/* High-Tech Cinematic Device Frame */}
              <div className={styles.cinematicFrame}>
                {/* Browser / Device Chrome Header */}
                <div className={styles.frameChromeBar}>
                  <div className={styles.chromeWindowDots} aria-hidden="true">
                    <span className={`${styles.windowDot} ${styles.dotRed}`} />
                    <span className={`${styles.windowDot} ${styles.dotYellow}`} />
                    <span className={`${styles.windowDot} ${styles.dotGreen}`} />
                  </div>

                  <div className={styles.chromeUrlPill}>
                    <span className={styles.urlProtocol}>https://</span>
                    <span className={styles.urlDomain}>
                      {activeProject.id.includes(".") ? activeProject.id : `${activeProject.id}.pe`}
                    </span>
                  </div>

                  <div className={styles.liveStreamBadge}>
                    <span className={styles.liveDot} />
                    <span className={styles.liveText}>DEMO</span>
                  </div>
                </div>

                {/* Cross-Fade Media Stage (All videos mounted, cross-faded smoothly) */}
                <div className={styles.mediaStage}>
                  {ALL_PROJECTS.map((proj, idx) => {
                    const isCurrent = idx === activeIndex;

                    return (
                      <div
                        key={proj.id}
                        className={`${styles.mediaLayer} ${
                          isCurrent ? styles.mediaLayerActive : ""
                        }`}
                        aria-hidden={!isCurrent}
                      >
                        {proj.video ? (
                          <video
                            src={proj.video}
                            poster={proj.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className={styles.mediaVideo}
                            aria-label={`${t.projects.items[proj.index]?.title || proj.id} video demo`}
                          />
                        ) : (
                          <Image
                            src={proj.image}
                            alt={t.projects.items[proj.index]?.title || proj.id}
                            width={1200}
                            height={825}
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            className={styles.mediaImage}
                          />
                        )}
                      </div>
                    );
                  })}

                  {/* Muted Audio Watermark */}
                  <div className={styles.mutedBadge} aria-label="Muted preview video">
                    <VolumeX size={14} />
                    <span>PRE-RECORDED</span>
                  </div>
                </div>

                {/* Frame Bottom Telemetry HUD */}
                <div className={styles.frameBottomHud}>
                  <div className={styles.hudMeta}>
                    <span className={styles.hudDiscipline}>
                      {activeProject.discipline[language]}
                    </span>
                    <span className={styles.hudTitle}>{activeTranslation.title}</span>
                  </div>

                  <div className={styles.hudCounter}>
                    <span className={styles.counterNum}>
                      0{activeIndex + 1}
                    </span>
                    <span className={styles.counterSlash}>/</span>
                    <span className={styles.counterTotal}>
                      0{ALL_PROJECTS.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: SCROLLABLE BOTANICAL VINE & EDITORIAL LEAF CARDS
              ============================================================ */}
          <div className={styles.scrollColumn}>
            {/* Continuous Vertical Botanical Vine Line */}
            <div className={styles.vineTrunk} aria-hidden="true">
              <svg
                className={styles.vineSvg}
                viewBox="0 0 30 1800"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="vineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2E7D32" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>
                <path
                  d="M15 0 C 22 300, 8 600, 16 900 C 24 1200, 10 1500, 15 1800"
                  stroke="rgba(0, 0, 0, 0.08)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M15 0 C 22 300, 8 600, 16 900 C 24 1200, 10 1500, 15 1800"
                  stroke="url(#vineGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Project Editorial Leaf Cards List */}
            <div className={styles.cardsList}>
              {ALL_PROJECTS.map((proj, idx) => {
                const item = t.projects.items[proj.index] || t.projects.items[0];
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={proj.id}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveIndex(idx)}
                    className={`${styles.cardRow} ${
                      isActive ? styles.cardRowActive : ""
                    }`}
                  >
                    {/* Organic Branch Stem Connector */}
                    <div className={styles.stemAnchor} aria-hidden="true">
                      <div
                        className={`${styles.sproutBadge} ${
                          isActive ? styles.sproutBadgeActive : ""
                        }`}
                      >
                        <Image
                          src="/images/leaf-sprout.webp"
                          alt=""
                          width={48}
                          height={48}
                          className={styles.sproutImg}
                        />
                      </div>

                      <svg
                        className={styles.stemCurveSvg}
                        viewBox="0 0 40 28"
                        fill="none"
                      >
                        <path
                          d="M0 14 C 18 14, 25 14, 40 14"
                          stroke={isActive ? "#10B981" : "#A7F3D0"}
                          strokeWidth={isActive ? "4" : "2.5"}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Editorial Leaf Card */}
                    <article
                      className={`${styles.editorialLeaf} ${
                        isActive ? styles.editorialLeafActive : ""
                      }`}
                      aria-label={`${item.title} (${idx + 1} de ${ALL_PROJECTS.length})`}
                    >
                      {/* Leaf Vein Accent */}
                      <span className={styles.leafVeinLine} aria-hidden="true" />

                      {/* Mobile Inline Video (Only rendered on mobile viewport < 1024px) */}
                      <div className={styles.mobileVideoFrame}>
                        {proj.video ? (
                          <video
                            src={proj.video}
                            poster={proj.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className={styles.mobileVideo}
                            aria-label={`${item.title} video`}
                          />
                        ) : (
                          <Image
                            src={proj.image}
                            alt={item.title}
                            width={1200}
                            height={825}
                            className={styles.mobileVideo}
                          />
                        )}
                      </div>

                      {/* Meta Top Bar */}
                      <div className={styles.leafMetaTop}>
                        <span className={styles.leafDiscipline}>
                          {proj.discipline[language]}
                        </span>
                        <span className={styles.leafOrderNum}>HOJA 0{idx + 1}</span>
                      </div>

                      {/* Title & Description */}
                      <div className={styles.leafBody}>
                        <h3 className={styles.leafTitle}>{item.title}</h3>
                        <p className={styles.leafDesc}>{item.desc}</p>
                      </div>

                      {/* Measurable Impact Key-Value Ribbon */}
                      {item.impactList && item.impactList.length > 0 && (
                        <div className={styles.leafImpactGrid}>
                          {item.impactList.map((kpi, kIdx) => (
                            <div key={kIdx} className={styles.leafImpactItem}>
                              <span className={styles.leafImpactVal}>{kpi.value}</span>
                              <span className={styles.leafImpactLabel}>{kpi.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Plain-Text Technologies Stack */}
                      <div className={styles.leafTechRow}>
                        <span className={styles.leafTechLabel}>
                          {t.projects.technologiesLabel}
                        </span>
                        <span className={styles.leafTechText}>{proj.stack}</span>
                      </div>

                      {/* Action Buttons: Case Study Trigger + Live/GitHub Link */}
                      <div className={styles.leafActions}>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCaseStudyId(proj.id);
                          }}
                          className={styles.leafCaseStudyBtn}
                          aria-label={`${t.projects.viewCaseStudy}: ${item.title}`}
                        >
                          <span>{t.projects.viewCaseStudy}</span>
                          <ArrowUpRight size={16} />
                        </button>

                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={styles.leafExternalBtn}
                        >
                          {proj.isLive ? (
                            <>
                              <span>{t.projects.visitProject}</span>
                              <ArrowUpRight size={15} />
                            </>
                          ) : (
                            <>
                              <GithubIcon size={14} />
                              <span>{t.projects.viewGithub}</span>
                              <ArrowUpRight size={14} />
                            </>
                          )}
                        </a>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Full In-Depth Engineering Modal */}
      <CaseStudyModal
        isOpen={!!selectedCaseStudyId}
        onClose={() => setSelectedCaseStudyId(null)}
        caseStudy={selectedCaseStudyId ? t.projects.caseStudies[selectedCaseStudyId] : null}
        labels={{
          close: t.projects.closeCaseStudy,
          tag: t.projects.caseStudyTag,
          impactTitle: t.projects.measurableImpact,
          architectureTitle: t.projects.architectureHeader,
          problemTitle: t.projects.problemTitle,
          solutionTitle: t.projects.solutionTitle,
          technologiesTitle: t.projects.technologiesTitle,
          visitLive: t.projects.visitProject,
          viewGithub: t.projects.viewGithub,
        }}
      />
    </section>
  );
}
