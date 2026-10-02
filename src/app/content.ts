import { Txt } from './i18n';

export interface Link {
  label: Txt;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  status: Txt;
  live: boolean;
  summary: Txt;
  role: Txt;
  highlights: Txt[];
  stack: string[];
  links: Link[];
  /** Desktop screenshots under public/projects/<id>/. Empty shows a placeholder. */
  images: string[];
  /** Phone screenshots, shown as a row of devices under the project. */
  mobile?: { src: string; caption: Txt }[];
}

export interface ClientWork {
  sector: Txt;
  title: Txt;
  description: Txt;
  result: Txt;
  stack: string[];
}

export interface Job {
  company: Txt;
  role: Txt;
  period: Txt;
  place: Txt;
  highlights: Txt[];
}

export interface SkillGroup {
  title: Txt;
  items: string[];
}

export const PROFILE = {
  name: 'Jhon Jader Estrada',
  role: { es: 'Desarrollador Backend / Full Stack', en: 'Backend / Full Stack Developer' } as Txt,
  headline: {
    es: 'Construyo plataformas SaaS de punta a punta.',
    en: 'I build SaaS platforms end to end.',
  } as Txt,
  intro: {
    es: 'Más de 4 años desarrollando software en producción: APIs con NestJS y Go, bases de datos PostgreSQL, SQL Server y MongoDB, e infraestructura en AWS. Hoy desarrollo dos plataformas SaaS que ya tienen usuarios reales.',
    en: '4+ years shipping production software: APIs with NestJS and Go, PostgreSQL, SQL Server and MongoDB databases, and AWS infrastructure. Today I build two SaaS platforms used by real customers.',
  } as Txt,
  location: { es: 'Cali, Colombia · Remoto o híbrido', en: 'Cali, Colombia · Remote or hybrid' } as Txt,
  email: 'estradajhon07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jhon-jader-estrada-pizarro-dev',
  github: 'https://github.com/jhon98ep',
  cv: 'cv-jhon-estrada.pdf',
};

export const FACTS: { value: string; label: Txt }[] = [
  { value: '4+', label: { es: 'años en producción', en: 'years in production' } },
  { value: '2', label: { es: 'plataformas SaaS en vivo', en: 'live SaaS platforms' } },
  { value: '15s → 5s', label: { es: 'consultas SQL optimizadas', en: 'SQL queries optimized' } },
  { value: '-30%', label: { es: 'tiempo de respuesta de APIs', en: 'API response time' } },
];

