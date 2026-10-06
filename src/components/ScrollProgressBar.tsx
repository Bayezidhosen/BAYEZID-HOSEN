import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none overflow-hidden" 
      aria-hidden="true"
    >
      {/* Background track (optional subtle guide line) */}
      <div className="absolute inset-0 bg-white/[0.03]" />

      {/* Animated Purple Progress Bar */}
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
