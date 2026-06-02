import sixAssistLogo from './Logos/6ixAssist_logo.png';
import pegasusLogo from './Logos/PegasusCover.png';
import packPalLogo from './Logos/PackPal.png';
import wealthQuestLogo from './Logos/Wealth Quest pixel art logo.png';

import { Project, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "6IXASSIST",
    category: "AI / GEOLOCATION",
    image: sixAssistLogo,
    tags: ["Gemini API", "OpenStreetMap", "React", "Tailwind CSS", "TypeScript"],
    description: "An AI‑powered resource finder that helps people in Toronto locate nearby food banks, shelters, and community services by typing natural‑language requests.",
    detailedDescription: "Nov 2025 — Won 1st Place at ElleHacks for concept + implementation. The app converts free‑form questions (e.g., ‘I need food near Yonge & Bloor’) into structured intents using the Gemini API, then geocodes and ranks resources with OpenStreetMap/Leaflet before rendering routes and options on an accessible map UI. Built with React + Tailwind for a responsive experience and engineered with an offline‑aware cache so critical data remains available on spotty networks. Planned enhancements include real‑time update feeds and multi‑language support for broader accessibility.",
    features: [
      "Natural Language Search",
      "Real-time Geolocation Routing",
      "Offline-first Architecture",
      "Multi-language Support"
    ],
    role: "Lead Developer",
    status: "Live / Maintained",
    technicalDetails: "React front end + Gemini for intent classification. Mapping via Leaflet/OpenStreetMap with accessible tiles. A small cache layer keeps critical resource data available offline and handles degraded connectivity.",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "WEALTH QUEST",
    category: "GAME DEV / EDUTECH",
    image: wealthQuestLogo,
    tags: ["React", "Next.js", "Phaser", "TypeScript"],
    description: "Wealth Quest is a retro, life-choice game that teaches kids financial literacy through everyday decisions.",
    detailedDescription: "Feb 2026 — Created during ElleHacks 2026. Players explore a pixel-art city and make choices around spending, saving, and investing, with simple, kid-friendly feedback that explains real money concepts. The game was built using React + Next.js with Phaser for the top-down world, focusing on clarity, accessibility, and playful learning. Inspired by Wealthsimple’s mission to make money education more approachable.",
    features: [
      "Pixel-art City Exploration",
      "Financial Literacy Education",
      "Interactive Decisions",
      "Kid-friendly Feedback"
    ],
    role: "Full Stack Developer",
    status: "Hackathon Project",
    technicalDetails: "Built using React + Next.js for the framework and Phaser for the game engine. Focus on accessibility and educational engagement.",
    demoUrl: "https://ellehacks2026.vercel.app/",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "PEGASUS",
    category: "E-COMMERCE",
    image: pegasusLogo,
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe", "Supabase", "Vercel"],
    description: "A clean, fast storefront with real‑time cart updates, simple product filters, and a frictionless checkout — designed to feel quick and intuitive on any device.",
    detailedDescription: "Source is private. Built with Next.js and Tailwind CSS, the app uses SSR/ISR for product pages to balance freshness with speed, plus a scoped client‑side cart for snappy interactions. The UI follows accessible patterns and a consistent design system. Deployed on Vercel for global edge caching, low latency, and auto‑scaling. Performance budgets and monitoring keep the experience responsive as the catalog grows.",
    features: [
      "Modern Responsive UI",
      "Real-time Cart Management",
      "Dynamic Product Filtering",
      "Optimized Performance"
    ],
    role: "Full Stack Developer",
    status: "Live Deployment",
    technicalDetails: "Next.js (App Router) with server‑side rendering and incremental static regeneration. Tailwind CSS design system, Lighthouse‑friendly performance budgets. Hosted on Vercel for automatic scaling and CDN edge caching.",
    demoUrl: "https://pegasus-zeta.vercel.app/",
    repoUrl: "" 
  },
  {
    id: 4,
    title: "PACKPAL 🚧",
    category: "AI / TRAVEL (COMING SOON)",
    image: packPalLogo,
    tags: ["Next.js", "Gemini 2.5", "NextAuth", "TypeScript", "Drizzle ORM", "PostgreSQL", "Tailwind CSS", "Vercel"],
    description: "An AI‑powered packing assistant that builds smart checklists from your trip details, weather, and planned activities — so you pack exactly what you need.",
    detailedDescription: "Oct 2025 — Developed a Next.js + TypeScript app that uses Gemini 2.5 to generate personalized packing lists based on destination, dates, forecast, and itinerary. Implemented secure authentication with NextAuth and modeled data using Drizzle ORM on PostgreSQL. Added collaborative planning and real‑time checklist sync via Next.js Server Actions. Deployed on Vercel with a custom GoDaddy domain for demos (NewHacks 2025).",
    features: [
      "Smart Packing Lists (Gemini 2.5)",
      "Weather Integration",
      "Collaborative Planning",
      "Real-time Sync"
    ],
    role: "Full Stack Developer",
    status: "In Progress",
    technicalDetails: "Next.js + TypeScript. NextAuth for auth, Drizzle ORM + PostgreSQL for persistence. Server Actions for real‑time data refresh. Target deployment on Vercel.",
    demoUrl: "",
    repoUrl: ""
  },
  {
    id: 5,
    title: "GO STATION TRACKER",
    category: "DATA VISUALIZATION (COMING SOON)",
    image: "https://placehold.co/800x450/FFFFFF/c026d3/png?text=COMING+SOON&font=montserrat",
    tags: ["Python", "Flask", "SQLite", "Chart.js", "JavaScript", "HTML/CSS"],
    description: "A simple, clear dashboard that shows parking availability at GO stations using the lot numbers posted on site — helping commuters find open spots faster.",
    detailedDescription: "Sept 2025 — Created a parking lot tracker that pulls real‑time data from existing public sources and maps it to the lot IDs commuters already recognize. The Flask backend schedules ingestion and normalizes data into SQLite, exposing a small REST API. The frontend presents open vs. occupied lots and historical capacity trends with Chart.js. Designed for clarity and quick decision‑making on the way to the station.",
    features: [
      "Real-time Data Polling",
      "Historical Trend Analysis",
      "Responsive Visualization",
      "Low-bandwidth Mode"
    ],
    role: "Solo Developer",
    status: "Archived",
    technicalDetails: "Flask REST API with a background scheduler for data ingestion, SQLite for storage, Chart.js for visualization.",
    demoUrl: "",
    repoUrl: ""
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming languages",
    icon: "CODE",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "C" }
    ]
  },
  {
    category: "Frontend",
    description: "Interfaces and interaction",
    icon: "LAYOUT",
    items: [
      { name: "React" },
      { name: "Next.js", desc: "App routing, SSR" },
      { name: "Tailwind CSS" },
      { name: "HTML / CSS" },
      { name: "Framer Motion" }
    ]
  },
  {
    category: "Backend",
    description: "APIs, databases, and services",
    icon: "SERVER",
    items: [
      { name: "Node.js" },
      { name: "Flask" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Supabase", desc: "Auth, DB, Storage" },
      { name: "REST APIs" }
    ]
  },
  {
    category: "Tools & Infra",
    description: "Deployment, tooling, and infrastructure",
    icon: "TERMINAL",
    items: [
      { name: "Linux" },
      { name: "Git" },
      { name: "Docker" },
      { name: "Google APIs", desc: "Maps, Gemini, Places" },
      { name: "GCP" },
      { name: "Jenkins" }
    ]
  },
  {
    category: "Data & QA",
    description: "Analytics, testing, and process improvement",
    icon: "CHART",
    items: [
      { name: "SQL" },
      { name: "KPI Dashboards" },
      { name: "Data Visualization" },
      { name: "Manual Testing" },
      { name: "UX/UI Analysis" },
      { name: "IL6S / Lean", desc: "Process improvement" }
    ]
  }
];
