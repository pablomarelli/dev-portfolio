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
  socialLinks: SocialLink[]
  experience: Experience[]
  skills: {
    languages: string[]
    frameworks: string[]
    tools: string[]
    methodologies: string[]
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
      frameworks: string
      tools: string
      methodologies: string
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

const sharedSkills = {
  languages: ['Python', 'Go', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  frameworks: ['Django', 'Django REST Framework', 'FastAPI'],
  tools: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Linux', 'Terraform', 'PostgreSQL', 'Redis'],
  methodologies: ['Agile', 'Scrum', 'CI/CD', 'TDD', 'REST API Design'],
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
    title: 'ARQ Clarin magazine prize',
    organization: 'Clarin',
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
    location: 'Buenos Aires, Argentina',
    email: 'pablo.marelli.kenny@gmail.com',
    bio: `Backend engineer with 4+ years of experience building scalable APIs and distributed systems.
Specialized in Python and Django ecosystems, with growing expertise in Go for high-performance services.
I've worked on middleware APIs for media companies, led backend refactors from legacy systems to modern architectures,
and deployed cloud-native solutions on AWS. Previously an architect, I bring a unique perspective on system design
and a meticulous approach to building robust, maintainable software.`,
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
        techStack: ['Python', 'FastAPI', 'Typescript', 'Javascript', 'Golang', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'NATS', 'Twilio', 'Kubernetes', 'Argo CD', 'Docker', 'AWS', 'GitHub Actions', 'Sentry', 'Prometheus'],
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
        techStack: ['Python', 'Django', 'DRF', 'SQL', 'Docker', 'Linux', 'Git'],
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
        'Based in Buenos Aires, Argentina',
        'Open to remote opportunities worldwide',
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
        frameworks: 'frameworks',
        tools: 'tools',
        methodologies: 'methodologies',
      },
      noteLabel: 'Note:',
      noteText: 'Primary expertise in Python ecosystem (Django, DRF, FastAPI) with growing proficiency in Go for high-performance services.',
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
    location: 'Buenos Aires, Argentina',
    email: 'pablo.marelli.kenny@gmail.com',
    bio: `Ingeniero backend con mas de 4 años de experiencia construyendo APIs escalables y sistemas distribuidos.
Especializado en el ecosistema de Python, Django y FastAPI, con creciente experiencia en Go para crear servicios de alto rendimiento.
Trabaje diseñando, desarrollando y manteniendo grandes plataformas con microservicios bajo Kubernetes media comunicacion sincrona y asyncrona, 
APIs middleware con dashboard para empresas de medios, refactors backend desde sistemas legacy hacia arquitecturas modernas,
y desplegue soluciones cloud-native sobre AWS. Antes fui arquitecto, diseñando, desarrollando y construyendo proyectos que pude trasladar a el diseño de sistemas,
con una forma meticulosa de construir software robusto y mantenible.`,
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
          'Diseno y opero un motor multi-etapa de subasta y pricing que califica, puntua y enruta llamadas a compradores en tiempo real usando workers distribuidos sobre NATS',
          'Construyo y mantengo mas de 250 plugins de integracion con compradores para conectar con plataformas de ad-tech y seguros mediante una arquitectura basada en registros',
          'Orquesto el ciclo completo de llamadas entrantes con Twilio: verificacion IVR, calificacion del caller, conexion con compradores, grabacion y liquidacion',
          'Desarrollo una capa de datos poliglota con PostgreSQL, MongoDB, Redis y Kafka con serializacion Avro para event streaming, caching, caps y billing transaccional',
          'Implemento gestion de campanas, geo-targeting, enrutamiento por horarios, control de presupuesto y limites, y controles de concurrencia para un marketplace de dos lados',
          'Desarrollo flujos de compliance TCPA integrando servicios externos de verificacion y supresion para cumplir con regulaciones',
          'Construyo APIs programaticas de Ping/Post para que vendors externos envien leads, reciban bids en tiempo real y ejecuten transferencias de llamadas',
          'Lidero pipelines de CI/CD con GitHub Actions y Argo CD, despliegues containerizados en Kubernetes y observabilidad con Sentry y Prometheus',
          'Creo tooling CLI con Typer para operaciones: gestion de campanas, testing de integraciones, resets de caps, exportaciones y sincronizacion automatizada de registros',
        ],
        techStack: ['Python', 'FastAPI', 'Typescript', 'Javascript', 'Golang', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'NATS', 'Twilio', 'Kubernetes', 'Argo CD', 'Docker', 'AWS', 'GitHub Actions', 'Sentry', 'Prometheus'],
        companyUrl: 'https://whatifmediagroup.com',
      },
      {
        company: 'Warner Bros. Discovery',
        role: 'Ingeniero Backend en Python',
        period: 'Oct 2022 - Dic 2023',
        location: 'LATAM (via Nimbux911)',
        description: [
          'Desarrolle una API middleware para compartir contenido entre proveedores y endpoints de HBO',
          'Disene y mantuve modelos y esquemas de base de datos para gestionar metadata de contenido',
          'Construi un dashboard administrativo con funcionalidades custom para gestionar objetos multimedia',
          'Implemente pruebas de escalabilidad y performance con mejoras significativas de throughput',
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
          'Lidere la refactorizacion del backend desde Python 2.7/Django 1.2 hacia Python 3.9/Django 4',
          'Migre la infraestructura de backups en AWS desde servidores locales hacia S3',
          'Mejore la confiabilidad y mantenibilidad del sistema mediante su modernizacion',
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
          'Desarrolle aplicaciones web en Python usando Django REST Framework',
          'Disene, desarrolle e integre APIs para clientes empresariales',
          'Desplegue servicios en entornos cloud con pipelines de CI/CD automatizados',
          'Cree documentacion tecnica y documentacion automatica de APIs con OpenAPI',
          'Implemente testing unitario integral y mejoras de escalabilidad',
        ],
        techStack: ['Python', 'Django', 'DRF', 'SQL', 'Docker', 'Linux', 'Git'],
      },
      {
        company: 'Freelance',
        role: 'Desarrollador Fullstack en Python',
        period: 'Ago 2020 - Mar 2021',
        location: 'Buenos Aires',
        description: [
          'Desarrolle sitios web para profesionales y negocios minoristas',
          'Desplegue servicios en la plataforma cloud de Heroku',
          'Cree y organice documentacion tecnica',
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
        description: 'Infraestructura de homelab como codigo usando Terraform para entornos reproducibles',
        language: 'HCL',
        url: 'https://github.com/pablomarelli/homelab-infra',
      },
    ],
    education: [
      {
        degree: 'Arquitecto',
        institution: 'Universidad Nacional de La Plata',
        period: '2011 - 2019',
        description: 'Base en pensamiento de diseno, gestion de proyectos y resolucion sistematica de problemas',
      },
    ],
    awards: sharedAwards,
  },
  ui: {
    nav: {
      about: 'Sobre mi',
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
      locationLabel: 'ubicacion:',
      promptCommand: 'cat sobre-mi.md',
      scrollLabel: 'bajar',
      scrollAriaLabel: 'Ir a la seccion sobre mi',
    },
    about: {
      sectionTitle: 'Sobre mi',
      heading: 'Sobre Mi',
      factsHeading: 'Datos Rapidos',
      facts: [
        'Mas de 4 anos de experiencia profesional',
        'Vivo en Buenos Aires, Argentina',
        'Disponible para oportunidades remotas en todo el mundo',
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
        frameworks: 'frameworks',
        tools: 'herramientas',
        methodologies: 'metodologias',
      },
      noteLabel: 'Nota:',
      noteText: 'Experiencia principal en el ecosistema Python (Django, DRF, FastAPI), con dominio creciente de Go para servicios de alto rendimiento.',
    },
    projects: {
      sectionTitle: 'Proyectos',
      viewOnGitHub: (projectName) => `Ver ${projectName} en GitHub`,
      viewCode: 'Ver codigo',
      viewAllRepositories: 'Ver todos los repositorios',
    },
    education: {
      sectionTitle: 'Educacion',
    },
    awards: {
      sectionTitle: 'Premios de Arquitectura',
      contextNote: 'De mi carrera anterior como arquitecto: una base que hoy influye en mi enfoque sobre diseno de sistemas y resolucion de problemas.',
    },
    contact: {
      sectionTitle: 'Contacto',
      message: 'Si tenes una pregunta o simplemente queres saludar, escribime cuando quieras.',
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
