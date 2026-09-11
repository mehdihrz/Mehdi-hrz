import React from 'react';
import { ArrowDown, Compass } from 'lucide-react';
import { Language } from '../types';
import { useTheme } from '../context/ThemeContext';
import { UI } from '../data/translations';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle architectural ambient background grid/grain */}
      <div className={`absolute inset-0 pointer-events-none ${isLight ? 'opacity-[0.04]' : 'opacity-[0.03]'}`}>
        <div className={`w-full h-full border-x grid grid-cols-4 ${isLight ? 'border-black/30' : 'border-white/40'}`}>
          <div className={isLight ? 'border-r border-black/20' : 'border-r border-white/30'}></div>
          <div className={isLight ? 'border-r border-black/20' : 'border-r border-white/30'}></div>
          <div className={isLight ? 'border-r border-black/20' : 'border-r border-white/30'}></div>
          <div></div>
        </div>
      </div>

      {/* Top micro-meta badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
        <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase transition-colors ${
          isLight
            ? 'border-black/10 bg-black/[0.03] text-neutral-800'
            : 'border-white/10 bg-white/[0.03] text-neutral-300'
        }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{UI.hero.badge[language]}</span>
        </div>

        <div className={`hidden sm:flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase ${
          isLight ? 'text-neutral-400' : 'text-neutral-500'
        }`}>
          <span>MMXXIV</span>
          <span>/</span>
          <span>{UI.hero.tag[language]}</span>
        </div>
      </div>

      {/* Central Editorial Statement */}
      <div className="relative z-10 my-auto py-12 sm:py-16 max-w-5xl">
        <h1 className={`font-editorial-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.04] tracking-[-0.03em] ${
          isLight ? 'text-black' : 'text-white'
        }`}>
          {UI.hero.title1[language]}
          <span className={`font-editorial-serif italic font-normal ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
            {UI.hero.titleHighlight[language]}
          </span>
          .
          <br />
          {UI.hero.title2[language]}
          <br />
          <span className={`font-light ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
            {UI.hero.title3[language]}
          </span>
        </h1>

        <p className={`mt-8 sm:mt-10 font-sans text-lg sm:text-xl max-w-2xl font-normal leading-relaxed ${
          isLight ? 'text-neutral-700' : 'text-neutral-300'
        }`}>
          {UI.hero.description[language]}
        </p>

        {/* Quick action buttons */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#travaux"
            id="hero-explore-btn"
            className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
              isLight
                ? 'bg-black text-white hover:bg-neutral-800 hover:shadow-[0_0_24px_rgba(0,0,0,0.15)]'
                : 'bg-[#eae7e2] text-[#0b0b0c] hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]'
            }`}
          >
            <span>{UI.hero.exploreBtn[language]}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#manifeste"
            id="hero-manifesto-btn"
            className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
              isLight
                ? 'border-black/15 bg-black/[0.02] text-neutral-800 hover:text-black hover:border-black/40'
                : 'border-white/15 bg-white/[0.02] text-neutral-300 hover:text-white hover:border-white/40'
            }`}
          >
            <Compass className={`w-3.5 h-3.5 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`} />
            <span>{UI.hero.manifestoBtn[language]}</span>
          </a>
        </div>
      </div>

      {/* Bottom metrics / credentials footer */}
      <div className={`relative z-10 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 ${
        isLight ? 'border-black/10' : 'border-white/10'
      }`}>
        <div>
          <span className={`block font-mono text-2xl sm:text-3xl font-light tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            {UI.hero.metrics.years.value}
          </span>
          <span className={`block mt-1 font-mono text-[11px] uppercase tracking-wider ${
            isLight ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {UI.hero.metrics.years.label[language]}
          </span>
        </div>

        <div>
          <span className={`block font-mono text-2xl sm:text-3xl font-light tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            {UI.hero.metrics.scope.value}
          </span>
          <span className={`block mt-1 font-mono text-[11px] uppercase tracking-wider ${
            isLight ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {UI.hero.metrics.scope.label[language]}
          </span>
        </div>

        <div>
          <span className={`block font-mono text-2xl sm:text-3xl font-light tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            {UI.hero.metrics.exhibitions.value}
          </span>
          <span className={`block mt-1 font-mono text-[11px] uppercase tracking-wider ${
            isLight ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {UI.hero.metrics.exhibitions.label[language]}
          </span>
        </div>

        <div>
          <span className={`block font-mono text-2xl sm:text-3xl font-light tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            {UI.hero.metrics.precision.value[language]}
          </span>
          <span className={`block mt-1 font-mono text-[11px] uppercase tracking-wider ${
            isLight ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {UI.hero.metrics.precision.label[language]}
          </span>
        </div>
      </div>
    </section>
  );
};

