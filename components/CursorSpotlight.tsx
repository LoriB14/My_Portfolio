
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from 'framer-motion';

/**
 * A single, page-wide cursor-following glow. Mounted once in App so the
 * whole site shares one light source instead of every section rolling
 * its own hover effect. Desktop only (no cursor on touch). If the OS has
 * "reduce motion" on, it still shows a soft static glow — just without
 * the mouse-tracking movement.
 */
const CursorSpotlight: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hasMouse, setHasMouse] = useState(false);
  const x = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const y = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 3 : 0);
  const background = useMotionTemplate`radial-gradient(650px circle at ${x}px ${y}px, rgba(232,121,249,0.16), rgba(168,85,247,0.09) 35%, transparent 65%)`;

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMove = (e: MouseEvent) => {
      setHasMouse(true);
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [shouldReduceMotion, x, y]);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldReduceMotion || hasMouse ? 1 : 0.6 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[30] pointer-events-none mix-blend-screen hidden md:block"
      style={{ background }}
    />
  );
};

export default CursorSpotlight;
