export type Language = "en" | "es";

export interface TranslationContent {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    location: string;
    title: string;
    submeta: string;
    motto: string;
    emailAria: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    degreeTitle: string;
    degreeInstitution: string;
    lead1: string;
    lead2: string;
    lead3: string;
    featuredBadge: string;
    featuredHeading: string;
    pRecommenders: string;
    pAiAgents: string;
    pAhorratiempo: string;
    pMobile: string;
    focusPrefix: string;
    focusText: string;
    pillars: Array<{
      title: string;
      desc: string;
    }>;
  };
  services: {
    eyebrow: string;
    heading: string;
    consoleDegree: string;
    consoleRole: string;
    items: string[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    subheading: string;
    categories: {
      all: string;
      aiWeb: string;
      mobile: string;
      cloudSystems: string;
    };
    copyEmail: string;
    copiedEmail: string;
    visitProject: string;
    viewGithub: string;
    projectCounter: string;
    scrollHint: string;
    items: Array<{
      tag: string;
      title: string;
      desc: string;
      metrics: string;
    }>;
  };
  why: {
    eyebrow: string;
    heading: string;
    pillars: Array<{
      title: string;
      desc: string;
    }>;
  };
  contact: {
    headingPart1: string;
    headingHighlight1: string;
    headingPart2: string;
    headingHighlight2: string;
    subtext: string;
    ctaButton: string;
    card1Title: string;
    card1Sub: string;
    card2Title: string;
    card2Sub: string;
    card3Title: string;
    card3Sub: string;
    badgeText: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    connectTitle: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About Me",
      contact: "Contact",
    },
    hero: {
      location: "America / Lima",
      title: "Full Stack Developer | Python, React & AI Integration",
      submeta: "Software Design & Development (TECSUP) · Machine Learning · Cloud Solutions",
      motto: "Building digital products that make an impact.",
      emailAria: "Contact Dennys Marquez via email",
    },
    about: {
      eyebrow: "ABOUT ME",
      heading: "Full Stack Developer & AI Developer",
      degreeTitle: "Professional Technical Degree in Software Design and Development",
      degreeInstitution: "TECSUP",
      lead1:
        "I'm a Full Stack Developer & AI Developer from Peru, with a Professional Technical Degree in Software Design and Development from TECSUP.",
      lead2:
        "I build intelligent web applications, AI-powered solutions, and scalable digital products by combining modern software engineering with machine learning and cloud technologies.",
      lead3:
        "My technical experience includes React, TypeScript, JavaScript, Python, Django, Node.js, Firebase, Cloudflare Workers, and PySpark.",
      featuredBadge: "Full Stack Developer | Python, React & AI Integration",
      featuredHeading: "Full Stack Engineering, Machine Learning & AI Integration",
      pRecommenders:
        "I have worked on machine learning projects involving recommendation systems inspired by platforms such as Netflix and TikTok, exploring how data and algorithms can deliver personalized content experiences.",
      pAiAgents:
        "I'm also experienced in integrating AI-powered chatbots and language models into web applications, and I'm expanding my expertise in AI agents, automation, and intelligent personal assistants.",
      pAhorratiempo:
        "As the founder and developer of ahorratiempo.pe, I built a web platform that helps users access information about government procedures in Peru through modern interfaces and AI-powered assistance.",
      pMobile:
        "My background also includes cross-platform mobile development with Flutter and Dart, REST API integrations, database management, and business process automation. I'm passionate about building practical, high-performance software that connects artificial intelligence, modern web development, and real-world business needs.",
      focusPrefix: "Currently focused on:",
      focusText:
        "Full Stack Engineering, Machine Learning, AI Integration, and intelligent automation.",
      pillars: [
        {
          title: "Full Stack Engineering",
          desc: "Scalable web applications built with React, TypeScript, JavaScript, Python, Django, and Node.js. Serverless edge computing on Cloudflare Workers and Firebase.",
        },
        {
          title: "Machine Learning & Recommenders",
          desc: "Recommendation systems inspired by Netflix and TikTok. High-volume data processing with PySpark and algorithmic content personalization.",
        },
        {
          title: "AI Integration & Agents",
          desc: "Production AI chatbots, LLM integrations, autonomous AI agents with tool calling, and intelligent automation for real-world business operations.",
        },
        {
          title: "Product Founder & Mobile",
          desc: "Founder of ahorratiempo.pe with AI guidance. Cross-platform mobile development with Flutter & Dart, REST APIs, and database engineering.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "Software Engineering & Full Stack Solutions",
      consoleDegree: "Software Design & Dev (TECSUP)",
      consoleRole: "Full Stack Developer | Python, React & AI",
      items: [
        "Full Stack Web Development (React, Next.js & TypeScript)",
        "Machine Learning & Recommendation Systems (PySpark, Python)",
        "AI Chatbots, LLMs & Autonomous Agents (LangChain, OpenAI)",
        "Cross-Platform Mobile Apps (Flutter & Dart)",
        "Cloud Architecture & Serverless APIs (Cloudflare, Django, Node)",
      ],
    },
    projects: {
      eyebrow: "Featured Work",
      heading: "Production Systems & Impactful Products",
      subheading:
        "Explore real-world applications, SaaS platforms, and AI architectures built for global scalability.",
      categories: {
        all: "All Projects",
        aiWeb: "AI & Web SaaS",
        mobile: "Mobile & Flutter",
        cloudSystems: "Cloud & IoT Systems",
      },
      copyEmail: "Copy email",
      copiedEmail: "Copied to clipboard!",
      visitProject: "Visit Live Platform",
      viewGithub: "View Source on GitHub",
      projectCounter: "PROJECT",
      scrollHint: "Scroll or use arrows to navigate in 3D",
      items: [
        {
          tag: "AI Citizen SaaS · React 18 · Voice AI",
          title: "ahorratiempo.pe",
          desc: "Digital platform providing automated assistance for Peruvian government procedures. Features voice AI guidance, interactive scheduling, and secure online payments.",
          metrics: "Live Public Web · 100% Paperless Assistance",
        },
        {
          tag: "Enterprise Legal IT · SG-SST Compliance",
          title: "CONTROLA - SERVILEX",
          desc: "Enterprise management and compliance platform for legal audits, occupational safety matrices, and automated judicial document pipelines.",
          metrics: "Active Enterprise System · Multi-Tenant Cloud",
        },
        {
          tag: "Mobile App · Flutter & Dart · On-Demand",
          title: "CHANSA Mobile App",
          desc: "Cross-platform marketplace connecting service professionals with verified clients, featuring live chat, appointment scheduling, and geolocation.",
          metrics: "iOS & Android Ready · Real-Time Sync",
        },
        {
          tag: "IoT & Safety Telemetry · Microservices",
          title: "Safety Helmet IoT",
          desc: "Industrial safety telemetry system monitoring physical impact force, toxic gas concentrations, and worker GPS position in high-risk environments.",
          metrics: "Real-Time Telemetry · Hardware Sensor Pipeline",
        },
        {
          tag: "Fintech & Billing · SUNAT Invoicing",
          title: "Facturación & Billing Engine",
          desc: "Payment processing engine integrating Culqi checkout gateways and automated electronic invoicing validated with Peruvian SUNAT compliance standards.",
          metrics: "Electronic Invoicing · Instant XML/CDR Approval",
        },
        {
          tag: "Civic Tech · Offline Inspection · Tablet",
          title: "App Fiscalización Digital Joya",
          desc: "Mobile inspection application used for municipal enforcement in Arequipa. Works fully offline with local SQLite and auto-sync when online.",
          metrics: "Offline-First Sync · Municipal Field Work",
        },
      ],
    },
    why: {
      eyebrow: "Why Work With Me",
      heading: "Engineering Rigor Meets Measurable Business Value",
      pillars: [
        {
          title: "End-to-End Full Stack & Cloud Mastery",
          desc: "From responsive frontend interfaces to scalable backend APIs in Python and Node.js. Clean architecture, high performance, and reliable cloud deployments.",
        },
        {
          title: "Applied Machine Learning & AI Integration",
          desc: "Deep knowledge in recommender systems (Netflix/TikTok style) and production-grade LLM integrations that solve concrete user problems without hallucinations.",
        },
        {
          title: "Business ROI & Cost Optimization",
          desc: "Technical excellence backed by an understanding of cost control, cloud inference economics, and real business returns for every software investment.",
        },
      ],
    },
    contact: {
      headingPart1: "Have a",
      headingHighlight1: "project",
      headingPart2: "or",
      headingHighlight2: "opportunity in mind?",
      subtext:
        "Available for roles as Full Stack Developer | Python, React & AI Integration, engineering contracts, and international collaborations.",
      ctaButton: "Let's Connect",
      card1Title: "Full Stack Development",
      card1Sub: "React · TypeScript · Python · Django",
      card2Title: "Python & AI Integration",
      card2Sub: "ML Recommenders · LLMs · Agents",
      card3Title: "Technical Leadership",
      card3Sub: "Architecture · Cloud · Business ROI",
      badgeText: "✦ DENNYS MARQUEZ • FULL STACK DEVELOPER • PYTHON & AI •",
    },
    footer: {
      tagline: "Building digital products that make an impact.",
      navTitle: "Navigation",
      connectTitle: "Connect",
      rights: "All rights reserved. Designed & developed with Next.js, React & Tailwind CSS.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      location: "América / Lima",
      title: "Full Stack Developer | Python, React & AI Integration",
      submeta: "Diseño y Desarrollo de Software (TECSUP) · Machine Learning · Soluciones Cloud",
      motto: "Construyendo productos digitales que generan impacto.",
      emailAria: "Contactar a Dennys Marquez por correo electrónico",
    },
    about: {
      eyebrow: "SOBRE MÍ",
      heading: "Full Stack Developer & AI Developer",
      degreeTitle: "Título Profesional Técnico en Diseño y Desarrollo de Software",
      degreeInstitution: "TECSUP",
      lead1:
        "Soy Desarrollador Full Stack & Desarrollador IA de Perú, con Título Profesional Técnico en Diseño y Desarrollo de Software por TECSUP.",
      lead2:
        "Construyo aplicaciones web inteligentes, soluciones potenciadas con IA y productos digitales escalables combinando ingeniería de software moderna con machine learning y tecnologías cloud.",
      lead3:
        "Mi experiencia técnica incluye React, TypeScript, JavaScript, Python, Django, Node.js, Firebase, Cloudflare Workers y PySpark.",
      featuredBadge: "Full Stack Developer | Python, React & AI Integration",
      featuredHeading: "Ingeniería Full Stack, Machine Learning & Integración de IA",
      pRecommenders:
        "He trabajado en proyectos de machine learning desarrollando sistemas de recomendación inspirados en plataformas como Netflix y TikTok, explorando cómo los datos y algoritmos ofrecen experiencias de contenido personalizadas.",
      pAiAgents:
        "Cuento con experiencia integrando chatbots con IA y modelos de lenguaje en aplicaciones web, y continúo expandiendo mi especialización en agentes de IA, automatización y asistentes personales inteligentes.",
      pAhorratiempo:
        "Como fundador y desarrollador de ahorratiempo.pe, construí una plataforma web que ayuda a la ciudadanía a consultar información de trámites públicos en Perú mediante interfaces modernas y asistencia con IA.",
      pMobile:
        "Mi trayectoria incluye también desarrollo móvil multiplataforma con Flutter y Dart, integraciones de API REST, gestión de bases de datos y automatización de procesos empresariales. Me apasiona crear software práctico y de alto rendimiento que conecta la inteligencia artificial, el desarrollo web moderno y las necesidades reales del negocio.",
      focusPrefix: "Actualmente enfocado en:",
      focusText:
        "Ingeniería Full Stack, Machine Learning, Integración de IA y automatización inteligente.",
      pillars: [
        {
          title: "Ingeniería Full Stack",
          desc: "Arquitecturas web escalables con React, TypeScript, JavaScript, Python, Django y Node.js. Computación serverless en Cloudflare Workers y Firebase.",
        },
        {
          title: "Machine Learning & Recomendadores",
          desc: "Sistemas de recomendación inspirados en Netflix y TikTok. Procesamiento de datos a gran escala con PySpark y algoritmos de personalización.",
        },
        {
          title: "Integración de IA & Agentes",
          desc: "Chatbots de IA en producción, integración de LLMs, agentes autónomos con tool calling y automatización inteligente para flujos operativos reales.",
        },
        {
          title: "Fundador: ahorratiempo.pe & Mobile",
          desc: "Creador de ahorratiempo.pe con orientación por IA. Desarrollo móvil multiplataforma con Flutter & Dart, diseño de APIs REST y bases de datos.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      heading: "Soluciones de Software & Desarrollo Full Stack",
      consoleDegree: "Diseño & Des. de Software (TECSUP)",
      consoleRole: "Full Stack Developer | Python, React & AI",
      items: [
        "Desarrollo Web Full Stack (React, Next.js & TypeScript)",
        "Machine Learning & Sistemas Recomendadores (PySpark, Python)",
        "Chatbots de IA, LLMs y Agentes Autónomos (LangChain, OpenAI)",
        "Aplicaciones Móviles Multiplataforma (Flutter & Dart)",
        "Arquitectura Cloud & APIs Serverless (Cloudflare, Django, Node)",
      ],
    },
    projects: {
      eyebrow: "Proyectos Destacados",
      heading: "Sistemas en Producción y Productos con Impacto",
      subheading:
        "Explora aplicaciones reales, plataformas SaaS y arquitecturas de IA diseñadas para escalar con impacto global.",
      categories: {
        all: "Todos",
        aiWeb: "IA & Web SaaS",
        mobile: "Móvil & Flutter",
        cloudSystems: "Cloud & Sistemas IoT",
      },
      copyEmail: "Copiar correo",
      copiedEmail: "¡Copiado al portapapeles!",
      visitProject: "Visitar Plataforma en Vivo",
      viewGithub: "Ver Código en GitHub",
      projectCounter: "PROYECTO",
      scrollHint: "Haz scroll o usa las flechas para explorar en 3D",
      items: [
        {
          tag: "SaaS Ciudadano con IA · React 18 · Voz",
          title: "ahorratiempo.pe",
          desc: "Plataforma digital para la orientación automatizada de trámites públicos en Perú con asistente por voz, agendamiento de citas y pagos seguros.",
          metrics: "Web Pública Activa · 100% Cero Papel",
        },
        {
          tag: "Legal IT Empresarial · SG-SST",
          title: "CONTROLA - SERVILEX",
          desc: "Plataforma integral de control normativo, matrices de seguridad SG-SST y automatización de expedientes judiciales para firmas corporativas.",
          metrics: "Sistema Empresarial Activo · Multi-Tenant",
        },
        {
          tag: "App Móvil · Flutter & Dart · On-Demand",
          title: "CHANSA Mobile App",
          desc: "Marketplace de servicios a demanda que conecta especialistas con clientes verificados, con chat en vivo, citas y geolocalización.",
          metrics: "Listo para iOS & Android · Sync en Tiempo Real",
        },
        {
          tag: "IoT & Telemetría · Microservicios",
          title: "Safety Helmet IoT",
          desc: "Sistema de seguridad industrial que monitorea impacto físico, concentración de gases tóxicos y geolocalización en faenas de alto riesgo.",
          metrics: "Telemetría en Vivo · Sensores de Hardware",
        },
        {
          tag: "Fintech & Facturación · Integración SUNAT",
          title: "Facturación & Billing Engine",
          desc: "Motor de cobros y checkout con pasarela Culqi y emisión automatizada de comprobantes electrónicos con validación SUNAT oficial.",
          metrics: "Facturación Electrónica · XML / CDR Aprobado",
        },
        {
          tag: "App de Inspección en Campo · Tablet",
          title: "App Fiscalización Digital Joya",
          desc: "Aplicación móvil para inspectores municipales en Arequipa. Opera 100% offline con SQLite local y sincronización automática al conectar.",
          metrics: "Sync Offline-First · Fiscalización Municipal",
        },
      ],
    },
    why: {
      eyebrow: "Por Qué Trabajar Conmigo",
      heading: "Rigor Técnico y Retorno de Inversión Real para tu Negocio",
      pillars: [
        {
          title: "Dominio Full Stack & Cloud de Extremo a Extremo",
          desc: "Desde interfaces interactivas de alta velocidad hasta backends robustos en Python y Node.js. Arquitectura limpia, mantenible y lista para escalar.",
        },
        {
          title: "Machine Learning & IA Aplicada en Producción",
          desc: "Conocimiento práctico en modelos recomendadores (estilo Netflix/TikTok) e integraciones de LLMs que aportan soluciones exactas y sin alucinaciones.",
        },
        {
          title: "Enfoque en ROI, Costos de Inferencia y Métricas",
          desc: "Profundidad técnica unida al entendimiento financiero: control riguroso de costos cloud, consumo de tokens y rentabilidad medible para el negocio.",
        },
      ],
    },
    contact: {
      headingPart1: "¿Tienes un",
      headingHighlight1: "proyecto",
      headingPart2: "o",
      headingHighlight2: "vacante en mente?",
      subtext:
        "Disponible para roles como Full Stack Developer | Python, React & AI Integration, proyectos de software e IA y colaboraciones internacionales.",
      ctaButton: "Conversemos",
      card1Title: "Full Stack Development",
      card1Sub: "React · TypeScript · Python · Django",
      card2Title: "Python & AI Integration",
      card2Sub: "ML Recommenders · LLMs · Agentes",
      card3Title: "Liderazgo Técnico",
      card3Sub: "Arquitectura · Cloud · ROI de Negocio",
      badgeText: "✦ DENNYS MARQUEZ • FULL STACK DEVELOPER • PYTHON & AI •",
    },
    footer: {
      tagline: "Construyendo productos digitales que generan impacto.",
      navTitle: "Navegación",
      connectTitle: "Conectar",
      rights: "Todos los derechos reservados. Diseñado y desarrollado con Next.js, React & Tailwind CSS.",
    },
  },
};
