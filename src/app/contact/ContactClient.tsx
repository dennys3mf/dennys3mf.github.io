"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Send, Copy, Check } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "../../components/LanguageToggle";
import { playTactileClick, playTactilePop } from "../../lib/sound";
import styles from "./Contact.module.css";

export default function ContactClient() {
  const { t, language } = useLanguage();
  const isEs = language === "es";
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
        ? (language === "es"
            ? `[Oportunidad Laboral] ${formData.name} - ${formData.company || "Empresa"}`
            : `[Hiring Opportunity] ${formData.name} - ${formData.company || "Company"}`)
        : (language === "es"
            ? `[Consulta de Proyecto] ${formData.name} - ${formData.roleOrProject || "Solución Digital"}`
            : `[Project Inquiry] ${formData.name} - ${formData.roleOrProject || "Digital Solution"}`);

    const body = `${language === "es" ? "Nombre" : "Name"}: ${formData.name}
${language === "es" ? "Correo" : "Email"}: ${formData.email}
${language === "es" ? "Empresa" : "Company"}: ${formData.company || "N/A"}
${intent === "hiring" ? `${language === "es" ? "Rol" : "Role"}: ${formData.roleOrProject || "N/A"}` : `${language === "es" ? "Plazo" : "Timeline"}: ${formData.timeline || "N/A"} | ${language === "es" ? "Presupuesto" : "Budget"}: ${formData.budget || "N/A"}`}

${language === "es" ? "Mensaje" : "Message"}:
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
      playTactilePop();
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <div className={styles.contactPageWrapper}>
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
          <h1 className={styles.pageTitle}>{t.contactPage.heading}</h1>
          <p className={styles.pageDesc}>{t.contactPage.description}</p>
        </div>

        {/* Intent Switcher */}
        <div className={styles.intentRow} role="tablist" aria-label="Contact purpose">
          <button
            type="button"
            role="tab"
            aria-selected={intent === "hiring"}
            onClick={() => {
              playTactileClick();
              setUserIntent("hiring");
            }}
            className={`${styles.intentBtn} ${intent === "hiring" ? styles.intentBtnActive : ""}`}
          >
            {t.contactPage.intentHiring}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={intent === "project"}
            onClick={() => {
              playTactileClick();
              setUserIntent("project");
            }}
            className={`${styles.intentBtn} ${intent === "project" ? styles.intentBtnActive : ""}`}
          >
            {t.contactPage.intentProject}
          </button>
        </div>

        {/* Direct Form */}
        <div className={styles.formCard}>
          <p className={styles.formSubtitle}>
            {intent === "hiring" ? t.contactPage.hiringSubtitle : t.contactPage.projectSubtitle}
          </p>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.fieldRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  {t.contactPage.nameLabel} *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder={language === "es" ? "Ej. Ana Vega" : "e.g. Jane Doe"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
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
                  required
                  placeholder={language === "es" ? "ana@empresa.com" : "jane@company.com"}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
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
                  placeholder={language === "es" ? "Ej. Acme Corp o Startup" : "e.g. Acme Corp or Startup"}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-role" className={styles.label}>
                  {intent === "hiring" ? t.contactPage.roleLabel : (isEs ? "Idea o Tipo de Proyecto" : "Project Idea or Type")}
                </label>
                <input
                  id="contact-role"
                  type="text"
                  placeholder={
                    intent === "hiring"
                      ? language === "es"
                        ? "Ej. Senior Full Stack Engineer"
                        : "e.g. Senior Full Stack Engineer"
                      : language === "es"
                      ? "Ej. Aplicación SaaS con IA"
                      : "e.g. AI-powered SaaS Web App"
                  }
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
                  <select
                    id="contact-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className={styles.select}
                  >
                    <option value="">{isEs ? "Seleccionar plazo deseado..." : "Select target timeline..."}</option>
                    <option value="Inmediato / Urgent">{isEs ? "Inmediato / Urgente (< 1 mes)" : "Immediate (< 1 month)"}</option>
                    <option value="1-3 meses / 1-3 months">{isEs ? "1 - 3 meses" : "1 - 3 months"}</option>
                    <option value="3+ meses / 3+ months">{isEs ? "3+ meses" : "3+ months"}</option>
                    <option value="Flexible">{isEs ? "Flexible" : "Flexible"}</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-budget" className={styles.label}>
                    {t.contactPage.budgetLabel}
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className={styles.select}
                  >
                    <option value="">{isEs ? "Seleccionar rango referencial..." : "Select budget range..."}</option>
                    <option value="< $2,000">&lt; $2,000 USD</option>
                    <option value="$2,000 - $5,000">$2,000 - $5,000 USD</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000 USD</option>
                    <option value="$10,000+">$10,000+ USD</option>
                    <option value="Por definir / Undefined">{isEs ? "Por definir" : "To be determined"}</option>
                  </select>
                </div>
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="contact-message" className={styles.label}>
                {t.contactPage.messageLabel} *
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder={
                  intent === "hiring"
                    ? language === "es"
                      ? "Cuéntame sobre el equipo, los desafíos técnicos y la visión..."
                      : "Tell me about the team, technical challenges, and role expectations..."
                    : language === "es"
                    ? "Describe el problema comercial o el producto que necesitas construir..."
                    : "Describe the business challenge or software system you want to build..."
                }
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={styles.textarea}
              />
              {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              onClick={() => playTactileClick()}
            >
              <Send size={16} />
              <span>{intent === "hiring" ? t.contactPage.submitHiring : t.contactPage.submitProject}</span>
            </button>
          </form>
        </div>

        {/* Direct Email fallback */}
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
            aria-label="Copiar dirección de email"
          >
            {copiedEmail ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
            <span>{copiedEmail ? t.contactPage.copiedEmail : t.contactPage.copyEmail}</span>
          </button>
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
