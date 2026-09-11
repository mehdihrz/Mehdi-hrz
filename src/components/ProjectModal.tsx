import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowRight, Maximize2, ExternalLink, Check, Eye, ThumbsUp } from 'lucide-react';
import { Project, Language } from '../types';
import { useTheme } from '../context/ThemeContext';
import { UI, getLocalized, getLocalizedList } from '../data/translations';

interface ProjectModalProps {
  project: Project | null;
  projects: Project[];
  language: Language;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  projects,
  language,
  onClose,
  onSelectProject,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, activeImage]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      id="project-modal-container"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-0 sm:p-4 md:p-6 overflow-y-auto"
    >
      {/* Lightbox zoom overlay */}
      {activeImage && (
        <div
          id="image-lightbox"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          <img
            src={activeImage}
            alt="Fullscreen view"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[92vh] object-contain rounded-lg shadow-2xl"
          />
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Main Modal Shell */}
      <div
        id="project-modal-content"
        className={`relative w-full max-w-5xl min-h-screen sm:min-h-0 sm:max-h-[92vh] sm:rounded-2xl flex flex-col overflow-y-auto shadow-2xl transition-colors duration-300 ${
          isLight
            ? 'bg-white text-neutral-900 border border-black/15'
            : 'bg-[#0e0e10] text-[#eae7e2] border border-white/15'
        }`}
      >
        {/* Sticky Header Bar */}
        <div
          className={`sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 backdrop-blur-md border-b transition-colors duration-300 ${
            isLight
              ? 'bg-white/95 border-black/10'
              : 'bg-[#0e0e10]/95 border-white/10'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className={`font-mono text-xs uppercase tracking-widest ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {getLocalized(project.categoryLabel, language)}
            </span>
            <span className={isLight ? 'text-neutral-400' : 'text-neutral-600'}>•</span>
            <span className={`font-mono text-xs ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className={`px-3 py-1.5 rounded-full border font-mono text-[11px] uppercase tracking-wider transition-colors ${
                isLight
                  ? 'border-black/15 text-neutral-600 hover:text-black hover:border-black/30'
                  : 'border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
              }`}
            >
              {copiedLink ? (
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <Check className="w-3 h-3" /> {UI.modal.linkCopied[language]}
                </span>
              ) : (
                <span>{UI.modal.share[language]}</span>
              )}
            </button>

            <button
              id="close-modal-btn"
              type="button"
              onClick={onClose}
              className={`p-2 rounded-full border transition-all ${
                isLight
                  ? 'border-black/15 bg-black/5 text-neutral-700 hover:bg-black hover:text-white'
                  : 'border-white/15 bg-white/5 text-neutral-300 hover:bg-white hover:text-black'
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Hero Cover Image — Photo en premier avant le texte et l'explication */}
          {project.behanceUrl ? (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`modal-hero-behance-${project.id}`}
              className={`group cursor-pointer relative block rounded-xl overflow-hidden border aspect-[16/10] shadow-2xl transition-all duration-300 ${
                isLight
                  ? 'border-black/15 hover:border-black/35 bg-neutral-100'
                  : 'border-white/15 hover:border-white/40 bg-neutral-950'
              }`}
              title={UI.modal.openOnBehance[language]}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 px-3.5 py-2 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 font-mono text-xs shadow-lg">
                <span>{UI.modal.viewOnBehance[language]}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="font-mono text-xs text-neutral-300 flex items-center gap-2">
                  <span>{UI.modal.officialLink[language]}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ) : (
            <div
              onClick={() => setActiveImage(project.coverImage)}
              className={`group cursor-zoom-in relative rounded-xl overflow-hidden border aspect-[16/10] shadow-2xl ${
                isLight ? 'border-black/15 bg-neutral-100' : 'border-white/15 bg-neutral-950'
              }`}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          )}

          {/* Title & Statement (Texte et Explication) */}
          <div>
            <span className={`font-mono text-xs uppercase tracking-widest block mb-2 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {project.client}
            </span>
            <h1 className={`font-editorial-display text-4xl sm:text-5xl md:text-6xl tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>
              {project.title}
            </h1>
            <p className={`mt-2 font-serif italic text-xl sm:text-2xl ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
              {getLocalized(project.subtitle, language)}
            </p>

            <div className={`mt-8 p-6 sm:p-8 rounded-xl border ${
              isLight ? 'bg-black/[0.02] border-black/10' : 'bg-white/[0.02] border-white/10'
            }`}>
              <span className={`font-mono text-[11px] uppercase tracking-widest block mb-2 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {UI.modal.statement[language]}
              </span>
              <p className={`font-editorial-serif italic text-xl sm:text-2xl leading-relaxed ${isLight ? 'text-neutral-900' : 'text-white'}`}>
                « {getLocalized(project.statement, language)} »
              </p>
            </div>
          </div>

          {/* Key Specs Bar */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border ${
            isLight ? 'border-black/10 bg-black/[0.015]' : 'border-white/10 bg-white/[0.01]'
          }`}>
            <div>
              <span className={`block font-mono text-[10px] uppercase tracking-wider ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {UI.modal.role[language]}
              </span>
              <span className={`block mt-1 font-sans text-xs ${isLight ? 'text-neutral-900 font-medium' : 'text-white'}`}>
                {getLocalized(project.role, language)}
              </span>
            </div>
            <div>
              <span className={`block font-mono text-[10px] uppercase tracking-wider ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {UI.modal.client[language]}
              </span>
              <span className={`block mt-1 font-sans text-xs ${isLight ? 'text-neutral-900 font-medium' : 'text-white'}`}>
                {project.client}
              </span>
            </div>
            <div>
              <span className={`block font-mono text-[10px] uppercase tracking-wider ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {UI.modal.typography[language]}
              </span>
              <span className={`block mt-1 font-mono text-xs ${isLight ? 'text-neutral-900 font-medium' : 'text-white'}`}>
                {project.typography}
              </span>
            </div>
            <div>
              <span className={`block font-mono text-[10px] uppercase tracking-wider ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {UI.modal.palette[language]}
              </span>
              <div className="flex items-center gap-1.5 mt-1.5">
                {project.palette.map((color, cIdx) => (
                  <span
                    key={cIdx}
                    className="w-4 h-4 rounded-full border border-black/10 dark:border-white/20 shadow-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Concept narrative & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            <div className="md:col-span-7 space-y-4">
              <h2 className={`font-mono text-xs uppercase tracking-widest ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {UI.modal.concept[language]}
              </h2>
              <p className={`font-sans text-base leading-relaxed ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                {getLocalized(project.concept, language)}
              </p>

              {project.linkedinMention && (
                <div className={`mt-4 p-4 rounded-lg border-l-2 text-xs font-mono ${
                  isLight
                    ? 'bg-black/[0.02] border-black/40 text-neutral-600'
                    : 'bg-white/[0.02] border-white/40 text-neutral-400'
                }`}>
                  {project.linkedinMention}
                </div>
              )}
            </div>

            <div className="md:col-span-5 space-y-4">
              <h2 className={`font-mono text-xs uppercase tracking-widest ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {UI.modal.deliverables[language]}
              </h2>
              <ul className="space-y-2.5">
                {getLocalizedList(project.deliverables, language).map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2.5 text-xs font-mono ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isLight ? 'bg-black' : 'bg-white'}`}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {project.collaborators && project.collaborators.length > 0 && (
                <div className={`pt-4 border-t ${isLight ? 'border-black/10' : 'border-white/10'}`}>
                  <span className={`font-mono text-[10px] uppercase tracking-wider block mb-2 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    {UI.modal.team[language]}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.collaborators.map((collaborator, cIdx) => (
                      <span
                        key={cIdx}
                        className={`px-2.5 py-1 rounded-md border text-[11px] font-mono ${
                          isLight
                            ? 'bg-black/[0.03] border-black/10 text-neutral-800'
                            : 'bg-white/[0.04] border-white/10 text-neutral-300'
                        }`}
                      >
                        {collaborator}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.behanceUrl && (
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono uppercase tracking-wider transition-all ${
                      isLight
                        ? 'border-black/20 bg-black text-white hover:bg-neutral-800 shadow-sm'
                        : 'border-white/20 bg-white/[0.04] text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    <span>{UI.modal.viewOnBehance[language]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {project.stats && (
                    <div className={`inline-flex items-center gap-3 px-3 py-2 rounded-xl border font-mono text-xs ${
                      isLight
                        ? 'bg-black/[0.02] border-black/10 text-neutral-600'
                        : 'bg-white/[0.02] border-white/10 text-neutral-400'
                    }`}>
                      {project.stats.views !== undefined && (
                        <span className="inline-flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{project.stats.views}</span>
                        </span>
                      )}
                      {project.stats.appreciations !== undefined && (
                        <span className={`inline-flex items-center gap-1.5 ${isLight ? 'text-neutral-900 font-medium' : 'text-neutral-300'}`}>
                          <ThumbsUp className="w-3 h-3 text-amber-500" />
                          <span>{project.stats.appreciations}</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation (Prev / Next project) */}
        <div
          className={`sticky bottom-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 backdrop-blur-md border-t transition-colors duration-300 ${
            isLight
              ? 'bg-white/95 border-black/10'
              : 'bg-[#0e0e10]/95 border-white/10'
          }`}
        >
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors ${
              isLight
                ? 'text-neutral-600 hover:text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{prevProject.title}</span>
            <span className="sm:hidden">{UI.modal.prevMobile[language]}</span>
          </button>

          <span className={`font-mono text-xs ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
            {currentIndex + 1} / {projects.length}
          </span>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors ${
              isLight
                ? 'text-neutral-600 hover:text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="hidden sm:inline">{nextProject.title}</span>
            <span className="sm:hidden">{UI.modal.nextMobile[language]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

