"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileDown } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { EXPERIENCE_DATA } from "../../data/experience";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "../../components/LanguageToggle";
import { playTactileClick, playTactilePop } from "../../lib/sound";
import styles from "./Experience.module.css";

export default function ExperiencePage() {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className={styles.experiencePageWrapper}>
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
          <h1 className={styles.pageTitle}>{t.experiencePage.heading}</h1>
          <p className={styles.pageDesc}>{EXPERIENCE_DATA.summary[language]}</p>
        </div>

        {/* Quick Action CTAs for Recruiters */}
        <div className={styles.actionsBar}>
          <a
            href={EXPERIENCE_DATA.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadCvBtn}
            onClick={() => playTactileClick()}
          >
            <FileDown size={16} />
            <span>{t.experiencePage.downloadCv}</span>
          </a>

          <Link
            href="/contact?intent=hiring"
            className={styles.discussRoleBtn}
            onClick={() => playTactileClick()}
          >
            <span>{t.experiencePage.discussRole}</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* 1. Technical Skills Matrix */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>{t.experiencePage.skillsHeading}</h2>
          <div className={styles.skillsGrid}>
            {EXPERIENCE_DATA.skillGroups.map((cat, idx) => (
              <div key={idx} className={styles.skillCategoryCard}>
                <span className={styles.categoryTitle}>{cat.category[language]}</span>
                <p className={styles.skillsInline}>
                  {cat.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Professional Timeline */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>{t.experiencePage.careerHeading}</h2>
          <div className={styles.timeline}>
            {EXPERIENCE_DATA.career.map((role, idx) => (
              <article key={idx} className={styles.timelineItem}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{role.role[language]}</h3>
                    <span className={styles.companyName}>
                      {role.company} · {role.location[language]}
                    </span>
                  </div>
                  <span className={styles.period}>{role.period[language]}</span>
                </div>

                <p className={styles.roleDesc}>{role.summary[language]}</p>

                <ul className={styles.achievementsList}>
                  {role.highlights[language].map((hl, i) => (
                    <li key={i} className={styles.achievementItem}>
                      <span className={styles.achievementDot} aria-hidden="true">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Education & Certifications */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>{t.experiencePage.educationHeading}</h2>
          <div className={styles.certGrid}>
            {EXPERIENCE_DATA.education.map((item, idx) => (
              <div key={idx} className={styles.certCard}>
                <h3 className={styles.certTitle}>{item.degree[language]}</h3>
                <span className={styles.certIssuer}>
                  {item.institution} · {item.period[language]}
                </span>
              </div>
            ))}
            {EXPERIENCE_DATA.languages.map((item, idx) => (
              <div key={`lang-${idx}`} className={styles.certCard}>
                <h3 className={styles.certTitle}>{item.name[language]}</h3>
                <span className={styles.certIssuer}>
                  {item.level[language]}
                </span>
              </div>
            ))}
          </div>
        </section>
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
