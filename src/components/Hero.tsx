import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Facebook, 
  Code, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Layers,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onViewWorkClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onViewWorkClick: _ignored, onContactClick }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 -left-20 w-[380px] h-[380px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for Freelance Work</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.12]">
                Hi, I'm <span className="text-white">{PERSONAL_INFO.name}.</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
                  I Build Modern Web Experiences.
                </span>
              </h1>
            </motion.div>

            {/* Location & Bilingual detail */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-mono mb-6"
            >
              <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-purple-300 font-normal">{PERSONAL_INFO.bengaliName}</span>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8"
            >
              {PERSONAL_INFO.heroSummary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-200 hover:bg-pos-100 transition-all duration-300 shadow-lg shadow-purple-900/35 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-purple-500/40 transition-all duration-200 hover:text-white active:scale-[0.98] w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Let's Talk</span>
              </button>
            </motion.div>

            {/* Social Icons Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex items-center gap-3 pt-2 border-t border-white/[0.06] w-full"
            >
              <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider mr-2">
                Connect
              </span>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-zinc-400 hover:text-purple-300 transition-all duration-200"
                aria-label="Bayezid Hosen GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-zinc-400 hover:text-purple-300 transition-all duration-200"
                aria-label="Bayezid Hosen LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-zinc-400 hover:text-purple-300 transition-all duration-200"
                aria-label="Bayezid Hosen Facebook profile"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-zinc-400 hover:text-purple-300 transition-all duration-200"
                aria-label="Send email to Bayezid Hosen"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="text-xs text-zinc-400 font-mono ml-auto hidden sm:inline">
                {PERSONAL_INFO.email}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Visual / Profile Area with Decorative Elements (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[390px] sm:max-w-[430px]"
            >
              {/* Outer decorative glowing ring */}
              <div 
                className="absolute -inset-3 bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 rounded-3xl opacity-30 blur-xl animate-pulse"
                aria-hidden="true" 
              />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#111118] shadow-2xl p-2.5">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181824]">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Bayezid Hosen - Web Developer"
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle contrast gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/85 via-transparent to-transparent" />

                  {/* Bottom overlay badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-[#0E0E18]/85 backdrop-blur-md border border-white/[0.1]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-xs font-medium text-zinc-200 font-mono">
                        WP & Laravel Dev
                      </span>
                    </div>
                    <span className="text-[11px] text-purple-300 font-semibold bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-800/40">
                      Rangpur, BD
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating UI Element 1 (Top-Right / Header): Skill Focus */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-5 -right-3 sm:-right-6 glass-panel rounded-2xl p-3 shadow-xl border border-white/[0.12] flex items-center gap-3 backdrop-blur-xl z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-900/50">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-400 font-mono">Specialist</div>
                  <div className="text-xs font-bold text-white font-display">WordPress & Laravel</div>
                </div>
              </motion.div>

              {/* Floating UI Element 2 (Bottom-Left): Delivery stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-3 sm:-left-6 glass-panel rounded-2xl p-3.5 shadow-xl border border-white/[0.12] flex items-center gap-3 backdrop-blur-xl z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-950/50">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-display">30+ Projects Delivered</div>
                  <div className="text-[11px] text-emerald-400 font-medium">3+ Years Experience</div>
                </div>
              </motion.div>

              {/* Decorative mini code snippet tag */}
              <div className="hidden sm:block absolute -bottom-12 right-6 font-mono text-[11px] text-zinc-500 bg-[#0A0A0F]/90 px-3 py-1 rounded-md border border-white/[0.06]">
                <span className="text-purple-400">Bayezid</span>.<span className="text-cyan-300">build</span>({'{'} fast: true {'}'})
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
