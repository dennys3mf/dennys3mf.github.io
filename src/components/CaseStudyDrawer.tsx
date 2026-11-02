"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CASE_STUDIES } from "../data/caseStudies";
import { GithubIcon } from "./Icons";
import styles from "./CaseStudyDrawer.module.css";

interface CaseStudyDrawerProps {
  projectIndex: number | null;
  onClose: () => void;
  onSelectProject: (idx: number) => void;
}

export default function CaseStudyDrawer({
  projectIndex,
  onClose,
  onSelectProject,
}: CaseStudyDrawerProps) {
  const { language } = useLanguage();
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const isOpen = projectIndex !== null;
  const caseStudy =
    projectIndex !== null
      ? CASE_STUDIES.find((c) => c.index === projectIndex) ?? null
      : null;

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || !caseStudy) return null;

  const handlePrev = () => {
    const prevIdx =
      caseStudy.index > 0 ? caseStudy.index - 1 : CASE_STUDIES.length - 1;
    onSelectProject(prevIdx);
    if (drawerRef.current) {
      drawerRef.current.scrollTop = 0;
    }
  };

  const handleNext = () => {
    const nextIdx =
      caseStudy.index < CASE_STUDIES.length - 1 ? caseStudy.index + 1 : 0;
    onSelectProject(nextIdx);
    if (drawerRef.current) {
      drawerRef.current.scrollTop = 0;
    }
  };

  const isEn = language === "en";

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <aside
        ref={drawerRef}
        className={styles.drawer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Discipline, Project Counter & Close */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.discipline}>
              {caseStudy.discipline[language]}
            </span>
            <span className={styles.counter}>
              0{caseStudy.index + 1} / 0{CASE_STUDIES.length}
            </span>
          </div>

          <div className={styles.headerControls}>
            <div className={styles.navArrows}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.navArrowBtn}
                title={isEn ? "Previous Case Study" : "Caso de estudio anterior"}
                aria-label={isEn ? "Previous Case Study" : "Caso anterior"}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className={styles.navArrowBtn}
                title={isEn ? "Next Case Study" : "Siguiente caso de estudio"}
                aria-label={isEn ? "Next Case Study" : "Siguiente caso"}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={styles.closeBtn}
              aria-label={isEn ? "Close case study" : "Cerrar estudio de caso"}
            >
              <span className={styles.escBadge}>ESC</span>
              <X size={18} />
            </button>
          </div>
        </header>

        {/* Scrollable Content Body */}
        <div className={styles.content}>
          {/* Hero Media Stage */}
          <div className={styles.mediaFrame}>
            {caseStudy.video ? (
              <video
                src={caseStudy.video}
                poster={caseStudy.image}
                autoPlay
                loop
                muted
                playsInline
                controls
                className={styles.mediaVideo}
                aria-label={`${caseStudy.title} demo`}
              />
            ) : (
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={1200}
                height={750}
                priority
                className={styles.mediaImage}
              />
            )}
          </div>

          {/* Title & Executive Pitch */}
          <div className={styles.titleBlock}>
            <h2 id="case-study-title" className={styles.title}>
              {caseStudy.title}
            </h2>
            <p className={styles.summary}>{caseStudy.summary[language]}</p>
          </div>

          {/* Quick Facts Strip */}
          <div className={styles.factsGrid}>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>
                {isEn ? "Role" : "Rol"}
              </span>
              <span className={styles.factValue}>{caseStudy.role[language]}</span>
            </div>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>
                {isEn ? "Timeline & Status" : "Línea Temporal & Estado"}
              </span>
              <span className={styles.factValue}>
                {caseStudy.timeline[language]}
              </span>
            </div>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>
                {isEn ? "Category" : "Categoría de Producto"}
              </span>
              <span className={styles.factValue}>{caseStudy.type[language]}</span>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className={styles.actionsBar}>
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
              >
                <span>{isEn ? "Visit Live Platform" : "Visitar Plataforma en Vivo"}</span>
                <ArrowUpRight size={17} />
              </a>
            )}

            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryAction}
              >
                <GithubIcon size={16} />
                <span>{isEn ? "Source Code on GitHub" : "Código en GitHub"}</span>
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          {/* Key Metrics Grid */}
          <section className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionNum}>00.</span>
              <span>{isEn ? "Key Metrics & Impact" : "Métricas Clave & Resultados"}</span>
            </h3>
            <div className={styles.metricsGrid}>
              {caseStudy.metrics.map((m, i) => (
                <div key={i} className={styles.metricCard}>
                  <div className={styles.metricValue}>{m.value}</div>
                  <div className={styles.metricLabel}>{m.label[language]}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 01. The Challenge */}
          <section className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionNum}>01.</span>
              <span>
                {isEn
                  ? "The Challenge & Business Context"
                  : "El Problema & Contexto del Negocio"}
              </span>
            </h3>
            <p className={styles.sectionParagraph}>
              {caseStudy.challenge[language]}
            </p>
          </section>

          {/* 02. Architecture & Decisions */}
          <section className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionNum}>02.</span>
              <span>
                {isEn
                  ? "Architecture & Technical Decisions"
                  : "Arquitectura & Decisiones Técnicas"}
              </span>
            </h3>
            <p className={styles.sectionParagraph}>
              {caseStudy.architecture[language]}
            </p>
          </section>

          {/* 03. Key Hurdles Overcome */}
          <section className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionNum}>03.</span>
              <span>
                {isEn
                  ? "Key Technical Hurdles Overcome"
                  : "Desafíos Técnicos Superados"}
              </span>
            </h3>
            <p className={styles.sectionParagraph}>
              {caseStudy.keyHurdles[language]}
            </p>
          </section>

          {/* 04. Measurable Impact */}
          <section className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionNum}>04.</span>
              <span>
                {isEn
                  ? "Impact & Production Readiness"
                  : "Impacto & Puesta en Marcha"}
              </span>
            </h3>
            <p className={styles.sectionParagraph}>
              {caseStudy.impact[language]}
            </p>
          </section>

          {/* Technologies Used */}
          <section className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionNum}>05.</span>
              <span>{isEn ? "Engineering Stack" : "Stack de Tecnologías"}</span>
            </h3>
            <div className={styles.stackRow}>
              {caseStudy.stack.map((tech, i) => (
                <span key={i} className={styles.stackItem}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Bottom Navigation */}
          <footer className={styles.drawerFooter}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.footerNavBtn}
            >
              <ChevronLeft size={16} />
              <span>{isEn ? "Previous Project" : "Proyecto Anterior"}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className={styles.footerCloseBtn}
            >
              {isEn ? "Close Case Study" : "Cerrar Estudio"}
            </button>

            <button
              type="button"
              onClick={handleNext}
              className={styles.footerNavBtn}
            >
              <span>{isEn ? "Next Project" : "Siguiente Proyecto"}</span>
              <ChevronRight size={16} />
            </button>
          </footer>
        </div>
      </aside>
    </div>
  );
}
