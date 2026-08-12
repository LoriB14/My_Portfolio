
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  isHidden?: boolean;
  onOpenResume?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isHidden = false, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'reflections', label: 'Reflections' },
    { id: 'goals', label: 'Goals' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
  ];

  // Mobile menu includes contact
  const mobileNavItems = [
    ...navItems,
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const resetToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.location.hash = 'home';
    }, 500);
    setMobileMenuOpen(false);
  };

  return (
    <>
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isHidden ? -128 : 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center gap-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
    >

      {/* Logo — left, fixed width */}
      <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={resetToHome}>
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400" />
        <h1 className="font-mono text-[13px] tracking-wide text-white/70 group-hover:text-white transition-colors leading-none">
          CS @ YorkU
        </h1>
      </div>

      {/* Nav items — centered, flex-1 */}
      <div className="hidden xl:flex flex-1 justify-center items-center gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`font-display text-[13px] font-medium transition-colors relative py-2 whitespace-nowrap ${
              activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-fuchsia-400 to-purple-400"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Right side — resume + contact + hamburger */}
      <div className="flex-shrink-0 flex items-center gap-3 ml-auto">
        <button
          onClick={onOpenResume}
          className="hidden xl:block text-white/60 hover:text-white px-3 py-2 font-display font-medium text-[13px] transition-colors whitespace-nowrap"
        >
          Resume
        </button>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollTo('contact')}
          className="group hidden xl:inline-flex items-center gap-1.5 bg-white text-slate-950 px-5 py-2 rounded-full font-display font-medium text-[13px] transition-colors duration-300 hover:bg-white/90 whitespace-nowrap"
        >
          Contact
          <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </motion.button>

        {/* Hamburger — mobile / tablet */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <div className="xl:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)}>
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-display text-xl font-medium transition-colors ${
                activeSection === item.id ? 'text-white' : 'text-white/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume?.();
            }}
            className="font-display text-xl font-medium text-white/50"
          >
            Resume
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default Navbar;
