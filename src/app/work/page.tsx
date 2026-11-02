"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PROJECTS, Project } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
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

  const filteredProjects = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className={styles.workPageWrapper}>
      <Header />

      <main id="main-content" className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>PORTFOLIO PROOF</span>
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
              onClick={() => setActiveFilter(f.key)}
              className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterBtnActive : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
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
                    aria-label={`${project.title} video`}
                  />
                ) : (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
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

                  <h2 className={styles.projectTitle} style={{ marginTop: "0.5rem" }}>
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
                  >
                    <span>{t.workPage.readCaseStudy}</span>
                    <ArrowUpRight size={15} />
                  </Link>

                  <div className={styles.extLinks}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.subLink}
                      >
                        <span>{t.workPage.liveWeb}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.subLink}
                      >
                        <span>{t.workPage.sourceCode}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
