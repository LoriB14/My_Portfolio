
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Site-wide, very faint aurora gradients drifting slowly behind everything
 * (Hero keeps its own, stronger local pair near the name — this is the
 * ambient wash for the rest of the page). The whole group also parallaxes
 * a few pixels toward the cursor so the world feels like it's reacting to
 * you, without ever being a distraction.
 */
const AuroraLayer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 35, damping: 20 });
  const sy = useSpring(my, { stiffness: 35, damping: 20 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2 * 22);
      my.set((e.clientY / window.innerHeight - 0.5) * 2 * 16);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [shouldReduceMotion, mx, my]);

  return (
    <motion.div
      aria-hidden
      style={{ x: shouldReduceMotion ? 0 : sx, y: shouldReduceMotion ? 0 : sy }}
      className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
    >
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-fuchsia-500/[0.045] blur-[140px]"
        animate={shouldReduceMotion ? {} : { x: [0, 30, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-purple-500/[0.04] blur-[130px]"
        animate={shouldReduceMotion ? {} : { x: [0, -25, 15, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-indigo-500/[0.03] blur-[120px]"
        animate={shouldReduceMotion ? {} : { x: [0, 18, -18, 0], y: [0, -12, 8, 0] }}
        transition={{ duration: 42, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </motion.div>
  );
};

export default AuroraLayer;
