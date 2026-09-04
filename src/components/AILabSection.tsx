'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Sparkles, Terminal, ArrowUpRight, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { GithubIcon } from '@/components/SocialIcons';

interface AILabSectionProps {
  onSelectProject: (project: Project) => void;
  onExplainProject: (project: Project) => void;
}

export default function AILabSection({ onSelectProject, onExplainProject }: AILabSectionProps) {
  return (
    <section id="ailab" className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>04 // INTELLECTUAL AI LABORATORY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Virtual <span className="text-gradient-cyan">AI Lab</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base"
          >
            Exploring generative synthesis, prompt engineering, and neural network data classifiers built with modern AI tooling.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 glass-panel p-6 rounded-2xl border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-300"
        >
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <div>
              <span className="text-cyan-400 font-bold">SYSTEM STATUS: </span>
              <span>NEURAL MODELS INITIALIZED & OPERATIONAL</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>MODEL: GEMINI 2.5 FLASH / CUSTOM DEEP NETS</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.aiLabProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-panel-glow rounded-3xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group shadow-2xl"
            >
              <div className="p-6 sm:p-8 bg-slate-900/90 border-b border-cyan-500/20">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    {project.status}
                  </span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-cyan-400 font-mono">{project.subtitle}</p>
              </div>

              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.aiInvolvement && (
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200">
                    <strong className="text-cyan-400 block mb-1">AI Involvement:</strong>
                    {project.aiInvolvement}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onExplainProject(project)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
                  >
                    <Bot className="w-4 h-4 text-slate-950" />
                    <span>Explain this project with AI</span>
                  </button>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    View Details
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
