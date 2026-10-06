import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Palette, 
  FileCode, 
  Atom, 
  Layers, 
  Wind, 
  Server, 
  Cpu, 
  Globe, 
  Database, 
  GitBranch, 
  Github, 
  Figma,
  CpuIcon
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-6 h-6", style: { color } };
    switch (iconName) {
      case 'Code': return <Code {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Atom': return <Atom {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Database': return <Database {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Github': return <Github {...props} />;
      case 'Figma': return <Figma {...props} />;
      default: return <Code {...props} />;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-purple-400 mb-3">
            <CpuIcon className="w-3.5 h-3.5" />
            <span>Tech Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Technologies & Frameworks
          </h2>

          <p className="text-base text-zinc-400 max-w-xl">
            Battle-tested industry tools I leverage daily to engineer fast, resilient, and responsive web applications.
          </p>
        </div>

        {/* Tech Grid with Floating / Glow Micro-effects */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-4 rounded-2xl bg-[#111119] border border-white/[0.06] hover:border-purple-500/35 hover:bg-[#151522] transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-purple-950/20"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-white/[0.15] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                {getIcon(tech.iconName, tech.color)}
              </div>

              <div className="text-sm font-bold text-white font-display group-hover:text-purple-200 transition-colors">
                {tech.name}
              </div>

              <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                {tech.category}
              </div>

              <div className="text-[11px] text-zinc-400 mt-2 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                {tech.description}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
