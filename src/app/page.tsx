import styles from "./page.module.css";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import GlobalCursor from "../components/GlobalCursor";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalCursor />
      
      {/* Navbar Estilo Xiaomi / Temas */}
      <nav className={`${styles.navbar}`}>
        <div className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          D. MARQUEZ
          <img src="https://flagcdn.com/pe.svg" alt="Perú" width="20" style={{ borderRadius: '2px' }} title="Desarrollador de Perú" />
        </div>
        <div className={styles.navLinks}>
          <a href="#soluciones">Soluciones</a>
          <a href="#proyectos">Casos de Éxito</a>
          <a href="#contacto">Contacto</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Claro */}
      <section className={styles.hero}>
        <ScrollReveal delay={100}>
          <h1 className={styles.heroName}>
            Dennys Marquez
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <p className={styles.heroSubtitle}>
            Desarrollador de Software & Estudiante de Contabilidad
          </p>
        </ScrollReveal>
      </section>

      {/* Visión */}
      <section id="vision" className={`section-container ${styles['section-container']}`}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Visión Estratégica</h2>
          <p className={styles.executiveContent}>
            La tecnología no es un obstáculo, es multiplicador de resultados. Utilizo matemáticas, ingeniería de software y análisis financiero para <strong>ahorrar recursos, transparentar procesos y escalar proyectos.</strong>
          </p>
        </ScrollReveal>
      </section>

      {/* Soluciones Tecnológicas */}
      <section id="soluciones" className={`section-container ${styles['section-container']}`}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Soluciones</h2>
        </ScrollReveal>
        <div className={styles.minimalGrid}>
          
          <ScrollReveal delay={100}>
            <div className={styles.rawBox}>
              <h3 className={styles.minimalCardTitle}>
                IA & Automatización
              </h3>
              <p className={styles.minimalCardDesc}>Desarrollo de algoritmos de inteligencia artificial para procesar datos masivos y eliminar tareas manuales y repetitivas.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.rawBox}>
              <h3 className={styles.minimalCardTitle}>
                Plataformas Web
              </h3>
              <p className={styles.minimalCardDesc}>Sistemas integrales enfocados en rendimiento, usabilidad y escalabilidad para soportar un alto volumen de tráfico.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className={styles.rawBox}>
              <h3 className={styles.minimalCardTitle}>
                Análisis Financiero
              </h3>
              <p className={styles.minimalCardDesc}>Extracción y visualización de datos estratégicos en tiempo real para respaldar decisiones operativas y de presupuesto.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className={styles.rawBox}>
              <h3 className={styles.minimalCardTitle}>
                Arquitectura IoT
              </h3>
              <p className={styles.minimalCardDesc}>Integración de sensores de hardware y procesamiento en tiempo real para optimizar procesos en la industria y seguridad.</p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Casos de Éxito (Proyectos) */}
      <section id="proyectos" className={`section-container ${styles['section-container']}`}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Proyectos</h2>
        </ScrollReveal>

        {/* Proyecto Estrella: AhorraTiempo.pe */}
        <ScrollReveal delay={100}>
          <div className={styles.projectMinimal}>
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle}>AhorraTiempo.pe</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag}>STARTUP PROPIA</span>
                <span className={styles.tag}>IA INTELIGENTE</span>
              </div>
              <p className={styles.projectDesc}>
                Aplicación web masiva diseñada para simplificar trámites en el Perú. Integra un asistente virtual inteligente para guiar al ciudadano de manera fluida y sin fricción.
              </p>
              <div>
                <Link href="https://ahorratiempo.pe" target="_blank" className={styles.minimalBtn}>
                  Visitar Plataforma
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
              <h3 className={styles.projectTitle}>Fiscalización</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag}>APP MÓVIL</span>
                <span className={styles.tag}>SECTOR PÚBLICO</span>
              </div>
              <p className={styles.projectDesc}>
                Plataforma que digitaliza auditorías. Valida datos al instante, elimina el papel y eleva la transparencia operativa en la gestión de recursos del estado.
              </p>
              <div>
                <Link href="https://github.com/dennys3mf/App-Fiscalizacion-Joya" target="_blank" className={styles.minimalBtn}>
                  Ver Código
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
              <h3 className={styles.projectTitle}>Casco de Seguridad IoT</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag}>HARDWARE IOT</span>
                <span className={styles.tag}>PREVENCIÓN</span>
              </div>
              <p className={styles.projectDesc}>
                Prototipo industrial con sensores en tiempo real diseñado para prevenir accidentes, monitorear la salud y garantizar la seguridad de trabajadores en la mina.
              </p>
              <div>
                <Link href="https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT" target="_blank" className={styles.minimalBtn}>
                  Ver Código
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
      <section id="contacto" className={`section-container ${styles['section-container']} ${styles.contactSection}`}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          
          <div className={styles.contactLinks}>
            <a href="mailto:dennys.marquez.dev@gmail.com" className={styles.contactLink}>Correo</a>
            <a href="https://wa.me/51922466078" target="_blank" className={styles.contactLink}>WhatsApp</a>
            <a href="https://github.com/dennys3mf" target="_blank" className={styles.contactLink}>GitHub</a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
