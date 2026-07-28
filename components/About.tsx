
import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const STATS = [
  { label: 'Year', value: '3rd' },
  { label: 'Focus', value: 'Full-Stack' },
  { label: 'Shipped', value: '4+' },
];

const About: React.FC = () => {
  return (
    <div className="w-full">
      <SectionHeading index="01" title="About" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        <Reveal direction="left" className="lg:col-span-3 space-y-5 text-base sm:text-lg text-white/60 leading-relaxed max-w-[52ch]">
          <p>
            Third-year CS student at York University's Lassonde School of Engineering. On co-op at Mondelēz as an
            IL6S Process Improvement Intern, alongside a part-time QA/UX role and freelance dev work.
          </p>
          <p>
            Sole developer on Pegasus, a live e-commerce platform. Team lead on 6IXASSIST, winner at
            ElleHacks — an AI tool connecting Torontonians to community resources.
          </p>
        </Reveal>

        <Reveal direction="right" delay={0.1} className="lg:col-span-2 flex sm:flex-col gap-6 sm:gap-0 sm:divide-y sm:divide-white/10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex-1 sm:flex sm:items-baseline sm:justify-between sm:py-4">
              <div className="text-2xl sm:text-xl font-display font-medium text-white">{stat.value}</div>
              <div className="text-xs text-white/35 mt-1 sm:mt-0">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
};

export default About;
