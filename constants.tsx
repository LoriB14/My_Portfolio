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
    description: "An AI tool that helps people in Toronto find food banks, shelters, and community services. You type what you need in plain English and it finds what is nearby.",
    detailedDescription: "Won 1st place at ElleHacks in November 2025. I led the development. The app takes plain language input, uses the Gemini API to understand what the person needs, and then finds and maps nearby resources using OpenStreetMap and Leaflet. Built with React and Tailwind. It has an offline cache so it still works on bad connections.",
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
    description: "A full e-commerce platform I built completely on my own. Real-time cart, product filters, and Stripe checkout. Live and in production.",
    detailedDescription: "I was the sole developer on this. I designed the database schema, built the auth system, integrated Stripe for payments, and deployed the whole thing on Vercel. Built with Next.js, Supabase, and TypeScript.",
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
    description: "An AI packing assistant that builds a smart checklist based on your trip, the weather, and what you are planning to do.",
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
    description: "A dashboard that shows parking availability at GO stations in real time. Built to help commuters know if there is a spot before they leave.",
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
