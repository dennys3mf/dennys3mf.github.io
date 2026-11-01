"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
    <section id="casos" className={styles.treeSection}>
      <div className={styles.treeContainer}>
        {/* Section Header with Organic Foliage Accent */}
        <div className={styles.treeHeader}>
          <div className={styles.headerBadgeRow}>
            <span className={styles.sproutIcon} aria-hidden="true">🌿</span>
            <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
          </div>
          <h2 className={styles.title} data-gsap="heading">
            {t.projects.heading}
          </h2>
          <p className={styles.subheading}>{t.projects.subheading}</p>
        </div>

        {/* Realistic Botanical Tree Branch Stage */}
        <div className={styles.branchStage}>
          {/* Central Organic Vertical Trunk (Rama Principal Natural) */}
          <div className={styles.trunkLine} aria-hidden="true">
            <svg
              className={styles.trunkSvg}
              viewBox="0 0 60 1800"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="trunkGradRealistic" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2D1B11" />
                  <stop offset="30%" stopColor="#4A2E1B" />
                  <stop offset="60%" stopColor="#2E4A1E" />
                  <stop offset="85%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
                <linearGradient id="trunkHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M30 0 C 38 300, 22 600, 32 900 C 42 1200, 20 1500, 30 1800"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <path
                d="M30 0 C 38 300, 22 600, 32 900 C 42 1200, 20 1500, 30 1800"
                stroke="url(#trunkGradRealistic)"
                strokeWidth="11"
                strokeLinecap="round"
              />
              <path
                d="M32 0 C 40 300, 24 600, 34 900 C 44 1200, 22 1500, 32 1800"
                stroke="url(#trunkHighlight)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Alternate Project Leaf Cards (Direct Botanical Branch to Leaf) */}
          <div className={styles.leavesList}>
            {ALL_PROJECTS.map((proj, idx) => {
              const item = t.projects.items[proj.index] || t.projects.items[0];
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={proj.id}
                  className={`${styles.leafRow} ${isLeft ? styles.rowLeft : styles.rowRight}`}
                >
                  {/* Left Column: Left Leaf Card OR Empty Space */}
                  <div className={styles.colLeft}>
                    {isLeft && (
                      <article
                        className={`${styles.leafCard} ${styles.leafCardLeft}`}
                        aria-label={`${item.title} (${idx + 1} de ${ALL_PROJECTS.length})`}
                      >
                        <span className={styles.leafVeinLine} aria-hidden="true" />

                        {/* Leaf Visual Media Frame */}
                        <div className={styles.leafVisual}>
                          {proj.video ? (
                            <video
                              src={proj.video}
                              poster={proj.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="metadata"
                              className={styles.leafVideo}
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
                              className={styles.leafImage}
                            />
                          )}
                        </div>

                        {/* Leaf Editorial Info Stage */}
                        <div className={styles.leafInfo}>
                          <div className={styles.leafMetaTop}>
                            <span className={styles.leafDiscipline}>
                              {proj.discipline[language]}
                            </span>
                            <span className={styles.leafOrderNum}>HOJA 0{idx + 1}</span>
                          </div>

                          <div className={styles.leafBody}>
                            <h3 className={styles.leafTitle}>{item.title}</h3>
                            <p className={styles.leafDesc}>{item.desc}</p>
                          </div>

                          {/* Measurable Impact Key Metrics Ribbon */}
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

                          {/* Plain-Text Tech Stack */}
                          <div className={styles.leafTechRow}>
                            <span className={styles.leafTechLabel}>
                              {t.projects.technologiesLabel}
                            </span>
                            <span className={styles.leafTechText}>{proj.stack}</span>
                          </div>

                          {/* Action Buttons: Case Study Trigger + Live / GitHub Link */}
                          <div className={styles.leafActions}>
                            <button
                              type="button"
                              onClick={() => setSelectedCaseStudyId(proj.id)}
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
                        </div>
                      </article>
                    )}
                  </div>

                  {/* Center Column: Direct Organic Stem (Tallo) Connection */}
                  <div className={styles.colCenter} aria-hidden="true">
                    <div
                      className={`${styles.stemConnector} ${
                        isLeft ? styles.stemLeft : styles.stemRight
                      }`}
                    >
                      <div className={styles.foliageSproutWrap}>
                        <Image
                          src="/images/leaf-sprout.webp"
                          alt=""
                          width={64}
                          height={64}
                          className={styles.sproutFoliageImg}
                        />
                      </div>

                      <svg
                        className={styles.stemSvg}
                        viewBox="0 0 50 36"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id={`stemGrad-${idx}`}
                            x1={isLeft ? "100%" : "0%"}
                            y1="0%"
                            x2={isLeft ? "0%" : "100%"}
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#3E2723" />
                            <stop offset="35%" stopColor="#2E7D32" />
                            <stop offset="80%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#4ADE80" />
                          </linearGradient>
                        </defs>
                        <path
                          d={
                            isLeft
                              ? "M50 18 C 32 18, 18 18, 0 18"
                              : "M0 18 C 18 18, 32 18, 50 18"
                          }
                          stroke={`url(#stemGrad-${idx})`}
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                        <path
                          d={
                            isLeft
                              ? "M50 17 C 32 17, 18 17, 0 17"
                              : "M0 17 C 18 17, 32 17, 50 17"
                          }
                          stroke="#86EFAC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity="0.9"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Right Column: Right Leaf Card OR Empty Space */}
                  <div className={styles.colRight}>
                    {!isLeft && (
                      <article
                        className={`${styles.leafCard} ${styles.leafCardRight}`}
                        aria-label={`${item.title} (${idx + 1} de ${ALL_PROJECTS.length})`}
                      >
                        <span className={styles.leafVeinLine} aria-hidden="true" />

                        {/* Leaf Visual Media Frame */}
                        <div className={styles.leafVisual}>
                          {proj.video ? (
                            <video
                              src={proj.video}
                              poster={proj.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="metadata"
                              className={styles.leafVideo}
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
                              className={styles.leafImage}
                            />
                          )}
                        </div>

                        {/* Leaf Editorial Info Stage */}
                        <div className={styles.leafInfo}>
                          <div className={styles.leafMetaTop}>
                            <span className={styles.leafDiscipline}>
                              {proj.discipline[language]}
                            </span>
                            <span className={styles.leafOrderNum}>HOJA 0{idx + 1}</span>
                          </div>

                          <div className={styles.leafBody}>
                            <h3 className={styles.leafTitle}>{item.title}</h3>
                            <p className={styles.leafDesc}>{item.desc}</p>
                          </div>

                          {/* Measurable Impact Key Metrics Ribbon */}
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

                          {/* Plain-Text Tech Stack */}
                          <div className={styles.leafTechRow}>
                            <span className={styles.leafTechLabel}>
                              {t.projects.technologiesLabel}
                            </span>
                            <span className={styles.leafTechText}>{proj.stack}</span>
                          </div>

                          {/* Action Buttons: Case Study Trigger + Live / GitHub Link */}
                          <div className={styles.leafActions}>
                            <button
                              type="button"
                              onClick={() => setSelectedCaseStudyId(proj.id)}
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
                        </div>
                      </article>
                    )}
                  </div>
                </div>
              );
            })}
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
