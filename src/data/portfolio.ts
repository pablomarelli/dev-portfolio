export type Locale = 'en' | 'es'

export interface Role {
  title: string
  period: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  techStack: string[]
  companyUrl?: string
  roles?: Role[]
}

export interface Project {
  name: string
  description: string
  language: string
  url: string
  stars?: number
}

export interface Award {
  title: string
  organization: string
  year: string
  description?: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  description?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface PortfolioData {
  name: string
  title: string
  location: string
  email: string
  bio: string
  sourceRepository: string
  socialLinks: SocialLink[]
  experience: Experience[]
  skills: {
    languages: string[]
    backendApis: string[]
    infrastructureDelivery: string[]
    databasesMessaging: string[]
    observabilityReliability: string[]
    systemsArchitecture: string[]
    domainIntegrations: string[]
    aiHarness: string[]
  }
  projects: Project[]
  education: Education[]
  awards: Award[]
}

export interface UICopy {
  nav: {
    about: string
    experience: string
    skills: string
    projects: string
    contact: string
  }
  header: {
    switchTheme: (nextTheme: 'light' | 'dark') => string
    switchLocale: string
  }
  hero: {
    locationLabel: string
    homelabLabel: string
    homelabText: string
    repoCta: string
    promptCommand: string
    scrollLabel: string
    scrollAriaLabel: string
  }
  about: {
    sectionTitle: string
    heading: string
    factsHeading: string
    facts: string[]
  }
  experience: {
    sectionTitle: string
    rolesLabel: string
  }
  skills: {
    sectionTitle: string
    categories: {
      languages: string
      backendApis: string
      infrastructureDelivery: string
      databasesMessaging: string
      observabilityReliability: string
      systemsArchitecture: string
      domainIntegrations: string
      aiHarness: string
    }
    noteLabel: string
    noteText: string
  }
  projects: {
    sectionTitle: string
    viewOnGitHub: (projectName: string) => string
    viewCode: string
    viewAllRepositories: string
  }
  education: {
    sectionTitle: string
  }
  awards: {
    sectionTitle: string
    contextNote: string
  }
  contact: {
    sectionTitle: string
    message: string
    sayHello: string
  }
  footer: {
    builtWith: string
  }
}

export interface LocaleContent {
  portfolio: PortfolioData
  ui: UICopy
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/PabloMarelli',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pablo-marelli/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:pablo.marelli.kenny@gmail.com',
    icon: 'mail',
  },
]

const sourceRepository = 'https://github.com/pablomarelli/homelab-infra'

const sharedSkills = {
  languages: ['Python', 'Go', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  backendApis: ['FastAPI', 'Django', 'Django REST Framework', 'REST API Design', 'OpenAPI', 'Ping/Post APIs', 'Typer'],
  infrastructureDelivery: ['Docker', 'Kubernetes', 'Argo CD', 'AWS', 'Terraform', 'GitHub Actions', 'Linux', 'Heroku', 'Git', 'CI/CD'],
  databasesMessaging: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'NATS', 'Avro', 'Event Streaming', 'Caching'],
  observabilityReliability: ['Sentry', 'Prometheus', 'Observability', 'Performance Testing', 'Scaling', 'Cap Tracking'],
  systemsArchitecture: ['Distributed Systems', 'Event-driven Architecture', 'Microservices', 'Marketplace Systems', 'Plugin Architecture', 'Concurrency Controls', 'TDD', 'Agile', 'Scrum'],
  domainIntegrations: ['Twilio', 'IVR', 'TCPA Compliance', 'Buyer Integrations', 'Campaign Management', 'Geo-targeting'],
  aiHarness: ['OpenCode - main AI agent', 'Gentle AI - SDD framework', 'Custom skills for elegant and robust coding practices', 'Hermes - assistant'],
}

const sharedProjects: Project[] = [
  {
    name: 'dbvault',
    description: 'Interface to retrieve secrets from Vault using BitWarden for secure credentials access',
    language: 'Go',
    url: 'https://github.com/pablomarelli/dbvault',
  },
  {
    name: 'homelab-infra',
    description: 'Homelab infrastructure as code using Terraform for reproducible environments',
    language: 'HCL',
    url: 'https://github.com/pablomarelli/homelab-infra',
  },
]

