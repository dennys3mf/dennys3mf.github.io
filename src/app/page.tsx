import styles from "./page.module.css";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import LiveClock from "../components/LiveClock";
import RotatingBadge from "../components/RotatingBadge";
import FloatingNav from "../components/FloatingNav";
import ContactBillboard from "../components/ContactBillboard";
import ProjectVideo from "../components/ProjectVideo";
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
} from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ====================================================================
          FLOATING BOTTOM PILL NAVBAR (Exact Moddo White Capsule with Yellow Active Pill)
         ==================================================================== */}
      <FloatingNav />

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
            <a
              href="mailto:dennys.marquez.dev@gmail.com"
              className={styles.heroContactLink}
            >
              <Mail size={16} />
              <span>dennys.marquez.dev@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Center Colossal Statement */}
        <div className={styles.heroTopWrap}>
          <h1 className={styles.textHero}>dennys marquez</h1>
        </div>

        {/* Bottom Wrap: Brand Signature & Active Engineering Status */}
        <div className={styles.heroBottomWrap}>
          <div className={styles.heroTitleWrap}>
            <span className={styles.heroBrandSignature}>d marquez</span>
            <span className={styles.heroEyebrowStudio}>FULL STACK DEVELOPER &amp; IA</span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          ABOUT SECTION (Moddo Blue Canvas + Photo + Accounting)
         ==================================================================== */}
      <section id="about" className={styles.aboutModdoSection}>
        <div className={styles.aboutModdoContainer}>
          <div className={styles.aboutModdoHeader}>
            <div className={styles.aboutModdoLeft}>
              <span className={styles.aboutSimpleEyebrow}>Sobre mí</span>
              <h2 className={styles.aboutModdoHeading}>
                Construyo aplicaciones web, móviles y sistemas con Inteligencia Artificial.
              </h2>
            </div>
            <div>
              <p className={styles.aboutModdoParagraph}>
                Full Stack Developer &amp; AI Engineer. Construyo productos digitales escalables y de alto
                rendimiento combinando arquitecturas cloud serverless, interfaces reactivas e integración
                de modelos de lenguaje en producción. Mi enfoque une solidez técnica, velocidad de entrega y
                criterio de negocio.
              </p>
            </div>
          </div>

          {/* Photo stage with clean workstation image */}
          <div className={styles.aboutStageWrap}>
            <div className={styles.aboutMainImgCard}>
              <img
                src="/images/personal/dennys-workstation.webp"
                alt="Dennys Gabriel Marquez Flores — Full Stack Developer & AI Engineer en su estación de trabajo"
                loading="lazy"
              />
            </div>
          </div>

          {/* ====================================================================
              BLOQUE DESTACADO: MÁS SOBRE MÍ - MI FORMACIÓN EN CONTABILIDAD
             ==================================================================== */}
          <ScrollReveal delay={150}>
            <div className={styles.accountingCard}>
              <div className={styles.accountingHeader}>
                <h3 className={styles.accountingTitle}>
                  El puente entre el código y los números reales de tu empresa
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
        </div>
      </section>

      {/* ====================================================================
          SERVICES SECTION (Engineering Console & Direct Service Cards)
         ==================================================================== */}
      <section id="servicios" className={styles.servicesModdoSection}>
        <div className={styles.servicesModdoContainer}>
          <div className={styles.servicesModdoHeader}>
            <h2 className={styles.servicesModdoTitle}>Soluciones de Software &amp; Desarrollo Full Stack</h2>
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
                  <span className={styles.consoleKey}>specialty:</span> <span className={styles.consoleString}>&quot;Full Stack &amp; AI Systems&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>production:</span> [
                </div>
                <div className={styles.consoleLineIndent2}>
                  <span className={styles.consoleString}>&quot;React 18 / Next.js&quot;</span>, <span className={styles.consoleString}>&quot;Cloudflare Workers&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent2}>
                  <span className={styles.consoleString}>&quot;Flutter / Dart&quot;</span>, <span className={styles.consoleString}>&quot;Python / LLM APIs&quot;</span>
                </div>
                <div className={styles.consoleLineIndent}>
                  ],
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>architecture:</span> <span className={styles.consoleString}>&quot;Serverless &amp; Microservices&quot;</span>,
                </div>
                <div className={styles.consoleLineIndent}>
                  <span className={styles.consoleKey}>financialAudit:</span> <span className={styles.consoleBoolean}>true</span>
                </div>
                <div className={styles.consoleLine}>&#125;;</div>
              </div>
            </div>

            {/* Right: Stack of 5 Moddo Pill Service Buttons */}
            <div className={styles.servicesPillStack}>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillPink}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Desarrollo Web (React 18 &amp; TypeScript)</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillBlue}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Integración de IA &amp; Asistentes de Voz</span>
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
            <h2 className={styles.casesModdoTitle}>
              Software probado en producción y proyectos con impacto real.
            </h2>
          </div>

          <div className={styles.casesGridModdo}>
            {/* Project 01 */}
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

            {/* Project 02 */}
            <ScrollReveal delay={200}>
              <a
                href="https://github.com/dennys3mf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.caseCardModdo}
              >
                <div className={styles.caseImageFrame}>
                  <img
                    src="/images/projects/controla-servilex-preview.webp"
                    alt="CONTROLA SERVILEX Legal IT & SG-SST"
                    loading="lazy"
                  />
                </div>
                <div className={styles.caseMetaRow}>
                  <div className={styles.caseMetaText}>
                    <h3 className={styles.caseItemTitle}>CONTROLA — SERVILEX Legal IT</h3>
                    <p className={styles.caseItemSub}>Software Developer · Automatización Legal &amp; Gestión SG-SST</p>
                  </div>
                  <div className={styles.caseArrowBtn}>
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Project 03 */}
            <ScrollReveal delay={300}>
              <a
                href="https://github.com/dennys3mf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.caseCardModdo}
              >
                <div className={styles.caseImageFrame}>
                  <img
                    src="/images/projects/chansa-app-preview.webp"
                    alt="CHANSA App Móvil en Flutter"
                    loading="lazy"
                  />
                </div>
                <div className={styles.caseMetaRow}>
                  <div className={styles.caseMetaText}>
                    <h3 className={styles.caseItemTitle}>CHANSA App Móvil</h3>
                    <p className={styles.caseItemSub}>Mobile Application Developer · Flutter, Dart &amp; Firebase</p>
                  </div>
                  <div className={`${styles.caseArrowBtn} ${styles.caseArrowYellow}`}>
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Project 04 */}
            <ScrollReveal delay={150}>
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

            {/* Project 05 */}
            <ScrollReveal delay={250}>
              <a
                href="https://github.com/dennys3mf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.caseCardModdo}
              >
                <div className={styles.caseImageFrame}>
                  <img
                    src="/images/projects/fintech-sunat-preview.webp"
                    alt="Fintech & Sunat Flow Engine"
                    loading="lazy"
                  />
                </div>
                <div className={styles.caseMetaRow}>
                  <div className={styles.caseMetaText}>
                    <h3 className={styles.caseItemTitle}>Fintech &amp; Sunat Flow Engine</h3>
                    <p className={styles.caseItemSub}>Pasarela Culqi, Suscripciones &amp; Comprobantes Electrónicos</p>
                  </div>
                  <div className={styles.caseArrowBtn}>
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Project 06 */}
            <ScrollReveal delay={350}>
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
                <RotatingBadge size={145} text="✦ DENNYS MARQUEZ • FULL STACK DEVELOPER • IA & CLOUD •" />
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
            {/* Nav Links */}
            <div className={styles.footerNavCol}>
              <span className={styles.footerNavColTitle}>Navegación</span>
              <a href="#home" className={styles.footerNavLink}>Inicio</a>
              <a href="#servicios" className={styles.footerNavLink}>Servicios</a>
              <a href="#casos" className={styles.footerNavLink}>Proyectos</a>
              <a href="#whyus" className={styles.footerNavLink}>¿Por qué yo?</a>
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
