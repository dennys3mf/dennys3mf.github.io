export type Language = "en" | "es";

export interface TranslationContent {
  nav: {
    home: string;
    work: string;
    about: string;
    experience: string;
    services: string;
    contact: string;
    resume: string;
    workWithMe: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaRecruiter: string;
  };
  selectedWork: {
    eyebrow: string;
    heading: string;
    description: string;
    readCaseStudy: string;
    viewAll: string;
    liveDemo: string;
    sourceCode: string;
    technologies: string;
    role: string;
  };
  whatIBring: {
    eyebrow: string;
    heading: string;
    subheading: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
  };
  howIWork: {
    eyebrow: string;
    heading: string;
    subheading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  aboutPreview: {
    eyebrow: string;
    heading: string;
    text1: string;
    text2: string;
    link: string;
  };
  dualConversion: {
    teamsTitle: string;
    teamsDesc: string;
    teamsCta: string;
    businessTitle: string;
    businessDesc: string;
    businessCta: string;
  };
  finalCta: {
    heading: string;
    text: string;
    cta: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    connect: string;
    rights: string;
    backToTop: string;
  };
  workPage: {
    heading: string;
    description: string;
    filterAll: string;
    filterSaas: string;
    filterFintech: string;
    filterCloud: string;
    filterMobile: string;
    readCaseStudy: string;
    liveWeb: string;
    sourceCode: string;
  };
  caseStudy: {
    backToWork: string;
    projectOverview: string;
    theProblem: string;
    goalsAndConstraints: string;
    myApproach: string;
    theSolution: string;
    engineeringDecisions: string;
    architecture: string;
    apisAndState: string;
    dataPersistence: string;
    performanceAndSecurity: string;
    resultsAndLearnings: string;
    measuredResults: string;
    verifiableFeatures: string;
    keyLearnings: string;
    nextSteps: string;
    nextProject: string;
    discussAProject: string;
    roleLabel: string;
    yearLabel: string;
    statusLabel: string;
    technologiesLabel: string;
  };
  aboutPage: {
    eyebrow: string;
    heading: string;
    lead: string;
    bioP1: string;
    bioP2: string;
    bioP3: string;
    educationTitle: string;
    philosophyTitle: string;
    philosophyQuote: string;
    philosophyP1: string;
    philosophyP2: string;
    principlesTitle: string;
    principles: Array<{ title: string; desc: string }>;
  };
  experiencePage: {
    eyebrow: string;
    heading: string;
    description: string;
    downloadCv: string;
    discussRole: string;
    skillsHeading: string;
    careerHeading: string;
    educationHeading: string;
    languagesHeading: string;
  };
  servicesPage: {
    eyebrow: string;
    heading: string;
    description: string;
    discussProject: string;
    servicesList: Array<{
      title: string;
      subtitle: string;
      desc: string;
      deliverables: string[];
    }>;
    processTitle: string;
    processSubtitle: string;
    processSteps: Array<{
      step: string;
      title: string;
      desc: string;
    }>;
  };
  contactPage: {
    heading: string;
    description: string;
    intentHiring: string;
    intentProject: string;
    hiringSubtitle: string;
    projectSubtitle: string;
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    roleLabel: string;
    messageLabel: string;
    projectTypeLabel: string;
    timelineLabel: string;
    budgetLabel: string;
    submitHiring: string;
    submitProject: string;
    emailDirectly: string;
    copyEmail: string;
    copiedEmail: string;
    requiredField: string;
    invalidEmail: string;
    messageTooShort: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      experience: "Experience",
      services: "Services",
      contact: "Contact",
      resume: "Resume",
      workWithMe: "Work with me",
    },
    hero: {
      eyebrow: "Full Stack Developer in Peru",
      headline: "I build software that makes complex things feel simple",
      description:
        "I'm Dennys, a Full Stack Developer focused on creating intuitive web applications and practical digital solutions. I combine engineering, thoughtful design, and product thinking to build software that serves real needs.",
      ctaPrimary: "Explore my work",
      ctaSecondary: "Work with me",
      ctaRecruiter: "Looking for a developer? View my experience.",
    },
    selectedWork: {
      eyebrow: "Selected Work",
      heading: "Featured Projects",
      description:
        "A selection of projects where design, technology, and problem-solving come together.",
      readCaseStudy: "Read case study",
      viewAll: "View all work",
      liveDemo: "Live Web",
      sourceCode: "GitHub",
      technologies: "Technologies",
      role: "Role",
    },
    whatIBring: {
      eyebrow: "Capabilities and Approach",
      heading: "More than code",
      subheading:
        "Software engineering grounded in product thinking and human usability.",
      p1Title: "Product Thinking",
      p1Desc:
        "I look beyond features to understand the problem a product needs to solve.",
      p2Title: "Thoughtful Engineering",
      p2Desc:
        "I focus on building maintainable applications with clear structure and reliable behavior.",
      p3Title: "User Experience",
      p3Desc:
        "I believe useful software should also feel intuitive, accessible, and pleasant to use.",
    },
    howIWork: {
      eyebrow: "Methodology",
      heading: "From idea to implementation",
      subheading:
        "A structured, transparent process designed for reliability and real delivery.",
      step1Title: "Understand",
      step1Desc: "Clarify the problem, audience, and commercial goals.",
      step2Title: "Plan",
      step2Desc: "Define scope, technical architecture, and milestones.",
      step3Title: "Build",
      step3Desc: "Develop and validate the solution with clean typed code.",
      step4Title: "Improve",
      step4Desc: "Refine the experience based on telemetry, feedback, and real use.",
    },
    aboutPreview: {
      eyebrow: "About Me",
      heading: "The person behind the code",
      text1:
        "My background in software development has shaped the way I approach digital products: with curiosity, structure, and attention to detail.",
      text2:
        "I'm also interested in how technology supports businesses, improves processes, and creates useful experiences.",
      link: "More about me",
    },
    dualConversion: {
      teamsTitle: "For teams",
      teamsDesc:
        "Looking for a developer who cares about both the product and the code?",
      teamsCta: "Explore my experience",
      businessTitle: "For businesses",
      businessDesc:
        "Have an idea, workflow, or digital product you want to build?",
      businessCta: "Discuss your project",
    },
    finalCta: {
      heading: "Let's build something useful",
      text:
        "Whether you're hiring for your team or planning a new digital product, I'd love to hear what you're working on.",
      cta: "Start a conversation",
    },
    footer: {
      tagline:
        "Building intuitive digital products that solve real problems.",
      navigation: "Navigation",
      connect: "Connect",
      rights: "All rights reserved.",
      backToTop: "Back to Top ↑",
    },
    workPage: {
      heading: "Work that speaks for itself",
      description:
        "A closer look at the products I've built, the problems behind them, and the decisions that shaped each solution.",
      filterAll: "All Projects",
      filterSaas: "SaaS & AI",
      filterFintech: "Fintech",
      filterCloud: "Cloud Systems",
      filterMobile: "Mobile & IoT",
      readCaseStudy: "Read case study",
      liveWeb: "Live Web",
      sourceCode: "GitHub",
    },
    caseStudy: {
      backToWork: "← Back to all projects",
      projectOverview: "Project Overview",
      theProblem: "The Problem",
      goalsAndConstraints: "Goals & Constraints",
      myApproach: "My Approach",
      theSolution: "The Solution",
      engineeringDecisions: "Engineering Decisions",
      architecture: "System Architecture",
      apisAndState: "APIs & State Management",
      dataPersistence: "Data Persistence & Schemas",
      performanceAndSecurity: "Performance & Security",
      resultsAndLearnings: "Results & Learnings",
      measuredResults: "Verified Impact",
      verifiableFeatures: "Verifiable Capabilities",
      keyLearnings: "Key Learnings",
      nextSteps: "Next Steps",
      nextProject: "Next Project",
      discussAProject: "Discuss this project with Dennys",
      roleLabel: "Role",
      yearLabel: "Year",
      statusLabel: "Status",
      technologiesLabel: "Technologies",
    },
    aboutPage: {
      eyebrow: "About Me",
      heading: "A little about me",
      lead:
        "I'm a Full Stack Developer based in Peru. I build software that solves tangible problems for businesses and everyday users.",
      bioP1:
        "My journey in technology started with a passion for building tools that streamline everyday work. I earned my Professional Technical Degree in Software Design and Development from TECSUP (graduated in 2024), where I built rigorous foundations in software engineering, algorithms, database architectures, and distributed systems.",
      bioP2:
        "Alongside software, my background includes academic studies in Accounting and Finance at Universidad Continental. This dual foundation gives me a unique advantage: I don't just write code; I understand cash flows, fiscal compliance (such as SUNAT regulations), unit economics, and operational efficiency.",
      bioP3:
        "Today, I build web and mobile applications using React, Next.js, TypeScript, and Python. Whether developing consumer SaaS platforms like AhorraTiempo or enterprise compliance engines like CONTROLA Cloud, my goal is always the same: make complex processes feel simple, reliable, and human.",
      educationTitle: "Education & Formal Background",
      philosophyTitle: "Working Philosophy",
      philosophyQuote: "Good software starts with understanding people.",
      philosophyP1:
        "Technology matters, but so do clarity, usability, maintainability, and the decisions behind the product.",
      philosophyP2:
        "I approach projects with an ownership mindset: asking the hard questions early, reducing friction for the end user, and keeping codebases clean and auditable.",
      principlesTitle: "Principles I Build By",
      principles: [
        {
          title: "Clarity Before Code",
          desc: "Never write a line of code until the actual user problem and business constraints are well understood.",
        },
        {
          title: "Maintainable Simplicity",
          desc: "Prefer clean, typed, and predictable architectures over clever hacks or over-engineered abstractions.",
        },
        {
          title: "Respect for the User",
          desc: "Fast load times, accessible contrast, intuitive forms, and zero friction are non-negotiable standards.",
        },
        {
          title: "Pragmatic Business Impact",
          desc: "Software is an investment. Every feature must deliver measurable value, whether saving time, eliminating errors, or driving revenue.",
        },
      ],
    },
    experiencePage: {
      eyebrow: "Career and Experience",
      heading: "Experience & technical skill",
      description:
        "A transparent breakdown of my technical background, verified engineering competencies, education, and career milestones.",
      downloadCv: "Download Resume (PDF)",
      discussRole: "Discuss a role",
      skillsHeading: "Technical Skill Matrix",
      careerHeading: "Work & Project History",
      educationHeading: "Education & Qualifications",
      languagesHeading: "Languages",
    },
    servicesPage: {
      eyebrow: "Software Services",
      heading: "Software solutions built around your needs",
      description:
        "From web applications to internal tools, I help turn ideas and operational challenges into practical, maintainable digital solutions.",
      discussProject: "Tell me about your project",
      servicesList: [
        {
          title: "Web Applications & MVPs",
          subtitle: "From validated concept to production-ready software.",
          desc: "End-to-end development of responsive web applications, SaaS prototypes, and MVP releases built with Next.js, React, TypeScript, and robust backend APIs.",
          deliverables: [
            "Clean, responsive UI with modern component architecture",
            "Secure authentication and role-based access control",
            "Payment gateway integration (Stripe, Culqi, etc.)",
            "Automated CI/CD and production deployment",
          ],
        },
        {
          title: "Business Process Automation",
          subtitle: "Eliminate repetitive manual tasks and data entry.",
          desc: "Bespoke integrations, background workers, and automated document generation that bridge disconnected tools and simplify daily operational workflows.",
          deliverables: [
            "Custom API integrations and automated webhooks",
            "Scheduled data synchronization pipelines",
            "Automated PDF, Excel, and fiscal invoice generation",
            "Audit trails and error notification logging",
          ],
        },
        {
          title: "Dashboards & Internal Tools",
          subtitle: "Actionable operational data at a glance.",
          desc: "Tailored management portals and administrative backoffices that give teams real-time control over their business operations, inventory, or compliance data.",
          deliverables: [
            "Data visualization and key metric tracking",
            "Role-based multi-user permissions",
            "Fast search, filtering, and export capabilities",
            "Optimized for high-volume database queries",
          ],
        },
      ],
      processTitle: "How We Collaborate",
      processSubtitle: "A 4-step structured partnership designed for clarity and predictable delivery.",
      processSteps: [
        {
          step: "01",
          title: "Discovery",
          desc: "We discuss your business challenge, target users, constraints, and measurable success criteria.",
        },
        {
          step: "02",
          title: "Scope & Proposal",
          desc: "I deliver a clear technical specification, architecture outline, realistic timeline, and transparent pricing.",
        },
        {
          step: "03",
          title: "Development",
          desc: "Iterative sprints with working demos you can test from week one, backed by clean typed code and regular updates.",
        },
        {
          step: "04",
          title: "Review & Delivery",
          desc: "Comprehensive testing, production deployment, complete documentation, and post-launch onboarding.",
        },
      ],
    },
    contactPage: {
      heading: "Let's start a conversation",
      description:
        "Tell me what you're working on, whether it's a new opportunity, a product idea, or a technical challenge.",
      intentHiring: "I'm hiring for a team",
      intentProject: "I want to build a project",
      hiringSubtitle:
        "Looking for a Full Stack Developer? Share your team's role, tech stack, and goals.",
      projectSubtitle:
        "Have a product idea or workflow to build? Tell me about your scope and timeline.",
      nameLabel: "Your Name",
      emailLabel: "Work Email",
      companyLabel: "Company / Organization",
      roleLabel: "Role or Opportunity",
      messageLabel: "Message / Overview",
      projectTypeLabel: "Project Type",
      timelineLabel: "Target Timeline (Optional)",
      budgetLabel: "Budget Range (Optional)",
      submitHiring: "Send Hiring Inquiry",
      submitProject: "Send Project Inquiry",
      emailDirectly: "Or email directly at",
      copyEmail: "Copy email address",
      copiedEmail: "Email copied!",
      requiredField: "This field is required",
      invalidEmail: "Please enter a valid email address",
      messageTooShort: "Please provide a few more details (min 15 characters)",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      work: "Proyectos",
      about: "Sobre mí",
      experience: "Experiencia",
      services: "Servicios",
      contact: "Contacto",
      resume: "Currículum",
      workWithMe: "Trabajemos juntos",
    },
    hero: {
      eyebrow: "Full Stack Developer en Perú",
      headline: "Construyo software que hace simple lo complejo",
      description:
        "Soy Dennys, un Desarrollador Full Stack enfocado en crear aplicaciones web intuitivas y soluciones digitales prácticas. Combino ingeniería, diseño reflexivo y visión de producto para construir software que resuelve necesidades reales.",
      ctaPrimary: "Explorar mis proyectos",
      ctaSecondary: "Trabajar conmigo",
      ctaRecruiter: "¿Buscas un desarrollador? Conoce mi experiencia.",
    },
    selectedWork: {
      eyebrow: "Proyectos Seleccionados",
      heading: "Proyectos destacados",
      description:
        "Una selección de proyectos donde el diseño, la tecnología y la resolución de problemas se unen.",
      readCaseStudy: "Ver caso de estudio",
      viewAll: "Ver todos los proyectos",
      liveDemo: "Web en Vivo",
      sourceCode: "GitHub",
      technologies: "Tecnologías",
      role: "Rol",
    },
    whatIBring: {
      eyebrow: "Habilidades y Enfoque",
      heading: "Más que solo código",
      subheading:
        "Ingeniería de software con base en visión de producto y usabilidad humana.",
      p1Title: "Visión de Producto",
      p1Desc:
        "Miro más allá de las funcionalidades para entender el problema real que el producto debe resolver.",
      p2Title: "Ingeniería Reflexiva",
      p2Desc:
        "Me enfoco en construir aplicaciones mantenibles, con arquitectura limpia y comportamiento confiable.",
      p3Title: "Experiencia de Usuario",
      p3Desc:
        "Creo firmemente que el software útil también debe sentirse intuitivo, accesible y agradable de usar.",
    },
    howIWork: {
      eyebrow: "Metodología de Trabajo",
      heading: "De la idea a la implementación",
      subheading:
        "Un proceso estructurado y transparente diseñado para brindar confiabilidad y entregas reales.",
      step1Title: "Entender",
      step1Desc: "Comprender el problema real, los usuarios y los objetivos de negocio.",
      step2Title: "Planificar",
      step2Desc: "Definir alcance, arquitectura técnica y entregables.",
      step3Title: "Construir",
      step3Desc: "Desarrollar y validar la solución con código limpio y fuertemente tipado.",
      step4Title: "Mejorar",
      step4Desc: "Refinar la experiencia en base a retroalimentación, métricas y uso real.",
    },
    aboutPreview: {
      eyebrow: "Sobre mí",
      heading: "La persona detrás del código",
      text1:
        "Mi formación en desarrollo de software ha definido cómo abordo los productos digitales: con curiosidad, estructura y atención al detalle.",
      text2:
        "Me interesa cómo la tecnología impulsa negocios, optimiza procesos y crea experiencias útiles.",
      link: "Conoce más sobre mí",
    },
    dualConversion: {
      teamsTitle: "Para equipos",
      teamsDesc:
        "¿Buscas un desarrollador que cuide tanto el producto como la arquitectura del código?",
      teamsCta: "Explorar mi experiencia",
      businessTitle: "Para empresas",
      businessDesc:
        "¿Tienes una idea, proceso o producto digital que deseas construir?",
      businessCta: "Hablemos de tu proyecto",
    },
    finalCta: {
      heading: "Construyamos algo útil",
      text:
        "Ya sea que estés contratando para tu equipo o planificando un nuevo producto digital, me encantará conocer en qué estás trabajando.",
      cta: "Iniciar una conversación",
    },
    footer: {
      tagline:
        "Construyendo productos digitales intuitivos que resuelven problemas reales.",
      navigation: "Navegación",
      connect: "Contacto",
      rights: "Todos los derechos reservados.",
      backToTop: "Volver Arriba ↑",
    },
    workPage: {
      heading: "Evidencia que habla por sí misma",
      description:
        "Un análisis en profundidad de los productos que he construido, los problemas detrás de ellos y las decisiones técnicas de cada solución.",
      filterAll: "Todos los proyectos",
      filterSaas: "SaaS & IA",
      filterFintech: "Fintech",
      filterCloud: "Sistemas Cloud",
      filterMobile: "Móvil & IoT",
      readCaseStudy: "Ver caso de estudio",
      liveWeb: "Web en Vivo",
      sourceCode: "GitHub",
    },
    caseStudy: {
      backToWork: "← Volver a todos los proyectos",
      projectOverview: "Resumen del Proyecto",
      theProblem: "El Problema",
      goalsAndConstraints: "Objetivos & Restricciones",
      myApproach: "Mi Enfoque",
      theSolution: "La Solución",
      engineeringDecisions: "Decisiones de Ingeniería",
      architecture: "Arquitectura del Sistema",
      apisAndState: "APIs & Gestión de Estado",
      dataPersistence: "Persistencia de Datos & Esquemas",
      performanceAndSecurity: "Rendimiento & Seguridad",
      resultsAndLearnings: "Resultados & Aprendizajes",
      measuredResults: "Impacto Verificado",
      verifiableFeatures: "Capacidades Demostrables",
      keyLearnings: "Aprendizajes Clave",
      nextSteps: "Siguientes Pasos",
      nextProject: "Siguiente Proyecto",
      discussAProject: "Conversar sobre este proyecto con Dennys",
      roleLabel: "Rol",
      yearLabel: "Año",
      statusLabel: "Estado",
      technologiesLabel: "Tecnologías",
    },
    aboutPage: {
      eyebrow: "Sobre mí",
      heading: "Un poco sobre mí",
      lead:
        "Soy un Desarrollador Full Stack basado en Perú. Construyo software que resuelve problemas concretos para empresas y usuarios.",
      bioP1:
        "Mi trayectoria en tecnología nació de la pasión por crear herramientas que simplifiquen el trabajo cotidiano. Obtuve mi Título Profesional Técnico en Diseño y Desarrollo de Software en TECSUP (graduado en 2024), donde desarrollé bases rigurosas en ingeniería de software, algoritmos, arquitectura de bases de datos y sistemas distribuidos.",
      bioP2:
        "Complementariamente, cuento con formación universitaria en Contabilidad y Finanzas por la Universidad Continental. Esta combinación me permite entender no solo el código, sino los flujos financieros, la normativa fiscal (SUNAT), la economía unitaria y la eficiencia operativa de los negocios.",
      bioP3:
        "Actualmente desarrollo aplicaciones web y móviles utilizando React, Next.js, TypeScript y Python. Ya sea creando plataformas SaaS como AhorraTiempo o sistemas corporativos como CONTROLA Cloud, mi objetivo es constante: lograr que los procesos complejos se sientan simples, confiables y humanos.",
      educationTitle: "Educación & Formación Formal",
      philosophyTitle: "Filosofía de Trabajo",
      philosophyQuote: "El buen software comienza entendiendo a las personas.",
      philosophyP1:
        "La tecnología es fundamental, pero también lo son la claridad, la usabilidad, la mantenibilidad y las decisiones detrás de cada producto.",
      philosophyP2:
        "Abordo cada proyecto con mentalidad de dueño: planteando las preguntas difíciles al inicio, reduciendo la fricción para el usuario final y manteniendo código limpio y auditable.",
      principlesTitle: "Principios con los que construyo",
      principles: [
        {
          title: "Claridad antes del código",
          desc: "Nunca escribo una línea de código hasta comprender el problema real y las restricciones del negocio.",
        },
        {
          title: "Simplicidad mantenible",
          desc: "Prefiero arquitecturas limpias, tipadas y predecibles por encima de trucos o abstracciones complejas.",
        },
        {
          title: "Respeto por el usuario",
          desc: "Tiempos de carga rápidos, contraste accesible, formularios intuitivos y cero fricción son estándares indispensables.",
        },
        {
          title: "Impacto de negocio pragmático",
          desc: "El software es una inversión. Cada funcionalidad debe aportar valor medible, ahorrando tiempo o previniendo errores.",
        },
      ],
    },
    experiencePage: {
      eyebrow: "Trayectoria y Experiencia",
      heading: "Experiencia y habilidades técnicas",
      description:
        "Un desglose transparente de mi trayectoria técnica, competencias de ingeniería verificadas, formación académica y proyectos.",
      downloadCv: "Descargar CV (PDF)",
      discussRole: "Conversar sobre un rol",
      skillsHeading: "Matriz de Habilidades Técnicas",
      careerHeading: "Historial de Trabajo y Proyectos",
      educationHeading: "Educación y Títulos",
      languagesHeading: "Idiomas",
    },
    servicesPage: {
      eyebrow: "Servicios de Software",
      heading: "Soluciones de software creadas según tus necesidades",
      description:
        "Desde aplicaciones web hasta herramientas internas, transformo ideas y desafíos operativos en soluciones digitales prácticas y mantenibles.",
      discussProject: "Cuéntame sobre tu proyecto",
      servicesList: [
        {
          title: "Aplicaciones Web & MVPs",
          subtitle: "Desde el concepto validado hasta software listo para producción.",
          desc: "Desarrollo integral de aplicaciones web responsivas, prototipos SaaS y lanzamientos de MVP construidos con Next.js, React, TypeScript y APIs robustas.",
          deliverables: [
            "Interfaz moderna y responsiva con arquitectura de componentes",
            "Autenticación segura y control de accesos basado en roles",
            "Integración de pasarelas de pago (Culqi, Stripe, etc.)",
            "Despliegue automatizado con CI/CD en servidores cloud",
          ],
        },
        {
          title: "Automatización de Procesos de Negocio",
          subtitle: "Elimina tareas manuales repetitivas y entrada de datos.",
          desc: "Integraciones a medida, procesos en segundo plano y generación documental que conectan herramientas dispersas y simplifican el día a día operativo.",
          deliverables: [
            "Integraciones de API personalizadas y webhooks",
            "Tuberías de sincronización de datos programadas",
            "Generación automatizada de PDF, Excel y comprobantes tributarios",
            "Trazabilidad de auditoría y notificación de errores",
          ],
        },
        {
          title: "Paneles de Control & Herramientas Internas",
          subtitle: "Información operativa clave al alcance de tu equipo.",
          desc: "Portales de administración que brindan control en tiempo real sobre operaciones comerciales, inventarios o matrices normativas.",
          deliverables: [
            "Visualización de datos y seguimiento de métricas clave",
            "Permisos multiusuario según roles jerárquicos",
            "Búsqueda rápida, filtros avanzados y exportación",
            "Optimizado para consultas de alto rendimiento",
          ],
        },
      ],
      processTitle: "Cómo colaboramos",
      processSubtitle: "Un proceso de 4 etapas estructurado para brindar claridad y entregas predecibles.",
      processSteps: [
        {
          step: "01",
          title: "Descubrimiento",
          desc: "Analizamos tu desafío comercial, usuarios objetivo, restricciones y criterios de éxito medibles.",
        },
        {
          step: "02",
          title: "Alcance & Propuesta",
          desc: "Entrego una especificación técnica clara, arquitectura recomendada, cronograma realista y presupuesto transparente.",
        },
        {
          step: "03",
          title: "Desarrollo",
          desc: "Sprints iterativos con entregas funcionales que puedes probar desde la primera semana, con código tipado.",
        },
        {
          step: "04",
          title: "Revisión & Entrega",
          desc: "Pruebas integrales, despliegue en producción, documentación completa y acompañamiento post-lanzamiento.",
        },
      ],
    },
    contactPage: {
      heading: "Iniciemos una conversación",
      description:
        "Cuéntame qué estás construyendo, ya sea una nueva oportunidad profesional, una idea de producto o un desafío técnico.",
      intentHiring: "Contratación para un equipo",
      intentProject: "Construir un proyecto",
      hiringSubtitle:
        "¿Buscas un Desarrollador Full Stack? Comparte el rol, stack técnico y metas de tu equipo.",
      projectSubtitle:
        "¿Tienes una idea o proceso que deseas construir? Cuéntame sobre el alcance y tiempos.",
      nameLabel: "Tu Nombre",
      emailLabel: "Correo Electrónico",
      companyLabel: "Empresa / Organización",
      roleLabel: "Rol u Oportunidad",
      messageLabel: "Mensaje / Descripción",
      projectTypeLabel: "Tipo de Proyecto",
      timelineLabel: "Tiempo Estimado (Opcional)",
      budgetLabel: "Rango de Presupuesto (Opcional)",
      submitHiring: "Enviar Consulta Laboral",
      submitProject: "Enviar Consulta de Proyecto",
      emailDirectly: "O escribe directamente a",
      copyEmail: "Copiar correo electrónico",
      copiedEmail: "¡Correo copiado!",
      requiredField: "Este campo es requerido",
      invalidEmail: "Por favor ingresa un correo válido",
      messageTooShort: "Por favor detalla un poco más (mínimo 15 caracteres)",
    },
  },
};