const sharedAwards: Award[] = [
  {
    title: '3rd Prize - Faro de la Cultura International Contest',
    organization: 'Socearq',
    year: '2018',
  },
  {
    title: 'Honorable Prize - inHAUS Vivienda Modular',
    organization: 'inHAUS',
    year: '2017',
  },
  {
    title: 'ARQ Clarín magazine prize',
    organization: 'Clarín',
    year: '2016',
  },
  {
    title: 'Arquisur 2016 Premio Aroztegui',
    organization: 'Arquisur',
    year: '2016',
    description: 'Representative for Universidad Nacional de La Plata',
  },
]

const englishContent: LocaleContent = {
  portfolio: {
    name: 'Pablo Marelli',
    title: 'Python/Go Backend Engineer',
    location: '9 de Julio, Buenos Aires, Argentina',
    email: 'pablo.marelli.kenny@gmail.com',
    bio: `Backend engineer with 4+ years of experience building scalable APIs and distributed systems.
Specialized in Python, Django and FastAPI ecosystems, with growing expertise in Go for high-performance services.
I've worked designing, developing and maintaining big microservices platforms under Kubernetes infra, with sync and async communication,
middleware APIs for media companies, backend refactors from legacy systems to modern architectures,
and deployed cloud-native solutions on AWS.
Previously an architect, I bring a unique perspective on system design
and a meticulous approach to building robust, maintainable software.`,
    sourceRepository,
    socialLinks,
    experience: [
      {
        company: 'What If Media Group',
        role: 'Software Development Engineer II',
        period: 'Apr 2024 - Now',
        location: 'USA (remote)',
        roles: [
          { title: 'Software Development Engineer II', period: 'Feb 2026 - Now' },
          { title: 'Software Development Engineer I', period: 'Apr 2024 - Feb 2026' },
        ],
        description: [
          'Architect and maintain a real-time pay-per-call marketplace engine processing inbound phone leads across insurance verticals (auto, health, medicare, life, home) using Python/FastAPI deployed on Kubernetes',
          'Design and operate a multi-stage auction/pricing engine that qualifies, scores, and routes calls to buyers in real-time using distributed workers over NATS and configurable scoring algorithms',
          'Build and maintain 250+ buyer integration plugins connecting to major ad-tech and insurance platforms via a registry-based plugin architecture',
          'Orchestrate the full inbound call lifecycle through Twilio - IVR verification, caller qualification, buyer connection, call recording, and billing settlement',
          'Engineer a polyglot data layer spanning PostgreSQL, MongoDB, Redis, and Kafka with Avro serialization for event streaming, caching, caps tracking, and transactional billing',
          'Implement campaign management, geo-targeting, schedule-based routing, budget/cap enforcement, and concurrency controls for a two-sided vendor/buyer marketplace',
          'Develop TCPA compliance workflows integrating third-party verification and suppression services to ensure regulatory adherence',
          'Build programmatic Ping/Post APIs enabling external vendors to submit leads, receive real-time bids, and execute call transfers programmatically',
          'Own CI/CD pipelines via GitHub Actions and Argo CD, containerized deployments on Kubernetes, and observability tooling with Sentry and Prometheus',
          'Create CLI tooling (Typer) for operations - campaign management, integration testing, cap resets, data exports, and automated record synchronization',
        ],
        techStack: ['Python', 'FastAPI', 'TypeScript', 'JavaScript', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'NATS', 'Twilio', 'Kubernetes', 'Argo CD', 'Docker', 'AWS', 'GitHub Actions', 'Sentry', 'Prometheus'],
        companyUrl: 'https://whatifmediagroup.com',
      },
      {
        company: 'Warner Bros. Discovery',
        role: 'Python Backend Engineer',
        period: 'Oct 2022 - Dec 2023',
        location: 'LATAM (via Nimbux911)',
        description: [
          'Developed middleware API for media sharing connecting content providers with HBO endpoints',
          'Designed and maintained database models and schemas for content metadata management',
          'Built admin dashboard with custom functionalities to manage media objects',
          'Implemented scaling and performance testing, achieving significant throughput improvements',
        ],
        techStack: ['Python', 'Django', 'SQL', 'Docker', 'AWS', 'CI/CD', 'GitHub Actions'],
        companyUrl: 'https://wbd.com',
      },
      {
        company: 'Nimbux911',
        role: 'Python Backend Engineer',
        period: 'Oct 2022 - Present',
        location: 'Argentina',
        description: [
          'Led backend refactor from Python 2.7/Django 1.2 to Python 3.9/Django 4',
          'Migrated AWS backup infrastructure from local servers to S3',
          'Improved system reliability and maintainability through modernization',
        ],
        techStack: ['Python', 'Django', 'SQL', 'Docker', 'AWS', 'Linux'],
        companyUrl: 'https://nimbux911.com/en/',
      },
      {
        company: 'Mantech Labs LLC',
        role: 'Python Backend Engineer',
        period: 'May 2021 - Oct 2022',
        location: 'US Remote',
        description: [
          'Built Python web applications using Django REST Framework',
          'Designed, developed, and integrated APIs for enterprise clients',
          'Deployed services on cloud environments with automated CI/CD pipelines',
          'Created technical documentation and automated API docs with OpenAPI',
          'Implemented comprehensive unit testing and scaling improvements',
        ],
        techStack: ['Python', 'Django', 'Django REST Framework', 'SQL', 'Docker', 'Linux', 'Git'],
      },
      {
        company: 'Freelance',
        role: 'Python Fullstack Developer',
        period: 'Aug 2020 - Mar 2021',
        location: 'Buenos Aires',
        description: [
          'Developed websites for professionals and retail businesses',
          'Deployed services on Heroku cloud platform',
          'Created and organized technical documentation',
        ],
        techStack: ['Python', 'Django', 'HTML', 'CSS', 'Heroku', 'Git'],
      },
    ],
    skills: sharedSkills,
    projects: sharedProjects,
    education: [
      {
        degree: 'Bachelor of Architecture',
        institution: 'Universidad Nacional de La Plata',
        period: '2011 - 2019',
        description: 'Foundation in design thinking, project management, and systematic problem-solving',
      },
    ],
    awards: sharedAwards,
  },
  ui: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: {
      switchTheme: (nextTheme) => `Switch to ${nextTheme} mode`,
      switchLocale: 'Switch language',
    },
    hero: {
      locationLabel: 'location:',
      homelabLabel: 'live from homelab',
      homelabText: 'This portfolio is self-hosted on my kubernetes (k3s) homelab infrastructure.',
      repoCta: 'Check homelab source repo',
      promptCommand: 'cat about.md',
      scrollLabel: 'scroll',
      scrollAriaLabel: 'Scroll to about section',
    },
    about: {
      sectionTitle: 'About',
      heading: 'About Me',
      factsHeading: 'Quick Facts',
      facts: [
        '4+ years of professional experience',
        'Based near Buenos Aires, Argentina'
      ],
    },
    experience: {
      sectionTitle: 'Experience',
      rolesLabel: 'Roles:',
    },
    skills: {
      sectionTitle: 'Skills',
      categories: {
        languages: 'languages',
        backendApis: 'backend & APIs',
        infrastructureDelivery: 'infrastructure & delivery',
        databasesMessaging: 'databases & messaging',
        observabilityReliability: 'observability & reliability',
        systemsArchitecture: 'systems & architecture',
        domainIntegrations: 'domain & integrations',
        aiHarness: 'ai harness',
      },
      noteLabel: 'Note:',
      noteText: 'Primary expertise in Python ecosystem (Django, Django REST Framework, FastAPI) with growing proficiency in Go for high-performance services.',
    },
    projects: {
      sectionTitle: 'Projects',
      viewOnGitHub: (projectName) => `View ${projectName} on GitHub`,
      viewCode: 'View Code',
      viewAllRepositories: 'View all repositories',
    },
    education: {
      sectionTitle: 'Education',
    },
    awards: {
      sectionTitle: 'Architecture Awards',
      contextNote: 'From my previous career as an architect - a background that shapes my approach to system design and problem-solving.',
    },
    contact: {
      sectionTitle: 'Get In Touch',
      message: 'Whether you have a question or just want to say hi, feel free to reach out!',
      sayHello: 'Say Hello',
    },
    footer: {
      builtWith: 'Built with React, TypeScript & Tailwind',
    },
  },
}

