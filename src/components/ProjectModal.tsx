import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle, ArrowRight, Laptop, Smartphone, Tablet } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose, 
  onContactClick 
}) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0E0E17] border border-white/[0.12] rounded-3xl p-5 sm:p-8 shadow-2xl z-10 text-zinc-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-medium text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                {project.category}
              </span>
              <span className="text-xs text-zinc-500 font-mono">Case Study</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-6 space-y-6">
          
          {/* Responsive Device Viewport Frame */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono">Preview Presentation</span>
              <div className="flex items-center gap-1 bg-[#141421] p-1 rounded-lg border border-white/[0.06]">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`p-1.5 rounded flex items-center gap-1 text-[11px] ${
                    viewMode === 'desktop' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Desktop View"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setViewMode('tablet')}
                  className={`p-1.5 rounded flex items-center gap-1 text-[11px] ${
                    viewMode === 'tablet' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`p-1.5 rounded flex items-center gap-1 text-[11px] ${
                    viewMode === 'mobile' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            {/* Container with dynamic width based on device */}
            <div className="flex justify-center bg-[#07070B] p-4 rounded-2xl border border-white/[0.06] overflow-hidden">
              <div 
                className={`transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border border-white/[0.1] bg-[#111119] ${
                  viewMode === 'desktop' ? 'w-full aspect-[16/9]' :
                  viewMode === 'tablet' ? 'w-[520px] max-w-full aspect-[4/3]' :
                  'w-[300px] max-w-full aspect-[9/16] max-h-[480px]'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Project Detailed Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-purple-400 font-mono uppercase tracking-wider">
              Project Overview & Architecture
            </h4>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Metrics / Quantitative proof */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Key Performance Metrics
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                    <div className="text-base sm:text-lg font-bold font-mono text-cyan-300">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights checklist */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Technical Highlights & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack badges */}
          <div className="space-y-2 pt-2 border-t border-white/[0.06]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.05] text-zinc-300 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Preview</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Discuss a similar project →
          </button>
        </div>

      </div>
    </div>
  );
};
