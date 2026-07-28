
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionGraphicProps {
  variant?: 0 | 1 | 2;
  className?: string;
}

/**
 * Small original abstract line-art accents — a constellation of dots and
 * connecting lines in the purple/pink palette. Purely decorative, placed
 * near section headings to give each section a quiet visual signature
 * instead of plain text-only headers.
 */
const VARIANTS = [
  // scattered constellation
  {
    points: [
      [10, 60], [40, 20], [70, 45], [95, 15], [55, 85], [20, 95],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [1, 4], [4, 5]],
  },
  // arc
  {
    points: [
      [8, 90], [30, 55], [58, 30], [88, 12], [65, 70], [92, 88],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5]],
  },
  // grid-ish scatter
  {
    points: [
      [15, 20], [50, 10], [85, 25], [20, 70], [55, 55], [90, 75],
    ],
    lines: [[0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [1, 4]],
  },
];

const SectionGraphic: React.FC<SectionGraphicProps> = ({ variant = 0, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const { points, lines } = VARIANTS[variant % VARIANTS.length];

  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden
    >
      {lines.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke="url(#sg-gradient)"
          strokeWidth={0.4}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.35 }}
          viewport={{ once: false }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 1.1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      {points.map(([px, py], i) => (
        <motion.circle
          key={i}
          cx={px}
          cy={py}
          r={1.4}
          fill={i % 2 === 0 ? '#e879f9' : '#c084fc'}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <defs>
        <linearGradient id="sg-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SectionGraphic;
