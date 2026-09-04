'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Code2,
  BarChart3,
  Radio,
  Sparkles,
  Trophy,
  GraduationCap,
  MapPin,
  CheckCircle,
  BrainCircuit
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Code2,
  BarChart3,
  Radio,
  Sparkles,
  Trophy
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>01 // DIGITAL IDENTITY & MINDSET</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            About <span className="text-gradient-cyan">Dhayanand S</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            {PORTFOLIO_DATA.personal.aboutBio}
          </motion.p>
        </div>

        {/* Education & Bio Overview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/20 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Education</h4>
                <p className="font-semibold text-white mt-1">{PORTFOLIO_DATA.personal.education.degree}</p>
                <p className="text-xs text-slate-400 mt-0.5">{PORTFOLIO_DATA.personal.education.institution}</p>
                <p className="text-[11px] font-mono text-cyan-300 mt-1">{PORTFOLIO_DATA.personal.education.period}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider">Location & Origin</h4>
                <p className="font-semibold text-white mt-1">{PORTFOLIO_DATA.personal.location}</p>
                <p className="text-xs text-slate-400 mt-0.5">Languages: {PORTFOLIO_DATA.personal.languages.join(', ')}</p>
                <p className="text-[11px] font-mono text-slate-400 mt-1">School: Navarasam HS School</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider">Core Philosophy</h4>
                <p className="font-semibold text-white mt-1">Learner by Building</p>
                <p className="text-xs text-slate-400 mt-0.5">Practical project execution over theoretical memorization.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6 Interactive Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.capabilityCards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Cpu;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} p-0.5 mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-cyan-300" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400/80">
                  <span>CAPABILITY 0{idx + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
