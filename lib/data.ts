export const personalInfo = {
  name: "Pablo Chandí",
  role: "Senior Backend Engineer | Fullstack Experience",
  bio: "Senior Backend Engineer with 7+ years building SaaS systems in cybersecurity and payroll. Most of my work has been around distributed systems, cloud (AWS/GCP), and Kubernetes, focusing on improving reliability, performance, and scalability. I'm comfortable working end-to-end across backend, infrastructure, and frontend when needed, and I tend to approach problems with a focus on system design and long-term maintainability.",
  email: "pachande@gmail.com",
  location: "Ecuador, Pichincha, Quito, 170201",
  github: "https://github.com/pablochandi",
  linkedin: "https://linkedin.com/in/pablochandi",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Ruby", "C#", "Java", "Go", "JavaScript", "TypeScript"]
  },
  {
    category: "Backend Frameworks",
    items: ["Ruby on Rails", "Flask", "Spring Boot", "ASP.NET Core", "Node.js", "REST APIs", "API Design", "Microservices"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Couchdb", "Gitlabs", "Jenkins"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, RDS, S3, Lambda, SQS, EC2, Spot Instances)", "GCP", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    category: "Messaging & Event Streaming",
    items: ["Kafka", "RabbitMQ", "SQS"]
  },
  {
    category: "Systems & Architecture",
    items: ["Distributed Systems", "Event-driven Architecture", "Service-oriented Design"]
  },
  {
    category: "Testing & Quality",
    items: ["Unit & Integration Testing", "Mocks", "Load Testing (JMeter)", "Locust"]
  },
  {
    category: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "Elasticsearch"]
  },
  {
    category: "Frontend (Supporting Experience)",
    items: ["React", "Next.js", "Angular"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Confluence"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Mission-Critical Payroll System - Colombia",
    description: "Developed and maintained a mission-critical payroll system for Colombia at Buk Spa, ensuring accurate calculations aligned with local labor and tax regulations (salaries, benefits, taxes, legal compliance).",
    technologies: ["Ruby on Rails", "PostgreSQL", "Redis", "React", "Grafana", "Sentry"],
    highlights: [
      "Delivered features end-to-end across backend and frontend for company expansion into new markets",
      "Improved system architecture through refactoring, increasing modularity and reducing technical debt",
      "Monitored production systems using Grafana and Sentry for quick identification and resolution of critical issues",
      "Collaborated with legal, product, and HR teams to translate complex regulatory requirements into scalable solutions"
    ],
    github: null,
    demo: null
  },
  {
    id: 2,
    title: "AI Document Classification Agent",
    description: "Led the development of a document classification agent at KRIPTOS, improving system scalability and maintainability using asynchronous processing with queues and background workers.",
    technologies: ["Python", "C#", "Kafka", "RabbitMQ", "Docker", "Kubernetes", "Elasticsearch"],
    highlights: [
      "Implemented asynchronous processing using queues and background workers for document classification workflows",
      "Improved scalability and system reliability while monitoring logs and metrics to ensure quality",
      "Contributed to system design decisions to improve component interactions",
      "Built data pipelines to extract, transform, and analyze large datasets"
    ],
    github: null,
    demo: null
  },
  {
    id: 3,
    title: "Cloud Agent & Scanning Services",
    description: "Took ownership of a cloud agent at KRIPTOS, working on scanning processes, monitoring logs and metrics, and improving system reliability. Integrated with external services like Google and Microsoft platforms.",
    technologies: ["C#", "ASP.NET Core", "Docker", "Kubernetes", "AWS", "Google Cloud"],
    highlights: [
      "Developed Windows services, internal tools, and APIs using C#",
      "Supported containerized tools (Docker) and managed containers in Kubernetes environments",
      "Supported enterprise cloud and Windows agents, troubleshooting issues and implementing improvements",
      "Integrated with external services such as Google and Microsoft platforms"
    ],
    github: null,
    demo: null
  },
  {
    id: 4,
    title: "Database Optimization & Data Pipelines",
    description: "Applied indexing strategies to optimize database performance and handle large datasets more efficiently. Built data pipelines for extraction, transformation, and analysis.",
    technologies: ["PostgreSQL", "MongoDB", "Python", "Bash", "APIs"],
    highlights: [
      "Optimized database performance through strategic indexing for large datasets",
      "Built data pipelines to extract, transform, and analyze large datasets",
      "Took ownership of data-related tasks including manual analysis and quality work",
      "Worked on various applications including secure verifier and Windows product tools"
    ],
    github: null,
    demo: null
  }
];

