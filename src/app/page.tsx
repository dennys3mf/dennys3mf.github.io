"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/siteConfig";
import { about } from "../data/about";
import LanguageToggle from "../components/LanguageToggle";
import styles from "./page.module.css";

const work = [
{
  "slug": "portafolio-voz",
  "name": "Portafolio de voz y audio",
  "es": "Diseñé y desarrollé mi sitio bilingüe de voz, mezcla vocal y datos de voz para IA, con controles de audio, experiencia y CV descargable.",
  "en": "I designed and developed my bilingual voice, vocal mixing, and AI voice-data website, with audio controls, experience, and a downloadable CV."
},
{
  "slug": "fritzgym",
  "name": "FritzGym",
  "es": "Desarrollé el sitio web de Fritz Gym, con catálogo de máquinas, filtros por grupo muscular, tutoriales en video, códigos QR y panel administrativo.",
  "en": "I developed the Fritz Gym website, with a machine catalog, muscle-group filters, video tutorials, QR codes, and an admin panel."
},
  {
    slug: "ahorratiempo",
    name: "AhorraTiempo",
    es: "Plataforma para simplificar trámites y agendar citas en Perú, con asistencia por voz con IA y pagos digitales.",
    en: "A platform that simplifies paperwork and appointment scheduling in Peru, with AI voice assistance and digital payments.",
  },
  {
    slug: "billing-engine",
    name: "Billing Engine",
    es: "Motor de facturación electrónica y cobros recurrentes, con emisión y validación de comprobantes SUNAT y conciliación automática.",
    en: "An electronic invoicing and recurring payments engine, with SUNAT invoice validation and automatic reconciliation.",
  },
  {
    slug: "fiscalizacion-joya",
    name: "Fiscalización Joya",
    es: "Aplicación para inspectores municipales. Permite registrar actas, fotografías, firmas digitales y ubicación, incluso sin conexión.",
    en: "An app for municipal field inspectors to capture records, photos, digital signatures, and locations, even offline.",
  },
];

export default function Home() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const bio = about[language];

  return (
    <main id="main-content" className={styles.container}>
      <div className={styles.language}><LanguageToggle /></div>
      <div className={styles.editorialGrid}>
        <div>
          <h1 className={styles.portfolioTitle}>Portfolio</h1>
          <p className={styles.intro}>
            {isEs ? <>Busco mi próximo rol en <Link href="/services">desarrollo full stack</Link> o creando <Link href="/work">sistemas con IA</Link>. Si tu equipo está contratando:</> : <>I’m looking for my next role in <Link href="/services">full stack development</Link> or building <Link href="/work">AI systems</Link>. If you’re hiring:</>}
          </p>
          <Link href="/contact?intent=hiring" className={styles.contactButton}>
            {isEs ? "Hablemos" : "Let’s talk"}
          </Link>
          <section aria-labelledby="work">
            <h2 id="work" className={styles.sectionTitle}><a href="#work">{isEs ? "Proyectos" : "Work"}</a></h2>
            <ul className={styles.list}>
              {work.map((project) => <li key={project.slug}><Link href={`/work/${project.slug}`}>{project.name}</Link>: {project[language]}</li>)}
            </ul>
          </section>
          <section aria-labelledby="personal">
            <h2 id="personal" className={styles.sectionTitle}><a href="#personal">Personal</a></h2>
            <ul className={styles.list}>
              <li>
                <Link href="/work/safety-helmet-iot">Safety Helmet IoT</Link>: {isEs ? "Prototipo de casco de seguridad para minería, con ESP32 y Python. Incluye:" : "A mining safety helmet prototype built with ESP32 and Python. Features include:"}
                <ul>
                  <li>{isEs ? "Monitoreo de gases y ubicación GPS." : "Gas monitoring and GPS location."}</li>
                  <li>{isEs ? "Detección de caídas e impactos." : "Fall and impact detection."}</li>
                </ul>
              </li>
              <li><Link href="/work/chansa-app">CHANSA</Link>: {isEs ? "Aplicación móvil que conecta a personas con técnicos del hogar, con chat y mapas en tiempo real. Creada con Flutter y Firebase." : "A mobile app connecting homeowners with service professionals, with real-time chat and maps. Built with Flutter and Firebase."}</li>
            </ul>
            <Link href="/work" className={styles.archiveLink}>{isEs ? "Ver todos los proyectos" : "View all projects"}</Link>
          </section>
        </div>
        <aside className={styles.about} aria-labelledby="about-me">
          <h2 id="about-me" className={styles.aboutTitle}><a href="#about-me">{bio.heading}</a></h2>
          <div className={styles.bio}>
            <Image src="/images/personal/dennys-portrait.webp" alt="Dennys Marquez" width={84} height={84} className={styles.portrait} priority />
            <p>{bio.bio}</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.socials} aria-label={isEs ? "Enlaces de contacto" : "Contact links"}>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><span aria-hidden="true">·</span>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a><span aria-hidden="true">·</span>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">CV</a><span aria-hidden="true">·</span>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
          </div>
          <nav className={styles.directory} aria-label={isEs ? "Más sobre Dennys" : "More about Dennys"}>
            <Link href="/about">{bio.heading}</Link>
            <Link href="/experience">{isEs ? "Trayectoria" : "Experience"}</Link>
            <Link href="/services">{isEs ? "Servicios" : "Services"}</Link>
            <Link href="/contact">{isEs ? "Contacto" : "Contact"}</Link>
          </nav>
        </aside>
      </div>
    </main>
  );
}
