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

  return (
    <section id="casos" className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        {/* Section Header: Pure Clean Editorial Presentation */}
        <div className={styles.carouselHeaderRow}>
          <div className={styles.carouselHeaderLeft}>
            <p className={styles.eyebrow}>{t.projects.eyebrow}</p>
            <h2 className={styles.title} data-gsap="heading">
              {t.projects.heading}
            </h2>
            <p className={styles.subheading}>{t.projects.subheading}</p>
          </div>
        </div>

        {/* Scroll-Driven Stacking Cards Deck (Smooth, Orderly, Natural Flow) */}
        <div className={styles.cardsStack}>
          {ALL_PROJECTS.map((proj, idx) => {
            const item = t.projects.items[proj.index];
            if (!item) return null;

            return (
              <div
                key={proj.index}
                className={styles.cardItemWrapper}
                style={{
                  "--card-index": idx,
                } as React.CSSProperties}
              >
                <article
                  className={styles.projectCard}
                  aria-label={`${item.title} (${idx + 1} de ${ALL_PROJECTS.length})`}
                >
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
    </section>
  );
}
