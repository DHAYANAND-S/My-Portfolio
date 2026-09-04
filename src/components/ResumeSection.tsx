'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, UserCheck, GraduationCap, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    // Generate factual plain text / formatted resume file for direct download
    const resumeText = `====================================================
DHAYANAND S — RESUME & PORTFOLIO
====================================================
Role: Full Stack Developer | AI Enthusiast
Email: ${PORTFOLIO_DATA.personal.email}
Phone: ${PORTFOLIO_DATA.personal.phone}
Location: ${PORTFOLIO_DATA.personal.location}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
GitHub: ${PORTFOLIO_DATA.personal.github}

----------------------------------------------------
EDUCATION
----------------------------------------------------
${PORTFOLIO_DATA.personal.education.degree}
${PORTFOLIO_DATA.personal.education.institution}, ${PORTFOLIO_DATA.personal.education.location}
Expected Graduation: 2027 (Current Student 2023-2027)

Schooling: Navarasam Matric Higher Secondary School, Palliyuthu

----------------------------------------------------
TECHNICAL SKILLS
----------------------------------------------------
Programming: Python, SQL, Java (Basic)
Web & MERN: HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express, MERN Stack
Databases: MySQL, MongoDB
AI & Data Science: Artificial Intelligence, Deep Learning, Business Analytics, AI-assisted Development
Software Testing: Manual Testing, Test Case Design, Bug Reporting, SDLC, STLC, Selenium, Regression Testing
IoT: Sensor Integration, Hardware-Software Sync
Tools: Git, GitHub, VS Code, Postman, Eclipse

----------------------------------------------------
ACADEMIC & TECHNICAL PROJECTS
----------------------------------------------------
1. MEDTRACK (Hospital Monitoring & Patient Management System)
   Tech: React, Node.js, Express, MySQL, CSS3
   Details: Patient admission records, emergency alert logging, role-based staff dashboard.

2. LMS SYSTEM (College Learning Management System)
   Tech: MERN Stack (MongoDB, Express, React, Node.js, Tailwind CSS)
   Details: Course material upload, assignment tracking, student grade notifications.

3. SMART HELMET (IoT Rider Safety System)
   Tech: IoT Sensors, Embedded C, Python, Telemetry Link
   Details: Infrared helmet detection and accident impact emergency alert dispatch.

4. PROJECT HELPER (Developer Tools Platform)
   Tech: React, Node.js, JavaScript, Developer APIs
   Details: Onboarding platform helping engineering students access tools & SDKs.

----------------------------------------------------
INTERNSHIP EXPERIENCE
----------------------------------------------------
• Cognifyz Technologies — Frontend Developer Intern (Jan 2026)
• Cognifyz Technologies — Business Analytics Intern (Jan 2026)
• Ether Infotech — Artificial Intelligence Intern (Dec 2025 – Jan 2026)
• Trios Technologies Pvt. Ltd. — Deep Learning Intern (Jun 2025 – Jul 2025)

----------------------------------------------------
SPORTS & LEADERSHIP
----------------------------------------------------
Role: Department Sports Secretary (AI & DS Department, Nandha Eng College)
Athletics Achievements:
- School/Zonal 400m Best Timing
- District Level Athletics 3rd Place
- College 200m 2nd Place & Best Timing
Disciplines: Athletics (200m, 400m, Relay), Hockey Player

----------------------------------------------------
VERIFIED CERTIFICATIONS
----------------------------------------------------
- Introduction to Data Analytics — IBM via Coursera
- Internship Completion Certificate — Cognifyz Technologies
- Deep Learning Certification — Trios Technologies
- Artificial Intelligence Certification — Ether Infotech
====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dhayanand_S_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>10 // FACTUAL RESUME PORTAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Curriculum <span className="text-gradient-cyan">Vitae</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base"
          >
            Verified factual summary of Dhayanand S&apos;s academic background, skills, internships, and achievements.
          </motion.p>
        </div>

        {/* Interactive Resume Card & Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">{PORTFOLIO_DATA.personal.name}</h3>
                <p className="text-sm font-semibold text-cyan-400">{PORTFOLIO_DATA.personal.role}</p>
                <p className="text-xs text-slate-400 mt-0.5">{PORTFOLIO_DATA.personal.education.degree} • Nandha Engineering College</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold text-xs flex items-center gap-2 transition-colors"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>{showPreview ? 'Hide Preview' : 'View Resume'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Interactive Document Preview Drawer */}
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 pt-6 border-t border-slate-800 space-y-6 text-sm text-slate-300 font-mono bg-slate-950/80 p-6 rounded-2xl border border-cyan-500/20 max-h-[500px] overflow-y-auto"
            >
              <div>
                <span className="text-cyan-400 font-bold uppercase block mb-1">OBJECTIVE & PROFILE</span>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">{PORTFOLIO_DATA.personal.aboutBio}</p>
              </div>

              <div>
                <span className="text-cyan-400 font-bold uppercase block mb-1">INTERNSHIPS</span>
                <ul className="space-y-2 text-xs font-sans">
                  {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                    <li key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-white">{exp.role}</strong> — <span className="text-cyan-400">{exp.company}</span> ({exp.period})
                      <p className="text-slate-400 text-[11px] mt-0.5">{exp.description[0]}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-cyan-400 font-bold uppercase block mb-1">PROJECTS</span>
                <ul className="space-y-2 text-xs font-sans">
                  {PORTFOLIO_DATA.projects.map((proj, idx) => (
                    <li key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-white">{proj.title}</strong>: {proj.subtitle} ({proj.techStack.join(', ')})
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
