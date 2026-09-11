import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project, Language, ViewMode } from '../types';
import { useTheme } from '../context/ThemeContext';
import { UI, getLocalized } from '../data/translations';

interface ProjectCardProps {
  project: Project;
  index: number;
  language: Language;
  viewMode: ViewMode;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  language,
  viewMode,
  onSelectProject,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const numberFormatted = String(index + 1).padStart(2, '0');

  const categoryLabel = getLocalized(project.categoryLabel, language);
  const subtitle = getLocalized(project.subtitle, language);
  const statement = getLocalized(project.statement, language);
  const role = getLocalized(project.role, language);

  if (viewMode === 'editorial') {
    return (
      <article
        id={`project-card-${project.id}`}
        className={`group relative border-t pt-12 pb-20 transition-colors ${
          isLight ? 'border-black/10' : 'border-white/10'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Imagery Showcase — Photo en premier avant le texte */}
          <div className="lg:col-span-7 xl:col-span-8">
            <a
              href={project.behanceUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              id={`cover-link-${project.id}`}
              className={`block cursor-pointer relative overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[16/9] border transition-all duration-500 shadow-2xl group/cover ${
                isLight
                  ? 'bg-neutral-100 border-black/10 group-hover:border-black/30 shadow-neutral-200'
                  : 'bg-neutral-900 border-white/10 group-hover:border-white/30 shadow-black'
              }`}
              title={UI.projects.card.openBehance[language]}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-all duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-white text-black shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-white">
                    {UI.projects.card.viewOnBehance[language]}
                  </span>
                </div>

                <span className="font-mono text-xs text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  behance.net/mehdihrz
                </span>
              </div>
            </a>
          </div>

          {/* Metadata & Narrative / Explication — Après la photo */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-3 ${
                isLight ? 'text-neutral-500' : 'text-neutral-400'
              }`}>
                <span>{numberFormatted} / 12</span>
                <span>/</span>
                <span>{categoryLabel}</span>
                <span>/</span>
                <span>{project.year}</span>
              </div>

              <h2 className={`font-editorial-display text-3xl sm:text-4xl tracking-tight transition-colors ${
                isLight ? 'text-black group-hover:text-neutral-700' : 'text-white group-hover:text-neutral-200'
              }`}>
                {project.title}
              </h2>

              <p className={`mt-2 font-serif italic text-lg ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                {subtitle}
              </p>

              <div className={`mt-6 pt-6 border-t ${isLight ? 'border-black/10' : 'border-white/10'}`}>
                <p className={`font-sans text-sm leading-relaxed ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                  {statement}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className={`flex items-center justify-between text-xs font-mono border-b pb-2 ${
                isLight ? 'text-neutral-600 border-black/[0.08]' : 'text-neutral-400 border-white/[0.07]'
              }`}>
                <span className="uppercase tracking-wider">{UI.projects.card.client[language]}</span>
                <span className={isLight ? 'text-black font-medium' : 'text-white'}>{project.client}</span>
              </div>

              <div className={`flex items-center justify-between text-xs font-mono border-b pb-2 ${
                isLight ? 'text-neutral-600 border-black/[0.08]' : 'text-neutral-400 border-white/[0.07]'
              }`}>
                <span className="uppercase tracking-wider">{UI.projects.card.role[language]}</span>
                <span className={`truncate max-w-[200px] text-right ${isLight ? 'text-neutral-800' : 'text-neutral-300'}`}>
                  {role}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  id={`btn-view-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 font-mono text-xs uppercase tracking-wider group/btn ${
                    isLight
                      ? 'border-black/15 bg-black/[0.03] text-neutral-800 hover:bg-black hover:text-white'
                      : 'border-white/15 bg-white/[0.03] text-neutral-300 hover:bg-white hover:text-black'
                  }`}
                >
                  <span>{UI.projects.card.caseStudy[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-behance-${project.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 font-mono text-xs uppercase tracking-wider group/behance ${
                      isLight
                        ? 'border-black/15 bg-black/[0.06] text-black hover:bg-black hover:text-white'
                        : 'border-white/15 bg-white/[0.06] text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    <span>Behance</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/behance:scale-110" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid View Mode
  return (
    <article
      id={`project-card-grid-${project.id}`}
      className={`group relative flex flex-col rounded-xl border p-5 transition-all duration-300 ${
        isLight
          ? 'border-black/10 bg-black/[0.015] hover:border-black/30 hover:bg-black/[0.03]'
          : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]'
      }`}
    >
      <a
        href={project.behanceUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-pointer relative overflow-hidden rounded-lg aspect-[16/10] border block group/gridimg ${
          isLight ? 'bg-neutral-100 border-black/5' : 'bg-neutral-900 border-white/5'
        }`}
        title={UI.projects.card.openBehance[language]}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] uppercase tracking-wider text-neutral-300">
          {project.year}
        </div>
        <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </a>

      <div className="mt-5 flex-1 flex flex-col justify-between">
        <div>
          <div className={`font-mono text-[11px] uppercase tracking-widest mb-1 ${
            isLight ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {categoryLabel}
          </div>
          <h3 className={`font-editorial-display text-2xl tracking-tight transition-colors ${
            isLight ? 'text-black group-hover:text-neutral-700' : 'text-white group-hover:text-neutral-200'
          }`}>
            {project.title}
          </h3>
          <p className={`mt-1 font-serif italic text-sm line-clamp-1 ${isLight ? 'text-neutral-600' : 'text-neutral-300'}`}>
            {subtitle}
          </p>
        </div>

        <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
          isLight ? 'border-black/10' : 'border-white/10'
        }`}>
          <span className={`font-mono text-xs ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
            {project.client}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className={`inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider ${
                isLight ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
              }`}
            >
              <span>{UI.projects.card.caseStudy[language]}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider pl-2 border-l ${
                  isLight
                    ? 'text-black hover:text-neutral-600 border-black/15'
                    : 'text-white hover:text-neutral-300 border-white/15'
                }`}
                title="Behance"
              >
                <span>Behance</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

