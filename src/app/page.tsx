import styles from "./page.module.css";
import Link from "next/link";
import ParticleNetwork from "../components/ParticleNetwork";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navbar Minimalist/Brutalist */}
      <nav className={`${styles.navbar}`}>
        <div className={styles.logo}>D. MARQUEZ</div>
        <div className={styles.navLinks}>
          <a href="#soluciones">Soluciones</a>
          <a href="#proyectos">Casos de Éxito</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* Hero Interactivo Monochrome */}
      <section className={styles.hero}>
        <div className={styles.heroCanvas}>
          <ParticleNetwork />
        </div>
        
        <ScrollReveal delay={100}>
          <h1 className={styles.heroName}>
            <span>DENNYS</span>
            <span>MARQUEZ</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <p className={styles.heroSubtitle}>
            <span className={styles.crossIcon}>+</span> Desarrollador de Software <span className={styles.crossIcon}>X</span> Estudiante de Contabilidad <span className={styles.crossIcon}>+</span>
          </p>
        </ScrollReveal>
      </section>

      {/* Visión */}
      <section id="vision" className="section-container">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>VISIÓN</h2>
          <p className={styles.executiveContent}>
            La tecnología no es un obstáculo, es multiplicador de resultados. Utilizo matemáticas, ingeniería de software y análisis financiero para <strong>ahorrar recursos, transparentar procesos y escalar proyectos reales.</strong>
          </p>
        </ScrollReveal>
      </section>

      {/* Soluciones Tecnológicas */}
      <section id="soluciones" className="section-container">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>SOLUCIONES <span className={styles.crossIcon}>X</span></h2>
        </ScrollReveal>
        <div className={styles.minimalGrid}>
          
          <ScrollReveal delay={100}>
            <div className={styles.rawBox}>
              <h3 className={styles.minimalCardTitle}>+ IA & AUTOMATIZACIÓN</h3>
              <p className={styles.minimalCardDesc}>Desarrollo de algoritmos de inteligencia artificial para procesar datos masivos y eliminar tareas repetitivas.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.rawBox}>
              <h3 className={styles.minimalCardTitle}>+ PLATAFORMAS WEB</h3>
              <p className={styles.minimalCardDesc}>Sistemas integrales enfocados en rendimiento, escalabilidad y soportar alto volumen de tráfico.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className={styles.rawBox}>
              <h3 className={styles.minimalCardTitle}>+ ANÁLISIS DE DATOS</h3>
              <p className={styles.minimalCardDesc}>Extracción y visualización de datos estratégicos en tiempo real para respaldar decisiones operativas.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className={styles.rawBox}>
              <h3 className={styles.minimalCardTitle}>+ ARQUITECTURA IOT</h3>
              <p className={styles.minimalCardDesc}>Integración de sensores de hardware y procesamiento en tiempo real para la industria.</p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Casos de Éxito (Proyectos) */}
      <section id="proyectos" className="section-container">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>PROYECTOS <span className={styles.crossIcon}>+</span></h2>
        </ScrollReveal>

        {/* Proyecto Estrella: AhorraTiempo.pe */}
        <ScrollReveal delay={100}>
          <div className={styles.projectMinimal}>
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle}>AHORRATIEMPO.PE</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag}>STARTUP PROPIA</span>
                <span className={styles.tag}>IA</span>
              </div>
              <p className={styles.projectDesc}>
                Aplicación web diseñada para simplificar trámites en Perú. Integra un asistente virtual inteligente para guiar al usuario y centralizar servicios clave.
              </p>
              <div>
                <Link href="https://ahorratiempo.pe" target="_blank" className={styles.minimalBtn}>
                  VISITAR
                </Link>
              </div>
            </div>
            
            <div className={styles.projectRight}>
              <div className={styles.projectMedia}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/ahorratiempo.mp4" type="video/mp4" />
                  <source src="/videos/ahorratiempo.mkv" type="video/x-matroska" />
                </video>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Proyecto 1: Fiscalización */}
        <ScrollReveal delay={200}>
          <div className={styles.projectMinimal}>
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle}>FISCALIZACIÓN</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag}>APP MÓVIL</span>
                <span className={styles.tag}>SECTOR PÚBLICO</span>
              </div>
              <p className={styles.projectDesc}>
                Plataforma que digitaliza y agiliza auditorías. Valida datos al instante y eleva la transparencia operativa en la gestión de recursos.
              </p>
              <div>
                <Link href="https://github.com/dennys3mf/App-Fiscalizacion-Joya" target="_blank" className={styles.minimalBtn}>
                  CÓDIGO
                </Link>
              </div>
            </div>
            <div className={styles.projectRight}>
              <div className={styles.projectMedia}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/app-fiscalizacion.mp4" type="video/mp4" />
                  <source src="/videos/app-fiscalizacion.mkv" type="video/x-matroska" />
                </video>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Proyecto 2 */}
        <ScrollReveal delay={200}>
          <div className={styles.projectMinimal}>
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle}>CASCO IOT</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag}>HARDWARE</span>
                <span className={styles.tag}>SEGURIDAD</span>
              </div>
              <p className={styles.projectDesc}>
                Prototipo industrial con sensores en tiempo real diseñado para prevenir accidentes y monitorear trabajadores.
              </p>
              <div>
                <Link href="https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT" target="_blank" className={styles.minimalBtn}>
                  CÓDIGO
                </Link>
              </div>
            </div>
            <div className={styles.projectRight}>
              <div className={styles.projectMedia}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/casco-inteligente.mp4" type="video/mp4" />
                  <source src="/videos/casco-inteligente.mkv" type="video/x-matroska" />
                </video>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </section>

      {/* Contacto */}
      <section id="contacto" className={`section-container ${styles.contactSection}`}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>CONTACTO</h2>
          
          <div className={styles.contactLinks}>
            <a href="mailto:dennys.marquez.dev@gmail.com" className={styles.contactLink}>EMAIL <span className={styles.crossIcon}>X</span></a>
            <a href="https://wa.me/51922466078" target="_blank" className={styles.contactLink}>WHATSAPP <span className={styles.crossIcon}>+</span></a>
            <a href="https://github.com/dennys3mf" target="_blank" className={styles.contactLink}>GITHUB <span className={styles.crossIcon}>X</span></a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
