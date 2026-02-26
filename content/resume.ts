/**
 * Single source of truth for resume content.
 * Edit this file to update the entire site.
 */

export type Locale = "en" | "es";

export interface ResumeContact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface ResumeHero {
  name: string;
  title: string;
  tagline: string;
  taglineShort?: string;
}

export interface ResumeAbout {
  paragraph: string;
  bullets: string[];
}

export interface ExpertisePillar {
  id: string;
  title: string;
  summary: string;
  tools: string[];
  patterns: string[];
  outcomes: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  constraints: string;
  approach: string;
  result: string;
  resultPlaceholder?: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
}

export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  locale: Locale;
}

export interface ResumeData {
  contact: ResumeContact;
  hero: ResumeHero;
  about: ResumeAbout;
  expertise: ExpertisePillar[];
  caseStudies: CaseStudy[];
  experience: ExperienceEntry[];
  projects: Project[];
  writing: WritingPost[];
}

const resumeEn: ResumeData = {
  contact: {
    email: "david@davidalmeraya.com",
    phone: "+52 1 55 2969 8426",
    location: "Mexico City, Mexico",
    linkedin: "https://linkedin.com/in/david-h-9375092a5/",
    github: "https://github.com/davidalmeraya",
  },
  hero: {
    name: "David Herrera Almeraya",
    title: "Senior Full-Stack Engineer",
    tagline:
      "I design and scale high-performance financial and data-driven platforms—from secure distributed backends to real-time dashboards. Focused on scalable systems, full-stack product engineering, and robust data acquisition.",
    taglineShort:
      "Scalable systems · Full-stack · Data & automation · E-commerce & fintech",
  },
  about: {
    paragraph:
      "I'm a Senior Full-Stack Engineer with over 13 years of experience.\n\nMy background is in high-performance financial and data-driven platforms, where consistency, reliability, and reconciliation are not optional — they are fundamental. I specialize in building secure, distributed backend systems using C#, .NET Core, and Node.js, paired with modern frontends in Angular, React, and TypeScript.\n\nOver the years, I've worked extensively with microservices architectures, high-volume transaction processing, and cloud-native infrastructure on AWS. My focus is always the same: clean architecture, performance under pressure, and systems that remain reliable at scale.\n\nBeyond code, I value clarity and ownership. I've led remote and cross-functional teams, contributed to 99.9% uptime targets, and implemented CI/CD pipelines that reduce risk instead of adding complexity.\n\nI believe great engineering is not just about building fast — it's about building systems you can trust.",
    bullets: [],
  },
  expertise: [
    {
      id: "scalable-systems",
      title: "Scalable Systems & Fintech Reliability",
      summary: "High-availability backends and transaction systems with strict consistency.",
      tools: [".NET Core", "PostgreSQL", "Redis", "AWS (EC2, Lambda, API Gateway)", "Docker", "Kubernetes"],
      patterns: ["Microservices", "Event-driven", "REST APIs", "Idempotency", "Reconciliation workflows"],
      outcomes: [
        "1M+ daily transactions with strict consistency controls.",
        "99.9% uptime on production systems.",
        "30% reduction in reconciliation errors via validation optimization.",
      ],
    },
    {
      id: "data-acquisition",
      title: "Data Acquisition & Automation (Scraping)",
      summary: "Ethical, robust data pipelines and automation at scale.",
      tools: ["Node.js", "Python", "Redis", "S3", "Scheduled jobs"],
      patterns: ["Rate limiting", "Retries & backoff", "Structured storage", "Idempotent ingestion"],
      outcomes: [
        "Reliable ingestion pipelines with minimal duplicate processing.",
        "Resilient to provider changes and transient failures.",
      ],
    },
    {
      id: "fullstack",
      title: "Full-Stack Product Engineering",
      summary: "End-to-end ownership from API design to polished UIs.",
      tools: ["Angular", "React", "TypeScript", "C#", ".NET Core", "Node.js", "Express"],
      patterns: ["Reactive state", "Component architecture", "REST & WebSockets", "TDD"],
      outcomes: [
        "Real-time financial dashboards and admin tools.",
        "85%+ automated test coverage on critical paths.",
        "35–40% latency and deployment time improvements.",
      ],
    },
    {
      id: "commerce",
      title: "Commerce & Transaction Platforms",
      summary: "POS, e-commerce, and payment processing with banking integrations.",
      tools: ["C#", ".NET Core", "SQL Server", "Redis", "Docker", "Kubernetes"],
      patterns: ["Payment gateways", "Multi-channel transactions", "Caching", "PCI-aware design"],
      outcomes: [
        "Secure POS and e-commerce payment modules.",
        "Mexican banking API integrations and multi-channel systems.",
        "Faster checkout and reporting via query optimization and caching.",
      ],
    },
  ],
  caseStudies: [
    {
      id: "soldo",
      title: "Soldo — High-volume fintech backend",
      problem:
        "Need to process 1M+ daily financial transactions with strict consistency, auditability, and high availability for a European fintech.",
      constraints:
        "Remote team, regulatory requirements, zero tolerance for duplicate or lost transactions.",
      approach:
        "Architected microservices on .NET Core and PostgreSQL with idempotency keys, event-driven validation, and reconciliation workflows. Built real-time dashboards in Angular with reactive state. Deployed on AWS (EC2, Lambda, API Gateway) with GitHub Actions and Docker.",
      result:
        "30% reduction in reconciliation errors; 40% faster deployments; 99.9% uptime. Led architecture reviews and mentored mid-level engineers.",
      resultPlaceholder: false,
    },
    {
      id: "clip",
      title: "Clip — Payment platform performance",
      problem:
        "Payment and e-commerce APIs needed lower latency and higher reliability for merchants and internal dashboards.",
      constraints:
        "Legacy SQL Server usage, need to maintain backward compatibility while improving performance.",
      approach:
        "Optimized SQL Server queries, introduced Redis caching, and containerized services with Docker for Kubernetes. Increased test coverage with xUnit and Jest. Integrated Mexican banking APIs and payment gateways for multi-channel flows.",
      result:
        "35% API latency reduction; 85% automated test coverage; scalable Kubernetes deployment.",
      resultPlaceholder: false,
    },
    {
      id: "konfio",
      title: "Konfío — Lending platform scalability",
      problem:
        "Monolithic system limited scalability and delivery speed for loan lifecycle and analytics.",
      constraints:
        "Mission-critical financial workflows requiring high reliability and clear audit trails.",
      approach:
        "Participated in migration to microservices; built backend services for loan lifecycle and account tracking with .NET Core. Implemented WebSockets for real-time notifications. Designed modular Angular components for internal analytics. Applied TDD to critical workflows.",
      result:
        "Improved system throughput via database indexing and modular frontends (placeholder: exact % to be confirmed).",
      resultPlaceholder: true,
    },
  ],
  experience: [
    {
      company: "Soldo",
      role: "Senior Full-Stack Engineer",
      location: "Remote, Europe",
      start: "Feb 2023",
      end: "Dec 2025",
      bullets: [
        "Architected microservices-based financial backend systems using .NET Core and PostgreSQL.",
        "Designed high-availability REST APIs processing 1M+ daily transactions with strict consistency controls.",
        "Built real-time financial dashboards using Angular and reactive state management.",
        "Reduced reconciliation errors by 30% through optimization of transaction validation workflows.",
        "Implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment time by 40%.",
        "Deployed scalable infrastructure on AWS (EC2, Lambda, API Gateway) with 99.9% uptime.",
        "Led architecture reviews and mentored mid-level engineers.",
      ],
    },
    {
      company: "Clip",
      role: "Full-Stack Engineer",
      location: "Mexico City, Remote",
      start: "Apr 2020",
      end: "Jan 2023",
      bullets: [
        "Developed secure POS and e-commerce payment processing modules using C# and .NET Core.",
        "Integrated Mexican banking APIs and payment gateways for multi-channel transaction systems.",
        "Optimized SQL Server queries and implemented Redis caching, reducing API latency by 35%.",
        "Built administrative dashboards using Angular and TypeScript for financial monitoring.",
        "Containerized applications with Docker and deployed to Kubernetes clusters.",
        "Increased automated test coverage to 85% using xUnit and Jest.",
        "Collaborated with product, risk, and compliance teams in an Agile environment.",
      ],
    },
    {
      company: "Konfío",
      role: "Senior Software Engineer / Software Engineer",
      location: "Mexico City",
      start: "Jan 2017",
      end: "Mar 2020",
      bullets: [
        "Built backend services for loan lifecycle management and account tracking using .NET Core.",
        "Implemented real-time notification systems using WebSockets.",
        "Participated in migration from monolithic architecture to microservices, improving scalability.",
        "Designed modular Angular components for internal financial analytics tools.",
        "Improved system throughput by optimizing database indexing strategies.",
        "Applied TDD practices to mission-critical financial workflows.",
      ],
    },
    {
      company: "Kueski",
      role: "Software Engineer",
      location: "Guadalajara, Mexico",
      start: "Jan 2010",
      end: "Dec 2016",
      bullets: [
        "Developed RESTful APIs using Node.js and Express for loan application processing.",
        "Built React-based internal dashboards for reporting and performance monitoring.",
        "Assisted in CI/CD pipeline setup using Git and Jenkins.",
        "Improved reporting performance through query optimization and caching strategies.",
        "Supported scalable backend services handling large customer datasets.",
      ],
    },
  ],
  projects: [
    {
      id: "fintech-dashboards",
      title: "Real-time financial dashboards",
      description: "Angular-based dashboards with reactive state for transaction and reconciliation monitoring.",
      tags: ["Angular", "TypeScript", "RxJS", "REST"],
      url: undefined,
      repo: undefined,
    },
    {
      id: "payment-modules",
      title: "POS & e-commerce payment modules",
      description: "Secure payment processing and gateway integrations for multi-channel transactions.",
      tags: [".NET Core", "C#", "SQL Server", "Redis"],
      url: undefined,
      repo: undefined,
    },
    {
      id: "loan-lifecycle",
      title: "Loan lifecycle & account services",
      description: "Backend services for loan management, account tracking, and real-time notifications.",
      tags: [".NET Core", "WebSockets", "PostgreSQL"],
      url: undefined,
      repo: undefined,
    },
  ],
  writing: [
    {
      slug: "idempotency-duplicate-transactions",
      title: "Idempotency & duplicate transactions in fintech",
      date: "2024-01-15",
      excerpt: "How to design APIs and workflows to avoid duplicate charges and ensure consistency.",
      locale: "en",
    },
    {
      slug: "event-driven-recovery",
      title: "Event-driven recovery strategies",
      date: "2024-02-01",
      excerpt: "Patterns for replay, dead-letter handling, and safe recovery in event-driven systems.",
      locale: "en",
    },
    {
      slug: "scraping-at-scale",
      title: "Practical scraping at scale (ethically + robustly)",
      date: "2024-03-10",
      excerpt: "Rate limiting, retries, and idempotent ingestion without overloading providers.",
      locale: "en",
    },
  ],
};

