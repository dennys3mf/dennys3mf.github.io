import styles from "./page.module.css";
import Link from "next/link";
import ParticleNetwork from "../components/ParticleNetwork";
import ScrollReveal from "../components/ScrollReveal";
import SpotlightCard from "../components/SpotlightCard";
import { BrainCircuit, AppWindow, BarChart3, Building2, Smartphone, ShieldCheck, Mail, Phone, GitBranch, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Fondo Aurora estilo Nitro (más sutil) */}
      <div className={styles.auroraBg}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
      </div>

      {/* Navbar de alto contraste */}
      <nav className={`${styles.navbar}`}>
        <div style={{ fontWeight: 800, letterSpacing: "-0.02em", fontSize: "1.2rem", color: "var(--header-primary)" }}>D. MARQUEZ</div>
        <div className={styles.navLinks}>
          <a href="#vision">Visión</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#proyectos">Casos de Éxito</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* Hero Interactivo (Canvas Red Neuronal/Datos) */}
      <section className={styles.hero}>
        <div className={styles.heroCanvas}>
          <ParticleNetwork />
        </div>
        
        {/* Stickers Flotantes Estilo Discord */}
        <div className={`${styles.sticker} ${styles.sticker1}`}>💻</div>
        <div className={`${styles.sticker} ${styles.sticker2}`}>📊</div>
        <div className={`${styles.sticker} ${styles.sticker3}`}>🚀</div>

        <ScrollReveal delay={100}>
          <h1 className={styles.heroName}>
            Dennys Gabriel<br />Marquez Flores
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className={styles.heroSubtitle}>
            <span className={styles.highlight}>Desarrollador de software versátil y estudiante de Contabilidad.</span><br/><br/>
            Construyo soluciones inteligentes, arquitecturas escalables y algoritmos matemáticos adaptados a cualquier tipo de proyecto: desde la gestión pública hasta el sector privado, finanzas y startups. Combino el análisis contable con la tecnología pura.
          </p>
        </ScrollReveal>
      </section>

      {/* Visión */}
      <section id="vision" className="section-container">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Visión y Valor</h2>
          <p className={styles.executiveContent}>
            La tecnología no debe ser un obstáculo, sino un multiplicador de resultados. Ya sea analizando costos financieros o creando infraestructuras complejas, utilizo matemáticas aplicadas y desarrollo de software ágil para <strong>ahorrar recursos, transparentar procesos y hacer crecer negocios e instituciones.</strong>
          </p>
        </ScrollReveal>
      </section>

      {/* Soluciones Tecnológicas con Spotlight */}
      <section id="soluciones" className="section-container">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Soluciones Tecnológicas</h2>
        </ScrollReveal>
        <div className={styles.minimalGrid}>
          
          <ScrollReveal delay={100}>
            <SpotlightCard>
              <h3 className={styles.minimalCardTitle}><BrainCircuit size={24} color="var(--primary)" /> Automatización e IA</h3>
              <p className={styles.minimalCardDesc}>Desarrollo de algoritmos de inteligencia artificial para procesar datos masivos, detectar patrones financieros y eliminar tareas manuales repetitivas en cualquier empresa.</p>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <SpotlightCard>
              <h3 className={styles.minimalCardTitle}><AppWindow size={24} color="var(--primary)" /> Plataformas Escalables</h3>
              <p className={styles.minimalCardDesc}>Sistemas web integrales y aplicaciones móviles robustas enfocadas en la experiencia del usuario y en soportar un alto volumen de tráfico e interacciones.</p>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <SpotlightCard>
              <h3 className={styles.minimalCardTitle}><BarChart3 size={24} color="var(--primary)" /> Análisis y Contabilidad</h3>
              <p className={styles.minimalCardDesc}>Gracias a mis estudios en contabilidad, extraigo y visualizo datos estratégicos en tiempo real para respaldar decisiones presupuestales y optimizar el flujo de caja.</p>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <SpotlightCard>
              <h3 className={styles.minimalCardTitle}><Building2 size={24} color="var(--primary)" /> Soluciones a Medida</h3>
              <p className={styles.minimalCardDesc}>Ingeniería de software adaptable a cualquier sector: desde startups que nacen de una idea hasta instituciones públicas que requieren modernización urgente.</p>
            </SpotlightCard>
          </ScrollReveal>

        </div>
      </section>

      {/* Casos de Éxito (Proyectos) */}
      <section id="proyectos" className="section-container">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Casos de Éxito y Proyectos</h2>
        </ScrollReveal>

        {/* Proyecto Estrella: AhorraTiempo.pe */}
        <ScrollReveal delay={100}>
          <div className={styles.projectMinimal} style={{ paddingBottom: "5rem", marginBottom: "1rem" }}>
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle}>AhorraTiempo.pe</h3>
              <div className={styles.projectTags}>
                <span className={`${styles.tag} ${styles.pulseTag}`}>Startup Propia</span>
                <span className={styles.tag} style={{ background: "#2b2d31", border: "1px solid #1e1f22" }}><BrainCircuit size={14} /> Inteligencia Artificial</span>
              </div>
              <p className={styles.projectDesc}>
                <strong>Plataforma Ciudadana:</strong> Una aplicación web masiva e innovadora diseñada para unificar y simplificar los trámites en el Perú. Integra un asistente virtual inteligente para guiar al usuario, reduciendo la fricción burocrática y centralizando servicios clave.
              </p>
              <div>
                <Link href="https://ahorratiempo.pe" target="_blank" className={styles.minimalBtn}>
                  <ExternalLink size={18} /> Visitar Plataforma
                </Link>
              </div>
            </div>
            
            <div className={styles.projectRight}>
              <div className={styles.projectMedia}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/ahorratiempo.mp4" type="video/mp4" />
                  <source src="/videos/ahorratiempo.mkv" type="video/x-matroska" />
                  <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
                    [ Video AhorraTiempo.pe ]<br />
                    <span style={{ fontSize: "0.8rem" }}>(Falta subir archivo o formato no soportado)</span>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Proyecto 1: Fiscalización */}
        <ScrollReveal delay={200}>
          <div className={styles.projectMinimal}>
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle}>App de Fiscalización</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag} style={{ background: "#2b2d31", border: "1px solid #1e1f22" }}><Building2 size={14} /> Sector Público</span>
                <span className={styles.tag} style={{ background: "#2b2d31", border: "1px solid #1e1f22" }}><Smartphone size={14} /> App Móvil</span>
              </div>
              <p className={styles.projectDesc}>
                Plataforma móvil que digitaliza y agiliza las auditorías e inspecciones. Permite validar datos al instante, registrar actividades de forma segura y elevar la transparencia operativa en la gestión de recursos institucionales.
              </p>
              <div>
                <Link href="https://github.com/dennys3mf/App-Fiscalizacion-Joya" target="_blank" className={`${styles.minimalBtn} ${styles.secondaryBtn}`}>
                  <GitBranch size={18} /> Ver Repositorio
                </Link>
              </div>
            </div>
            <div className={styles.projectRight}>
              <div className={styles.projectMedia}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/app-fiscalizacion.mp4" type="video/mp4" />
                  <source src="/videos/app-fiscalizacion.mkv" type="video/x-matroska" />
                  <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
                    [ Video App Fiscalización ]
                  </div>
                </video>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Proyecto 2 */}
        <ScrollReveal delay={200}>
          <div className={styles.projectMinimal}>
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle}>Red IoT de Seguridad</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag} style={{ background: "#2b2d31", border: "1px solid #1e1f22" }}>Hardware & Software</span>
                <span className={styles.tag} style={{ background: "#2b2d31", border: "1px solid #1e1f22" }}><ShieldCheck size={14} /> Sensores IoT</span>
              </div>
              <p className={styles.projectDesc}>
                <strong>Casco Inteligente Industrial:</strong> Prototipo funcional que integra sensores de hardware y procesamiento de software en tiempo real. Diseñado para prevenir accidentes y monitorear la seguridad de trabajadores en el campo o la mina.
              </p>
              <div>
                <Link href="https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT" target="_blank" className={`${styles.minimalBtn} ${styles.secondaryBtn}`}>
                  <GitBranch size={18} /> Ver Repositorio
                </Link>
              </div>
            </div>
            <div className={styles.projectRight}>
              <div className={styles.projectMedia}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/casco-inteligente.mp4" type="video/mp4" />
                  <source src="/videos/casco-inteligente.mkv" type="video/x-matroska" />
                  <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
                    [ Video Casco Inteligente ]
                  </div>
                </video>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </section>

      {/* Contacto */}
      <section id="contacto" className={styles.contactSection}>
        <ScrollReveal>
          <h2 className={styles.contactTitle}>Trabajemos Juntos</h2>
          <p className={styles.executiveContent} style={{marginBottom: "3rem"}}>
            Estoy listo para aportar soluciones de software escalables y visión estratégica a tu equipo.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:dennys.marquez.dev@gmail.com" className={styles.contactLink}><Mail size={20} color="var(--primary)" /> Correo Electrónico</a>
            <a href="https://wa.me/51922466078" target="_blank" className={styles.contactLink}><Phone size={20} color="var(--primary)" /> WhatsApp</a>
            <a href="https://github.com/dennys3mf" target="_blank" className={styles.contactLink}><GitBranch size={20} color="var(--primary)" /> GitHub</a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
