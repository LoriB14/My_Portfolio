
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate, useTransform, useReducedMotion, animate } from 'framer-motion';
import { LIGHTNING_EVENT } from './LightningEffect';

/**
 * A single, page-wide cursor-following glow. Mounted once in App so the
 * whole site shares one light source instead of every section rolling
 * its own hover effect. Desktop only (no cursor on touch). If the OS has
 * "reduce motion" on, it still shows a soft static glow — just without
 * the mouse-tracking movement. Briefly flares brighter whenever a
 * lightning strike fires elsewhere on the page.
 */
const CursorSpotlight: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hasMouse, setHasMouse] = useState(false);
  const x = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const y = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 3 : 0);
  const background = useMotionTemplate`radial-gradient(650px circle at ${x}px ${y}px, rgba(232,121,249,0.16), rgba(168,85,247,0.09) 35%, transparent 65%)`;

  const flare = useMotionValue(0);
  const flareAlpha1 = useTransform(flare, (v) => 0.16 + v * 0.55);
  const flareAlpha2 = useTransform(flare, (v) => 0.09 + v * 0.4);
  const flareBackground = useMotionTemplate`radial-gradient(850px circle at ${x}px ${y}px, rgba(255,255,255,${flareAlpha1}), rgba(232,121,249,${flareAlpha2}) 35%, transparent 68%)`;

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

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleStrike = () => {
      flare.stop();
      flare.set(1);
      animate(flare, 0, { duration: 0.65, ease: [0.16, 1, 0.3, 1] });
    };
    window.addEventListener(LIGHTNING_EVENT, handleStrike);
    return () => window.removeEventListener(LIGHTNING_EVENT, handleStrike);
  }, [shouldReduceMotion, flare]);

  return (
    <>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldReduceMotion || hasMouse ? 1 : 0.6 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[30] pointer-events-none mix-blend-screen hidden md:block"
        style={{ background }}
      />
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[30] pointer-events-none mix-blend-screen hidden md:block"
          style={{ background: flareBackground }}
        />
      )}
    </>
  );
};

export default CursorSpotlight;
