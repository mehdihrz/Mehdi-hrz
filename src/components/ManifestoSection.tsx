import React, { useState } from 'react';
import { MANIFESTO_PILLARS } from '../data/projects';
import { Language } from '../types';
import { Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { UI, getLocalized } from '../data/translations';

interface ManifestoSectionProps {
  language: Language;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ language }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  return (
    <section id="manifeste" className={`py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t transition-colors ${
      isLight ? 'border-black/10' : 'border-white/10'
    }`}>
      {/* Eyebrow / Meta */}
      <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-4 ${
        isLight ? 'text-neutral-500' : 'text-neutral-400'
      }`}>
        <span>02</span>
        <span>/</span>
        <span>{UI.manifesto.eyebrow[language]}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Vision Statement */}
        <div className="lg:col-span-6 space-y-8">
          <h2 className={`font-editorial-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            {UI.manifesto.title1[language]} <br />
            <span className={`font-editorial-serif italic font-normal ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
              {UI.manifesto.titleHighlight[language]}
            </span>
            .
          </h2>

          <blockquote className={`relative p-8 rounded-2xl border transition-colors ${
            isLight ? 'border-black/10 bg-black/[0.02]' : 'border-white/10 bg-white/[0.02]'
          }`}>
            <Quote className={`w-8 h-8 mb-4 opacity-40 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`} />
            <p className={`font-editorial-serif italic text-2xl sm:text-3xl leading-relaxed ${
              isLight ? 'text-neutral-800' : 'text-neutral-200'
            }`}>
              {UI.manifesto.quote[language]}
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <div className={`w-6 h-[1px] ${isLight ? 'bg-neutral-400' : 'bg-neutral-500'}`}></div>
              <cite className={`font-mono text-xs uppercase tracking-widest not-italic ${
                isLight ? 'text-neutral-500' : 'text-neutral-400'
              }`}>
                {UI.manifesto.cite[language]}
              </cite>
            </footer>
          </blockquote>

          <div className={`font-sans text-base space-y-4 leading-relaxed ${
            isLight ? 'text-neutral-700' : 'text-neutral-300'
          }`}>
            <p>{UI.manifesto.p1[language]}</p>
            <p>{UI.manifesto.p2[language]}</p>
          </div>
        </div>

        {/* Right Column: Interactive 4 Pillars */}
        <div className="lg:col-span-6 space-y-4">
          {MANIFESTO_PILLARS.map((pillar, idx) => {
            const isActive = activePillarIndex === idx;

            return (
              <div
                key={pillar.number}
                id={`manifesto-pillar-${pillar.number}`}
                onClick={() => setActivePillarIndex(idx)}
                className={`cursor-pointer rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
                  isActive
                    ? isLight
                      ? 'border-black/30 bg-black/[0.04] shadow-md'
                      : 'border-white/40 bg-white/[0.04] shadow-xl'
                    : isLight
                    ? 'border-black/10 bg-black/[0.01] hover:border-black/20 hover:bg-black/[0.02]'
                    : 'border-white/10 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className={`font-mono text-xs uppercase tracking-widest ${
                    isLight ? 'text-neutral-500' : 'text-neutral-400'
                  }`}>
                    {pillar.number}
                  </span>
                  <span className={`font-mono text-[11px] italic ${
                    isLight ? 'text-neutral-500' : 'text-neutral-400'
                  }`}>
                    {getLocalized(pillar.subtitle, language)}
                  </span>
                </div>

                <h3 className={`font-editorial-display text-2xl sm:text-3xl ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  {getLocalized(pillar.title, language)}
                </h3>

                <p
                  className={`mt-3 font-sans text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                    isActive
                      ? isLight ? 'text-neutral-700 max-h-48 opacity-100' : 'text-neutral-300 max-h-48 opacity-100'
                      : isLight ? 'text-neutral-500 max-h-16 line-clamp-2' : 'text-neutral-400 max-h-16 line-clamp-2'
                  }`}
                >
                  {getLocalized(pillar.description, language)}
                </p>

                {isActive && (
                  <div className={`mt-4 pt-4 border-t flex items-center gap-2 ${
                    isLight ? 'border-black/10' : 'border-white/10'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-black' : 'bg-white'}`}></span>
                    <span className={`font-mono text-[10px] uppercase tracking-wider ${
                      isLight ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>
                      {UI.manifesto.pillarBadge[language]}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
