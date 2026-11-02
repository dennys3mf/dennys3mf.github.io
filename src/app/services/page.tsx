"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Services.module.css";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.servicesPageWrapper}>
      <Header />

      <main id="main-content" className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>{t.servicesPage.eyebrow}</span>
          </div>
          <h1 className={styles.pageTitle}>{t.servicesPage.heading}</h1>
          <p className={styles.pageDesc}>{t.servicesPage.description}</p>
        </div>

        {/* 3 Focused Services */}
        <div className={styles.servicesList}>
          {t.servicesPage.servicesList.map((service, idx) => (
            <article key={idx} className={styles.serviceCard}>
              <div className={styles.serviceLeft}>
                <span className={styles.serviceNumber}>Service 0{idx + 1}</span>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <div className={styles.serviceSubtitle}>{service.subtitle}</div>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>

              <div className={styles.serviceRight}>
                <span className={styles.deliverablesTitle}>What is included:</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className={styles.deliverableItem}>
                      <Check size={16} className={styles.checkIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 4-Step Collaboration Process */}
        <section className={styles.processSection}>
          <h2 className={styles.sectionHeading}>{t.servicesPage.processTitle}</h2>
          <p className={styles.sectionSubtitle}>{t.servicesPage.processSubtitle}</p>

          <div className={styles.processGrid}>
            {t.servicesPage.processSteps.map((step) => (
              <div key={step.step} className={styles.processCard}>
                <span className={styles.stepBadge}>{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commercial CTA */}
        <div className={styles.ctaBox}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800 }}>
            {t.servicesPage.discussProject}
          </h2>
          <p style={{ maxWidth: "560px", color: "var(--muted-foreground)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Have an MVP, automation workflow, or internal tool you want to build? Let&apos;s discuss your scope, requirements, and timeline.
          </p>
          <Link
            href="/contact?intent=project"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.95rem 2rem",
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(8, 127, 114, 0.25)",
            }}
          >
            <span>{t.servicesPage.discussProject}</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
