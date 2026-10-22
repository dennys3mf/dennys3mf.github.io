import styles from "./page.module.css";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import GlobalCursor from "../components/GlobalCursor";
import ThemeToggle from "../components/ThemeToggle";
import LiveClock from "../components/LiveClock";
import CartoonEyes from "../components/CartoonEyes";
import RotatingBadge from "../components/RotatingBadge";
import ProjectVideo from "../components/ProjectVideo";
import { GithubIcon } from "../components/Icons";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
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
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              className={styles.peruFlag}
              aria-label="Bandera de Perú"
              role="img"
            >
              <rect width="6.67" height="14" fill="#D91023" />
              <rect x="6.67" width="6.66" height="14" fill="#FFFFFF" />
              <rect x="13.33" width="6.67" height="14" fill="#D91023" />
            </svg>
          </a>

          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>
              Sobre mí
            </a>
            <a href="#servicios" className={styles.navLink}>
              Servicios
            </a>
            <a href="#casos" className={styles.navLink}>
              Proyectos
            </a>
            <a href="#proceso" className={styles.navLink}>
              Cómo trabajo
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
          HERO SECTION - EXACT MODDO SPECIFICATION
         ==================================================================== */}
      <section id="home" className={styles.hero}>
        {/* Top Meta Bar */}
        <div className={styles.heroMeta}>
          <div className={styles.heroMetaGroup}>
            <div className={styles.heroLocalTime}>
              <LiveClock />
            </div>
            <div className={styles.heroTimezone}>America / Lima</div>
          </div>

          <a
            href="mailto:dennys.marquez.dev@gmail.com"
            className={styles.heroContactLink}
          >
            <Mail size={16} />
            <span>dennys.marquez.dev@gmail.com</span>
          </a>
        </div>

        {/* Center Colossal Statement */}
        <div className={styles.heroTopWrap}>
          <h1 className={styles.textHero}>dennys marquez</h1>
        </div>

        {/* Bottom Wrap: Left Brand Signature/Eyebrow/Eyes & Right Cobalt Blue Service Card with Stickers */}
        <div className={styles.heroBottomWrap}>
          <div className={styles.heroTitleWrap}>
            <span className={styles.heroBrandSignature}>d.marquez</span>
            <span className={styles.heroEyebrowStudio}>SOFTWARE &amp; AI STUDIO</span>
            <CartoonEyes className={styles.heroEyeGraphic} />
          </div>

          <div className={styles.heroServiceArea}>
            <div className={`${styles.serviceSticker} ${styles.serviceSticker1}`}>
              <span>Full-Stack Web ⚡</span>
            </div>
            <div className={`${styles.serviceSticker} ${styles.serviceSticker2}`}>
              <span>IA &amp; Agentes 🤖</span>
            </div>
            <div className={`${styles.serviceSticker} ${styles.serviceSticker3}`}>
              <span>Arquitectura Cloud 🚀</span>
            </div>
            <div className={`${styles.serviceSticker} ${styles.serviceSticker4}`}>
              <span>Hardware IoT 📡</span>
            </div>
            <div className={`${styles.serviceSticker} ${styles.serviceSticker5}`}>
              <span>Lima, Perú</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          INFINITE MARQUEE TICKER (Moddo Brand Strip)
         ==================================================================== */}
      <div className={styles.marqueeContainer} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeItem}>
            <span>CÓDIGO CON CRITERIO</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>INTELIGENCIA ARTIFICIAL PRÁCTICA</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>ARQUITECTURA CLOUD ESCALABLE</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>INTERFACES HUMANAS</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>NEXT.JS 16 &amp; REACT 19</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>HECHO EN LIMA, PERÚ</span>
            <span className={styles.marqueeStar}>✦</span>
          </div>
          <div className={styles.marqueeItem}>
            <span>CÓDIGO CON CRITERIO</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>INTELIGENCIA ARTIFICIAL PRÁCTICA</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>ARQUITECTURA CLOUD ESCALABLE</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>INTERFACES HUMANAS</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>NEXT.JS 16 &amp; REACT 19</span>
            <span className={styles.marqueeStar}>✦</span>
            <span>HECHO EN LIMA, PERÚ</span>
            <span className={styles.marqueeStar}>✦</span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          ABOUT SECTION (Asymmetric Moddo Grid + Dedicated Accounting Block)
         ==================================================================== */}
      <section id="about" className={styles.sectionContainer}>
        <div className={styles.aboutGrid}>
          <ScrollReveal>
            <div className={styles.aboutContent}>
              <span className={styles.sectionTag}>[ 01 // QUIÉN SOY ]</span>
              <h2 className={styles.aboutHeadline}>
                Desarrollador apasionado por crear software que funciona y resuelve problemas reales.
              </h2>
              <p className={styles.aboutLead}>
                Soy <strong>Dennys Gabriel Marquez Flores</strong>, desarrollador de software radicado en
                Lima, Perú. Me dedico a la arquitectura web full-stack moderna, la integración práctica de
                modelos de inteligencia artificial y la automatización de procesos.
              </p>
              <p className={styles.aboutLead}>
                Construyo con un principio muy claro: el mejor software es aquel que no te hace perder tiempo.
                Interfaces rápidas, código tipado que cualquier colega puede mantener y sistemas que escalan
                sin caerse ante tráfico real.
              </p>

              <div className={styles.aboutBadgesList}>
                <div className={styles.aboutBadgeItem}>
                  <CheckCircle2 size={16} color="var(--accent-blue)" />
                  <span>Arquitectura Web Limpia &amp; Sin Sorpresas</span>
                </div>
                <div className={styles.aboutBadgeItem}>
                  <CheckCircle2 size={16} color="var(--accent-pink)" />
                  <span>Automatizaciones con IA que Ahorran Horas</span>
                </div>
                <div className={styles.aboutBadgeItem}>
                  <CheckCircle2 size={16} color="var(--accent-green)" />
                  <span>Sistemas de Alta Disponibilidad &amp; Cloud</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.aboutCardVisual}>
              <div className={styles.aboutImageWrap}>
                <img
                  src="/images/moddo/6ab49b9cb496908db1a9b6f6_6ab1e79bcbe672135c7aecc0_Modern-Minimalist-Creative-Workspace-with-Retro-Pop-Accents.webp"
                  alt="Espacio de trabajo moderno en Lima"
                  loading="lazy"
                />
              </div>
              <div className={styles.aboutOverlayNote}>
                <span>THINK BOLD ✦ BUILD BETTER</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ====================================================================
            BLOQUE DESTACADO: MÁS SOBRE MÍ - MI FORMACIÓN EN CONTABILIDAD
           ==================================================================== */}
        <ScrollReveal delay={200}>
          <div className={styles.accountingCard}>
            <div className={styles.accountingHeader}>
              <span className={styles.accountingTag}>
                <Calculator size={14} /> [ MÁS SOBRE MÍ // MI FORMACIÓN EN CONTABILIDAD ]
              </span>
              <h3 className={styles.accountingTitle}>
                El puente entre el código y los números reales de tu empresa.
              </h3>
              <p className={styles.accountingLead}>
                Muchos programadores construyen sin entender cómo se pagan las facturas; muchos
                financieros sufren con hojas de cálculo eternas que nadie sabe automatizar. En
                paralelo al desarrollo de software, estudio <strong>Contabilidad</strong>. Esta
                formación me da una perspectiva única: entiendo el plan contable, los costos
                operativos, los impuestos, las conciliaciones bancarias y el valor del flujo de caja.
              </p>
              <p className={styles.accountingLead} style={{ marginTop: "0.85rem" }}>
                Esto significa que cuando diseño una base de datos o un flujo de facturación, no solo
                pienso en la velocidad de la consulta: pienso en la trazabilidad para auditorías, el
                cumplimiento normativo (SUNAT) y que cada centavo invertido en infraestructura cloud
                tenga un retorno medible.
              </p>
            </div>

            <div className={styles.accountingGrid}>
              <div className={styles.accountingItem}>
                <div className={styles.accountingItemIcon}>
                  <BarChart3 size={22} />
                </div>
                <h4 className={styles.accountingItemTitle}>Comprensión del Negocio y ROI</h4>
                <p className={styles.accountingItemDesc}>
                  Hablo con la misma fluidez con tu contador o director financiero que con tu equipo
                  técnico. Cada funcionalidad se diseña pensando en su retorno de inversión.
                </p>
              </div>

              <div className={styles.accountingItem}>
                <div className={styles.accountingItemIcon}>
                  <ShieldCheck size={22} />
                </div>
                <h4 className={styles.accountingItemTitle}>Auditoría y Trazabilidad Forense</h4>
                <p className={styles.accountingItemDesc}>
                  Sistemas donde ningún registro se pierde. Sellos de tiempo, logs inalterables y
                  estructuras de datos preparadas para revisiones y auditorías fiscales.
                </p>
              </div>

              <div className={styles.accountingItem}>
                <div className={styles.accountingItemIcon}>
                  <Scale size={22} />
                </div>
                <h4 className={styles.accountingItemTitle}>Control Real de Costos Cloud</h4>
                <p className={styles.accountingItemDesc}>
                  Diseño arquitecturas serverless y bases de datos eficientes para evitar facturas
                  sorpresa a fin de mes en proveedores cloud como AWS o Vercel.
                </p>
              </div>

              <div className={styles.accountingItem}>
                <div className={styles.accountingItemIcon}>
                  <FileText size={22} />
                </div>
                <h4 className={styles.accountingItemTitle}>Automatización de Comprobantes &amp; SUNAT</h4>
                <p className={styles.accountingItemDesc}>
                  Experiencia práctica en lógica tributaria peruana, validación de comprobantes
                  electrónicos y flujos de conciliación bancaria sin fricción.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ====================================================================
          SERVICES SECTION (Moddo Interactive Rows)
         ==================================================================== */}
      <section id="servicios" className={styles.sectionContainer}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>[ 02 // LO QUE PUEDO CONSTRUIR ]</span>
            <h2 className={styles.sectionTitle}>De la idea al sistema funcionando en producción</h2>
            <p className={styles.sectionSubtitle}>
              Soluciones diseñadas para resolver cuellos de botella reales, con código mantenible y
              tecnología moderna probada en batalla.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.servicesStack}>
          {/* Servicio 01 */}
          <ScrollReveal delay={100}>
            <div className={styles.serviceRow}>
              <div className={styles.serviceNumber}>01</div>
              <div className={styles.serviceTitleGroup}>
                <span className={styles.serviceCategory}>WEB &amp; CLOUD DE ALTO NIVEL</span>
                <h3 className={styles.serviceName}>Plataformas Web que Vuelan</h3>
              </div>
              <div>
                <p className={styles.serviceDesc}>
                  Nada de plantillas pesadas ni páginas que tardan segundos en cargar. Construyo
                  aplicaciones web a medida con Next.js y React 19: ultra-rápidas, accesibles y
                  optimizadas para que tus usuarios no abandonen la pantalla.
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
                  INTELIGENCIA ARTIFICIAL APLICADA
                </span>
                <h3 className={styles.serviceName}>Asistentes &amp; Flujos con IA</h3>
              </div>
              <div>
                <p className={styles.serviceDesc}>
                  Menos promesas vacías y más resultados prácticos. Integro modelos de lenguaje y
                  agentes que atienden consultas de clientes 24/7, extraen datos de documentos y
                  automatizan las tareas repetitivas que le quitan tiempo a tu equipo.
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
                  BACKEND &amp; ARQUITECTURA CLOUD
                </span>
                <h3 className={styles.serviceName}>APIs, Backend &amp; Datos</h3>
              </div>
              <div>
                <p className={styles.serviceDesc}>
                  Diseño de APIs seguras, bases de datos relacionales y microservicios escalables.
                  Estructuras preparadas para alta concurrencia, autenticación robusta y
                  sincronización de datos en tiempo real.
                </p>
                <div className={styles.serviceTechList}>
                  <span className={styles.serviceTechPill}>PostgreSQL</span>
                  <span className={styles.serviceTechPill}>FastAPI / Python</span>
                  <span className={styles.serviceTechPill}>Node.js</span>
                  <span className={styles.serviceTechPill}>Docker &amp; Prisma</span>
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
                  HARDWARE &amp; SENSORES FÍSICOS
                </span>
                <h3 className={styles.serviceName}>Hardware IoT &amp; Telemetría</h3>
              </div>
              <div>
                <p className={styles.serviceDesc}>
                  Conectar el mundo físico con la nube. Prototipado y programación de
                  microcontroladores ESP32 con sensores ambientales y de impacto para prevención de
                  accidentes, monitoreo industrial y telemetría en tiempo real sobre MQTT.
                </p>
                <div className={styles.serviceTechList}>
                  <span className={styles.serviceTechPill}>ESP32</span>
                  <span className={styles.serviceTechPill}>MQTT</span>
                  <span className={styles.serviceTechPill}>C++ Embebido</span>
                  <span className={styles.serviceTechPill}>Sensores Industriales</span>
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
          CASES / WORK SECTION (HD Realism Showcase Cards)
         ==================================================================== */}
      <section id="casos" className={styles.sectionContainer}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>[ 03 // CASOS DE ÉXITO ]</span>
            <h2 className={styles.sectionTitle}>
              Proyectos reales nacidos de problemas reales.
            </h2>
            <p className={styles.sectionSubtitle}>
              Soluciones construidas con propósito: desde una startup propia de impacto ciudadano
              hasta digitalización municipal y hardware para minería.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.casesGrid}>
          {/* Caso 01: AhorraTiempo.pe */}
          <ScrollReveal delay={100}>
            <article className={styles.workCard}>
              <div className={styles.workInfo}>
                <div className={styles.workBadgeRow}>
                  <span className={styles.workBadge}>STARTUP PROPIA</span>
                  <span className={`${styles.workBadge} ${styles.workBadgePink}`}>
                    IA CIUDADANA
                  </span>
                </div>

                <h3 className={styles.workTitle}>AhorraTiempo.pe</h3>
                <p className={styles.workSubtitle}>
                  Simplificando la burocracia peruana con Inteligencia Artificial
                </p>

                <p className={styles.workDesc}>
                  Nació de una frustración real: hacer trámites en Perú suele ser confuso y
                  agotador. Creé AhorraTiempo para que cualquier ciudadano consulte requisitos y
                  pasos en segundos con un asistente de IA que responde en lenguaje sencillo, sin
                  términos legales oscuros.
                </p>

                <div className={styles.workHighlights}>
                  <div className={styles.highlightItem}>
                    <ShieldCheck size={16} className={styles.highlightIcon} />
                    <span>Asistente guiado por IA disponible 24/7</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <Zap size={16} className={styles.highlightIcon} />
                    <span>Ahorro tangible de horas y colas innecesarias</span>
                  </div>
                </div>

                <div className={styles.workActions}>
                  <Link
                    href="https://ahorratiempo.pe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnPrimary}
                  >
                    <span>Probar la Plataforma</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Video Mockup Frame con ProjectVideo HD */}
              <ProjectVideo
                src="/videos/ahorratiempo.mp4"
                url="https://ahorratiempo.pe"
                title="AhorraTiempo.pe"
              />
            </article>
          </ScrollReveal>

          {/* Caso 02: App Fiscalización */}
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
                  Inspección municipal en campo y validación de identidad in situ
                </p>

                <p className={styles.workDesc}>
                  Ver a los inspectores municipales cargar carpetas llenas de actas de papel bajo el
                  sol me llevó a diseñar esta herramienta. Permite levantar actas desde el móvil,
                  tomar fotos geolocalizadas, validar identidades al instante y generar expedientes
                  digitales inalterables.
                </p>

                <div className={styles.workHighlights}>
                  <div className={styles.highlightItem}>
                    <ShieldCheck size={16} className={styles.highlightIcon} />
                    <span>Cero actas extraviadas y 100% trazabilidad digital</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <Zap size={16} className={styles.highlightIcon} />
                    <span>Verificación instantánea y firma en pantalla</span>
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
                    <span>Ver Repositorio en GitHub</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Video Mockup Frame con ProjectVideo HD */}
              <ProjectVideo
                src="/videos/app-fiscalizacion.mp4"
                url="github.com/dennys3mf/App-Fiscalizacion-Joya"
                title="App Fiscalización Digital"
              />
            </article>
          </ScrollReveal>

          {/* Caso 03: Casco IoT */}
          <ScrollReveal delay={300}>
            <article className={styles.workCard}>
              <div className={styles.workInfo}>
                <div className={styles.workBadgeRow}>
                  <span className={styles.workBadge}>HARDWARE EMBEBIDO</span>
                  <span className={`${styles.workBadge} ${styles.workBadgePink}`}>
                    SEGURIDAD MINERA
                  </span>
                </div>

                <h3 className={styles.workTitle}>Casco Inteligente IoT</h3>
                <p className={styles.workSubtitle}>
                  Telemetría y alerta temprana para proteger vidas en minería
                </p>

                <p className={styles.workDesc}>
                  En socavones y obras industriales, un accidente no avisa. Integramos sensores de
                  gases tóxicos, acelerómetros para caídas e impactos en un casco físico conectado a
                  un ESP32. Si ocurre un siniestro, emite alarma sonora local y transmite la alerta
                  por MQTT a la central en milisegundos.
                </p>

                <div className={styles.workHighlights}>
                  <div className={styles.highlightItem}>
                    <ShieldCheck size={16} className={styles.highlightIcon} />
                    <span>Detección automática de caídas y gases letales</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <Zap size={16} className={styles.highlightIcon} />
                    <span>Transmisión en tiempo real de bajo consumo</span>
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
                    <span>Ver Repositorio en GitHub</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Video Mockup Frame con ProjectVideo HD */}
              <ProjectVideo
                src="/videos/casco-inteligente.mp4"
                url="github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT"
                title="Casco Inteligente IoT"
              />
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
            <span className={styles.sectionTag}>[ 04 // CÓMO TRABAJO ]</span>
            <h2 className={styles.sectionTitle}>
              Cero magia negra: un proceso transparente y honesto.
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
                <span className={styles.processStepTag}>ENTENDER</span>
              </div>
              <div className={styles.processImageWrap}>
                <img
                  src="/images/moddo/6ab21fb86bf7e13ace189013_blueprint.webp"
                  alt="Etapa de entendimiento y modelado"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className={styles.processTitle}>1. Escuchar y Modelar</h3>
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
                <span className={styles.processStepTag}>CONSTRUIR</span>
              </div>
              <div className={styles.processImageWrap}>
                <img
                  src="/images/moddo/6ab21fb70137b2b01251c68d_design.webp"
                  alt="Etapa de desarrollo y diseño"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className={styles.processTitle}>2. Construir &amp; Validar</h3>
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
                <span className={styles.processStepTag}>LANZAR</span>
              </div>
              <div className={styles.processImageWrap}>
                <img
                  src="/images/moddo/6ab21fb76bf7e13ace188ff7_enhance.webp"
                  alt="Etapa de optimización y despliegue"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className={styles.processTitle}>3. Poner en Marcha &amp; Medir</h3>
                <p className={styles.processDesc}>
                  Despliegue en servidores cloud seguros con monitoreo en tiempo real. Te entrego
                  documentación y te acompaño para que tu equipo opere con total tranquilidad.
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
                TypeScript y Python estricto: adiós a los errores tontos en producción.
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>3x</span>
              <span className={styles.statLabel}>Menos Tiempo Manual</span>
              <span className={styles.statDesc}>
                Automatizaciones con IA que liberan a tu equipo de tareas repetitivas.
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Disponibilidad Real</span>
              <span className={styles.statDesc}>
                Infraestructura cloud serverless rápida y de bajísima latencia.
              </span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>Full-Stack</span>
              <span className={styles.statLabel}>De Punta a Punta</span>
              <span className={styles.statDesc}>
                Desde la experiencia visual en pantalla hasta la base de datos y la nube.
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
            <h2 className={styles.ctaTitle}>¿Tienes un proyecto o problema que quieras resolver?</h2>
            <p className={styles.ctaDesc}>
              Escríbeme con total confianza. Me encanta conversar sobre tecnología, automatización y
              desafíos de negocio. Te responderé directamente y sin rodeos.
            </p>

            <div className={styles.ctaButtonGroup}>
              <a
                href="https://wa.me/51922466078"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimaryBtn}
              >
                <MessageCircle size={18} />
                <span>Conversar por WhatsApp (+51 922 466 078)</span>
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
                <span>Ver Código en GitHub</span>
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
              Software &amp; AI Engineer · Lima, Perú 🇵🇪
            </p>
          </div>

          <div className={styles.footerMeta}>
            <span>MODDO HD ARCHITECTURE</span>
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
