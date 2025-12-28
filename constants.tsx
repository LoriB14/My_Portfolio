
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "6IXASSIST - RESOURCE FINDER",
    category: "AI / GEOLOCATION",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Gemini API", "OpenStreetMap", "TypeScript"],
    description: "Won 1st Place at ElleHacks Hackathon. An AI-powered web app helping Toronto residents find food banks, shelters, and community resources using natural-language processing and real-time routing.",
    difficulty: "RANK: S"
  },
  {
    id: 2,
    title: "PACKPAL - TRAVEL ASSISTANT",
    category: "AI / FULL STACK",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Gemini 2.5", "Drizzle ORM", "PostgreSQL"],
    description: "Intelligent packing assistant that generates smart lists based on weather, trip duration, and destination. Features secure NextAuth authentication and real-time checklist synchronization.",
    difficulty: "RANK: A+"
  },
  {
    id: 3,
    title: "STATION PARKING TRACKER",
    category: "DATA VISUALIZATION",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Flask", "SQLite", "JavaScript"],
    description: "Real-time parking availability tracker for GO Stations. Designed a high-performance dashboard utilizing existing infrastructure data to streamline the commuting experience.",
    difficulty: "RANK: B+"
  }
];

export const SKILLS: Skill[] = [
  { name: "PYTHON / JAVA / C", level: 95, icon: "LANG", color: "from-red-600 to-red-900" },
  { name: "JAVASCRIPT / TYPESCRIPT", level: 98, icon: "SCRIPT", color: "from-sky-400 to-blue-600" },
  { name: "SQL / POSTGRESQL", level: 90, icon: "DATA", color: "from-slate-700 to-slate-900" },
  { name: "REACT / NEXT.JS", level: 96, icon: "CORE", color: "from-red-500 to-sky-500" },
  { name: "LINUX / GCP / JENKINS", level: 85, icon: "OPS", color: "from-blue-500 to-red-600" },
  { name: "TAILWIND / HTML / CSS", level: 99, icon: "UIUX", color: "from-red-700 to-blue-700" }
];
