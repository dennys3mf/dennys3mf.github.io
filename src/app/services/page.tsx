"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "../../components/LanguageToggle";
import { playTactileClick, playTactilePop } from "../../lib/sound";
import styles from "./Services.module.css";

export default function ServicesPage() {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className={styles.servicesPageWrapper}>
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
            <span>{t.servicesPage.eyebrow}</span>
          </div>
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
