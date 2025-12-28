
import React, { useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState(SKILLS[0]);
  const [isScanning, setIsScanning] = useState(false);

  // Skill-specific breakdown
  const techDetails: Record<string, string[]> = {
    "PYTHON / JAVA / C": ["Flask", "SQLite", "NumPy", "C (Low-Level)", "Java OOP"],
    "JAVASCRIPT / TYPESCRIPT": ["ES6+", "Node.js", "WebAssembly", "Bun", "Deno"],
    "SQL / POSTGRESQL": ["Drizzle ORM", "Prisma", "Relational Mapping", "Indexing"],
    "REACT / NEXT.JS": ["Tailwind CSS", "Redux/Zustand", "NextAuth", "Server Components"],
    "LINUX / GCP / JENKINS": ["Docker", "Google Cloud Platform", "CI/CD Automation", "GitOps"],
    "TAILWIND / HTML / CSS": ["PostCSS", "Semantic HTML", "SASS", "Animation Keys"]
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-8 mb-24">
        <h2 className="text-6xl font-display font-black tracking-tighter uppercase text-white">Technical <span className="text-red-600 text-glow-red">Arsenal</span></h2>
        <div className="flex-grow h-[2px] bg-gradient-to-r from-red-600 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 bg-slate-900/50 border border-white/5 p-16 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
        <div className="absolute inset-0 pointer-events-none opacity-20 crt-scan"></div>

        {/* Tactical Character Card / Viewport */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-16 border-r border-white/5 pr-0 lg:pr-16">
          <div 
            onClick={() => setIsScanning(!isScanning)}
            className="relative w-full aspect-[4/5] bg-slate-950 border-4 border-white/10 flex items-center justify-center group overflow-hidden cursor-pointer"
          >
            {/* Background Symbols */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-[120%] h-[120%] border-[40px] border-red-600 rotate-12 animate-[pulse_4s_infinite]"></div>
              <div className="absolute w-[80%] h-[80%] border-[2px] border-white -rotate-12"></div>
            </div>

            {!isScanning ? (
              <div className="relative z-10 text-center animate-in zoom-in duration-500">
                <div className="text-white font-display font-black text-9xl tracking-tighter uppercase block mb-10 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                  {activeSkill.icon}
                </div>
                <div className="inline-block px-10 py-4 bg-red-600 text-white font-display font-black text-[12px] tracking-[0.6em] uppercase shadow-[0_0_50px_rgba(217,4,41,0.5)] transform hover:scale-105 transition-all">
                  INITIATE SCAN
                </div>
              </div>
            ) : (
              <div className="relative z-10 w-full p-14 text-left animate-in fade-in slide-in-from-bottom-12 duration-700">
                <div className="mb-12 flex items-center gap-6">
                  <div className="w-4 h-4 bg-red-600 animate-ping"></div>
                  <h4 className="text-[14px] font-black text-red-600 uppercase tracking-[0.8em] underline underline-offset-[12px] decoration-4">ANALYSIS_ACTIVE</h4>
                </div>
                
                <div className="space-y-10">
                  {techDetails[activeSkill.name]?.map((tech, i) => (
                    <div key={tech} className="flex items-center justify-between group border-b border-white/10 pb-4">
                      <span className="text-white font-display font-black text-2xl uppercase tracking-tight group-hover:text-red-500 transition-colors">{tech}</span>
                      <span className="text-[11px] text-white/50 font-black tracking-widest uppercase">ID_MOD_{i}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsScanning(false); }}
                  className="mt-20 text-[11px] font-black text-white/50 hover:text-white uppercase tracking-[0.6em] transition-colors border-b border-white/20 pb-2"
                >
                  [ RESET VIEWPORT ]
                </button>
              </div>
            )}

            {/* Tactical Decals */}
            <div className="absolute top-8 left-8 text-[10px] font-black text-white/40 uppercase tracking-[0.6em]">OPERATIVE_LB_V9</div>
            <div className="absolute bottom-8 right-8 text-[10px] font-black text-red-600 uppercase tracking-[0.6em]">SYST_NOMINAL</div>
            <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-red-600"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-white/20"></div>
          </div>

          <div className="text-center w-full space-y-6">
            <h3 className="text-5xl font-display font-black text-white uppercase tracking-tighter">{activeSkill.name}</h3>
            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className={`h-3 w-12 transition-all duration-700 ${i <= Math.ceil(activeSkill.level/12.5) ? 'bg-red-600 shadow-[0_0_15px_#D90429]' : 'bg-slate-800'}`}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Loadout Selection List */}
        <div className="lg:col-span-7 space-y-16 pl-0 lg:pl-16 flex flex-col justify-center">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              onMouseEnter={() => {
                setActiveSkill(skill);
                setIsScanning(false);
              }}
              className={`relative group cursor-pointer transition-all border-b border-white/5 pb-12 ${activeSkill.name === skill.name ? 'opacity-100' : 'opacity-20 hover:opacity-40'}`}
            >
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-4">
                  <span className="font-display font-black text-3xl text-white uppercase tracking-[0.2em] group-hover:text-red-600 transition-colors">{skill.name}</span>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`w-4 h-4 rotate-45 ${i <= Math.ceil(skill.level/25) ? 'bg-red-600 shadow-[0_0_10px_#D90429]' : 'bg-slate-800'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-display font-black text-6xl text-white/90 tracking-tighter">{skill.level}</span>
                  <span className="block text-[10px] font-black text-white/50 tracking-[0.6em] uppercase mt-2">Power Integrity</span>
                </div>
              </div>
              
              {activeSkill.name === skill.name && (
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rotate-45 animate-pulse shadow-[0_0_20px_#D90429]"></div>
              )}
            </div>
          ))}

          <div className="pt-24 grid grid-cols-2 gap-14">
            <div className="bg-slate-950 p-12 border border-white/5 hover:border-red-600 transition-all cursor-crosshair">
              <div className="text-[12px] text-white/60 font-black uppercase tracking-[0.6em] mb-6">Core Specialization</div>
              <p className="text-white font-display font-black uppercase text-lg leading-tight tracking-widest">Scalable Full-Stack Neural Systems</p>
            </div>
            <div className="bg-slate-950 p-12 border border-white/5 hover:border-red-600 transition-all cursor-crosshair">
              <div className="text-[12px] text-white/60 font-black uppercase tracking-[0.6em] mb-6">Strategic Ops</div>
              <p className="text-white font-display font-black uppercase text-lg leading-tight tracking-widest">High-Performance Interaction Eng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
