
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
    title: 'QA Testing & UX/UI Analyst Intern',
    company: 'Confidential',
    location: 'Remote',
    period: '2025 — Present',
    bullets: [
      'Designed and executed manual test cases across browsers and device sizes, identifying UI and functional defects.',
      'Ran UX/UI analysis sessions, flagging friction points and delivering structured feedback to product and dev teams.',
      'Documented bug reports with reproduction steps and severity ratings, tracking issues through resolution.',
      'Verified fixes against acceptance criteria, contributing to a measurable drop in regression defects.',
    ],
  },
  {
    id: 2,
    title: 'IL6S Process Improvement Intern',
    company: 'Mondelēz International',
    location: 'Toronto, ON',
    period: '2025',
    bullets: [
      'Supported Integrated Lean 6 Sigma initiatives to identify and remove operational inefficiencies.',
      'Built and maintained KPI dashboards surfacing production metrics for data-driven decisions.',
      'Migrated manual reporting into digital tools, cutting data-entry time and improving accuracy.',
      'Presented findings to supervisors, translating technical analysis for non-technical stakeholders.',
    ],
  },
  {
    id: 3,
    title: 'Lead Web Developer',
    company: 'Pegasus Liquidation',
    location: 'Aurora, Ontario',
    period: 'Dec 2025 — Present',
    bullets: [
      "Designed and built a full-stack e-commerce platform on Next.js — the company's first digital storefront.",
      'Integrated Stripe for payments and Supabase for auth, schema design, and file storage.',
      'Implemented SSR and ISR on product pages to keep load times fast as the catalog scaled.',
      'Owns domain, deployment, and every feature update as sole technical lead.',
    ],
  },
  {
    id: 4,
    title: 'Research Consultant',
    company: 'Qupay (Fintech Consulting)',
    location: 'Remote',
    period: 'Jan 2026 — Present',
    bullets: [
      'Interviewed small business owners to analyze payment workflows and surface friction points.',
      'Synthesized findings into product insights and prioritized recommendations for the founding team.',
    ],
  },
  {
    id: 5,
    title: 'Administrative Assistant (IT Support)',
    company: 'The Wellness Group Aurora',
    location: 'Aurora, Ontario',
    period: 'June 2022 — Present',
    bullets: [
      'Provided technical support in a healthcare clinic — software, printers, and network issues.',
      'Led the shift from paper records to a digital system, improving workflow and access.',
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