const resumeEs: Partial<ResumeData> = {
  hero: {
    ...resumeEn.hero,
    title: "Ingeniero Full-Stack Senior",
    tagline:
      "Diseño y escalo plataformas financieras y basadas en datos de alto rendimiento—desde backends distribuidos seguros hasta dashboards en tiempo real. Enfocado en sistemas escalables, ingeniería full-stack y adquisición robusta de datos.",
    taglineShort:
      "Sistemas escalables · Full-stack · Datos y automatización · E-commerce y fintech",
  },
  about: {
    ...resumeEn.about,
    paragraph:
      "Soy Ingeniero Full-Stack Senior con más de 13 años de experiencia.\n\nMi trayectoria está en plataformas financieras y basadas en datos de alto rendimiento, donde la consistencia, la fiabilidad y la reconciliación no son opcionales — son fundamentales. Me especializo en construir sistemas backend seguros y distribuidos con C#, .NET Core y Node.js, junto con frontends modernos en Angular, React y TypeScript.\n\nA lo largo de los años he trabajado mucho con arquitecturas de microservicios, procesamiento de transacciones de alto volumen e infraestructura cloud-native en AWS. Mi enfoque es siempre el mismo: arquitectura limpia, rendimiento bajo presión y sistemas que sigan siendo fiables a escala.\n\nMás allá del código, valoro la claridad y la responsabilidad. He liderado equipos remotos y multifuncionales, contribuido a objetivos de 99.9% de disponibilidad e implementado pipelines CI/CD que reducen el riesgo en lugar de añadir complejidad.\n\nCreo que la buena ingeniería no es solo construir rápido — es construir sistemas en los que puedas confiar.",
  },
  expertise: [
    {
      id: "scalable-systems",
      title: "Sistemas escalables y fiabilidad fintech",
      summary: "Backends de alta disponibilidad y sistemas de transacciones con consistencia estricta.",
      tools: [".NET Core", "PostgreSQL", "Redis", "AWS (EC2, Lambda, API Gateway)", "Docker", "Kubernetes"],
      patterns: ["Microservicios", "Event-driven", "REST APIs", "Idempotencia", "Flujos de reconciliación"],
      outcomes: [
        "Más de 1M de transacciones diarias con controles de consistencia estrictos.",
        "99.9% de disponibilidad en sistemas de producción.",
        "30% de reducción en errores de reconciliación mediante optimización de validación.",
      ],
    },
    {
      id: "data-acquisition",
      title: "Adquisición de datos y automatización (scraping)",
      summary: "Pipelines de datos éticos y robustos y automatización a escala.",
      tools: ["Node.js", "Python", "Redis", "S3", "Tareas programadas"],
      patterns: ["Rate limiting", "Reintentos y backoff", "Almacenamiento estructurado", "Ingesta idempotente"],
      outcomes: [
        "Pipelines de ingesta fiables con mínimo procesamiento duplicado.",
        "Resilientes a cambios de proveedores y fallos transitorios.",
      ],
    },
    {
      id: "fullstack",
      title: "Ingeniería full-stack de producto",
      summary: "Responsabilidad de punta a punta desde diseño de API hasta UIs pulidas.",
      tools: ["Angular", "React", "TypeScript", "C#", ".NET Core", "Node.js", "Express"],
      patterns: ["Estado reactivo", "Arquitectura de componentes", "REST y WebSockets", "TDD"],
      outcomes: [
        "Dashboards financieros y herramientas admin en tiempo real.",
        "Más del 85% de cobertura de tests automatizados en rutas críticas.",
        "Mejoras del 35–40% en latencia y tiempo de despliegue.",
      ],
    },
    {
      id: "commerce",
      title: "Plataformas de comercio y transacciones",
      summary: "POS, e-commerce y procesamiento de pagos con integraciones bancarias.",
      tools: ["C#", ".NET Core", "SQL Server", "Redis", "Docker", "Kubernetes"],
      patterns: ["Pasarelas de pago", "Transacciones multicanal", "Caché", "Diseño PCI-aware"],
      outcomes: [
        "Módulos de pago seguros para POS y e-commerce.",
        "Integraciones con APIs bancarias mexicanas y sistemas multicanal.",
        "Checkout e informes más rápidos mediante optimización de consultas y caché.",
      ],
    },
  ],
  caseStudies: [
    {
      id: "soldo",
      title: "Soldo — Backend fintech de alto volumen",
      problem:
        "Procesar más de 1M de transacciones financieras diarias con consistencia estricta, auditoría y alta disponibilidad para un fintech europeo.",
      constraints:
        "Equipo remoto, requisitos regulatorios, tolerancia cero a transacciones duplicadas o perdidas.",
      approach:
        "Arquitectura de microservicios en .NET Core y PostgreSQL con claves de idempotencia, validación event-driven y flujos de reconciliación. Dashboards en tiempo real en Angular con estado reactivo. Despliegue en AWS (EC2, Lambda, API Gateway) con GitHub Actions y Docker.",
      result:
        "30% de reducción en errores de reconciliación; 40% despliegues más rápidos; 99.9% disponibilidad. Lideré revisiones de arquitectura y mentoría a ingenieros mid-level.",
      resultPlaceholder: false,
    },
    {
      id: "clip",
      title: "Clip — Rendimiento de plataforma de pagos",
      problem:
        "Las APIs de pago y e-commerce necesitaban menor latencia y mayor fiabilidad para comercios y dashboards internos.",
      constraints:
        "Uso de SQL Server legacy, mantener compatibilidad hacia atrás mientras se mejora el rendimiento.",
      approach:
        "Optimicé consultas SQL Server, introduje caché Redis y containericé servicios con Docker para Kubernetes. Aumenté la cobertura de tests con xUnit y Jest. Integré APIs bancarias mexicanas y pasarelas de pago para flujos multicanal.",
      result:
        "35% de reducción de latencia en APIs; 85% de cobertura de tests automatizados; despliegue escalable en Kubernetes.",
      resultPlaceholder: false,
    },
    {
      id: "konfio",
      title: "Konfío — Escalabilidad de plataforma de crédito",
      problem:
        "Sistema monolítico limitaba la escalabilidad y la velocidad de entrega para ciclo de vida de créditos y analíticas.",
      constraints:
        "Flujos financieros de misión crítica que requieren alta fiabilidad y trazas de auditoría claras.",
      approach:
        "Participé en la migración a microservicios; construí servicios backend para ciclo de vida de créditos y seguimiento de cuentas con .NET Core. Implementé WebSockets para notificaciones en tiempo real. Diseñé componentes modulares en Angular para analíticas internas. Apliqué TDD a flujos críticos.",
      result:
        "Mejoré el throughput del sistema mediante indexación de base de datos y frontends modulares (placeholder: % exacto por confirmar).",
      resultPlaceholder: true,
    },
  ],
  experience: [
    {
      company: "Soldo",
      role: "Ingeniero Full-Stack Senior",
      location: "Remoto, Europa",
      start: "Feb 2023",
      end: "Dic 2025",
      bullets: [
        "Arquitecturé sistemas backend financieros basados en microservicios con .NET Core y PostgreSQL.",
        "Diseñé REST APIs de alta disponibilidad procesando más de 1M de transacciones diarias con controles de consistencia estrictos.",
        "Construí dashboards financieros en tiempo real con Angular y gestión de estado reactivo.",
        "Reduje errores de reconciliación un 30% optimizando flujos de validación de transacciones.",
        "Implementé pipelines CI/CD con GitHub Actions y Docker, reduciendo el tiempo de despliegue un 40%.",
        "Desplegué infraestructura escalable en AWS (EC2, Lambda, API Gateway) con 99.9% de disponibilidad.",
        "Lideré revisiones de arquitectura y mentoría a ingenieros mid-level.",
      ],
    },
    {
      company: "Clip",
      role: "Ingeniero Full-Stack",
      location: "Ciudad de México, remoto",
      start: "Abr 2020",
      end: "Ene 2023",
      bullets: [
        "Desarrollé módulos seguros de procesamiento de pagos POS y e-commerce con C# y .NET Core.",
        "Integré APIs bancarias mexicanas y pasarelas de pago para sistemas de transacciones multicanal.",
        "Optimicé consultas SQL Server e implementé caché Redis, reduciendo la latencia de APIs un 35%.",
        "Construí dashboards administrativos con Angular y TypeScript para monitoreo financiero.",
        "Containericé aplicaciones con Docker y desplegué en clústeres Kubernetes.",
        "Aumenté la cobertura de tests automatizados al 85% con xUnit y Jest.",
        "Colaboré con equipos de producto, riesgo y cumplimiento en entorno Agile.",
      ],
    },
    {
      company: "Konfío",
      role: "Ingeniero de Software Senior / Ingeniero de Software",
      location: "Ciudad de México",
      start: "Ene 2017",
      end: "Mar 2020",
      bullets: [
        "Construí servicios backend para gestión del ciclo de vida de créditos y seguimiento de cuentas con .NET Core.",
        "Implementé sistemas de notificación en tiempo real con WebSockets.",
        "Participé en la migración de arquitectura monolítica a microservicios, mejorando la escalabilidad.",
        "Diseñé componentes modulares en Angular para herramientas internas de analíticas financieras.",
        "Mejoré el throughput del sistema optimizando estrategias de indexación en base de datos.",
        "Apliqué prácticas TDD en flujos financieros de misión crítica.",
      ],
    },
    {
      company: "Kueski",
      role: "Ingeniero de Software",
      location: "Guadalajara, México",
      start: "Ene 2010",
      end: "Dic 2016",
      bullets: [
        "Desarrollé APIs RESTful con Node.js y Express para procesamiento de solicitudes de crédito.",
        "Construí dashboards internos con React para reportes y monitoreo de rendimiento.",
        "Colaboré en la configuración de pipelines CI/CD con Git y Jenkins.",
        "Mejoré el rendimiento de reportes mediante optimización de consultas y estrategias de caché.",
        "Di soporte a servicios backend escalables manejando grandes volúmenes de datos de clientes.",
      ],
    },
  ],
  projects: [
    {
      id: "fintech-dashboards",
      title: "Dashboards financieros en tiempo real",
      description: "Dashboards basados en Angular con estado reactivo para monitoreo de transacciones y reconciliación.",
      tags: ["Angular", "TypeScript", "RxJS", "REST"],
      url: undefined,
      repo: undefined,
    },
    {
      id: "payment-modules",
      title: "Módulos de pago POS y e-commerce",
      description: "Procesamiento seguro de pagos e integraciones con pasarelas para transacciones multicanal.",
      tags: [".NET Core", "C#", "SQL Server", "Redis"],
      url: undefined,
      repo: undefined,
    },
    {
      id: "loan-lifecycle",
      title: "Ciclo de vida de créditos y servicios de cuentas",
      description: "Servicios backend para gestión de créditos, seguimiento de cuentas y notificaciones en tiempo real.",
      tags: [".NET Core", "WebSockets", "PostgreSQL"],
      url: undefined,
      repo: undefined,
    },
  ],
};