export const experience = [
  {
    id: 1,
    company: "Buk Spa - HR & Payroll Software",
    position: "Software Engineer (Remote, Chile)",
    period: "Jan 2023 - Present",
    description: "Working on a mission-critical payroll system for Colombia, ensuring accurate calculations aligned with local labor and tax regulations.",
    achievements: [
      "Worked on a mission-critical payroll system for Colombia, ensuring accurate calculations aligned with local labor and tax regulations (salaries, benefits, taxes, and legal compliance)",
      "Developed features to support the company's expansion into new markets, improving system flexibility and support for regional differences",
      "Developed and delivered features end-to-end across backend and frontend",
      "Improved system architecture through refactoring, increasing modularity and reducing technical debt",
      "Monitored production systems using Grafana and Sentry, enabling quick identification and resolution of critical payroll features",
      "Collaborated with legal, product, and HR teams to translate complex regulatory requirements into scalable solutions",
      "Designed and developed backend services and REST APIs for new features"
    ]
  },
  {
    id: 2,
    company: "KRIPTOS - AI & Cybersecurity Company",
    position: "Semi Senior - Software Engineer (Remote)",
    period: "Jul 2019 - Dec 2022",
    description: "Led the development of a document classification agent, improving system scalability and reliability.",
    achievements: [
      "Led the development of a document classification agent, improving how the system scaled and making it easier to maintain over time",
      "Worked with asynchronous processing using queues and background workers to handle document classification workflows, improving scalability and system reliability, while monitoring logs and metrics to ensure quality",
      "Contributed to the design and implementation of backend services for document classification",
      "Took part in system design decisions to improve how different components interacted with each other and with team members",
      "Developed Windows services, internal tools, and APIs using C#, integrating with external services such as Google and Microsoft platforms",
      "Took ownership of a cloud agent, working on scanning processes, monitoring logs and metrics, and improving system reliability",
      "Supported containerized tools (Docker), working on deployments and managing containers in Kubernetes environments",
      "Supported enterprise cloud and Windows agents, troubleshooting issues and implementing verification improvements",
      "Built data pipelines to extract, transform, and analyze large datasets"
    ]
  },
  {
    id: 3,
    company: "KRIPTOS - AI & Cybersecurity Company",
    position: "Junior Software Engineer",
    period: "Earlier Role",
    description: "Worked on various applications including a secure verifier and tools for uninstalling Windows products.",
    achievements: [
      "Worked on various applications, including a secure verifier and a tool for uninstalling Windows products (C#, APIs, Bash)",
      "Applied indexing strategies to optimize database performance and handle large datasets more efficiently",
      "Took ownership of data-related tasks, including manual analysis and quality work to support team members"
    ]
  }
];

export const certifications = [
  "Master in Software Engineering and Information Systems - Universidad Internacional de La Rioja, Spain (Nov 2022 - Oct 2023)",
  "Computer Engineer - Universidad del Ecuador, Quito (March 2016)",
  "TÜV Rheinland Group - Internal Auditor ISO 27001 TÜV Rheinland Certified Qualification (Nov 2023)",
  "MIU - Continuing Education and Leadership, Miami, Florida (Aug 2022 - Oct 2022, Online)",
  "Google Cloud Fundamentals: Core Infrastructure (June 2020)",
  "Architecting with Google Kubernetes Engine: Workloads (July 2020)"
];
