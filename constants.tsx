
import { Project, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "6IXASSIST",
    category: "AI / GEOLOCATION",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Gemini API", "OpenStreetMap", "TypeScript"],
    description: "AI-powered resource finder helping Toronto residents locate food banks and shelters.",
    detailedDescription: "Winner of 1st Place at ElleHacks Hackathon. 6ixAssist leverages natural language processing to interpret user needs and maps them to real-time community resource data. It bridges the gap between complex social service databases and the people who need them most.",
    features: [
      "Natural Language Search",
      "Real-time Geolocation Routing",
      "Offline-first Architecture",
      "Multi-language Support"
    ],
    role: "Lead Developer",
    status: "Live / Maintained",
    technicalDetails: "Built using React and the Gemini API for intent classification. The mapping system uses Leaflet with custom tiles for accessibility. We implemented a custom caching layer to ensure critical resource data remains available even with poor internet connectivity.",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "ONYX RETAIL",
    category: "COMMERCE / PRIVATE",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Shopify Plus", "Next.js", "Redis", "Headless"],
    description: "High-performance headless e-commerce architecture for a private luxury fashion client.",
    detailedDescription: "A complete digital transformation for a high-end fashion label. We migrated from a monolithic legacy system to a composable headless architecture. This allowed for sub-second page loads, a 40% increase in mobile conversion rates, and a fully bespoke frontend experience unconstrained by templates.",
    features: [
      "Headless Architecture",
      "Global Inventory Sync",
      "Bespoke 3D Product Viewers",
      "Instant Checkout Flow"
    ],
    role: "Senior Engineer",
    status: "Private / NDA",
    technicalDetails: "Utilizes Next.js 14 for the frontend layer, connected to Shopify Plus via the Storefront API. Heavy emphasis on Edge caching using Vercel and Redis for handling flash-sale traffic spikes. Due to strict NDA agreements, source code and client details are classified.",
    demoUrl: "", // Empty string signals Private
    repoUrl: ""  // Empty string signals Private
  },
  {
    id: 3,
    title: "GO STATION TRACKER",
    category: "DATA VISUALIZATION",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Flask", "SQLite", "JavaScript"],
    description: "Real-time parking availability dashboard for commuters.",
    detailedDescription: "A high-performance dashboard designed to streamline the daily commute. It aggregates data from various GO Transit infrastructure endpoints to provide a real-time visualization of parking availability across the network, helping commuters plan their arrival times better.",
    features: [
      "Real-time Data Polling",
      "Historical Trend Analysis",
      "Responsive Visualization",
      "Low-bandwidth Mode"
    ],
    role: "Solo Developer",
    status: "Archived",
    technicalDetails: "Backend built with Flask serving a REST API. A background scheduler handles data ingestion from public transit APIs, normalizing the data into SQLite. The frontend uses Chart.js for rendering historical trends and immediate availability metrics.",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "PROJECT: SYNTH",
    category: "COMING SOON",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tags: ["WebGPU", "Neural Interface", "R&D"],
    description: "Experimental next-gen rendering engine. Currently in early prototyping phase.",
    detailedDescription: "This project explores the capabilities of WebGPU for real-time raytracing in the browser, combined with generative UI patterns. It represents the next step in my research into immersive web experiences.",
    features: [
      "Real-time Raytracing",
      "Generative UI",
      "Experimental",
      "Stealth Mode"
    ],
    role: "R&D",
    status: "In Development",
    technicalDetails: "Details classified until public release.",
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
  }
];
