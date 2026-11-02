"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./About.module.css";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.aboutPageWrapper}>
      <Header />

      <main id="main-content" className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>{t.aboutPage.eyebrow}</span>
          </div>
          <h1 className={styles.pageTitle}>{t.aboutPage.heading}</h1>
          <p className={styles.leadText}>{t.aboutPage.lead}</p>
        </div>

        {/* Real Workstation Photo */}
        <div className={styles.photoFrame}>
          <Image
            src="/images/personal/dennys-workstation.webp"
            alt="Gabriel Márquez workstation in Peru"
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
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--primary)", textTransform: "uppercase", fontWeight: 700 }}>
            {t.aboutPage.philosophyTitle}
          </div>
          <blockquote className={styles.philosophyQuote}>
            &ldquo;{t.aboutPage.philosophyQuote}&rdquo;
          </blockquote>
          <p className={styles.paragraph}>{t.aboutPage.philosophyP1}</p>
          <p className={styles.paragraph}>{t.aboutPage.philosophyP2}</p>
        </div>

        {/* Principles Grid */}
        <section className={styles.principlesSection}>
          <h2 className={styles.sectionHeading}>{t.aboutPage.principlesTitle}</h2>
          <div className={styles.principlesGrid}>
            {t.aboutPage.principles.map((pr, idx) => (
              <div key={idx} className={styles.principleCard}>
                <h3 className={styles.principleTitle}>{pr.title}</h3>
                <p className={styles.principleDesc}>{pr.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            <div className={styles.ctaTitle}>Interested in working together?</div>
            <div className={styles.ctaSub}>
              I&apos;m available for international remote roles and selective freelance development.
            </div>
          </div>
          <div className={styles.ctaActions}>
            <Link
              href="/contact?intent=project"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.75rem 1.4rem",
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontWeight: 700,
                fontSize: "0.9rem",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
              }}
            >
              <span>{t.nav.workWithMe}</span>
              <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/experience"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.75rem 1.4rem",
                background: "var(--surface)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
              }}
            >
              <span>{t.nav.experience}</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
