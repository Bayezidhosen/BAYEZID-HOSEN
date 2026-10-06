import React from 'react';
import { motion } from 'motion/react';
import { 
  Monitor, 
  Layout, 
  Server, 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Briefcase 
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-purple-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0A0A0F]/80">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-purple-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Services & Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            What I Do
          </h2>
          
          <p className="text-base text-zinc-400 max-w-2xl">
            Specialized engineering services tailored for businesses, agencies, and entrepreneurs looking for high performance, bespoke functionality, and clean design.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-7 sm:p-8 rounded-3xl bg-[#111119] border border-white/[0.07] hover:border-purple-500/40 hover:bg-[#131320] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:shadow-purple-950/30"
            >
              {/* Top row: Icon and Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:border-purple-500/30 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-zinc-700 group-hover:text-purple-400/60 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title and Short Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2 group-hover:text-purple-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-purple-300/90 font-medium mb-3">
                  {service.shortDesc}
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-8 pt-4 border-t border-white/[0.04]">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                    Key Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.slice(0, 3).map((tool, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-400 group-hover:text-purple-300 hover:underline transition-colors"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
