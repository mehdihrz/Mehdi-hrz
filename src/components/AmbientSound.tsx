import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Language } from '../types';
import { useTheme } from '../context/ThemeContext';
import { UI } from '../data/translations';

interface AmbientSoundProps {
  language: Language;
}

export const AmbientSound: React.FC<AmbientSoundProps> = ({ language }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const subOscRef = useRef<OscillatorNode | null>(null);
  const stopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanupAudio = () => {
    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }

    try {
      oscillatorRef.current?.stop();
    } catch {
      // ignore
    }
    try {
      subOscRef.current?.stop();
    } catch {
      // ignore
    }
    oscillatorRef.current = null;
    subOscRef.current = null;
    gainNodeRef.current = null;

    const ctx = audioContextRef.current;
    audioContextRef.current = null;
    if (ctx && ctx.state !== 'closed') {
      try {
        ctx.close().catch(() => {
          // Ignore close error if already in progress or closed
        });
      } catch {
        // Ignore synchronous close error
      }
    }
  };

  const startSound = () => {
    try {
      cleanupAudio();

      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft deep fundamental drone (~55Hz / A1)
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, ctx.currentTime);

      // Low pass warm filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, ctx.currentTime);

      // Subtle overtone (110Hz)
      const subOsc = ctx.createOscillator();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(110, ctx.currentTime);
      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.015, ctx.currentTime);

      osc.connect(filter);
      subOsc.connect(subGain);
      subGain.connect(filter);
      filter.connect(masterGain);

      osc.start();
      subOsc.start();

      oscillatorRef.current = osc;
      subOscRef.current = subOsc;
      setIsPlaying(true);
    } catch {
      // Audio context might be restricted before user gesture
    }
  };

  const stopSound = () => {
    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }

    const currentGain = gainNodeRef.current;
    const ctx = audioContextRef.current;

    if (ctx && currentGain && ctx.state !== 'closed') {
      try {
        currentGain.gain.setValueAtTime(currentGain.gain.value, ctx.currentTime);
        currentGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      } catch {
        // ignore
      }

      stopTimeoutRef.current = setTimeout(() => {
        cleanupAudio();
        setIsPlaying(false);
      }, 1300);
    } else {
      cleanupAudio();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  };

  useEffect(() => {
    return () => {
      cleanupAudio();
    };
  }, []);

  return (
    <button
      id="ambient-sound-toggle"
      onClick={toggleSound}
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md text-xs tracking-wider uppercase transition-all duration-300 ${
        isLight
          ? 'border-black/10 bg-black/5 text-neutral-600 hover:text-black hover:border-black/30'
          : 'border-white/10 bg-black/40 text-neutral-400 hover:text-white hover:border-white/30'
      }`}
      title={UI.header.ambient.tooltip[language]}
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Volume2 className={`w-3.5 h-3.5 ${isLight ? 'text-neutral-800' : 'text-neutral-200'}`} />
          <span className={`font-mono text-[10px] ${isLight ? 'text-neutral-800 font-medium' : 'text-neutral-300'}`}>
            {UI.header.ambient.active[language]}
          </span>
        </>
      ) : (
        <>
          <VolumeX className={`w-3.5 h-3.5 ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`} />
          <span className={`font-mono text-[10px] ${isLight ? 'text-neutral-500' : 'text-neutral-500'}`}>
            {UI.header.ambient.inactive[language]}
          </span>
        </>
      )}
    </button>
  );
};
