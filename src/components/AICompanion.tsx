'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles, X } from 'lucide-react';

interface AICompanionProps {
  onOpenChat: (initialQuery?: string) => void;
  currentSection?: string;
}

export default function AICompanion({ onOpenChat, currentSection }: AICompanionProps) {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [hint, setHint] = useState<string | null>("Hi! I'm Dhaya AI. Ask me anything about Dhayanand!");
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Track cursor for orb pupil movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const orbX = window.innerWidth - 80;
      const orbY = window.innerHeight - 80;
      const dx = e.clientX - orbX;
      const dy = e.clientY - orbY;
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.05, 6);

      setPupilOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update companion hints based on active section
  useEffect(() => {
    if (!currentSection) return;

    const sectionHints: Record<string, string> = {
      hero: "Hi! I'm Dhaya AI. Explore Dhayanand's digital laboratory!",
      about: "Dhayanand is an AI & DS undergrad who learns by building real projects.",
      skills: "Check out his Full Stack, AI/Data, testing, and IoT capabilities!",
      projects: "Click 'Explain with AI' on any project card to analyze details!",
      ailab: "Welcome to the AI Lab! Discover AI-assisted experiments.",
      creative: "Explore custom online invitation experiences created by Dhayanand.",
      beyondcode: "Department Sports Secretary & Athletics achievement record!",
      experience: "Internships at Cognifyz, Ether Infotech & Trios Tech.",
      certifications: "Verified certificates from IBM, Cognifyz, Ether & Trios.",
      contact: "Ready to connect? Send a direct message to Dhayanand!"
    };

    if (sectionHints[currentSection]) {
      setHint(sectionHints[currentSection]);
    }
  }, [currentSection]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Speech Hint Bubble */}
      <AnimatePresence>
        {hint && !isDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 max-w-[260px] glass-panel-glow p-3 rounded-xl border border-cyan-500/30 text-xs text-slate-200 shadow-xl relative group"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Dhaya AI Companion</span>
            </div>
            <p className="text-slate-300 leading-snug">{hint}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Companion Avatar Orb Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => onOpenChat()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group p-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center justify-center"
      >
        {/* Holographic Glowing Outer Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-40 blur-md group-hover:opacity-80 transition-opacity" />

        {/* Minimalist Futuristic AI Eye Core */}
        <div className="relative w-12 h-12 rounded-full bg-slate-950 border border-cyan-400/50 flex items-center justify-center overflow-hidden">
          {/* Internal Cyber Ring */}
          <div className="absolute inset-1 rounded-full border border-cyan-500/20 border-dashed animate-spin" />

          {/* Pupil Iris tracking cursor */}
          <div
            className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_10px_#06b6d4] flex items-center justify-center transition-transform duration-75"
            style={{
              transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`
            }}
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>

        {/* Floating Chat Trigger Icon Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
          <MessageSquare className="w-3 h-3 fill-current" />
        </div>
      </motion.button>
    </div>
  );
}
