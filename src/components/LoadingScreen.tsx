'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Fast futuristic boot sequence (approx 1.8s total)
    const t1 = setTimeout(() => setStage(1), 600); // DS Emblem
    const t2 = setTimeout(() => setStage(2), 1200); // Initializing Dhaya AI...
    const t3 = setTimeout(() => {
      setStage(3);
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="fixed inset-0 z-[99999] bg-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden"
      >
        {/* Futuristic Background Scanning Grid */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

        {/* DS Futuristic Emblem Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-24 h-24 mb-6 flex items-center justify-center"
        >
          {/* Outer Cyber Circuit Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/40 border-dashed animate-spin [animation-duration:10s]" />
          <div className="absolute inset-2 rounded-xl bg-slate-900 border border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center" />

          {/* Initials DS */}
          <span className="relative z-10 font-mono text-3xl font-extrabold tracking-tighter text-gradient-cyan">
            DS
          </span>
        </motion.div>

        {/* Log Messages */}
        <div className="h-12 text-center flex flex-col items-center justify-center">
          {stage >= 1 && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1"
            >
              DHAYANAND S — AI DIGITAL LAB
            </motion.p>
          )}

          {stage === 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-mono text-slate-400 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              Initializing Dhaya AI...
            </motion.p>
          )}

          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-mono text-blue-400 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
              Loading Digital Portfolio...
            </motion.p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full mt-4 overflow-hidden border border-cyan-500/20">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_10px_#06b6d4]"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
