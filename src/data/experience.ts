export interface SkillGroup {
  category: { en: string; es: string };
  skills: string[];
}

export interface CareerItem {
  period: { en: string; es: string };
  role: { en: string; es: string };
  company: string;
  location: { en: string; es: string };
  summary: { en: string; es: string };
  highlights: { en: string[]; es: string[] };
  technologies: string[];
}

export interface EducationItem {
  period: { en: string; es: string };
  degree: { en: string; es: string };
  institution: string;
  location: { en: string; es: string };
  status: { en: string; es: string };
  description: { en: string; es: string };
}

export interface ExperienceData {
  summary: { en: string; es: string };
  cvUrl: string;
  skillGroups: SkillGroup[];
  career: CareerItem[];
  education: EducationItem[];
  languages: Array<{
    name: { en: string; es: string };
    level: { en: string; es: string };
  }>;
}

export const EXPERIENCE_DATA: ExperienceData = {
  summary: {
    en: "Full Stack Developer based in Peru, specialized in building reliable web applications, mobile platforms, and business tools. Combines engineering depth in React, TypeScript, and Python with product thinking and a background in software design and accounting.",
    es: "Desarrollador Full Stack basado en Perú, especializado en construir aplicaciones web confiables, plataformas móviles y herramientas de negocio. Combina solidez técnica en React, TypeScript y Python con visión de producto y formación en desarrollo de software y contabilidad.",
  },
  cvUrl: "/documents/CV-Dennys-Gabriel-Marquez-Flores.pdf",
  skillGroups: [
    {
      category: { en: "Frontend Engineering", es: "Ingeniería Frontend" },
      skills: [
        "React (18 / 19)",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ESNext)",
        "Tailwind CSS",
        "Responsive & Fluid UI",
        "Web Performance & Core Web Vitals",
        "WCAG Accessibility",
      ],
    },
    {
      category: { en: "Backend & Systems", es: "Backend & Sistemas" },
      skills: [
        "Python 3",
        "Node.js",
        "Django & Django REST",
        "RESTful API Design",
        "SOAP Web Services",
        "Microservices Architecture",
        "Authentication & RBAC",
      ],
    },
    {
      category: { en: "Data & Cloud Infrastructure", es: "Datos & Infraestructura Cloud" },
      skills: [
        "PostgreSQL",
        "SQLite & Offline Storage",
        "Firebase Firestore",
        "Cloudflare Edge",
        "Docker",
        "Git & GitHub Workflows",
      ],
    },
    {
      category: { en: "Mobile & Embedded Systems", es: "Móvil & Sistemas Embebidos" },
      skills: [
        "Flutter & Dart",
        "Android Tablet Ergonomics",
        "Offline-First Data Sync",
        "C++ Embedded Firmware",
        "Arduino Hardware & Sensors",
      ],
    },
    {
      category: { en: "Product & Business Mindset", es: "Producto & Criterio de Negocio" },
      skills: [
        "Product Thinking",
        "User Experience (UX)",
        "Accounting & Fiscal Logic (SUNAT)",
        "Technical Documentation",
        "Iterative Prototyping",
      ],
    },
  ],
  career: [
    {
      period: {
        en: "2024 — Present",
        es: "2024 — Presente",
      },
      role: {
        en: "Founder & Full Stack AI Engineer",
        es: "Fundador & Ingeniero Full Stack con IA",
      },
      company: "AhorraTiempo (ahorratiempo.pe)",
      location: {
        en: "Peru (Remote)",
        es: "Perú (Remoto)",
      },
      summary: {
        en: "Designed, engineered, and launched a consumer SaaS platform helping citizens navigate public administrative procedures with voice-assisted AI guidance and digital payments.",
        es: "Diseño, desarrollo y puesta en producción de un SaaS ciudadano que guía a usuarios en trámites administrativos mediante asistencia de voz con IA y pagos digitales.",
      },
      highlights: {
        en: [
          "Architected SSR Next.js 14 web app with TypeScript and Tailwind CSS.",
          "Implemented real-time Voice AI assistant handling plain-Spanish inquiries.",
          "Integrated Culqi payment gateway with idempotent webhooks and PostgreSQL.",
        ],
        es: [
          "Arquitectura SSR en Next.js 14 con TypeScript y Tailwind CSS.",
          "Implementación de asistente Voice AI con síntesis de voz en tiempo real.",
          "Integración de pasarela Culqi con webhooks idempotentes y PostgreSQL.",
        ],
      },
      technologies: ["React 18", "Next.js 14", "TypeScript", "Voice AI", "Culqi API", "PostgreSQL"],
    },
    {
      period: {
        en: "2023 — 2024",
        es: "2023 — 2024",
      },
      role: {
        en: "Lead Full Stack & Systems Developer",
        es: "Desarrollador Full Stack & Sistemas Líder",
      },
      company: "Independent Software Solutions",
      location: {
        en: "Peru",
        es: "Perú",
      },
      summary: {
        en: "Engineered production software systems including multi-tenant compliance cloud platforms (CONTROLA), electronic billing services (SUNAT UBL 2.1), and municipal tablet applications.",
        es: "Desarrollo de sistemas de software en producción, incluyendo plataformas cloud multi-tenant (CONTROLA), facturación electrónica SUNAT y aplicaciones móviles municipales.",
      },
      highlights: {
        en: [
          "Built Django multi-tenant compliance system reducing legal audit preparation by 75%.",
          "Automated electronic invoice generation and X.509 digital signing for SUNAT.",
          "Created 100% offline-first Android tablet app for municipal field inspectors.",
        ],
        es: [
          "Desarrollo de sistema multi-tenant en Django reduciendo tiempos de auditoría en 75%.",
          "Automatización de comprobantes electrónicos con firma digital X.509 para SUNAT.",
          "Creación de aplicación Android Offline-First para fiscalizadores municipales.",
        ],
      },
      technologies: ["Python", "Django", "Flutter", "SQLite", "PostgreSQL", "XMLDSIG", "C++"],
    },
  ],
  education: [
    {
      period: {
        en: "2021 — 2024",
        es: "2021 — 2024",
      },
      degree: {
        en: "Professional Technical Degree in Software Design and Development",
        es: "Título Profesional Técnico en Diseño y Desarrollo de Software",
      },
      institution: "TECSUP",
      location: {
        en: "Peru",
        es: "Perú",
      },
      status: {
        en: "Graduated (2024)",
        es: "Titulado / Graduado (2024)",
      },
      description: {
        en: "Comprehensive 3-year technical software engineering program covering data structures, object-oriented programming, modern web frameworks, database administration, cloud architecture, and embedded systems.",
        es: "Carrera profesional de 3 años con formación rigurosa en estructuras de datos, programación orientada a objetos, frameworks web modernos, administración de bases de datos, arquitectura cloud y sistemas embebidos.",
      },
    },
    {
      period: {
        en: "Prior Studies",
        es: "Estudios Previos",
      },
      degree: {
        en: "Studies in Accounting and Finance",
        es: "Estudios en Contabilidad y Finanzas",
      },
      institution: "Universidad Continental",
      location: {
        en: "Peru",
        es: "Perú",
      },
      status: {
        en: "Academic Background",
        es: "Formación Universitaria",
      },
      description: {
        en: "Higher education in accounting principles, corporate finance, taxation frameworks, and business process modeling. Provides direct domain expertise for fintech and enterprise ERP systems.",
        es: "Formación universitaria en principios contables, finanzas corporativas, normativas tributarias y modelado de procesos de negocio, aportando criterio para fintech y sistemas de gestión.",
      },
    },
  ],
  languages: [
    {
      name: { en: "Spanish", es: "Español" },
      level: { en: "Native", es: "Nativo" },
    },
    {
      name: { en: "English", es: "Inglés" },
      level: { en: "Professional Working Proficiency", es: "Competencia Profesional de Trabajo" },
    },
  ],
};
