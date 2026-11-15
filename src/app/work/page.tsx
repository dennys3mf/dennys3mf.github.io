"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, Project } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import EditorialHeader from "../../components/EditorialHeader";
import EditorialFooter from "../../components/EditorialFooter";
import { playTactileClick } from "../../lib/sound";
import styles from "./Work.module.css";

export default function WorkPage() {
  const { t, language } = useLanguage();
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
      {/* Unified Minimalist Editorial Navigation */}
      <EditorialHeader />

      <main id="main-content" className={styles.container}>
        <div className={styles.headerBlock}>
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
              <Link
                href={`/work/${project.slug}`}
                className={styles.mediaFrame}
                onClick={() => playTactileClick()}
                aria-label={project.title[language]}
              >
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
              </Link>

              <div className={styles.cardBody}>
                <div>
                  <div className={styles.metaTop}>
                    <span className={styles.categoryTag}>
                      {project.categoryLabel[language]}
                    </span>
                    <span className={styles.yearTag}>{project.year}</span>
                  </div>

                  <h2 className={styles.projectTitle}>
                    <Link
                      href={`/work/${project.slug}`}
                      className={styles.titleLink}
                      onClick={() => playTactileClick()}
                    >
                      {project.shortTitle}
                    </Link>
                  </h2>

                  <p className={styles.projectSummary}>
                    {project.summary[language]}
                  </p>
                </div>

                <p className={styles.techInline}>
                  {project.technologies.slice(0, 5).join(" · ")}
                </p>

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

      <EditorialFooter />
    </div>
  );
}
