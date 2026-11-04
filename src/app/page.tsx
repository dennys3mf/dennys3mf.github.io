"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { PROJECTS } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import HandDrawn from "../components/ui/HandDrawn";
import { playTactileClick } from "../lib/sound";
import styles from "./page.module.css";

export default function Home() {
  const { t, language } = useLanguage();

  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className={styles.main}>
      <Header />

      <main id="main-content">
        {/* ====================================================================
            SECTION 02 — HERO
           ==================================================================== */}
        <section className={styles.heroSection}>
          {/* Subtle Azure Editorial Dot Matrix Texture */}
          <div
            aria-hidden="true"
            className={styles.heroDotPattern}
            style={{ backgroundImage: "url('/mascot/patron-puntos.svg')" }}
          />
          {/* Blue Waves Base Transition */}
          <Image
            src="/mascot/fondo-olas-azules.svg"
            alt=""
            aria-hidden="true"
            width={1440}
            height={360}
            className={styles.heroWaves}
          />

          <div className={styles.container}>
            <div className={styles.heroGrid}>
              {/* Copy Side */}
              <div className={styles.heroContent}>
                <div style={{ position: "relative", display: "inline-block", width: "fit-content" }}>
                  <div className={styles.eyebrow}>
                    <HandDrawn variant="underline" color="var(--secondary)">
                      <span>{t.hero.eyebrow}</span>
                    </HandDrawn>
                  </div>
                  <Image
                    src="/mascot/acento-estrellas.svg"
                    alt=""
                    aria-hidden="true"
                    width={310}
                    height={170}
                    className={styles.heroStarsAccent}
                  />
                </div>

                <h1 className={styles.heroHeadline}>
                  {language === "es" ? (
                    <>
                      Construyo software que hace{" "}
                      <HandDrawn variant="highlight" color="var(--accent)">
                        simple
                      </HandDrawn>{" "}
                      lo complejo
                    </>
                  ) : (
                    <>
                      I build software that makes complex things feel{" "}
                      <HandDrawn variant="highlight" color="var(--accent)">
                        simple
                      </HandDrawn>
                    </>
                  )}
                </h1>

                <p className={styles.heroDescription}>
                  {t.hero.description}
                </p>

                {/* CTAs */}
                <div className={styles.heroCtaRow}>
                  <Link
                    href="/work"
                    className={styles.primaryBtn}
                    onClick={() => playTactileClick()}
                  >
                    <span>{t.hero.ctaPrimary}</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    href="/contact?intent=project"
                    className={styles.secondaryBtn}
                    onClick={() => playTactileClick()}
                  >
                    <span>{t.hero.ctaSecondary}</span>
                  </Link>
                </div>

                {/* Recruiter CTA (Discreet) */}
                <Link
                  href="/experience"
                  className={styles.recruiterCta}
                  onClick={() => playTactileClick()}
                >
                  <span>{t.hero.ctaRecruiter}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Patatus Developer Mascot Visual */}
              <div className={styles.heroVisual}>
                <div className={styles.patatusHeroWrapper}>
                  {/* Decorative Orbit Accent */}
                  <Image
                    src="/mascot/acento-orbita.svg"
                    alt=""
                    aria-hidden="true"
                    width={360}
                    height={300}
                    className={styles.patatusOrbitAccent}
                  />
                  {/* Main Hero Mascot SVG */}
                  <Image
                    src="/mascot/patatus-hero.svg"
                    width={760}
                    height={600}
                    priority
                    alt={
                      language === "es"
                        ? "Patatus, mascota pingüino desarrollador de Dennys programando en una laptop"
                        : "Patatus, Dennys's penguin developer mascot coding on a laptop"
                    }
                    className={`${styles.patatusHeroImg} patatusFloating`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Curved Divider */}
        <div className={styles.editorialDividerWrapper} aria-hidden="true">
          <Image
            src="/mascot/separador-editorial.svg"
            alt=""
            aria-hidden="true"
            width={1200}
            height={110}
            className={styles.editorialDivider}
          />
        </div>

        {/* ====================================================================
            SECTION 03 — SELECTED WORK
           ==================================================================== */}
        <section className={styles.workSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}>
                <span>{t.selectedWork.eyebrow}</span>
              </div>
              <h2 className={styles.sectionTitle}>{t.selectedWork.heading}</h2>
              <p className={styles.sectionDesc}>{t.selectedWork.description}</p>
            </div>

            <div className={styles.projectsList}>
              {featuredProjects.map((project) => (
                <article key={project.slug} className={styles.projectCard}>
                  {/* Media Frame (Clean object-fit: contain) */}
                  <div className={styles.projectVisual}>
                    {project.video ? (
                      <video
                        src={project.video}
                        poster={project.coverImage}
                        loop
                        muted
                        autoPlay
                        playsInline
                        className={styles.projectMedia}
                        aria-label={`${project.title[language]} video preview`}
                      />
                    ) : (
                      <Image
                        src={project.coverImage}
                        alt={project.title[language]}
                        width={960}
                        height={540}
                        className={styles.projectMedia}
                      />
                    )}
                  </div>

                  {/* Editorial Details */}
                  <div className={styles.projectDetails}>
                    <div className={styles.projectMetaTop}>
                      <span className={styles.projectCategory}>
                        {project.categoryLabel[language]}
                      </span>
                      <span className={styles.projectStatus}>
                        {project.status === "live" && (
                          <span className={styles.statusPulseDot} aria-hidden="true" />
                        )}
                        {project.status === "live"
                          ? (language === "es" ? "En Producción" : "Production")
                          : (language === "es" ? "En Desarrollo" : "In Progress")}
                      </span>
                    </div>

                    <div>
                      <h3 className={styles.projectTitle}>
                        {project.shortTitle}
                      </h3>
                      <p className={styles.projectSummary} style={{ marginTop: "0.5rem" }}>
                        {project.summary[language]}
                      </p>
                    </div>

                    {/* Delba-style Engineering Metric Spec Bar */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className={styles.projectMetricBar}>
                        {project.metrics.slice(0, 3).map((metric, idx) => (
                          <div key={idx} className={styles.metricItem}>
                            <span className={styles.metricVal}>{metric.value}</span>
                            <span className={styles.metricLab}>
                              {metric.label[language]}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className={styles.projectTechList}>
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className={styles.projectActions}>
                      <Link
                        href={`/work/${project.slug}`}
                        className={styles.caseStudyBtn}
                        onClick={() => playTactileClick()}
                      >
                        <span>{t.selectedWork.readCaseStudy}</span>
                        <ArrowUpRight size={15} />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.externalLink}
                        >
                          <span>{t.selectedWork.liveDemo}</span>
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {project.repositoryUrl && (
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.externalLink}
                        >
                          <span>{t.selectedWork.sourceCode}</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.viewAllRow}>
              <Link
                href="/work"
                className={styles.secondaryBtn}
                onClick={() => playTactileClick()}
              >
                <span>{t.selectedWork.viewAll} ({PROJECTS.length})</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 04 — WHAT I BRING (More than code)
           ==================================================================== */}
        <section className={styles.pillarsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}>
                <span>{t.whatIBring.eyebrow}</span>
              </div>
              <h2 className={styles.sectionTitle}>{t.whatIBring.heading}</h2>
              <p className={styles.sectionDesc}>{t.whatIBring.subheading}</p>
            </div>

            <div className={styles.pillarsGrid}>
              {/* Pillar 1 */}
              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>01</span>
                <h3 className={styles.pillarTitle}>{t.whatIBring.p1Title}</h3>
                <p className={styles.pillarDesc}>{t.whatIBring.p1Desc}</p>
              </div>

              {/* Pillar 2 */}
              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>02</span>
                <h3 className={styles.pillarTitle}>{t.whatIBring.p2Title}</h3>
                <p className={styles.pillarDesc}>{t.whatIBring.p2Desc}</p>
              </div>

              {/* Pillar 3 */}
              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>03</span>
                <h3 className={styles.pillarTitle}>{t.whatIBring.p3Title}</h3>
                <p className={styles.pillarDesc}>{t.whatIBring.p3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 05 — HOW I WORK (From idea to implementation)
           ==================================================================== */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}>
                <span>{t.howIWork.eyebrow}</span>
              </div>
              <h2 className={styles.sectionTitle}>{t.howIWork.heading}</h2>
              <p className={styles.sectionDesc}>{t.howIWork.subheading}</p>
            </div>

            <div className={styles.stepsContainer}>
              {/* Process Curve Connector */}
              <Image
                src="/mascot/conector-secciones.svg"
                alt=""
                aria-hidden="true"
                width={1000}
                height={150}
                className={styles.stepsConnector}
              />

              <div className={styles.stepsGrid}>
                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>01</span>
                  <h3 className={styles.stepTitle}>{t.howIWork.step1Title}</h3>
                  <p className={styles.stepDesc}>{t.howIWork.step1Desc}</p>
                </div>

                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>02</span>
                  <h3 className={styles.stepTitle}>{t.howIWork.step2Title}</h3>
                  <p className={styles.stepDesc}>{t.howIWork.step2Desc}</p>
                </div>

                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>03</span>
                  <h3 className={styles.stepTitle}>{t.howIWork.step3Title}</h3>
                  <p className={styles.stepDesc}>{t.howIWork.step3Desc}</p>
                </div>

                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>04</span>
                  <h3 className={styles.stepTitle}>{t.howIWork.step4Title}</h3>
                  <p className={styles.stepDesc}>{t.howIWork.step4Desc}</p>
                </div>
              </div>

              {/* Decorative Footprints */}
              <Image
                src="/mascot/huellas-patatus.svg"
                alt=""
                aria-hidden="true"
                width={250}
                height={130}
                className={styles.stepsFootprints}
              />
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 06 — ABOUT PREVIEW
           ==================================================================== */}
        <section className={styles.aboutPreviewSection}>
          <div className={styles.container}>
            <div className={styles.aboutPreviewGrid}>
              <div className={styles.aboutPreviewText}>
                <div className={styles.eyebrow}>
                  <span>{t.aboutPreview.eyebrow}</span>
                </div>
                <h2 className={styles.sectionTitle}>{t.aboutPreview.heading}</h2>
                <p className={styles.aboutPreviewParagraph}>{t.aboutPreview.text1}</p>
                <p className={styles.aboutPreviewParagraph}>{t.aboutPreview.text2}</p>
                <div>
                  <Link
                    href="/about"
                    className={styles.secondaryBtn}
                    onClick={() => playTactileClick()}
                  >
                    <span>{t.aboutPreview.link}</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className={styles.aboutPreviewCard}>
                <Image
                  src="/images/personal/dennys-portrait.webp"
                  alt="Dennys Marquez"
                  width={600}
                  height={600}
                  className={styles.aboutPreviewImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 07 — DUAL CONVERSION
           ==================================================================== */}
        <section className={styles.dualSection}>
          <div className={styles.container}>
            <div className={styles.dualGrid}>
              {/* For teams */}
              <div className={styles.dualCard}>
                <div className={styles.dualTop}>
                  <span className={styles.dualBadge}>
                    {language === "es" ? "CARRERA Y CONTRATACIÓN" : "CAREER & HIRING"}
                  </span>
                  <h3 className={styles.dualHeading}>{t.dualConversion.teamsTitle}</h3>
                  <p className={styles.dualText}>{t.dualConversion.teamsDesc}</p>
                </div>
                <div>
                  <Link
                    href="/experience"
                    className={styles.primaryBtn}
                    onClick={() => playTactileClick()}
                  >
                    <span>{t.dualConversion.teamsCta}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* For businesses */}
              <div className={styles.dualCard}>
                <div className={styles.dualTop}>
                  <span className={styles.dualBadge} style={{ color: "var(--accent)" }}>
                    {language === "es" ? "FREELANCE Y CONSULTORÍA" : "FREELANCE & CONSULTING"}
                  </span>
                  <h3 className={styles.dualHeading}>{t.dualConversion.businessTitle}</h3>
                  <p className={styles.dualText}>{t.dualConversion.businessDesc}</p>
                </div>
                <div>
                  <Link
                    href="/contact?intent=project"
                    className={styles.secondaryBtn}
                    onClick={() => playTactileClick()}
                  >
                    <span>{t.dualConversion.businessCta}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 08 — FINAL CTA
           ==================================================================== */}
        <section className={styles.finalCtaSection}>
          <div className={styles.container}>
            <div className={styles.finalCtaBox}>
              <h2 className={styles.finalCtaHeading}>{t.finalCta.heading}</h2>
              <p className={styles.finalCtaDesc}>{t.finalCta.text}</p>
              <Link
                href="/contact"
                className={styles.primaryBtn}
                style={{ padding: "1rem 2rem", fontSize: "1rem" }}
                onClick={() => playTactileClick()}
              >
                <span>{t.finalCta.cta}</span>
                <ArrowUpRight size={18} />
              </Link>
              {/* Patatus Peeking Mascot Asset */}
              <Image
                src="/mascot/patatus-asomandose.svg"
                alt=""
                aria-hidden="true"
                width={380}
                height={320}
                className={styles.patatusPeeking}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
