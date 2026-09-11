import React, { useState, useMemo } from 'react';
import { LayoutGrid, Rows, List, ArrowUpRight } from 'lucide-react';
import { Project, Language, ViewMode, DisciplineCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectsIndex } from './ProjectsIndex';
import { useTheme } from '../context/ThemeContext';
import { UI } from '../data/translations';

interface ProjectsSectionProps {
  projects: Project[];
  language: Language;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  language,
  onSelectProject,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [selectedCategory, setSelectedCategory] = useState<DisciplineCategory>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('editorial');

  const categories: { id: DisciplineCategory; labelKey: keyof typeof UI.projects.categories }[] = [
    { id: 'all', labelKey: 'all' },
    { id: 'direction-artistique', labelKey: 'direction-artistique' },
    { id: 'identite-branding', labelKey: 'identite-branding' },
    { id: 'photographie-campagne', labelKey: 'photographie-campagne' },
    { id: 'digital-experience', labelKey: 'digital-experience' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="travaux" className={`py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t transition-colors ${
      isLight ? 'border-black/10' : 'border-white/10'
    }`}>
      {/* Section Subhead & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12">
        <div>
          <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-2 ${
            isLight ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            <span>01</span>
            <span>/</span>
            <span>{UI.projects.eyebrow[language]}</span>
          </div>
          <h2 className={`font-editorial-display text-3xl sm:text-5xl tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            {UI.projects.title[language]}
          </h2>
          <p className={`mt-2 font-sans text-sm max-w-xl ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
            {UI.projects.subtitle[language]}
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-4">
          <span className={`hidden sm:inline font-mono text-xs uppercase tracking-wider ${
            isLight ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {UI.projects.viewLabel[language]}
          </span>
          <div className={`inline-flex p-1 rounded-xl border ${
            isLight ? 'border-black/10 bg-black/[0.03]' : 'border-white/10 bg-white/[0.02]'
          }`}>
            <button
              type="button"
              id="view-editorial-btn"
              onClick={() => setViewMode('editorial')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === 'editorial'
                  ? isLight
                    ? 'bg-black text-white font-semibold shadow'
                    : 'bg-white text-black font-semibold shadow'
                  : isLight
                  ? 'text-neutral-600 hover:text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title={UI.projects.views.editorial[language]}
            >
              <Rows className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{UI.projects.views.editorial[language]}</span>
            </button>

            <button
              type="button"
              id="view-grid-btn"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === 'grid'
                  ? isLight
                    ? 'bg-black text-white font-semibold shadow'
                    : 'bg-white text-black font-semibold shadow'
                  : isLight
                  ? 'text-neutral-600 hover:text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title={UI.projects.views.grid[language]}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{UI.projects.views.grid[language]}</span>
            </button>

            <button
              type="button"
              id="view-index-btn"
              onClick={() => setViewMode('index')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === 'index'
                  ? isLight
                    ? 'bg-black text-white font-semibold shadow'
                    : 'bg-white text-black font-semibold shadow'
                  : isLight
                  ? 'text-neutral-600 hover:text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title={UI.projects.views.index[language]}
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{UI.projects.views.index[language]}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
        {categories.map((cat) => {
          const count =
            cat.id === 'all'
              ? projects.length
              : projects.filter((p) => p.category === cat.id).length;

          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              id={`cat-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 border ${
                isSelected
                  ? isLight
                    ? 'border-black bg-black text-white font-semibold'
                    : 'border-white bg-white text-black font-semibold'
                  : isLight
                  ? 'border-black/10 text-neutral-600 hover:text-black hover:border-black/30 bg-black/[0.02]'
                  : 'border-white/10 text-neutral-400 hover:text-white hover:border-white/30 bg-white/[0.02]'
              }`}
            >
              <span>{UI.projects.categories[cat.labelKey][language]}</span>
              <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Projects Display */}
      {viewMode === 'editorial' && (
        <div className="space-y-4">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              language={language}
              viewMode="editorial"
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      )}

      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              language={language}
              viewMode="grid"
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      )}

      {viewMode === 'index' && (
        <ProjectsIndex
          projects={filteredProjects}
          language={language}
          onSelectProject={onSelectProject}
        />
      )}

      {/* Behance archive link footer */}
      <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isLight ? 'border-black/10' : 'border-white/10'
      }`}>
        <p className={`font-mono text-xs ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
          {UI.projects.archive.text[language]}
        </p>

        <a
          href="https://www.behance.net/mehdihrz"
          target="_blank"
          rel="noopener noreferrer"
          id="behance-extended-archive-btn"
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-mono text-xs uppercase tracking-wider transition-all ${
            isLight
              ? 'border-black/20 bg-black/[0.03] text-neutral-800 hover:text-black hover:border-black/40'
              : 'border-white/20 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/40'
          }`}
        >
          <span>{UI.projects.archive.button[language]}</span>
          <ArrowUpRight className={`w-4 h-4 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`} />
        </a>
      </div>
    </section>
  );
};
