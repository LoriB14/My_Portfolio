
import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (Java)',
  'Web Development (HTML / CSS / JS / React)',
  'Discrete Mathematics',
  'Computer Organization',
  'Software Design & Architecture',
  'Introduction to Economics',
];

const CERT_SKILLS = [
  'SQL & Relational Databases',
  'Data Cleaning & Transformation',
  'Data Visualization & Dashboards',
  'Introductory Python for Analysis',
];

const Education: React.FC = () => {
  return (
    <div className="w-full">
      <SectionHeading index="06" title="Education" />

      <div className="divide-y divide-white/10 border-t border-b border-white/10">
        <Reveal direction="left" amount={0.2} className="py-9 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
            <h3 className="text-lg sm:text-xl font-display font-medium text-white">
              York University — Lassonde School of Engineering
            </h3>
            <span className="text-white/30 text-xs shrink-0">2024 — Present</span>
          </div>

          <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            BSc, Specialized Honours in Computer Science. I learn by doing — coursework covers algorithms,
            systems, and web development, and I apply all of it to real projects outside class.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/35">
            {COURSEWORK.map((course) => (
              <span key={course}>{course}</span>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" amount={0.2} className="py-9 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
            <h3 className="text-lg sm:text-xl font-display font-medium text-white">
              Google Data Analytics Professional Certificate
            </h3>
            <span className="text-white/30 text-xs shrink-0">2025 — Present</span>
          </div>

          <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            Strengthening SQL, data cleaning, and visualization skills — complements the data work I do at Mondelēz.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/35">
            {CERT_SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Education;