const dictEn: Record<string, string> = {
  "nav.about": "About",
  "nav.expertise": "Expertise",
  "nav.caseStudies": "Case Studies",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.writing": "Writing",
  "nav.contact": "Contact",
  "hero.downloadResume": "Download Resume (PDF)",
  "hero.contact": "Contact",
  "about.title": "About",
  "expertise.title": "Expertise",
  "expertise.tools": "Tools",
  "expertise.patterns": "Patterns",
  "expertise.outcomes": "Outcomes",
  "expertise.less": "− Less",
  "expertise.more": "+ More",
  "caseStudies.title": "Case Studies",
  "caseStudies.problem": "Problem",
  "caseStudies.constraints": "Constraints",
  "caseStudies.approach": "Approach",
  "caseStudies.result": "Result",
  "caseStudies.placeholder": "(placeholder)",
  "experience.title": "Experience",
  "projects.title": "Projects",
  "writing.title": "Writing",
  "contact.title": "Contact",
  "contact.subtitle": "I usually respond within 24 hours.",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.message": "Message",
  "contact.send": "Send message",
  "contact.sending": "Sending…",
  "contact.success": "Message sent. I'll get back to you soon.",
  "contact.error": "Something went wrong. Please try again or email me directly.",
  "footer.resume": "Resume",
  "lang.en": "EN",
  "lang.es": "ES",
};

