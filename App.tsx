
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GeminiAssistant from './components/GeminiAssistant';
import Contact from './components/Contact';
import Intro from './components/Intro';

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [gameActive, setGameActive] = useState(false); // Track if game is running to hide UI
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!accessGranted) return;

    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
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
  }, [accessGranted]);

  if (!isBooted) {
    return <Intro onComplete={() => setIsBooted(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white cyber-grid animate-in fade-in duration-1000">
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent pointer-events-none"></div>
      
      {/* Navbar is only visible after access is granted AND game is NOT active */}
      {accessGranted && !gameActive && (
        <div className="animate-in slide-in-from-top duration-1000">
          <Navbar activeSection={activeSection} />
        </div>
      )}
      
      <main className="relative z-10">
        <section id="home">
          <Hero 
            isLocked={!accessGranted} 
            onUnlock={() => setAccessGranted(true)} 
            onGameStatusChange={setGameActive}
          />
        </section>
        
        {/* Content sections are hidden/unmounted until access is granted */}
        {accessGranted && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
              <Projects />
            </section>

            <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
              <Skills />
            </section>

            <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
              <Contact />
            </section>
          </div>
        )}
      </main>

      {accessGranted && (
        <>
          <footer className="py-12 px-6 border-t border-white/10 bg-slate-950/80 backdrop-blur-md relative z-10 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-red-600 flex items-center justify-center">
                  <span className="font-bold text-red-600">LB</span>
                </div>
                <span className="font-display font-bold tracking-tighter text-xl text-white">LORI <span className="text-red-500">BATTOUK</span></span>
              </div>
              <p className="text-blue-200 text-[10px] font-bold tracking-widest uppercase">Senior Software Engineer | Built with React & Tailwind</p>
              <div className="flex gap-8">
                {['GitHub', 'LinkedIn', 'Resume'].map(link => (
                  <a key={link} href="#" className="text-white/60 hover:text-red-500 transition-colors uppercase text-[10px] font-black tracking-widest">{link}</a>
                ))}
              </div>
            </div>
          </footer>
          <GeminiAssistant />
        </>
      )}
    </div>
  );
};

export default App;
