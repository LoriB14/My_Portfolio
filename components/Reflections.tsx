
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
    title: "Building Under Pressure: What Winning a Hackathon Actually Taught Me",
    date: "November 2025",
    sections: [
      {
        heading: "What Happened",
        text: "In November 2025, my team entered ElleHacks with the goal of building something with real-world value. We landed on 6IXASSIST — an AI-powered tool to help people in Toronto locate food banks, shelters, and community services through natural-language search. I took the lead on development, handling the Gemini API integration for intent classification and the OpenStreetMap/Leaflet layer for geolocation and routing. We had 24 hours. We won 1st place.",
      },
      {
        heading: "What I Struggled With",
        text: "The hardest part wasn't the code — it was making fast decisions under pressure. When the Gemini API returned structured intent data in a format I hadn't anticipated, I had to redesign the data pipeline mid-build without losing time or breaking the map rendering. I also underestimated how long the accessibility layer would take. I had to make cuts and prioritize ruthlessly, which felt uncomfortable but ultimately made the product stronger.",
      },
      {
        heading: "What I Learned",
        text: "Real engineering under constraints forces you to define what actually matters. You can't perfect everything — you have to ship something functional, clear, and useful. I learned to read API documentation quickly and adapt to unexpected response structures without panicking. Leading the development also taught me how to communicate blockers to teammates in real time so we could solve problems together instead of working in silos.",
      },
      {
        heading: "What It Means Going Forward",
        text: "This experience changed how I approach projects. I now scope more tightly upfront, build a working skeleton before layering on features, and treat edge cases as part of the plan — not an afterthought. Winning reinforced that technical rigor and thoughtful design together matter more than just building fast. I want to bring that balance to every engineering role I take on.",
      },
    ],
  },
  {
    id: 2,
    tab: "Internship",
    project: "IL6S Internship — Mondelēz International, 2025",
    title: "Learning to Speak in Data: My IL6S Internship at Mondelēz",
    date: "2025",
    sections: [
      {
        heading: "What Happened",
        text: "During my internship at Mondelēz International, I worked within an IL6S (Integrated Lean 6 Sigma) framework focused on process improvement and operational efficiency. My main contributions were building KPI dashboards to surface production metrics and helping transition manual reporting workflows to structured digital tools. I also participated in improvement sessions where teams mapped waste and proposed solutions.",
      },
      {
        heading: "What I Struggled With",
        text: "I arrived with a technical background but little exposure to operational environments. Understanding which metrics mattered — and which ones didn't — took time. Early on, I built dashboards that tracked the wrong things because I hadn't understood the team's actual decision-making process. I had to go back, ask more questions, and rebuild with the user's workflow in mind. That pivot was uncomfortable but necessary.",
      },
      {
        heading: "What I Learned",
        text: "The most important skill I developed wasn't technical — it was learning to ask better questions before writing a single line. Data is only useful when it's tied to a decision someone actually has to make. I also gained experience translating complex operational data into visuals that non-technical stakeholders could act on, which pushed me to think about communication and design with the same seriousness as technical accuracy.",
      },
      {
        heading: "What It Means Going Forward",
        text: "This internship reshaped how I think about building software professionally. I want to be the kind of engineer who understands the business problem before reaching for a technical solution. Whether I'm on a product team or a data project, I'll bring that discipline: define the question first, then build the answer. It also confirmed my interest in roles that sit at the intersection of engineering and product thinking.",
      },
    ],
  },
];

const CAREER_GOALS = [
  "Full-stack engineer at a product company, owning features end-to-end",
  "Building data-informed systems that make products smarter over time",
  "UX-driven development — engineering with the user always in view",
  "Contributions to the open-source and technical community",
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
              In two to three years, I want to be working as a full-stack software engineer on a product team — owning features end-to-end, from database design through to the interface. I'm drawn to environments where engineering and product thinking are closely connected and where my decisions directly shape user experience.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              Longer term, I'm interested in the intersection of software and data — building systems that don't just collect information, but use it to make the product smarter. Whether that takes me toward product engineering, data engineering, or something between the two, I want the work to be meaningful and technically rigorous.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              My internship at Mondelēz taught me that technical skill alone isn't enough — the most impactful engineering comes from deeply understanding the problem first. My hackathon work showed me I can build fast, adapt under pressure, and create something that matters to real people. I want to keep doing both, with increasing scope and responsibility.
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