const dictEs: Record<string, string> = {
  "nav.about": "Sobre mí",
  "nav.expertise": "Experiencia",
  "nav.caseStudies": "Casos de estudio",
  "nav.experience": "Trayectoria",
  "nav.projects": "Proyectos",
  "nav.writing": "Blog",
  "nav.contact": "Contacto",
  "hero.downloadResume": "Descargar CV (PDF)",
  "hero.contact": "Contacto",
  "about.title": "Sobre mí",
  "expertise.title": "Experiencia",
  "expertise.tools": "Herramientas",
  "expertise.patterns": "Patrones",
  "expertise.outcomes": "Resultados",
  "expertise.less": "− Menos",
  "expertise.more": "+ Más",
  "caseStudies.title": "Casos de estudio",
  "caseStudies.problem": "Problema",
  "caseStudies.constraints": "Restricciones",
  "caseStudies.approach": "Enfoque",
  "caseStudies.result": "Resultado",
  "caseStudies.placeholder": "(placeholder)",
  "experience.title": "Trayectoria",
  "projects.title": "Proyectos",
  "writing.title": "Blog",
  "contact.title": "Contacto",
  "contact.subtitle": "Suelo responder en menos de 24 horas.",
  "contact.name": "Nombre",
  "contact.email": "Correo",
  "contact.message": "Mensaje",
  "contact.send": "Enviar",
  "contact.sending": "Enviando…",
  "contact.success": "Mensaje enviado. Te responderé pronto.",
  "contact.error": "Algo falló. Intenta de nuevo o escríbeme por correo.",
  "footer.resume": "CV",
  "lang.en": "EN",
  "lang.es": "ES",
};

export function getResume(locale: Locale): ResumeData {
  const base = resumeEn;
  if (locale === "es") {
    return {
      ...base,
      ...(resumeEs.hero && { hero: resumeEs.hero as ResumeHero }),
      ...(resumeEs.about && { about: resumeEs.about as ResumeAbout }),
      ...(resumeEs.expertise && { expertise: resumeEs.expertise }),
      ...(resumeEs.caseStudies && { caseStudies: resumeEs.caseStudies }),
      ...(resumeEs.experience && { experience: resumeEs.experience }),
      ...(resumeEs.projects && { projects: resumeEs.projects }),
    };
  }
  return base;
}

export function t(key: string, locale: Locale): string {
  const dict = locale === "es" ? dictEs : dictEn;
  return dict[key] ?? dictEn[key] ?? key;
}

export const resume = resumeEn;
