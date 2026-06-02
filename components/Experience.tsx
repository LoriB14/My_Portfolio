
import React, { useState } from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  badgeColor: 'fuchsia' | 'purple' | 'slate';
  bullets: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    title: "QA Testing & UX/UI Analyst Intern",
    company: "Confidential",
    location: "Remote",
    period: "2025 — Present",
    badge: "Internship",
    badgeColor: "fuchsia",
    bullets: [
      "Designed and executed manual test cases for web applications, identifying UI inconsistencies and functional defects across multiple browsers and device sizes.",
      "Conducted UX/UI analysis sessions to evaluate user flows, flagging friction points and delivering structured feedback to the product and development teams.",
      "Documented bug reports with detailed reproduction steps, severity ratings, and annotated screenshots; tracked issues through full resolution cycles.",
      "Collaborated with developers to verify bug fixes and validate that resolved issues met acceptance criteria before release, contributing to a measurable reduction in regression defects.",
    ],
  },
  {
    id: 2,
    title: "IL6S Process Improvement Intern",
    company: "Mondelēz International",
    location: "Toronto, ON",
    period: "2025",
    badge: "Internship",
    badgeColor: "fuchsia",
    bullets: [
      "Contributed to IL6S (Integrated Lean 6 Sigma) initiatives, supporting identification and elimination of operational inefficiencies across production workflows.",
      "Built and maintained KPI dashboards to surface production metrics, enabling data-driven decision-making for team leads and operations managers.",
      "Assisted in digitalization efforts by migrating manual reporting processes to structured digital tools, reducing data entry time and improving data accuracy.",
      "Presented process improvement findings and recommendations to supervisors, developing the ability to communicate technical analysis to non-technical stakeholders.",
    ],
  },
  {
    id: 3,
    title: "Lead Web Developer",
    company: "Pegasus Liquidation",
    location: "Aurora, Ontario",
    period: "Dec 2025 — Present",
    badge: "Developer Role",
    badgeColor: "purple",
    bullets: [
      "Designed and built a full-stack e-commerce platform using Next.js, establishing the company's first digital storefront from scratch.",
      "Integrated Stripe API for secure payment processing and Supabase for authentication, database schema, and file storage.",
      "Implemented SSR and incremental static regeneration for product pages, maintaining fast load times as the product catalog scaled.",
      "Managed domain configuration, Vercel deployment, and ongoing feature updates as the sole technical lead for all digital operations.",
    ],
  },
  {
    id: 4,
    title: "Research Consultant",
    company: "Qupay (Fintech Consulting)",
    location: "Remote",
    period: "Jan 2026 — Present",
    badge: "Research",
    badgeColor: "purple",
    bullets: [
      "Conducted structured interviews with small business owners to analyze payment workflows and identify friction points in existing financial tools.",
      "Synthesized qualitative research findings into actionable product insights and shared prioritized recommendations with the founding team.",
    ],
  },
  {
    id: 5,
    title: "Administrative Assistant (IT Support)",
    company: "The Wellness Group Aurora",
    location: "Aurora, Ontario",
    period: "June 2022 — Present",
    badge: "Support Role",
    badgeColor: "slate",
    bullets: [
      "Provided administrative and technical support in a healthcare clinic, troubleshooting software, printer, and network issues.",
      "Led transition from paper-based records to a digital system, improving organizational workflow and access to patient information.",
    ],
  },
];

const badgeStyles: Record<string, string> = {
  fuchsia: "bg-fuchsia-600/20 border border-fuchsia-600/30 text-fuchsia-400",
  purple: "bg-purple-600/20 border border-purple-600/30 text-purple-400",
  slate: "bg-white/10 border border-white/20 text-white/60",
};

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (id: number) => setExpanded(expanded === id ? null : id);

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-6">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 sm:mb-20 border-b border-white/20 pb-4 sm:pb-8">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-2 sm:mb-4 tracking-tighter uppercase">
            Experience
          </h2>
          <p className="text-purple-300 text-sm md:text-lg font-bold tracking-[0.2em] uppercase">
            Work &amp; Internships
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {EXPERIENCES.map((exp) => {
          const isOpen = expanded === exp.id;
          return (
            <div
              key={exp.id}
              className="group relative bg-slate-900/60 border border-white/20 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-fuchsia-600/40 hover:bg-slate-900/80"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white/20 group-hover:border-fuchsia-600 transition-colors rounded-tl-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/20 group-hover:border-fuchsia-600 transition-colors rounded-br-2xl pointer-events-none"></div>

              <button
                className="w-full text-left p-6 md:p-10"
                onClick={() => toggle(exp.id)}
                aria-expanded={isOpen}
              >
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                  <div>
                    <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded mb-3 ${badgeStyles[exp.badgeColor]}`}>
                      {exp.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight group-hover:text-fuchsia-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-slate-400 font-medium mt-1 text-sm md:text-base">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-widest whitespace-nowrap">
                      {exp.period}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-90 border-fuchsia-600 text-fuchsia-500' : ''}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expandable bullets */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-10 pb-8 md:pb-10 pt-0">
                  <div className="h-[1px] bg-white/10 mb-6"></div>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-300 text-base leading-relaxed">
                        <span className="text-fuchsia-600 mt-2 text-[8px] flex-shrink-0">●</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
