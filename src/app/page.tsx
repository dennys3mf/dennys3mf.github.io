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
                  o creando{" "}
                  <span className={styles.highlightUnderline}>
                    sistemas con IA
                  </span>
                  . Abierto a colaborar en productos de alto impacto. Si tu equipo está contratando:
                </>
              ) : (
                <>
                  I&apos;m looking for my next role in{" "}
                  <span className={styles.highlightUnderline}>
                    full stack engineering
                  </span>{" "}
                  or building{" "}
                  <span className={styles.highlightUnderline}>
                    production AI systems
                  </span>
                  . Open to high-impact teams and products. If you&apos;re hiring:
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
                    Plataforma ciudadana en producción que automatiza trámites burocráticos
                    y agendamiento de citas en Perú, integrando un{" "}
                    <span className={styles.strongTopic}>asistente de voz con IA en tiempo real</span>{" "}
                    y cobros seguros con <span className={styles.strongTopic}>Culqi</span>.
                  </>
                ) : (
                  <>
                    Live citizen paperwork platform that automates administrative procedures
                    and appointment bookings via{" "}
                    <span className={styles.strongTopic}>real-time conversational voice AI</span>{" "}
                    and digital card payments via <span className={styles.strongTopic}>Culqi</span>.
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
                    Motor de facturación electrónica y cobros recurrentes que emite,
                    firma criptográficamente y valida comprobantes oficiales bajo el estándar{" "}
                    <span className={styles.strongTopic}>SUNAT XML (UBL 2.1)</span> con conciliación automática.
                  </>
                ) : (
                  <>
                    Automated billing &amp; payment gateway engine that generates,
                    cryptographically signs, and validates fiscal invoices against Peru&apos;s{" "}
                    <span className={styles.strongTopic}>SUNAT XML (UBL 2.1)</span> standard with instant reconciliation.
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
                    Plataforma SaaS multi-inquilino que centraliza matrices de riesgos laborales (
                    <span className={styles.strongTopic}>SG-SST</span>), seguimiento de incidentes
                    y auditorías legales con generación de reportes normativos en tiempo real.
                  </>
                ) : (
                  <>
                    Multi-tenant enterprise SaaS that digitizes occupational safety &amp; health (
                    <span className={styles.strongTopic}>SG-SST</span>) risk matrices, incident tracking,
                    and audit-ready legal compliance records.
                  </>
                )}
              </li>

              {/* Item 4 — Fiscalización Joya */}
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
                    Suite para tablets Android que opera{" "}
                    <span className={styles.strongTopic}>100% sin conexión a internet (offline-first)</span>
                    , permitiendo a fiscalizadores municipales levantar actas de infracción con geolocalización GPS,
                    fotografías de prueba y firmas biométricas.
                  </>
                ) : (
                  <>
                    Field inspection suite for Android tablets running{" "}
                    <span className={styles.strongTopic}>100% offline-first</span>
                    , enabling municipal officers to document infractions with GPS coordinates,
                    photo evidence, and digital biometric signatures.
                  </>
                )}
              </li>
            </ul>

            {/* ================================================================
                PERSONAL SECTION — Side Projects, IoT & Open Source Experiments
               ================================================================ */}
            <h2 className={styles.personalHeading}>Personal</h2>

            <ul className={styles.workList}>
              {/* Personal Item 1 — Safety Helmet IoT */}
              <li className={styles.workItem}>
                <Link
                  href="/work/safety-helmet-iot"
                  className={styles.projectLink}
                  onClick={() => playTactileClick()}
                >
                  Safety Helmet IoT
                </Link>
                <span className={styles.subtleTag}>
                  {" "}
                  {isEs ? "(Hardware & Telemetría)" : "(Hardware Prototype)"}
                </span>
                {": "}
                {isEs ? (
                  <>
                    Casco inteligente de seguridad industrial para operaciones mineras subterráneas,
                    desarrollado sobre microcontrolador <span className={styles.strongTopic}>ESP32</span>,
                    sensores analógicos y backend en <span className={styles.strongTopic}>Python</span>. Módulos clave:
                  </>
                ) : (
                  <>
                    Smart industrial safety helmet prototype engineered for underground mining operations,
                    powered by an <span className={styles.strongTopic}>ESP32</span> microcontroller,
                    analog sensors, and a <span className={styles.strongTopic}>Python</span> backend. Key modules:
                  </>
                )}
                <ul className={styles.nestedList}>
                  <li className={styles.nestedItem}>
                    <Link
                      href="/work/safety-helmet-iot"
                      className={styles.projectLink}
                      onClick={() => playTactileClick()}
                    >
                      <code className={styles.codeSpan}>10 Hz Telemetry</code>
                    </Link>{" "}
                    {isEs
                      ? "monitoreo continuo de gases peligrosos (CO, CH4) y radiotransmisión de coordenadas GPS"
                      : "real-time sensor sampling of toxic gas levels (CO, CH4) and continuous GPS tracking"}
                  </li>
                  <li className={styles.nestedItem}>
                    <Link
                      href="/work/safety-helmet-iot"
                      className={styles.projectLink}
                      onClick={() => playTactileClick()}
                    >
                      <code className={styles.codeSpan}>3-Axis G-Force</code>
                    </Link>{" "}
                    {isEs
                      ? "detección instantánea de caídas e impactos severos con alerta de auxilio en < 1.5s"
                      : "instant fall and sudden impact detection triggering automated emergency dispatch in < 1.5s"}
                  </li>
                </ul>
              </li>

              {/* Personal Item 2 — CHANSA */}
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
                    Marketplace móvil bajo demanda que conecta a propietarios del hogar con técnicos
                    y gasfiteros verificados, con presupuestos claros, chat y mapas en vivo (
                    <span className={styles.strongTopic}>Flutter</span> &amp;{" "}
                    <span className={styles.strongTopic}>Firebase</span>).
                  </>
                ) : (
                  <>
                    On-demand mobile marketplace connecting homeowners with verified home maintenance contractors,
                    featuring live map tracking, real-time chat, and escrow milestones (
                    <span className={styles.strongTopic}>Flutter</span> &amp;{" "}
                    <span className={styles.strongTopic}>Firebase</span>).
                  </>
                )}
              </li>

              {/* Personal Item 3 — Patatus & UI Crafts */}
              <li className={styles.workItem}>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  onClick={() => playTactileClick()}
                >
                  Patatus &amp; UI Crafts
                </a>
                <span className={styles.subtleTag}>
                  {" "}
                  {isEs ? "(Open Source & Herramientas)" : "(Open Source & Tooling)"}
                </span>
                {": "}
                {isEs ? (
                  <>
                    Laboratorio de micro-interacciones acústicas, utilidades web nativas
                    y el kit vectorial de Patatus, mi mascota pingüino. Ejemplos:
                  </>
                ) : (
                  <>
                    A playground of tactile micro-interactions, browser-native experiments,
                    and the open vector kit of Patatus, my developer penguin mascot. Examples:
                  </>
                )}
                <ul className={styles.nestedList}>
                  <li className={styles.nestedItem}>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      onClick={() => playTactileClick()}
                    >
                      <code className={styles.codeSpan}>Web Audio API</code>
                    </a>{" "}
                    {isEs
                      ? "sintetizador acústico háptico de 18ms en JavaScript puro con 0 KB de dependencias"
                      : "zero-dependency, 18ms acoustic haptic click synthesizer running purely on Web Audio nodes"}
                  </li>
                  <li className={styles.nestedItem}>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      onClick={() => playTactileClick()}
                    >
                      <code className={styles.codeSpan}>Rough Notation SVG</code>
                    </a>{" "}
                    {isEs
                      ? "anotaciones vectoriales orgánicas y subrayados editoriales con transiciones fluidas de CSS"
                      : "organic hand-drawn underlines, editorial highlighters, and smooth native CSS transitions"}
                  </li>
                </ul>
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
                width={86}
                height={86}
                className={styles.avatarImg}
                priority
              />

              <div className={styles.aboutBioText}>
                {isEs ? (
                  <>
                    <p>
                      ¡Hola! Soy <strong>Dennys Marquez</strong>, desarrollador de software e
                      ingeniero de producto basado en Perú. Me apasiona resolver problemas reales:
                      transformo procesos burocráticos engorrosos, motores de facturación y flujos
                      operativos complejos en software ágil, nítido y fácil de usar.
                    </p>
                    <p>
                      Combino arquitectura de backend en <strong>Python</strong> y <strong>Node.js</strong> con
                      interfaces modernas en <strong>React</strong>, <strong>Next.js</strong> y <strong>TypeScript</strong>.
                      En mi tiempo libre, diseño experimentos de interfaz junto a <strong>Patatus</strong>, mi mascota pingüino.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Hey, I&apos;m <strong>Dennys Marquez</strong>, a product-minded software engineer based in Peru.
                      I specialize in turning tedious bureaucratic workflows, billing engines, and intricate
                      operational rules into fast, clean, and intuitive digital products.
                    </p>
                    <p>
                      I combine robust backend architecture in <strong>Python</strong> and <strong>Node.js</strong> with
                      modern, reactive user interfaces in <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>.
                      In my spare time, I craft tactile UI experiments alongside <strong>Patatus</strong>, my penguin mascot.
                    </p>
                  </>
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
