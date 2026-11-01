"use client";

import React, { useState } from "react";
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
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);

  return (
    <section id="casos" className={styles.section}>
      <div className={styles.container}>
        {/* Clean, Modern Section Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
          <h2 className={styles.title} data-gsap="heading">
            {t.projects.heading}
          </h2>
          <p className={styles.subheading}>{t.projects.subheading}</p>
        </div>

        {/* Clean Modern Projects Showcase List */}
        <div className={styles.projectsList}>
          {ALL_PROJECTS.map((proj, idx) => {
            const item = t.projects.items[proj.index] || t.projects.items[0];

            return (
              <article
                key={proj.id}
                className={styles.projectCard}
                aria-label={`${item.title} (${idx + 1} / ${ALL_PROJECTS.length})`}
              >
                {/* Left Side: Clean Device Browser Frame with Autoplay Video / Preview */}
                <div className={styles.mediaCol}>
                  <div className={styles.deviceFrame}>
                    {/* Minimal Browser Top Bar */}
                    <div className={styles.frameHeader} aria-hidden="true">
                      <div className={styles.trafficDots}>
                        <span className={`${styles.dot} ${styles.dotRed}`} />
                        <span className={`${styles.dot} ${styles.dotYellow}`} />
                        <span className={`${styles.dot} ${styles.dotGreen}`} />
                      </div>
                      <div className={styles.addressBar}>
                        <span className={styles.urlProtocol}>https://</span>
                        <span className={styles.urlDomain}>
                          {proj.id.includes(".") ? proj.id : `${proj.id}.dev`}
                        </span>
                      </div>
                      {proj.video && (
                        <div className={styles.liveBadge}>
                          <span className={styles.livePulse} />
                          <span className={styles.liveText}>DEMO</span>
                        </div>
                      )}
                    </div>

                    {/* Media Display Area */}
                    <div className={styles.mediaScreen}>
                      {proj.video ? (
                        <>
                          <video
                            src={proj.video}
                            poster={proj.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className={styles.videoPlayer}
                            aria-label={`${item.title} video demo`}
                          />
                          <div className={styles.mutedTag}>
                            <VolumeX size={13} />
                            <span>PRE-RECORDED</span>
                          </div>
                        </>
                      ) : (
                        <Image
                          src={proj.image}
                          alt={item.title}
                          width={1200}
                          height={825}
                          priority={idx === 0}
                          loading={idx === 0 ? "eager" : "lazy"}
                          className={styles.imagePlayer}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Technical Specs & Information */}
                <div className={styles.infoCol}>
                  {/* Meta Bar: Discipline & Project Number */}
                  <div className={styles.metaRow}>
                    <span className={styles.discipline}>
                      {proj.discipline[language]}
                    </span>
                    <span className={styles.projectNumber}>
                      0{idx + 1} <span className={styles.numberTotal}>/ 0{ALL_PROJECTS.length}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className={styles.bodyContent}>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    <p className={styles.projectDesc}>{item.desc}</p>
                  </div>

                  {/* Measurable Impact Key Metrics Ribbon (Scannable Data System) */}
                  {item.impactList && item.impactList.length > 0 && (
                    <div className={styles.impactGrid}>
                      {item.impactList.map((kpi, kIdx) => (
                        <div key={kIdx} className={styles.impactItem}>
                          <span className={styles.impactValue}>{kpi.value}</span>
                          <span className={styles.impactLabel}>{kpi.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Plain-Text Technologies Stack */}
                  <div className={styles.techRow}>
                    <span className={styles.techLabel}>
                      {t.projects.technologiesLabel}
                    </span>
                    <span className={styles.techList}>{proj.stack}</span>
                  </div>

                  {/* Action Buttons: Case Study Trigger + Live/GitHub External Link */}
                  <div className={styles.actionsRow}>
                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudyId(proj.id)}
                      className={styles.caseStudyBtn}
                      aria-label={`${t.projects.viewCaseStudy}: ${item.title}`}
                    >
                      <span>{t.projects.viewCaseStudy}</span>
                      <ArrowUpRight size={16} />
                    </button>

                    <a
                      href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLinkBtn}
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
                </div>
              </article>
            );
          })}
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
