"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../data/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "../../components/LanguageToggle";
import { playTactileClick, playTactilePop } from "../../lib/sound";
import styles from "./About.module.css";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className={styles.aboutPageWrapper}>
      {/* Minimal Top Navigation */}
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
            href="/"
            className={styles.topBackLink}
            onClick={() => playTactileClick()}
          >
            {isEs ? "← Portafolio" : "← Portfolio"}
          </Link>
          <LanguageToggle />
        </div>
      </header>

      <main id="main-content" className={styles.container}>
        {/* Subtle Editorial Breadcrumb Link */}
        <Link
          href="/"
          className={styles.backBreadcrumb}
          onClick={() => playTactileClick()}
        >
          {isEs ? "← Volver al inicio" : "← Back to portfolio"}
        </Link>

        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span>{t.aboutPage.eyebrow}</span>
          </div>
          <h1 className={styles.pageTitle}>{t.aboutPage.heading}</h1>
          <p className={styles.leadText}>{t.aboutPage.lead}</p>
        </div>

        {/* Real Workstation Photo */}
        <div className={styles.photoFrame}>
          <Image
            src="/images/personal/dennys-workstation.webp"
            alt="Dennys Marquez workstation in Peru"
            width={980}
            height={653}
            className={styles.workstationImg}
            priority
          />
        </div>

        {/* Authentic Story */}
        <section className={styles.contentBlock}>
          <p className={styles.paragraph}>{t.aboutPage.bioP1}</p>
          <p className={styles.paragraph}>{t.aboutPage.bioP2}</p>
          <p className={styles.paragraph}>{t.aboutPage.bioP3}</p>
        </section>

        {/* Working Philosophy */}
        <div className={styles.philosophyCard}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#71717A", textTransform: "uppercase", fontWeight: 700 }}>
            {t.aboutPage.philosophyTitle}
          </span>
          <blockquote className={styles.philosophyQuote}>
            &ldquo;{t.aboutPage.philosophyQuote}&rdquo;
          </blockquote>
          <p className={styles.paragraph}>{t.aboutPage.philosophyP1}</p>
          <p className={styles.paragraph}>{t.aboutPage.philosophyP2}</p>
        </div>

        {/* Principles */}
        <section className={styles.principlesSection}>
          <h2 className={styles.sectionHeading}>{t.aboutPage.principlesTitle}</h2>
          <div className={styles.principlesGrid}>
            {t.aboutPage.principles.map((pr, i) => (
              <div key={i} className={styles.principleCard}>
                <h3 className={styles.principleTitle}>{pr.title}</h3>
                <p className={styles.principleDesc}>{pr.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Actions */}
        <div className={styles.dualCta}>
          <Link
            href="/work"
            className={styles.primaryBtn}
            onClick={() => playTactileClick()}
          >
            <span>{isEs ? "Explorar proyectos →" : "Explore projects →"}</span>
          </Link>
          <Link
            href="/contact?intent=hiring"
            className={styles.secondaryBtn}
            onClick={() => playTactileClick()}
          >
            <span>{isEs ? "Hablemos" : "Let's talk"}</span>
          </Link>
        </div>
      </main>

      {/* Patatus Mascot — Bottom Right Companion */}
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
