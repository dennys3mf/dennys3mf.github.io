"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/siteConfig";
import LanguageToggle from "../components/LanguageToggle";
import { playTactileClick, playTactilePop } from "../lib/sound";
import styles from "./page.module.css";

export default function Home() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className={styles.mainWrapper}>
      {/* Discreet Minimalist Top Navigation */}
      <header className={styles.topNav}>
        <Link
          href="/"
          className={styles.brandLink}
          aria-label="Dennys Marquez — Home"
          onClick={() => playTactileClick()}
        >
          <Image
            src={siteConfig.logoUrl}
            alt="Dennys Marquez"
            width={32}
            height={32}
            className={styles.brandLogo}
            priority
          />
        </Link>

        <div className={styles.topActions}>
          <Link
            href="/work"
            className={styles.topArchiveLink}
            onClick={() => playTactileClick()}
          >
            {isEs ? "Archivo de proyectos →" : "All projects archive →"}
          </Link>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Direct 2-Column Content */}
      <main id="main-content" className={styles.container}>
        <div className={styles.editorialGrid}>
          {/* ================================================================
              LEFT COLUMN — Portfolio, Intent & Curated Work
             ================================================================ */}
          <div className={styles.leftColumn}>
            <h1 className={styles.portfolioTitle}>Portfolio</h1>

            <p className={styles.rolePitch}>
              {isEs ? (
                <>
                  Busco mi próximo rol en{" "}
                  <span className={styles.highlightUnderline}>
                    desarrollo full stack
                  </span>{" "}
                  o{" "}
                  <span className={styles.highlightUnderline}>
                    sistemas con IA
                  </span>
                  . Si estás contratando:
                </>
              ) : (
                <>
                  I&apos;m looking for my next role in{" "}
                  <span className={styles.highlightUnderline}>
                    full stack engineering
                  </span>{" "}
                  or{" "}
                  <span className={styles.highlightUnderline}>
                    AI systems development
                  </span>
                  . If you&apos;re hiring:
                </>
              )}
            </p>

            <Link
              href="/contact?intent=project"
              className={styles.letsTalkBtn}
              onClick={() => playTactileClick()}
            >
              <span>{isEs ? "Hablemos" : "Let's talk"}</span>
            </Link>

            <h2 className={styles.workHeading}>Work</h2>

            <ul className={styles.workList}>
              {/* Item 1 — AhorraTiempo */}
              <li className={styles.workItem}>
                <Link
                  href="/work/ahorratiempo"
                  className={styles.projectLink}
                  onClick={() => playTactileClick()}
                >
                  AhorraTiempo
                </Link>
                {": "}
                {isEs ? (
                  <>
                    Construcción de plataforma ciudadana en producción con IA
                    conversacional por voz en tiempo real y pagos digitales con{" "}
                    <span className={styles.strongTopic}>Culqi</span>.
                  </>
                ) : (
                  <>
                    Built citizen paperwork automation platform integrating
                    real-time Voice AI guidance and tokenized digital payments
                    with <span className={styles.strongTopic}>Culqi</span>.
                  </>
                )}
              </li>

              {/* Item 2 — Billing Engine */}
              <li className={styles.workItem}>
                <Link
                  href="/work/billing-engine"
                  className={styles.projectLink}
                  onClick={() => playTactileClick()}
                >
                  Billing Engine
                </Link>
                {": "}
                {isEs ? (
                  <>
                    Motor de cobros y facturación electrónica automatizada con
                    validación oficial{" "}
                    <span className={styles.strongTopic}>SUNAT XML (UBL 2.1)</span>{" "}
                    y firma digital criptográfica.
                  </>
                ) : (
                  <>
                    Engineered payment checkout gateway &amp; automated{" "}
                    <span className={styles.strongTopic}>SUNAT XML (UBL 2.1)</span>{" "}
                    fiscal invoice signing pipeline.
                  </>
                )}
              </li>

              {/* Item 3 — CONTROLA Cloud */}
              <li className={styles.workItem}>
                <Link
                  href="/work/controla-cloud"
                  className={styles.projectLink}
                  onClick={() => playTactileClick()}
                >
                  CONTROLA Cloud
                </Link>
                {": "}
                {isEs ? (
                  <>
                    Plataforma SaaS corporativa multi-tenant para matrices de
                    cumplimiento en seguridad y salud laboral (SG-SST) y
                    auditorías jurídicas.
                  </>
                ) : (
                  <>
                    Built multi-tenant enterprise compliance SaaS for occupational
                    health (SG-SST) matrices and auditable legal inspection
                    records.
                  </>
                )}
              </li>

              {/* Item 4 — Safety Helmet IoT */}
              <li className={styles.workItem}>
                <Link
                  href="/work/safety-helmet-iot"
                  className={styles.projectLink}
                  onClick={() => playTactileClick()}
                >
                  Safety Helmet IoT
                </Link>
                {": "}
                {isEs ? (
                  <>
                    Sistema de telemetría de seguridad industrial con detección
                    de impacto físico y alerta de emergencia en faenas mineras (
                    <span className={styles.strongTopic}>ESP32</span> &amp;{" "}
                    <span className={styles.strongTopic}>Python</span>).
                  </>
                ) : (
                  <>
                    Industrial worker telemetry &amp; emergency broadcast system
                    with physical impact and toxic gas detection on{" "}
                    <span className={styles.strongTopic}>ESP32</span> &amp;{" "}
                    <span className={styles.strongTopic}>Python</span>.
                  </>
                )}
              </li>

              {/* Item 5 — CHANSA */}
              <li className={styles.workItem}>
                <Link
                  href="/work/chansa-app"
                  className={styles.projectLink}
                  onClick={() => playTactileClick()}
                >
                  CHANSA
                </Link>
                {": "}
                {isEs ? (
                  <>
                    Marketplace móvil bajo demanda para contratación de técnicos
                    certificados del hogar con chat en tiempo real y
                    geolocalización.
                  </>
                ) : (
                  <>
                    Built on-demand mobile marketplace connecting verified home
                    contractors with real-time chat, location-based matching, and
                    job scheduling.
                  </>
                )}
              </li>

              {/* Item 6 — Fiscalización Joya */}
              <li className={styles.workItem}>
                <Link
                  href="/work/fiscalizacion-joya"
                  className={styles.projectLink}
                  onClick={() => playTactileClick()}
                >
                  Fiscalización Joya
                </Link>
                {": "}
                {isEs ? (
                  <>
                    Aplicación para tablets Android 100% offline-first con fotos
                    de evidencia y firmas digitales para fiscalizadores
                    municipales.
                  </>
                ) : (
                  <>
                    Built 100% offline-first Android tablet inspection suite with
                    photo evidence, digital signatures, and auto-sync for
                    municipal inspectors.
                  </>
                )}
              </li>
            </ul>
          </div>

          {/* ================================================================
              RIGHT COLUMN — About Me, Portrait & Social Links
             ================================================================ */}
          <div className={styles.rightColumn}>
            <h2 className={styles.aboutHeading}>About me</h2>

            <div className={styles.aboutBioBlock}>
              <Image
                src="/images/personal/dennys-portrait.webp"
                alt="Dennys Marquez"
                width={84}
                height={84}
                className={styles.avatarImg}
                priority
              />

              <div className={styles.aboutBioText}>
                {isEs ? (
                  <p>
                    Hola, soy Dennys. Construyo aplicaciones web resilientes,
                    sistemas de IA y arquitecturas cloud en producción. Basado
                    en Perú, me enfoco en transformar reglas de negocio
                    complejas y trámites burocráticos en software simple, rápido
                    y confiable.
                  </p>
                ) : (
                  <p>
                    Hey, I&apos;m Dennys. I build resilient software, AI workflows,
                    and cloud systems in production. Based in Peru, I focus on
                    turning complex business rules and manual bureaucratic
                    processes into clean, reliable, and scalable digital products.
                  </p>
                )}
              </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.socialRow}>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                onClick={() => playTactileClick()}
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                onClick={() => playTactileClick()}
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                onClick={() => playTactileClick()}
              >
                CV / Resume
              </a>
              <span>·</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className={styles.socialLink}
                onClick={() => playTactileClick()}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Patatus Corner Companion — Matching Delba's bottom-right mascot */}
      <aside
        className={styles.patatusCorner}
        title="Patatus — Dennys's penguin developer mascot"
        aria-label="Patatus mascot"
        onClick={() => playTactilePop()}
      >
        <Image
          src="/mascot/patatus-saludando.svg"
          alt="Patatus, mascota pingüino de Dennys"
          width={82}
          height={82}
          className={styles.patatusImg}
        />
      </aside>
    </div>
  );
}
