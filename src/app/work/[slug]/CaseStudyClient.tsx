"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../../data/siteConfig";
import { PROJECTS } from "../../../data/projects";
import { useLanguage } from "../../../context/LanguageContext";
import LanguageToggle from "../../../components/LanguageToggle";
import { playTactileClick, playTactilePop } from "../../../lib/sound";
import styles from "./CaseStudy.module.css";

interface CaseStudyClientProps {
  slug: string;
}

export default function CaseStudyClient({ slug }: CaseStudyClientProps) {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex !== -1 ? projectIndex : 0];

  const nextIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];

  return (
    <div className={styles.caseStudyWrapper}>
      {/* Discreet Minimalist Top Navigation — Delba.dev aesthetic */}
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

      {/* Main Reading-First Case Study Container */}
      <main id="main-content" className={styles.container}>
        {/* Subtle Editorial Breadcrumb Link */}
        <Link
          href="/"
          className={styles.backBreadcrumb}
          onClick={() => playTactileClick()}
        >
          {isEs ? "← Volver al inicio" : "← Back to portfolio"}
        </Link>

        {/* Hero Block — Clean editorial title & lead */}
        <header className={styles.heroBlock}>
          <h1 className={styles.title}>{project.title[language]}</h1>
          <p className={styles.lead}>{project.summary[language]}</p>
        </header>

        {/* Minimalist Metadata Strip */}
        <section className={styles.metadataStrip} aria-label="Project details summary">
          <div className={styles.metaCol}>
            <span className={styles.metaLabel}>{t.caseStudy.roleLabel}</span>
            <span className={styles.metaVal}>{project.role[language]}</span>
          </div>
          <div className={styles.metaCol}>
            <span className={styles.metaLabel}>{t.caseStudy.yearLabel}</span>
            <span className={styles.metaVal}>{project.year}</span>
          </div>
          <div className={styles.metaCol}>
            <span className={styles.metaLabel}>
              {isEs ? "Enlaces" : "Links"}
            </span>
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", alignItems: "center" }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.metaLink}
                  onClick={() => playTactileClick()}
                >
                  <span>{isEs ? "Ver en vivo ↗" : "Live web ↗"}</span>
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.metaLink}
                  onClick={() => playTactileClick()}
                >
                  <span>GitHub ↗</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Media Showcase */}
        <div className={styles.mediaContainer}>
          {project.video ? (
            <video
              src={project.video}
              poster={project.coverImage}
              controls
              loop
              muted
              playsInline
              className={styles.mediaItem}
              aria-label={`${project.title[language]} demonstration video`}
            />
          ) : (
            <Image
              src={project.coverImage}
              alt={project.title[language]}
              width={1100}
              height={620}
              className={styles.mediaItem}
              priority
            />
          )}
        </div>

        {/* 01 — The Problem */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.theProblem}</h2>
          <p className={styles.sectionBody}>{project.problem[language]}</p>
        </section>

        {/* 02 — Goals & Constraints */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.goalsAndConstraints}</h2>
          <p className={styles.sectionBody}>{project.goalsConstraints[language]}</p>
        </section>

        {/* 03 — My Approach */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.myApproach}</h2>
          <p className={styles.sectionBody}>{project.approach[language]}</p>
        </section>

        {/* 04 — The Solution */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.theSolution}</h2>
          <p className={styles.sectionBody}>{project.solution[language]}</p>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className={styles.metricsGrid}>
              {project.metrics.map((m, idx) => (
                <div key={idx} className={styles.metricCard}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label[language]}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 05 — Engineering Decisions */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.engineeringDecisions}</h2>
          <div className={styles.decisionsGrid}>
            <div className={styles.decisionCard}>
              <h3 className={styles.decisionTitle}>{t.caseStudy.architecture}</h3>
              <p className={styles.decisionText}>{project.engineeringDecisions.architecture[language]}</p>
            </div>
            <div className={styles.decisionCard}>
              <h3 className={styles.decisionTitle}>{t.caseStudy.apisAndState}</h3>
              <p className={styles.decisionText}>{project.engineeringDecisions.apisAndState[language]}</p>
            </div>
            <div className={styles.decisionCard}>
              <h3 className={styles.decisionTitle}>{t.caseStudy.dataPersistence}</h3>
              <p className={styles.decisionText}>{project.engineeringDecisions.dataPersistence[language]}</p>
            </div>
            <div className={styles.decisionCard}>
              <h3 className={styles.decisionTitle}>{t.caseStudy.performanceAndSecurity}</h3>
              <p className={styles.decisionText}>{project.engineeringDecisions.performanceAndSecurity[language]}</p>
            </div>
          </div>
        </section>

        {/* 06 — Results & Learnings */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.resultsAndLearnings}</h2>
          {project.resultsLearnings.measuredResults && (
            <div className={styles.resultItem}>
              <span className={styles.resultTitle}>{t.caseStudy.measuredResults}:</span>
              <p className={styles.sectionBody}>{project.resultsLearnings.measuredResults[language]}</p>
            </div>
          )}
          <div className={styles.resultItem}>
            <span className={styles.resultTitle}>{t.caseStudy.verifiableFeatures}:</span>
            <p className={styles.sectionBody}>{project.resultsLearnings.verifiableFeatures[language]}</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTitle}>{t.caseStudy.keyLearnings}:</span>
            <p className={styles.sectionBody}>{project.resultsLearnings.learnings[language]}</p>
          </div>
        </section>

        {/* 07 — Next Steps */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.nextSteps}</h2>
          <p className={styles.sectionBody}>{project.nextSteps[language]}</p>
        </section>

        {/* 08 — Bottom Navigation: Next Project & Let's talk */}
        <footer className={styles.bottomNav}>
          <Link
            href={`/work/${nextProject.slug}`}
            className={styles.nextProjectLink}
            onClick={() => playTactileClick()}
          >
            <span>
              {isEs
                ? `Siguiente proyecto: ${nextProject.shortTitle} →`
                : `Next project: ${nextProject.shortTitle} →`}
            </span>
          </Link>

          <Link
            href="/contact?intent=project"
            className={styles.discussBtn}
            onClick={() => playTactileClick()}
          >
            <span>{isEs ? "Hablemos de este proyecto" : "Let's talk about this"}</span>
          </Link>
        </footer>
      </main>

      {/* Patatus Corner Mascot — Peeking from bottom right corner */}
      <aside
        className={styles.patatusCorner}
        title="Patatus — Dennys's penguin developer mascot"
        aria-label="Patatus mascot"
        onClick={() => playTactilePop()}
      >
        <Image
          src="/mascot/patatus-asomandose.svg"
          alt="Patatus, mascota pingüino de Dennys asomándose"
          width={82}
          height={82}
          className={styles.patatusImg}
        />
      </aside>
    </div>
  );
}
