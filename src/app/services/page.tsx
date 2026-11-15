"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import EditorialHeader from "../../components/EditorialHeader";
import EditorialFooter from "../../components/EditorialFooter";
import { playTactileClick } from "../../lib/sound";
import styles from "./Services.module.css";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className={styles.servicesPageWrapper}>
      {/* Unified Minimalist Editorial Navigation */}
      <EditorialHeader />

      <main id="main-content" className={styles.container}>
        <div className={styles.headerBlock}>
          <h1 className={styles.pageTitle}>{t.servicesPage.heading}</h1>
          <p className={styles.pageDesc}>{t.servicesPage.description}</p>
        </div>

        {/* Services List */}
        <div className={styles.servicesList}>
          {t.servicesPage.servicesList.map((srv, idx) => (
            <article key={idx} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <h2 className={styles.serviceTitle}>{srv.title}</h2>
                <span className={styles.serviceSubtitle}>{srv.subtitle}</span>
              </div>

              <p className={styles.serviceDesc}>{srv.desc}</p>

              <div className={styles.deliverablesBlock}>
                <span className={styles.deliverablesLabel}>
                  {language === "es" ? "Entregables clave" : "Key deliverables"}
                </span>
                <ul className={styles.deliverablesList}>
                  {srv.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className={styles.deliverableItem}>
                      <CheckCircle2 size={15} color="#10B981" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Process Section */}
        <section className={styles.processSection}>
          <h2 className={styles.sectionHeading}>{t.servicesPage.processTitle}</h2>
          <p className={styles.sectionSub}>{t.servicesPage.processSubtitle}</p>

          <div className={styles.processGrid}>
            {t.servicesPage.processSteps.map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className={styles.discussCta}>
          <div className={styles.ctaText}>
            {language === "es"
              ? "¿Tienes un proyecto o sistema en mente?"
              : "Have a project or system in mind?"}
          </div>
          <Link
            href="/contact?intent=project"
            className={styles.discussBtn}
            onClick={() => playTactileClick()}
          >
            <span>{t.servicesPage.discussProject}</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
