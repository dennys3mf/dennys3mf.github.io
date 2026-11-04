"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../data/siteConfig";
import { PROJECTS, Project } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "../../components/LanguageToggle";
import { playTactileClick, playTactilePop } from "../../lib/sound";
import styles from "./Work.module.css";

export default function WorkPage() {
  const { t, language } = useLanguage();
  const isEs = language === "es";
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = [
    { key: "all", label: t.workPage.filterAll },
    { key: "saas-ai", label: t.workPage.filterSaas },
    { key: "fintech", label: t.workPage.filterFintech },
    { key: "cloud-enterprise", label: t.workPage.filterCloud },
    { key: "mobile-iot", label: t.workPage.filterMobile },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className={styles.workPageWrapper}>
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
            <span>{isEs ? "Proyectos en Producción" : "Selected Projects"}</span>
          </div>
          <h1 className={styles.pageTitle}>{t.workPage.heading}</h1>
          <p className={styles.pageDesc}>{t.workPage.description}</p>
        </div>

        {/* Filter Bar */}
        <div className={styles.filtersRow} role="tablist" aria-label="Project categories">
          {filterOptions.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={activeFilter === f.key}
              onClick={() => {
                playTactileClick();
                setActiveFilter(f.key);
              }}
              className={`${styles.filterBtn} ${
                activeFilter === f.key ? styles.filterBtnActive : ""
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project: Project) => (
            <article key={project.slug} className={styles.projectCard}>
              <div className={styles.mediaFrame}>
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.coverImage}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className={styles.mediaImg}
                    aria-label={`${project.title[language]} video`}
                  />
                ) : (
                  <Image
                    src={project.coverImage}
                    alt={project.title[language]}
                    width={800}
                    height={450}
                    className={styles.mediaImg}
                  />
                )}
              </div>

              <div className={styles.cardBody}>
                <div>
                  <div className={styles.metaTop}>
                    <span className={styles.categoryTag}>
                      {project.categoryLabel[language]}
                    </span>
                    <span className={styles.yearTag}>{project.year}</span>
                  </div>

                  <h2 className={styles.projectTitle}>
                    {project.shortTitle}
                  </h2>

                  <p className={styles.projectSummary}>
                    {project.summary[language]}
                  </p>
                </div>

                <div className={styles.techRow}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.cardActions}>
                  <Link
                    href={`/work/${project.slug}`}
                    className={styles.caseStudyLink}
                    onClick={() => playTactileClick()}
                  >
                    <span>{t.workPage.readCaseStudy} →</span>
                  </Link>

                  <div className={styles.extLinks}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.subLink}
                        onClick={() => playTactileClick()}
                      >
                        <span>{t.workPage.liveWeb} ↗</span>
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.subLink}
                        onClick={() => playTactileClick()}
                      >
                        <span>{t.workPage.sourceCode} ↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
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
