
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    title: 'Data & Digitalization Co-op (IL6S)',
    company: 'Mondelēz International',
    location: 'Toronto, ON',
    period: 'May 2026 — Present',
    bullets: [
      'Working with the Integrated Lean Six Sigma (IL6S) team on digitalization and process improvement initiatives within a manufacturing environment.',
      'Supporting the development of new systems/software and KPI digitalization to improve visibility into operations.',
      'Contributing to data analysis, reporting, and dashboard creation to support operational decision-making.',
    ],
  },
  {
    id: 2,
    title: 'Lead Web Developer',
    company: 'Self-employed · Freelance',
    location: 'Toronto, ON · Remote',
    period: 'Dec 2025 — Present',
    bullets: [
      "Designed and developed a full-stack e-commerce platform using Next.js and Supabase, launching the company's first digital storefront.",
      'Integrated Stripe API for secure payment processing, enhancing transaction workflows.',
      'Structured database schema and implemented authentication as the sole technical lead, ensuring robust security and user experience.',
    ],
  },
  {
    id: 3,
    title: 'Office Administrator',
    company: 'The Wellness Group Aurora',
    location: 'Aurora, Ontario',
    period: 'June 2022 — Present',
    bullets: [
      'Provided comprehensive administrative and technical support.',
      'Troubleshot software, printer, and network issues to ensure seamless operations.',
      'Led the transition from paper-based records to digital systems, coordinating with staff for effective implementation.',
    ],
  },
  {
    id: 4,
    title: 'QA Testing & UX/UI Analyst Intern',
    company: 'Yadag Technologies Inc.',
    location: 'Remote',
    period: 'May 2026 — Jul 2026',
    bullets: [
      'Designed and executed manual test cases across browsers and device sizes, identifying UI and functional defects.',
      'Ran UX/UI analysis sessions, flagging friction points and delivering structured feedback to product and dev teams.',
      'Documented bug reports with reproduction steps and severity ratings, tracking issues through resolution.',
      'Verified fixes against acceptance criteria, contributing to a measurable drop in regression defects.',
    ],
  },
  {
    id: 5,
    title: 'Product Research Consultant (Fintech)',
    company: 'Qupay Corporation',
    location: 'Remote',
    period: 'Jan 2026 — Mar 2026',
    bullets: [
      'Conducted structured interviews with small business owners across Canada to analyze payment workflows.',
      'Identified operational friction points to enhance user experience and streamline processes.',
      'Organized insights from interviews and shared key findings with founders for product improvement.',
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      <SectionHeading index="02" title="Experience" />

      <div className="divide-y divide-white/10 border-t border-b border-white/10">
        {EXPERIENCES.map((exp, index) => {
          const isOpen = openId === exp.id;
          return (
            <Reveal key={exp.id} direction={index % 2 === 0 ? 'left' : 'right'} amount={0.2}>
              <div>
                <button
                  onClick={() => setOpenId(isOpen ? null : exp.id)}
                  className="w-full text-left py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-xs text-white/30 shrink-0 sm:w-32">{exp.period}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-display font-medium text-white group-hover:text-fuchsia-200 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-white/40 text-sm mt-0.5">{exp.company} · {exp.location}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-white/40"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.2 : 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-7 sm:pl-[8.5rem] space-y-2.5 max-w-2xl">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                            <span className="text-fuchsia-400/40 mt-1.5 text-[5px] shrink-0">●</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
