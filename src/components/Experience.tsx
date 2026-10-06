import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0A0F]/80">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-purple-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            My Experience
          </h2>

          <p className="text-base text-zinc-400 max-w-2xl">
            A journey of engineering reliable web solutions, architecting custom WordPress ecosystems, and building full-stack Laravel platforms.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line indicator */}
          <div 
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent sm:-translate-x-1/2 opacity-30" 
            aria-hidden="true"
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-[#0E0E18] border-2 border-purple-500 shadow-md shadow-purple-950/50 flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Spacer for two-sided alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card Container */}
                  <div 
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-3xl bg-[#111119] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 shadow-xl text-left">
                      
                      {/* Period Badge & Year */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </span>

                        <span className="text-xs font-mono text-zinc-500">
                          {exp.type}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-white font-display mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-4">
                        <span>{exp.company}</span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-zinc-400">{exp.location}</span>
                      </div>

                      {/* Brief narrative description */}
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2 mb-6 pt-3 border-t border-white/[0.05]">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                          Key Responsibilities & Deliverables
                        </span>
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies used in this role */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.04]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
