
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '../constants';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import BrowserFrame from './BrowserFrame';

interface ProjectsProps {
  onProjectStateChange?: (isOpen: boolean) => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

const Projects: React.FC<ProjectsProps> = ({ onProjectStateChange }) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (id: number) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    onProjectStateChange?.(next !== null);
  };

  return (
    <div className="w-full">
      <SectionHeading index="03" title="Projects" note="Selected work" />

      <div className="divide-y divide-white/10 border-t border-b border-white/10">
        {PROJECTS.map((project, index) => {
          const isOpen = openId === project.id;
          return (
            <Reveal key={project.id} direction={index % 2 === 0 ? 'left' : 'right'} amount={0.15}>
              <div className="group">
                <button
                  onClick={() => toggle(project.id)}
                  className="w-full text-left py-7 sm:py-8 flex items-start gap-4 sm:gap-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-xs text-fuchsia-400/40 pt-1.5 tabular-nums shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <h3 className="text-lg sm:text-xl font-display font-medium text-white group-hover:text-fuchsia-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-white/25 text-xs shrink-0">{project.category}</span>
                    </div>
                    <p className="text-white/40 text-sm mt-1.5 leading-relaxed line-clamp-1">
                      {project.description}
                    </p>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/50 mt-1 group-hover:border-fuchsia-400/30 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.2 : 0.55, ease }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 sm:pb-16">
                        {/* IMAGE — full width, browser-chrome frame, gentle scale-in */}
                        <motion.div
                          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.1, ease }}
                          className="mb-8"
                        >
                          <BrowserFrame label={project.demoUrl || project.title}>
                            <div className="aspect-[16/9] sm:aspect-[16/8] bg-white/[0.02]">
                              <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-full object-contain ${!project.demoUrl ? 'grayscale opacity-50' : ''}`}
                              />
                            </div>
                          </BrowserFrame>
                        </motion.div>

                        {/* DETAILS */}
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2, ease }}
                          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14"
                        >
                          <div className="lg:col-span-3 flex flex-col gap-5">
                            <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                              {project.detailedDescription || project.description}
                            </p>

                            {project.features && (
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                {project.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/55">
                                    <span className="text-fuchsia-400/40 mt-1.5 text-[5px]">●</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          <div className="lg:col-span-2 flex flex-col gap-6">
                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-white/35">
                              {project.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                              ))}
                            </div>

                            <div className="flex items-center gap-6">
                              {project.demoUrl ? (
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium text-white flex items-center gap-1.5 hover:text-fuchsia-200 transition-colors"
                                >
                                  Live demo <span aria-hidden>→</span>
                                </a>
                              ) : (
                                <span className="text-sm text-white/25">Private / NDA</span>
                              )}
                              {project.repoUrl ? (
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-white/40 hover:text-white/70 transition-colors"
                                >
                                  Source
                                </a>
                              ) : null}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
