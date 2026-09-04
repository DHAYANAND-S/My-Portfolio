'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Terminal, ExternalLink, School } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { LinkedinIcon, GithubIcon } from '@/components/SocialIcons';

const iconMap: Record<string, React.ElementType> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Code2,
  Terminal
};

export default function EducationProfilesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white">
              Education <span className="text-gradient-cyan">Timeline</span>
            </h2>

            <div className="space-y-6">
              {/* College */}
              <div className="glass-panel p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      UNDERGRADUATE DEGREE
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {PORTFOLIO_DATA.personal.education.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {PORTFOLIO_DATA.personal.education.institution}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{PORTFOLIO_DATA.personal.education.location}</p>
                    <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-300">
                      <span>PERIOD: {PORTFOLIO_DATA.personal.education.period}</span>
                      <span>STATUS: IN PROGRESS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* School */}
              <div className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-purple-400 shrink-0">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                      HIGHER SECONDARY EDUCATION
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {PORTFOLIO_DATA.personal.education.school}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Secondary & Higher Secondary Studies</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coding & Developer Profiles Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>VERIFIED CODING PROFILES</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white">
              Developer <span className="text-gradient-violet">Profiles</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.codingProfiles.map((profile, idx) => {
                const IconComponent = iconMap[profile.icon] || Code2;
                return (
                  <a
                    key={idx}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-panel p-5 rounded-2xl border border-slate-800 ${profile.color} transition-all duration-300 group flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-400/50 flex items-center justify-center text-cyan-400 transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400/90 mt-0.5">@{profile.username}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                      <span>{profile.tag}</span>
                      <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
