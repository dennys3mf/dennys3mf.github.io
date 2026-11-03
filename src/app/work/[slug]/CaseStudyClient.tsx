"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { PROJECTS } from "../../../data/projects";
import { useLanguage } from "../../../context/LanguageContext";
import styles from "./CaseStudy.module.css";

interface CaseStudyClientProps {
  slug: string;
}

export default function CaseStudyClient({ slug }: CaseStudyClientProps) {
  const { t, language } = useLanguage();
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex !== -1 ? projectIndex : 0];

  const nextIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];

  return (
    <div className={styles.caseStudyWrapper}>
      <Header />

      <main id="main-content" className={styles.container}>
        {/* Back Link */}
        <Link href="/work" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>{t.caseStudy.backToWork}</span>
        </Link>

        {/* Hero Block */}
        <div className={styles.heroBlock}>
          <div className={styles.metaRow}>
            <span className={styles.category}>
              {project.categoryLabel[language]}
            </span>
            <span className={styles.status}>
              {project.status === "live"
                ? (language === "es" ? "En Producción" : "Production")
                : (language === "es" ? "En Desarrollo" : "In Progress")}
            </span>
          </div>

          <h1 className={styles.title}>{project.title[language]}</h1>
          <p className={styles.lead}>{project.summary[language]}</p>
        </div>

        {/* Overview Info Grid */}
        <div className={styles.overviewGrid}>
          <div className={styles.overviewCol}>
            <span className={styles.overviewLabel}>{t.caseStudy.roleLabel}</span>
            <span className={styles.overviewVal}>{project.role[language]}</span>
          </div>
          <div className={styles.overviewCol}>
            <span className={styles.overviewLabel}>{t.caseStudy.yearLabel}</span>
            <span className={styles.overviewVal}>{project.year}</span>
          </div>
          <div className={styles.overviewCol}>
            <span className={styles.overviewLabel}>{t.caseStudy.statusLabel}</span>
            <span className={styles.overviewVal}>
              {project.status === "live"
                ? (language === "es" ? "En Producción" : "Live in Production")
                : (language === "es" ? "En Desarrollo Activo" : "Active Development")}
            </span>
          </div>
          <div className={styles.overviewCol}>
            <span className={styles.overviewLabel}>
              {language === "es" ? "Enlaces" : "Links"}
            </span>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overviewVal}
                  style={{ color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: "2px" }}
                >
                  {language === "es" ? "Ver en vivo" : "Live Web"} <ExternalLink size={12} />
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overviewVal}
                  style={{ color: "var(--foreground)", display: "inline-flex", alignItems: "center", gap: "2px" }}
                >
                  GitHub <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Solution Media Showcase */}
        <div className={styles.mediaShowcase}>
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

        {/* 02 — The Problem */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.theProblem}</h2>
          <p className={styles.sectionBody}>{project.problem[language]}</p>
        </section>

        {/* 03 — Goals & Constraints */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.goalsAndConstraints}</h2>
          <p className={styles.sectionBody}>{project.goalsConstraints[language]}</p>
        </section>

        {/* 04 — My Approach */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.myApproach}</h2>
          <p className={styles.sectionBody}>{project.approach[language]}</p>
        </section>

        {/* 05 — The Solution */}
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

        {/* 06 — Engineering Decisions */}
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

        {/* 07 — Results & Learnings */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.resultsAndLearnings}</h2>
          {project.resultsLearnings.measuredResults && (
            <div style={{ marginBottom: "1rem" }}>
              <strong style={{ display: "block", marginBottom: "0.25rem", color: "var(--foreground)" }}>
                {t.caseStudy.measuredResults}:
              </strong>
              <p className={styles.sectionBody}>{project.resultsLearnings.measuredResults[language]}</p>
            </div>
          )}
          <div style={{ marginBottom: "1rem" }}>
            <strong style={{ display: "block", marginBottom: "0.25rem", color: "var(--foreground)" }}>
              {t.caseStudy.verifiableFeatures}:
            </strong>
            <p className={styles.sectionBody}>{project.resultsLearnings.verifiableFeatures[language]}</p>
          </div>
          <div>
            <strong style={{ display: "block", marginBottom: "0.25rem", color: "var(--foreground)" }}>
              {t.caseStudy.keyLearnings}:
            </strong>
            <p className={styles.sectionBody}>{project.resultsLearnings.learnings[language]}</p>
          </div>
        </section>

        {/* 08 — Next Steps */}
        <section className={styles.narrativeSection}>
          <h2 className={styles.sectionHeading}>{t.caseStudy.nextSteps}</h2>
          <p className={styles.sectionBody}>{project.nextSteps[language]}</p>
        </section>

        {/* 09 — Next Project Navigator & Contact CTA */}
        <div className={styles.nextNavRow}>
          <div>
            <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
              {t.caseStudy.nextProject}
            </span>
            <div style={{ fontSize: "1.15rem", fontWeight: 800, marginTop: "0.25rem" }}>
              {nextProject.shortTitle}
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href={`/work/${nextProject.slug}`} className={styles.nextProjectBtn}>
              <span>{nextProject.shortTitle}</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/contact?intent=project"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.85rem 1.5rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                fontWeight: 600,
                textDecoration: "none",
                background: "var(--surface)",
              }}
            >
              <span>{t.caseStudy.discussAProject}</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
