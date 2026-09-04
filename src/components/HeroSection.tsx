'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Download, Bot, Terminal, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import HeroCanvas from './HeroCanvas';

interface HeroSectionProps {
  onOpenChat: () => void;
  onExploreWork: () => void;
}

export default function HeroSection({ onOpenChat, onExploreWork }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cyber-grid"
    >
      {/* 3D Holographic AI Neural Network Canvas */}
      <HeroCanvas />

      {/* Radial Ambient Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-glow text-xs font-mono text-cyan-300 border border-cyan-500/30 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="tracking-wide">AI & DATA SCIENCE UNDERGRADUATE</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">NANDHA ENG COLLEGE</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient-cyan relative">
            {PORTFOLIO_DATA.personal.name}
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-60" />
          </span>
        </motion.h1>

        {/* Professional Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 flex items-center justify-center gap-3 flex-wrap"
        >
          <span className="text-cyan-400">Full Stack Developer</span>
          <span className="text-slate-600 font-normal">|</span>
          <span className="text-purple-400">AI Enthusiast</span>
        </motion.h2>

        {/* Supporting Narrative Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed mb-10 font-normal"
        >
          {PORTFOLIO_DATA.personal.tagline}
        </motion.p>

        {/* Story Progression Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-3xl glass-panel p-3.5 rounded-2xl border border-cyan-500/20 mb-10 hidden sm:block"
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1 text-cyan-400"><Terminal className="w-3.5 h-3.5" /> Learner</span>
            <span>→</span>
            <span className="text-blue-400">Builder</span>
            <span>→</span>
            <span className="text-indigo-400">AI Explorer</span>
            <span>→</span>
            <span className="text-violet-400">Full Stack</span>
            <span>→</span>
            <span className="text-purple-400">Creative Dev</span>
            <span>→</span>
            <span className="flex items-center gap-1 text-fuchsia-400 font-semibold"><Cpu className="w-3.5 h-3.5" /> Future AI Dev</span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExploreWork}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center gap-2 group"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-sm font-semibold transition-all flex items-center gap-2"
          >
            <span>Let&apos;s Connect</span>
          </a>

          <button
            onClick={onOpenChat}
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 text-sm font-semibold transition-all flex items-center gap-2"
          >
            <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Dhaya AI Assistant</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
