import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project, Language } from '../types';
import { useTheme } from '../context/ThemeContext';
import { UI, getLocalized } from '../data/translations';

interface ProjectsIndexProps {
  projects: Project[];
  language: Language;
  onSelectProject: (project: Project) => void;
}

export const ProjectsIndex: React.FC<ProjectsIndexProps> = ({
  projects,
  language,
  onSelectProject,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div id="projects-index-table" className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className={`border-b font-mono text-xs uppercase tracking-widest ${
            isLight ? 'border-black/20 text-neutral-600' : 'border-white/20 text-neutral-400'
          }`}>
            <th className="py-4 px-3 w-16">N°</th>
            <th className="py-4 px-3">{UI.projects.index.project[language]}</th>
            <th className="py-4 px-3">{UI.projects.index.discipline[language]}</th>
            <th className="py-4 px-3">{UI.projects.index.client[language]}</th>
            <th className="py-4 px-3">{UI.projects.index.year[language]}</th>
            <th className="py-4 px-3 text-right">{UI.projects.index.view[language]}</th>
          </tr>
        </thead>
        <tbody className={`font-sans divide-y ${isLight ? 'divide-black/[0.08]' : 'divide-white/[0.07]'}`}>
          {projects.map((project, idx) => (
            <tr
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group cursor-pointer transition-colors ${
                isLight ? 'hover:bg-black/[0.03]' : 'hover:bg-white/[0.03]'
              }`}
            >
              <td className={`py-5 px-3 font-mono text-xs ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {String(idx + 1).padStart(2, '0')}
              </td>

              <td className="py-5 px-3">
                <div className="flex flex-col">
                  <span className={`font-editorial-display text-lg transition-colors ${
                    isLight ? 'text-black group-hover:text-neutral-700' : 'text-white group-hover:text-neutral-200'
                  }`}>
                    {project.title}
                  </span>
                  <span className={`font-serif italic text-xs ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
                    {getLocalized(project.subtitle, language)}
                  </span>
                </div>
              </td>

              <td className={`py-5 px-3 font-mono text-xs ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                {getLocalized(project.categoryLabel, language)}
              </td>

              <td className={`py-5 px-3 font-mono text-xs ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                {project.client}
              </td>

              <td className={`py-5 px-3 font-mono text-xs ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {project.year}
              </td>

              <td className="py-5 px-3 text-right">
                <div className="inline-flex items-center gap-3">
                  {project.behanceUrl && (
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider transition-colors ${
                        isLight ? 'text-neutral-600 hover:text-black' : 'text-neutral-400 hover:text-white'
                      }`}
                      title={UI.projects.card.openBehance[language]}
                    >
                      <span>Behance</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className={`inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider transition-colors ${
                      isLight ? 'text-black group-hover:text-neutral-600' : 'text-white group-hover:text-neutral-200'
                    }`}
                  >
                    <span className="hidden sm:inline">{UI.projects.card.caseStudy[language]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
