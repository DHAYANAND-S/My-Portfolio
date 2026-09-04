'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Hammer, BookOpen, Flame, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const keywordIcons: Record<string, React.ElementType> = {
  BUILD: Hammer,
  LEARN: BookOpen,
  COMPETE: Flame,
  LEAD: Compass
};

export default function HumanSideSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // PERSONAL BRAND PILLARS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            The <span className="text-gradient-cyan">Human Side</span> of Dhayanand S
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            Four core pillars defining Dhayanand&apos;s holistic growth as a builder, student, athlete, and leader.
          </motion.p>
        </div>

        {/* 4 Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.humanSide.map((pillar, idx) => {
            const IconComp = keywordIcons[pillar.keyword] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`glass-panel p-6 rounded-3xl ${pillar.border} bg-gradient-to-b ${pillar.gradient} flex flex-col justify-between transition-all duration-300 group shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-white tracking-wider group-hover:text-cyan-300 transition-colors">
                      {pillar.keyword}
                    </span>
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                  <p className="text-xs text-cyan-400 font-mono mb-3">{pillar.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">EXPLORE →</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
