import React, { useState, useEffect } from 'react';
import { Language, Project } from './types';
import { PROJECTS } from './data/projects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ManifestoSection } from './components/ManifestoSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_language') as Language;
      if (saved && ['fr', 'en', 'es', 'ar'].includes(saved)) {
        return saved;
      }
    }
    return 'fr';
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_language', language);
    }
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isLight
        ? 'bg-[#fcfbf9] text-[#141416] selection:bg-[#141416] selection:text-[#fcfbf9]'
        : 'bg-[#0b0b0c] text-[#eae7e2] selection:bg-[#eae7e2] selection:text-[#0b0b0c]'
    }`}>
      {/* Fixed Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Editorial Body */}
      <main id="main-content">
        <Hero language={language} />

        <ProjectsSection
          projects={PROJECTS}
          language={language}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ManifestoSection language={language} />

        <AboutSection language={language} />

        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          projects={PROJECTS}
          language={language}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}
    </div>
  );
}