const spanishContent: LocaleContent = {
  portfolio: {
    name: 'Pablo Marelli',
    title: 'Ingeniero Backend en Python/Go',
    location: '9 de Julio, Buenos Aires, Argentina',
    email: 'pablo.marelli.kenny@gmail.com',
    bio: `Ingeniero backend con más de 4 años de experiencia construyendo APIs escalables y sistemas distribuidos.
Especializado en el ecosistema de Python, Django y FastAPI, con creciente experiencia en Go para crear servicios de alto rendimiento.
Trabajé diseñando, desarrollando y manteniendo grandes plataformas con microservicios sobre Kubernetes, con comunicación síncrona y asíncrona, 
APIs middleware con dashboard para empresas de medios, refactors backend desde sistemas legacy hacia arquitecturas modernas,
y desplegué soluciones cloud-native sobre AWS. Antes fui arquitecto, diseñando, desarrollando y construyendo proyectos que pude trasladar al diseño de sistemas,
con una forma meticulosa de construir software robusto y mantenible.`,
    sourceRepository,
    socialLinks,
    experience: [
      {
        company: 'What If Media Group',
        role: 'Software Development Engineer II',
        period: 'Abr 2024 - Actualidad',
        location: 'EE. UU. (remoto)',
        roles: [
          { title: 'Software Development Engineer II', period: 'Feb 2026 - Actualidad' },
          { title: 'Software Development Engineer I', period: 'Abr 2024 - Feb 2026' },
        ],
        description: [
          'Arquitecto y mantengo un motor de marketplace pay-per-call en tiempo real que procesa llamadas entrantes en verticales de seguros usando Python/FastAPI sobre Kubernetes',
          'Diseño y opero un motor multi-etapa de subasta y pricing que califica, puntúa y enruta llamadas a compradores en tiempo real usando workers distribuidos sobre NATS',
          'Construyo y mantengo más de 250 plugins de integración con compradores para conectar con plataformas de ad-tech y seguros mediante una arquitectura basada en registros',
          'Orquesto el ciclo completo de llamadas entrantes con Twilio: verificación IVR, calificación del caller, conexión con compradores, grabación y liquidación',
          'Desarrollo una capa de datos políglota con PostgreSQL, MongoDB, Redis y Kafka con serialización Avro para event streaming, caching, caps y billing transaccional',
          'Implemento gestión de campañas, geo-targeting, enrutamiento por horarios, control de presupuesto y límites, y controles de concurrencia para un marketplace de dos lados',
          'Desarrollo flujos de compliance TCPA integrando servicios externos de verificación y supresión para cumplir con regulaciones',
          'Construyo APIs programáticas de Ping/Post para que vendors externos envíen leads, reciban bids en tiempo real y ejecuten transferencias de llamadas',
          'Lidero pipelines de CI/CD con GitHub Actions y Argo CD, despliegues containerizados en Kubernetes y observabilidad con Sentry y Prometheus',
          'Creo tooling CLI con Typer para operaciones: gestión de campañas, testing de integraciones, resets de caps, exportaciones y sincronización automatizada de registros',
        ],
        techStack: ['Python', 'FastAPI', 'TypeScript', 'JavaScript', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'NATS', 'Twilio', 'Kubernetes', 'Argo CD', 'Docker', 'AWS', 'GitHub Actions', 'Sentry', 'Prometheus'],
        companyUrl: 'https://whatifmediagroup.com',
      },
      {
        company: 'Warner Bros. Discovery',
        role: 'Ingeniero Backend en Python',
        period: 'Oct 2022 - Dic 2023',
        location: 'LATAM (via Nimbux911)',
        description: [
          'Desarrollé una API middleware para compartir contenido entre proveedores y endpoints de HBO',
          'Diseñé y mantuve modelos y esquemas de base de datos para gestionar metadata de contenido',
          'Construí un dashboard administrativo con funcionalidades custom para gestionar objetos multimedia',
          'Implementé pruebas de escalabilidad y performance con mejoras significativas de throughput',
        ],
        techStack: ['Python', 'Django', 'SQL', 'Docker', 'AWS', 'CI/CD', 'GitHub Actions'],
        companyUrl: 'https://wbd.com',
      },
      {
        company: 'Nimbux911',
        role: 'Ingeniero Backend en Python',
        period: 'Oct 2022 - Actualidad',
        location: 'Argentina',
        description: [
          'Lideré la refactorización del backend desde Python 2.7/Django 1.2 hacia Python 3.9/Django 4',
          'Migré la infraestructura de backups en AWS desde servidores locales hacia S3',
          'Mejoré la confiabilidad y mantenibilidad del sistema mediante su modernización',
        ],
        techStack: ['Python', 'Django', 'SQL', 'Docker', 'AWS', 'Linux'],
        companyUrl: 'https://nimbux911.com/en/',
      },
      {
        company: 'Mantech Labs LLC',
        role: 'Ingeniero Backend en Python',
        period: 'May 2021 - Oct 2022',
        location: 'Remoto EE. UU.',
        description: [
          'Desarrollé aplicaciones web en Python usando Django REST Framework',
          'Diseñé, desarrollé e integré APIs para clientes empresariales',
          'Desplegué servicios en entornos cloud con pipelines de CI/CD automatizados',
          'Creé documentación técnica y documentación automática de APIs con OpenAPI',
          'Implementé testing unitario integral y mejoras de escalabilidad',
        ],
        techStack: ['Python', 'Django', 'Django REST Framework', 'SQL', 'Docker', 'Linux', 'Git'],
      },
      {
        company: 'Freelance',
        role: 'Desarrollador Fullstack en Python',
        period: 'Ago 2020 - Mar 2021',
        location: 'Buenos Aires',
        description: [
          'Desarrollé sitios web para profesionales y negocios minoristas',
          'Desplegué servicios en la plataforma cloud de Heroku',
          'Creé y organicé documentación técnica',
        ],
        techStack: ['Python', 'Django', 'HTML', 'CSS', 'Heroku', 'Git'],
      },
    ],
    skills: sharedSkills,
    projects: [
      {
        name: 'dbvault',
        description: 'Interfaz para obtener secretos desde Vault usando BitWarden y acceder a credenciales de forma segura',
        language: 'Go',
        url: 'https://github.com/pablomarelli/dbvault',
      },
      {
        name: 'homelab-infra',
        description: 'Infraestructura de homelab como código usando Terraform para entornos reproducibles',
        language: 'HCL',
        url: 'https://github.com/pablomarelli/homelab-infra',
      },
    ],
    education: [
      {
        degree: 'Arquitecto',
        institution: 'Universidad Nacional de La Plata',
        period: '2011 - 2019',
        description: 'Base en pensamiento de diseño, gestión de proyectos y resolución sistemática de problemas',
      },
    ],
    awards: sharedAwards,
  },
  ui: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    header: {
      switchTheme: (nextTheme) => `Cambiar a modo ${nextTheme === 'dark' ? 'oscuro' : 'claro'}`,
      switchLocale: 'Cambiar idioma',
    },
    hero: {
      locationLabel: 'ubicación:',
      homelabLabel: 'corriendo desde mi homelab',
      homelabText: 'Este portfolio está hosteado en mi homelab con Kubernetes (k3s).',
      repoCta: 'Repo del homelab',
      promptCommand: 'cat sobre-mi.md',
      scrollLabel: 'bajar',
      scrollAriaLabel: 'Ir a la sección sobre mí',
    },
    about: {
      sectionTitle: 'Sobre mí',
      heading: 'Sobre Mí',
      factsHeading: 'Datos Rápidos',
      facts: [
        'Más de 4 años de experiencia profesional',
        'Vivo en Buenos Aires, Argentina',
      ],
    },
    experience: {
      sectionTitle: 'Experiencia',
      rolesLabel: 'Roles:',
    },
    skills: {
      sectionTitle: 'Skills',
      categories: {
        languages: 'lenguajes',
        backendApis: 'backend y APIs',
        infrastructureDelivery: 'infraestructura y delivery',
        databasesMessaging: 'bases de datos y mensajería',
        observabilityReliability: 'observabilidad y confiabilidad',
        systemsArchitecture: 'sistemas y arquitectura',
        domainIntegrations: 'dominio e integraciones',
        aiHarness: 'harness de IA',
      },
      noteLabel: 'Nota:',
      noteText: 'Experiencia principal en el ecosistema Python (Django, Django REST Framework, FastAPI), con dominio creciente de Go para servicios de alto rendimiento.',
    },
    projects: {
      sectionTitle: 'Proyectos',
      viewOnGitHub: (projectName) => `Ver ${projectName} en GitHub`,
      viewCode: 'Ver código',
      viewAllRepositories: 'Ver todos los repositorios',
    },
    education: {
      sectionTitle: 'Educación',
    },
    awards: {
      sectionTitle: 'Premios de Arquitectura',
      contextNote: 'De mi carrera anterior como arquitecto: una base que hoy influye en mi enfoque sobre diseño de sistemas y resolución de problemas.',
    },
    contact: {
      sectionTitle: 'Contacto',
      message: 'Si tenés una pregunta o simplemente querés saludar, escribime cuando quieras.',
      sayHello: 'Escribime',
    },
    footer: {
      builtWith: 'Hecho con React, TypeScript y Tailwind',
    },
  },
}

export const localeContent: Record<Locale, LocaleContent> = {
  en: englishContent,
  es: spanishContent,
}
