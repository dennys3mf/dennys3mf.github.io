"use client";

import styles from "./page.module.css";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import LiveClock from "../components/LiveClock";
import RotatingBadge from "../components/RotatingBadge";
import FloatingNav from "../components/FloatingNav";
import ContactBillboard from "../components/ContactBillboard";
import LanguageToggle from "../components/LanguageToggle";
import ThreeHeroSphere from "../components/ThreeHeroSphere";
import GsapScrollOrchestrator from "../components/GsapScrollOrchestrator";
import SmoothScroller from "../components/SmoothScroller";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon } from "../components/Icons";
import {
  ArrowUpRight,
  Mail,
  Search,
  Terminal,
  Rocket,
  Brain,
  Workflow,
  Code2,
  Layers,
  Cpu,
  Coins,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <main className={styles.main}>
      {/* Lenis Smooth Inertia Momentum (Video-like Scroll) */}
      <SmoothScroller />

      {/* GSAP & ScrollTrigger Animation Orchestrator */}
      <GsapScrollOrchestrator />

      {/* ====================================================================
          FLOATING BOTTOM PILL NAVBAR (With Language Switcher & Active Section Pill)
         ==================================================================== */}
      <FloatingNav />

      {/* ====================================================================
          HERO SECTION - EXACT BRAND SPECIFICATION
         ==================================================================== */}
      <section id="home" className={styles.hero}>
        {/* Decorative Fluid Vector Curves & Interactive 3D Three.js Sphere */}
        <div className={styles.heroBackgroundDecor} aria-hidden="true" data-scrub="hero-bg">
          <div className={styles.heroOrb}>
            <ThreeHeroSphere />
          </div>
          <div className={styles.heroCurvesWrap}>
            <svg className={styles.heroCurvesSvg} viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none">
              <path
                d="M-100 450 C 320 360, 680 500, 1050 390 C 1240 330, 1380 410, 1540 440"
                stroke="url(#brandCurveGrad1)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M-60 490 C 380 430, 780 560, 1180 370 C 1320 320, 1450 390, 1540 420"
                stroke="url(#brandCurveGrad2)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="brandCurveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.45" />
                  <stop offset="60%" stopColor="#8A7BFF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#4F6BFF" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="brandCurveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A7BFF" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#4F6BFF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8A7BFF" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Top Meta Bar */}
        <div className={styles.heroMeta}>
          <div className={styles.heroMetaGroup}>
            <div className={styles.heroLocalTime}>
              <LiveClock />
            </div>
            <div className={styles.heroTimezone}>
              {t.hero.location}
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                className={styles.peruFlag}
                aria-label="Bandera de Perú"
                role="img"
                style={{ marginLeft: "0.5rem", verticalAlign: "-1px", display: "inline-block" }}
              >
                <rect width="6" height="12" fill="#D91023" />
                <rect x="6" width="6" height="12" fill="#FFFFFF" />
                <rect x="12" width="6" height="12" fill="#D91023" />
              </svg>
            </div>
          </div>

          <div className={styles.heroMetaActions}>
            <LanguageToggle variant="segmented" />
            <a
              href="mailto:dennys.marquez.dev@gmail.com"
              className={styles.heroContactLink}
              aria-label={t.hero.emailAria}
            >
              <Mail size={16} />
              <span>dennys.marquez.dev@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Center Brand Statement */}
        <div className={styles.heroTopWrap}>
          <div className={styles.heroCenterBrand}>
            <h1 className={styles.textHero}>
              <span className={styles.logoDennys}>dennys</span>{" "}
              <span className={styles.logoMarquez}>marquez</span>
            </h1>
            <div className={styles.heroSubtrack}>{t.hero.title}</div>
            <p className={styles.heroImpactMotto}>{t.hero.motto}</p>
          </div>
        </div>

        {/* Bottom Wrap: Spacing for floating navbar */}
        <div className={styles.heroBottomWrap} />
      </section>

      {/* ====================================================================
          ABOUT SECTION - BRAND DOSSIER (Editorial Split & Specialized Pillars)
         ==================================================================== */}
      <section id="about" className={styles.aboutModdoSection}>
        <div className={styles.aboutModdoContainer}>
          <div className={styles.aboutModdoHeader}>
            <div className={styles.aboutModdoLeft}>
              <span className={styles.aboutSimpleEyebrow}>
                <span className={styles.eyebrowDot} />
                {t.about.eyebrow}
              </span>
              <h2 className={styles.aboutModdoHeading} data-gsap="heading">
                {t.about.heading}
              </h2>
              <div className={styles.aboutDegreeBadge}>
                <CheckCircle2 size={16} className="text-blue-600 inline-block mr-1.5 flex-shrink-0" />
                <span>{t.about.degreeTitle} · <strong>{t.about.degreeInstitution}</strong></span>
              </div>
            </div>
            <div className={styles.aboutLeadWrap}>
              <p className={styles.aboutModdoParagraph}>
                {t.about.lead1}
              </p>
              <p className={styles.aboutModdoParagraph}>
                {t.about.lead2}
              </p>
              <p className={styles.aboutModdoParagraph}>
                {t.about.lead3}
              </p>
            </div>
          </div>

          {/* Photo stage with clean workstation image & brand accent badge */}
          <div className={styles.aboutStageWrap}>
            <div className={styles.aboutMainImgCard}>
              <img
                src="/images/personal/dennys-workstation.webp"
                alt="Dennys Gabriel Marquez Flores — Full Stack Developer | Python, React & AI Integration"
                loading="lazy"
              />
              <div className={styles.workstationBrandBadge}>
                <span className={styles.workstationBrandDot} />
                <span>TECSUP Alumni · Software Design &amp; Development</span>
              </div>
            </div>
          </div>

          {/* ====================================================================
              BRAND TECH DOSSIER (Executive 2-Column Split Layout)
             ==================================================================== */}
          <ScrollReveal delay={150}>
            <div className={styles.brandDossierCard}>
              {/* Left Column: Narrative Highlights & Founder Credentials */}
              <div className={styles.dossierNarrativeCol}>
                <div className={styles.dossierHeaderTag}>
                  <span className={styles.dossierIsotipo}>d<span className={styles.dossierIsotipoDot}>.</span></span>
                  <span className={styles.dossierTagText}>
                    {language === "en" ? "Technical Trajectory & Real-World Impact" : "Trayectoria Técnica & Impacto Real"}
                  </span>
                </div>

                <h3 className={styles.dossierTitle}>
                  {t.about.featuredHeading}
                </h3>

                <div className={styles.dossierNarrativeCards}>
                  {/* Highlight 1: Machine Learning & Recommenders */}
                  <div className={styles.dossierHighlightItem}>
                    <div className={styles.dossierHighlightIconWrap}>
                      <Brain size={22} />
                    </div>
                    <div className={styles.dossierHighlightContent}>
                      <h4 className={styles.dossierHighlightTitle}>
                        {language === "en" ? "Machine Learning & Recommender Systems" : "Machine Learning & Recomendadores"}
                      </h4>
                      <p className={styles.dossierHighlightDesc}>
                        {t.about.pRecommenders}
                      </p>
                      <div className={styles.dossierTechChips}>
                        <span className={styles.dossierChip}>PySpark</span>
                        <span className={styles.dossierChip}>Collaborative Filtering</span>
                        <span className={styles.dossierChip}>Netflix / TikTok Feeds</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight 2: AI Agents & Chatbots */}
                  <div className={styles.dossierHighlightItem}>
                    <div className={styles.dossierHighlightIconWrap}>
                      <Workflow size={22} />
                    </div>
                    <div className={styles.dossierHighlightContent}>
                      <h4 className={styles.dossierHighlightTitle}>
                        {language === "en" ? "AI Chatbots, LLMs & Autonomous Agents" : "Chatbots IA, LLMs & Agentes Autónomos"}
                      </h4>
                      <p className={styles.dossierHighlightDesc}>
                        {t.about.pAiAgents}
                      </p>
                      <div className={styles.dossierTechChips}>
                        <span className={styles.dossierChip}>RAG Híbridos</span>
                        <span className={styles.dossierChip}>pgvector</span>
                        <span className={styles.dossierChip}>Tool Calling</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight 3: Founder ahorratiempo.pe & Mobile */}
                  <div className={styles.dossierHighlightItem}>
                    <div className={styles.dossierHighlightIconWrap}>
                      <Sparkles size={22} />
                    </div>
                    <div className={styles.dossierHighlightContent}>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className={styles.dossierHighlightTitle}>
                          {language === "en" ? "Founder of ahorratiempo.pe & Mobile Engineering" : "Fundador de ahorratiempo.pe & Desarrollo Móvil"}
                        </h4>
                        <a
                          href="https://ahorratiempo.pe"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.dossierFounderLink}
                        >
                          ahorratiempo.pe ↗
                        </a>
                      </div>
                      <p className={styles.dossierHighlightDesc}>
                        {t.about.pAhorratiempo}
                      </p>
                      <p className={styles.dossierHighlightDesc} style={{ marginTop: "0.5rem" }}>
                        {t.about.pMobile}
                      </p>
                      <div className={styles.dossierTechChips}>
                        <span className={styles.dossierChip}>Flutter &amp; Dart</span>
                        <span className={styles.dossierChip}>Cloudflare Workers</span>
                        <span className={styles.dossierChip}>REST APIs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Core Specialization Pillars Grid */}
              <div className={styles.dossierPillarsCol} data-gsap="card-grid">
                <div className={styles.dossierPillarsTopNote}>
                  <span className={styles.dossierPillarsDot} />
                  <span>{language === "en" ? "Core Engineering Pillars" : "Pilares de Especialización"}</span>
                </div>

                <div className={styles.dossierPillarsGrid}>
                  {t.about.pillars.map((pillar, idx) => (
                    <div key={idx} className={styles.dossierPillarCard} data-gsap="feature-card">
                      <div className={styles.dossierPillarHeader}>
                        <span className={styles.dossierPillarNum}>0{idx + 1}</span>
                        <div className={styles.dossierPillarIconBox}>
                          {idx === 0 && <Code2 size={22} className="text-blue-600" />}
                          {idx === 1 && <Brain size={22} className="text-indigo-600" />}
                          {idx === 2 && <Workflow size={22} className="text-purple-600" />}
                          {idx === 3 && <Layers size={22} className="text-emerald-600" />}
                        </div>
                      </div>
                      <h4 className={styles.dossierPillarTitle}>{pillar.title}</h4>
                      <p className={styles.dossierPillarDesc}>{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          SERVICES SECTION (Engineering Console & Direct Service Cards)
         ==================================================================== */}
      <section id="servicios" className={styles.servicesModdoSection}>
        <div className={styles.servicesModdoContainer}>
          <div className={styles.servicesModdoHeader}>
            <h2 className={styles.servicesModdoTitle} data-gsap="heading">
              {t.services.heading}
            </h2>
            <p className={styles.servicesModdoEyebrow}>{t.services.eyebrow}</p>
          </div>

          <div className={styles.servicesModdoStage}>
            {/* Left: Architecture Core Console */}
            <div className={styles.serviceConsoleCard}>
              <div className={styles.consoleHeader}>
                <div className={styles.consoleDots}>
                  <span className={styles.consoleDotRed} />
                  <span className={styles.consoleDotYellow} />
                  <span className={styles.consoleDotGreen} />
                </div>
                <span className={styles.consoleTitle}>architecture-core.ts</span>
              </div>
              <div className={styles.consoleBody}>
                <div className={styles.consoleLine}>
                  <span className={styles.consoleKeyword}>export const</span> <span className={styles.consoleVar}>engineerCore</span> = &#123;
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>lead:</span> <span className={styles.consoleString}>&quot;Dennys Marquez&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>degree:</span> <span className={styles.consoleString}>&quot;{t.services.consoleDegree}&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>role:</span> <span className={styles.consoleString}>&quot;{t.services.consoleRole}&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>stack:</span> [
                </div>
                <div className={styles.consoleLineIndent2}>
                  <span className={styles.consoleString}>&quot;React, TypeScript, Python, Django&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent2}>
                  <span className={styles.consoleString}>&quot;PySpark &amp; ML Recommenders&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent2}>
                  <span className={styles.consoleString}>&quot;AI Chatbots, LLMs &amp; Agents&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent2}>
                  <span className={styles.consoleString}>&quot;Firebase &amp; Cloudflare Workers&quot;</span>
                </div>
                <div className={styles.consoleLineIndent}>
                  ],
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>founder:</span> <span className={styles.consoleString}>&quot;ahorratiempo.pe&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>businessImpact:</span> <span className={styles.consoleBoolean}>true</span>
                </div>
                <div className={styles.consoleLine}>&#125;;</div>
              </div>
            </div>

            {/* Right: Stack of 5 Moddo Pill Service Buttons */}
            <div className={styles.servicesPillStack}>
              {t.services.items.map((item, idx) => {
                const colorClasses = [
                  styles.pillPink,
                  styles.pillBlue,
                  styles.pillOrange,
                  styles.pillGreen,
                  styles.pillRed,
                ];
                return (
                  <a
                    key={idx}
                    href="#contacto"
                    className={`${styles.servicePillBtn} ${colorClasses[idx % colorClasses.length]}`}
                  >
                    <span className={styles.servicePillIcon}>↗</span>
                    <span>{item}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CASES / WORK SECTION (Sleek Browser Chrome, Light Palette & High Impact)
         ==================================================================== */}
      <section id="casos" className={styles.casesModdoSection}>
        <div className={styles.casesModdoContainer}>
          <div className={styles.casesModdoHeader}>
            <div className={styles.casesModdoEyebrowWrap}>
              <span className={styles.casesEyebrowDot} />
              <span className={styles.casesModdoEyebrow}>{t.projects.eyebrow}</span>
            </div>
            <h2 className={styles.casesModdoTitle} data-gsap="heading">
              {t.projects.heading}
            </h2>
            <p className={styles.casesModdoSub}>
              {t.projects.subheading}
            </p>
          </div>

          <div className={styles.casesGridModdo}>
            {/* Project 01: ahorratiempo.pe */}
            <div data-gsap="project-card">
              <ScrollReveal delay={100}>
                <a
                  href="https://ahorratiempo.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.caseCardModdo}
                >
                  <div className={styles.caseImageFrame}>
                    <div className={styles.caseBrowserBar}>
                      <div className={styles.browserDots}>
                        <span className={styles.dotRed} />
                        <span className={styles.dotYellow} />
                        <span className={styles.dotGreen} />
                      </div>
                      <span className={styles.browserUrl}>ahorratiempo.pe</span>
                    </div>
                    <img
                      src="/images/projects/ahorratiempo-preview.webp"
                      alt="ahorratiempo.pe - Plataforma SaaS con IA por Voz"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaContent}>
                    <span className={styles.casePillTagBlue}>
                      {t.projects.items[0].tag}
                    </span>
                    <h3 className={styles.caseItemTitle}>{t.projects.items[0].title}</h3>
                    <p className={styles.caseItemSub}>{t.projects.items[0].desc}</p>
                    <div className={styles.caseActionRow}>
                      <span className={styles.caseLiveStatus}>
                        <span className={styles.livePulseDot} />
                        {language === "en" ? "Live in Production" : "En Producción"}
                      </span>
                      <span className={styles.caseActionBtn}>
                        <span>{language === "en" ? "Explore SaaS" : "Explorar SaaS"}</span>
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            </div>

            {/* Project 02: Safety Helmet IoT */}
            <div data-gsap="project-card">
              <ScrollReveal delay={200}>
                <a
                  href="https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.caseCardModdo}
                >
                  <div className={styles.caseImageFrame}>
                    <div className={styles.caseBrowserBar}>
                      <div className={styles.browserDots}>
                        <span className={styles.dotRed} />
                        <span className={styles.dotYellow} />
                        <span className={styles.dotGreen} />
                      </div>
                      <span className={styles.browserUrl}>github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT</span>
                    </div>
                    <img
                      src="/images/projects/safety-helmet-preview.webp"
                      alt="Safety Helmet IoT - Telemetría y Sensores"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaContent}>
                    <span className={styles.casePillTagIndigo}>
                      {t.projects.items[3].tag}
                    </span>
                    <h3 className={styles.caseItemTitle}>{t.projects.items[3].title}</h3>
                    <p className={styles.caseItemSub}>{t.projects.items[3].desc}</p>
                    <div className={styles.caseActionRow}>
                      <span className={styles.caseLiveStatus}>
                        <span className={styles.livePulseDotGreen} />
                        {language === "en" ? "Hardware + Cloud" : "Hardware + Cloud"}
                      </span>
                      <span className={styles.caseActionBtn}>
                        <span>{language === "en" ? "View Code" : "Ver Código"}</span>
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            </div>

            {/* Project 03: App Fiscalización Digital Joya */}
            <div data-gsap="project-card">
              <ScrollReveal delay={300}>
                <a
                  href="https://github.com/dennys3mf/App-Fiscalizacion-Joya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.caseCardModdo}
                >
                  <div className={styles.caseImageFrame}>
                    <div className={styles.caseBrowserBar}>
                      <div className={styles.browserDots}>
                        <span className={styles.dotRed} />
                        <span className={styles.dotYellow} />
                        <span className={styles.dotGreen} />
                      </div>
                      <span className={styles.browserUrl}>fiscalizacion.joya.gob.pe</span>
                    </div>
                    <img
                      src="/images/projects/fiscalizacion-joya-preview.webp"
                      alt="App Fiscalización Digital Joya"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaContent}>
                    <span className={styles.casePillTagEmerald}>
                      {t.projects.items[5].tag}
                    </span>
                    <h3 className={styles.caseItemTitle}>{t.projects.items[5].title}</h3>
                    <p className={styles.caseItemSub}>{t.projects.items[5].desc}</p>
                    <div className={styles.caseActionRow}>
                      <span className={styles.caseLiveStatus}>
                        <span className={styles.livePulseDotGreen} />
                        {language === "en" ? "Offline-First Sync" : "Sincronización Offline"}
                      </span>
                      <span className={styles.caseActionBtn}>
                        <span>{language === "en" ? "View Case" : "Ver Caso"}</span>
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            </div>
          </div>

          {/* See All Work CTA Button */}
          <div className={styles.casesSeeAllWrap}>
            <a
              href="https://github.com/dennys3mf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seeAllWorkBtn}
            >
              <GithubIcon size={20} />
              <span>{language === "en" ? "View More Projects on GitHub" : "Ver Más Proyectos en GitHub"}</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROCESS SECTION (Engineering Methodology & Delivery Rigor)
         ==================================================================== */}
      <section id="proceso" className={styles.processModdoSection}>
        <div className={styles.processModdoContainer}>
          <ScrollReveal>
            <div className={styles.processHeader}>
              <div className={styles.processEyebrowWrap}>
                <span className={styles.processEyebrowDot} />
                <span className={styles.processEyebrow}>
                  {language === "en" ? "Engineering Methodology" : "Metodología de Desarrollo"}
                </span>
              </div>
              <h2 className={styles.processTitleMain}>
                {language === "en" ? "From Architecture to Production with Measurable Impact" : "De la Arquitectura a Producción con Impacto Medible"}
              </h2>
              <p className={styles.processSubtitle}>
                {language === "en"
                  ? "A rigorous 3-stage delivery pipeline ensuring rock-solid stability, typed clean code, and zero shortcuts."
                  : "Un proceso de 3 fases estructurado para construir software de alto rendimiento, código fuertemente tipado y despliegues estables sin magia negra."}
              </p>
            </div>
          </ScrollReveal>

          {/* Visual Step Connector Pipeline */}
          <div className={styles.processPipelineFlow}>
            <span className={styles.processPipelineStep}>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>01. {language === "en" ? "Discovery & Architecture" : "Arquitectura & Modelado"}</span>
            </span>
            <span className={styles.processPipelineArrow}>→</span>
            <span className={styles.processPipelineStep}>
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <span>02. {language === "en" ? "Clean Code & Testing" : "Construcción & Validación"}</span>
            </span>
            <span className={styles.processPipelineArrow}>→</span>
            <span className={styles.processPipelineStep}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>03. {language === "en" ? "Deploy & Observability" : "Despliegue & Observabilidad"}</span>
            </span>
          </div>

          <div className={styles.processGrid}>
            {/* Phase 01: Blue Card */}
            <ScrollReveal delay={100}>
              <div className={`${styles.processCardEnhanced} ${styles.processCardBlue}`}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>01</span>
                  <span className={styles.processStepTag}>
                    {language === "en" ? "PHASE 01 · ARCHITECTURE" : "FASE 01 · ARQUITECTURA"}
                  </span>
                </div>

                <div className={styles.processIconAndTitle}>
                  <div className={styles.processIconBoxBlue}>
                    <Search size={28} />
                  </div>
                  <div>
                    <h3 className={styles.processTitle}>
                      {language === "en" ? "Listen & Model Architecture" : "Escuchar & Modelar Arquitectura"}
                    </h3>
                  </div>
                </div>

                <p className={styles.processDesc}>
                  {language === "en"
                    ? "Deep dive into real business needs, data structures, and user constraints before writing code. Defining relational and vector schemas ready for scale."
                    : "Analizo las restricciones del negocio, los flujos de datos y la escalabilidad requerida. Defino esquemas relacionales y vectoriales antes de escribir la primera línea de código."}
                </p>

                {/* Clean Branded Deliverables Checklist (Replaces squished micro-code) */}
                <div className={styles.processDeliverablesBox}>
                  <div className={styles.processDeliverablesHeader}>
                    <span>{language === "en" ? "Phase Deliverables" : "Entregables Clave"}</span>
                    <span className={styles.processDeliverablesBadge}>PostgreSQL · pgvector</span>
                  </div>
                  <ul className={styles.processDeliverablesList}>
                    <li>
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>{language === "en" ? "Data modeling & hybrid vector schemas" : "Modelado de datos y esquemas vectoriales híbridos"}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>{language === "en" ? "Stack selection (React, Python, Cloudflare Edge)" : "Selección de stack técnico óptimo (React, Python, Cloudflare)"}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>{language === "en" ? "Clear API contracts & AI feasibility blueprint" : "Definición clara de APIs y viabilidad de IA"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 02: Indigo / Purple Card */}
            <ScrollReveal delay={200}>
              <div className={`${styles.processCardEnhanced} ${styles.processCardPurple}`}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>02</span>
                  <span className={styles.processStepTag}>
                    {language === "en" ? "PHASE 02 · BUILD & VALIDATE" : "FASE 02 · CONSTRUCCIÓN"}
                  </span>
                </div>

                <div className={styles.processIconAndTitle}>
                  <div className={styles.processIconBoxPurple}>
                    <Terminal size={28} />
                  </div>
                  <div>
                    <h3 className={styles.processTitle}>
                      {language === "en" ? "Typed Code & Continuous Testing" : "Construcción Tipada & Validación"}
                    </h3>
                  </div>
                </div>

                <p className={styles.processDesc}>
                  {language === "en"
                    ? "Iterative development with clean, strongly typed code in TypeScript and Python. Developing hybrid RAG pipelines with testable software every week."
                    : "Desarrollo iterativo con entregas continuas para probar el software desde la primera semana. Código fuertemente tipado en TypeScript y Python, con pipelines RAG híbridos testeados."}
                </p>

                {/* Clean Branded Deliverables Checklist */}
                <div className={styles.processDeliverablesBox}>
                  <div className={styles.processDeliverablesHeader}>
                    <span>{language === "en" ? "Quality Standards" : "Estándares de Calidad"}</span>
                    <span className={styles.processDeliverablesBadge}>100% Type-Safe</span>
                  </div>
                  <ul className={styles.processDeliverablesList}>
                    <li>
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>{language === "en" ? "100% typed code (TypeScript + Python) without shortcuts" : "Código fuertemente tipado en TypeScript y Python sin atajos"}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>{language === "en" ? "Hybrid RAG pipelines & recommender validation" : "Pipelines RAG híbridos y recomendadores validados"}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>{language === "en" ? "Automated CI/CD & weekly functional deliverables" : "CI/CD automatizado y demos funcionales semanales"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 03: Emerald Card */}
            <ScrollReveal delay={300}>
              <div className={`${styles.processCardEnhanced} ${styles.processCardEmerald}`}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>03</span>
                  <span className={styles.processStepTag}>
                    {language === "en" ? "PHASE 03 · DEPLOY & SCALE" : "FASE 03 · PRODUCCIÓN"}
                  </span>
                </div>

                <div className={styles.processIconAndTitle}>
                  <div className={styles.processIconBoxEmerald}>
                    <Rocket size={28} />
                  </div>
                  <div>
                    <h3 className={styles.processTitle}>
                      {language === "en" ? "Cloud Deploy & Live Observability" : "Despliegue Cloud & Observabilidad"}
                    </h3>
                  </div>
                </div>

                <p className={styles.processDesc}>
                  {language === "en"
                    ? "Production cloud deployments with ultra-low latency, real-time observability, clear technical documentation, and continuous handover."
                    : "Puesta en producción en infraestructuras cloud resilientes con latencia ultra-baja. Monitoreo en tiempo real, documentación técnica clara y acompañamiento continuo."}
                </p>

                {/* Clean Branded Deliverables Checklist */}
                <div className={styles.processDeliverablesBox}>
                  <div className={styles.processDeliverablesHeader}>
                    <span>{language === "en" ? "Operational SLA" : "Garantía & Métricas"}</span>
                    <span className={styles.processDeliverablesBadgeGreen}>99.99% Uptime · 14ms</span>
                  </div>
                  <ul className={styles.processDeliverablesList}>
                    <li>
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                      <span>{language === "en" ? "Zero-downtime deployment on global cloud edge" : "Despliegue con cero tiempo de inactividad en el edge"}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                      <span>{language === "en" ? "Real-time error observability & performance telemetry" : "Observabilidad en tiempo real de errores y consumo"}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                      <span>{language === "en" ? "Comprehensive docs, code handoff & post-launch support" : "Documentación completa y acompañamiento post-lanzamiento"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHY US SECTION (Professional Engineering Pillars)
         ==================================================================== */}
      <section id="whyus" className={styles.whyUsSection}>
        <div className={styles.whyUsContainer}>
          <div className={styles.whyUsHeader}>
            <h2 className={styles.whyUsTitle}>{t.why.heading}</h2>
            <p className={styles.whyUsEyebrow}>{t.why.eyebrow}</p>
          </div>

          <div className={styles.whyUsGridModern}>
            {/* Pillar 1 */}
            <ScrollReveal delay={100}>
              <div className={`${styles.whyUsCardModern} ${styles.whyUsModernIndigo}`}>
                <div className={styles.whyUsModernTop}>
                  <div className={styles.whyUsModernIcon}>
                    <Layers size={28} />
                  </div>
                  <span className={styles.whyUsModernBadge}>TECSUP</span>
                </div>
                <h3 className={styles.whyUsModernTitle}>{t.why.pillars[0].title}</h3>
                <p className={styles.whyUsModernDesc}>{t.why.pillars[0].desc}</p>
              </div>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal delay={200}>
              <div className={`${styles.whyUsCardModern} ${styles.whyUsModernCrimson}`}>
                <div className={styles.whyUsModernTop}>
                  <div className={styles.whyUsModernIcon}>
                    <Cpu size={28} />
                  </div>
                  <span className={styles.whyUsModernBadge}>AI / ML</span>
                </div>
                <h3 className={styles.whyUsModernTitle}>{t.why.pillars[1].title}</h3>
                <p className={styles.whyUsModernDesc}>{t.why.pillars[1].desc}</p>
              </div>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal delay={300}>
              <div className={`${styles.whyUsCardModern} ${styles.whyUsModernEmerald}`}>
                <div className={styles.whyUsModernTop}>
                  <div className={styles.whyUsModernIcon}>
                    <Coins size={28} />
                  </div>
                  <span className={styles.whyUsModernBadge}>ROI &amp; CLOUD</span>
                </div>
                <h3 className={styles.whyUsModernTitle}>{t.why.pillars[2].title}</h3>
                <p className={styles.whyUsModernDesc}>{t.why.pillars[2].desc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CTA SECTION (Moddo Charcoal Canvas, Hero Contact Showcase & Action Bar)
         ==================================================================== */}
      <section id="contacto" className={styles.ctaModdoSection}>
        <div className={styles.ctaModdoContainer}>
          <ScrollReveal>
            <div className={styles.ctaStageWrap}>
              <ContactBillboard />

              {/* Rotating Badge Floating on the corner */}
              <div className={styles.ctaBadgeWrap}>
                <RotatingBadge size={145} text={t.contact.badgeText} />
              </div>
            </div>
          </ScrollReveal>

          {/* Interactive Action Bar (WhatsApp, Email, GitHub, LinkedIn) */}
          <div className={styles.ctaActionsBar}>
            <a
              href="https://wa.me/51922466078"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPillBtn}
            >
              <span>💬</span>
              <span>{language === "en" ? "Chat on WhatsApp" : "Conversar por WhatsApp"}</span>
            </a>

            <div className={styles.ctaAltLinks}>
              <a
                href="mailto:dennys.marquez.dev@gmail.com"
                className={styles.ctaAltLink}
              >
                <Mail size={16} />
                <span>dennys.marquez.dev@gmail.com</span>
              </a>
              <a
                href="https://github.com/dennys3mf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaAltLink}
              >
                <GithubIcon size={16} />
                <span>github.com/dennys3mf</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dennys-gabriel-marquez-flores"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaAltLink}
              >
                <ArrowUpRight size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FOOTER (Moddo Clean Studio Bottom with Floating Badges Strip)
         ==================================================================== */}
      <footer id="footer" className={styles.footerModdoWrapper}>
        <div className={styles.footerModdoContainer}>
          <div className={styles.footerModdoTop}>
            {/* Secondary Logo */}
            <div className={styles.footerBrandCol}>
              <div className={styles.footerLogoVertical}>
                <span className={styles.footerLogoDennys}>dennys</span>
                <span className={styles.footerLogoMarquez}>marquez</span>
              </div>
              <span className={styles.footerLogoSub}>{t.hero.title}</span>
              <p className={styles.footerBrandDesc}>
                {t.footer.tagline}
              </p>
            </div>

            {/* Nav Links */}
            <div className={styles.footerNavCol}>
              <span className={styles.footerNavColTitle}>{t.footer.navTitle}</span>
              <a href="#home" className={styles.footerNavLink}>{t.nav.home}</a>
              <a href="#servicios" className={styles.footerNavLink}>{t.nav.services}</a>
              <a href="#casos" className={styles.footerNavLink}>{t.nav.projects}</a>
              <a href="#about" className={styles.footerNavLink}>{t.nav.about}</a>
              <a href="#contacto" className={styles.footerNavLink}>{t.nav.contact}</a>
            </div>

            {/* Social Links */}
            <div className={styles.footerNavCol}>
              <span className={styles.footerNavColTitle}>{t.footer.connectTitle}</span>
              <a
                href="https://www.linkedin.com/in/dennys-gabriel-marquez-flores"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerNavLink}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/dennys3mf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerNavLink}
              >
                GitHub ↗
              </a>
              <a
                href="https://wa.me/51922466078"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerNavLink}
              >
                WhatsApp ↗
              </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div className={styles.footerBottomRow}>
            <span>Dennys Gabriel Marquez Flores © {new Date().getFullYear()}. {t.footer.rights}</span>
            <div className="flex items-center gap-4">
              <LanguageToggle variant="segmented" />
              <a href="#home" className={styles.footerNavLink} style={{ fontSize: "1rem", fontWeight: 700 }}>
                {language === "en" ? "Back to Top ↑" : "Volver Arriba ↑"}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
