
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

      <Reveal
        direction="up"
        delay={0.15}
        className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start"
      >
        <div className="lg:col-span-3 space-y-5 text-base sm:text-lg text-white/60 leading-relaxed max-w-[56ch]">
          <h3 className="text-sm font-display font-medium text-white/80 tracking-wide uppercase mb-2">Why me</h3>
          <p>
            I was born in Syria and moved to Canada when I was nine. Watching my parents leave behind everything
            they'd built to give our family a better future taught me resilience, gratitude, and how to adapt
            fast — lessons that still shape how I approach school, work, and every goal I set.
          </p>
          <p>
            One of the biggest influences on how I lead was my grade 7/8 teacher, Mr. Caruso. He noticed when
            people were struggling and made space for questions instead of letting anyone fall behind. I try to
            bring that same attention into every team I'm part of.
          </p>
          <p>
            Two artifacts say the most about who I am: a photo of my family, because their sacrifice shaped
            nearly everything I value, and Pegasus, because it's proof I can take an idea all the way to
            something real, on my own.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
            {/* TODO: replace VIDEO_ID_HERE with your own "About Me" video's YouTube ID once you've recorded and uploaded it (unlisted is fine). */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              title="About Me"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-white/30 mt-3">Why Me — a short introduction.</p>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
