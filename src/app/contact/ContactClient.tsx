"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Copy, Check } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { siteConfig } from "../../data/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Contact.module.css";

export default function ContactClient() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const queryIntent = searchParams?.get("intent");
  const [userIntent, setUserIntent] = useState<"hiring" | "project" | null>(null);
  const intent = userIntent ?? (queryIntent === "hiring" ? "hiring" : "project");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    roleOrProject: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = t.contactPage.requiredField;
    if (!formData.email.trim()) {
      errs.email = t.contactPage.requiredField;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.contactPage.invalidEmail;
    }
    if (!formData.message.trim()) {
      errs.message = t.contactPage.requiredField;
    } else if (formData.message.trim().length < 15) {
      errs.message = t.contactPage.messageTooShort;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject =
      intent === "hiring"
        ? `[Hiring Opportunity] ${formData.name} - ${formData.company || "Company"}`
        : `[Project Inquiry] ${formData.name} - ${formData.roleOrProject || "Digital Solution"}`;

    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
${intent === "hiring" ? `Role: ${formData.roleOrProject || "N/A"}` : `Timeline: ${formData.timeline || "N/A"} | Budget: ${formData.budget || "N/A"}`}

Message:
${formData.message}
`;

    // Launch default email client
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <div className={styles.contactPageWrapper}>
      <Header />

      <main id="main-content" className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>DIRECT ENGAGEMENT</span>
          </div>
          <h1 className={styles.pageTitle}>{t.contactPage.heading}</h1>
          <p className={styles.pageDesc}>{t.contactPage.description}</p>
        </div>

        {/* Intent Switcher */}
        <div className={styles.intentRow} role="tablist" aria-label="Conversation intent">
          <button
            type="button"
            role="tab"
            aria-selected={intent === "hiring"}
            onClick={() => setUserIntent("hiring")}
            className={`${styles.intentBtn} ${intent === "hiring" ? styles.intentBtnActive : ""}`}
          >
            {t.contactPage.intentHiring}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={intent === "project"}
            onClick={() => setUserIntent("project")}
            className={`${styles.intentBtn} ${intent === "project" ? styles.intentBtnActive : ""}`}
          >
            {t.contactPage.intentProject}
          </button>
        </div>

        {/* Form Card */}
        <div className={styles.formCard}>
          <div className={styles.formSubtitle}>
            {intent === "hiring"
              ? t.contactPage.hiringSubtitle
              : t.contactPage.projectSubtitle}
          </div>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.fieldRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  {t.contactPage.nameLabel} *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  {t.contactPage.emailLabel} *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-company" className={styles.label}>
                  {t.contactPage.companyLabel}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-roleOrProject" className={styles.label}>
                  {intent === "hiring" ? t.contactPage.roleLabel : t.contactPage.projectTypeLabel}
                </label>
                <input
                  id="contact-roleOrProject"
                  type="text"
                  placeholder={intent === "hiring" ? "e.g. Senior Full Stack Developer" : "e.g. Web App MVP / Automation"}
                  value={formData.roleOrProject}
                  onChange={(e) => setFormData({ ...formData, roleOrProject: e.target.value })}
                  className={styles.input}
                />
              </div>
            </div>

            {intent === "project" && (
              <div className={styles.fieldRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-timeline" className={styles.label}>
                    {t.contactPage.timelineLabel}
                  </label>
                  <input
                    id="contact-timeline"
                    type="text"
                    placeholder="e.g. 4 - 8 weeks"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-budget" className={styles.label}>
                    {t.contactPage.budgetLabel}
                  </label>
                  <input
                    id="contact-budget"
                    type="text"
                    placeholder="e.g. $1,500 - $3,500+"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className={styles.input}
                  />
                </div>
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="contact-message" className={styles.label}>
                {t.contactPage.messageLabel} *
              </label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={styles.textarea}
                placeholder={
                  intent === "hiring"
                    ? "Tell me about the role, tech stack, and what problem your team is solving..."
                    : "Describe what you want to build, key features, and any existing systems or designs..."
                }
                aria-required="true"
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
              <Send size={16} />
              <span>
                {intent === "hiring"
                  ? t.contactPage.submitHiring
                  : t.contactPage.submitProject}
              </span>
            </button>
          </form>
        </div>

        {/* Direct Email Card */}
        <div className={styles.directEmailCard}>
          <div className={styles.emailInfo}>
            <span className={styles.emailTitle}>{t.contactPage.emailDirectly}</span>
            <a href={`mailto:${siteConfig.email}`} className={styles.emailAddr}>
              {siteConfig.email}
            </a>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={styles.copyBtn}
            title={t.contactPage.copyEmail}
          >
            {copiedEmail ? <Check size={14} style={{ color: "var(--primary)" }} /> : <Copy size={14} />}
            <span>{copiedEmail ? t.contactPage.copiedEmail : t.contactPage.copyEmail}</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