export const PROJECTS: Project[] = [
  {
    id: 'canchaya',
    name: 'CanchaYa',
    status: { es: 'En producción', en: 'In production' },
    live: true,
    summary: {
      es: 'SaaS para que complejos deportivos en Colombia gestionen reservas, horarios, clientes y pagos sin WhatsApp ni Excel.',
      en: 'SaaS that lets sports venues in Colombia manage bookings, schedules, customers and payments without WhatsApp or spreadsheets.',
    },
    role: {
      es: 'Líder técnico: diseñé y construí la plataforma completa.',
      en: 'Tech lead: designed and built the whole platform.',
    },
    highlights: [
      {
        es: 'Arquitectura, modelo de datos, backend, panel web y app móvil.',
        en: 'Architecture, data model, backend, web dashboard and mobile app.',
      },
      {
        es: 'Reservas sincronizadas en tiempo real con WebSockets y notificaciones multicanal.',
        en: 'Real-time booking sync over WebSockets and multichannel notifications.',
      },
      {
        es: 'Infraestructura en AWS (Lambda, S3) definida como código con Terraform.',
        en: 'AWS infrastructure (Lambda, S3) defined as code with Terraform.',
      },
      {
        es: 'Modelo de suscripción con 3 planes.',
        en: 'Subscription model with 3 plans.',
      },
    ],
    stack: ['NestJS', 'MongoDB', 'Angular', 'React Native', 'AWS Lambda', 'Terraform', 'WebSockets'],
    links: [{ label: { es: 'Ver sitio', en: 'Visit site' }, url: 'https://cancha-ya.com' }],
    images: [
      'projects/canchaya/canchas.webp',
      'projects/canchaya/reserva.webp',
      'projects/canchaya/calendario-dark.webp',
    ],
  },
  {
    id: 'dotra',
    name: 'Dotra',
    status: { es: 'En producción', en: 'In production' },
    live: true,
    summary: {
      es: 'Plataforma de domicilios y transporte con una vertical para restaurantes, con panel web bilingüe y apps móviles.',
      en: 'Delivery and transport platform with a restaurant vertical, a bilingual web dashboard and mobile apps.',
    },
    role: {
      es: 'Desarrollador backend / full stack: arquitectura, base de datos, backend y web.',
      en: 'Backend / full stack developer: architecture, database, backend and web.',
    },
    highlights: [
      {
        es: 'Definí la arquitectura y el modelo de datos en PostgreSQL.',
        en: 'Defined the architecture and the PostgreSQL data model.',
      },
      {
        es: 'Backend en NestJS y frontend web en Angular, con login de Google e interfaz español/inglés.',
        en: 'NestJS backend and Angular web frontend, with Google sign-in and a Spanish/English UI.',
      },
      {
        es: 'Participé en las apps móviles en React Native, hoy en revisión en Google Play.',
        en: 'Contributed to the React Native mobile apps, now in Google Play review.',
      },
    ],
    stack: ['NestJS', 'PostgreSQL', 'Angular', 'React Native', 'Google OAuth'],
    links: [{ label: { es: 'Ver sitio', en: 'Visit site' }, url: 'https://www.dotra.online' }],
    images: ['projects/dotra/pedidos.webp', 'projects/dotra/menu-web.webp'],
    mobile: [
      { src: 'projects/dotra/app-login.webp', caption: { es: 'App de clientes · acceso', en: 'Customer app · sign in' } },
      { src: 'projects/dotra/app-confirmar.webp', caption: { es: 'App de clientes · pedido', en: 'Customer app · checkout' } },
      { src: 'projects/dotra/app-menu.webp', caption: { es: 'App de restaurantes · menú', en: 'Restaurant app · menu' } },
    ],
  },
  {
    id: 'turnogo',
    name: 'TurnoGo',
    status: { es: 'En desarrollo', en: 'In development' },
    live: false,
    summary: {
      es: 'Marketplace de servicios a domicilio que conecta clientes con prestadores cercanos.',
      en: 'Home-services marketplace that matches customers with nearby providers.',
    },
    role: {
      es: 'Arquitectura, backend y frontend.',
      en: 'Architecture, backend and frontend.',
    },
    highlights: [
      {
        es: 'Búsqueda geoespacial de prestadores cercanos sobre PostgreSQL.',
        en: 'Geospatial search for nearby providers on PostgreSQL.',
      },
      {
        es: 'Migraciones versionadas con TypeORM y entornos replicables con Docker Compose.',
        en: 'Versioned TypeORM migrations and reproducible Docker Compose environments.',
      },
    ],
    stack: ['NestJS', 'PostgreSQL', 'TypeORM', 'Angular 19', 'Docker'],
    links: [],
    images: [],
  },
  {
    id: 'docgen',
    name: 'doc-generator-multi-ai',
    status: { es: 'Código abierto', en: 'Open source' },
    live: true,
    summary: {
      es: 'CLI que genera documentación técnica y manuales de usuario analizando proyectos JavaScript/TypeScript con IA.',
      en: 'CLI that writes technical docs and user manuals by analyzing JavaScript/TypeScript projects with AI.',
    },
    role: {
      es: 'Autor.',
      en: 'Author.',
    },
    highlights: [
      {
        es: '6 proveedores de IA (Gemini, Claude, DeepSeek, Qwen, OpenRouter y Ollama local) con fallback automático.',
        en: '6 AI providers (Gemini, Claude, DeepSeek, Qwen, OpenRouter and local Ollama) with automatic fallback.',
      },
      {
        es: 'Caché para no repetir análisis y exportación a PDF.',
        en: 'Caching to avoid re-analysis, plus PDF export.',
      },
    ],
    stack: ['TypeScript', 'Node.js', 'Ollama', 'LLM APIs'],
    links: [
      {
        label: { es: 'Ver código', en: 'View code' },
        url: 'https://github.com/jhon98ep/doc-generator-multi-ai',
      },
    ],
    images: [],
  },
];

export const CLIENT_WORK: ClientWork[] = [
  {
    sector: { es: 'Seguridad y control de acceso', en: 'Security & access control' },
    title: { es: 'Optimización de un sistema de gestión de personal', en: 'Optimizing a workforce management system' },
    description: {
      es: 'Optimicé índices y procedimientos almacenados en SQL Server, migré el frontend de Angular 14 a 16 e integré mapas y cámaras de acceso.',
      en: 'Tuned SQL Server indexes and stored procedures, migrated the frontend from Angular 14 to 16, and integrated maps and access cameras.',
    },
    result: { es: 'Consultas de 15 s a 5 s · 2.000+ registros migrados sin pérdidas', en: 'Queries from 15 s to 5 s · 2,000+ records migrated with no loss' },
    stack: ['Node.js', 'SQL Server', 'Angular', 'Azure Maps'],
  },
  {
    sector: { es: 'Servicios empresariales', en: 'Business services' },
    title: { es: 'Microservicios e integración con ERP', en: 'Microservices and ERP integration' },
    description: {
      es: 'Desarrollé microservicios con NestJS y PHP 8 y conecté WordPress con el ERP del cliente mediante plugins a medida.',
      en: 'Built NestJS and PHP 8 microservices and connected WordPress to the client ERP through custom plugins.',
    },
    result: { es: '+40% de concurrencia · 500+ clientes registrados al mes', en: '+40% concurrency · 500+ customers onboarded per month' },
    stack: ['NestJS', 'PHP 8', 'MySQL', 'WordPress'],
  },
  {
    sector: { es: 'Operaciones corporativas', en: 'Corporate operations' },
    title: { es: 'Automatización de procesos internos', en: 'Internal process automation' },
    description: {
      es: 'Diseñé flujos en n8n y Make que conectan formularios, CRM, correo y hojas de cálculo.',
      en: 'Designed n8n and Make workflows connecting forms, CRM, email and spreadsheets.',
    },
    result: { es: '~15 horas de trabajo manual ahorradas por semana', en: '~15 hours of manual work saved per week' },
    stack: ['n8n', 'Make', 'APIs REST'],
  },
  {
    sector: { es: 'Logística', en: 'Logistics' },
    title: { es: 'APIs de alto rendimiento para seguimiento', en: 'High-throughput tracking APIs' },
    description: {
      es: 'Construí APIs REST en Go (Fiber) con PostgreSQL, desplegadas con Docker en servidores Ubuntu y AWS.',
      en: 'Built Go (Fiber) REST APIs on PostgreSQL, deployed with Docker on Ubuntu servers and AWS.',
    },
    result: { es: 'Servicios en producción para apps de domicilios', en: 'Production services for delivery apps' },
    stack: ['Go', 'Fiber', 'PostgreSQL', 'Docker', 'AWS'],
  },
];

