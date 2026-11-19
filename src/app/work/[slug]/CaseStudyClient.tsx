"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "../../../data/projects";
import { useLanguage } from "../../../context/LanguageContext";
import EditorialHeader from "../../../components/EditorialHeader";
import EditorialFooter from "../../../components/EditorialFooter";
import { playTactileClick } from "../../../lib/sound";
import styles from "./CaseStudy.module.css";
import ContactWaveLink from "../../../components/ContactWaveLink";

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
      {/* Unified Minimalist Editorial Navigation */}
      <EditorialHeader />

      {/* Main Reading-First Case Study Container */}
      <main id="main-content" className={styles.container}>
        {/* Subtle Editorial Breadcrumb Link back to Projects Archive */}
        <Link
          href="/work"
          className={styles.backBreadcrumb}
          onClick={() => playTactileClick()}
        >
          {isEs ? "← Volver a proyectos" : "← Back to projects"}
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

        {project.gallery?.length ? (
          <section className={styles.narrativeSection} aria-labelledby="project-gallery">
            <h2 id="project-gallery" className={styles.sectionHeading}>
              {isEs ? "Recorrido visual" : "Visual walkthrough"}
            </h2>
            <div className={styles.gallery}>
              {project.gallery.map((image, index) => (
                <a key={image} href={image} target="_blank" rel="noopener noreferrer"
                  aria-label={isEs ? `Ampliar captura ${index + 1} de ${project.shortTitle}` : `Enlarge ${project.shortTitle} screenshot ${index + 1}`}>
                  <Image src={image}
                    alt={`${project.shortTitle}: ${isEs ? "captura de pantalla" : "screenshot"} ${index + 1}`}
                    width={1919} height={1079} className={styles.galleryImage} />
                </a>
              ))}
            </div>
          </section>
        ) : null}

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

          <ContactWaveLink
            href="/contact?intent=project"
            className={styles.discussBtn}
            onClick={() => playTactileClick()}
          >
            <span>{isEs ? "Hablemos de este proyecto" : "Let's talk about this"}</span>
          </ContactWaveLink>
        </footer>
      </main>

      <EditorialFooter />
    </div>
  );
}
