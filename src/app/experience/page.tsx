"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { EXPERIENCE_DATA } from "../../data/experience";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Experience.module.css";

export default function ExperiencePage() {
  const { t, language } = useLanguage();

  return (
    <div className={styles.experiencePageWrapper}>
      <Header />

      <main id="main-content" className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>{t.experiencePage.eyebrow}</span>
          </div>
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
          >
            <FileDown size={18} />
            <span>{t.experiencePage.downloadCv}</span>
          </a>

          <Link href="/contact?intent=hiring" className={styles.discussRoleBtn}>
            <span>{t.experiencePage.discussRole}</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 1. Technical Skills Matrix (No arbitrary percentages) */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>{t.experiencePage.skillsHeading}</h2>
          <div className={styles.skillsGrid}>
            {EXPERIENCE_DATA.skillGroups.map((group, idx) => (
              <div key={idx} className={styles.skillCard}>
                <h3 className={styles.skillCategory}>{group.category[language]}</h3>
                <div className={styles.skillList}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Work & Project History */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>{t.experiencePage.careerHeading}</h2>
          <div className={styles.careerList}>
            {EXPERIENCE_DATA.career.map((item, idx) => (
              <article key={idx} className={styles.careerCard}>
                <div className={styles.careerHeader}>
                  <h3 className={styles.careerRole}>{item.role[language]}</h3>
                  <span className={styles.careerPeriod}>{item.period}</span>
                </div>
                <div className={styles.careerCompany}>
                  {item.company} · {item.location}
                </div>
                <p className={styles.careerSummary}>{item.summary[language]}</p>

                <ul className={styles.highlightsList}>
                  {item.highlights[language].map((h, hIdx) => (
                    <li key={hIdx} className={styles.highlightItem}>
                      <span className={styles.bullet}>•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                  {item.technologies.map((tItem) => (
                    <span
                      key={tItem}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        padding: "0.2rem 0.5rem",
                        background: "var(--muted)",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Education & Formal Credentials */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>{t.experiencePage.educationHeading}</h2>
          <div className={styles.eduGrid}>
            {EXPERIENCE_DATA.education.map((edu, idx) => (
              <div key={idx} className={styles.eduCard}>
                <h3 className={styles.eduDegree}>{edu.degree[language]}</h3>
                <div className={styles.eduInstitution}>
                  {edu.institution} · {edu.location}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted-foreground)" }}>
                  {edu.period} ({edu.status[language]})
                </div>
                <p className={styles.eduDesc}>{edu.description[language]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Languages */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>{t.experiencePage.languagesHeading}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
            {EXPERIENCE_DATA.languages.map((lang, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: 800 }}>{lang.name[language]}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--primary)", fontWeight: 600 }}>
                  {lang.level[language]}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