export const JOBS: Job[] = [
  {
    company: { es: 'CanchaYa', en: 'CanchaYa' },
    role: { es: 'Desarrollador Backend / Full Stack — Líder técnico', en: 'Backend / Full Stack Developer — Tech lead' },
    period: { es: 'may. 2023 – actualidad', en: 'May 2023 – present' },
    place: { es: 'Remoto', en: 'Remote' },
    highlights: [
      { es: 'Plataforma completa: arquitectura, backend, web y app móvil.', en: 'Whole platform: architecture, backend, web and mobile app.' },
    ],
  },
  {
    company: { es: 'Dotra', en: 'Dotra' },
    role: { es: 'Desarrollador Backend / Full Stack', en: 'Backend / Full Stack Developer' },
    period: { es: 'dic. 2025 – actualidad', en: 'Dec 2025 – present' },
    place: { es: 'Remoto', en: 'Remote' },
    highlights: [
      { es: 'Arquitectura, PostgreSQL, backend NestJS y web Angular.', en: 'Architecture, PostgreSQL, NestJS backend and Angular web.' },
    ],
  },
  {
    company: { es: 'OFILED Tech Solutions', en: 'OFILED Tech Solutions' },
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    period: { es: 'may. 2024 – sep. 2025', en: 'May 2024 – Sep 2025' },
    place: { es: 'Cali, Colombia · Remoto', en: 'Cali, Colombia · Remote' },
    highlights: [
      { es: 'Consultas SQL Server de 15 s a 5 s y APIs 30% más rápidas.', en: 'SQL Server queries from 15 s to 5 s and 30% faster APIs.' },
      { es: 'Migración de Angular 14 a 16 con 20% menos tiempo de carga.', en: 'Angular 14 → 16 migration with 20% faster initial load.' },
    ],
  },
  {
    company: { es: 'Soluciones 360 SAS', en: 'Soluciones 360 SAS' },
    role: { es: 'Desarrollador Backend', en: 'Backend Developer' },
    period: { es: 'ago. 2022 – ene. 2024', en: 'Aug 2022 – Jan 2024' },
    place: { es: 'Bogotá, Colombia · Remoto', en: 'Bogotá, Colombia · Remote' },
    highlights: [
      { es: 'Microservicios NestJS y PHP 8 con 40% más concurrencia.', en: 'NestJS and PHP 8 microservices with 40% more concurrency.' },
      { es: 'Reducción de ~25% de la deuda técnica.', en: '~25% less technical debt.' },
    ],
  },
  {
    company: { es: 'Desarrollo independiente', en: 'Independent work' },
    role: { es: 'Desarrollador Freelance', en: 'Freelance Developer' },
    period: { es: '2020 – actualidad', en: '2020 – present' },
    place: { es: 'Remoto', en: 'Remote' },
    highlights: [
      { es: 'APIs en Go, automatizaciones con n8n/Make y despliegues en AWS.', en: 'Go APIs, n8n/Make automations and AWS deployments.' },
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  { title: { es: 'Backend', en: 'Backend' }, items: ['Node.js', 'NestJS', 'Express', 'Go (Fiber)', 'PHP 8', 'REST', 'WebSockets'] },
  { title: { es: 'Bases de datos', en: 'Databases' }, items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Redis', 'TypeORM'] },
  { title: { es: 'Frontend y móvil', en: 'Frontend & mobile' }, items: ['Angular', 'TypeScript', 'React Native', 'Ionic', 'Tailwind CSS'] },
  { title: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' }, items: ['AWS', 'Terraform', 'Docker', 'Ubuntu Server', 'GitHub Actions'] },
  { title: { es: 'IA y automatización', en: 'AI & automation' }, items: ['Claude Code', 'APIs de LLM', 'Ollama', 'n8n', 'Make'] },
];
