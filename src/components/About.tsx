import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, User, Code, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AboutModal } from './AboutModal';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0F]/70">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[480px] h-[480px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image & Decorative Glass Elements (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-[380px]"
            >
              {/* Decorative gradient border container */}
              <div className="relative p-3 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 border border-white/[0.08] backdrop-blur-xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#12121A] shadow-2xl">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Bayezid Hosen - Web Developer"
                    className="w-full h-full object-cover object-center filter saturate-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-80" />

                  {/* Inside card badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0E0E18]/90 backdrop-blur-md border border-white/[0.1] shadow-lg">
                    <p className="text-xs text-purple-300 font-mono font-medium">
                      // WordPress & Laravel Craftsman
                    </p>
                    <p className="text-xs text-zinc-300 font-sans mt-0.5">
                      Building high-impact digital experiences
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 px-4 py-2.5 rounded-2xl bg-[#13131E] border border-purple-500/30 shadow-xl shadow-purple-950/40 flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold text-white font-mono">
                  Rangpur, Bangladesh
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Information, Statistics & Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4 mb-8"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-purple-400">
                <User className="w-3.5 h-3.5" />
                <span>About Me</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.2]">
                Crafting Scalable Code &{' '}
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
                  Impactful Web Systems
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
                {PERSONAL_INFO.aboutDescription}
              </p>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                With a focus on performance, clean structure, and pixel-perfection, I bridge the gap between creative visual designs and rock-solid backend foundations. I take full ownership of every build, ensuring that clients receive fast, secure, and easily maintainable web applications.
              </p>
            </motion.div>

            {/* 4 Statistics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full mb-8"
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#11111A] border border-white/[0.07] hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight font-mono tabular-nums group-hover:text-purple-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-zinc-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Action button: More About Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-purple-500/40 transition-all duration-200 active:scale-95 shadow-sm"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 text-purple-400 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Interactive Profile Details Modal */}
      <AboutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onContactClick={onContactClick}
      />
    </section>
  );
};
