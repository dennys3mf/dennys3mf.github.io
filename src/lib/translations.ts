export type Language = "en" | "es";

export interface CaseStudyItem {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  duration: string;
  summary: string;
  impactMetrics: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface TranslationContent {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    downloadCV: string;
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
    viewCaseStudy: string;
    closeCaseStudy: string;
    caseStudyTag: string;
    measurableImpact: string;
    architectureHeader: string;
    problemTitle: string;
    solutionTitle: string;
    technologiesTitle: string;
    technologiesLabel: string;
    projectCounter: string;
    scrollHint: string;
    items: Array<{
      tag: string;
      title: string;
      desc: string;
      metrics: string;
      impactList?: Array<{ value: string; label: string }>;
    }>;
    caseStudies: Record<string, CaseStudyItem>;
  };
  process: {
    heading: string;
    subheading: string;
    step1: {
      title: string;
      desc: string;
      nodeUser: string;
      nodeEdge: string;
      nodeAgent: string;
      nodeApi: string;
      nodeVector: string;
    };
    step2: {
      title: string;
      desc: string;
    };
    step3: {
      title: string;
      desc: string;
    };
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
    downloadCV: string;
    card1Title: string;
    card1Sub: string;
    card2Title: string;
    card2Sub: string;
    card3Title: string;
    card3Sub: string;
    badgeText: string;
    notesTop: [string, string, string];
    notesBottom: [string, string, string];
  };
  footer: {
    tagline: string;
    navTitle: string;
    connectTitle: string;
    rights: string;
    backToTop: string;
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
      downloadCV: "Download CV",
    },
    hero: {
      location: "Arequipa / Peru",
      title: "Full Stack Developer",
      submeta: "React · Node.js · TypeScript",
      motto:
        "Building resilient web apps, hybrid RAG AI assistants with Meta Llama 3.2, and production systems with measurable business impact.",
      emailAria: "Copy email to clipboard",
    },
    about: {
      eyebrow: "About Me",
      heading: "Bridging Full Stack Engineering, Hybrid RAG AI & Measurable Results",
      degreeTitle: "Software Design & Development Graduate",
      degreeInstitution: "TECSUP · Top 3rd, GPA 18/20 · Title in Process",
      lead1:
        "Full Stack Developer with freelance experience since 2022 building business solutions, working with React since 2023 alongside TypeScript, Node.js, Python, and Django.",
      lead2:
        "Founder of AhorraTiempo.pe: designed and deployed a civic guidance platform with LOTA IA (Meta Llama 3.2), hybrid RAG (Cloudflare D1, FTS5, Vectorize & embeddings), and an extraction pipeline indexing 3,033 public procedures across 41 Peruvian government entities.",
      lead3:
        "Previously contributed to Controla.pe at SERVILEX Legal IT (React frontend & Django REST backend). Certified DataCamp AI Engineer for Developers Associate (Oct 2026). Focused on reliable APIs, maintainable code, teamwork, and high-impact digital solutions.",
      featuredBadge: "Technical Stack & Focus",
      featuredHeading: "Core Competencies & Engineering Systems",
      pRecommenders:
        "Full Stack Web & APIs: Building modular web applications with React 18, TypeScript, Vite, Tailwind CSS, Node.js, Express, Python, and Django REST Framework.",
      pAiAgents:
        "Hybrid RAG & AI Engineering: Developing LOTA IA with Meta Llama 3.2, Workers AI, embeddings, vector search (Vectorize), Cloudflare D1 with FTS5, and Google Antigravity CLI.",
      pAhorratiempo:
        "Founder of ahorratiempo.pe: Production citizen assistance platform cutting procedural inquiry times by 70%, integrating Server-Sent Events (SSE) and official government link validation.",
      pMobile:
        "Cloud, DevOps & Mobile: Docker, Docker Compose, Cloudflare Workers, Firebase Firestore/Hosting, PostgreSQL, Redis, Apache Kafka, IoT (Arduino, MQTT, Mosquitto), and mobile apps with Flutter & React Native.",
      focusPrefix: "Current Focus:",
      focusText:
        "Full Stack Development with React, Node.js, TypeScript, Cloudflare Workers AI edge computing, and hybrid RAG architectures.",
      pillars: [
        {
          title: "Frontend & Full Stack",
          desc: "React 18, TypeScript, JavaScript (ES6+), Vite, Tailwind CSS, Node.js, Express, and REST APIs with clean responsive layouts.",
        },
        {
          title: "AI & Hybrid RAG",
          desc: "Meta Llama 3.2, Workers AI, Vectorize, Cloudflare D1 (FTS5), vector embeddings, and autonomous agent workflows.",
        },
        {
          title: "Cloud & DevOps",
          desc: "Docker, Docker Compose, Cloudflare Workers, Firebase Hosting, Git, GitHub, Postman, and AWS cloud labs (EC2, S3, RDS, Lambda).",
        },
        {
          title: "Messaging, IoT & Mobile",
          desc: "Apache Kafka, RabbitMQ, MQTT, Mosquitto, Arduino IoT hardware, Flutter & Dart, and React Native mobile development.",
        },
      ],
    },
    services: {
      eyebrow: "SOLUTIONS & ARCHITECTURE",
      heading: "Specialized Engineering for High-Growth Digital Products",
      consoleDegree: "Professional Technical Degree · Software Design & Dev (TECSUP · 18/20)",
      consoleRole: "Full Stack Developer | React · Node.js · TypeScript",
      items: [
        "Full Stack Web Development (React, TypeScript, Node.js, Vite, Tailwind CSS)",
        "AI Systems & Hybrid RAG (Meta Llama 3.2, Workers AI, Vectorize, Embeddings)",
        "Backend & API Architecture (Python, Django, Flask, Express, REST APIs)",
        "Edge Computing & Cloud (Cloudflare Workers, D1, Docker Compose, Firebase)",
        "Mobile & IoT Solutions (Flutter, Dart, React Native, Arduino, MQTT)",
        "Data Pipelines & Messaging (Apache Kafka, RabbitMQ, Cheerio Web Scraping)",
      ],
    },
    projects: {
      eyebrow: "Selected Engineering Work",
      heading: "From Architecture to Production with Measurable Impact",
      subheading:
        "Interactive showcase of production platforms, AI integrations, mobile applications, and industrial IoT solutions.",
      categories: {
        all: "All Projects",
        aiWeb: "AI & Full Stack",
        mobile: "Mobile & IoT",
        cloudSystems: "Cloud & Systems",
      },
      copyEmail: "Copy email",
      copiedEmail: "Email copied!",
      visitProject: "Visit Live Platform",
      viewGithub: "View Source on GitHub",
      viewCaseStudy: "View Case Study",
      closeCaseStudy: "Close Case Study",
      caseStudyTag: "ENGINEERING CASE STUDY",
      measurableImpact: "Measurable Impact",
      architectureHeader: "System Architecture & Execution",
      problemTitle: "Problem & Business Challenge",
      solutionTitle: "Engineered Solution",
      technologiesTitle: "Technologies & Infrastructure",
      technologiesLabel: "Technologies",
      projectCounter: "Project",
      scrollHint: "Scroll to explore",
      items: [
        {
          tag: "AI CITIZEN SAAS",
          title: "ahorratiempo.pe",
          desc: "AI-driven citizen guidance platform streamlining administrative procedures in Peru. Features intelligent voice guidance, rapid search indexing, and online payments via Culqi.",
          metrics: "70% reduction in inquiry time · 99.4% intent accuracy",
          impactList: [
            { value: "70%", label: "Reduction in processing time via Voice AI" },
            { value: "99.4%", label: "Citizen query intent accuracy" },
            { value: "3.5 wks", label: "Fast production time-to-market" },
          ],
        },
        {
          tag: "ENTERPRISE CLOUD & LEGAL IT",
          title: "CONTROLA Servilex",
          desc: "Corporate management and compliance software for occupational safety (SG-SST). Multi-tenant architecture on PostgreSQL with role-based security.",
          metrics: "100% regulatory compliance · Multi-tenant security",
          impactList: [
            { value: "100%", label: "Regulatory SG-SST compliance rate" },
            { value: "85%", label: "Audit preparation time saved" },
            { value: "0", label: "Data leak incidents across corporate tenants" },
          ],
        },
        {
          tag: "CROSS-PLATFORM MOBILE",
          title: "CHANSA Mobile App",
          desc: "On-demand mobile marketplace connecting users with local service professionals. Real-time chat, GPS geolocation, and instant push notifications.",
          metrics: "Real-time sync · Sub-second notifications",
          impactList: [
            { value: "< 50ms", label: "Realtime chat message delivery latency" },
            { value: "100%", label: "Geofence accuracy for contractor matching" },
          ],
        },
        {
          tag: "INDUSTRIAL IOT & TELEMETRY",
          title: "Safety Helmet IoT",
          desc: "Industrial safety system monitoring physical impact, toxic gas concentration, and worker geolocation in high-risk mining and construction environments.",
          metrics: "Instant alerts · Continuous telemetry",
          impactList: [
            { value: "< 200ms", label: "Hazard telemetry alert dispatch latency" },
            { value: "MQ-2", label: "Toxic gas sensor hardware calibration" },
          ],
        },
        {
          tag: "FINTECH & ELECTRONIC BILLING",
          title: "Facturación & Billing Engine",
          desc: "Payment processing engine integrating Culqi checkout gateways and automated electronic invoicing validated with Peruvian SUNAT compliance standards.",
          metrics: "Culqi API · SUNAT XML/CDR · Microservices",
          impactList: [
            { value: "99.8%", label: "Culqi Gateway transaction success rate" },
            { value: "< 800ms", label: "SUNAT XML signing & CDR validation" },
          ],
        },
        {
          tag: "FIELD INSPECTION TABLET APP",
          title: "App Fiscalización Digital Joya",
          desc: "Field audit application for municipal inspectors. Works completely offline with local SQLite storage and smart batch sync when connectivity is restored.",
          metrics: "100% offline-first · Zero data loss",
          impactList: [
            { value: "100%", label: "Offline-first tablet operability in field" },
            { value: "0%", label: "Data collision rate on batch sync" },
          ],
        },
      ],
      caseStudies: {
        "ahorratiempo.pe": {
          id: "ahorratiempo.pe",
          title: "ahorratiempo.pe - AI Citizen SaaS",
          subtitle: "Streamlining Public Administrative Procedures in Peru through Voice AI & Next.js",
          client: "Independent SaaS Product / Public GovTech Initiative",
          role: "Founder, System Architect & Lead Full Stack Developer",
          duration: "4 Months (MVP to Production)",
          summary:
            "Ahorratiempo.pe is an AI-powered civic platform addressing the bureaucratic friction faced by citizens navigating confusing government procedures in Peru. By orchestrating Voice AI, modern React/Next.js frontend architectures, and resilient payment gateways, the platform reduces inquiry resolution from hours to seconds.",
          impactMetrics: [
            {
              value: "70%",
              label: "Inquiry Time Reduction",
              detail: "Citizen procedure resolution dropped from 45 minutes of manual searching to under 2 minutes of conversational Voice AI assistance.",
            },
            {
              value: "99.4%",
              label: "Intent Accuracy",
              detail: "Strict semantic embeddings prevent hallucinations, ensuring 100% legally grounded procedural guidance.",
            },
            {
              value: "99.8%",
              label: "Culqi Payment Success",
              detail: "Zero dropped transactions on digital fee collection through webhook idempotency and retry queues.",
            },
            {
              value: "3.5 Weeks",
              label: "Time-to-Market",
              detail: "Rapid sprint-based release cycle from functional prototype to public production deployment.",
            },
          ],
          problem:
            "Citizens in Peru lose dozens of productive hours every year deciphering fragmented legal requirements, outdated municipal PDFs, and scattered office schedules, creating immense civic frustration and administrative backlogs.",
          solution:
            "Architected an omnichannel web application powered by speech-to-text models and semantic RAG indexing. Citizens can either speak or type their situation in natural language and receive an immediate, step-by-step roadmap with exact fees, office locations, and direct digital fee payment.",
          architectureHighlights: [
            "Next.js App Router with React Server Components for sub-second Initial Server Render (SSR).",
            "Real-time voice streaming pipeline using Web Audio API and Whisper speech recognition.",
            "Edge caching and DDoS mitigation powered by Cloudflare Workers and globally distributed KV.",
            "Culqi payment gateway with atomic tokenization and idempotent webhook event verification.",
          ],
          techStack: [
            "React 18",
            "Next.js",
            "TypeScript",
            "Voice AI",
            "Tailwind CSS",
            "Culqi Gateway",
            "Cloudflare Workers",
          ],
          liveUrl: "https://ahorratiempo.pe",
          githubUrl: "https://github.com/dennys3mf",
        },
        "controla-servilex": {
          id: "controla-servilex",
          title: "CONTROLA Servilex - Plataforma Cloud & Legal IT",
          subtitle: "Enterprise SaaS for Occupational Safety Compliance (SG-SST) & SUNAFIL Audit Readiness",
          client: "Servilex Corporate Solutions",
          role: "Lead Full Stack & Database Engineer",
          duration: "6 Months",
          summary:
            "CONTROLA is an enterprise cloud platform built for industrial corporations to manage occupational health and safety compliance (SG-SST). It automates audit readiness, tracks employee medical examinations, and enforces multi-tenant data isolation under Peruvian labor law.",
          impactMetrics: [
            {
              value: "100%",
              label: "SG-SST Compliance",
              detail: "Zero labor infractions or regulatory fines incurred across all audited enterprise clients.",
            },
            {
              value: "85%",
              label: "Audit Prep Savings",
              detail: "Digital verification eliminated 4 days of manual file reviews per industrial site down to 4 hours.",
            },
            {
              value: "0 Leaks",
              label: "Tenant Data Isolation",
              detail: "Row-Level Security (RLS) and schema isolation preventing any cross-tenant data exposure.",
            },
            {
              value: "99.95%",
              label: "Platform Uptime",
              detail: "Containerized deployment with continuous backups and automated failover.",
            },
          ],
          problem:
            "Industrial companies struggled with chaotic binders of paper inspection sheets, expiring medical certificates, and fragmented safety committee minutes, exposing them to millions in potential SUNAFIL fines.",
          solution:
            "Engineered a multi-tenant cloud platform on Python and Django with PostgreSQL Row-Level Security. Built automated expiration alerts, digital signature workflows, and role-based audit dashboards with real-time compliance scorecards.",
          architectureHighlights: [
            "Multi-Tenant PostgreSQL database architecture with isolated schemas per client enterprise.",
            "Python & Django REST Framework backend with strict typing and test-driven validation.",
            "Background Celery workers handling periodic notification alerts for expiring certifications.",
            "Role-Based Access Control (RBAC) with immutable audit logging for regulatory inspectors.",
          ],
          techStack: [
            "Python",
            "Django",
            "PostgreSQL",
            "Docker",
            "SG-SST Standards",
            "REST APIs",
            "Celery",
          ],
          liveUrl: "https://github.com/dennys3mf",
          githubUrl: "https://github.com/dennys3mf",
        },
        "chansa-app": {
          id: "chansa-app",
          title: "CHANSA - On-Demand Mobile Marketplace",
          subtitle: "Cross-Platform Realtime Service Platform with Geolocation & Firebase",
          client: "CHANSA Startup",
          role: "Lead Mobile Architect & Full Stack Developer",
          duration: "3 Months",
          summary:
            "CHANSA connects homeowners and businesses with certified local technicians, mechanics, and maintenance professionals on demand with sub-second live dispatch.",
          impactMetrics: [
            {
              value: "< 50ms",
              label: "Chat Delivery Latency",
              detail: "Real-time communication between contractors and customers via Firebase live listeners.",
            },
            {
              value: "100%",
              label: "Geofence Accuracy",
              detail: "Precision radius filtering prevents sending service requests to out-of-range providers.",
            },
            {
              value: "4.9 / 5",
              label: "Field Satisfaction",
              detail: "High contractor retention and seamless usability during initial beta trial runs.",
            },
            {
              value: "60 FPS",
              label: "Fluid UI Performance",
              detail: "Zero dropped frames across low-end and high-end Android and iOS devices.",
            },
          ],
          problem:
            "Finding verified local tradespeople in Peruvian cities involved unsafe word-of-mouth recommendations with zero accountability, unpredictable response times, and opaque pricing.",
          solution:
            "Built a reactive Flutter application featuring real-time geolocated matching, in-app messaging, verified credentials badges, and push notifications.",
          architectureHighlights: [
            "Flutter & Dart responsive architecture compiled natively for iOS and Android.",
            "Firebase Firestore real-time synchronization with optimistic UI state updates.",
            "Geolocator API integration with smart battery-saving location polling.",
            "Cloud Functions microservices handling automated push notifications and user ratings.",
          ],
          techStack: [
            "Flutter",
            "Dart",
            "Firebase",
            "Cloud Firestore",
            "Google Maps API",
            "FCM Push Notifications",
          ],
          liveUrl: "https://github.com/dennys3mf",
          githubUrl: "https://github.com/dennys3mf",
        },
        "safety-helmet": {
          id: "safety-helmet",
          title: "Safety Helmet IoT - Industrial Safety & Telemetry",
          subtitle: "Smart Protective Equipment with Gas Sensing, Impact Detection & GPS Telemetry",
          client: "TECSUP Innovation Lab / Industrial Safety Research",
          role: "Hardware & Firmware Engineer / Full Stack Integrator",
          duration: "4 Months",
          summary:
            "An Internet of Things (IoT) wearable device integrated into standard industrial hard hats to safeguard mining and construction personnel in high-risk zones.",
          impactMetrics: [
            {
              value: "< 200ms",
              label: "Hazard Alert Latency",
              detail: "Instant emergency beacon transmission to supervisor dashboards upon heavy impact.",
            },
            {
              value: "MQ-2",
              label: "Gas Detection Array",
              detail: "Continuous calibrated detection of carbon monoxide and flammable toxic fumes.",
            },
            {
              value: "12 Hours",
              label: "Battery Autonomy",
              detail: "Optimized low-power firmware sleep modes providing full-shift protection.",
            },
            {
              value: "100%",
              label: "Offline Incident Log",
              detail: "EEPROM local buffer records telemetry during complete radio blackout.",
            },
          ],
          problem:
            "Mining personnel and industrial operators face sudden toxic gas leaks and traumatic head impacts in isolated tunnels where mobile reception is virtually nonexistent.",
          solution:
            "Engineered an IoT modular circuit mounted directly on helmets featuring MQ-2 gas sensors, accelerometers for fall detection, GPS telemetry, and microservices for control tower visualization.",
          architectureHighlights: [
            "C++ embedded firmware running on low-power microcontrollers with interrupt-driven alarms.",
            "MQ-2 analog sensor array calibrated against dangerous thresholds of CO and combustible gas.",
            "GPS telemetry beacon forwarding live coordinates over RF / cellular data link.",
            "Python backend receiving telemetry streams with WebSocket real-time dashboard display.",
          ],
          techStack: [
            "C++",
            "Arduino",
            "MQ-2 Sensors",
            "GPS Telemetry",
            "Python API",
            "WebSockets",
            "Embedded C",
          ],
          liveUrl: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
          githubUrl: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
        },
        "fintech-sunat": {
          id: "fintech-sunat",
          title: "Facturación & Billing Engine SUNAT",
          subtitle: "Automated Electronic Invoicing Engine with Culqi Gateway & Tax Compliance",
          client: "B2B SaaS Clients / Fintech Integrations",
          role: "Backend Architect & API Engineer",
          duration: "3 Months",
          summary:
            "A high-reliability financial engine that processes payments via Culqi and generates tax-compliant electronic invoices validated against Peruvian SUNAT requirements.",
          impactMetrics: [
            {
              value: "99.8%",
              label: "Payment Success Rate",
              detail: "Culqi tokenization with automatic exponential backoff on transient network faults.",
            },
            {
              value: "< 800ms",
              label: "XML & CDR Speed",
              detail: "Fast cryptographic XML signing, digest hashing, and SUNAT SOAP communication.",
            },
            {
              value: "0 Errors",
              label: "Tax Rejection Rate",
              detail: "Pre-validation schema engine catches invalid RUCs and tax calculation errors before dispatch.",
            },
            {
              value: "100%",
              label: "Audit Log Trail",
              detail: "Immutable transaction ledgers ensuring complete accountability for accounting teams.",
            },
          ],
          problem:
            "Peruvian businesses regularly suffer payment dropouts, manual invoice re-entry errors, and harsh tax penalties due to malformed XML structures submitted to SUNAT.",
          solution:
            "Engineered a resilient Python backend that unifies Culqi checkout processing with an automated UBL 2.1 XML generator, digital signature engine, and SOAP CDR receiver.",
          architectureHighlights: [
            "Stateless microservices architecture with isolated payment and billing workers.",
            "XML digital signature pipeline adhering strictly to UBL 2.1 standards and SUNAT schema rules.",
            "Asynchronous message queue handling webhook retries and idempotent transaction commits.",
            "Relational PostgreSQL audit database storing signed XML and received CDR receipts.",
          ],
          techStack: [
            "Python",
            "Culqi API",
            "SUNAT XML/CDR",
            "PostgreSQL",
            "SOAP & REST",
            "Docker",
          ],
          liveUrl: "https://github.com/dennys3mf",
          githubUrl: "https://github.com/dennys3mf",
        },
        "fiscalizacion-joya": {
          id: "fiscalizacion-joya",
          title: "App Fiscalización Digital Joya",
          subtitle: "Offline-First Mobile Inspection System for Municipal Enforcement Agents",
          client: "Distrital Municipality of La Joya, Arequipa",
          role: "Mobile Architect & System Developer",
          duration: "3 Months",
          summary:
            "A rugged, offline-first tablet application designed for municipal fiscalization officers conducting commercial audits and urban inspections in areas with zero cellular connectivity.",
          impactMetrics: [
            {
              value: "100%",
              label: "Offline Operability",
              detail: "Inspectors complete comprehensive multi-step inspection acts without active internet.",
            },
            {
              value: "0%",
              label: "Sync Collision Rate",
              detail: "Deterministic conflict-resolution protocol when uploading queued audits upon reconnecting.",
            },
            {
              value: "4x",
              label: "Daily Audit Volume",
              detail: "Inspectors increased audits from 6 manual carbon-paper forms to 24 digital reports per shift.",
            },
            {
              value: "Instant",
              label: "PDF Certificate Render",
              detail: "Generates tamper-proof digital infraction and compliance documents on-site with thermal print support.",
            },
          ],
          problem:
            "Municipal officers conducting inspections in remote rural sectors of La Joya relied on fragile carbon-paper forms that got damaged, lost, or took weeks to be manually typed into city databases.",
          solution:
            "Built a dedicated Flutter Android tablet app with an offline-first SQLite database, photographic evidence capture, GPS geo-stamping, and automatic batch synchronization.",
          architectureHighlights: [
            "Offline-first architecture leveraging SQLite as the primary source of truth in the field.",
            "Cryptographic photo hashing with GPS EXIF metadata locking inspection evidence in place.",
            "Differential sync algorithm transferring compressed JSON payloads when Wi-Fi is detected.",
            "Direct Bluetooth thermal printer integration for issuing physical inspection receipts on-site.",
          ],
          techStack: [
            "Flutter",
            "Dart",
            "SQLite Local DB",
            "Offline-First Sync",
            "Android Tablet SDK",
            "Camera & GPS API",
          ],
          liveUrl: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
          githubUrl: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
        },
      },
    },
    process: {
      heading: "From Architecture to Production with Measurable Impact",
      subheading:
        "A rigorous 3-stage delivery pipeline ensuring rock-solid stability, typed contracts, and fast time-to-market without guesswork.",
      step1: {
        title: "Listen & Model",
        desc: "Deep dive into real business needs, data structures, and user constraints before writing code. Architecture blueprints, typed schema contracts, and measurable KPI benchmarks are established upfront.",
        nodeUser: "Client / Voice Input",
        nodeEdge: "Cloudflare Edge",
        nodeAgent: "AI Agent Router",
        nodeApi: "Python API Service",
        nodeVector: "PostgreSQL & pgvector",
      },
      step2: {
        title: "Build & Validate",
        desc: "Iterative development with clean, strongly-typed code in TypeScript and Python. Weekly sprint demos, test coverage, and continuous validation to ensure high velocity.",
      },
      step3: {
        title: "Deploy & Measure",
        desc: "Automated CI/CD deployments to secure cloud infrastructure with real-time observability, telemetry monitoring, complete documentation, and seamless team handover.",
      },
    },
    why: {
      eyebrow: "Why Work With Me",
      heading: "Engineering Excellence That Drives Tangible Business Value",
      pillars: [
        {
          title: "Full-Stack & Edge Autonomy",
          desc: "End-to-end execution from database schemas and REST/GraphQL APIs to reactive Next.js frontends and low-latency Cloudflare Workers edge functions.",
        },
        {
          title: "Machine Learning & Recommenders",
          desc: "Practical ML experience implementing content filtering algorithms inspired by Netflix and TikTok, processing large datasets with PySpark.",
        },
        {
          title: "Production AI Agents & LLMs",
          desc: "Real-world conversational interfaces, autonomous AI agents with tool calling, and automated workflows that eliminate manual operational overhead.",
        },
        {
          title: "Business-First Engineering Mindset",
          desc: "Software designed around business KPIs: conversion rates, user retention, query resolution speed, and rock-solid system stability.",
        },
      ],
    },
    contact: {
      headingPart1: "Have a project or",
      headingHighlight1: "role in mind?",
      headingPart2: "Let's build something",
      headingHighlight2: "that matters.",
      subtext:
        "Open to opportunities as Full Stack Developer | React, Node.js & TypeScript, software engineering consulting, and international remote contracts.",
      ctaButton: "Chat on WhatsApp",
      downloadCV: "Download CV (PDF)",
      card1Title: "Full Stack Development",
      card1Sub: "React 18 · TypeScript · Node.js · Vite",
      card2Title: "AI & Hybrid RAG",
      card2Sub: "Meta Llama 3.2 · Workers AI · Vectorize",
      card3Title: "Cloud & DevOps",
      card3Sub: "Docker Compose · D1 · PostgreSQL · APIs",
      badgeText: "✦ AVAILABLE FOR PROJECTS • FULL STACK & AI • AREQUIPA · PERU •",
      notesTop: ["Great Ideas", "Better Products", "Real Impact"],
      notesBottom: ["Technology", "People", "Results"],
    },
    footer: {
      tagline: "Building digital products that deliver real-world business impact.",
      navTitle: "Navigation",
      connectTitle: "Connect",
      rights: "Dennys Gabriel Marquez Flores. All rights reserved.",
      backToTop: "Back to Top ↑",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
    hero: {
      location: "Arequipa / Perú",
      title: "Desarrollador Full Stack",
      submeta: "React · Node.js · TypeScript",
      motto:
        "Construyendo aplicaciones web resilientes, asistentes de IA con RAG híbrido y Meta Llama 3.2, y sistemas en producción con impacto real.",
      emailAria: "Copiar correo al portapapeles",
    },
    about: {
      eyebrow: "Sobre mí",
      heading: "Uniendo Ingeniería Full Stack, IA con RAG Híbrido y Resultados Reales",
      degreeTitle: "Egresado en Diseño y Desarrollo de Software",
      degreeInstitution: "TECSUP · Tercio Superior, Promedio 18/20 · Título en Trámite",
      lead1:
        "Desarrollador Full Stack con experiencia freelance desde 2022 creando soluciones de software para negocios, utilizando React desde 2023 y trabajando con TypeScript, Node.js, Python y Django.",
      lead2:
        "Fundador de AhorraTiempo.pe: diseñé y puse en producción una plataforma de orientación ciudadana que integra LOTA IA (Meta Llama 3.2), RAG híbrido (Cloudflare D1, FTS5, Vectorize y embeddings) y un pipeline de extracción con Node.js y Cheerio para aproximadamente 3,033 trámites de 41 entidades públicas peruanas.",
      lead3:
        "Contribuí al desarrollo de Controla.pe en SERVILEX Legal IT (frontend en React y backend REST en Django). Certificado como AI Engineer for Developers Associate por DataCamp (octubre 2026). Enfocado en APIs confiables, código mantenible y soluciones de impacto real.",
      featuredBadge: "Stack Técnico y Enfoque",
      featuredHeading: "Competencias Principales y Arquitectura Técnica",
      pRecommenders:
        "Desarrollo Web Full Stack y APIs: Creación de aplicaciones modulares con React 18, TypeScript, Vite, Tailwind CSS, Node.js, Express, Python y Django REST Framework.",
      pAiAgents:
        "RAG Híbrido e Ingeniería de IA: Implementación de LOTA IA con Meta Llama 3.2, Workers AI, embeddings, búsqueda vectorial (Vectorize), Cloudflare D1 con FTS5 y Google Antigravity CLI.",
      pAhorratiempo:
        "Fundador de ahorratiempo.pe: Plataforma en producción que reduce tiempos de consulta en un 70%, integrando Server-Sent Events (SSE) y validación de enlaces oficiales del Estado peruano.",
      pMobile:
        "Cloud, DevOps y Móvil: Docker, Docker Compose, Cloudflare Workers, Firebase Firestore/Hosting, PostgreSQL, Redis, Apache Kafka, IoT (Arduino, MQTT, Mosquitto) y apps móviles con Flutter y React Native.",
      focusPrefix: "Enfoque Actual:",
      focusText:
        "Desarrollo Full Stack con React, Node.js, TypeScript, Cloudflare Workers AI edge computing y arquitecturas de RAG híbrido.",
      pillars: [
        {
          title: "Frontend y Full Stack",
          desc: "React 18, TypeScript, JavaScript (ES6+), Vite, Tailwind CSS, Node.js, Express y APIs REST estructuradas.",
        },
        {
          title: "IA y RAG Híbrido",
          desc: "Meta Llama 3.2, Workers AI, Vectorize, Cloudflare D1 (FTS5), embeddings vectoriales y flujos con agentes de IA.",
        },
        {
          title: "Cloud y DevOps",
          desc: "Docker, Docker Compose, Cloudflare Workers, Firebase Hosting, Git, GitHub, Postman y laboratorios AWS (EC2, S3, RDS, Lambda).",
        },
        {
          title: "Mensajería, IoT y Móvil",
          desc: "Apache Kafka, RabbitMQ, MQTT, Mosquitto, prototipos IoT con Arduino, Flutter & Dart y React Native.",
        },
      ],
    },
    services: {
      eyebrow: "SOLUCIONES & ARQUITECTURA",
      heading: "Ingeniería Especializada para Productos Digitales de Alto Impacto",
      consoleDegree: "Título Profesional Técnico · Diseño y Des. de Software (TECSUP · 18/20)",
      consoleRole: "Desarrollador Full Stack | React · Node.js · TypeScript",
      items: [
        "Desarrollo Web Full Stack (React, TypeScript, Node.js, Vite, Tailwind CSS)",
        "Sistemas de IA & RAG Híbrido (Meta Llama 3.2, Workers AI, Vectorize, Embeddings)",
        "Arquitectura de Backend y APIs (Python, Django, Flask, Express, APIs REST)",
        "Cómputo en el Borde y Cloud (Cloudflare Workers, D1, Docker Compose, Firebase)",
        "Soluciones Móviles e IoT (Flutter, Dart, React Native, Arduino, MQTT)",
        "Pipelines de Datos y Mensajería (Apache Kafka, RabbitMQ, Scraping con Cheerio)",
      ],
    },
    projects: {
      eyebrow: "Proyectos Destacados",
      heading: "De la Arquitectura a Producción con Impacto Medible",
      subheading:
        "Muestra interactiva de plataformas en producción, integraciones con IA, aplicaciones móviles y soluciones de IoT industrial.",
      categories: {
        all: "Todos",
        aiWeb: "IA & Full Stack",
        mobile: "Móvil & IoT",
        cloudSystems: "Cloud & Sistemas",
      },
      copyEmail: "Copiar correo",
      copiedEmail: "¡Correo copiado!",
      visitProject: "Visitar Plataforma en Vivo",
      viewGithub: "Ver Código en GitHub",
      viewCaseStudy: "Ver Caso de Estudio",
      closeCaseStudy: "Cerrar Caso de Estudio",
      caseStudyTag: "CASO DE ESTUDIO TÉCNICO",
      measurableImpact: "Impacto Medible",
      architectureHeader: "Arquitectura y Ejecución del Sistema",
      problemTitle: "Problema & Desafío de Negocio",
      solutionTitle: "Solución de Ingeniería",
      technologiesTitle: "Tecnologías & Infraestructura",
      technologiesLabel: "Tecnologías",
      projectCounter: "Proyecto",
      scrollHint: "Desliza para explorar",
      items: [
        {
          tag: "SAAS CIUDADANO CON IA",
          title: "ahorratiempo.pe",
          desc: "Plataforma de orientación ciudadana con IA para trámites administrativos en Perú. Asistente por voz inteligente, búsqueda veloz y pagos en línea con Culqi.",
          metrics: "70% reducción de tiempo · 99.4% precisión de intents",
          impactList: [
            { value: "70%", label: "Reducción de tiempo con Voice AI" },
            { value: "99.4%", label: "Precisión de intents ciudadanos" },
            { value: "3.5 sem", label: "Lanzamiento rápido en producción" },
          ],
        },
        {
          tag: "PLATAFORMA CLOUD & LEGAL IT",
          title: "CONTROLA Servilex",
          desc: "Software de gestión corporativa y cumplimiento legal en seguridad laboral (SG-SST). Arquitectura multi-tenant en PostgreSQL con seguridad por roles.",
          metrics: "100% cumplimiento normativo · Seguridad multi-tenant",
          impactList: [
            { value: "100%", label: "Cumplimiento normativo SG-SST garantizado" },
            { value: "85%", label: "Ahorro de tiempo en auditorías" },
            { value: "0", label: "Fugas de datos entre empresas clientes" },
          ],
        },
        {
          tag: "APP MÓVIL MULTIPLATAFORMA",
          title: "CHANSA App Móvil",
          desc: "Marketplace móvil on-demand que conecta usuarios con técnicos y profesionales de mantenimiento. Chat en tiempo real, GPS y notificaciones push inmediatas.",
          metrics: "Sincronización en tiempo real · Notificaciones instantáneas",
          impactList: [
            { value: "< 50ms", label: "Latencia sub-50ms en chat en vivo" },
            { value: "100%", label: "Geofencing automático para contratistas" },
          ],
        },
        {
          tag: "IOT & TELEMETRÍA INDUSTRIAL",
          title: "Safety Helmet IoT",
          desc: "Sistema de seguridad industrial que monitorea impacto físico, concentración de gases tóxicos y geolocalización en faenas de alto riesgo.",
          metrics: "Alertas inmediatas · Telemetría continua",
          impactList: [
            { value: "< 200ms", label: "Alerta de impacto y gases en faena" },
            { value: "MQ-2", label: "Telemetría de gases tóxicos" },
          ],
        },
        {
          tag: "FINTECH & FACTURACIÓN ELECTRÓNICA",
          title: "Facturación & Billing Engine",
          desc: "Motor de cobro e integración con pasarela de pagos Culqi y facturación electrónica automatizada con validación SUNAT para empresas.",
          metrics: "Culqi API · XML/CDR SUNAT · Microservicios",
          impactList: [
            { value: "99.8%", label: "Éxito transaccional con pasarela Culqi" },
            { value: "< 800ms", label: "Firma y validación XML/CDR SUNAT" },
          ],
        },
        {
          tag: "APP DE INSPECCIÓN EN CAMPO",
          title: "App Fiscalización Digital Joya",
          desc: "App para fiscalizadores municipales con soporte 100% offline, almacenamiento local SQLite y sincronización por lotes para auditorías en campo.",
          metrics: "100% offline-first · Cero pérdida de datos",
          impactList: [
            { value: "100%", label: "Operatividad offline en tablets de campo" },
            { value: "0%", label: "Colisiones de datos al sincronizar" },
          ],
        },
      ],
      caseStudies: {
        "ahorratiempo.pe": {
          id: "ahorratiempo.pe",
          title: "ahorratiempo.pe - SaaS Ciudadano con IA",
          subtitle: "Optimizando Trámites Administrativos en el Estado Peruano mediante Voice AI & Next.js",
          client: "Producto SaaS Propio / Iniciativa GovTech Ciudadana",
          role: "Fundador, Arquitecto de Software & Desarrollador Principal Full Stack",
          duration: "4 Meses (MVP a Producción)",
          summary:
            "Ahorratiempo.pe es una plataforma cívica con inteligencia artificial diseñada para eliminar la burocracia y la desorientación que enfrentan los ciudadanos al realizar trámites gubernamentales en el Perú. Con una arquitectura centrada en la voz, interfaces reactivas modernas y una pasarela de pagos blindada, el tiempo de resolución bajó de horas a minutos.",
          impactMetrics: [
            {
              value: "70%",
              label: "Reducción de Tiempo de Consulta",
              detail: "El tiempo para comprender y tramitar pasó de 45 minutos de búsqueda caótica a menos de 2 minutos mediante el asistente de voz.",
            },
            {
              value: "99.4%",
              label: "Precisión de Respuestas",
              detail: "Búsqueda vectorial contextual que previene alucinaciones y fundamenta las respuestas en la normativa legal vigente.",
            },
            {
              value: "99.8%",
              label: "Éxito en Pagos Culqi",
              detail: "Cero transacciones caídas gracias a un sistema de reintentos idempotentes y verificación de webhooks en segundo plano.",
            },
            {
              value: "3.5 Semanas",
              label: "Tiempo a Producción",
              detail: "Ciclo de desarrollo ágil basado en sprints que llevó la plataforma desde el prototipo hasta el lanzamiento oficial.",
            },
          ],
          problem:
            "Los ciudadanos pierden decenas de horas intentando descifrar requisitos contradictorios, PDFs municipales obsoletos y horarios dispersos en decenas de entidades públicas, generando frustración masiva y colas interminables.",
          solution:
            "Diseñé e implementé una aplicación web omnicanal con reconocimiento de voz en tiempo real y búsqueda semántica indexada. El ciudadano habla de manera natural y recibe al instante la ruta exacta paso a paso, costos oficiales, ubicaciones y la opción de pago de tasas en línea.",
          architectureHighlights: [
            "Next.js App Router con React Server Components para renderizado en servidor ultra rápido.",
            "Pipeline de streaming de voz con Web Audio API y transcripción fonética optimizada.",
            "Caché en el borde y mitigación DDoS mediante Cloudflare Workers y KV distribuido.",
            "Integración de pasarela de pagos Culqi con verificación criptográfica y webhooks idempotentes.",
          ],
          techStack: [
            "React 18",
            "Next.js",
            "TypeScript",
            "Voice AI",
            "Tailwind CSS",
            "Culqi Gateway",
            "Cloudflare Workers",
          ],
          liveUrl: "https://ahorratiempo.pe",
          githubUrl: "https://github.com/dennys3mf",
        },
        "controla-servilex": {
          id: "controla-servilex",
          title: "CONTROLA Servilex - Plataforma Cloud & Legal IT",
          subtitle: "SaaS Corporativo para Gestión de Seguridad y Salud en el Trabajo (SG-SST) y Fiscalización SUNAFIL",
          client: "Servilex Soluciones Corporativas",
          role: "Ingeniero Full Stack & Bases de Datos Principal",
          duration: "6 Meses",
          summary:
            "CONTROLA es un software corporativo en la nube diseñado para empresas industriales que automatiza el cumplimiento del sistema SG-SST, el seguimiento de exámenes médicos ocupacionales y la preparación de auditorías de fiscalización laboral.",
          impactMetrics: [
            {
              value: "100%",
              label: "Cumplimiento Normativo SG-SST",
              detail: "Cero sanciones o multas laborales en todas las empresas clientes durante periodos auditados.",
            },
            {
              value: "85%",
              label: "Ahorro de Tiempo en Auditorías",
              detail: "La validación digital de expedientes redujo las revisiones manuales de 4 días a 4 horas por planta.",
            },
            {
              value: "0 Incidentes",
              label: "Aislamiento Entre Clientes",
              detail: "Seguridad por nivel de filas (RLS) en base de datos garantizando privacidad corporativa estricta.",
            },
            {
              value: "99.95%",
              label: "Disponibilidad del Sistema",
              detail: "Despliegue contenerizado con respaldos diarios y failover automatizado.",
            },
          ],
          problem:
            "Las grandes empresas tenían dificultades para monitorear cientos de inspecciones, certificados médicos de trabajadores y actas de comités de seguridad en plantas industriales dispersas, enfrentando riesgos de multas millonarias por parte de SUNAFIL.",
          solution:
            "Construí un backend robusto en Python y Django con PostgreSQL y seguridad por filas (RLS). Implementé un sistema de alertas proactivas, control de accesos por roles (RBAC) y tableros interactivos con mapas de calor de riesgo en tiempo real.",
          architectureHighlights: [
            "Arquitectura Multi-Tenant en PostgreSQL con esquemas aislados por empresa.",
            "Backend en Python y Django REST Framework con tipado riguroso y cobertura de pruebas.",
            "Workers en segundo plano para notificaciones automáticas de certificados por vencer.",
            "Control de accesos basado en roles (RBAC) con trazabilidad auditable para fiscalizaciones oficiales.",
          ],
          techStack: [
            "Python",
            "Django",
            "PostgreSQL",
            "Docker",
            "Normativa SG-SST",
            "REST APIs",
            "Celery",
          ],
          liveUrl: "https://github.com/dennys3mf",
          githubUrl: "https://github.com/dennys3mf",
        },
        "chansa-app": {
          id: "chansa-app",
          title: "CHANSA - Marketplace Móvil On-Demand",
          subtitle: "Plataforma Móvil en Tiempo Real con Geolocalización y Firebase para Servicios Locales",
          client: "Startup CHANSA",
          role: "Arquitecto Móvil & Desarrollador Full Stack",
          duration: "3 Meses",
          summary:
            "CHANSA conecta hogares y comercios con técnicos locales certificados, electricistas y especialistas de mantenimiento mediante despacho inmediato geolocalizado.",
          impactMetrics: [
            {
              value: "< 50ms",
              label: "Latencia de Mensajería",
              detail: "Comunicación fluida y entrega de mensajes instantánea con Firebase live listeners.",
            },
            {
              value: "100%",
              label: "Precisión de Geofence",
              detail: "Filtrado espacial por radio de cobertura que evita solicitudes a técnicos fuera de ruta.",
            },
            {
              value: "4.9 / 5",
              label: "Satisfacción en Campo",
              detail: "Alta fidelización de contratistas y usabilidad intuitiva en pruebas beta.",
            },
            {
              value: "60 FPS",
              label: "Rendimiento Visual",
              detail: "Animaciones y transiciones 100% fluidas en dispositivos Android e iOS de gama media y alta.",
            },
          ],
          problem:
            "Contratar especialistas confiables en ciudades peruanas dependía de recomendaciones inseguras, sin garantía de precios ni trazabilidad de tiempos de llegada.",
          solution:
            "Desarrollé una aplicación móvil reactiva en Flutter con emparejamiento geolocalizado en tiempo real, chat integrado, perfiles verificados y notificaciones push inmediatas.",
          architectureHighlights: [
            "Arquitectura Flutter y Dart compilada nativamente para Android e iOS.",
            "Sincronización en tiempo real con Cloud Firestore y manejo de estados optimistas.",
            "Integración del API de geolocalización con consumo optimizado de batería.",
            "Cloud Functions para envío automático de notificaciones push y cálculo de calificaciones.",
          ],
          techStack: [
            "Flutter",
            "Dart",
            "Firebase",
            "Cloud Firestore",
            "Google Maps API",
            "FCM Push",
          ],
          liveUrl: "https://github.com/dennys3mf",
          githubUrl: "https://github.com/dennys3mf",
        },
        "safety-helmet": {
          id: "safety-helmet",
          title: "Safety Helmet IoT - Telemetría y Seguridad Industrial",
          subtitle: "Dispositivo Wearable Inteligente con Detección de Gases, Impactos y GPS",
          client: "Laboratorio de Innovación TECSUP",
          role: "Ingeniero de Firmware, Hardware & Integración Full Stack",
          duration: "4 Meses",
          summary:
            "Dispositivo wearable de Internet de las Cosas (IoT) integrado en cascos industriales para proteger al personal minero y de construcción en faenas de alto riesgo.",
          impactMetrics: [
            {
              value: "< 200ms",
              label: "Tiempo de Respuesta",
              detail: "Transmisión inmediata de alertas a la central de control ante caídas o impactos severos.",
            },
            {
              value: "MQ-2",
              label: "Sensor de Gases Calibrado",
              detail: "Medición constante de monóxido de carbono y gases inflamables con umbrales de emergencia.",
            },
            {
              value: "12 Horas",
              label: "Autonomía de Batería",
              detail: "Modos de bajo consumo energético en microcontroladores para cubrir turnos completos.",
            },
            {
              value: "100%",
              label: "Registro de Incidentes",
              detail: "Memoria interna EEPROM para resguardo de telemetría en zonas sin cobertura de radio.",
            },
          ],
          problem:
            "Operadores mineros e industriales sufren accidentes por inhalación de gases invisibles y golpes traumáticos en túneles sin señal de telefonía tradicional.",
          solution:
            "Diseñé un circuito embebido montado en cascos de protección con sensores MQ-2, acelerómetro para detección de caídas, módulo GPS y microservicios para la central de mando.",
          architectureHighlights: [
            "Firmware C++ sobre microcontroladores con interrupciones de hardware prioritarias.",
            "Arreglo de sensores MQ-2 calibrados según estándares internacionales de seguridad química.",
            "Módulo de telemetría GPS para transmisión periódica de coordenadas de rescate.",
            "Backend en Python que procesa flujos de telemetría y renderiza alertas en WebSockets.",
          ],
          techStack: [
            "C++",
            "Arduino",
            "Sensores MQ-2",
            "Telemetría GPS",
            "Python API",
            "WebSockets",
          ],
          liveUrl: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
          githubUrl: "https://github.com/dennys3mf/Proyecto-Casco-Seguridad-IoT",
        },
        "fintech-sunat": {
          id: "fintech-sunat",
          title: "Facturación & Billing Engine SUNAT",
          subtitle: "Motor Financiero de Cobros con Culqi y Emisión Electrónica Homologada con SUNAT",
          client: "Empresas B2B / Clientes de Software Financiero",
          role: "Arquitecto Backend & Desarrollador de APIs",
          duration: "3 Meses",
          summary:
            "Motor financiero de alta confiabilidad que procesa transacciones con tarjeta vía Culqi y genera comprobantes de pago electrónicos homologados con la normativa tributaria peruana.",
          impactMetrics: [
            {
              value: "99.8%",
              label: "Tasa de Éxito en Cobros",
              detail: "Tokenización Culqi con política de reintentos exponenciales ante fallas transitorias de red.",
            },
            {
              value: "< 800ms",
              label: "Firma y Envío XML",
              detail: "Firma criptográfica y comunicación SOAP con SUNAT en menos de un segundo por factura.",
            },
            {
              value: "0 Errores",
              label: "Tasa de Rechazo Fiscal",
              detail: "Prevalidación de esquemas tributarios que previene rechazos de RUCs y cálculos de IGV.",
            },
            {
              value: "100%",
              label: "Trazabilidad Contable",
              detail: "Libro mayor inmutable con almacenamiento seguro de archivos CDR y XML certificados.",
            },
          ],
          problem:
            "Las empresas sufren caídas de cobro en pasarelas, errores de digitación en facturas y cuantiosas multas de SUNAT debido a discrepancias en el formato XML de los comprobantes.",
          solution:
            "Construí un backend resiliente en Python que automatiza la tokenización con Culqi, genera documentos XML bajo el estándar UBL 2.1, aplica firma digital y recibe las constancias CDR de SUNAT.",
          architectureHighlights: [
            "Arquitectura desacoplada en microservicios con colas de procesamiento asíncronas.",
            "Motor de firma electrónica compatible con certificados digitales oficiales peruanos.",
            "Webhooks idempotentes para confirmar transacciones y conciliar pagos bancarios.",
            "Base de datos relacional PostgreSQL para auditoría fiscal con integridad referencial estricta.",
          ],
          techStack: [
            "Python",
            "Culqi API",
            "XML/CDR SUNAT",
            "PostgreSQL",
            "SOAP & REST",
            "Docker",
          ],
          liveUrl: "https://github.com/dennys3mf",
          githubUrl: "https://github.com/dennys3mf",
        },
        "fiscalizacion-joya": {
          id: "fiscalizacion-joya",
          title: "App Fiscalización Digital Joya",
          subtitle: "Sistema Móvil Offline-First para Fiscalizadores Municipales en Terreno",
          client: "Municipalidad Distrital de La Joya, Arequipa",
          role: "Arquitecto Móvil & Desarrollador del Sistema",
          duration: "3 Meses",
          summary:
            "Aplicación en tabletas Android diseñada para auditores e inspectores municipales de fiscalización tributaria y comercial en zonas rurales sin acceso a internet.",
          impactMetrics: [
            {
              value: "100%",
              label: "Operatividad Offline",
              detail: "Los inspectores completan actas detalladas de fiscalización sin conexión a internet.",
            },
            {
              value: "0%",
              label: "Colisiones de Sincronización",
              detail: "Protocolo determinista de resolución de conflictos al transmitir lotes de actas al servidor central.",
            },
            {
              value: "4x",
              label: "Aumento de Productividad",
              detail: "Los inspectores pasaron de 6 actas físicas en papel carbón a 24 auditorías digitales por turno.",
            },
            {
              value: "Inmediata",
              label: "Emisión de Notificaciones",
              detail: "Generación de actas digitales inviolables en PDF con soporte para impresión térmica en campo.",
            },
          ],
          problem:
            "Los fiscalizadores en zonas agrícolas de La Joya utilizaban formularios físicos de papel carbón que se deterioraban con el polvo, se extraviaban y tomaban semanas en digitalizarse.",
          solution:
            "Desarrollé una aplicación en Flutter optimizada para tablets Android con base de datos SQLite local, captura fotográfica georreferenciada, firma digital y sincronización inteligente.",
          architectureHighlights: [
            "Arquitectura offline-first utilizando SQLite como única fuente de verdad en campo.",
            "Sellado criptográfico de fotografías tomadas en el lugar con coordenadas GPS incrustadas.",
            "Algoritmo de sincronización diferencial que comprime y despacha actas al detectar red.",
            "Compatibilidad directa con impresoras térmicas portátiles por Bluetooth.",
          ],
          techStack: [
            "Flutter",
            "Dart",
            "SQLite Local",
            "Offline-First Sync",
            "Android Tablet SDK",
            "Cámara & GPS",
          ],
          liveUrl: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
          githubUrl: "https://github.com/dennys3mf/App-Fiscalizacion-Joya",
        },
      },
    },
    process: {
      heading: "De la Arquitectura a Producción con Impacto Medible",
      subheading:
        "Un proceso de 3 fases estructurado para construir software de alto rendimiento, código tipado y despliegues estables sin magia negra.",
      step1: {
        title: "Escuchar y Modelar",
        desc: "Nos sentamos a conversar sobre el problema real, las restricciones técnicas y los flujos de datos. No toco una sola línea de código hasta tener clara la arquitectura, los esquemas de datos y las métricas de éxito.",
        nodeUser: "Cliente / Entrada de Voz",
        nodeEdge: "Cloudflare Edge",
        nodeAgent: "Agente de IA & Router",
        nodeApi: "API Python / Node",
        nodeVector: "PostgreSQL & pgvector",
      },
      step2: {
        title: "Construir & Validar",
        desc: "Desarrollo iterativo con código limpio fuertemente tipado en TypeScript y Python. Entregas continuas para probar el software desde la primera semana con cobertura de tests.",
      },
      step3: {
        title: "Poner en Marcha & Medir",
        desc: "Despliegues en servidores cloud seguros con monitoreo en tiempo real, CI/CD automatizado, documentación exhaustiva y acompañamiento continuo a tu equipo.",
      },
    },
    why: {
      eyebrow: "Por Qué Trabajar Conmigo",
      heading: "Excelencia en Ingeniería que Genera Valor Tangible de Negocio",
      pillars: [
        {
          title: "Autonomía Full Stack & Edge",
          desc: "Ejecución integral desde modelos de bases de datos y APIs REST hasta interfaces reactivas en Next.js y funciones de baja latencia en Cloudflare Workers.",
        },
        {
          title: "Machine Learning y Sistemas de Recomendación",
          desc: "Experiencia práctica implementando filtrado colaborativo y algoritmos inspirados en Netflix y TikTok, procesando grandes volúmenes con PySpark.",
        },
        {
          title: "Agentes de IA y LLMs para Producción",
          desc: "Interfaces conversacionales reales, agentes autónomos con llamadas a herramientas y automatización de flujos que eliminan tareas operativas manuales.",
        },
        {
          title: "Mentalidad Orientada a Negocio",
          desc: "Software diseñado en función de KPIs reales: tasas de conversión, retención de usuarios, velocidad de respuesta y estabilidad absoluta en producción.",
        },
      ],
    },
    contact: {
      headingPart1: "¿Tienes un proyecto o",
      headingHighlight1: "oportunidad en mente?",
      headingPart2: "Construyamos algo con",
      headingHighlight2: "impacto real.",
      subtext:
        "Disponible para roles como Desarrollador Full Stack | React, Node.js & TypeScript, consultoría de software y contratos remotos internacionales.",
      ctaButton: "Conversar por WhatsApp",
      downloadCV: "Descargar CV (PDF)",
      card1Title: "Full Stack Development",
      card1Sub: "React 18 · TypeScript · Node.js · Vite",
      card2Title: "IA & RAG Híbrido",
      card2Sub: "Meta Llama 3.2 · Workers AI · Vectorize",
      card3Title: "Cloud & DevOps",
      card3Sub: "Docker Compose · D1 · PostgreSQL · APIs",
      badgeText: "✦ DISPONIBLE PARA PROYECTOS • FULL STACK & IA • AREQUIPA · PERÚ •",
      notesTop: ["Buenas ideas", "Mejores productos", "Impacto real"],
      notesBottom: ["Tecnología", "Personas", "Resultados"],
    },
    footer: {
      tagline: "Construyendo productos digitales que generan impacto real en el negocio.",
      navTitle: "Navegación",
      connectTitle: "Conectar",
      rights: "Dennys Gabriel Márquez Flores. Todos los derechos reservados.",
      backToTop: "Volver Arriba ↑",
    },
  },
};
