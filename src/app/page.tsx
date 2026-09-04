'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AILabSection from '@/components/AILabSection';
import CreativeSection from '@/components/CreativeSection';
import BeyondCodeSection from '@/components/BeyondCodeSection';
import HumanSideSection from '@/components/HumanSideSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import EducationProfilesSection from '@/components/EducationProfilesSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AICompanion from '@/components/AICompanion';
import AIChatModal from '@/components/AIChatModal';
import ProjectModal from '@/components/ProjectModal';
import { Project } from '@/data/portfolioData';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInitialQuery, setChatInitialQuery] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'skills',
        'projects',
        'ailab',
        'creative',
        'beyondcode',
        'experience',
        'certifications',
        'resume',
        'contact'
      ];

      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenChat = (query?: string) => {
    setChatInitialQuery(query);
    setChatOpen(true);
  };

  const handleExplainProject = (project: Project) => {
    setSelectedProject(project);
    handleOpenChat(`Please explain the ${project.title} project (${project.subtitle}) in detail, highlighting its tech stack and Dhayanand's implementation role.`);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative">
      {/* Loading Sequence */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Custom AI Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenChat={() => handleOpenChat()} activeSection={activeSection} />

      {/* Main Portfolio Content */}
      <div className="relative z-10">
        <HeroSection
          onOpenChat={() => handleOpenChat()}
          onExploreWork={() => {
            const el = document.getElementById('projects');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <AboutSection />
        <SkillsSection />

        <ProjectsSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onExplainProject={(proj) => handleExplainProject(proj)}
        />

        <AILabSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onExplainProject={(proj) => handleExplainProject(proj)}
        />

        <CreativeSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onAnalyzeProject={(proj) => handleExplainProject(proj)}
        />

        <BeyondCodeSection />
        <HumanSideSection />
        <ExperienceSection />
        <CertificationsSection />
        <EducationProfilesSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Interactive AI Companion */}
      <AICompanion
        onOpenChat={(query) => handleOpenChat(query)}
        currentSection={activeSection}
      />

      {/* Real Dhaya AI Chatbot Modal */}
      <AIChatModal
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        initialQuery={chatInitialQuery}
        selectedProjectContext={selectedProject}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onExplainWithAI={(proj) => handleExplainProject(proj)}
      />
    </main>
  );
}
