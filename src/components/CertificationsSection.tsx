'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>09 // VERIFIED CERTIFICATE VAULT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Certificate <span className="text-gradient-cyan">Vault</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base"
          >
            Factual, verified certifications earned from leading tech institutions and corporate internship programs.
          </motion.p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all flex items-start gap-4 group shadow-xl"
            >
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono border ${cert.badgeColor}`}>
                    {cert.platform || 'Verified'}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{cert.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">{cert.issuer}</p>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400/80">
                  <span className="flex items-center gap-1 text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Authentic Record
                  </span>
                  <span className="text-slate-500 group-hover:text-cyan-300 transition-colors">CREDENTIAL VERIFIED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
