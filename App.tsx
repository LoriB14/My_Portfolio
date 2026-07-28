
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Reflections from './components/Reflections';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import CursorSpotlight from './components/CursorSpotlight';
import LightningEffect from './components/LightningEffect';
import AuroraLayer from './components/AuroraLayer';
import CyberBackground from './components/CyberBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'reflections', 'education', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isResumeOpen ? 'hidden' : '';
  }, [isResumeOpen]);

  const openResume = () => setIsResumeOpen(true);

  return (
    <div className="min-h-screen overflow-x-hidden px-4 sm:px-6 md:px-8 bg-slate-950 text-white">
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent pointer-events-none" />

      {/* Ambient cyberspace atmosphere — same layout as before, just alive behind it */}
      <AuroraLayer />
      <CyberBackground />

      {/* One shared light source for the whole page */}
      <CursorSpotlight />

      {/* Occasional cinematic lightning — see LightningEffect for the full sequence */}
      <LightningEffect />

      {/* Scroll progress — a hairline, not a bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-fuchsia-500/70 to-purple-500/70 origin-left z-[100]"
        style={{ scaleX: progress }}
      />

      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <Navbar activeSection={activeSection} isHidden={isResumeOpen} onOpenResume={openResume} />

      <main className="relative z-10">
        <section id="home">
          <Hero onOpenResume={openResume} />
        </section>

        <section id="about" className="py-28 sm:py-36 px-6 max-w-6xl mx-auto">
          <About />
        </section>

        <section id="experience" className="py-28 sm:py-36 px-6 max-w-6xl mx-auto">
          <Experience />
        </section>

        <section id="projects" className="py-28 sm:py-36 px-6 max-w-6xl mx-auto">
          <Projects />
        </section>

        <section id="reflections" className="py-28 sm:py-36 px-6 max-w-6xl mx-auto">
          <Reflections />
        </section>

        <section id="education" className="py-28 sm:py-36 px-6 max-w-6xl mx-auto">
          <Education />
        </section>

        <section id="skills" className="py-28 sm:py-36 px-6 max-w-6xl mx-auto">
          <Skills />
        </section>

        <section id="contact" className="py-28 sm:py-36 px-6 max-w-6xl mx-auto">
          <Contact />
        </section>
      </main>

      <footer className="py-10 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display font-medium tracking-tight text-base text-white/80">Lori Battouk</span>
          <p className="text-white/30 text-xs font-medium">Software Engineer</p>
          <div className="flex gap-8 items-center">
            <a href="https://github.com/LoriB14" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-fuchsia-300 transition-colors text-xs font-medium">Github</a>
            <a href="https://www.linkedin.com/in/loribattouk/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-fuchsia-300 transition-colors text-xs font-medium">LinkedIn</a>
            <button onClick={openResume} className="text-white/50 hover:text-fuchsia-300 transition-colors text-xs font-medium">
              Resume
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
