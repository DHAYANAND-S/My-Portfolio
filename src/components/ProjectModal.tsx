'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Bot, Sparkles, CheckCircle, Code2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';
import { GithubIcon } from '@/components/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onExplainWithAI: (project: Project) => void;
}

export default function ProjectModal({ project, onClose, onExplainWithAI }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-3xl glass-panel rounded-3xl border border-cyan-500/30 overflow-hidden my-8 shadow-2xl relative"
        >
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-cyan-500/20 relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 inline-block mb-3">
              {project.status}
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">{project.subtitle}</p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Detailed Overview</h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">Key Architecture & Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2.5">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5"
                  >
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.aiInvolvement && (
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Involvement & Smart Automation</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{project.aiInvolvement}</p>
              </div>
            )}

            {project.whatWasLearned && (
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>What Was Learned</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{project.whatWasLearned}</p>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  onClose();
                  onExplainWithAI(project);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg"
              >
                <Bot className="w-4 h-4" />
                <span>Explain This Project with AI</span>
              </button>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white font-semibold text-xs flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
