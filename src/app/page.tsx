import styles from "./page.module.css";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import LiveClock from "../components/LiveClock";
import RotatingBadge from "../components/RotatingBadge";
import FloatingNav from "../components/FloatingNav";
import ContactBillboard from "../components/ContactBillboard";
import ProjectVideo from "../components/ProjectVideo";
import ThemeToggle from "../components/ThemeToggle";
import ThreeHeroSphere from "../components/ThreeHeroSphere";
import GsapScrollOrchestrator from "../components/GsapScrollOrchestrator";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { GithubIcon } from "../components/Icons";
import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  Coffee,
  HeartHandshake,
  Calculator,
  BarChart3,
  Scale,
  FileText,
  Database,
  Layers,
  Cpu,
  Coins,
  Search,
  Terminal,
  Rocket,
  Brain,
  Workflow,
  Code2,
} from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* GSAP & ScrollTrigger Animation Orchestrator */}
      <GsapScrollOrchestrator />

      {/* ====================================================================
          FLOATING BOTTOM PILL NAVBAR (Exact Moddo White Capsule with Yellow Active Pill)
         ==================================================================== */}
      <FloatingNav />

      {/* ====================================================================
          HERO SECTION - EXACT BRAND SPECIFICATION
         ==================================================================== */}
      <section id="home" className={styles.hero}>
        {/* Decorative Fluid Vector Curves & Interactive 3D Three.js Sphere */}
        <div className={styles.heroBackgroundDecor} aria-hidden="true">
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
              America / Lima
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
            <ThemeToggle />
            <a
              href="mailto:dennys.marquez.dev@gmail.com"
              className={styles.heroContactLink}
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
            <div className={styles.heroSubtrack}>Full Stack Developer | Python, React &amp; AI Integration</div>
            <div className={styles.heroSubmeta}>
              Software Design &amp; Development (TECSUP) &middot; Machine Learning &middot; Cloud Solutions
            </div>
            <p className={styles.heroImpactMotto}>
              Building digital products that make an impact.
            </p>
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
              <span className={styles.aboutSimpleEyebrow}>Sobre mí · About Me</span>
              <h2 className={styles.aboutModdoHeading} data-gsap="heading">
                Full Stack Developer &amp; AI Developer
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 px-3.5 py-1.5 rounded-full shadow-sm">
                <span>Professional Technical Degree in Software Design &amp; Development</span>
                <span>&middot;</span>
                <span className="font-bold text-white tracking-wide">TECSUP</span>
              </div>
            </div>
            <div>
              <p className={styles.aboutModdoParagraph}>
                I&apos;m a <strong>Full Stack Developer &amp; AI Developer from Peru</strong>, with a Professional Technical Degree in Software Design and Development from <strong>TECSUP</strong>.
              </p>
              <p className={styles.aboutModdoParagraph} style={{ marginTop: "0.85rem" }}>
                I build intelligent web applications, AI-powered solutions, and scalable digital products by combining modern software engineering with machine learning and cloud technologies.
              </p>
              <p className={styles.aboutModdoParagraph} style={{ marginTop: "0.85rem" }}>
                My technical experience includes <strong>React, TypeScript, JavaScript, Python, Django, Node.js, Firebase, Cloudflare Workers, and PySpark</strong>.
              </p>
            </div>
          </div>

          {/* Photo stage with clean workstation image */}
          <div className={styles.aboutStageWrap}>
            <div className={styles.aboutMainImgCard}>
              <img
                src="/images/personal/dennys-workstation.webp"
                alt="Dennys Gabriel Marquez Flores — Full Stack Developer | Python, React & AI Integration"
                loading="lazy"
              />
            </div>
          </div>

          {/* ====================================================================
              BLOQUE DESTACADO: FULL STACK · MACHINE LEARNING · AI INTEGRATION
             ==================================================================== */}
          <ScrollReveal delay={150}>
            <div className={styles.accountingCard}>
              <div className={styles.accountingHeader}>
                <div className="mb-4">
                  <Badge variant="cyan" className="gap-2 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider">
                    <Brain size={13} /> Full Stack Developer | Python, React &amp; AI Integration
                  </Badge>
                </div>
                <h3 className={styles.accountingTitle}>
                  Full Stack Engineering, Machine Learning &amp; AI Integration
                </h3>
                <p className={styles.accountingLead}>
                  I have worked on machine learning projects involving <strong>recommendation systems inspired by platforms such as Netflix and TikTok</strong>, exploring how data and algorithms can deliver personalized content experiences.
                </p>
                <p className={styles.accountingLead} style={{ marginTop: "0.85rem" }}>
                  I&apos;m also experienced in integrating <strong>AI-powered chatbots and language models into web applications</strong>, and I&apos;m expanding my expertise in <strong>AI agents, automation, and intelligent personal assistants</strong>.
                </p>
                <p className={styles.accountingLead} style={{ marginTop: "0.85rem" }}>
                  As the founder and developer of <a href="https://ahorratiempo.pe" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-semibold underline decoration-cyan-500 underline-offset-4 hover:text-cyan-200">ahorratiempo.pe</a>, I built a web platform that helps users access information about government procedures in Peru through modern interfaces and AI-powered assistance.
                </p>
                <p className={styles.accountingLead} style={{ marginTop: "0.85rem" }}>
                  My background also includes cross-platform mobile development with <strong>Flutter and Dart</strong>, REST API integrations, database management, and business process automation. I&apos;m passionate about building practical, high-performance software that connects artificial intelligence, modern web development, and real-world business needs.
                </p>
                <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-blue-950/70 via-indigo-950/60 to-purple-950/60 border border-blue-400/30 text-blue-100 text-sm font-medium flex items-center gap-3">
                  <Sparkles size={20} className="text-cyan-400 shrink-0" />
                  <span>
                    <strong>Currently focused on:</strong> Full Stack Engineering, Machine Learning, AI Integration, and intelligent automation.
                  </span>
                </div>
              </div>

              <div className={styles.accountingGrid} data-gsap="card-grid">
                <div className={styles.accountingItem}>
                  <div className={styles.accountingItemIcon}>
                    <Code2 size={22} />
                  </div>
                  <h4 className={styles.accountingItemTitle}>Full Stack Engineering</h4>
                  <p className={styles.accountingItemDesc}>
                    Scalable web applications built with <strong>React, TypeScript, JavaScript, Python, Django, and Node.js</strong>. Edge architectures on <strong>Cloudflare Workers</strong> and <strong>Firebase</strong>.
                  </p>
                </div>

                <div className={styles.accountingItem}>
                  <div className={styles.accountingItemIcon}>
                    <Brain size={22} />
                  </div>
                  <h4 className={styles.accountingItemTitle}>Machine Learning &amp; Recommenders</h4>
                  <p className={styles.accountingItemDesc}>
                    Recommendation systems inspired by <strong>Netflix and TikTok</strong>. Large-scale data processing with <strong>PySpark</strong> and personalized content delivery experiences.
                  </p>
                </div>

                <div className={styles.accountingItem}>
                  <div className={styles.accountingItemIcon}>
                    <Workflow size={22} />
                  </div>
                  <h4 className={styles.accountingItemTitle}>AI Integration &amp; Agents</h4>
                  <p className={styles.accountingItemDesc}>
                    AI-powered chatbots, LLM integrations, autonomous <strong>AI agents</strong>, intelligent personal assistants, and real-world workflow automation.
                  </p>
                </div>

                <div className={styles.accountingItem}>
                  <div className={styles.accountingItemIcon}>
                    <Layers size={22} />
                  </div>
                  <h4 className={styles.accountingItemTitle}>Founder &amp; Cross-Platform Mobile</h4>
                  <p className={styles.accountingItemDesc}>
                    Founder &amp; developer of <a href="https://ahorratiempo.pe" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-semibold underline">ahorratiempo.pe</a>. Cross-platform mobile development with <strong>Flutter and Dart</strong>, REST APIs, and database engineering.
                  </p>
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
              Soluciones de Software &amp; Desarrollo Full Stack
            </h2>
            <p className={styles.servicesModdoEyebrow}>Servicios</p>
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
                  <span className={styles.consoleKey}>degree:</span> <span className={styles.consoleString}>&quot;Software Design &amp; Dev (TECSUP)&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>role:</span> <span className={styles.consoleString}>&quot;Full Stack Developer | Python, React &amp; AI&quot;</span>,
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
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillPink}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Desarrollo Web Full Stack (Next.js &amp; TypeScript)</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillBlue}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>RAG Híbrido, Machine Learning &amp; LLMs</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillOrange}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Servicios Cloud &amp; Serverless (Cloudflare)</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillGreen}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Aplicaciones Móviles (Flutter &amp; Dart)</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillRed}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Pagos Digitales &amp; Comprobantes (Culqi)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CASES / WORK SECTION (Moddo 3-Column Visual Grid)
         ==================================================================== */}
      <section id="casos" className={styles.casesModdoSection}>
        <div className={styles.casesModdoContainer}>
          <div className={styles.casesModdoHeader}>
            <p className={styles.casesModdoEyebrow}>Proyectos &amp; Experiencia</p>
            <h2 className={styles.casesModdoTitle} data-gsap="heading">
              Software probado en producción y proyectos con impacto real.
            </h2>
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
                    <img
                      src="/images/projects/ahorratiempo-preview.webp"
                      alt="ahorratiempo.pe - Plataforma SaaS con IA por Voz"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaRow}>
                    <div className={styles.caseMetaText}>
                      <h3 className={styles.caseItemTitle}>ahorratiempo.pe</h3>
                      <p className={styles.caseItemSub}>Lead Software Engineer · SPA React 18, IA por Voz &amp; Cloudflare Workers</p>
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
                    <img
                      src="/images/projects/safety-helmet-preview.webp"
                      alt="Safety Helmet IoT - Telemetría y Sensores"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaRow}>
                    <div className={styles.caseMetaText}>
                      <h3 className={styles.caseItemTitle}>Safety Helmet IoT</h3>
                      <p className={styles.caseItemSub}>IoT Developer · Prototipo de Seguridad con Arduino &amp; Python</p>
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
                    <img
                      src="/images/projects/fiscalizacion-joya-preview.webp"
                      alt="App Fiscalización Digital Joya"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.caseMetaRow}>
                    <div className={styles.caseMetaText}>
                      <h3 className={styles.caseItemTitle}>App Fiscalización Digital Joya</h3>
                      <p className={styles.caseItemSub}>Inspección Municipal In Situ, Modo Offline &amp; Cero Papel</p>
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
              <span>Ver Más Proyectos en GitHub</span>
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
              <h2 className={styles.sectionTitle}>
                Cero magia negra: un proceso transparente y honesto
              </h2>
              <p className={styles.sectionSubtitle}>
                Me gusta que las cosas sean claras desde el primer día: qué vamos a construir, por qué
                y cuándo estará listo.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.processGrid}>
            {/* Paso 01 */}
            <ScrollReveal delay={100}>
              <div className={styles.processCard}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>01</span>
                  <span className={styles.processStepTag}>FASE 01 · ENTENDER</span>
                </div>
                <div className={styles.processIconBox}>
                  <Search size={32} />
                </div>
                <div>
                  <h3 className={styles.processTitle}>Escuchar y Modelar</h3>
                  <p className={styles.processDesc}>
                    Nos sentamos a conversar sobre el problema real y las restricciones de tu negocio.
                    No toco una línea de código hasta tener clara la arquitectura y la meta.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Paso 02 */}
            <ScrollReveal delay={200}>
              <div className={styles.processCard}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>02</span>
                  <span className={styles.processStepTag}>FASE 02 · CONSTRUIR</span>
                </div>
                <div className={styles.processIconBox}>
                  <Terminal size={32} />
                </div>
                <div>
                  <h3 className={styles.processTitle}>Construir &amp; Validar</h3>
                  <p className={styles.processDesc}>
                    Desarrollo con entregas continuas para que puedas probar el sistema desde la
                    primera semana. Código fuertemente tipado en TypeScript y Python, sin atajos
                    raros.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Paso 03 */}
            <ScrollReveal delay={300}>
              <div className={styles.processCard}>
                <div className={styles.processCardTop}>
                  <span className={styles.processStepNum}>03</span>
                  <span className={styles.processStepTag}>FASE 03 · DESPLEGAR</span>
                </div>
                <div className={styles.processIconBox}>
                  <Rocket size={32} />
                </div>
                <div>
                  <h3 className={styles.processTitle}>Poner en Marcha &amp; Medir</h3>
                  <p className={styles.processDesc}>
                    Despliegue en servidores cloud seguros con monitoreo en tiempo real. Te entrego
                    documentación y te acompaño para que tu equipo opere con total tranquilidad.
                  </p>
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
            <h2 className={styles.whyUsTitle}>¿Por qué trabajar conmigo?</h2>
            <p className={styles.whyUsEyebrow}>Sencillez, solidez y honestidad técnica</p>
          </div>

          <div className={styles.whyUsGridModern}>
            {/* Pillar 1: Versatilidad Full Stack */}
            <ScrollReveal delay={100}>
              <div className={`${styles.whyUsCardModern} ${styles.whyUsModernIndigo}`}>
                <div className={styles.whyUsModernTop}>
                  <div className={styles.whyUsModernIcon}>
                    <Layers size={28} />
                  </div>
                  <span className={styles.whyUsModernBadge}>TECSUP TITULADO</span>
                </div>
                <h3 className={styles.whyUsModernTitle}>Versatilidad Full Stack &amp; Cloud</h3>
                <p className={styles.whyUsModernDesc}>
                  Titulado en TECSUP. Construyo desde interfaces modernas en React y Flutter hasta backends serverless en Cloudflare Workers y APIs en Node.js y Python sin atajos ni fricción.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 2: Ingeniería Aplicada con IA */}
            <ScrollReveal delay={200}>
              <div className={`${styles.whyUsCardModern} ${styles.whyUsModernCrimson}`}>
                <div className={styles.whyUsModernTop}>
                  <div className={styles.whyUsModernIcon}>
                    <Cpu size={28} />
                  </div>
                  <span className={styles.whyUsModernBadge}>IA EN PRODUCCIÓN</span>
                </div>
                <h3 className={styles.whyUsModernTitle}>Ingeniería Aplicada con IA</h3>
                <p className={styles.whyUsModernDesc}>
                  Experiencia comprobada integrando modelos de lenguaje (LLM APIs), interfaces de voz interactivas (Web Speech API) y caché LRU para productos con usuarios reales.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 3: Criterio de Negocio y Finanzas */}
            <ScrollReveal delay={300}>
              <div className={`${styles.whyUsCardModern} ${styles.whyUsModernEmerald}`}>
                <div className={styles.whyUsModernTop}>
                  <div className={styles.whyUsModernIcon}>
                    <Coins size={28} />
                  </div>
                  <span className={styles.whyUsModernBadge}>FORMACIÓN CONTABLE</span>
                </div>
                <h3 className={styles.whyUsModernTitle}>Criterio de Negocio y Finanzas</h3>
                <p className={styles.whyUsModernDesc}>
                  Mi formación en Contabilidad me permite entender la rentabilidad de cada requerimiento, optimizar costos en la nube y asegurar trazabilidad para auditorías y SUNAT.
                </p>
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
                <RotatingBadge size={145} text="✦ DENNYS MARQUEZ • FULL STACK DEVELOPER • PYTHON & AI •" />
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
              <span>Conversar por WhatsApp</span>
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
            {/* Secondary Logo (Versión vertical / apilada) */}
            <div className={styles.footerBrandCol}>
              <div className={styles.footerLogoVertical}>
                <span className={styles.footerLogoDennys}>dennys</span>
                <span className={styles.footerLogoMarquez}>marquez</span>
              </div>
              <span className={styles.footerLogoSub}>Full Stack Developer | Python, React &amp; AI Integration</span>
              <p className={styles.footerBrandDesc}>
                Building digital products that make an impact.
              </p>
            </div>

            {/* Nav Links */}
            <div className={styles.footerNavCol}>
              <span className={styles.footerNavColTitle}>Navegación</span>
              <a href="#home" className={styles.footerNavLink}>Inicio</a>
              <a href="#servicios" className={styles.footerNavLink}>Servicios</a>
              <a href="#casos" className={styles.footerNavLink}>Proyectos</a>
              <a href="#about" className={styles.footerNavLink}>Sobre mí</a>
              <a href="#contacto" className={styles.footerNavLink}>Contacto</a>
            </div>

            {/* Social Links */}
            <div className={styles.footerNavCol}>
              <span className={styles.footerNavColTitle}>Conectar</span>
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
            <span>Dennys Gabriel Marquez Flores © {new Date().getFullYear()}. Todos los derechos reservados.</span>
            <a href="#home" className={styles.footerNavLink} style={{ fontSize: "0.92rem" }}>
              Volver Arriba ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
