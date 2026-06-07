
import React, { useState } from 'react';

interface ReflectionEntry {
  id: number;
  tab: string;
  project: string;
  title: string;
  date: string;
  sections: { heading: string; text: string }[];
}

const REFLECTIONS: ReflectionEntry[] = [
  {
    id: 1,
    tab: "Hackathon",
    project: "6IXASSIST — ElleHacks 2025",
    title: "What Winning a Hackathon Actually Taught Me",
    date: "November 2025",
    sections: [
      {
        heading: "What Happened",
        text: "My team entered ElleHacks in November 2025. We built 6IXASSIST, a tool that helps people in Toronto find food banks, shelters, and community services using plain language search. I led the development. I handled the Gemini API integration and the map layer using OpenStreetMap and Leaflet. We had 24 hours. We won first place.",
      },
      {
        heading: "What I Struggled With",
        text: "The hardest part was not the code. It was making decisions fast when things broke. The Gemini API returned data in a format I did not expect and I had to rework the pipeline mid-build without losing time. I also underestimated the accessibility layer. I had to cut some things and focus on what mattered most. That was uncomfortable but it made the product better.",
      },
      {
        heading: "What I Learned",
        text: "You cannot perfect everything in 24 hours. You have to ship something that works and is useful. I got faster at reading documentation and adapting when things do not go as planned. Leading the build also taught me to communicate clearly with my teammates when I was stuck so we could fix things together instead of going quiet.",
      },
      {
        heading: "What It Means Going Forward",
        text: "I now start every project by building a working skeleton before adding anything extra. I treat edge cases as part of the plan from the beginning. Winning showed me that working fast and building with care are not opposites. I want to bring both to every role I take on.",
      },
    ],
  },
  {
    id: 2,
    tab: "Internship",
    project: "IL6S Internship — Mondelēz International, 2025",
    title: "What My Internship at Mondelez Taught Me About Building for Real People",
    date: "2025",
    sections: [
      {
        heading: "What Happened",
        text: "At Mondelēz I worked on the IL6S team focused on process improvement in a manufacturing environment. I built KPI dashboards to track production data and helped move manual reporting into digital tools. I also joined sessions where teams mapped out waste and came up with solutions together.",
      },
      {
        heading: "What I Struggled With",
        text: "I came in with a technical background but not much exposure to operations. It took me a while to understand which metrics actually mattered to the team. I built dashboards early on that tracked the wrong things because I had not asked enough questions first. I had to go back, talk to the team more, and rebuild. It was frustrating but it was the right call.",
      },
      {
        heading: "What I Learned",
        text: "The most useful thing I learned was to ask better questions before writing any code. Data only helps if it connects to a real decision someone has to make. I also got better at turning complex data into visuals that people without a technical background could actually use. That pushed me to take communication as seriously as the technical work.",
      },
      {
        heading: "What It Means Going Forward",
        text: "This internship changed how I think about building software. I want to understand the problem properly before I start building the solution. I will bring that habit to every team I work on. It also made me more interested in roles where engineering and product thinking are connected.",
      },
    ],
  },
];

const CAREER_GOALS = [
  "Full-stack engineer on a product team, owning features from start to finish",
  "Building systems that use data to make products smarter",
  "Working where engineering and product decisions are connected",
  "Growing into roles with more scope and responsibility over time",
];

const Reflections: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const active = REFLECTIONS.find((r) => r.id === activeId)!;

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-6">
      {/* Header */}
      <div className="flex items-center gap-4 sm:gap-8 mb-8 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-white">
          Reflections
        </h2>
        <div className="flex-grow h-[2px] bg-gradient-to-r from-fuchsia-600 to-transparent"></div>
      </div>

      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-4 mb-10">
        {REFLECTIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveId(r.id)}
            className={`px-6 py-3 font-display font-black text-sm tracking-widest uppercase transition-all duration-200 border-2 ${
              activeId === r.id
                ? 'bg-fuchsia-600 border-fuchsia-600 text-white shadow-[0_0_20px_rgba(192,38,211,0.4)]'
                : 'bg-transparent border-white/20 text-white/60 hover:border-fuchsia-600/50 hover:text-white'
            }`}
          >
            {r.tab}
          </button>
        ))}
      </div>

      {/* Active Reflection Card */}
      <div className="bg-slate-900/60 border border-white/20 rounded-2xl p-8 md:p-14 backdrop-blur-sm transition-all duration-300">
        {/* Meta */}
        <div className="mb-8">
          <div className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4 bg-fuchsia-600/20 border border-fuchsia-600/30 text-fuchsia-400 rounded">
            Artifact: {active.project}
          </div>
          <h3 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight mb-2 leading-tight">
            {active.title}
          </h3>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{active.date}</p>
        </div>

        <div className="h-[1px] bg-white/10 mb-10"></div>

        {/* Reflection body */}
        <div className="space-y-10">
          {active.sections.map((section, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10">
              <div className="md:col-span-1">
                <h4 className="text-xs font-black text-fuchsia-500 uppercase tracking-widest border-l-4 border-fuchsia-600 pl-3 py-1 leading-relaxed">
                  {section.heading}
                </h4>
              </div>
              <div className="md:col-span-3">
                <p className="text-slate-200 text-base md:text-lg leading-relaxed font-medium">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Vision */}
      <div className="mt-16 bg-slate-900/40 border border-purple-600/30 rounded-2xl p-8 md:p-14">
        <div className="flex items-center gap-6 mb-10">
          <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase whitespace-nowrap">
            Career Vision
          </h3>
          <div className="flex-grow h-[1px] bg-gradient-to-r from-purple-600/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6">
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium border-l-4 border-purple-500 pl-6">
              In the next two to three years I want to be a full-stack engineer on a product team. I want to own features from the database to the interface and work somewhere my decisions have a real impact.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              Longer term I am interested in roles that sit at the intersection of software and data. I want to build systems that do not just store information but actually use it to make things better.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              Mondelēz taught me to understand the problem before building the solution. ElleHacks showed me I can build fast and ship something real under pressure. I want to keep doing both with more scope each time.
            </p>
            <ul className="space-y-4 pt-2">
              {CAREER_GOALS.map((goal, i) => (
                <li key={i} className="flex items-start gap-4 text-base font-medium text-white">
                  <span className="text-purple-400 mt-1.5 text-[8px] flex-shrink-0">●</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflections;
