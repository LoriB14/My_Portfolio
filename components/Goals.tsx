
import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface SmartGoal {
  competency: string;
  goal: string;
  why: string;
}

const SMART_GOALS: SmartGoal[] = [
  {
    competency: 'Critical Thinking & Problem Solving',
    goal: 'Map out requirements for every new co-op task before writing code, and track how often my initial approach needed to change.',
    why: "I learned the hard way that the technical part isn't usually the hard part — understanding the problem first is.",
  },
  {
    competency: 'Collaboration & Leadership',
    goal: 'Prepare written questions before every cross-functional meeting, and organize meetings that bring different departments together with a follow-up summary within 24 hours.',
    why: "When I skipped this, I built things that had to be redone because requirements weren't clear enough going in.",
  },
  {
    competency: 'Communication Skills',
    goal: "Ask clarifying questions whenever I'm uncertain, follow up in writing, and present my work to my team at least twice during my co-op.",
    why: 'Staying quiet when I was confused caused more problems than just asking would have — I\'m working on asking clearly and confidently.',
  },
];

const SWOT: { label: string; items: string[] }[] = [
  {
    label: 'Strengths',
    items: [
      'Hands-on builder — full-stack platforms, dashboards, real shipped products',
      'Broad technical range: Next.js, Supabase, Stripe, data analysis, QA/UX testing',
      'Proven independence — sole technical lead on Pegasus',
      'Reflective, organized problem-solver',
    ],
  },
  {
    label: 'Weaknesses',
    items: [
      'Prefer working independently — leading others can feel less natural',
      'Limited experience managing or supervising a team so far',
      'Reflective style can slow decisions under time pressure',
    ],
  },
  {
    label: 'Opportunities',
    items: [
      'Co-op at Mondelēz — exposure to enterprise data systems and KPI digitalization',
      'Growing demand for CS grads with real full-stack + data experience',
      "A live freelance platform (Pegasus) that differentiates me from most CS students",
    ],
  },
  {
    label: 'Threats',
    items: [
      'Competitive CS job market with many similarly-skilled grads',
      'Balancing flexible hours against early-career salary expectations',
      'Rapid AI/automation shifts changing which skills are valued',
    ],
  },
];

const Goals: React.FC = () => {
  return (
    <div className="w-full">
      <SectionHeading index="05" title="Goals & Work Portfolio" />

      <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
        Personal development goals I set for this co-op term, mapped to York's undergraduate competencies, plus a
        candid SWOT read on where I'm strong and where I still have work to do.
      </p>

      <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-16">
        {SMART_GOALS.map((g, i) => (
          <Reveal key={g.competency} direction={i % 2 === 0 ? 'left' : 'right'} amount={0.2} className="py-8 sm:py-9">
            <h3 className="text-base sm:text-lg font-display font-medium text-white mb-2">{g.competency}</h3>
            <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-2xl mb-2">{g.goal}</p>
            <p className="text-white/35 text-xs sm:text-sm leading-relaxed max-w-2xl">{g.why}</p>
          </Reveal>
        ))}
      </div>

      <Reveal direction="up" amount={0.2}>
        <h3 className="text-lg font-display font-medium text-white mb-6">SWOT Analysis</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SWOT.map(({ label, items }) => (
            <div key={label}>
              <h4 className="text-xs font-medium text-fuchsia-300/50 mb-3 uppercase tracking-wide">{label}</h4>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                    <span className="text-fuchsia-400/40 mt-1.5 text-[5px] shrink-0">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Goals;
