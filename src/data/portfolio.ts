// Portfolio Data - Edit this file to update your portfolio content

export interface Role {
  title: string;
  period: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
  companyUrl?: string;
  roles?: Role[];
}

export interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
  stars?: number;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  socialLinks: SocialLink[];
  experience: Experience[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    methodologies: string[];
  };
  projects: Project[];
  education: Education[];
  awards: Award[];
}

export const portfolioData: PortfolioData = {
  name: "Pablo Marelli",
  title: "Python/Go Backend Engineer",
  location: "Buenos Aires, Argentina",
  email: "pablo.marelli.kenny@gmail.com",
  bio: `Backend engineer with 4+ years of experience building scalable APIs and distributed systems. 
Specialized in Python and Django ecosystems, with growing expertise in Go for high-performance services. 
I've worked on middleware APIs for media companies, led backend refactors from legacy systems to modern architectures, 
and deployed cloud-native solutions on AWS. Previously an architect, I bring a unique perspective on system design 
and a meticulous approach to building robust, maintainable software.`,

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/PabloMarelli",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pablo-marelli/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:pablo.marelli.kenny@gmail.com",
      icon: "mail",
    },
  ],

  experience: [
    {
      company: "What If Media Group",
      role: "Software Development Engineer II",
      period: "Apr 2024 - Now",
      location: "USA (remote)",
      roles: [
        { title: "Software Development Engineer II", period: "Feb 2026 - Now" },
        { title: "Software Development Engineer I", period: "Apr 2024 - Feb 2026" },
      ],
      description: [
        "Architect and maintain a real-time pay-per-call marketplace engine processing inbound phone leads across insurance verticals (auto, health, medicare, life, home) using Python/FastAPI deployed on Kubernetes",
        "Design and operate a multi-stage auction/pricing engine that qualifies, scores, and routes calls to buyers in real-time using distributed workers over NATS and configurable scoring algorithms",
        "Build and maintain 250+ buyer integration plugins connecting to major ad-tech and insurance platforms via a registry-based plugin architecture",
        "Orchestrate the full inbound call lifecycle through Twilio — IVR verification, caller qualification, buyer connection, call recording, and billing settlement",
        "Engineer a polyglot data layer spanning PostgreSQL, MongoDB, Redis, and Kafka with Avro serialization for event streaming, caching, caps tracking, and transactional billing",
        "Implement campaign management, geo-targeting, schedule-based routing, budget/cap enforcement, and concurrency controls for a two-sided vendor/buyer marketplace",
        "Develop TCPA compliance workflows integrating third-party verification and suppression services to ensure regulatory adherence",
        "Build programmatic Ping/Post APIs enabling external vendors to submit leads, receive real-time bids, and execute call transfers programmatically",
        "Own CI/CD pipelines via GitHub Actions and Argo CD, containerized deployments on Kubernetes, and observability tooling with Sentry and Prometheus",
        "Create CLI tooling (Typer) for operations — campaign management, integration testing, cap resets, data exports, and automated record synchronization",
      ],
      techStack: ["Python", "FastAPI", "Typescript", "Javascript", "Golang", "PostgreSQL", "MongoDB", "Redis", "Kafka", "NATS", "Twilio", "Kubernetes", "Argo CD", "Docker", "AWS", "GitHub Actions", "Sentry", "Prometheus"],
      companyUrl: "https://whatifmediagroup.com",
    },
    {
      company: "Warner Bros. Discovery",
      role: "Python Backend Engineer",
      period: "Oct 2022 - Dec 2023",
      location: "LATAM (via Nimbux911)",
      description: [
        "Developed middleware API for media sharing connecting content providers with HBO endpoints",
        "Designed and maintained database models and schemas for content metadata management",
        "Built admin dashboard with custom functionalities to manage media objects",
        "Implemented scaling and performance testing, achieving significant throughput improvements",
      ],
      techStack: ["Python", "Django", "SQL", "Docker", "AWS", "CI/CD", "GitHub Actions"],
      companyUrl: "https://wbd.com",
    },
    {
      company: "Nimbux911",
      role: "Python Backend Engineer",
      period: "Oct 2022 - Present",
      location: "Argentina",
      description: [
        "Led backend refactor from Python 2.7/Django 1.2 to Python 3.9/Django 4",
        "Migrated AWS backup infrastructure from local servers to S3",
        "Improved system reliability and maintainability through modernization",
      ],
      techStack: ["Python", "Django", "SQL", "Docker", "AWS", "Linux"],
      companyUrl: "https://nimbux911.com/en/",
    },
    {
      company: "Mantech Labs LLC",
      role: "Python Backend Engineer",
      period: "May 2021 - Oct 2022",
      location: "US Remote",
      description: [
        "Built Python web applications using Django REST Framework",
        "Designed, developed, and integrated APIs for enterprise clients",
        "Deployed services on cloud environments with automated CI/CD pipelines",
        "Created technical documentation and automated API docs with OpenAPI",
        "Implemented comprehensive unit testing and scaling improvements",
      ],
      techStack: ["Python", "Django", "DRF", "SQL", "Docker", "Linux", "Git"],
    },
    {
      company: "Freelance",
      role: "Python Fullstack Developer",
      period: "Aug 2020 - Mar 2021",
      location: "Buenos Aires",
      description: [
        "Developed websites for professionals and retail businesses",
        "Deployed services on Heroku cloud platform",
        "Created and organized technical documentation",
      ],
      techStack: ["Python", "Django", "HTML", "CSS", "Heroku", "Git"],
    },
  ],

  skills: {
    languages: ["Python", "Go", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["Django", "Django REST Framework", "FastAPI"],
    tools: ["Docker", "AWS", "Git", "GitHub Actions", "Linux", "Terraform", "PostgreSQL", "Redis"],
    methodologies: ["Agile", "Scrum", "CI/CD", "TDD", "REST API Design"],
  },

  projects: [
    {
      name: "dbvault",
      description: "Interface to retrieve secrets from Vault using BitWarden for secure credentials access",
      language: "Go",
      url: "https://github.com/pablomarelli/dbvault",
    },
    {
      name: "homelab-infra",
      description: "Homelab infrastructure as code using Terraform for reproducible environments",
      language: "HCL",
      url: "https://github.com/pablomarelli/homelab-infra",
    },
  ],

  education: [
    {
      degree: "Bachelor of Architecture",
      institution: "Universidad Nacional de La Plata",
      period: "2011 - 2019",
      description: "Foundation in design thinking, project management, and systematic problem-solving",
    },
  ],

  awards: [
    {
      title: "3rd Prize - Faro de la Cultura International Contest",
      organization: "Socearq",
      year: "2018",
    },
    {
      title: "Honorable Prize - inHAUS Vivienda Modular",
      organization: "inHAUS",
      year: "2017",
    },
    {
      title: "Arquisur 2016 Premio Aroztegui",
      organization: "Arquisur",
      year: "2016",
      description: "Representative for Universidad Nacional de La Plata",
    },
  ],
};
