"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import EditorialHeader from "../../components/EditorialHeader";
import EditorialFooter from "../../components/EditorialFooter";
import { playTactileClick } from "../../lib/sound";
import styles from "./About.module.css";
import { about } from "../../data/about";
import ContactWaveLink from "../../components/ContactWaveLink";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className={styles.aboutPageWrapper}>
      {/* Unified Minimalist Editorial Navigation */}
      <EditorialHeader />

      <main id="main-content" className={styles.container}>
        <div className={styles.headerBlock}>
          <h1 className={styles.pageTitle}>{about[language].heading}</h1>
          <p className={styles.leadText}>{about[language].bio}</p>
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
          <ContactWaveLink
            href="/contact?intent=hiring"
            className={styles.secondaryBtn}
            onClick={() => playTactileClick()}
          >
            <span>{isEs ? "Hablemos" : "Let's talk"}</span>
          </ContactWaveLink>
        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
