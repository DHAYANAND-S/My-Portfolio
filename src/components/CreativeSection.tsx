'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, ExternalLink, Heart, Music, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

interface CreativeSectionProps {
  onSelectProject: (project: Project) => void;
  onAnalyzeProject: (project: Project) => void;
}

export default function CreativeSection({ onSelectProject, onAnalyzeProject }: CreativeSectionProps) {
  return (
    <section id="creative" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // CREATIVE WORK & INTERACTIVE EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Online <span className="text-gradient-violet">Invitation Experiences</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base"
          >
            Crafting custom web-based event invitations, dynamic celebratory landing pages, and interactive RSVP experiences using modern frontend technology and AI design assistance.
          </motion.p>
        </div>

        {/* Creative Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.creativeProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-3xl border border-fuchsia-500/30 hover:border-fuchsia-400 transition-all duration-300 overflow-hidden group shadow-2xl flex flex-col justify-between"
            >
              <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-slate-800`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40">
                    {project.status}
                  </span>
                  <div className="flex gap-1.5 text-fuchsia-400">
                    <Heart className="w-4 h-4 fill-current opacity-80" />
                    <Music className="w-4 h-4" />
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1 group-hover:text-fuchsia-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium">{project.subtitle}</p>
              </div>

              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-fuchsia-400 uppercase tracking-wider block">Interactive Elements:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <Sparkles className="w-3 h-3 text-fuchsia-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Bar */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onAnalyzeProject(project)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-semibold text-xs flex items-center gap-2 shadow-md transition-all"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Analyze This Project with AI</span>
                  </button>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    Explore Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
