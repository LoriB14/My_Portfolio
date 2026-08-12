
import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { SKILL_GROUPS } from '../constants';

const TechIcon: React.FC<{ slug: string; name: string }> = ({ slug, name }) => {
  const [failed, setFailed] = React.useState(false);
  if (failed) return null;
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt=""
      aria-hidden
      className="w-3.5 h-3.5 opacity-40 group-hover/skill:opacity-70 transition-opacity"
      onError={() => setFailed(true)}
    />
  );
};

const Skills: React.FC = () => {
  return (
    <div className="w-full">
      <SectionHeading index="07" title="Skills" note="Systems · architecture · design" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal key={group.category} direction={index % 2 === 0 ? 'left' : 'right'} delay={(index % 3) * 0.05} amount={0.3}>
            <h3 className="text-sm font-display font-medium text-white mb-1">{group.category}</h3>
            <p className="text-xs text-white/30 mb-4">{group.description}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className="group/skill flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-xs text-white/55 hover:border-fuchsia-400/20 hover:text-white/80 transition-colors"
                >
                  {skill.icon && <TechIcon slug={skill.icon} name={skill.name} />}
                  {skill.name}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Skills;
