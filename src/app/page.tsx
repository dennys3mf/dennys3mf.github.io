import styles from "./page.module.css";
import Link from "next/link";
import ParticleNetwork from "../components/ParticleNetwork";
import ScrollReveal from "../components/ScrollReveal";
import SpotlightCard from "../components/SpotlightCard";
import { BrainCircuit, AppWindow, BarChart3, Building2, Smartphone, ShieldCheck, Mail, Phone, Github, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Textura de Ruido Premium */}
      <div className={styles.noise}></div>

      {/* Fondo Aurora estético y sutil */}
      <div className={styles.auroraBg}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
      </div>

      {/* Navbar de alto contraste */}
      <nav className={`${styles.navbar}`}>
        <div style={{ fontWeight: 700, letterSpacing: "-0.02em", fontSize: "1.2rem" }}>D. MARQUEZ</div>
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
        <ScrollReveal delay={100}>
          <h1 className={styles.heroName}>
            Dennys Gabriel<br />Marquez Flores
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className={styles.heroSubtitle}>
            Especialista en Transformación Digital. <br/>
            Construyendo soluciones inteligentes y algoritmos avanzados para <strong style={{color: "var(--foreground)", fontWeight: 600}}>optimizar la gestión pública y la seguridad ciudadana</strong>.
          </p>
        </ScrollReveal>
      </section>

      {/* Visión */}
      <section id="vision" className="section-container">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Visión y Valor</h2>
          <p className={styles.executiveContent}>
            La tecnología no debe ser complicada; debe ser una herramienta para <strong>ahorrar recursos, transparentar procesos y servir a la ciudadanía.</strong> Utilizo matemáticas aplicadas y arquitectura de software para resolver problemas estructurales en las organizaciones.
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
              <h3 className={styles.minimalCardTitle}><BrainCircuit size={24} /> Automatización Inteligente</h3>
              <p className={styles.minimalCardDesc}>Desarrollo de algoritmos y Machine Learning (IA) para procesar datos masivos, detectar patrones y eliminar tareas manuales repetitivas en las entidades.</p>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <SpotlightCard>
              <h3 className={styles.minimalCardTitle}><AppWindow size={24} /> Plataformas de Gestión</h3>
              <p className={styles.minimalCardDesc}>Sistemas web y aplicaciones móviles robustas enfocadas en la interacción fluida entre el ciudadano, los supervisores y la institución.</p>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <SpotlightCard>
              <h3 className={styles.minimalCardTitle}><BarChart3 size={24} /> Análisis Estratégico de Datos</h3>
              <p className={styles.minimalCardDesc}>Extracción, procesamiento y visualización de datos en tiempo real para respaldar decisiones presupuestales y operativas con precisión matemática.</p>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <SpotlightCard>
              <h3 className={styles.minimalCardTitle}><Building2 size={24} /> Innovación Cívica: AhorraTiempo.pe</h3>
              <p className={styles.minimalCardDesc}>Plataforma tecnológica diseñada desde cero para simplificar trámites gubernamentales, reduciendo drásticamente las colas y los tiempos de espera.</p>
            </SpotlightCard>
          </ScrollReveal>

        </div>
      </section>

      {/* Casos de Éxito (Proyectos) */}
      <section id="proyectos" className="section-container">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Casos de Éxito Gubernamental y Privado</h2>
        </ScrollReveal>

        {/* Proyecto Estrella: AhorraTiempo.pe */}
        <ScrollReveal delay={100}>
          <div className={styles.projectMinimal} style={{ paddingBottom: "5rem", marginBottom: "1rem", position: "relative" }}>
            <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "var(--aurora-1)", filter: "blur(100px)", zIndex: -1, opacity: 0.5, pointerEvents: "none" }}></div>
            
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle} style={{ fontSize: "2.8rem" }}>AhorraTiempo.pe</h3>
              <div className={styles.projectTags}>
                <span className={`${styles.tag} ${styles.pulseTag}`} style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}>Startup Propia (Fundador)</span>
                <span className={styles.tag}><BrainCircuit size={14} /> Inteligencia Artificial</span>
              </div>
            </div>
            <div className={styles.projectRight}>
              <p className={styles.projectDesc}>
                <strong>Startup Tecnológica Propia:</strong> Una plataforma masiva e innovadora diseñada para unificar y simplificar los trámites públicos en el Perú. Integra un asistente de inteligencia artificial para guiar al ciudadano, reduciendo drásticamente la fricción burocrática y centralizando servicios del MTC, RENIEC, MINSA y más en un solo lugar.
              </p>
              <div className={styles.projectMedia} style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/ahorratiempo.mp4" type="video/mp4" />
                  <source src="/videos/ahorratiempo.mkv" type="video/x-matroska" />
                  <div style={{ padding: "2rem", textAlign: "center", color: "var(--foreground)" }}>
                    [ Video AhorraTiempo.pe ]<br />
                    <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>(Falta subir archivo o formato no soportado)</span>
                  </div>
                </video>
              </div>
              <div>
                <Link href="https://ahorratiempo.pe" target="_blank" className={styles.minimalBtn} style={{ background: "var(--foreground)", color: "var(--background)", border: "none" }}>
                  <ExternalLink size={18} /> Visitar Plataforma En Vivo
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Proyecto 1: Fiscalización */}
        <ScrollReveal delay={200}>
          <div className={styles.projectMinimal}>
            <div className={styles.projectLeft}>
              <h3 className={styles.projectTitle}>Sistema de Fiscalización</h3>
              <div className={styles.projectTags}>
                <span className={styles.tag}><Building2 size={14} /> Sector Público</span>
                <span className={styles.tag}><Smartphone size={14} /> App Móvil</span>
              </div>
            </div>
            <div className={styles.projectRight}>
              <p className={styles.projectDesc}>
                <strong>Municipalidad Distrital de La Joya:</strong> Plataforma móvil que digitaliza y agiliza las auditorías de transporte. Permite validar datos al instante, registrar inspecciones de forma segura y elevar la transparencia en la gestión de infracciones.
              </p>
              <div className={styles.projectMedia}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/app-fiscalizacion.mp4" type="video/mp4" />
                  <source src="/videos/app-fiscalizacion.mkv" type="video/x-matroska" />
                  <div style={{ padding: "2rem", textAlign: "center", color: "var(--foreground)" }}>
                    [ Video App Fiscalización ]<br />
                    <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>(Falta subir archivo o formato no soportado)</span>
                  </div>
                </video>
              </div>
              <div>
                <Link href="https://github.com/dennys3mf/App-Fiscalizacion-Joya" target="_blank" className={styles.minimalBtn}>
                  <Github size={18} /> Ver Arquitectura (GitHub)
                </Link>
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
                <span className={styles.tag}>Innovación</span>
                <span className={styles.tag}><ShieldCheck size={14} /> Sensores IoT</span>
              </div>
            </div>
            <div className={styles.projectRight}>
              <p className={styles.projectDesc}>
                <strong>Casco Inteligente Industrial:</strong> Una implementación de hardware y software con sensores en tiempo real que previenen accidentes y monitorean la integridad de los trabajadores de campo.
              </p>
              <div className={styles.projectMedia}>
                <video autoPlay loop muted playsInline>
                  <source src="/videos/casco-inteligente.mp4" type="video/mp4" />
                  <source src="/videos/casco-inteligente.mkv" type="video/x-matroska" />
                  <div style={{ padding: "2rem", textAlign: "center", color: "var(--foreground)" }}>
                    [ Video Casco Inteligente ]<br />
                    <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>(Falta subir archivo o formato no soportado)</span>
                  </div>
                </video>
              </div>
              <div>
                <Link href="https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT" target="_blank" className={styles.minimalBtn}>
                  <Github size={18} /> Ver Arquitectura (GitHub)
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </section>

      {/* Contacto */}
      <section id="contacto" className={styles.contactSection}>
        <ScrollReveal>
          <h2 className={styles.contactTitle}>Lideremos la Modernización</h2>
          <p className={styles.executiveContent} style={{marginBottom: "3rem"}}>
            Estoy listo para aportar soluciones escalables y seguras a tu institución.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:dennys.marquez.dev@gmail.com" className={styles.contactLink}><Mail size={20} /> dennys.marquez.dev@gmail.com</a>
            <a href="https://wa.me/51922466078" target="_blank" className={styles.contactLink}><Phone size={20} /> Llamada Directa: +51 922 466 078</a>
            <a href="https://github.com/dennys3mf" target="_blank" className={styles.contactLink}><Github size={20} /> Perfil Técnico (GitHub)</a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
