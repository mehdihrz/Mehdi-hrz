import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Language } from '../types';
import { AmbientSound } from './AmbientSound';
import { useTheme } from '../context/ThemeContext';
import { UI, LANGUAGES } from '../data/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: UI.header.nav.travaux[language], href: '#travaux' },
    { label: UI.header.nav.manifeste[language], href: '#manifeste' },
    { label: UI.header.nav.apropos[language], href: '#a-propos' },
    { label: UI.header.nav.contact[language], href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? isLight
            ? 'bg-[#fcfbf9]/92 backdrop-blur-xl border-b border-black/[0.08] py-3.5 shadow-xs'
            : 'bg-[#0b0b0c]/90 backdrop-blur-xl border-b border-white/[0.07] py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#"
          id="header-brand-link"
          className="group flex flex-col focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <span className={`font-editorial-display text-base sm:text-lg font-bold tracking-tight transition-colors ${
              isLight ? 'text-black group-hover:text-neutral-600' : 'text-white group-hover:text-neutral-300'
            }`}>
              MEHDI HARZALLAH
            </span>
            <span className={`hidden sm:inline-block w-1.5 h-1.5 rounded-full ${isLight ? 'bg-neutral-400' : 'bg-neutral-600'}`}></span>
            <span className={`hidden sm:inline-block font-mono text-[11px] tracking-widest uppercase ${
              isLight ? 'text-neutral-500' : 'text-neutral-400'
            }`}>
              {UI.header.title[language]}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5 sm:hidden">
            <span className={`font-mono text-[10px] tracking-widest uppercase ${
              isLight ? 'text-neutral-500' : 'text-neutral-400'
            }`}>
              {UI.header.title[language]}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  id={`nav-link-${item.href.replace('#', '')}`}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 relative group py-1 ${
                    isLight
                      ? 'text-neutral-600 hover:text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isLight ? 'bg-black' : 'bg-neutral-300'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>

          <div className={`h-4 w-[1px] ${isLight ? 'bg-black/10' : 'bg-white/15'}`}></div>

          {/* Social Links */}
          <div className="flex items-center gap-3.5">
            <a
              href="https://www.behance.net/mehdihrz"
              target="_blank"
              rel="noopener noreferrer"
              id="header-behance-link"
              className={`inline-flex items-center gap-1 font-mono text-xs tracking-wider uppercase transition-colors ${
                isLight ? 'text-neutral-600 hover:text-black' : 'text-neutral-400 hover:text-white'
              }`}
              title="Behance Portfolio"
            >
              <span>Behance</span>
              <ArrowUpRight className={`w-3 h-3 ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`} />
            </a>

            <a
              href="https://www.linkedin.com/in/mehdiharzallah"
              target="_blank"
              rel="noopener noreferrer"
              id="header-linkedin-link"
              className={`inline-flex items-center gap-1 font-mono text-xs tracking-wider uppercase transition-colors ${
                isLight ? 'text-neutral-600 hover:text-black' : 'text-neutral-400 hover:text-white'
              }`}
              title="LinkedIn Profile"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className={`w-3 h-3 ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`} />
            </a>
          </div>

          <div className={`h-4 w-[1px] ${isLight ? 'bg-black/10' : 'bg-white/15'}`}></div>

          {/* Controls: Audio, Theme Toggle & Language */}
          <div className="flex items-center gap-2.5">
            <AmbientSound language={language} />

            {/* Theme Selector: Fond Noir / Fond Blanc */}
            <div
              className={`inline-flex p-0.5 rounded-full border backdrop-blur-md transition-colors ${
                isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-black/40'
              }`}
              title={UI.header.theme.tooltip[language]}
            >
              <button
                id="theme-dark-btn"
                type="button"
                onClick={() => setTheme('dark')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : isLight
                    ? 'text-neutral-600 hover:text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-label="Fond Noir"
              >
                <Moon className="w-3 h-3" />
                <span>{UI.header.theme.dark[language]}</span>
              </button>
              <button
                id="theme-light-btn"
                type="button"
                onClick={() => setTheme('light')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full transition-all duration-200 ${
                  theme === 'light'
                    ? 'bg-black text-white font-semibold shadow-sm'
                    : isLight
                    ? 'text-neutral-600 hover:text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-label="Fond Blanc"
              >
                <Sun className="w-3 h-3" />
                <span>{UI.header.theme.light[language]}</span>
              </button>
            </div>

            {/* Language Toggle: FR | EN | ES | AR */}
            <div
              className={`inline-flex p-0.5 rounded-full border backdrop-blur-md transition-colors ${
                isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-black/40'
              }`}
              role="group"
              aria-label="Language selection"
            >
              {LANGUAGES.map((langOpt) => {
                const isActive = language === langOpt.code;
                return (
                  <button
                    key={langOpt.code}
                    id={`lang-${langOpt.code}-btn`}
                    type="button"
                    onClick={() => onLanguageChange(langOpt.code)}
                    title={langOpt.label}
                    className={`px-2 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full transition-all duration-200 ${
                      isActive
                        ? isLight
                          ? 'bg-black text-white font-semibold shadow-sm'
                          : 'bg-white text-black font-semibold shadow-sm'
                        : isLight
                        ? 'text-neutral-600 hover:text-black'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {langOpt.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Mobile controls & toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile quick theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-lg border transition-colors ${
              isLight
                ? 'border-black/10 bg-black/5 text-neutral-800'
                : 'border-white/10 bg-white/5 text-neutral-300'
            }`}
            aria-label={language === 'fr' ? 'Basculer fond blanc / noir' : 'Toggle dark / light background'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <AmbientSound language={language} />

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border transition-colors ${
              isLight
                ? 'border-black/10 bg-black/5 text-neutral-800'
                : 'border-white/10 bg-white/5 text-neutral-300 hover:text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className={`md:hidden border-b px-6 py-6 transition-all backdrop-blur-2xl ${
            isLight
              ? 'border-black/10 bg-[#fcfbf9]/98 text-neutral-900'
              : 'border-white/10 bg-[#0b0b0c]/98 text-neutral-200'
          }`}
        >
          <ul className="space-y-4 mb-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-editorial-display text-lg tracking-tight py-1 transition-colors ${
                    isLight
                      ? 'text-neutral-800 hover:text-black'
                      : 'text-neutral-200 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={`pt-4 border-t flex flex-col gap-4 ${isLight ? 'border-black/10' : 'border-white/10'}`}>
            {/* Theme switcher in mobile drawer */}
            <div className="flex items-center justify-between">
              <span className={`font-mono text-xs uppercase tracking-wider ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
                {UI.header.theme.tooltip[language]}
              </span>
              <div className={`inline-flex p-0.5 rounded-full border ${
                isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-black/40'
              }`}>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-full transition-all ${
                    theme === 'dark'
                      ? 'bg-white text-black font-semibold shadow-xs'
                      : isLight ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  <Moon className="w-3 h-3" />
                  <span>{UI.header.theme.dark[language]}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-full transition-all ${
                    theme === 'light'
                      ? 'bg-black text-white font-semibold shadow-xs'
                      : isLight ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  <Sun className="w-3 h-3" />
                  <span>{UI.header.theme.light[language]}</span>
                </button>
              </div>
            </div>

            {/* Language switcher */}
            <div className="flex items-center justify-between">
              <span className={`font-mono text-xs uppercase tracking-wider ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
                {UI.header.langLabel[language]}
              </span>
              <div className={`inline-flex p-0.5 rounded-full border ${
                isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-black/40'
              }`}>
                {LANGUAGES.map((langOpt) => (
                  <button
                    key={langOpt.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(langOpt.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2.5 py-1 text-xs font-mono rounded-full transition-all ${
                      language === langOpt.code
                        ? isLight ? 'bg-black text-white font-semibold' : 'bg-white text-black font-semibold'
                        : isLight ? 'text-neutral-600' : 'text-neutral-400'
                    }`}
                  >
                    {langOpt.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.behance.net/mehdihrz"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isLight ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>Behance</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mehdiharzallah"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isLight ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
