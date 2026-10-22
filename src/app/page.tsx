import styles from "./page.module.css";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import GlobalCursor from "../components/GlobalCursor";
import ThemeToggle from "../components/ThemeToggle";
import LiveClock from "../components/LiveClock";
import CartoonEyes from "../components/CartoonEyes";
import {
  BadgeMove,
  BadgeBold,
  BadgeNoise,
  BadgeCurious,
  BadgePlay,
  BadgeBuild,
} from "../components/TactileBadges";
import RotatingBadge from "../components/RotatingBadge";
import PencilRibbon from "../components/PencilRibbon";
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
          FLOATING BOTTOM PILL NAVBAR (Exact Moddo White Capsule)
         ==================================================================== */}
      <header className={styles.navbarWrapper}>
        <nav className={styles.navbar}>
          <a href="#home" className={styles.navLink}>
            Home
          </a>
          <a href="#servicios" className={styles.navLink}>
            Services
          </a>
          <a href="#casos" className={styles.navLink}>
            Cases
          </a>
          <a href="#whyus" className={styles.navLink}>
            Why Us
          </a>
          <a href="#contacto" className={styles.navLink}>
            Contact
          </a>
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

        {/* Center Colossal Statement */}
        <div className={styles.heroTopWrap}>
          <h1 className={styles.textHero}>dennys marquez</h1>
        </div>

        {/* Bottom Wrap: Left Brand Signature/Eyebrow/Eyes & Right Cobalt Blue Service Card with Stickers */}
        <div className={styles.heroBottomWrap}>
          <div className={styles.heroTitleWrap}>
            <span className={styles.heroBrandSignature}>d marquez</span>
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
          ABOUT SECTION (Moddo Blue Canvas + Photo with Tactile Badges + Accounting)
         ==================================================================== */}
      <section id="about" className={styles.aboutModdoSection}>
        <div className={styles.aboutModdoContainer}>
          <div className={styles.aboutModdoHeader}>
            <div className={styles.aboutModdoLeft}>
              <h2 className={styles.aboutModdoHeading}>
                Construyo software y sistemas que marcan la diferencia.
              </h2>
              <p className={styles.aboutModdoEyebrow}>About</p>
            </div>
            <div>
              <p className={styles.aboutModdoParagraph}>
                Combino código limpio, arquitectura cloud moderna y soluciones prácticas con
                Inteligencia Artificial para ayudar a negocios, startups y entidades a digitalizarse
                sin fricción y escalar con confianza.
              </p>
            </div>
          </div>

          {/* Photo stage with the 4 Moddo tactile badges */}
          <div className={styles.aboutStageWrap}>
            <div className={styles.aboutMainImgCard}>
              <img
                src="/images/moddo/about-team.webp"
                alt="Equipo colaborando y diseñando en el estudio"
                loading="lazy"
              />
            </div>

            <BadgeMove className={styles.badgePosMove} />
            <BadgeBold className={styles.badgePosBold} />
            <BadgeNoise className={styles.badgePosNoise} />
            <BadgeCurious className={styles.badgePosCurious} />
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
          SERVICES SECTION (Moddo Walking Mascot & Tactile Pill Stack)
         ==================================================================== */}
      <section id="servicios" className={styles.servicesModdoSection}>
        <div className={styles.servicesModdoContainer}>
          <div className={styles.servicesModdoHeader}>
            <h2 className={styles.servicesModdoTitle}>Designing just for you</h2>
            <p className={styles.servicesModdoEyebrow}>Services</p>
          </div>

          <div className={styles.servicesModdoStage}>
            {/* Left: Walking Mascot on the Thick Blue Curved Track */}
            <div className={styles.serviceTrackCol}>
              <PencilRibbon
                d="M14.8359 35.5234C242.336 130.523 221.739 210.908 233.336 321.523C246.336 445.523 355.336 524.023 663.836 391.023C869.652 302.292 1000.53 540.523 683.836 540.523C543.336 540.523 446.336 593.523 433.836 664.523"
                viewBox="0 0 913 672"
                stroke="#2735ce"
                strokeWidth={77}
                className={styles.serviceRibbonSvg}
              />
              <img
                src="/images/moddo/mascot-walking.webp"
                alt="Dennys Marquez Mascot"
                className={styles.serviceMascot}
                loading="lazy"
              />
            </div>

            {/* Right: Stack of 5 Moddo Pill Service Buttons */}
            <div className={styles.servicesPillStack}>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillPink}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Full-Stack Web Moderno</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillBlue}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Automatizaciones &amp; Agentes IA</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillOrange}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Arquitectura Cloud &amp; APIs</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillGreen}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Hardware IoT &amp; Telemetría</span>
              </a>
              <a href="#contacto" className={`${styles.servicePillBtn} ${styles.pillRed}`}>
                <span className={styles.servicePillIcon}>↗</span>
                <span>Consultoría Técnica &amp; Auditoría</span>
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
            <p className={styles.casesModdoEyebrow}>Cases</p>
            <h2 className={styles.casesModdoTitle}>
              Our passion is crafting designs that are as unique as you are.
            </h2>
          </div>

          <div className={styles.casesGridModdo}>
            {/* Project 01 */}
            <a
              href="https://ahorratiempo.pe"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.caseCardModdo}
            >
              <div className={styles.caseImageFrame}>
                <img
                  src="/images/moddo/case-pencils.webp"
                  alt="AhorraTiempo.pe"
                  loading="lazy"
                />
              </div>
              <div className={styles.caseMetaRow}>
                <div className={styles.caseMetaText}>
                  <h3 className={styles.caseItemTitle}>AhorraTiempo.pe</h3>
                  <p className={styles.caseItemSub}>Plataforma Ciudadana con IA &amp; RAG</p>
                </div>
                <div className={styles.caseArrowBtn}>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </a>

            {/* Project 02 */}
            <a
              href="https://github.com/dennys3mf/App-Fiscalizacion-Joya"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.caseCardModdo}
            >
              <div className={styles.caseImageFrame}>
                <img
                  src="/images/moddo/case-chip.webp"
                  alt="App Fiscalización Digital"
                  loading="lazy"
                />
              </div>
              <div className={styles.caseMetaRow}>
                <div className={styles.caseMetaText}>
                  <h3 className={styles.caseItemTitle}>App Fiscalización Digital</h3>
                  <p className={styles.caseItemSub}>Inspección Municipal In Situ &amp; Cero Papel</p>
                </div>
                <div className={styles.caseArrowBtn}>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </a>

            {/* Project 03 */}
            <a
              href="https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.caseCardModdo}
            >
              <div className={styles.caseImageFrame}>
                <img
                  src="/images/moddo/case-workspace.webp"
                  alt="Casco Inteligente IoT"
                  loading="lazy"
                />
              </div>
              <div className={styles.caseMetaRow}>
                <div className={styles.caseMetaText}>
                  <h3 className={styles.caseItemTitle}>Casco Inteligente IoT</h3>
                  <p className={styles.caseItemSub}>Telemetría Minera, Sensores &amp; MQTT</p>
                </div>
                <div className={`${styles.caseArrowBtn} ${styles.caseArrowYellow}`}>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </a>

            {/* Project 04 */}
            <a
              href="https://github.com/dennys3mf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.caseCardModdo}
            >
              <div className={styles.caseImageFrame}>
                <img
                  src="/images/moddo/case-cup.webp"
                  alt="Fintech &amp; Sunat Flow Engine"
                  loading="lazy"
                />
              </div>
              <div className={styles.caseMetaRow}>
                <div className={styles.caseMetaText}>
                  <h3 className={styles.caseItemTitle}>Fintech &amp; Sunat Flow Engine</h3>
                  <p className={styles.caseItemSub}>Conciliación Bancaria y Comprobantes</p>
                </div>
                <div className={styles.caseArrowBtn}>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </a>

            {/* Project 05 */}
            <a
              href="https://github.com/dennys3mf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.caseCardModdo}
            >
              <div className={styles.caseImageFrame}>
                <img
                  src="/images/moddo/case-car.webp"
                  alt="AI Knowledge Assistant"
                  loading="lazy"
                />
              </div>
              <div className={styles.caseMetaRow}>
                <div className={styles.caseMetaText}>
                  <h3 className={styles.caseItemTitle}>AI Knowledge Assistant</h3>
                  <p className={styles.caseItemSub}>Auditoría Normativa con Modelos LLM</p>
                </div>
                <div className={styles.caseArrowBtn}>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </a>

            {/* Project 06 */}
            <a
              href="https://github.com/dennys3mf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.caseCardModdo}
            >
              <div className={styles.caseImageFrame}>
                <img
                  src="/images/moddo/case-portrait.webp"
                  alt="Cloud High-Throughput API"
                  loading="lazy"
                />
              </div>
              <div className={styles.caseMetaRow}>
                <div className={styles.caseMetaText}>
                  <h3 className={styles.caseItemTitle}>Cloud High-Throughput API</h3>
                  <p className={styles.caseItemSub}>Microservicios Distribuidos en Go / Node.js</p>
                </div>
                <div className={`${styles.caseArrowBtn} ${styles.caseArrowYellow}`}>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </a>
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
              <span>See All Work</span>
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROCESS SECTION (Moddo 3-Step Culture with 3D Illustrations & Connecting Pink Stroke)
         ==================================================================== */}
      <section id="proceso" className={styles.processModdoSection}>
        {/* Continuous Hot Pink Connecting Ribbon */}
        <div className={styles.processRibbonWrap}>
          <PencilRibbon
            d="M1758.77 38.3438C1964.77 184.344 2063.53 778.039 1669.27 903.344C1153.27 1067.34 902.773 577.844 1078.77 491.344C1268.79 397.957 1288.72 959.844 902.773 959.844C607.773 959.844 580.773 780.844 404.773 759.844C231.116 739.123 86.2734 890.01 19.7734 920.844"
            viewBox="0 0 1987 1007"
            stroke="#ff008c"
            strokeWidth={77}
            className={styles.processRibbonSvg}
          />
        </div>

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
                  <h3 className={styles.processTitle}>1 Escuchar y Modelar</h3>
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
                  <h3 className={styles.processTitle}>2 Construir &amp; Validar</h3>
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
                  <h3 className={styles.processTitle}>3 Poner en Marcha &amp; Medir</h3>
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
          STATS SECTION (Moddo Hot Pink Canvas, Yellow Stadium Pills & Logos)
         ==================================================================== */}
      <section id="stats" className={styles.statsModdoSection}>
        <div className={styles.statsModdoContainer}>
          <div className={styles.statsGridModdo}>
            <div className={styles.statsLeft}>
              <p className={styles.statsEyebrow}>Stats</p>
              <h2 className={styles.statsHeadingColossal}>Different</h2>
              <div className={styles.statsSubheading}>
                industries, perspectives,
                <br />
                and problems to solve
              </div>
            </div>

            <div className={styles.statsPillsCol}>
              <div className={styles.statStadiumPill}>
                <span className={styles.statGiantNum}>390%</span>
                <span className={styles.statDarkLabel}>Avg. Engagement</span>
              </div>
              <div className={styles.statStadiumPill}>
                <span className={styles.statGiantNum}>685x</span>
                <span className={styles.statDarkLabel}>ROI On Paid ADS</span>
              </div>
            </div>
          </div>

          {/* Partner & Tech Logos Marquee Strip */}
          <div className={styles.statsLogoMarquee} aria-hidden="true">
            <div className={styles.statsLogoTrack}>
              <div className={styles.logoItemWrap}>
                <img src="/images/moddo/logo-philadelphia.avif" alt="Philadelphia" loading="lazy" />
              </div>
              <div className={styles.logoItemWrap}>
                <img src="/images/moddo/logo-greenish.avif" alt="Greenish" loading="lazy" />
              </div>
              <div className={styles.logoItemWrap}>
                <img src="/images/moddo/logo-network.avif" alt="Network" loading="lazy" />
              </div>
              <div className={styles.logoItemWrap}>
                <img src="/images/moddo/logo-amsterdam.avif" alt="Amsterdam" loading="lazy" />
              </div>
              {/* Duplicate track for seamless infinite loop */}
              <div className={styles.logoItemWrap}>
                <img src="/images/moddo/logo-philadelphia.avif" alt="Philadelphia" loading="lazy" />
              </div>
              <div className={styles.logoItemWrap}>
                <img src="/images/moddo/logo-greenish.avif" alt="Greenish" loading="lazy" />
              </div>
              <div className={styles.logoItemWrap}>
                <img src="/images/moddo/logo-network.avif" alt="Network" loading="lazy" />
              </div>
              <div className={styles.logoItemWrap}>
                <img src="/images/moddo/logo-amsterdam.avif" alt="Amsterdam" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHY US SECTION (Moddo 3 Characters, Oval Shadows & Organic Cards)
         ==================================================================== */}
      <section id="whyus" className={styles.whyUsSection}>
        <div className={styles.whyUsContainer}>
          <div className={styles.whyUsHeader}>
            <h2 className={styles.whyUsTitle}>Why us?</h2>
            <p className={styles.whyUsEyebrow}>Simple by choice</p>
          </div>

          <div className={styles.whyUsRows}>
            {/* Row 1: Flexible (Blueprint Roll + Cobalt Blue Card) */}
            <ScrollReveal delay={100}>
              <div className={styles.whyUsRow}>
                <div className={styles.whyUsMediaCol}>
                  <img
                    src="/images/moddo/whyus-ch1.webp"
                    alt="Blueprint roll character with peace sign"
                    className={styles.whyUsCharacter}
                    loading="lazy"
                  />
                  <div className={styles.charShadow} />
                </div>
                <div className={`${styles.whyUsCardContent} ${styles.whyUsCardFlexible}`}>
                  <h3 className={styles.whyUsCardTitle}>Flexible</h3>
                  <p className={styles.whyUsCardDesc}>
                    Adaptabilidad total a tu modelo de negocio y requerimientos técnicos: desde prototipos rápidos y MVP hasta arquitecturas escalables y de alta disponibilidad.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Row 2: Data-Driven Creativity (Walking Pencil + Hot Pink Card) */}
            <ScrollReveal delay={200}>
              <div className={styles.whyUsRow}>
                <div className={styles.whyUsMediaCol}>
                  <img
                    src="/images/moddo/whyus-ch2.webp"
                    alt="Pencil character walking with sneakers"
                    className={styles.whyUsCharacter}
                    loading="lazy"
                  />
                  <div className={styles.charShadow} />
                </div>
                <div className={`${styles.whyUsCardContent} ${styles.whyUsCardCreativity}`}>
                  <h3 className={styles.whyUsCardTitle}>Data-Driven Creativity</h3>
                  <p className={styles.whyUsCardDesc}>
                    Estrategia e ingeniería guiadas por métricas reales, análisis de datos riguroso y visión de negocio sin perder la chispa creativa.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Row 3: Aligned with Core Values (Smiling Star + Emerald Green Card) */}
            <ScrollReveal delay={300}>
              <div className={styles.whyUsRow}>
                <div className={styles.whyUsMediaCol}>
                  <img
                    src="/images/moddo/whyus-ch3.webp"
                    alt="Smiling star character with sparkling eyes"
                    className={styles.whyUsCharacter}
                    loading="lazy"
                  />
                  <div className={styles.charShadow} />
                </div>
                <div className={`${styles.whyUsCardContent} ${styles.whyUsCardValues}`}>
                  <h3 className={styles.whyUsCardTitle}>Aligned with Core Values</h3>
                  <p className={styles.whyUsCardDesc}>
                    Desarrollo de software con honestidad técnica, trazabilidad contable y código limpio que resuelve problemas concretos sin adornos innecesarios.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CTA SECTION (Moddo Charcoal Canvas, Yellow Stadium Card, Rotating Badge)
         ==================================================================== */}
      <section id="contacto" className={styles.ctaModdoSection}>
        {/* Looping Yellow Pencil Ribbon */}
        <div className={styles.ctaConnectingPath}>
          <PencilRibbon
            d="M81.3438 572.578C752.344 296.078 1571.44 537.89 1796.84 764.594C2399.84 1371.08 1166.71 1232.76 1055.34 1206.12C873.344 1162.59 563.844 1010.59 698.344 842.094C832.844 673.594 1234.08 931.586 1543.84 990.624C1897.84 1058.09 2155.46 796.348 1955.34 485.076C1810.34 259.54 834.386 -62.3864 408.344 650.095C-63.1562 1438.6 954.51 1435.08 1166.84 1280.08"
            viewBox="0 0 2239 1575"
            stroke="#f7fa40"
            strokeWidth={90}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className={styles.ctaModdoContainer}>
          <div className={styles.ctaModdoGrid}>
            {/* Left: Electric Yellow Stadium Card */}
            <div className={styles.ctaStadiumCard}>
              <div>
                <h2 className={styles.ctaStadiumTitle}>Have a project in mind?</h2>
                <p className={styles.ctaStadiumDesc}>
                  Partner with Dennys Marquez to transform your business or startup into a memorable digital experience.
                </p>
              </div>

              <div>
                <a
                  href="https://wa.me/51922466078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaPillBtn}
                >
                  <span>↗</span>
                  <span>Book a Call</span>
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
                </div>
              </div>
            </div>

            {/* Right: Photo Frame with Rotating Badge */}
            <div className={styles.ctaMediaCol}>
              <div className={styles.ctaPhotoFrame}>
                <img
                  src="/images/moddo/about-team.webp"
                  alt="Dennys Marquez Studio"
                  loading="lazy"
                />
              </div>

              <div className={styles.ctaBadgeWrap}>
                <RotatingBadge size={145} text="✦ PARTNER WITH • DENNYS MARQUEZ •" />
              </div>
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
            {/* Brand & Peru Flag */}
            <div className={styles.footerBrandCol}>
              <h3 className={styles.footerBrandHeading}>dennys marquez</h3>
              <p className={styles.footerBrandTagline}>
                Software &amp; AI Studio — Lima, Perú
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
              </p>

              <div className={styles.footerContactList}>
                <a
                  href="mailto:dennys.marquez.dev@gmail.com"
                  className={styles.footerContactLink}
                >
                  <Mail size={16} />
                  <span>dennys.marquez.dev@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/51922466078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerContactLink}
                >
                  <MessageCircle size={16} />
                  <span>(+51) 922 466 078</span>
                </a>
              </div>
            </div>

            {/* Nav Links */}
            <div className={styles.footerNavCol}>
              <span className={styles.footerNavColTitle}>Navigation</span>
              <a href="#home" className={styles.footerNavLink}>Home</a>
              <a href="#servicios" className={styles.footerNavLink}>Services</a>
              <a href="#casos" className={styles.footerNavLink}>Cases</a>
              <a href="#whyus" className={styles.footerNavLink}>Why Us</a>
              <a href="#contacto" className={styles.footerNavLink}>Contact</a>
            </div>

            {/* Social Links */}
            <div className={styles.footerNavCol}>
              <span className={styles.footerNavColTitle}>Connect</span>
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
              <a
                href="https://www.linkedin.com/in/dennys-marquez/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerNavLink}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Floating Tactile Badges Strip */}
          <div className={styles.footerBadgesStrip} aria-hidden="true">
            <BadgeMove className={styles.footerBadgeItem} />
            <BadgeBold className={styles.footerBadgeItem} />
            <BadgePlay className={styles.footerBadgeItem} />
            <BadgeNoise className={styles.footerBadgeItem} />
            <BadgeCurious className={styles.footerBadgeItem} />
            <BadgeBuild className={styles.footerBadgeItem} />
          </div>

          {/* Bottom Row */}
          <div className={styles.footerBottomRow}>
            <span>Dennys Gabriel Marquez Flores © {new Date().getFullYear()}. All rights reserved.</span>
            <span>Moddo HD Architecture • Next.js 16 &amp; React 19</span>
            <a href="#home" className={styles.footerNavLink} style={{ fontSize: "0.92rem" }}>
              Volver Arriba ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
