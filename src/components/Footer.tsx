import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#07070B] border-t border-white/[0.08] pt-14 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Logo & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-lg shadow-purple-950/40">
              <div className="w-full h-full bg-[#0E0E18] rounded-[14px] flex items-center justify-center">
                <span className="font-display font-extrabold text-white text-base tracking-wider">
                  BH
                </span>
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-white font-display">
                {PERSONAL_INFO.name}
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                {PERSONAL_INFO.specialization} · Rangpur, Bangladesh
              </p>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
              aria-label="Facebook profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
              aria-label="Email Bayezid Hosen"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© 2026 Bayezid Hosen. All Rights Reserved.</p>

          <div className="flex items-center gap-2">
            <span>Crafted with passion in Rangpur, BD</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-400 hover:text-white transition-all duration-200"
            aria-label="Back to top of the page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
