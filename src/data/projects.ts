export type ProjectStatus = "live" | "in-progress" | "concept";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: "saas-ai" | "fintech" | "cloud-enterprise" | "mobile-iot";
  categoryLabel: { en: string; es: string };
  summary: { en: string; es: string };
  role: { en: string; es: string };
  year: number;
  technologies: string[];
  coverImage: string;
  video?: string;
  gallery?: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  metrics: Array<{ label: { en: string; es: string }; value: string }>;
  problem: { en: string; es: string };
  goalsConstraints: { en: string; es: string };
  approach: { en: string; es: string };
  solution: { en: string; es: string };
  engineeringDecisions: {
    architecture: { en: string; es: string };
    apisAndState: { en: string; es: string };
    dataPersistence: { en: string; es: string };
    performanceAndSecurity: { en: string; es: string };
  };
  resultsLearnings: {
    measuredResults?: { en: string; es: string };
    verifiableFeatures: { en: string; es: string };
    learnings: { en: string; es: string };
    whatIWouldChange?: { en: string; es: string };
  };
  nextSteps: { en: string; es: string };
}

export const PROJECTS: Project[] = [
  {
    slug: "ahorratiempo",
    title: "AhorraTiempo — AI-Assisted Citizen Paperwork Platform with Voice Guidance & Payments",
    shortTitle: "ahorratiempo.pe",
    category: "saas-ai",
    categoryLabel: {
      en: "AI SaaS & Citizen Tech",
      es: "SaaS con IA & Tecnología Ciudadana",
    },
    summary: {
      en: "A live consumer platform providing automated, voice-assisted guidance for complex Peruvian administrative procedures and appointment scheduling, backed by secure digital checkout.",
      es: "Plataforma pública en producción comercial que automatiza trámites burocráticos y agendamiento de citas en Perú, integrando asistencia por voz con IA y pagos digitales.",
    },
    role: {
      en: "Founder & Full Stack AI Engineer",
      es: "Fundador & Ingeniero Full Stack con IA",
    },
    year: 2024,
    status: "live",
    featured: true,
    technologies: [
      "React 18",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Voice AI",
      "Culqi Payments API",
      "PostgreSQL",
      "Cloudflare",
    ],
    coverImage: "/images/projects/ahorratiempo-preview.webp",
    video: "/videos/ahorratiempo.mp4",
    liveUrl: "https://ahorratiempo.pe",
    metrics: [
      {
        label: { en: "Service Status", es: "Estado de Servicio" },
        value: "Active in Production",
      },
      {
        label: { en: "Voice Streaming Latency", es: "Latencia de Voz" },
        value: "< 450 ms",
      },
      {
        label: { en: "Paperless Flow", es: "Flujo Digital" },
        value: "100% Digital",
      },
      {
        label: { en: "Checkout Completion", es: "Tasa de Cobro" },
        value: "99.8%",
      },
    ],
    problem: {
      en: "Public entity procedures in Peru are notoriously confusing, dispersed across outdated portals, and require hours of manual queueing. Users needed a conversational, reliable guidance assistant capable of answering questions in natural Peruvian Spanish, verifying requirements, and collecting processing fees digitally without technical friction.",
      es: "Los trámites gubernamentales en Perú son engorrosos, dispersos y demandan largas horas en colas físicas. Los ciudadanos requerían un asistente conversacional capaz de guiarlos en lenguaje natural, validar requisitos previos y gestionar pagos de aranceles de forma segura y sin fricción técnica.",
    },
    goalsConstraints: {
      en: "Primary goals: Deliver sub-second voice synthesis responses, achieve mobile-first compatibility on entry-level Android devices, and ensure payment webhooks are strictly idempotent to prevent duplicate billing over flaky mobile connections.",
      es: "Objetivos clave: Entregar respuestas por voz sintetizada en menos de un segundo, garantizar compatibilidad fluida en teléfonos móviles de gama de entrada, y asegurar idempotencia estricta en webhooks de pago ante conexiones intermitentes.",
    },
    approach: {
      en: "I focused on human-centered ergonomics: simplifying complex state legislation into bite-sized conversational flows, combining Voice AI with visual confirmation cards, and designing a single-screen checkout process that builds immediate trust.",
      es: "Abordé el producto desde la ergonomía humana: desglosando normativas legales complejas en flujos conversacionales claros, combinando IA de voz con tarjetas visuales de confirmación y un proceso de pago de un solo paso que transmite total confianza.",
    },
    solution: {
      en: "Engineered an end-to-end Next.js application where citizens can search for their paperwork, speak directly to the voice assistant, receive auditable step-by-step instructions, and pay processing fees via Culqi tokenized payments in under 3 minutes.",
      es: "Construcción de una aplicación web completa en Next.js donde los ciudadanos consultan su trámite, interactúan por voz o texto con el asistente de IA, reciben instrucciones auditables y pagan tasas oficiales mediante pasarela Culqi en menos de 3 minutos.",
    },
    engineeringDecisions: {
      architecture: {
        en: "Server-Side Rendered architecture with Next.js 14 and TypeScript, deployed behind Cloudflare Edge for global caching and sub-second Time to First Byte (TTFB).",
        es: "Arquitectura Server-Side Rendered con Next.js 14 y TypeScript, desplegada detrás de Cloudflare Edge para caché perimetral y tiempo de respuesta inicial inferior a 250 ms.",
      },
      apisAndState: {
        en: "Custom audio streaming worker capturing audio buffers in small chunks and streaming synthesized audio responses to minimize perceived latency on mobile web browsers.",
        es: "Worker personalizado de streaming de audio que captura fragmentos de audio en búferes ligeros para reproducir respuestas sintetizadas con latencia percibida mínima.",
      },
      dataPersistence: {
        en: "PostgreSQL database with normalized schema for appointment schedules, payment records, and procedure requirement catalogs.",
        es: "Base de datos PostgreSQL con esquema normalizado para citas, registros de transacciones y catálogo auditable de requisitos de trámites.",
      },
      performanceAndSecurity: {
        en: "Idempotent payment webhook consumers, cryptographic signature verification on payment callbacks, and strictly typed input schemas preventing injection.",
        es: "Consumidores de webhooks con llaves de idempotencia, verificación de firma criptográfica en callbacks de Culqi y esquemas de validación fuertemente tipados.",
      },
    },
    resultsLearnings: {
      measuredResults: {
        en: "Reduced average procedure preparation and research time from several days of physical inquiries to under 3 minutes online.",
        es: "Reducción del tiempo de investigación y preparación de trámites de varios días de consultas presenciales a menos de 3 minutos en línea.",
      },
      verifiableFeatures: {
        en: "Live in public production at ahorratiempo.pe with integrated Culqi electronic checkout, responsive mobile UI, and voice-assisted navigation.",
        es: "Operativo en producción pública en ahorratiempo.pe con checkout electrónico Culqi, interfaz móvil adaptada y navegación guiada por voz.",
      },
      learnings: {
        en: "Handling audio input across mobile web browsers requires graceful fallbacks for restricted autoplay policies and microphone permissions.",
        es: "El manejo de audio en navegadores móviles requiere mecanismos de respaldo ante políticas restrictivas de autoplay y permisos de micrófono.",
      },
    },
    nextSteps: {
      en: "Implementing automated WhatsApp appointment reminders and expanding integration with municipal procedure catalogs across regional districts.",
      es: "Integración de recordatorios automatizados de citas vía WhatsApp y ampliación del catálogo hacia trámites de municipios regionales.",
    },
  },
  {
    slug: "billing-engine",
    title: "Billing Engine — Culqi Payment Gateway & SUNAT XML Electronic Invoicing",
    shortTitle: "Billing Engine",
    category: "fintech",
    categoryLabel: {
      en: "Fintech & Fiscal Billing",
      es: "Fintech & Facturación Electrónica",
    },
    summary: {
      en: "Automated payment processing and electronic invoicing service that charges cards via Culqi and instantly generates, signs, and dispatches legally compliant XML tax invoices to Peruvian SUNAT.",
      es: "Motor automatizado de cobros y facturación electrónica que procesa pagos digitales con Culqi y emite, firma digitalmente y valida comprobantes electrónicos ante la SUNAT en segundos.",
    },
    role: {
      en: "Fintech & Backend Systems Developer",
      es: "Desarrollador Backend & Integración Fintech",
    },
    year: 2024,
    status: "live",
    featured: true,
    technologies: [
      "Python 3",
      "Culqi Payments API",
      "SUNAT UBL 2.1 XML",
      "Digital Signature (XMLDSIG)",
      "SOAP Web Services",
      "PostgreSQL",
      "RESTful API",
    ],
    coverImage: "/images/projects/fintech-sunat-preview.webp",
    repositoryUrl: "https://github.com/dennys3mf",
    metrics: [
      {
        label: { en: "Successful Charges", es: "Cobros Exitosos" },
        value: "99.8%",
      },
      {
        label: { en: "Invoices Processed", es: "Facturas Emitidas" },
        value: "2,846",
      },
      {
        label: { en: "XML Signing Latency", es: "Tiempo de Firma" },
        value: "682 ms",
      },
      {
        label: { en: "SUNAT Rejections", es: "Rechazos SUNAT" },
        value: "0.0%",
      },
    ],
    problem: {
      en: "Integrating digital card payments with mandatory electronic invoicing in Peru requires navigating complex SUNAT XML specifications (UBL 2.1), digital certificate signing, and strict tax catalog codes. Businesses faced high third-party SaaS fees and frequent checkout drops due to disjointed billing steps.",
      es: "Integrar pagos digitales con facturación electrónica en Perú suele requerir costosos intermediarios y lidiar con la estricta estructura UBL 2.1 de SUNAT, firmas criptográficas y códigos tributarios específicos. Se necesitaba un motor desacoplado, rápido e independiente para procesar el cobro y la factura en una sola transacción.",
    },
    goalsConstraints: {
      en: "Provide an atomic transactional pipeline where payment failure halts invoice generation, and intermittent SUNAT government server downtime does not freeze or block the customer checkout.",
      es: "Proveer una tubería transaccional atómica donde el fallo del pago detenga la facturación, y las caídas intermitentes de los servidores de SUNAT no congelen ni bloqueen la compra del cliente.",
    },
    approach: {
      en: "Decoupled the architecture into an immediate card tokenization service and an asynchronous queue-based fiscal signing pipeline with exponential backoff and guaranteed delivery.",
      es: "Desacoplé la arquitectura en un servicio inmediato de tokenización de tarjetas y un pipeline asíncrono con colas de mensajería, firma digital y reintentos con respaldo exponencial.",
    },
    solution: {
      en: "A robust Python service that tokenizes payments via Culqi API, dynamically formats compliant OASIS UBL 2.1 XML invoices, signs them with an X.509 PKCS#12 certificate, dispatches via SOAP to SUNAT, and stores certified CDR receipts.",
      es: "Un servicio robusto en Python que tokeniza pagos con Culqi, genera el XML bajo la norma OASIS UBL 2.1, lo firma criptográficamente con certificado digital X.509, lo remite por SOAP a SUNAT y archiva la Constancia de Recepción (CDR).",
    },
    engineeringDecisions: {
      architecture: {
        en: "Microservice-oriented REST API in Python with an asynchronous background worker pool managing XML generation, canonicalization, and SOAP communication.",
        es: "API REST orientada a microservicios en Python con un pool de trabajadores asíncronos que gestionan la generación de XML, canonicalización y comunicación SOAP.",
      },
      apisAndState: {
        en: "Strict validation schema ensuring zero decimal rounding errors in tax calculations (IGV, total taxable base, ISC) before dispatching to government endpoints.",
        es: "Esquema estricto de validación para asegurar cero errores de redondeo decimal en cálculos tributarios (IGV, base imponible, exoneraciones) antes de enviar a SUNAT.",
      },
      dataPersistence: {
        en: "Relational PostgreSQL database logging transaction states, XML payloads, digital hashes, and CDR responses for fiscal auditing.",
        es: "Base de datos relacional PostgreSQL con registro auditable de estados de transacción, payloads XML, hashes de firma y respuestas CDR.",
      },
      performanceAndSecurity: {
        en: "Hardware security and protected file storage for the private cryptographic keys; sub-second XML signing with SHA-256 and RSA.",
        es: "Almacenamiento seguro de llaves criptográficas privadas con permisos restringidos; firma digital en menos de 700 ms con SHA-256 y RSA.",
      },
    },
    resultsLearnings: {
      measuredResults: {
        en: "Processed 2,846 live fiscal invoices with a 0.0% SUNAT rejection rate and average signing turnaround of 682 ms.",
        es: "2,846 comprobantes fiscales emitidos con 0.0% de rechazos en SUNAT y un promedio de firma de 682 ms.",
      },
      verifiableFeatures: {
        en: "Complete workflow from customer credit card charge to verified PDF receipt and certified CDR tax proof in under 2 seconds.",
        es: "Flujo completo desde el débito en tarjeta hasta la generación del PDF y XML con CDR aprobado por SUNAT en menos de 2 segundos.",
      },
      learnings: {
        en: "Handling tax authority downtime requires robust asynchronous retry queues rather than synchronous requests that timeout in front of users.",
        es: "Gestionar la intermitencia de servidores tributarios exige colas asíncronas con persistencia en vez de llamadas síncronas que agotan el tiempo de espera.",
      },
    },
    nextSteps: {
      en: "Adding multi-currency billing (USD / PEN) and automated batch dispatch for high-volume end-of-day electronic billing summaries.",
      es: "Incorporación de cobros multimoneda (USD / PEN) y envío por lotes para resúmenes diarios de comprobantes en alto volumen.",
    },
  },
  {
    slug: "controla-cloud",
    title: "CONTROLA Cloud — Legal IT & Occupational Health Multi-Tenant Compliance Platform",
    shortTitle: "CONTROLA Cloud",
    category: "cloud-enterprise",
    categoryLabel: {
      en: "Cloud Systems & Enterprise IT",
      es: "Sistemas Cloud & TI Corporativa",
    },
    summary: {
      en: "Enterprise SaaS platform managing occupational health and safety (SG-SST) compliance matrices, legal audit trails, and automated regulatory documentation for corporate legal firms.",
      es: "Plataforma SaaS corporativa para gestión de matrices de seguridad y salud en el trabajo (SG-SST), auditorías jurídicas y generación automatizada de expedientes para estudios legales.",
    },
    role: {
      en: "Lead Full Stack Backend Engineer",
      es: "Ingeniero Full Stack & Arquitecto Backend",
    },
    year: 2024,
    status: "live",
    featured: true,
    technologies: [
      "Python 3",
      "Django ORM",
      "PostgreSQL",
      "SG-SST Compliance",
      "Multi-Tenant Isolation",
      "Docker",
      "RESTful API",
    ],
    coverImage: "/images/projects/controla-servilex-preview.webp",
    video: "/videos/controla.mp4",
    repositoryUrl: "https://github.com/dennys3mf",
    metrics: [
      {
        label: { en: "Time Savings", es: "Ahorro de Tiempo" },
        value: "75% Reduction",
      },
      {
        label: { en: "Audit Accuracy", es: "Precisión Legal" },
        value: "100% Traceable",
      },
      {
        label: { en: "Tenant Isolation", es: "Aislamiento Tenant" },
        value: "Multi-Tenant",
      },
      {
        label: { en: "Query Speed", es: "Tiempo de Consulta" },
        value: "< 280 ms",
      },
    ],
    problem: {
      en: "Corporate law firms and industrial companies managed compliance matrices across hundreds of disparate Excel files. Regulatory deadlines were missed, audit histories were vulnerable to tampering, and generating compliance reports for government authorities required days of manual collation.",
      es: "Los estudios jurídicos y empresas industriales gestionaban sus matrices de cumplimiento normativo en cientos de archivos Excel desconectados. Los vencimientos legales se pasaban por alto, el historial de cambios no era auditable y generar reportes oficiales para fiscalización tomaba días de trabajo manual.",
    },
    goalsConstraints: {
      en: "Ensure absolute data isolation between corporate clients, model complex regulatory dependency trees, and export certified inspection-ready reports with one click.",
      es: "Garantizar aislamiento de datos absoluto entre empresas clientes, modelar árboles jerárquicos de normativas legales y exportar expedientes certificados en un solo clic.",
    },
    approach: {
      en: "Engineered a strict multi-tenant data architecture in Python and Django where every query is scoped to the tenant context, combined with an automated rule engine that recomputes compliance status when laws update.",
      es: "Diseñé una arquitectura multi-tenant estricta en Python y Django donde cada consulta se ejecuta en el contexto aislado de la empresa, complementada con un motor de reglas que recalcula el cumplimiento ante cambios normativos.",
    },
    solution: {
      en: "A comprehensive web platform featuring dynamic risk matrices, automated deadline tracking, role-based access control (RBAC), and one-click PDF/Excel certified legal export engines.",
      es: "Una plataforma web integral con matrices dinámicas de riesgo, seguimiento automático de vencimientos, control de accesos basado en roles (RBAC) y exportación certificada a PDF y Excel.",
    },
    engineeringDecisions: {
      architecture: {
        en: "Multi-tenant Django backend with normalized PostgreSQL schema and tenant-aware middleware preventing cross-tenant data leakage.",
        es: "Backend Django multi-tenant con esquema PostgreSQL normalizado y middleware contextual que previene cualquier fuga de datos entre empresas.",
      },
      apisAndState: {
        en: "Hierarchical matrix data structures calculated dynamically in sub-second query pipelines using indexed foreign keys and database transactions.",
        es: "Estructuras jerárquicas de requisitos legales calculadas dinámicamente en consultas sub-segundo con índices optimizados y transacciones atómicas.",
      },
      dataPersistence: {
        en: "PostgreSQL with row-level and schema-level security checks and audit log tables tracking every edit, timestamp, and user signature.",
        es: "PostgreSQL con políticas de seguridad a nivel de datos y tablas de auditoría inmutables que registran cada cambio, fecha y firma de usuario.",
      },
      performanceAndSecurity: {
        en: "Zero cross-tenant vulnerabilities in enterprise security reviews; sub-300ms query latency on complex relational join operations.",
        es: "Cero vulnerabilidades en revisiones de seguridad corporativa; latencia de consulta inferior a 300 ms en joins relacionales complejos.",
      },
    },
    resultsLearnings: {
      measuredResults: {
        en: "Reduced report generation time by 75% for corporate safety managers, ensuring 100% forensic traceability across legal audits.",
        es: "Reducción del 75% en el tiempo de preparación de informes de seguridad y salud, garantizando 100% de trazabilidad forense ante auditorías.",
      },
      verifiableFeatures: {
        en: "Live demonstration video showcasing multi-tenant login, compliance matrix navigation, and instant document generation.",
        es: "Demostración en video con navegación en tiempo real por matrices de cumplimiento, paneles de control y generación instantánea de expedientes.",
      },
      learnings: {
        en: "Designing compliance software requires speaking the exact technical and regulatory language of legal auditors, not just writing clean code.",
        es: "El software de cumplimiento regulatorio requiere dominar la terminología exacta de los auditores legales para diseñar modelos de datos verdaderamente útiles.",
      },
    },
    nextSteps: {
      en: "Adding automated legislative scraping to alert legal officers when new safety regulations are published in official gazettes.",
      es: "Incorporación de scraping legislativo automatizado para alertar a los responsables cuando se promulguen nuevas normas en el diario oficial.",
    },
  },
  {
    slug: "safety-helmet-iot",
    title: "Safety Helmet IoT — Industrial Worker Safety Telemetry & Emergency Broadcast",
    shortTitle: "Safety Helmet IoT",
    category: "mobile-iot",
    categoryLabel: {
      en: "Industrial IoT & Telemetry",
      es: "IoT Industrial & Telemetría",
    },
    summary: {
      en: "Smart industrial safety helmet embedding physical impact detection, toxic gas sensors, and GPS telemetry to protect workers in hazardous mining and construction environments.",
      es: "Casco de seguridad inteligente para faenas mineras y construcción que detecta impactos físicos por golpes o caídas, concentración de gases tóxicos y geolocalización para rescate inmediato.",
    },
    role: {
      en: "Embedded Systems & IoT Backend Developer",
      es: "Desarrollador de Sistemas Embebidos & IoT",
    },
    year: 2024,
    status: "live",
    featured: true,
    technologies: [
      "C++ / Embedded",
      "Arduino Hardware",
      "MQ-2 Gas Sensor",
      "Accelerometer (G-Force)",
      "GPS Telemetry",
      "Python Worker",
      "Realtime Dashboard",
    ],
    coverImage: "/images/projects/safety-helmet-preview.webp",
    video: "/videos/casco-inteligente.mp4",
    repositoryUrl: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
    metrics: [
      {
        label: { en: "Telemetry Rate", es: "Tasa de Muestreo" },
        value: "10 Hz Live",
      },
      {
        label: { en: "Emergency Dispatch", es: "Disparo de Alerta" },
        value: "< 1.5 Seconds",
      },
      {
        label: { en: "Impact Detection", es: "Detección Impacto" },
        value: "3-Axis (X,Y,Z)",
      },
      {
        label: { en: "Gas Monitoring", es: "Gases Tóxicos" },
        value: "MQ-2 Continuous",
      },
    ],
    problem: {
      en: "In subterranean mining and heavy construction, worker injuries from rockfalls or toxic gas leaks often go undetected until it is too late. Supervisors needed an automated telemetry system to receive instant emergency alerts with coordinates.",
      es: "En minería subterránea y construcción, los accidentes por caída de material o acumulación de gases peligrosos ocurren sin aviso inmediato. Los supervisores requerían un sistema que alerte al centro de control al instante con la ubicación exacta del operario.",
    },
    goalsConstraints: {
      en: "Ensure real-time alert trigger in under 2 seconds, eliminate false alarms from ordinary construction vibrations, and keep power consumption low.",
      es: "Garantizar disparo de alerta en menos de 2 segundos, filtrar falsos positivos causados por vibraciones de obra y mantener bajo consumo energético.",
    },
    approach: {
      en: "Combined low-level C++ embedded signal processing with a Python telemetry listener that syncs live hardware events directly to a centralized supervision database.",
      es: "Combiné procesamiento de señales en C++ sobre microcontrolador con un listener en Python que ingesta la telemetría y actualiza la base de control en tiempo real.",
    },
    solution: {
      en: "A working physical prototype integrating a 3-axis accelerometer for sudden G-force decelerations, MQ-2 analog sensor for flammable and toxic gas detection, and a GPS module broadcasting emergency alerts via serial radio telemetry.",
      es: "Un prototipo físico operativo que integra acelerómetro de 3 ejes para registrar caídas o golpes bruscos, sensor analógico MQ-2 calibrado para gases y módulo GPS que transmite alertas de emergencia.",
    },
    engineeringDecisions: {
      architecture: {
        en: "Embedded microcontroller firmware in C++ communicating over serial packet protocol with a backend Python telemetry ingestion pipeline.",
        es: "Firmware en C++ sobre microcontrolador con protocolo serial empaquetado y worker de ingestión en Python.",
      },
      apisAndState: {
        en: "Digital threshold filtering on accelerometer raw values to prevent false triggers caused by standard power tools.",
        es: "Filtrado digital de umbrales sobre datos crudos de aceleración para ignorar vibraciones mecánicas habituales en obra.",
      },
      dataPersistence: {
        en: "High-frequency time-series event storage recording ambient gas PPM and impact events with GPS coordinate timestamps.",
        es: "Registro temporal de eventos de alta frecuencia que almacena concentración de gases PPM y caídas con marca GPS.",
      },
      performanceAndSecurity: {
        en: "Sub-1.5 second alert turnaround from physical impact to database record update.",
        es: "Tiempo de respuesta inferior a 1.5 segundos desde el impacto físico hasta el registro en la base de datos.",
      },
    },
    resultsLearnings: {
      measuredResults: {
        en: "Demonstrated automated alert dispatch in under 1.5 seconds in live video testing.",
        es: "Validado en video con disparo automatizado de alertas de emergencia en menos de 1.5 segundos.",
      },
      verifiableFeatures: {
        en: "Live demonstration video showing serial console stream and instant database synchronization.",
        es: "Demostración en video con monitor serial en tiempo real y sincronización inmediata con la base de datos.",
      },
      learnings: {
        en: "IoT engineering requires tight calibration between hardware noise filters and software thresholds to prevent alert fatigue.",
        es: "La ingeniería IoT exige calibración rigurosa entre el filtrado analógico de hardware y los umbrales de software para evitar fatiga de alertas.",
      },
    },
    nextSteps: {
      en: "Miniaturizing the circuit board onto a custom PCB with LoRaWAN wireless mesh networking for deep subterranean shafts.",
      es: "Miniaturización del circuito en PCB a medida e integración de red inalámbrica mallada LoRaWAN para túneles subterráneos.",
    },
  },
  {
    slug: "chansa-app",
    title: "CHANSA — On-Demand Mobile Marketplace for Verified Home Contractors",
    shortTitle: "CHANSA App",
    category: "mobile-iot",
    categoryLabel: {
      en: "Mobile App & Marketplace",
      es: "App Móvil & Marketplace",
    },
    summary: {
      en: "On-demand mobile marketplace connecting homeowners and businesses with verified trade contractors, featuring real-time chat, location-based matching, and direct job scheduling.",
      es: "Marketplace móvil bajo demanda que conecta a propietarios y empresas con técnicos certificados, con chat en tiempo real, geolocalización y cotizaciones directas.",
    },
    role: {
      en: "Mobile App Architect & Flutter Developer",
      es: "Arquitecto Móvil & Desarrollador Flutter",
    },
    year: 2024,
    status: "in-progress",
    featured: false,
    technologies: [
      "Flutter 3",
      "Dart",
      "Firebase Firestore",
      "Firebase Auth",
      "Google Geolocation API",
      "BLoC Pattern",
      "Push Notifications",
    ],
    coverImage: "/images/projects/chansa-app-preview.webp",
    repositoryUrl: "https://github.com/dennys3mf",
    metrics: [
      {
        label: { en: "Framerate", es: "Fluidez de Render" },
        value: "60 FPS Native",
      },
      {
        label: { en: "Chat Latency", es: "Latencia de Chat" },
        value: "< 180 ms",
      },
      {
        label: { en: "Codebase Reuse", es: "Reutilización Código" },
        value: "95% iOS/Android",
      },
      {
        label: { en: "Search Precision", es: "Radio de Búsqueda" },
        value: "GPS Radius",
      },
    ],
    problem: {
      en: "Informal trade services in Latin America suffer from low trust and lack of credential verification. Users needed an intuitive app to find verified nearby technicians with clear pricing and secure messaging.",
      es: "El sector de oficios y servicios técnicos en Latinoamérica opera con desconfianza. Se requería una aplicación moderna para encontrar técnicos verificados por cercanía GPS con cotizaciones transparentes.",
    },
    goalsConstraints: {
      en: "Build a single performant codebase for iOS and Android maintaining 60 FPS scrolling and offline message synchronization in low-signal areas.",
      es: "Construir una base de código única para iOS y Android que mantenga 60 FPS y sincronice mensajes en áreas con señal intermitente.",
    },
    approach: {
      en: "Architected the application using Flutter and the BLoC pattern, separating UI components from business logic, and backed by reactive Firebase Firestore listeners.",
      es: "Diseñé la aplicación en Flutter bajo el patrón BLoC, desacoplando la interfaz de la lógica de negocio, con sincronización reactiva en Firebase Firestore.",
    },
    solution: {
      en: "Cross-platform mobile application featuring contractor profiles, live location radius queries, peer-to-peer real-time messaging, and service scheduling.",
      es: "Aplicación móvil multiplataforma con perfiles de contratistas, consultas geoespaciales por radio, mensajería en tiempo real y agendamiento de servicios.",
    },
    engineeringDecisions: {
      architecture: {
        en: "Clean BLoC (Business Logic Component) architecture in Dart ensuring state transitions are predictable and testable.",
        es: "Arquitectura limpia BLoC en Dart para garantizar transiciones de estado predecibles y testeables.",
      },
      apisAndState: {
        en: "Reactive Firestore streams for live chat and push notifications via Firebase Cloud Messaging.",
        es: "Streams reactivos de Firestore para mensajería y notificaciones push con Firebase Cloud Messaging.",
      },
      dataPersistence: {
        en: "Local Firestore cache allowing users to review messages, profiles, and past orders without active network.",
        es: "Caché local de Firestore para revisar cotizaciones, mensajes y perfiles incluso sin conexión activa.",
      },
      performanceAndSecurity: {
        en: "Lazy-loaded image caches and memory optimization maintaining 60 FPS frame rates during heavy list scrolling.",
        es: "Carga perezosa de avatares e imágenes en memoria para sostener 60 FPS constantes en listas extensas.",
      },
    },
    resultsLearnings: {
      verifiableFeatures: {
        en: "Production prototype with 95% shared code between iOS and Android, sub-200ms chat latency, and complete onboarding flow.",
        es: "Prototipo funcional con 95% de código compartido entre iOS y Android, latencia de chat inferior a 200 ms y flujo completo de registro.",
      },
      learnings: {
        en: "State management with BLoC scales exceptionally well for complex interactive apps with multiple concurrent asynchronous streams.",
        es: "El patrón BLoC simplifica enormemente la gestión de flujos reactivos concurrentes en aplicaciones móviles complejas.",
      },
    },
    nextSteps: {
      en: "Integrating digital escrow payment handling so fees are released only when customers confirm satisfactory work completion.",
      es: "Integración de pagos en custodia (escrow) para liberar fondos únicamente cuando el cliente apruebe el servicio completado.",
    },
  },
  {
    slug: "fiscalizacion-joya",
    title: "Fiscalización Joya — Offline-First Municipal Field Inspection Tablet App",
    shortTitle: "Fiscalización Joya",
    category: "cloud-enterprise",
    categoryLabel: {
      en: "Civic Tech & Field Inspection",
      es: "Gobierno Digital & Inspección en Campo",
    },
    summary: {
      en: "Offline-first tablet application for municipal field inspectors in La Joya (Arequipa). Captures evidence photos, digital signatures, and geo-stamped audit records 100% offline, auto-syncing upon reconnecting.",
      es: "Aplicación para tablets Android utilizada por inspectores municipales en La Joya (Arequipa). Opera 100% offline con fotos de evidencia, firmas digitales y sincronización automática al conectar.",
    },
    role: {
      en: "Lead Mobile Architect & Developer",
      es: "Líder de Desarrollo Móvil & Arquitectura",
    },
    year: 2024,
    status: "live",
    featured: false,
    technologies: [
      "Flutter 3",
      "Dart",
      "SQLite Local (sqflite)",
      "Offline-First Sync",
      "Camera & Signature SDK",
      "Android Tablet Ergonomics",
      "Municipal DB Sync",
    ],
    coverImage: "/images/projects/fiscalizacion-joya-preview.webp",
    video: "/videos/app-fiscalizacion.mp4",
    repositoryUrl: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
    metrics: [
      {
        label: { en: "Offline Operation", es: "Operación Offline" },
        value: "100% Without Signal",
      },
      {
        label: { en: "Paper Reduction", es: "Ahorro de Papel" },
        value: "Zero Paper Used",
      },
      {
        label: { en: "Processing Turnaround", es: "Tiempo de Trámite" },
        value: "Same-Day Sync",
      },
      {
        label: { en: "Record Loss", es: "Pérdida de Actas" },
        value: "0% Missing Records",
      },
    ],
    problem: {
      en: "Municipal inspectors in La Joya (Arequipa) recorded commercial and zoning audits on paper forms. Large rural areas lacked cellular internet. Paper records frequently suffered from illegibility, lost physical sheets, and took up to two weeks to be manually typed into the central municipal database.",
      es: "Los fiscalizadores de la Municipalidad de La Joya (Arequipa) levantaban actas en papel en zonas rurales sin señal celular. Las actas físicas sufrían de letra ilegible, deterioro por el polvo y tardaban hasta dos semanas en transcribirse manualmente a las computadoras del municipio.",
    },
    goalsConstraints: {
      en: "Achieve 100% offline functionality for continuous multi-hour inspection shifts under direct sunlight, while auto-syncing batches when Wi-Fi is detected at headquarters.",
      es: "Lograr operatividad 100% offline en jornadas prolongadas bajo luz solar directa, sincronizando por lotes al detectar red Wi-Fi en la sede municipal.",
    },
    approach: {
      en: "Designed high-contrast tablet UI ergonomics and a local SQLite database that stores all commercial registries and violation codes on-device, with asynchronous image compression.",
      es: "Diseñé una interfaz de alto contraste optimizada para tablets bajo el sol, con SQLite local que alberga el padrón comercial completo y compresión asíncrona de fotos.",
    },
    solution: {
      en: "A dedicated Android tablet app where inspectors document violations, snap compressed photographic evidence, record digital signatures on glass, and attach verified GPS coordinates without requiring cellular connectivity.",
      es: "Una aplicación para tablets Android donde los fiscalizadores redactan actas, capturan fotografías de evidencia comprimidas, registran firmas digitales en pantalla y sellan coordenadas GPS sin necesidad de internet.",
    },
    engineeringDecisions: {
      architecture: {
        en: "Offline-First architecture with local SQLite database on-device and a deterministic background sync engine.",
        es: "Arquitectura Offline-First con base de datos SQLite en el dispositivo y motor de sincronización determinista en segundo plano.",
      },
      apisAndState: {
        en: "Stateful audit workflow guiding inspectors through mandatory legal checkpoints before generating certified digital act files.",
        es: "Flujo de trabajo guiado que valida puntos de control legales obligatorios antes de generar el acta digital certificada.",
      },
      dataPersistence: {
        en: "Relational SQLite schema storing hundreds of inspection records with binary compressed photo blobs and signature vectors.",
        es: "Esquema relacional SQLite que almacena cientos de actas con imágenes comprimidas y vectores de firma digital.",
      },
      performanceAndSecurity: {
        en: "On-device image downsampling preserving tablet storage; zero record losses across municipal inspection audits.",
        es: "Compresión de imágenes en el dispositivo para no saturar memoria; cero pérdidas de actas durante auditorías municipales.",
      },
    },
    resultsLearnings: {
      measuredResults: {
        en: "Collapsed municipal inspection processing turnaround from 14 days down to same-day Wi-Fi synchronization.",
        es: "Reducción del tiempo de procesamiento municipal de 14 días a sincronización el mismo día.",
      },
      verifiableFeatures: {
        en: "Live demonstration video showing tablet form filling, digital signature capture, and offline persistence.",
        es: "Demostración en video de llenado de actas en tablet, firma digital en pantalla y persistencia offline.",
      },
      learnings: {
        en: "True Offline-First systems must treat local storage as the primary source of truth and the network as a transient synchronization transport.",
        es: "Los sistemas Offline-First reales deben tratar el almacenamiento local como fuente primaria de verdad y la red como un transporte transitorio.",
      },
    },
    nextSteps: {
      en: "Integrating Bluetooth thermal portable printers for instant on-site hard copy delivery to citizens when requested.",
      es: "Integración de impresoras térmicas portátiles por Bluetooth para entrega inmediata de copia física in situ.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
