import styles from "./page.module.css";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import GlobalCursor from "../components/GlobalCursor";
import ThemeToggle from "../components/ThemeToggle";
import LiveClock from "../components/LiveClock";
import RotatingBadge from "../components/RotatingBadge";
import { GithubIcon } from "../components/Icons";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  ShieldCheck,
  Zap,
  Bot,
  Globe,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalCursor />

      {/* ====================================================================
          FLOATING BOTTOM PILL NAVBAR (Moddo Signature Dock)
         ==================================================================== */}
      <header className={styles.navbarWrapper}>
        <nav className={styles.navbar}>
          <a href="#home" className={styles.brand} aria-label="Dennys Marquez Inicio">
            <span className={styles.brandDot} />
            <span>DENNYS</span>
            <img
              src="https://flagcdn.com/pe.svg"
              alt="Perú"
              width="18"
              height="12"
              className={styles.peruFlag}
              title="Basado en Lima, Perú"
            />
          </a>

          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>
              Sobre mí
            </a>
            <a href="#servicios" className={styles.navLink}>
              Servicios
            </a>
            <a href="#casos" className={styles.navLink}>
              Casos
            </a>
            <a href="#proceso" className={styles.navLink}>
              Proceso
            </a>
          </div>

          <div className={styles.navActions}>
            <ThemeToggle />
            <a href="#contacto" className={styles.contactNavBtn}>
              <span>Hablemos</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      </header>

      {/* ====================================================================
          HERO SECTION (Giant Typography, Tactile Stickers & Rotating Badge)
         ==================================================================== */}
      <section id="home" className={styles.hero}>
        {/* Top Meta Bar */}
        <div className={styles.heroMeta}>
          <div className={styles.heroMetaGroup}>
            <div className={styles.heroMetaPill}>
              <span className={styles.liveDot} />
              <span>
                Lima, PE: <LiveClock /> (UTC-5)
              </span>
            </div>
            <div className={styles.heroMetaPill}>
              <span>🟢 Disponible para Proyectos &amp; Tech</span>
            </div>
          </div>

          <a
            href="mailto:dennys.marquez.dev@gmail.com"
            className={styles.heroEmailLink}
          >
            <Mail size={15} />
            <span>dennys.marquez.dev@gmail.com</span>
          </a>
        </div>

        {/* Center Giant Statement & Stickers */}
        <div className={styles.heroCenter}>
          <ScrollReveal delay={100}>
            <div className={styles.heroEyebrowTag}>
              <Sparkles size={14} />
              <span>Software &amp; AI Engineering Studio</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className={styles.heroTitle}>
              dennys<span className={styles.heroTitleAccent}>.</span>marquez
            </h1>
          </ScrollReveal>

          {/* Moddo-style Tactile Interactive Stickers */}
          <ScrollReveal delay={300}>
            <div className={styles.heroStickers}>
              <div className={`${styles.sticker} ${styles.stickerPink}`}>
                <span>Full-Stack Architecture ⚡</span>
              </div>
              <div className={`${styles.sticker} ${styles.stickerBlue}`}>
                <span>IA &amp; Modelos Predictivos 🤖</span>
              </div>
              <div className={`${styles.sticker} ${styles.stickerOrange}`}>
                <span>Fintech &amp; Auditoría 📊</span>
              </div>
              <div className={`${styles.sticker} ${styles.stickerGreen}`}>
                <span>Telemetría IoT Industrial 📡</span>
              </div>
              <div className={`${styles.sticker} ${styles.stickerLilac}`}>
                <span>Hecho en Perú 🇵🇪</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Bottom Narrative & Rotating Badge */}
        <div className={styles.heroBottom}>
          <div className={styles.heroBadgeWrap}>
            <RotatingBadge size={135} />
          </div>

          <div className={styles.heroNarrative}>
            <p className={styles.heroTagline}>
              Fusiono <strong>ingeniería de software de alto rendimiento</strong> con{" "}
              <strong>criterio contable y financiero</strong>. Construyo plataformas escalables,
              automatizaciones con IA y arquitecturas que generan impacto medible.
            </p>
            <div className={styles.heroDoodle}>
              <span>✦ 100% código limpio, tipado y optimizado para el mundo real</span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a href="#casos" className={styles.btnPrimary}>
              <span>Ver Proyectos</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="#contacto" className={styles.btnSecondary}>
              <MessageCircle size={17} />
              <span>Iniciar Conversación</span>
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          INFINITE MARQUEE TICKER (Moddo Brand Strip)
         ==================================================================== */}
      <div className={styles.marqueeContainer} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeItem}>
            <span>INGENIERÍA ROBUSTA</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>INTELIGENCIA ARTIFICIAL</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>CRITERIO FINANCIERO &amp; ROI</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>ZERO FRICTION</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>NEXT.JS 16 &amp; REACT 19</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>PERÚ 🇵🇪 PARA EL MUNDO</span>
            <span className={styles.marqueeStar}>✦</span>
          </div>
          <div className={styles.marqueeItem}>
            <span>INGENIERÍA ROBUSTA</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>INTELIGENCIA ARTIFICIAL</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>CRITERIO FINANCIERO &amp; ROI</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>ZERO FRICTION</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>NEXT.JS 16 &amp; REACT 19</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>PERÚ 🇵🇪 PARA EL MUNDO</span>
            <span className={styles.marqueeStar}>✦</span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          ABOUT SECTION (Asymmetric Moddo Grid)
         ==================================================================== */}
      <section id="about" className={styles.sectionContainer}>
        <div className={styles.aboutGrid}>
          <ScrollReveal>
            <div className={styles.aboutContent}>
              <span className={styles.sectionTag}>[ 01 // SOBRE MÍ ]</span>
              <h2 className={styles.aboutHeadline}>
                Diseñamos y desarrollamos soluciones que transforman negocios.
              </h2>
              <p className={styles.aboutLead}>
                Soy <strong>Dennys Gabriel Marquez Flores</strong>, desarrollador de software y
                estudiante de Contabilidad en Lima, Perú. Mi propuesta de valor radica en una
                combinación poco común: <strong>precisión matemática y rigor contable</strong>{" "}
                unidos a la <strong>ingeniería de software moderna</strong>.
              </p>
              <p className={styles.aboutLead}>
                No concibo el código en aislamiento: cada arquitectura, base de datos y modelo de
                inteligencia artificial está pensado para reducir costos operacionales, acelerar la
                velocidad del negocio y maximizar el retorno de inversión.
              </p>

              <div className={styles.aboutBadgesList}>
                <div className={styles.aboutBadgeItem}>
                  <CheckCircle2 size={16} color="var(--accent-blue)" />
                  <span>Arquitectura Full-Stack de Alto Nivel</span>
                </div>
                <div className={styles.aboutBadgeItem}>
                  <CheckCircle2 size={16} color="var(--accent-pink)" />
                  <span>Automatización con IA &amp; NLP</span>
                </div>
                <div className={styles.aboutBadgeItem}>
                  <CheckCircle2 size={16} color="var(--accent-orange)" />
                  <span>Auditoría &amp; Inteligencia Contable</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.aboutCardVisual}>
              <div className={styles.aboutImageWrap}>
                <img
                  src="/images/moddo/6ab49b9cb496908db1a9b6f6_6ab1e79bcbe672135c7aecc0_Modern-Minimalist-Creative-Workspace-with-Retro-Pop-Accents.webp"
                  alt="Modern creative workspace"
                  loading="lazy"
                />
              </div>
              <div className={styles.aboutOverlayNote}>
                <span>THINK BOLD ✦ BUILD BETTER</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          SERVICES SECTION (Moddo Interactive Rows)
         ==================================================================== */}
      <section id="servicios" className={styles.sectionContainer}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>[ 02 // CAPACIDADES ]</span>
            <h2 className={styles.sectionTitle}>Diseñado e implementado a tu medida</h2>
            <p className={styles.sectionSubtitle}>
              Soluciones técnicas de punta a punta creadas con foco en velocidad, estabilidad y
              resultados tangibles.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.servicesStack}>
          {/* Servicio 01 */}
          <ScrollReveal delay={100}>
            <div className={styles.serviceRow}>
              <div className={styles.serviceNumber}>01</div>
              <div className={styles.serviceTitleGroup}>
                <span className={styles.serviceCategory}>WEB &amp; CLOUD ARCHITECTURE</span>
                <h3 className={styles.serviceName}>Plataformas Web</h3>
              </div>
              <div>
                <p className={styles.serviceDesc}>
                  Desarrollo de aplicaciones web modernas preparadas para alto tráfico. Interfaces
                  ultra-rápidas, modulares, accesibles y optimizadas para conversión.
                </p>
                <div className={styles.serviceTechList}>
                  <span className={styles.serviceTechPill}>Next.js 16</span>
                  <span className={styles.serviceTechPill}>React 19</span>
                  <span className={styles.serviceTechPill}>TypeScript</span>
                  <span className={styles.serviceTechPill}>Node.js</span>
                </div>
              </div>
              <div className={styles.serviceArrowBtn}>
                <ArrowUpRight size={22} />
              </div>
            </div>
          </ScrollReveal>

          {/* Servicio 02 */}
          <ScrollReveal delay={200}>
            <div className={styles.serviceRow}>
              <div className={styles.serviceNumber}>02</div>
              <div className={styles.serviceTitleGroup}>
                <span className={styles.serviceCategory} style={{ color: "var(--accent-pink)" }}>
                  MACHINE LEARNING &amp; NLP
                </span>
                <h3 className={styles.serviceName}>IA &amp; Automatización</h3>
              </div>
              <div>
                <p className={styles.serviceDesc}>
                  Implementación de agentes autónomos, modelos de lenguaje (LLMs) y flujos de
                  procesamiento automático para eliminar cuellos de botella operativos.
                </p>
                <div className={styles.serviceTechList}>
                  <span className={styles.serviceTechPill}>Python</span>
                  <span className={styles.serviceTechPill}>FastAPI</span>
                  <span className={styles.serviceTechPill}>OpenAI / Claude API</span>
                  <span className={styles.serviceTechPill}>RAG Pipelines</span>
                </div>
              </div>
              <div className={styles.serviceArrowBtn}>
                <ArrowUpRight size={22} />
              </div>
            </div>
          </ScrollReveal>

          {/* Servicio 03 */}
          <ScrollReveal delay={300}>
            <div className={styles.serviceRow}>
              <div className={styles.serviceNumber}>03</div>
              <div className={styles.serviceTitleGroup}>
                <span className={styles.serviceCategory} style={{ color: "var(--accent-orange)" }}>
                  FINANCIAL INTELLIGENCE
                </span>
                <h3 className={styles.serviceName}>Análisis Financiero</h3>
              </div>
              <div>
                <p className={styles.serviceDesc}>
                  Modelado y consolidación de datos contables en tiempo real. Dashboards ejecutivos,
                  auditoría digital de comprobantes y proyecciones presupuestarias cuantitativas.
                </p>
                <div className={styles.serviceTechList}>
                  <span className={styles.serviceTechPill}>Data Modeling</span>
                  <span className={styles.serviceTechPill}>Auditoría Digital</span>
                  <span className={styles.serviceTechPill}>Dashboards BI</span>
                  <span className={styles.serviceTechPill}>Cost Optimization</span>
                </div>
              </div>
              <div className={styles.serviceArrowBtn}>
                <ArrowUpRight size={22} />
              </div>
            </div>
          </ScrollReveal>

          {/* Servicio 04 */}
          <ScrollReveal delay={400}>
            <div className={styles.serviceRow}>
              <div className={styles.serviceNumber}>04</div>
              <div className={styles.serviceTitleGroup}>
                <span className={styles.serviceCategory} style={{ color: "var(--accent-green)" }}>
                  HARDWARE &amp; SENSORS
                </span>
                <h3 className={styles.serviceName}>Arquitectura IoT</h3>
              </div>
              <div>
                <p className={styles.serviceDesc}>
                  Sistemas embebidos con sensores para monitoreo de telemetría, seguridad de
                  operarios y captura de variables en tiempo real en entornos industriales.
                </p>
                <div className={styles.serviceTechList}>
                  <span className={styles.serviceTechPill}>ESP32</span>
                  <span className={styles.serviceTechPill}>MQTT</span>
                  <span className={styles.serviceTechPill}>C++ Embebido</span>
                  <span className={styles.serviceTechPill}>Telemetría Industrial</span>
                </div>
              </div>
              <div className={styles.serviceArrowBtn}>
                <ArrowUpRight size={22} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          CASES / WORK SECTION (Moddo Showcase Cards)
         ==================================================================== */}
      <section id="casos" className={styles.sectionContainer}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>[ 03 // CASOS DE ÉXITO ]</span>
            <h2 className={styles.sectionTitle}>
              Nuestra pasión es crear proyectos con impacto real.
            </h2>
            <p className={styles.sectionSubtitle}>
              Soluciones construidas con propósito: desde startups masivas hasta herramientas de
              auditoría estatal y hardware de seguridad minera.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.casesGrid}>
          {/* Case 01: AhorraTiempo.pe */}
          <ScrollReveal delay={100}>
            <article className={styles.workCard}>
              <div className={styles.workInfo}>
                <div className={styles.workBadgeRow}>
                  <span className={styles.workBadge}>STARTUP PROPIA</span>
                  <span className={`${styles.workBadge} ${styles.workBadgePink}`}>
                    IA CONVERSACIONAL
                  </span>
                </div>

                <h3 className={styles.workTitle}>AhorraTiempo.pe</h3>
                <p className={styles.workSubtitle}>
                  Plataforma ciudadana masiva de simplificación de trámites
                </p>

                <p className={styles.workDesc}>
                  Plataforma diseñada para democratizar y simplificar trámites y gestiones en el
                  Perú. Integra un asistente virtual con IA capaz de guiar al ciudadano paso a paso,
                  reduciendo tiempos de espera y eliminando la burocracia.
                </p>

                <div className={styles.workHighlights}>
                  <div className={styles.highlightItem}>
                    <ShieldCheck size={16} className={styles.highlightIcon} />
                    <span>Asistente Inteligente con IA 24/7</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <Zap size={16} className={styles.highlightIcon} />
                    <span>Reducción dramática de fricción ciudadana</span>
                  </div>
                </div>

                <div className={styles.workActions}>
                  <Link
                    href="https://ahorratiempo.pe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnPrimary}
                  >
                    <span>Visitar Plataforma</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Video Mockup Frame */}
              <div className={styles.browserFrame}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <span className={`${styles.dot} ${styles.dot1}`} />
                    <span className={`${styles.dot} ${styles.dot2}`} />
                    <span className={`${styles.dot} ${styles.dot3}`} />
                  </div>
                  <span className={styles.browserUrl}>https://ahorratiempo.pe</span>
                </div>
                <div className={styles.mediaContainer}>
                  <video autoPlay loop muted playsInline preload="metadata">
                    <source src="/videos/ahorratiempo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 02: App Fiscalización */}
          <ScrollReveal delay={200}>
            <article className={styles.workCard}>
              <div className={styles.workInfo}>
                <div className={styles.workBadgeRow}>
                  <span className={styles.workBadge}>SECTOR PÚBLICO</span>
                  <span className={`${styles.workBadge} ${styles.workBadgeOrange}`}>
                    AUDITORÍA CERO PAPEL
                  </span>
                </div>

                <h3 className={styles.workTitle}>App Fiscalización Digital</h3>
                <p className={styles.workSubtitle}>
                  Auditoría en campo y validación de identidad en tiempo real
                </p>

                <p className={styles.workDesc}>
                  Sistema integral que digitaliza las auditorías e inspecciones municipales en
                  campo. Valida identidad y procedencia de datos en el acto, erradica el uso de papel
                  y eleva la transparencia en la gestión de recursos públicos.
                </p>

                <div className={styles.workHighlights}>
                  <div className={styles.highlightItem}>
                    <ShieldCheck size={16} className={styles.highlightIcon} />
                    <span>Trazabilidad 100% digital e inalterable</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <Zap size={16} className={styles.highlightIcon} />
                    <span>Verificación instantánea in situ</span>
                  </div>
                </div>

                <div className={styles.workActions}>
                  <Link
                    href="https://github.com/dennys3mf/App-Fiscalizacion-Joya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnSecondary}
                  >
                    <GithubIcon size={16} />
                    <span>Ver Repositorio</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Video Mockup Frame */}
              <div className={styles.browserFrame}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <span className={`${styles.dot} ${styles.dot1}`} />
                    <span className={`${styles.dot} ${styles.dot2}`} />
                    <span className={`${styles.dot} ${styles.dot3}`} />
                  </div>
                  <span className={styles.browserUrl}>
                    github.com/dennys3mf/App-Fiscalizacion-Joya
                  </span>
                </div>
                <div className={styles.mediaContainer}>
                  <video autoPlay loop muted playsInline preload="metadata">
                    <source src="/videos/app-fiscalizacion.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 03: Casco IoT */}
          <ScrollReveal delay={300}>
            <article className={styles.workCard}>
              <div className={styles.workInfo}>
                <div className={styles.workBadgeRow}>
                  <span className={styles.workBadge}>HARDWARE IOT</span>
                  <span className={`${styles.workBadge} ${styles.workBadgePink}`}>
                    SEGURIDAD MINERA
                  </span>
                </div>

                <h3 className={styles.workTitle}>Casco Inteligente IoT</h3>
                <p className={styles.workSubtitle}>
                  Telemetría y prevención de accidentes en operaciones críticas
                </p>

                <p className={styles.workDesc}>
                  Prototipo industrial embebido con sensores de gases tóxicos, acelerómetros para
                  detección de caídas e impactos en tiempo real. Creado para prevenir siniestros y
                  emitir alertas de socorro inmediatas en minería.
                </p>

                <div className={styles.workHighlights}>
                  <div className={styles.highlightItem}>
                    <ShieldCheck size={16} className={styles.highlightIcon} />
                    <span>Detección de impactos y caídas bruscas</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <Zap size={16} className={styles.highlightIcon} />
                    <span>Telemetría en tiempo real sobre MQTT</span>
                  </div>
                </div>

                <div className={styles.workActions}>
                  <Link
                    href="https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnSecondary}
                  >
                    <GithubIcon size={16} />
                    <span>Ver Repositorio</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Video Mockup Frame */}
              <div className={styles.browserFrame}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <span className={`${styles.dot} ${styles.dot1}`} />
                    <span className={`${styles.dot} ${styles.dot2}`} />
                    <span className={`${styles.dot} ${styles.dot3}`} />
                  </div>
                  <span className={styles.browserUrl}>
                    github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT
                  </span>
                </div>
                <div className={styles.mediaContainer}>
                  <video autoPlay loop muted playsInline preload="metadata">
                    <source src="/videos/casco-inteligente.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          PROCESS SECTION (Moddo 3-Step Culture with 3D Illustrations)
         ==================================================================== */}
      <section id="proceso" className={styles.sectionContainer}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>[ 04 // METODOLOGÍA ]</span>
            <h2 className={styles.sectionTitle}>
              Cultura de Ingeniería &amp; Proceso Estructurado
            </h2>
            <p className={styles.sectionSubtitle}>
              Una ruta predecible y rigurosa desde la primera idea hasta la puesta en producción.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.processGrid}>
          {/* Paso 01 */}
          <ScrollReveal delay={100}>
            <div className={styles.processCard}>
              <div className={styles.processCardTop}>
                <span className={styles.processStepNum}>01</span>
                <span className={styles.processStepTag}>ANÁLISIS</span>
              </div>
              <div className={styles.processImageWrap}>
                <img
                  src="/images/moddo/6ab21fb86bf7e13ace189013_blueprint.webp"
                  alt="Blueprint phase"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className={styles.processTitle}>Blueprint &amp; Modelado</h3>
                <p className={styles.processDesc}>
                  Descubrimiento profundo de las reglas de negocio, requerimientos contables y
                  diseño de arquitectura antes de redactar una sola línea de código.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Paso 02 */}
          <ScrollReveal delay={200}>
            <div className={styles.processCard}>
              <div className={styles.processCardTop}>
                <span className={styles.processStepNum}>02</span>
                <span className={styles.processStepTag}>CONSTRUCCIÓN</span>
              </div>
              <div className={styles.processImageWrap}>
                <img
                  src="/images/moddo/6ab21fb70137b2b01251c68d_design.webp"
                  alt="Design & code phase"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className={styles.processTitle}>Desarrollo &amp; Código</h3>
                <p className={styles.processDesc}>
                  Ingeniería limpia y fuertemente tipada. Next.js, React 19 y Python con pruebas
                  continuas, componentes accesibles y estándares de seguridad.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Paso 03 */}
          <ScrollReveal delay={300}>
            <div className={styles.processCard}>
              <div className={styles.processCardTop}>
                <span className={styles.processStepNum}>03</span>
                <span className={styles.processStepTag}>ESCALABILIDAD</span>
              </div>
              <div className={styles.processImageWrap}>
                <img
                  src="/images/moddo/6ab21fb76bf7e13ace188ff7_enhance.webp"
                  alt="Enhance & optimize phase"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className={styles.processTitle}>IA &amp; Optimización</h3>
                <p className={styles.processDesc}>
                  Aceleración mediante inteligencia artificial, reducción de latencia, despliegue
                  en la nube con alta disponibilidad y monitoreo en vivo.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          STATS SECTION (Big Numbers & Real Impact)
         ==================================================================== */}
      <section className={styles.sectionContainer}>
        <ScrollReveal>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Código Tipado</span>
              <span className={styles.statDesc}>
                Arquitecturas estrictamente tipadas con TypeScript y Python moderno.
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>3x</span>
              <span className={styles.statLabel}>Aceleración con IA</span>
              <span className={styles.statDesc}>
                Reducción de tiempos manuales mediante automatizaciones inteligentes.
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Disponibilidad</span>
              <span className={styles.statDesc}>
                Infraestructuras serverless y cloud de baja latencia.
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>Fin+Tech</span>
              <span className={styles.statLabel}>Sinergia Única</span>
              <span className={styles.statDesc}>
                Comprensión integral de costos, balances y valor financiero real.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ====================================================================
          CTA SECTION (High-Impact Moddo Card)
         ==================================================================== */}
      <section id="contacto" className={styles.sectionContainer}>
        <ScrollReveal>
          <div className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>Hagamos que suceda</span>
            <h2 className={styles.ctaTitle}>¿Tienes un proyecto o desafío en mente?</h2>
            <p className={styles.ctaDesc}>
              Transformemos tus cuellos de botella operativos en software rápido, elegante y con
              retorno de inversión medible. Conversemos hoy mismo.
            </p>

            <div className={styles.ctaButtonGroup}>
              <a
                href="https://wa.me/51922466078"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimaryBtn}
              >
                <MessageCircle size={18} />
                <span>Escríbeme por WhatsApp (+51 922 466 078)</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="mailto:dennys.marquez.dev@gmail.com"
                className={styles.ctaSecondaryBtn}
              >
                <Mail size={18} />
                <span>Enviar un Correo Directo</span>
              </a>

              <a
                href="https://github.com/dennys3mf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondaryBtn}
              >
                <GithubIcon size={18} />
                <span>Explorar mi GitHub</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ====================================================================
          FOOTER (Moddo Clean Studio Bottom)
         ==================================================================== */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <div className={styles.footerBrand}>
              <span className={styles.brandDot} />
              <span>DENNYS GABRIEL MARQUEZ FLORES</span>
              <img
                src="https://flagcdn.com/pe.svg"
                alt="Perú"
                width="18"
                height="12"
                className={styles.peruFlag}
              />
            </div>
            <p className={styles.footerTagline}>
              Software &amp; AI Engineer · Estudiante de Contabilidad · Lima, Perú
            </p>
          </div>

          <div className={styles.footerMeta}>
            <span>MODDO ARCHITECTURE</span>
            <span>NEXT.JS 16 &amp; REACT 19</span>
            <span>© {new Date().getFullYear()}</span>
            <a href="#home" className={styles.backToTopBtn}>
              Volver Arriba ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
