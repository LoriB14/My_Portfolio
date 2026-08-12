
import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import whyMeVideo from '../Logos/WhyMeVideo.mp4';

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
          <p className="text-white/80 font-medium">Hey, I'm Lori!</p>
          <p>
            I'm a Computer Science student who's naturally curious, creative, and always looking for something
            new to learn. I've always enjoyed figuring out how things work, solving problems, and turning ideas
            into something real.
          </p>
          <p>
            I'm someone who enjoys being involved in different things — from building projects and experimenting
            with technology to working with people, leading teams, and learning from new experiences. I like
            challenges that push me outside my comfort zone and give me the opportunity to grow.
          </p>
          <p>
            Outside of school and work, I enjoy spending time with friends and family, being involved in my
            community, and taking on new projects just because I'm curious about them.
          </p>
          <p>
            I'm still figuring out exactly where my career will take me, but I know I want to keep learning,
            building, and making an impact along the way.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
            <video className="w-full h-full object-cover" controls preload="metadata" playsInline>
              <source src={whyMeVideo} type="video/mp4" />
              Your browser doesn't support embedded video.
            </video>
          </div>
          <p className="text-xs text-white/30 mt-3">Why Me — a short introduction.</p>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
