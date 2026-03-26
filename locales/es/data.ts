export const personalInfo = {
  name: "Pablo Chandi",
  role: "Ingeniero Backend Senior | Experiencia Fullstack",
  bio: "Ingeniero Backend Senior con más de 7 años construyendo sistemas SaaS en ciberseguridad y nómina. La mayor parte de mi trabajo ha sido en sistemas distribuidos, cloud (AWS/GCP) y Kubernetes, enfocándome en mejorar la confiabilidad, rendimiento y escalabilidad. Me siento cómodo trabajando de extremo a extremo en backend, infraestructura y frontend cuando es necesario, y tiendo a abordar los problemas con un enfoque en diseño de sistemas y mantenibilidad a largo plazo.",
  email: "pachande@gmail.com",
  location: "Ecuador, Pichincha, Quito, 170201",
  github: "https://github.com/pablochandi",
  linkedin: "https://linkedin.com/in/pablochandi",
  instagram: "https://instagram.com/pablochandi",
  facebook: "https://facebook.com/pablochandi",
  tiktok: "https://tiktok.com/@pablochandi",
};

export const skills = [
  {
    category: "Lenguajes",
    items: ["Python", "Ruby", "C#", "Java", "Go", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks Backend",
    items: [
      "Ruby on Rails",
      "Flask",
      "Spring Boot",
      "ASP.NET Core",
      "Node.js",
      "REST APIs",
      "Diseño de APIs",
      "Microservicios",
    ],
  },
  {
    category: "Bases de Datos",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, RDS, S3, Lambda, SQS, EC2, Spot Instances)",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    category: "Mensajería y Event Streaming",
    items: ["Kafka", "RabbitMQ", "SQS"],
  },
  {
    category: "Sistemas y Arquitectura",
    items: [
      "Sistemas Distribuidos",
      "Arquitectura Orientada a Eventos",
      "Diseño Orientado a Servicios",
    ],
  },
  {
    category: "Testing y Calidad",
    items: [
      "Testing Unitario e Integración",
      "Mocks",
      "Testing de Carga (JMeter)",
      "Locust",
    ],
  },
  {
    category: "Monitoreo y Observabilidad",
    items: ["Prometheus", "Grafana", "Elasticsearch"],
  },
  {
    category: "Frontend (Experiencia de Soporte)",
    items: ["React", "Next.js", "Angular"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Confluence"],
  },
];

// TODO: Reemplazar con proyectos reales
export const projects = [
  {
    id: 1,
    title: "Título de Proyecto de Ejemplo",
    description:
      "Descripción de proyecto de ejemplo. Este es un marcador de posición para futuros detalles del proyecto.",
    technologies: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
    highlights: [
      "Punto destacado de ejemplo 1",
      "Punto destacado de ejemplo 2",
      "Punto destacado de ejemplo 3",
    ],
    github: null,
    demo: null,
  },
];

export const experience = [
  {
    id: 1,
    company: "Buk Spa - Software de RRHH y Nómina",
    position: "Ingeniero de Software (Remoto, Chile)",
    period: "Ene 2023 - Presente",
    location: "Chile (Remoto)",
    description:
      "Colaboración en mejora y mantenimiento de sistema de nómina crítico para Colombia, refactorización de arquitectura y trabajo con equipos multidisciplinarios.",
    technologies: ["React", "Node.js", "Azure", "Docker", "Spring Boot"],
    achievements: [
      "Trabajé en un sistema de nómina crítico para Colombia, asegurando cálculos precisos alineados con las regulaciones laborales y fiscales locales (salarios, beneficios, impuestos y cumplimiento legal)",
      "Desarrollé funcionalidades para apoyar la expansión de la empresa a nuevos mercados, mejorando la flexibilidad del sistema y el soporte para diferencias regionales",
      "Desarrollé y entregué funcionalidades de extremo a extremo en backend y frontend",
      "Mejoré la arquitectura del sistema mediante refactorización, aumentando la modularidad y reduciendo la deuda técnica",
      "Monitoricé sistemas de producción usando Grafana y Sentry, permitiendo la identificación y resolución rápida de funcionalidades críticas de nómina",
      "Colaboré con equipos legales, de producto y RRHH para traducir requisitos regulatorios complejos en soluciones escalables",
      "Diseñé y desarrollé servicios backend y APIs REST para nuevas funcionalidades",
    ],
  },
  {
    id: 2,
    company: "KRIPTOS - Empresa de IA y Ciberseguridad",
    position: "Ingeniero de Software Semi Senior (Remoto)",
    period: "Jul 2019 - Dic 2022",
    location: "Remoto",
    description:
      "Liderazgo en desarrollo de agente de clasificación de documentos con procesamiento asíncrono, containerización Docker y gestión de agentes en la nube.",
    technologies: [
      "Angular",
      "Flutter",
      "Dart",
      "Firebase",
      "Node.js",
      "Express",
    ],
    achievements: [
      "Lideré el desarrollo de un agente de clasificación de documentos, mejorando cómo escalaba el sistema y haciéndolo más fácil de mantener con el tiempo",
      "Trabajé con procesamiento asíncrono usando colas y workers en segundo plano para manejar flujos de trabajo de clasificación de documentos, mejorando la escalabilidad y confiabilidad del sistema, mientras monitoreaba logs y métricas para asegurar la calidad",
      "Contribuí al diseño e implementación de servicios backend para clasificación de documentos",
      "Participé en decisiones de diseño de sistemas para mejorar cómo los diferentes componentes interactuaban entre sí y con los miembros del equipo",
      "Desarrollé servicios de Windows, herramientas internas y APIs usando C#, integrando con servicios externos como plataformas de Google y Microsoft",
      "Tomé propiedad de un agente en la nube, trabajando en procesos de escaneo, monitoreando logs y métricas, y mejorando la confiabilidad del sistema",
      "Apoyé herramientas containerizadas (Docker), trabajando en despliegues y gestionando contenedores en entornos Kubernetes",
      "Apoyé agentes empresariales en la nube y Windows, solucionando problemas e implementando mejoras de verificación",
      "Construí pipelines de datos para extraer, transformar y analizar grandes conjuntos de datos",
    ],
  },
  {
    id: 3,
    company: "KRIPTOS - Empresa de IA y Ciberseguridad",
    position: "Ingeniero de Software Junior",
    period: "Rol Anterior",
    location: "Remoto",
    description:
      "Desarrollo de aplicaciones de seguridad y herramientas de Windows, optimización de bases de datos y análisis de calidad de datos.",
    technologies: [],
    achievements: [
      "Trabajé en varias aplicaciones, incluyendo un verificador seguro y una herramienta para desinstalar productos de Windows (C#, APIs, Bash)",
      "Apliqué estrategias de indexación para optimizar el rendimiento de la base de datos y manejar grandes conjuntos de datos de manera más eficiente",
      "Tomé propiedad de tareas relacionadas con datos, incluyendo análisis manual y trabajo de calidad para apoyar a los miembros del equipo",
    ],
  },
];

export const certifications = [
  "Máster en Ingeniería de Software y Sistemas de Información - Universidad Internacional de La Rioja, España (Nov 2022 - Oct 2023)",
  "Ingeniero en Computación - Universidad del Ecuador, Quito (Marzo 2016)",
  "TÜV Rheinland Group - Auditor Interno ISO 27001 Calificación Certificada TÜV Rheinland (Nov 2023)",
  "MIU - Educación Continua y Liderazgo, Miami, Florida (Ago 2022 - Oct 2022, En línea)",
  "Google Cloud Fundamentals: Core Infrastructure (Junio 2020)",
  "Architecting with Google Kubernetes Engine: Workloads (Julio 2020)",
];
