import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  FolderGit2, 
  ArrowUpRight, 
  Sparkles, 
  Check, 
  Eye, 
  SlidersHorizontal 
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onContactClick: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onContactClick }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full-Stack & Laravel', value: 'Full-Stack' },
    { label: 'WordPress', value: 'WordPress' },
    { label: 'Frontend & Next.js', value: 'Frontend' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter || (activeFilter === 'Full-Stack' && (p.category === 'Full-Stack' || p.category === 'Tools')));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-purple-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            Featured Projects
          </h2>

          <p className="text-base text-zinc-400 max-w-2xl">
            A showcase of production-ready applications, custom WordPress business websites, and developer toolkits crafted with modern architecture.
          </p>

          {/* Interactive filter segmented control */}
          <div className="mt-8 p-1.5 rounded-full bg-[#12121E] border border-white/[0.08] flex flex-wrap items-center justify-center gap-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                  activeFilter === tab.value
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950/60'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Project Showcase Layout */}
        <div className="space-y-16 sm:space-y-24">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-[#111119]/80 border border-white/[0.07] hover:border-purple-500/30 transition-all duration-300 shadow-xl`}
              >
                {/* Visual Image Preview Column */}
                <div 
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="group relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#161622] border border-white/[0.08] shadow-2xl cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Hover Quick Action Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple-600 text-white text-xs font-semibold shadow-lg shadow-purple-950/50 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Project & Metrics</span>
                      </div>
                    </div>

                    {/* Category Tag on top of image */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-mono font-medium text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Information & Details Column */}
                <div 
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Title and Subtitle */}
                  <div className="space-y-2 mb-4">
                    <span className="text-xs font-mono font-medium text-purple-400 uppercase tracking-wider">
                      Featured Work 0{index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons: GitHub & Live Demo */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 active:scale-95 transition-all shadow-md shadow-purple-900/30"
                    >
                      <span>Live Demo & Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/30 transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-4 h-4 text-purple-300" />
                      <span>GitHub</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onContactClick={onContactClick}
      />
    </section>
  );
};
