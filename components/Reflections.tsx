
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

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
    tab: 'Hackathon',
    project: '6IXASSIST — ElleHacks 2025',
    title: 'What winning a hackathon actually taught me',
    date: 'November 2025',
    sections: [
      {
        heading: 'What happened',
        text: 'In 24 hours, my team built 6IXASSIST — an AI tool that helps people in Toronto find food banks and shelters. I led development and won first place.',
      },
      {
        heading: 'The struggle',
        text: "Moving fast under pressure. The Gemini API returned data I didn't expect, so I reworked the pipeline mid-build and cut scope to focus on what mattered.",
      },
      {
        heading: 'What I learned',
        text: 'Ship something useful over something perfect. I got faster at adapting on the fly and communicating clearly with my team when stuck.',
      },
      {
        heading: 'Going forward',
        text: "I now start every project with a working skeleton first. Fast and careful aren't opposites.",
      },
    ],
  },
  {
    id: 2,
    tab: 'Internship',
    project: 'IL6S Internship — Mondelēz International, 2025',
    title: 'What my internship taught me about building for real people',
    date: '2025',
    sections: [
      {
        heading: 'What happened',
        text: 'On the IL6S team at Mondelēz, I built KPI dashboards and helped move manual reporting into digital tools.',
      },
      {
        heading: 'The struggle',
        text: 'I came in technical, not operational. My first dashboards tracked the wrong metrics — I had to ask more questions and rebuild.',
      },
      {
        heading: 'What I learned',
        text: 'Ask better questions before writing code. Data only matters if it drives a real decision.',
      },
      {
        heading: 'Going forward',
        text: 'Understand the problem before building the solution. That habit now shapes every team I work with.',
      },
    ],
  },
];

const CAREER_GOALS = [
  'Full-stack engineer on a product team, owning features end to end',
  'Building systems that use data to make products smarter',
  'Where engineering and product decisions are connected',
];

const ease = [0.16, 1, 0.3, 1] as const;

const Reflections: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const active = REFLECTIONS.find((r) => r.id === activeId)!;

  return (
    <div className="w-full">
      <SectionHeading index="04" title="Reflections" />

      <Reveal direction="left" className="flex gap-6 mb-10 border-b border-white/10">
        {REFLECTIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveId(r.id)}
            className={`relative pb-4 font-display text-sm transition-colors ${
              activeId === r.id ? 'text-white' : 'text-white/35 hover:text-white/60'
            }`}
          >
            {r.tab}
            {activeId === r.id && (
              <motion.span
                layoutId="reflections-underline"
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-fuchsia-400 to-purple-400"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
          </button>
        ))}
      </Reveal>

      <motion.div layout="position" transition={{ duration: 0.35, ease }}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="mb-10">
              <p className="text-xs text-white/35 mb-3">{active.project} · {active.date}</p>
              <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight leading-snug max-w-2xl">
                {active.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {active.sections.map((section, i) => (
                <div key={i}>
                  <h4 className="text-xs font-medium text-fuchsia-300/50 mb-2">{section.heading}</h4>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <Reveal direction="up" delay={0.1} className="mt-16 pt-12 border-t border-white/10">
        <h3 className="text-lg font-display font-medium text-white mb-6">Where this is going</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <p className="text-white/55 text-sm md:text-base leading-relaxed">
            In two to three years, I want to own features end to end on a product team, somewhere my
            decisions have real impact — building systems that don't just store information, but use it.
          </p>
          <ul className="space-y-2.5">
            {CAREER_GOALS.map((goal, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/55">
                <span className="text-fuchsia-400/40 mt-1.5 text-[5px] shrink-0">●</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
};

export default Reflections;
