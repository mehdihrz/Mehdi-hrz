import React, { useState } from 'react';
import { SKILLS_LIST, CLIENTS_COLLABORATORS, AGENCY_EXPERIENCE } from '../data/projects';
import { Language } from '../types';
import { ArrowUpRight, Eye, ThumbsUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { UI, getLocalized } from '../data/translations';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mehdi_profile_photo');
      if (saved) return saved;
    }
    return '/Mehdi Harzallah.jpg';
  });

  return (
    <section id="a-propos" className={`py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t transition-colors ${
      isLight ? 'border-black/10' : 'border-white/10'
    }`}>
      {/* Eyebrow / Meta */}
      <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-4 ${
        isLight ? 'text-neutral-500' : 'text-neutral-400'
      }`}>
        <span>03</span>
        <span>/</span>
        <span>{UI.about.eyebrow[language]}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bio & Identity */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className={`font-editorial-display text-4xl sm:text-5xl tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            Mehdi Harzallah
          </h2>
          <p className={`font-mono text-xs uppercase tracking-widest ${
            isLight ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            {UI.about.subtitle[language]}
          </p>

          <div className={`relative rounded-2xl overflow-hidden border aspect-[4/5] shadow-2xl transition-all duration-300 ${
            isLight
              ? 'border-black/15 bg-neutral-100 shadow-neutral-300'
              : 'border-white/15 bg-neutral-900 shadow-black'
          }`}>
            <img
              src={photoSrc}
              alt="Mehdi Harzallah — Directeur Créatif"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              onError={() => {
                if (photoSrc === '/Mehdi Harzallah.jpg') {
                  setPhotoSrc('/mehdi.jpg');
                } else if (photoSrc === '/mehdi.jpg') {
                  setPhotoSrc('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop');
                }
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 pointer-events-none">
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-300 block">
                  {UI.about.atelier[language]}
                </span>
                <span className="font-editorial-serif italic text-lg text-white">
                  Marrakech — Tunis — Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Real Behance metrics badge */}
          <div className={`p-4 rounded-xl border flex items-center justify-between font-mono text-xs ${
            isLight
              ? 'bg-black/[0.02] border-black/10 text-neutral-600'
              : 'bg-white/[0.02] border-white/10 text-neutral-400'
          }`}>
            <span className="inline-flex items-center gap-2">
              <Eye className={`w-4 h-4 ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`} />
              <span>17,980+ {UI.about.views[language]}</span>
            </span>
            <span className={`inline-flex items-center gap-2 ${isLight ? 'text-neutral-800' : 'text-neutral-300'}`}>
              <ThumbsUp className="w-3.5 h-3.5 text-amber-500" />
              <span>845+ {UI.about.appreciations[language]}</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/mehdiharzallah"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border text-xs font-mono uppercase tracking-wider transition-all ${
                isLight
                  ? 'border-black/15 bg-black/[0.02] text-neutral-800 hover:text-black hover:border-black/40'
                  : 'border-white/15 bg-white/[0.02] text-neutral-300 hover:text-white hover:border-white/40'
              }`}
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.behance.net/mehdihrz"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border text-xs font-mono uppercase tracking-wider transition-all ${
                isLight
                  ? 'border-black/15 bg-black/[0.02] text-neutral-800 hover:text-black hover:border-black/40'
                  : 'border-white/15 bg-white/[0.02] text-neutral-300 hover:text-white hover:border-white/40'
              }`}
            >
              <span>Behance</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: In-depth Biography & Trajectory */}
        <div className={`lg:col-span-7 space-y-8 font-sans text-base leading-relaxed ${
          isLight ? 'text-neutral-700' : 'text-neutral-300'
        }`}>
          <div className="space-y-5">
            <p className={`font-editorial-serif italic text-2xl sm:text-3xl font-normal leading-relaxed ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              {UI.about.quote[language]}
            </p>

            <p>{UI.about.p1[language]}</p>
            <p>{UI.about.p2[language]}</p>
            <p>{UI.about.p3[language]}</p>
          </div>

          {/* Agency Trajectory Highlights */}
          <div className={`pt-6 border-t space-y-4 ${isLight ? 'border-black/10' : 'border-white/10'}`}>
            <h3 className={`font-mono text-xs uppercase tracking-widest ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {UI.about.trajectory[language]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AGENCY_EXPERIENCE.map((exp, eIdx) => (
                <div
                  key={eIdx}
                  className={`p-3.5 rounded-xl border flex items-center justify-between ${
                    eIdx === 0
                      ? isLight
                        ? 'border-black/30 bg-black/[0.04] shadow-xs'
                        : 'border-white/30 bg-white/[0.05] shadow-sm'
                      : isLight
                      ? 'border-black/10 bg-black/[0.015]'
                      : 'border-white/10 bg-white/[0.02]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs font-medium block ${isLight ? 'text-black' : 'text-white'}`}>
                        {exp.agency}
                      </span>
                      {eIdx === 0 && (
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-semibold ${
                          isLight ? 'bg-black text-white' : 'bg-white text-black'
                        }`}>
                          {UI.about.current[language]}
                        </span>
                      )}
                    </div>
                    <span className={`text-[11px] block font-sans mt-0.5 ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
                      {getLocalized(exp.role, language)}
                    </span>
                  </div>
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    {exp.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services & Capabilities Matrix */}
      <div className={`mt-20 pt-16 border-t space-y-8 ${isLight ? 'border-black/10' : 'border-white/10'}`}>
        <div>
          <span className={`font-mono text-xs uppercase tracking-widest block mb-2 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
            {UI.about.practiceEyebrow[language]}
          </span>
          <h3 className={`font-editorial-display text-3xl sm:text-4xl tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>
            {UI.about.practiceTitle[language]}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_LIST.map((skillGroup, gIdx) => (
            <div
              key={gIdx}
              className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isLight
                  ? 'border-black/10 bg-black/[0.015]'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              <div>
                <span className={`font-mono text-[10px] block mb-2 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  0{gIdx + 1}
                </span>
                <h4 className={`font-editorial-display text-xl mb-4 ${isLight ? 'text-black' : 'text-white'}`}>
                  {getLocalized(skillGroup.category, language)}
                </h4>
                <ul className="space-y-2.5">
                  {skillGroup.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className={`text-xs font-mono flex items-start gap-2 ${
                        isLight ? 'text-neutral-700' : 'text-neutral-300'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        isLight ? 'bg-black/40' : 'bg-white/40'
                      }`}></span>
                      <span>{getLocalized(item, language)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Clients & Collaborations */}
      <div className={`mt-16 pt-12 border-t ${isLight ? 'border-black/10' : 'border-white/10'}`}>
        <span className={`font-mono text-xs uppercase tracking-widest block mb-6 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
          {UI.about.collabEyebrow[language]}
        </span>
        <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-sm uppercase tracking-wider ${
          isLight ? 'text-neutral-600' : 'text-neutral-400'
        }`}>
          {CLIENTS_COLLABORATORS.map((client, idx) => (
            <React.Fragment key={idx}>
              <span className={`transition-colors cursor-default ${
                isLight ? 'hover:text-black' : 'hover:text-white'
              }`}>{client}</span>
              {idx < CLIENTS_COLLABORATORS.length - 1 && (
                <span className={`hidden sm:inline ${isLight ? 'text-neutral-300' : 'text-neutral-700'}`}>•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
