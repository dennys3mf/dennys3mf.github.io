"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon } from "./Icons";
import CaseStudyModal from "./CaseStudyModal";
import styles from "./VerticalDepthCarousel.module.css";

interface ProjectItem {
  id: string;
  tabName: string;
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
    tabName: "ahorratiempo.pe",
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
    tabName: "CONTROLA Servilex",
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
    tabName: "CHANSA Mobile",
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
    tabName: "Safety Helmet IoT",
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
    tabName: "Facturación SUNAT",
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
    tabName: "Fiscalización Joya",
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
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);

  const activeProject = ALL_PROJECTS[activeIdx] || ALL_PROJECTS[0];
  const activeItem = t.projects.items[activeProject.index] || t.projects.items[0];
  const activeCaseStudy = t.projects.caseStudies[activeProject.id];

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : ALL_PROJECTS.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev < ALL_PROJECTS.length - 1 ? prev + 1 : 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section id="casos" className={styles.appleSection}>
      <div className={styles.appleContainer}>
        {/* Apple Style Section Header */}
        <div className={styles.appleHeader}>
          <p className={styles.appleEyebrow}>{t.projects.eyebrow}</p>
          <h2 className={styles.appleTitle} data-gsap="heading">
            {t.projects.heading}
          </h2>
          <p className={styles.appleSubheading}>{t.projects.subheading}</p>
        </div>

        {/* Apple Product Lineup Switcher (Segmented Subnav Dock) */}
        <div className={styles.lineupDockWrap}>
          <div className={styles.lineupDock} role="tablist" aria-label="Project Selection">
            {ALL_PROJECTS.map((proj, idx) => {
              const isSelected = idx === activeIdx;

              return (
                <button
                  key={proj.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIdx(idx)}
                  className={`${styles.dockTab} ${isSelected ? styles.dockTabActive : ""}`}
                >
                  <span className={styles.dockTabLabel}>{proj.tabName}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="appleActivePill"
                      className={styles.dockTabActivePill}
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Apple Keynote Showcase Stage */}
        <div className={styles.showcaseStage}>
          {/* Previous / Next Floating Chevrons */}
          <button
            type="button"
            onClick={handlePrev}
            className={`${styles.navChevron} ${styles.chevronLeft}`}
            aria-label="Previous project"
            title="Previous project (←)"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className={`${styles.navChevron} ${styles.chevronRight}`}
            aria-label="Next project"
            title="Next project (→)"
          >
            <ChevronRight size={22} />
          </button>

          {/* Active Product Billboard Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              className={styles.productBillboard}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Product Headline & Meta Row */}
              <div className={styles.billboardTop}>
                <div className={styles.billboardMeta}>
                  <span className={styles.disciplineBadge}>
                    {activeProject.discipline[language]}
                  </span>
                  <span className={styles.counterBadge}>
                    0{activeIdx + 1} <span className={styles.counterTotal}>/ 0{ALL_PROJECTS.length}</span>
                  </span>
                </div>

                <h3 className={styles.productName}>{activeItem.title}</h3>
                <p className={styles.productTagline}>{activeItem.desc}</p>
              </div>

              {/* Apple Studio Display / Titanium Bezel Frame */}
              <div className={styles.hardwareDisplayWrap}>
                <div className={styles.ambientGlow} aria-hidden="true" />

                <div className={styles.hardwareBezel}>
                  {/* Top Display Bezel Bar with Camera Dot and Clean Domain */}
                  <div className={styles.bezelHeader}>
                    <div className={styles.trafficDots}>
                      <span className={`${styles.dot} ${styles.dotRed}`} />
                      <span className={`${styles.dot} ${styles.dotYellow}`} />
                      <span className={`${styles.dot} ${styles.dotGreen}`} />
                    </div>

                    <div className={styles.bezelDomainPill}>
                      <span className={styles.domainProtocol}>https://</span>
                      <span className={styles.domainName}>
                        {activeProject.id.includes(".") ? activeProject.id : `${activeProject.id}.pe`}
                      </span>
                    </div>

                    <div className={styles.proResBadge}>
                      <span className={styles.proResDot} />
                      <span className={styles.proResText}>DEMO</span>
                    </div>
                  </div>

                  {/* Liquid Retina Screen Surface with Pre-recorded Video or High-Res Preview */}
                  <div className={styles.screenSurface}>
                    {activeProject.video ? (
                      <>
                        <video
                          key={activeProject.video}
                          src={activeProject.video}
                          poster={activeProject.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className={styles.screenVideo}
                          aria-label={`${activeItem.title} video demo`}
                        />
                        <div className={styles.watermarkTag}>
                          <VolumeX size={13} />
                          <span>PRE-RECORDED STREAM</span>
                        </div>
                      </>
                    ) : (
                      <Image
                        src={activeProject.image}
                        alt={activeItem.title}
                        width={1400}
                        height={880}
                        priority
                        className={styles.screenImage}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Apple Keynote Stat Callouts (Giant Numbers & Punchy Insights) */}
              <div className={styles.statsCalloutSection}>
                <div className={styles.statsGrid}>
                  {(activeCaseStudy?.impactMetrics || activeItem.impactList || []).slice(0, 3).map((metric, mIdx) => (
                    <div key={mIdx} className={styles.statBlock}>
                      <span className={styles.statGiantNum}>{metric.value}</span>
                      <span className={styles.statTitle}>{metric.label}</span>
                      {"detail" in metric && metric.detail && (
                        <p className={styles.statDetail}>{metric.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Apple Bottom Specs & Action Row */}
              <div className={styles.billboardFooter}>
                <div className={styles.techSpecsCol}>
                  <span className={styles.techSpecsLabel}>
                    {t.projects.technologiesLabel}
                  </span>
                  <span className={styles.techSpecsText}>{activeProject.stack}</span>
                </div>

                <div className={styles.actionButtonsCol}>
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudyId(activeProject.id)}
                    className={styles.applePrimaryBtn}
                    aria-label={`${t.projects.viewCaseStudy}: ${activeItem.title}`}
                  >
                    <span>{t.projects.viewCaseStudy}</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <a
                    href={activeProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.appleSecondaryLink}
                  >
                    {activeProject.isLive ? (
                      <>
                        <span>{t.projects.visitProject}</span>
                        <ArrowUpRight size={16} />
                      </>
                    ) : (
                      <>
                        <GithubIcon size={15} />
                        <span>{t.projects.viewGithub}</span>
                        <ArrowUpRight size={15} />
                      </>
                    )}
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
