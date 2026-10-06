import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Boxes, 
  Layers, 
  Wind, 
  Server, 
  Cpu, 
  Database, 
  Globe, 
  GitBranch, 
  Github,
  CheckCircle2,
  CpuIcon
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { label: string; value: SkillCategory }[] = [
    { label: 'All Skills', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'CMS & Frameworks', value: 'cms' },
    { label: 'Tools', value: 'tools' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-blue-400" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-yellow-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-white" />;
      case 'Wind': return <Wind className="w-5 h-5 text-sky-400" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-red-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-300" />;
      case 'Globe': return <Globe className="w-5 h-5 text-blue-500" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-500" />;
      case 'Github': return <Github className="w-5 h-5 text-zinc-200" />;
      default: return <Code2 className="w-5 h-5 text-purple-400" />;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'frontend': return 'Frontend';
      case 'backend': return 'Backend';
      case 'cms': return 'CMS & Web';
      case 'tools': return 'Tooling';
      default: return category;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-purple-400 mb-3">
            <CpuIcon className="w-3.5 h-3.5" />
            <span>Core Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            Technical Skills & Technologies
          </h2>
          
          <p className="text-base text-zinc-400 max-w-2xl">
            A comprehensive overview of my technical stack across modern web development, custom WordPress solutions, and scalable Laravel backends.
          </p>

          {/* Interactive Filter Tabs (Zero-pill compliant segmented control) */}
          <div className="mt-8 p-1.5 rounded-full bg-[#12121D] border border-white/[0.08] flex flex-wrap items-center justify-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950/60'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative p-5 rounded-2xl bg-[#11111A] border border-white/[0.06] hover:border-purple-500/35 hover:bg-[#141421] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-950/20"
              >
                {/* Header: Icon, Name & Category */}
                <div className="flex items-start justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-purple-500/30 flex items-center justify-center transition-colors">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-zinc-500 font-mono">
                        {getCategoryBadge(skill.category)}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-zinc-400 group-hover:text-purple-300 transition-colors">
                    {skill.experience}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-1 border-t border-white/[0.04]">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-zinc-500">Proficiency</span>
                    <span className="text-purple-300 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
