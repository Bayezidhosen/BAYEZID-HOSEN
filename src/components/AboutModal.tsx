import React from 'react';
import { X, CheckCircle, Award, Target, Coffee, Code2, Globe, Heart, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onContactClick }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E0E17] border border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-zinc-200">
        
        {/* Header with close button */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold font-display">
              BH
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                About Bayezid Hosen
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {PERSONAL_INFO.bengaliName} · {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          
          {/* Bio statement */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-purple-400 font-mono uppercase tracking-wider">
              My Journey & Philosophy
            </h4>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              I am a dedicated web engineer based in Rangpur, Bangladesh with over 3 years of hands-on experience in full-stack web and CMS development. My primary specialization is crafting custom WordPress architectures and scalable Laravel applications.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              I believe great web development is not just about writing code—it is about understanding business objectives, ensuring lightning-fast load times, crafting delightful user interfaces, and building maintainable systems that scale effortlessly.
            </p>
          </div>

          {/* 4 Pillars of Excellence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>Clean & Maintainable Code</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Adhering to SOLID principles, MVC architecture in Laravel, and clean PHP coding standards.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Performance Optimization</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Obsessed with Core Web Vitals, asset minification, database indexing, and caching.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Bespoke WordPress Solutions</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Custom theme development and Elementor widgets that eliminate template bloat.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold">
                <Heart className="w-4 h-4 text-amber-400" />
                <span>Client-First Communication</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Transparent milestone delivery, quick response time (within 24 hrs), and long-term support.
              </p>
            </div>
          </div>

          {/* Development Process */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-purple-400 font-mono uppercase tracking-wider">
              How I Work
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-purple-400 font-bold block mb-1">01. Discovery</span>
                <p className="text-xs text-zinc-400">Understanding goals, target audience & requirements.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-purple-400 font-bold block mb-1">02. Architecture</span>
                <p className="text-xs text-zinc-400">Database schema, API structure & UI layout design.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-purple-400 font-bold block mb-1">03. Build & Test</span>
                <p className="text-xs text-zinc-400">Pixel-perfect coding, speed audits & QA testing.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs font-mono text-purple-400 font-bold block mb-1">04. Launch</span>
                <p className="text-xs text-zinc-400">Production deployment, training & ongoing maintenance.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 border border-white/[0.08] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Email Copied!' : PERSONAL_INFO.email}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md shadow-purple-900/30"
            >
              Get In Touch
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
