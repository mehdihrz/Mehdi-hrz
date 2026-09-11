import React, { useState } from 'react';
import { Language } from '../types';
import { Mail, Copy, Check, ArrowUpRight, Send, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { UI } from '../data/translations';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'direction-creative',
    message: '',
  });

  const emailAddress = 'mehdiharzallah@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className={`py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t transition-colors ${
      isLight ? 'border-black/10' : 'border-white/10'
    }`}>
      {/* Eyebrow / Meta */}
      <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-4 ${
        isLight ? 'text-neutral-500' : 'text-neutral-400'
      }`}>
        <span>04</span>
        <span>/</span>
        <span>{UI.contact.eyebrow[language]}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact Philosophy & Direct Links */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className={`font-editorial-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              {UI.contact.title1[language]} <br />
              <span className={`font-editorial-serif italic font-normal ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                {UI.contact.titleHighlight[language]}
              </span>
              .
            </h2>
            <p className={`mt-4 font-sans text-base leading-relaxed ${
              isLight ? 'text-neutral-700' : 'text-neutral-300'
            }`}>
              {UI.contact.description[language]}
            </p>
          </div>

          {/* Email Direct Card */}
          <div className={`p-6 rounded-2xl border space-y-4 ${
            isLight
              ? 'border-black/10 bg-black/[0.015]'
              : 'border-white/15 bg-white/[0.02]'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`font-mono text-xs uppercase tracking-widest ${
                isLight ? 'text-neutral-500' : 'text-neutral-400'
              }`}>
                {UI.contact.directEmail[language]}
              </span>
              <Mail className={`w-4 h-4 ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`} />
            </div>

            <a
              href={`mailto:${emailAddress}`}
              className={`block font-mono text-lg sm:text-xl transition-colors break-all ${
                isLight ? 'text-black hover:text-neutral-700' : 'text-white hover:text-neutral-300'
              }`}
            >
              {emailAddress}
            </a>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all ${
                  isLight
                    ? 'border-black/15 bg-black/[0.04] text-neutral-800 hover:text-black hover:border-black/30'
                    : 'border-white/10 bg-white/[0.04] text-neutral-300 hover:text-white hover:border-white/30'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {UI.contact.copied[language]}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{UI.contact.copyBtn[language]}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}?subject=Direction%20Créative%20—%20Contact`}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-colors ${
                  isLight
                    ? 'bg-black text-white hover:bg-neutral-800'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                <span>{UI.contact.writeEmail[language]}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Locations & Timing */}
          <div className={`grid grid-cols-2 gap-4 text-xs font-mono ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
            <div className={`p-4 rounded-xl border space-y-1 ${
              isLight ? 'border-black/10 bg-black/[0.01]' : 'border-white/10 bg-white/[0.01]'
            }`}>
              <div className={`flex items-center gap-1.5 ${isLight ? 'text-neutral-800' : 'text-neutral-300'}`}>
                <MapPin className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider">{UI.contact.locationLabel[language]}</span>
              </div>
              <p className={isLight ? 'text-black font-medium' : 'text-white'}>Marrakech & Tunis</p>
              <p className={`text-[11px] ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>{UI.contact.mobility[language]}</p>
            </div>

            <div className={`p-4 rounded-xl border space-y-1 ${
              isLight ? 'border-black/10 bg-black/[0.01]' : 'border-white/10 bg-white/[0.01]'
            }`}>
              <div className={`flex items-center gap-1.5 ${isLight ? 'text-neutral-800' : 'text-neutral-300'}`}>
                <Clock className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider">{UI.contact.timezoneTitle[language]}</span>
              </div>
              <p className={isLight ? 'text-black font-medium' : 'text-white'}>UTC +1 (CET)</p>
              <p className={`text-[11px] ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>{UI.contact.responseNotice[language]}</p>
            </div>
          </div>

          {/* Direct Social Links */}
          <div className={`pt-4 border-t flex items-center gap-6 ${isLight ? 'border-black/10' : 'border-white/10'}`}>
            <a
              href="https://www.behance.net/mehdihrz"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-behance-link"
              className={`inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest transition-colors ${
                isLight ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
              }`}
            >
              <span>Behance / mehdihrz</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.linkedin.com/in/mehdiharzallah"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin-link"
              className={`inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest transition-colors ${
                isLight ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
              }`}
            >
              <span>LinkedIn / mehdiharzallah</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className={`p-8 sm:p-10 rounded-2xl border ${
            isLight
              ? 'border-black/10 bg-black/[0.015]'
              : 'border-white/15 bg-white/[0.02]'
          }`}>
            {formSubmitted ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto text-emerald-500 ${
                  isLight ? 'border-black/20 bg-black/5' : 'border-white/20 bg-white/5'
                }`}>
                  <Check className="w-6 h-6" />
                </div>
                <h3 className={`font-editorial-display text-3xl ${isLight ? 'text-black' : 'text-white'}`}>
                  {UI.contact.formSuccessTitle[language]}
                </h3>
                <p className={`font-sans text-sm max-w-md mx-auto leading-relaxed ${
                  isLight ? 'text-neutral-600' : 'text-neutral-400'
                }`}>
                  {UI.contact.formSuccessDesc[language]}
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        discipline: 'direction-creative',
                        message: '',
                      });
                    }}
                    className={`px-6 py-2.5 rounded-full border text-xs font-mono uppercase tracking-wider transition-colors ${
                      isLight
                        ? 'border-black/20 text-neutral-800 hover:text-black hover:border-black/40'
                        : 'border-white/20 text-neutral-300 hover:text-white hover:border-white/40'
                    }`}
                  >
                    {UI.contact.anotherInquiry[language]}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className={`font-mono text-xs uppercase tracking-widest block mb-1 ${
                    isLight ? 'text-neutral-500' : 'text-neutral-400'
                  }`}>
                    {UI.contact.formEyebrow[language]}
                  </span>
                  <h3 className={`font-editorial-display text-2xl ${isLight ? 'text-black' : 'text-white'}`}>
                    {UI.contact.formVision[language]}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className={`block font-mono text-xs uppercase tracking-wider ${
                        isLight ? 'text-neutral-600' : 'text-neutral-400'
                      }`}
                    >
                      {UI.contact.name[language]} *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder={UI.contact.namePlaceholder[language]}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors font-sans focus:outline-none ${
                        isLight
                          ? 'border-black/15 bg-white text-black placeholder-neutral-400 focus:border-black'
                          : 'border-white/10 bg-white/[0.03] text-white placeholder-neutral-600 focus:border-white/40'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className={`block font-mono text-xs uppercase tracking-wider ${
                        isLight ? 'text-neutral-600' : 'text-neutral-400'
                      }`}
                    >
                      {UI.contact.email[language]} *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="nom@domaine.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors font-sans focus:outline-none ${
                        isLight
                          ? 'border-black/15 bg-white text-black placeholder-neutral-400 focus:border-black'
                          : 'border-white/10 bg-white/[0.03] text-white placeholder-neutral-600 focus:border-white/40'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-discipline"
                    className={`block font-mono text-xs uppercase tracking-wider ${
                      isLight ? 'text-neutral-600' : 'text-neutral-400'
                    }`}
                  >
                    {UI.contact.discipline[language]}
                  </label>
                  <select
                    id="contact-discipline"
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors font-sans focus:outline-none ${
                      isLight
                        ? 'border-black/15 bg-white text-black focus:border-black'
                        : 'border-white/10 bg-[#121214] text-white focus:border-white/40'
                    }`}
                  >
                    <option value="direction-creative">
                      {UI.contact.disciplines['direction-creative'][language]}
                    </option>
                    <option value="identite-visuelle">
                      {UI.contact.disciplines['identite-visuelle'][language]}
                    </option>
                    <option value="campagne-publicitaire">
                      {UI.contact.disciplines['campagne-publicitaire'][language]}
                    </option>
                    <option value="photographie-auteur">
                      {UI.contact.disciplines['photographie-auteur'][language]}
                    </option>
                    <option value="digital-uiux">
                      {UI.contact.disciplines['digital-uiux'][language]}
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className={`block font-mono text-xs uppercase tracking-wider ${
                      isLight ? 'text-neutral-600' : 'text-neutral-400'
                    }`}
                  >
                    {UI.contact.message[language]} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder={UI.contact.messagePlaceholder[language]}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors font-sans resize-none focus:outline-none ${
                      isLight
                        ? 'border-black/15 bg-white text-black placeholder-neutral-400 focus:border-black'
                        : 'border-white/10 bg-white/[0.03] text-white placeholder-neutral-600 focus:border-white/40'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className={`w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    isLight
                      ? 'bg-black text-white hover:bg-neutral-800'
                      : 'bg-white text-black hover:bg-neutral-200'
                  }`}
                >
                  <span>{UI.contact.submit[language]}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
