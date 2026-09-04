'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Flame, Crown, Zap, Shield, Activity, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import SportsCanvas from './SportsCanvas';

const achievementIconMap: Record<string, React.ElementType> = {
  Zap,
  Medal,
  Trophy,
  Flame,
  Crown
};

export default function BeyondCodeSection() {
  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="beyondcode" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Radial Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>06 // SPORTS & EXTRACURRICULAR IDENTITY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            {PORTFOLIO_DATA.sports.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-400 font-mono text-base font-semibold tracking-wider mb-2"
          >
            {PORTFOLIO_DATA.sports.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto"
          >
            {PORTFOLIO_DATA.sports.bio}
          </motion.p>
        </div>

        {/* Interactive Track-to-Code Neural Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <SportsCanvas />
        </motion.div>

        {/* College Leadership Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <Crown className="w-8 h-8" />
            </div>
            <div>
              <span className="px-3 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-widest inline-block mb-1">
                COLLEGE LEADERSHIP
              </span>
              <h3 className="text-2xl font-extrabold text-white">{PORTFOLIO_DATA.sports.leadership.role}</h3>
              <p className="text-xs font-mono text-slate-400 mt-1">{PORTFOLIO_DATA.sports.leadership.institution}</p>
              <ul className="mt-3 space-y-1 text-xs text-slate-300">
                {PORTFOLIO_DATA.sports.leadership.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={triggerCelebration}
            className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] shrink-0 flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Celebrate Leadership</span>
          </button>
        </motion.div>

        {/* Achievement Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.sports.achievements.map((ach, idx) => {
            const IconComponent = achievementIconMap[ach.icon] || Trophy;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      {ach.level} Level
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>CATEGORY</span>
                  <span className="text-amber-400 font-semibold">{ach.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sports Interests Tags */}
        <div className="mt-12 text-center">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-4">ACTIVE ATHLETIC DISCIPLINES</span>
          <div className="flex flex-wrap justify-center gap-2">
            {PORTFOLIO_DATA.sports.interests.map((interest, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-xs font-mono bg-slate-900 border border-amber-500/30 text-amber-300 font-semibold"
              >
                ⚡ {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
