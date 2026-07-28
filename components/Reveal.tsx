
import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}

/**
 * Shared scroll-reveal primitive used across every section so motion feels
 * like one considered system instead of bespoke animations per component.
 * Respects prefers-reduced-motion (falls back to a plain fade).
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration,
  className,
  amount = 0.25,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const offset = 32;
  const hiddenOffset =
    direction === 'left' ? { x: -offset } : direction === 'right' ? { x: offset } : direction === 'up' ? { y: offset } : {};

  const variants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, ...hiddenOffset },
        show: { opacity: 1, x: 0, y: 0 },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount }}
      variants={variants}
      transition={{
        duration: shouldReduceMotion ? 0.35 : duration ?? 0.75,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
