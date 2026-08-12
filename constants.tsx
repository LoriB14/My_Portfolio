
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
    detailedDescription: "Feb 2026 — Created during ElleHacks 2026. Players explore a pixel-art city and make choices around spending, saving, and investing, with simple, kid-friendly feedback that explains real money concepts. The game was built using React + Next.js with Phaser for the top-down world, focusing on clarity, accessibility, and playful learning. Inspired by Wealthsimple's mission to make money education more approachable.",
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
  },
  {
    id: 6,
    title: "EECS 2030 — DATA STRUCTURES",
    category: "ACADEMIC / EECS 2030",
    image: "https://placehold.co/800x450/0f172a/c026d3/png?text=EECS+2030&font=montserrat",
    tags: ["Java", "OOP", "Generics", "Linked Lists"],
    description: "Coursework from York's Data Structures course — object-oriented Java implementations of custom collections, generics, and linked list structures, each paired with a written reflection on the design decisions.",
    detailedDescription: "Nine lab assignments plus a graded assignment building core data structures from scratch in Java: an AirportLog/Airport system modeling encapsulated records with custom parsing constructors, a SingleLinkedList implementation, and a generic Utility class using bounded wildcards (List<? super T>, List<? extends MyInteger>) to safely support subclass/superclass types. Each lab paired working code with a written reflection on what broke and why — for example, handling the empty-list edge case in removeFromHead(), or working out the right generic type bounds for mergeList() and removeZero() after the first versions failed their test cases.",
    features: [
      "Custom Java collections (AirportLog, SingleLinkedList)",
      "Generic type bounds & wildcards",
      "Constructor-based validation/parsing",
      "Written reflection per lab"
    ],
    role: "Student — Individual Coursework",
    status: "Completed, EECS 2030 (York University)",
    technicalDetails: "Pure Java, no external libraries. Focus on encapsulation, defensive copying, generic type constraints, and edge-case handling validated against instructor test suites.",
    demoUrl: "",
    repoUrl: ""
  },
  {
    id: 7,
    title: "YADAG — QA & AUTH TESTING",
    category: "QA / CLIENT PROJECT",
    image: "https://placehold.co/800x450/0f172a/c026d3/png?text=YADAG&font=montserrat",
    tags: ["Manual Testing", "UX/UI Analysis", "AWS Cognito", "Riipen"],
    description: "Structured QA engagement testing authentication, onboarding, housing, and training features for an agri-workforce platform, run as a Riipen work-integrated learning project.",
    detailedDescription: "Designed and executed manual test plans across five feature areas — onboarding, housing, training, workforce/LMIA compliance, and the AWS Cognito authentication migration — documenting results and defects for each. Worked within a structured Riipen team (Project Lead / Research Lead / Strategy Lead / Ops Lead / Comms Lead roles) with a shared decision log to track testing priorities and findings as the product moved through staging.",
    features: [
      "Manual test case design & execution",
      "Cross-feature regression testing",
      "Structured defect documentation",
      "Team decision log & role-based workflow"
    ],
    role: "QA Testing & UX/UI Analyst",
    status: "Ongoing",
    technicalDetails: "Testing across onboarding, housing, training, and workforce/LMIA modules, plus the AWS Cognito auth migration (JWT-based sign-in replacing the prior token system).",
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
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "openjdk" },
      { name: "C", icon: "c" }
    ]
  },
  {
    category: "Frontend",
    description: "Interfaces and interaction",
    icon: "LAYOUT",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", desc: "App routing, SSR", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "HTML / CSS", icon: "html5" },
      { name: "Framer Motion", icon: "framer" }
    ]
  },
  {
    category: "Backend",
    description: "Servers and APIs",
    icon: "SERVER",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Flask", icon: "flask" },
      { name: "REST APIs" },
      { name: "Google APIs", desc: "Maps, Gemini, Places", icon: "google" }
    ]
  },
  {
    category: "Databases",
    description: "Storage and persistence",
    icon: "CHART",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Supabase", desc: "Auth, DB, Storage", icon: "supabase" }
    ]
  },
  {
    category: "Tools & Infra",
    description: "Deployment and tooling",
    icon: "TERMINAL",
    items: [
      { name: "Linux", icon: "linux" },
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "GCP", icon: "googlecloud" },
      { name: "Jenkins", icon: "jenkins" }
    ]
  },
  {
    category: "Data & QA",
    description: "Analytics and process",
    icon: "CHART",
    items: [
      { name: "SQL", icon: "mysql" },
      { name: "KPI Dashboards" },
      { name: "Data Visualization" },
      { name: "Manual Testing" },
      { name: "UX/UI Analysis", icon: "figma" },
      { name: "IL6S / Lean", desc: "Process improvement" }
    ]
  }
];
