import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { useTheme } from '../context/ThemeContext';
import { UI } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Europe/Paris or Tunis timezone
      const timeString = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now);
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-16 px-6 sm:px-8 transition-colors ${
      isLight ? 'border-black/10 bg-neutral-100' : 'border-white/10 bg-[#09090a]'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <span className={`font-editorial-display text-2xl sm:text-3xl font-bold tracking-tight block ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              MEHDI HARZALLAH
            </span>
            <p className={`mt-1 font-mono text-xs uppercase tracking-widest ${
              isLight ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              {UI.footer.role[language]}
            </p>
          </div>

          <div className={`flex flex-wrap items-center gap-8 font-mono text-xs uppercase tracking-wider ${
            isLight ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            <div>
              <span className={`block text-[10px] ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>MARRAKECH / TUNIS</span>
              <span className={isLight ? 'text-black font-medium' : 'text-white'}>{time || '12:00:00'} CET</span>
            </div>

            <div>
              <span className={`block text-[10px] ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>{UI.footer.status[language]}</span>
              <span className="text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {UI.footer.active[language]}
              </span>
            </div>

            <button
              type="button"
              id="footer-back-to-top"
              onClick={scrollToTop}
              className={`inline-flex items-center gap-1 transition-colors ${
                isLight ? 'text-black hover:text-neutral-600' : 'text-white hover:text-neutral-300'
              }`}
            >
              <span>{UI.footer.top[language]}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          isLight ? 'border-black/[0.08] text-neutral-600' : 'border-white/[0.07] text-neutral-400'
        }`}>
          <p>
            © {new Date().getFullYear()} Mehdi Harzallah. {UI.footer.copyright[language]}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.behance.net/mehdihrz"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors inline-flex items-center gap-1 ${
                isLight ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              <span>Behance</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/mehdiharzallah"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors inline-flex items-center gap-1 ${
                isLight ? 'hover:text-black' : 'hover:text-white'
              }`}
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
