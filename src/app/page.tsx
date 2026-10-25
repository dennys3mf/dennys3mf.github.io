"use client";

import styles from "./page.module.css";
import Image from "next/image";
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
          ABOUT SECTION (Moddo Blue Canvas + Photo + Accounting)
         ==================================================================== */}
      <section id="about" className={styles.aboutModdoSection}>
        <div className={styles.aboutModdoContainer}>
          <div className={styles.aboutModdoHeader}>
            <div className={styles.aboutModdoLeft}>
              <span className={styles.aboutSimpleEyebrow}>{t.about.eyebrow}</span>
              <h2 className={styles.aboutModdoHeading} data-gsap="heading">
                {t.about.heading}
              </h2>
            </div>
            <div>
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

          {/* Photo stage with clean workstation image */}
          <div className={styles.aboutStageWrap}>
            <div className={styles.aboutMainImgCard}>
              <Image
                src="/images/personal/dennys-workstation.webp"
                alt="Dennys Gabriel Marquez Flores — Full Stack Developer | Python, React & AI Integration"
                width={1024}
                height={682}
                loading="lazy"
              />
            </div>
          </div>

          {/* ====================================================================
              FEATURED EDITORIAL CARD: FULL STACK · MACHINE LEARNING · AI INTEGRATION
             ==================================================================== */}
          <ScrollReveal delay={150}>
            <div className={styles.accountingCard}>
              <div className={styles.accountingHeader}>
                <h3 className={styles.accountingTitle}>
                  {t.about.featuredHeading}
                </h3>
                <p className={styles.accountingLead}>
                  {t.about.pRecommenders}
                </p>
                <p className={styles.accountingLead} style={{ marginTop: "1rem" }}>
                  {t.about.pAiAgents}
                </p>
                <p className={styles.accountingLead} style={{ marginTop: "1rem" }}>
                  {t.about.pAhorratiempo}
                </p>
                <p className={styles.accountingLead} style={{ marginTop: "1rem" }}>
                  {t.about.pMobile}
                </p>
              </div>

              {/* 4 Core Pillars Grid */}
              <div className={styles.accountingGrid} data-gsap="card-grid">
                {t.about.pillars.map((pillar, idx) => (
                  <div key={idx} className={styles.accountingItem} data-gsap="feature-card">
                    <div className={styles.accountingItemIcon}>
                      {idx === 0 && <Code2 size={24} />}
                      {idx === 1 && <Brain size={24} />}
                      {idx === 2 && <Workflow size={24} />}
                      {idx === 3 && <Layers size={24} />}
                    </div>
                    <h4 className={styles.accountingItemTitle}>{pillar.title}</h4>
                    <p className={styles.accountingItemDesc}>{pillar.desc}</p>
                  </div>
                ))}
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
          CASES / WORK SECTION (Moddo Visual Grid with Video-like Scrub)
         ==================================================================== */}
      <section id="casos" className={styles.casesModdoSection}>
        <div className={styles.casesModdoContainer}>
          <div className={styles.casesModdoHeader}>
            <p className={styles.casesModdoEyebrow}>{t.projects.eyebrow}</p>
            <h2 className={styles.casesModdoTitle} data-gsap="heading">
              {t.projects.heading}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mt-2 font-medium">
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
                    <Image
                      src="/images/projects/ahorratiempo-preview.webp"
                      alt="ahorratiempo.pe - Plataforma SaaS con IA por Voz"
                      width={1200}
                      height={825}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaRow}>
                    <div className={styles.caseMetaText}>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                        {t.projects.items[0].tag}
                      </span>
                      <h3 className={styles.caseItemTitle}>{t.projects.items[0].title}</h3>
                      <p className={styles.caseItemSub}>{t.projects.items[0].desc}</p>
                    </div>
                    <div className={styles.caseArrowBtn}>
                      <ArrowUpRight size={22} />
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
                    <Image
                      src="/images/projects/safety-helmet-preview.webp"
                      alt="Safety Helmet IoT - Telemetría y Sensores"
                      width={1200}
                      height={825}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaRow}>
                    <div className={styles.caseMetaText}>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                        {t.projects.items[3].tag}
                      </span>
                      <h3 className={styles.caseItemTitle}>{t.projects.items[3].title}</h3>
                      <p className={styles.caseItemSub}>{t.projects.items[3].desc}</p>
                    </div>
                    <div className={styles.caseArrowBtn}>
                      <ArrowUpRight size={22} />
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
                    <Image
                      src="/images/projects/fiscalizacion-joya-preview.webp"
                      alt="App Fiscalización Digital Joya"
                      width={1200}
                      height={825}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaRow}>
                    <div className={styles.caseMetaText}>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                        {t.projects.items[5].tag}
                      </span>
                      <h3 className={styles.caseItemTitle}>{t.projects.items[5].title}</h3>
                      <p className={styles.caseItemSub}>{t.projects.items[5].desc}</p>
                    </div>
                    <div className={`${styles.caseArrowBtn} ${styles.caseArrowYellow}`}>
                      <ArrowUpRight size={22} />
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
              <ArrowUpRight size={20} />
              <span>{language === "en" ? "View More Projects on GitHub" : "Ver Más Proyectos en GitHub"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROCESS SECTION (Engineering Phases)
         ==================================================================== */}
      <section id="proceso" className={styles.processModdoSection}>
        <div className={styles.sectionContainer} style={{ padding: "0 1rem", position: "relative", zIndex: 2 }}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full inline-block mb-3.5 shadow-xs">
                {language === "en" ? "Engineering Methodology" : "Metodología de Desarrollo"}
              </span>
              <h2 className={styles.sectionTitle}>
                {language === "en" ? "From Architecture to Production with Measurable Impact" : "De la Arquitectura a Producción con Impacto Medible"}
              </h2>
              <p className={styles.sectionSubtitle}>
                {language === "en"
                  ? "A rigorous 3-stage delivery pipeline ensuring rock-solid stability, zero shortcuts, and fast time-to-market."
                  : "Un proceso de 3 fases estructurado para construir software de alto rendimiento, código tipado y despliegues estables sin magia negra."}
              </p>
            </div>
          </ScrollReveal>

          {/* Visual Step Connector Pipeline */}
          <div className={styles.processPipelineFlow}>
            <span className={styles.processPipelineStep}>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>01. {language === "en" ? "Discovery & Architecture" : "Escuchar & Modelar"}</span>
            </span>
            <span className={styles.processPipelineArrow}>→</span>
            <span className={styles.processPipelineStep}>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span>02. {language === "en" ? "Clean Code & Testing" : "Construir & Validar"}</span>
            </span>
            <span className={styles.processPipelineArrow}>→</span>
            <span className={styles.processPipelineStep}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>03. {language === "en" ? "Deploy & Observability" : "Desplegar & Medir"}</span>
            </span>
          </div>

          <div className={styles.processGrid}>
            {/* Paso 01: Blue Card */}
            <ScrollReveal delay={100}>
              <div className={`${styles.processCardEnhanced} ${styles.processCardBlue}`}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>01</span>
                  <span className={styles.processStepTag}>
                    {language === "en" ? "PHASE 01 · ARCHITECTURE" : "FASE 01 · ENTENDER"}
                  </span>
                </div>
                <div className={styles.processIconBoxBlue}>
                  <Search size={30} />
                </div>
                <div>
                  <h3 className={styles.processTitle}>
                    {language === "en" ? "Listen & Model" : "Escuchar y Modelar"}
                  </h3>
                  <p className={styles.processDesc}>
                    {language === "en"
                      ? "Deep dive into real business needs, data structures, and user constraints before writing code."
                      : "Nos sentamos a conversar sobre el problema real y las restricciones de tu negocio. No toco una línea de código hasta tener clara la arquitectura y la meta."}
                  </p>
                </div>

                {/* Visual Architecture Schema Widget */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col gap-2.5 font-mono text-xs text-slate-800 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200/80 pb-2">
                    <span>Architecture Blueprint</span>
                    <span className="text-blue-600 font-extrabold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Schema v2.4
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 text-xs">
                    <span className="font-bold text-slate-900">React 18</span>
                    <span className="text-blue-500">→</span>
                    <span className="font-bold text-blue-600">Cloudflare Edge</span>
                    <span className="text-blue-500">→</span>
                    <span className="font-bold text-slate-900">Python API</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 font-bold">PostgreSQL</span>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 font-bold">pgvector</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">Auditable</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Paso 02: Purple Card */}
            <ScrollReveal delay={200}>
              <div className={`${styles.processCardEnhanced} ${styles.processCardPurple}`}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>02</span>
                  <span className={styles.processStepTag}>
                    {language === "en" ? "PHASE 02 · BUILD & TEST" : "FASE 02 · CONSTRUIR"}
                  </span>
                </div>
                <div className={styles.processIconBoxPurple}>
                  <Terminal size={30} />
                </div>
                <div>
                  <h3 className={styles.processTitle}>
                    {language === "en" ? "Build & Validate" : "Construir & Validar"}
                  </h3>
                  <p className={styles.processDesc}>
                    {language === "en"
                      ? "Iterative development with clean, typed code in TypeScript and Python, delivering testable software from week one."
                      : "Desarrollo con entregas continuas para que puedas probar el sistema desde la primera semana. Código fuertemente tipado en TypeScript y Python, sin atajos raros."}
                  </p>
                </div>

                {/* Visual Code IDE Widget */}
                <div className="mt-4 p-4 rounded-2xl bg-[#0F1117] text-white font-mono text-xs shadow-inner flex flex-col gap-2.5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-[11px] text-slate-400 ml-1.5">recommender.ts</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">✓ TypeChecked</span>
                  </div>
                  <div className="text-[11px] leading-relaxed text-slate-300">
                    <span className="text-purple-400">export async function</span> <span className="text-blue-400">rankFeed</span>() &#123;<br />
                    &nbsp;&nbsp;<span className="text-slate-400">const</span> scored = <span className="text-purple-400">await</span> ai.rank(user);<br />
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> scored.filter(p =&gt; p.score &gt; 0.95);<br />
                    &#125;
                  </div>
                  <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px] text-slate-400">
                    <span className="text-emerald-400 font-bold flex items-center gap-1">✓ 100% Tests Pass</span>
                    <span className="text-slate-300 font-semibold">CI/CD Active</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Paso 03: Emerald Card */}
            <ScrollReveal delay={300}>
              <div className={`${styles.processCardEnhanced} ${styles.processCardEmerald}`}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>03</span>
                  <span className={styles.processStepTag}>
                    {language === "en" ? "PHASE 03 · DEPLOY & SCALE" : "FASE 03 · DESPLEGAR"}
                  </span>
                </div>
                <div className={styles.processIconBoxEmerald}>
                  <Rocket size={30} />
                </div>
                <div>
                  <h3 className={styles.processTitle}>
                    {language === "en" ? "Deploy & Measure" : "Poner en Marcha & Medir"}
                  </h3>
                  <p className={styles.processDesc}>
                    {language === "en"
                      ? "Production cloud deployments with real-time observability, documentation, and continuous handover."
                      : "Despliegue en servidores cloud seguros con monitoreo en tiempo real. Te entrego documentación y te acompaño para que tu equipo opere con total tranquilidad."}
                  </p>
                </div>

                {/* Visual Observability Console Widget */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col gap-2.5 font-mono text-xs text-slate-800 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-bold pb-2 border-b border-slate-200/80">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-extrabold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                      Live Production
                    </span>
                    <span className="text-slate-500">Cloudflare Edge</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center pt-0.5">
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Latency</div>
                      <div className="text-base font-extrabold text-slate-900">14 ms</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Uptime</div>
                      <div className="text-base font-extrabold text-emerald-600">99.99%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-600 font-medium">
                    <span>Zero-Downtime Deploy</span>
                    <span className="text-emerald-700 font-bold">Auto-Scaling</span>
                  </div>
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
