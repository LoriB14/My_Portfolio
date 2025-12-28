
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative">
      <div className="flex items-center gap-8 mb-24">
        <h2 className="text-6xl font-display font-black tracking-tighter uppercase text-white">Project <span className="text-red-600 text-glow-red">Archives</span></h2>
        <div className="flex-grow h-[2px] bg-gradient-to-r from-red-600/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="group relative bg-slate-900 border border-white/10 transition-all duration-700 hover:border-red-600 overflow-hidden cursor-pointer h-[500px]"
          >
            <div className="absolute top-0 left-0 bg-red-600 text-white font-display font-black text-[12px] px-8 py-3 z-20 shadow-xl">
              FILE_REF_{project.id}
            </div>

            <div className="h-full relative overflow-hidden bg-slate-950">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-10 right-10">
                <h3 className="text-5xl font-display font-black text-white mb-6 uppercase tracking-tighter leading-none group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-6 items-center">
                  <span className="text-[11px] font-black tracking-[0.4em] text-red-600 uppercase">{project.category}</span>
                  <div className="flex-grow h-[3px] bg-white/10 group-hover:bg-red-600/30 transition-colors"></div>
                </div>
              </div>

              {/* High-speed scan line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/20 to-transparent h-1 w-full opacity-0 group-hover:opacity-100 animate-[scan_1.5s_infinite] pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Cinematic Modal Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl animate-in fade-in duration-500"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-7xl bg-slate-900 border-2 border-red-600/30 max-h-[90vh] flex flex-col lg:flex-row overflow-hidden animate-in zoom-in-95 duration-500 shadow-[0_0_100px_rgba(217,4,41,0.2)]"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-10 right-10 z-[110] text-white hover:text-red-600 transition-all text-5xl font-display font-light"
            >
              ×
            </button>
            
            <div className="w-full lg:w-1/2 relative h-[30vh] lg:h-auto group bg-black">
              <img src={selectedProject.image} className="w-full h-full object-cover opacity-60" alt="" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
            </div>
            
            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-16 overflow-y-auto">
              <div>
                <span className="text-red-600 font-display font-black text-[12px] tracking-[0.8em] uppercase block mb-6 underline decoration-4 underline-offset-8">Mission Decrypted</span>
                <h2 className="text-7xl font-display font-black text-white uppercase leading-none tracking-tighter">{selectedProject.title}</h2>
              </div>

              <p className="text-blue-100 text-2xl leading-relaxed font-light italic">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-2 gap-12 py-12 border-y border-white/10">
                <div>
                  <h4 className="text-[11px] font-black text-white/60 uppercase tracking-[0.5em] mb-6">Technical Tier</h4>
                  <p className="text-white font-display font-black text-xl uppercase tracking-tighter">{selectedProject.category}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-white/60 uppercase tracking-[0.5em] mb-6">Threat Level</h4>
                  <p className="text-red-600 font-display font-black text-xl uppercase tracking-tighter">{selectedProject.difficulty}</p>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-[11px] font-black text-white/60 uppercase tracking-[0.5em]">Module Integration</h4>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.tags.map(tag => (
                    <div key={tag} className="px-8 py-4 bg-white text-slate-950 font-display font-black text-[11px] uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all transform hover:-rotate-2">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-500px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(500px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Projects;
