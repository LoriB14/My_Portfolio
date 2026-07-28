
import React from 'react';
import Reveal from './Reveal';
import SectionGraphic from './SectionGraphic';

interface SectionHeadingProps {
  index: string;
  title: string;
  note?: string;
}

/**
 * One consistent heading pattern reused by every section: a small numbered
 * kicker, the title, a hairline that trails off, and a quiet abstract
 * line-art accent unique to that section.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({ index, title, note }) => {
  const variant = (parseInt(index, 10) || 0) % 3;

  return (
    <Reveal direction="left" className="flex items-center gap-4 sm:gap-5 mb-12 sm:mb-16">
      <span className="font-mono text-xs sm:text-sm text-fuchsia-400/50 tabular-nums">{index}</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium tracking-tight text-white">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/10" />
      <SectionGraphic variant={variant as 0 | 1 | 2} className="hidden sm:block w-14 h-9 shrink-0" />
      {note && <span className="hidden lg:block text-xs text-white/30">{note}</span>}
    </Reveal>
  );
};

export default SectionHeading;
