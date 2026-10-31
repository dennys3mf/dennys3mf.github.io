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
        {/* Section Header */}
        <div className={styles.treeHeader}>
          <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
          <h2 className={styles.title} data-gsap="heading">
            {t.projects.heading}
          </h2>
          <p className={styles.subheading}>{t.projects.subheading}</p>
        </div>

        {/* Tree Branch Stage */}
        <div className={styles.branchStage}>
          {/* Central Organic Vertical Trunk */}
          <div className={styles.trunkLine} aria-hidden="true">
            <svg
              className={styles.trunkSvg}
              viewBox="0 0 40 1200"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#10B981" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#059669" stopOpacity="0.95" />
                  <stop offset="85%" stopColor="#2DD4BF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#4F6BFF" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path
                d="M20 0 Q 30 200, 14 400 T 26 800 T 20 1200"
                stroke="url(#trunkGrad)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Alternating Leaves on Stems */}
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
                  {/* Stem (Tallo) connecting the branch trunk to this leaf */}
                  <div
                    className={`${styles.stemConnector} ${
                      isLeft ? styles.stemLeft : styles.stemRight
                    }`}
                    aria-hidden="true"
                  >
                    <span className={styles.stemBudNode} />
                    <svg
                      className={styles.stemSvg}
                      viewBox="0 0 100 32"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d={
                          isLeft
                            ? "M100 16 C 60 16, 40 28, 0 28"
                            : "M0 16 C 40 16, 60 28, 100 28"
                        }
                        stroke="url(#stemGrad)"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="stemGrad"
                          x1={isLeft ? "100%" : "0%"}
                          y1="0%"
                          x2={isLeft ? "0%" : "100%"}
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#4F6BFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className={styles.leafBaseNode} />
                  </div>

                  {/* Leaf Card (La Hoja) */}
                  <article
                    className={`${styles.leafCard} ${
                      isLeft ? styles.leafCardLeft : styles.leafCardRight
                    }`}
                    aria-label={`${item.title} (${idx + 1} de ${ALL_PROJECTS.length})`}
                  >
                    {/* Organic leaf vein decorative accent line */}
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
                        <span className={styles.leafOrderNum}>0{idx + 1}</span>
                      </div>

                      <div className={styles.leafBody}>
                        <h3 className={styles.leafTitle}>{item.title}</h3>
                        <p className={styles.leafDesc}>{item.desc}</p>
                      </div>

                      {/* Plain-Text Tech Stack (No Chips / Badges) */}
                      <div className={styles.leafTechRow}>
                        <span className={styles.leafTechLabel}>
                          {language === "en" ? "Technologies" : "Tecnologías"}
                        </span>
                        <span className={styles.leafTechText}>{proj.stack}</span>
                      </div>

                      {/* Professional Clean Action Link */}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
