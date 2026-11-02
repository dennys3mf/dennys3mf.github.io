export interface CaseStudyMetric {
  label: { en: string; es: string };
  value: string;
}

export interface CaseStudyItem {
  index: number;
  slug: string;
  shortTitle: string;
  title: string;
  role: { en: string; es: string };
  timeline: { en: string; es: string };
  type: { en: string; es: string };
  discipline: { en: string; es: string };
  summary: { en: string; es: string };
  video?: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  metrics: CaseStudyMetric[];
  challenge: { en: string; es: string };
  architecture: { en: string; es: string };
  keyHurdles: { en: string; es: string };
  impact: { en: string; es: string };
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    index: 0,
    slug: "ahorratiempo",
    shortTitle: "ahorratiempo.pe",
    title: "ahorratiempo.pe — Plataforma Ciudadana con IA & Pasarela de Pagos",
    role: {
      en: "Founder & Full Stack AI Engineer",
      es: "Fundador & Ingeniero Full Stack con IA",
    },
    timeline: {
      en: "2024 — Active in Production",
      es: "2024 — Activo en Producción",
    },
    type: {
      en: "Public AI SaaS · Commercial Venture",
      es: "SaaS Ciudadano con IA · Emprendimiento Activo",
    },
    discipline: {
      en: "AI Citizen SaaS · Next.js · Voice AI",
      es: "SaaS Ciudadano con IA · Next.js · Voice AI",
    },
    summary: {
      en: "A live consumer platform providing automated, voice-assisted guidance for complex Peruvian public paperwork and appointment scheduling, backed by secure electronic checkout.",
      es: "Plataforma pública en producción que automatiza y simplifica trámites burocráticos y agendamiento de citas en Perú, integrando asistencia por voz con IA y pagos digitales.",
    },
    video: "/videos/ahorratiempo.mp4",
    image: "/images/projects/ahorratiempo-preview.webp",
    liveUrl: "https://ahorratiempo.pe",
    stack: [
      "React 18",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Voice AI",
      "Culqi Payment API",
      "PostgreSQL",
      "Cloudflare CDN",
    ],
    metrics: [
      {
        label: { en: "Service Status", es: "Estado de Servicio" },
        value: "100% Producción",
      },
      {
        label: { en: "Voice Latency", es: "Latencia de Voz" },
        value: "< 450 ms",
      },
      {
        label: { en: "Paperless Flow", es: "Flujo Digital" },
        value: "Cero Papel",
      },
      {
        label: { en: "Payment Success", es: "Tasa de Cobro" },
        value: "99.8%",
      },
    ],
    challenge: {
      en: "Public entity procedures in Peru are notoriously confusing, dispersed across outdated portals, and require hours of manual queueing. Users needed a conversational, reliable guidance assistant capable of answering questions in plain Peruvian Spanish, verifying requirements, and collecting processing fees digitally without technical friction.",
      es: "Los trámites gubernamentales en Perú son engorrosos, dispersos y demandan largas horas en colas físicas. Los ciudadanos requerían un asistente conversacional capaz de guiarlos en lenguaje natural, validar requisitos previos y gestionar pagos de aranceles de forma segura y sin fricción técnica.",
    },
    architecture: {
      en: "Built on Next.js 14 with TypeScript and React 18 using Server-Side Rendering for fast loading and strong SEO. A custom Voice AI interface captures user voice input and returns real-time synthesized guidance. Transactions are handled via Culqi Gateway tokenization with end-to-end webhook validation, persisting audit logs in a secure PostgreSQL database hosted behind Cloudflare Edge.",
      es: "Desarrollado sobre Next.js 14 con TypeScript y React 18, aprovechando Server-Side Rendering para indexación instantánea y velocidad de carga. Un módulo de Voice AI procesa la voz del usuario y entrega instrucciones auditables en tiempo real. Los cobros se procesan mediante Culqi Gateway con webhooks asíncronos y almacenamiento seguro en PostgreSQL protegido tras Cloudflare Edge.",
    },
    keyHurdles: {
      en: "Optimizing browser microphone streaming latency across mobile web browsers, ensuring reliable audio playback on low-end smartphones, and implementing idempotent payment webhooks to prevent duplicate transaction charges under unstable mobile networks.",
      es: "Optimización de la latencia de captura y reproducción de audio en navegadores móviles de gama media y baja, junto con la implementación de idempotencia en los webhooks de pago para evitar cobros duplicados ante caídas de señal en redes móviles.",
    },
    impact: {
      en: "Live in public production at ahorratiempo.pe, reducing average procedure research time from days to under 3 minutes, with an intuitive self-service interface that empowers non-technical users to complete procedures digitally.",
      es: "Actualmente en producción comercial en ahorratiempo.pe, reduciendo el tiempo de investigación y gestión de trámites de días a menos de 3 minutos, permitiendo a usuarios no técnicos resolver sus trámites desde el celular con asistencia interactiva.",
    },
  },
  {
    index: 1,
    slug: "controla-servilex",
    shortTitle: "CONTROLA Cloud",
    title: "CONTROLA — Plataforma Cloud de Gestión Legal IT & Seguridad Laboral",
    role: {
      en: "Lead Full Stack Backend Engineer",
      es: "Ingeniero Full Stack & Arquitecto Backend",
    },
    timeline: {
      en: "Enterprise SaaS Implementation",
      es: "Implementación SaaS Empresarial",
    },
    type: {
      en: "Enterprise Multi-Tenant Cloud System",
      es: "Sistema Cloud Empresarial Multi-Tenant",
    },
    discipline: {
      en: "Enterprise Cloud & Legal IT · Python / Django",
      es: "Plataforma Cloud & Legal IT · Python / Django",
    },
    summary: {
      en: "Enterprise SaaS platform managing occupational health and safety (SG-SST) compliance matrices, legal audit trails, and automated judicial document generation for corporate law firms.",
      es: "Plataforma SaaS corporativa para gestión de matrices de seguridad y salud en el trabajo (SG-SST), auditorías jurídicas y generación automatizada de expedientes legales para estudios corporativos.",
    },
    video: "/videos/controla.mp4",
    image: "/images/projects/controla-servilex-preview.webp",
    githubUrl: "https://github.com/dennys3mf",
    stack: [
      "Python 3",
      "Django ORM",
      "PostgreSQL",
      "SG-SST Normativa",
      "Multi-Tenant Isolation",
      "Docker",
      "RESTful API",
    ],
    metrics: [
      {
        label: { en: "Time Savings", es: "Ahorro de Tiempo" },
        value: "-75% Horas",
      },
      {
        label: { en: "Audit Accuracy", es: "Precisión Legal" },
        value: "100% Trazable",
      },
      {
        label: { en: "Data Isolation", es: "Aislamiento Tenant" },
        value: "Multi-Tenant",
      },
      {
        label: { en: "Query Speed", es: "Tiempo de Consulta" },
        value: "< 280 ms",
      },
    ],
    challenge: {
      en: "Corporate law firms and industrial companies managed compliance matrices across hundreds of disparate Excel files. Regulatory deadlines were missed, audit histories were vulnerable to tampering, and generating compliance reports for government authorities required days of manual collation.",
      es: "Los estudios jurídicos y empresas industriales gestionaban sus matrices de cumplimiento normativo en cientos de archivos Excel desconectados. Los vencimientos legales se pasaban por alto, el historial de cambios no era auditable y generar reportes oficiales para fiscalización tomaba días de trabajo manual.",
    },
    architecture: {
      en: "Engineered a robust multi-tenant backend in Python and Django backed by a normalized PostgreSQL schema with schema-level tenant isolation. Implemented role-based access control (RBAC), automated risk calculation matrices based on Peruvian occupational health regulations, and a document generation engine producing certified PDF/Excel reports.",
      es: "Se diseñó un backend multi-tenant en Python y Django con PostgreSQL normalizado y separación lógica estricta por cliente corporativo. Se implementó control de accesos basado en roles (RBAC), cálculo automático de matrices de riesgo según la Ley de Seguridad y Salud en el Trabajo, y un motor de exportación de expedientes certificados.",
    },
    keyHurdles: {
      en: "Designing recursive dependency trees for legal requirements that dynamically cascade compliance statuses when laws change, while maintaining fast sub-second query execution across deep relational join tables.",
      es: "Modelado relacional de árboles de dependencia jerárquica para normativas legales que recalculan en cascada el estado de cumplimiento ante cambios de ley, manteniendo tiempos de respuesta inferiores a 300 ms en consultas complejas.",
    },
    impact: {
      en: "Cut report generation time by 75%, established tamper-evident audit trails for corporate compliance officers, and successfully passed enterprise security audits with zero data leaks across tenants.",
      es: "Reducción del 75% en las horas dedicadas a la preparación de informes regulatorios, garantizando trazabilidad forense completa de cada cambio y cero incidencias de fuga de información entre empresas clientes.",
    },
  },
  {
    index: 2,
    slug: "chansa-app",
    shortTitle: "CHANSA App",
    title: "CHANSA — Marketplace Móvil de Servicios Profesionales en Tiempo Real",
    role: {
      en: "Mobile App Architect & Flutter Developer",
      es: "Arquitecto Móvil & Desarrollador Flutter",
    },
    timeline: {
      en: "Cross-Platform Production Prototype",
      es: "Prototipo de Producción Multiplataforma",
    },
    type: {
      en: "Cross-Platform Mobile App (iOS & Android)",
      es: "Aplicación Móvil Multiplataforma (iOS & Android)",
    },
    discipline: {
      en: "Cross-Platform Mobile App · Flutter & Dart",
      es: "App Móvil Multiplataforma · Flutter & Dart",
    },
    summary: {
      en: "On-demand mobile marketplace connecting homeowners and businesses with verified trade contractors, featuring real-time chat, location-based matching, and direct job scheduling.",
      es: "Marketplace móvil bajo demanda que conecta a propietarios y empresas con técnicos y profesionales certificados, con chat en tiempo real, geolocalización y cotizaciones directas.",
    },
    image: "/images/projects/chansa-app-preview.webp",
    githubUrl: "https://github.com/dennys3mf",
    stack: [
      "Flutter 3",
      "Dart",
      "Firebase Firestore",
      "Firebase Auth",
      "Google Geolocation API",
      "BLoC Architecture",
      "Push Notifications",
    ],
    metrics: [
      {
        label: { en: "Framerate", es: "Fluidez de Render" },
        value: "60 FPS Nativo",
      },
      {
        label: { en: "Message Latency", es: "Latencia de Chat" },
        value: "< 180 ms",
      },
      {
        label: { en: "Codebase Sharing", es: "Reutilización Código" },
        value: "95% iOS/Android",
      },
      {
        label: { en: "Matching Precision", es: "Radio de Búsqueda" },
        value: "GPS Cercano",
      },
    ],
    challenge: {
      en: "Informal trade services in Latin America suffer from low trust, lack of credential verification, and clumsy communication over personal messaging apps. Users required an Uber-like experience for finding nearby electricians, plumbers, and technicians with clear pricing, reviews, and secure live chat.",
      es: "El sector de oficios y servicios técnicos en Latinoamérica opera con alta informalidad y desconfianza. Se requería una experiencia moderna tipo app de transporte que permitiera encontrar profesionales verificados por cercanía GPS, chatear en tiempo real y acordar cotizaciones transparentes.",
    },
    architecture: {
      en: "Engineered in Flutter & Dart with BLoC state management to ensure clean separation between UI and business logic. Realtime reactive messaging is powered by Firebase Cloud Firestore with offline persistence. Geospatial searches query service providers within custom kilometer radiuses using Google Geolocation APIs.",
      es: "Desarrollada en Flutter & Dart bajo el patrón BLoC para desacoplar la interfaz reactiva de la lógica de negocio. Mensajería instantánea bidireccional soportada en Firebase Cloud Firestore con caché offline local, y consultas geoespaciales por radio de proximidad con Google Maps y Geolocation API.",
    },
    keyHurdles: {
      en: "Handling offline message synchronization when users travel through low-signal areas, eliminating UI frame drops during heavy list scrolling with network-cached avatar images, and managing real-time location stream battery drain.",
      es: "Sincronización fluida de mensajes en áreas con cobertura intermitente, eliminación de caídas de frames durante el scroll mediante carga asíncrona de imágenes en memoria, y optimización del consumo de batería durante la geolocalización en segundo plano.",
    },
    impact: {
      en: "Delivered a single codebase deployed across iOS and Android with 60 FPS performance, sub-200ms message delivery, and a complete onboarding flow ready for commercial scale.",
      es: "Entrega de una arquitectura móvil sólida y unificada con 95% de código compartido entre iOS y Android, latencia de chat inferior a 180 ms y una experiencia visual de alta gama orientada a conversión.",
    },
  },
  {
    index: 3,
    slug: "safety-helmet-iot",
    shortTitle: "Safety Helmet IoT",
    title: "Safety Helmet IoT — Telemetría Industrial & Prevención de Accidentes",
    role: {
      en: "Embedded Systems & IoT Backend Developer",
      es: "Desarrollador de Sistemas Embebidos & IoT",
    },
    timeline: {
      en: "Hardware & Telemetry Prototype",
      es: "Prototipo de Hardware & Telemetría",
    },
    type: {
      en: "Industrial IoT & Hardware Telemetry",
      es: "IoT Industrial & Telemetría en Tiempo Real",
    },
    discipline: {
      en: "Industrial IoT & Telemetry · C++ / Microservices",
      es: "IoT & Telemetría Industrial · C++ / Microservicios",
    },
    summary: {
      en: "Smart industrial safety helmet embedding physical impact detection, toxic gas sensors, and GPS telemetry to protect workers in hazardous mining and construction environments.",
      es: "Casco de seguridad inteligente para minería y construcción que detecta impactos físicos por golpes o caídas, concentración de gases tóxicos y geolocalización para rescate inmediato.",
    },
    video: "/videos/casco-inteligente.mp4",
    image: "/images/projects/safety-helmet-preview.webp",
    githubUrl: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
    stack: [
      "C++ / Embedded",
      "Arduino Hardware",
      "MQ-2 Gas Sensor",
      "Accelerometer (G-Force)",
      "GPS Module",
      "Python Telemetry Worker",
      "Realtime Dashboard",
    ],
    metrics: [
      {
        label: { en: "Telemetry Frequency", es: "Tasa de Muestreo" },
        value: "10 Hz en Vivo",
      },
      {
        label: { en: "Emergency Alert", es: "Disparo de Alerta" },
        value: "< 1.5 Segundos",
      },
      {
        label: { en: "Impact Detection", es: "Detección Impacto" },
        value: "3 Ejes (X,Y,Z)",
      },
      {
        label: { en: "Gas Monitoring", es: "Gases Tóxicos" },
        value: "MQ-2 Continuo",
      },
    ],
    challenge: {
      en: "In subterranean mining, tunnel construction, and heavy industrial facilities, worker injuries from physical impact or toxic gas accumulation (CO, methane) often go undetected until it is too late. Supervisors needed real-time telemetry and automated emergency alerts with precise coordinates.",
      es: "En faenas mineras y túneles de construcción, los accidentes por caída de rocas o intoxicación por gases peligrosos ocurren sin advertencia inmediata, dificultando el auxilio oportuno. Los supervisores de seguridad requerían un sistema que alerte al centro de control al instante con la ubicación exacta del operario.",
    },
    architecture: {
      en: "Hardware module programmed in C++ on embedded microcontrollers interfaced with 3-axis accelerometer/gyroscope sensors to register sudden G-force decelerations, MQ-2 analog sensors to detect gas ppm thresholds, and a GPS unit. A Python background listener ingests serial telemetry packets and syncs alerts directly to a monitoring database.",
      es: "Circuito embebido programado en C++ sobre microcontrolador, integrando acelerómetros de 3 ejes para registrar fuerzas G bruscas (golpes o caída libre), sensor analógico MQ-2 calibrado para umbrales de gases inflamables/tóxicos, y módulo GPS. Un worker en Python ingesta el flujo de datos y actualiza la base de datos de control en vivo.",
    },
    keyHurdles: {
      en: "Signal filtering on raw accelerometer data to prevent false alarms caused by standard construction tool vibrations (jackhammers, drilling), and power efficiency management for continuous multi-hour battery life.",
      es: "Filtrado digital de ruido en la señal del acelerómetro para evitar falsos positivos provocados por vibraciones mecánicas habituales (taladros, maquinaria pesada), y optimización de energía para maximizar la autonomía de la batería.",
    },
    impact: {
      en: "Validated in video proof with real-time serial terminal feed and database updates triggering automated emergency broadcasts in under 1.5 seconds from impact or gas spike detection.",
      es: "Prototipo funcional validado en video con ingesta de datos serial en tiempo real y disparo de eventos de alerta en menos de 1.5 segundos ante impactos físicos o presencia de gas.",
    },
  },
  {
    index: 4,
    slug: "fintech-sunat",
    shortTitle: "Facturación SUNAT",
    title: "Billing Engine — Pasarela de Pagos Culqi & Emisión Fiscal SUNAT",
    role: {
      en: "Fintech & Backend Systems Developer",
      es: "Desarrollador Backend & Integración Fintech",
    },
    timeline: {
      en: "Production Billing Engine",
      es: "Motor de Facturación en Producción",
    },
    type: {
      en: "Fintech & Automated Fiscal Billing",
      es: "Fintech & Facturación Electrónica SUNAT",
    },
    discipline: {
      en: "Fintech & Electronic Billing · Python / SUNAT",
      es: "Fintech & Facturación Electrónica · Python / SUNAT",
    },
    summary: {
      en: "Automated payment processing and electronic invoicing service that charges cards via Culqi and instantly generates, signs, and dispatches legally compliant XML tax invoices to Peruvian SUNAT.",
      es: "Motor automatizado de cobros y facturación electrónica que procesa pagos digitales con Culqi y emite, firma digitalmente y valida comprobantes electrónicos ante la SUNAT en segundos.",
    },
    image: "/images/projects/fintech-sunat-preview.webp",
    githubUrl: "https://github.com/dennys3mf",
    stack: [
      "Python 3",
      "Culqi Payments API",
      "SUNAT UBL 2.1 XML",
      "Digital Signature (XMLDSIG)",
      "SOAP / Web Services",
      "PostgreSQL",
      "RESTful API",
    ],
    metrics: [
      {
        label: { en: "SUNAT Approval", es: "Aprobación SUNAT" },
        value: "100% Válido",
      },
      {
        label: { en: "Invoice Dispatch", es: "Tiempo de Emisión" },
        value: "< 2.0 Segundos",
      },
      {
        label: { en: "Payment Security", es: "Seguridad Culqi" },
        value: "Tokenizado",
      },
      {
        label: { en: "Tax Schema", es: "Estándar Fiscal" },
        value: "UBL 2.1 Oficial",
      },
    ],
    challenge: {
      en: "Integrating digital card payments with mandatory electronic invoicing in Peru requires navigating complex SUNAT XML specifications (UBL 2.1), digital certificate signing, and strict tax catalog codes. Businesses faced high third-party SaaS fees and frequent checkout drops due to disjointed billing steps.",
      es: "Integrar pagos digitales con facturación electrónica en Perú suele requerir costosos intermediarios y lidiar con la estricta estructura UBL 2.1 de SUNAT, firmas criptográficas y códigos tributarios específicos. Se necesitaba un motor desacoplado, rápido e independiente para procesar el cobro y la factura en una sola transacción.",
    },
    architecture: {
      en: "Architected a REST service in Python that validates orders, tokens payments with the Culqi API, and immediately assembles an OASIS UBL 2.1 compliant XML invoice. The XML is cryptographically signed with an X.509 digital certificate (SHA-256 with RSA) and dispatched via secure SOAP web services to SUNAT, receiving and parsing the certified CDR response.",
      es: "Servicio REST en Python que valida la orden comercial, tokeniza el pago con la API de Culqi y construye de inmediato el documento XML bajo el estándar UBL 2.1. El archivo es firmado criptográficamente con certificado X.509 (SHA-256 con RSA) y remitido mediante web services SOAP a la SUNAT, recibiendo y archivando el CDR (Constancia de Recepción) oficial.",
    },
    keyHurdles: {
      en: "Handling intermittent SUNAT server timeouts with exponential backoff queues without freezing user checkout, and strict schema validation preventing rejected tax receipts due to decimal rounding discrepancies.",
      es: "Manejo de timeouts intermitentes de los servidores de SUNAT mediante colas asíncronas con reintento exponencial, evitando que el usuario espere, y validación estricta de redondeo decimal para garantizar cero rechazos tributarios.",
    },
    impact: {
      en: "Complete end-to-end automation from credit card charge to verified tax invoice in under 2 seconds, saving businesses monthly recurring third-party invoicing provider subscriptions.",
      es: "Automatización integral desde el débito en tarjeta hasta la generación del PDF y XML con CDR aprobado por SUNAT en menos de 2 segundos, eliminando intermediarios costosos.",
    },
  },
  {
    index: 5,
    slug: "fiscalizacion-joya",
    shortTitle: "Fiscalización Joya",
    title: "App Fiscalización Digital — Inspección Municipal Offline-First en Tablet",
    role: {
      en: "Lead Mobile Architect & Developer",
      es: "Líder de Desarrollo Móvil & Arquitectura",
    },
    timeline: {
      en: "Municipal Field Implementation",
      es: "Implementación en Terreno Municipal",
    },
    type: {
      en: "Civic Tech · Field Inspection App",
      es: "Gobierno Digital · Inspección en Campo",
    },
    discipline: {
      en: "Field Inspection Tablet App · Flutter / SQLite",
      es: "App de Inspección en Campo · Flutter / SQLite",
    },
    summary: {
      en: "Offline-first tablet application for municipal field inspectors in La Joya (Arequipa). Captures evidence photos, digital signatures, and geo-stamped audit records 100% offline, auto-syncing upon reconnecting.",
      es: "Aplicación para tablets Android utilizada por inspectores municipales en La Joya (Arequipa). Opera 100% offline con fotos de evidencia, firmas digitales y sincronización automática al conectar.",
    },
    video: "/videos/app-fiscalizacion.mp4",
    image: "/images/projects/fiscalizacion-joya-preview.webp",
    githubUrl: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
    stack: [
      "Flutter 3",
      "Dart",
      "SQLite Local (sqflite)",
      "Offline-First Sync",
      "Camera & Signature SDK",
      "Android Tablet Ergonomics",
      "Municipal DB Sync",
    ],
    metrics: [
      {
        label: { en: "Offline Availability", es: "Operación Offline" },
        value: "100% Sin Red",
      },
      {
        label: { en: "Paper Reduction", es: "Ahorro de Papel" },
        value: "Cero Papel",
      },
      {
        label: { en: "Data Processing", es: "Tiempo de Trámite" },
        value: "Mismo Día",
      },
      {
        label: { en: "Record Integrity", es: "Pérdida de Actas" },
        value: "0% Extravío",
      },
    ],
    challenge: {
      en: "Municipal inspectors in La Joya (Arequipa) recorded commercial and zoning audits on paper forms. Large rural areas lacked cellular internet. Paper records frequently suffered from illegibility, lost physical sheets, and took up to two weeks to be manually typed into the central municipal database.",
      es: "Los fiscalizadores de la Municipalidad de La Joya (Arequipa) levantaban actas en papel en zonas rurales donde no existe señal celular. Las actas físicas sufrían de letra ilegible, deterioro por el polvo y tardaban hasta dos semanas en transcribirse manualmente a las computadoras del municipio.",
    },
    architecture: {
      en: "Built in Flutter & Dart optimized specifically for Android tablets. Uses a local SQLite relational database storing commercial registries, violation catalogs, and inspection records on-device. Inspectors take photo evidence, capture citizen digital signatures on-screen, and seal geo-coordinates. A background sync worker uploads differential change sets when Wi-Fi is detected at headquarters.",
      es: "Construida en Flutter & Dart con diseño ergonómico de alto contraste para tablets bajo el sol. Implementa arquitectura Offline-First con base de datos local SQLite (`sqflite`), permitiendo adjuntar fotografías comprimidas, firma digital en pantalla y georreferenciación. Al detectar conexión Wi-Fi municipal, un servicio sincroniza los cambios diferenciales hacia el servidor central.",
    },
    keyHurdles: {
      en: "Engineering dynamic on-device image downsampling to prevent tablets from running out of disk space across hundreds of high-resolution inspection photos, and deterministic differential conflict resolution during batch Wi-Fi sync.",
      es: "Compresión y redimensionamiento inteligente de fotografías en memoria para evitar saturar el almacenamiento de la tablet durante semanas de inspección continua, junto con resolución determinista de conflictos en la sincronización por lotes.",
    },
    impact: {
      en: "Eliminated paper use entirely across municipal inspection teams, collapsed record processing time from 14 days to zero-delay same-day sync, and provided indisputable photographic and GPS audit evidence for municipal enforcement.",
      es: "Eliminación total del papel en fiscalización, reducción del procesamiento de 14 días a sincronización el mismo día y trazabilidad fotográfica y geográfica irrefutable para procedimientos sancionadores municipales.",
    },
  },
];
