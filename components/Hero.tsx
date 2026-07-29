
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const NAME_LINES = ['LORI', 'BATTOUK'];
const ROLES = ['Software Engineer', 'Full-Stack Developer', 'CS Student @ York'];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const letterVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

// --- Typewriter: cycles through ROLES, typing + deleting ---
const useTypewriter = (words: string[], typingSpeed = 60, deletingSpeed = 28, pause = 1500) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      const next = isDeleting ? currentWord.slice(0, text.length - 1) : currentWord.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
};

// A handful of very quiet drifting motes — restraint over spectacle
const PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: 14 + i * 13,
  size: 2 + (i % 2),
  duration: 10 + i * 2,
  delay: i * 0.9,
}));

interface HeroProps {
  onOpenResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const typedRole = useTypewriter(ROLES);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // As the hero scrolls away, let it settle back and fade — sections should
  // flow into one another instead of hard-cutting.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -60]);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* --- Two quiet, drifting gradient fields. Not a light show. --- */}
      <motion.div style={{ y: auroraY }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[520px] sm:h-[520px] rounded-full bg-fuchsia-500/[0.16] blur-[90px] sm:blur-[120px]"
          animate={shouldReduceMotion ? {} : { x: [0, 40, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[260px] h-[260px] sm:w-[440px] sm:h-[440px] rounded-full bg-purple-500/[0.14] blur-[80px] sm:blur-[110px]"
          animate={shouldReduceMotion ? {} : { x: [0, -50, 20, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {!shouldReduceMotion &&
          PARTICLES.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-fuchsia-200/20"
              style={{ left: `${p.left}%`, width: p.size, height: p.size, bottom: '12%' }}
              animate={{ y: [0, -220], opacity: [0, 0.6, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Typewriter role */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-xs font-medium text-purple-300/70 tracking-wide mb-7 h-4"
        >
          {typedRole}
          <motion.span
            className="inline-block w-px h-[11px] bg-purple-300/60 ml-0.5 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.p>

        {/* Name */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={container}
          className="font-display font-medium tracking-tight leading-[0.95] mb-8"
        >
          {NAME_LINES.map((line) => (
            <span key={line} className="block text-[clamp(3rem,11vw,7.5rem)] text-white overflow-hidden">
              {line.split('').map((char, i) => (
                <motion.span key={i} variants={letterVariant} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Thin gradient accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-10 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent mx-auto mb-12 origin-center"
        />

        {/* CTAs — projects primary, resume impossible to miss */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.9}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 font-display font-medium text-sm rounded-full inline-flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-white/90"
          >
            View projects
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.button>

          <motion.button
            onClick={onOpenResume}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 text-white/90 font-display font-medium text-sm rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition-colors text-center"
          >
            View resume
          </motion.button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="mt-24 mx-auto w-[18px] h-[30px] rounded-full border border-white/12 flex items-start justify-center p-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.span
            className="w-1 h-1.5 rounded-full bg-white/40"
            animate={shouldReduceMotion ? {} : { y: [0, 9, 0], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
