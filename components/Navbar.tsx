
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  isHidden?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isHidden = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'reflections', label: 'REFLECTIONS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'skills', label: 'SKILLS' },
  ];
  
  // Mobile menu includes contact
  const mobileNavItems = [
    ...navItems,
    { id: 'contact', label: 'CONTACT' },
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
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-4 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 transition-transform duration-500 ease-in-out ${isHidden ? '-translate-y-32' : 'translate-y-0'}`}>

      {/* Logo — left, fixed width */}
      <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={resetToHome}>
        <div className="w-10 h-10 border-2 border-fuchsia-600 flex items-center justify-center transition-all group-hover:bg-fuchsia-600 group-hover:rotate-45 duration-500 group-hover:shadow-[0_0_15px_#c026d3]">
          <span className="font-display font-black text-white text-base group-hover:-rotate-45 transition-transform">LB</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="font-display font-bold tracking-tighter text-lg leading-none uppercase text-white">Lori <span className="text-fuchsia-500">Battouk</span></h1>
          <p className="text-[8px] tracking-[0.25em] font-bold text-purple-300 uppercase mt-0.5">CS @ York</p>
        </div>
      </div>

      {/* Nav items — centered, flex-1 */}
      <div className="hidden xl:flex flex-1 justify-center items-center gap-5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`font-display text-[11px] tracking-[0.15em] font-black uppercase transition-all hover:text-fuchsia-400 relative py-2 whitespace-nowrap ${
              activeSection === item.id ? 'text-fuchsia-500' : 'text-white/80'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-fuchsia-600"></span>
            )}
          </button>
        ))}
      </div>

      {/* Right side — contact + hamburger */}
      <div className="flex-shrink-0 flex items-center gap-3 ml-auto">
        <button
          onClick={() => scrollTo('contact')}
          className="hidden xl:block bg-purple-600 text-white px-5 py-2.5 font-display font-black text-[11px] tracking-[0.15em] uppercase hover:bg-purple-700 transition-all border-2 border-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.4)] whitespace-nowrap"
        >
          CONTACT
        </button>

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
    </nav>
    
    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <div className="xl:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)}>
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-display text-xl tracking-[0.3em] font-black transition-all hover:text-fuchsia-400 ${
                activeSection === item.id ? 'text-fuchsia-500' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )}
    </>
  );
};

export default Navbar;
