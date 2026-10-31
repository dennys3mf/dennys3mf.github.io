"use client";

import React from "react";
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
            {/* Realistic Organic Wooden / Green Branch SVG */}
            <svg
              className={styles.trunkSvg}
              viewBox="0 0 60 1400"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                {/* Organic bark & sapwood gradient */}
                <linearGradient id="barkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3E2723" />
                  <stop offset="30%" stopColor="#4E342E" />
                  <stop offset="60%" stopColor="#2E7D32" />
                  <stop offset="100%" stopColor="#1B5E20" />
                </linearGradient>

                <linearGradient id="trunkGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#059669" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Ambient Glow */}
              <path
                d="M30 0 Q 42 220, 20 460 T 38 900 T 26 1400"
                stroke="url(#trunkGlow)"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.3"
              />

              {/* Main Organic Trunk Bark Path */}
              <path
                d="M30 0 Q 42 220, 20 460 T 38 900 T 26 1400"
                stroke="url(#barkGrad)"
                strokeWidth="7"
                strokeLinecap="round"
              />

              {/* Natural Highlight Vine */}
              <path
                d="M29 0 Q 40 220, 19 460 T 37 900 T 25 1400"
                stroke="#4ADE80"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Alternating Realistic Project Leaves along the Branch */}
          <div className={styles.leavesList}>
            {ALL_PROJECTS.map((proj, idx) => {
              const item = t.projects.items[proj.index];
              if (!item) return null;
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={proj.index}
                  className={`${styles.leafRow} ${
                    isLeft ? styles.leafRowLeft : styles.leafRowRight
                  }`}
                >
                  {/* Left Column: Left Leaf Card OR Empty Space */}
                  <div className={styles.colLeft}>
                    {isLeft && (
                      <article
                        className={`${styles.leafCard} ${styles.leafCardLeft}`}
                        aria-label={`${item.title} (${idx + 1} de ${ALL_PROJECTS.length})`}
                      >
                        {/* Organic Leaf Vein Line */}
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

                          {/* Plain-Text Tech Stack */}
                          <div className={styles.leafTechRow}>
                            <span className={styles.leafTechLabel}>
                              {language === "en" ? "Technologies" : "Tecnologías"}
                            </span>
                            <span className={styles.leafTechText}>{proj.stack}</span>
                          </div>

                          {/* Action Link */}
                          <div className={styles.leafActions}>
                            <a
                              href={proj.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.leafPrimaryBtn}
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
                      {/* Realistic leaf sprout cluster at the branch node */}
                      <div className={styles.foliageSproutWrap}>
                        <Image
                          src="/images/leaf-sprout.webp"
                          alt=""
                          width={64}
                          height={64}
                          className={styles.sproutFoliageImg}
                        />
                      </div>

                      {/* Organic curved stem SVG that connects trunk to card edge */}
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
                        {/* Highlights */}
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
                        {/* Organic Leaf Vein Line */}
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

                          {/* Plain-Text Tech Stack */}
                          <div className={styles.leafTechRow}>
                            <span className={styles.leafTechLabel}>
                              {language === "en" ? "Technologies" : "Tecnologías"}
                            </span>
                            <span className={styles.leafTechText}>{proj.stack}</span>
                          </div>

                          {/* Action Link */}
                          <div className={styles.leafActions}>
                            <a
                              href={proj.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.leafPrimaryBtn}
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
                      </article>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
