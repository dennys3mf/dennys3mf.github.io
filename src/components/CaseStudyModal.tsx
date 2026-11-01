"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, ShieldCheck, Clock, Building2, UserCheck } from "lucide-react";
import { CaseStudyItem } from "../lib/translations";
import { GithubIcon } from "./Icons";
import styles from "./CaseStudyModal.module.css";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudyItem | null;
  labels: {
    close: string;
    tag: string;
    impactTitle: string;
    architectureTitle: string;
    problemTitle: string;
    solutionTitle: string;
    technologiesTitle: string;
    visitLive: string;
    viewGithub: string;
  };
}

export default function CaseStudyModal({
  isOpen,
  onClose,
  caseStudy,
  labels,
}: CaseStudyModalProps) {
  // Close on ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
        >
          <motion.div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            {/* Header Stage */}
            <div className={styles.modalHeader}>
              <div className={styles.headerEyebrowRow}>
                <span className={styles.tag}>{labels.tag}</span>
                <span className={styles.idBadge}>ID: {caseStudy.id}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className={styles.closeBtn}
                aria-label={labels.close}
              >
                <X size={20} />
              </button>

              <h2 id="case-study-modal-title" className={styles.title}>
                {caseStudy.title}
              </h2>
              <p className={styles.subtitle}>{caseStudy.subtitle}</p>

              {/* Meta Grid */}
              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <Building2 size={15} className={styles.metaIcon} />
                  <span>{caseStudy.client}</span>
                </div>
                <div className={styles.metaItem}>
                  <UserCheck size={15} className={styles.metaIcon} />
                  <span>{caseStudy.role}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={15} className={styles.metaIcon} />
                  <span>{caseStudy.duration}</span>
                </div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className={styles.modalBody}>
              {/* Measurable Impact Key Metrics Grid */}
              <section className={styles.impactSection} aria-label={labels.impactTitle}>
                <div className={styles.sectionHeadingRow}>
                  <Cpu size={18} className={styles.sectionHeadingIcon} />
                  <h3 className={styles.sectionHeading}>{labels.impactTitle}</h3>
                </div>

                <div className={styles.kpiGrid}>
                  {caseStudy.impactMetrics.map((kpi, idx) => (
                    <div key={idx} className={styles.kpiCard}>
                      <span className={styles.kpiValue}>{kpi.value}</span>
                      <span className={styles.kpiLabel}>{kpi.label}</span>
                      <p className={styles.kpiDetail}>{kpi.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Executive Summary */}
              <section className={styles.summarySection}>
                <p className={styles.summaryText}>{caseStudy.summary}</p>
              </section>

              {/* Problem vs Solution Split */}
              <div className={styles.splitGrid}>
                <div className={styles.splitCardProblem}>
                  <h4 className={styles.splitTitle}>
                    <span className={styles.problemDot} />
                    {labels.problemTitle}
                  </h4>
                  <p className={styles.splitText}>{caseStudy.problem}</p>
                </div>

                <div className={styles.splitCardSolution}>
                  <h4 className={styles.splitTitle}>
                    <ShieldCheck size={18} className={styles.solutionIcon} />
                    {labels.solutionTitle}
                  </h4>
                  <p className={styles.splitText}>{caseStudy.solution}</p>
                </div>
              </div>

              {/* Architecture Highlights */}
              <section className={styles.architectureSection}>
                <div className={styles.sectionHeadingRow}>
                  <Layers size={18} className={styles.sectionHeadingIcon} />
                  <h3 className={styles.sectionHeading}>{labels.architectureTitle}</h3>
                </div>

                <ul className={styles.architectureList}>
                  {caseStudy.architectureHighlights.map((point, idx) => (
                    <li key={idx} className={styles.architectureItem}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tech Stack Pills */}
              <section className={styles.techSection}>
                <h4 className={styles.techHeading}>{labels.technologiesTitle}</h4>
                <div className={styles.techPillGrid}>
                  {caseStudy.techStack.map((tech, idx) => (
                    <span key={idx} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Modal Footer Actions */}
            <div className={styles.modalFooter}>
              <div className={styles.footerLinks}>
                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryActionBtn}
                  >
                    <span>{labels.visitLive}</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {caseStudy.githubUrl && (
                  <a
                    href={caseStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryActionBtn}
                  >
                    <GithubIcon size={15} />
                    <span>{labels.viewGithub}</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className={styles.footerCloseBtn}
              >
                {labels.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
