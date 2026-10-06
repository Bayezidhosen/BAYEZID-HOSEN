import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0F]/70">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-purple-400 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Social Proof & Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            Client Testimonials
          </h2>

          <p className="text-base text-zinc-400 max-w-2xl">
            Hear from clients and partners who have trusted me to deliver their core digital platforms, WordPress solutions, and Laravel applications.
          </p>
        </div>

        {/* 3 Glassmorphism Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="p-7 rounded-3xl bg-[#111119]/80 border border-white/[0.08] hover:border-purple-500/35 hover:bg-[#131322] transition-all duration-300 flex flex-col justify-between shadow-xl relative backdrop-blur-xl"
            >
              <div>
                {/* Star rating and verified badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Project</span>
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{test.testimonial}"
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${test.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {test.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {test.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {test.position} · {test.company}
                  </p>
                  <p className="text-[11px] font-mono text-purple-300 mt-0.5">
                    {test.projectDelivered}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
