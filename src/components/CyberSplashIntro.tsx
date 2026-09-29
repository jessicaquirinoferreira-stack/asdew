import React, { useState, useEffect } from 'react';
import officialLogoImg from '../assets/images/covertech_logo_official.png';
import { ShieldCheck, Cpu } from 'lucide-react';

export const CyberSplashIntro: React.FC = () => {
  const [stage, setStage] = useState<'animating' | 'fading' | 'finished'>('animating');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scroll while splash is active so experience is 100% immersive
    document.body.style.overflow = 'hidden';

    // Instant image preloading in background
    const preloadImg = new Image();
    preloadImg.src = officialLogoImg;

    // Progress updates to 100% smoothly over ~4.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 84);

    // Fade out begins at 4.3 seconds
    const fadeTimer = setTimeout(() => {
      setStage('fading');
    }, 4300);

    // Exactly at 5.0 seconds, reveal the website and restore scroll
    const endTimer = setTimeout(() => {
      setStage('finished');
      document.body.style.overflow = '';
    }, 5000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setStage('finished');
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  if (stage === 'finished') return null;

  return (
    <div
      id="cyber-splash-screen"
      style={{ zIndex: 99999 }}
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#07090D] transition-all duration-700 select-none overflow-hidden ${
        stage === 'fading' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* High-tech Cyber Grid Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-50 pointer-events-none" />

      {/* Cybernetic Radial Glow */}
      <div className="absolute w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-r from-[#C9A227]/30 via-emerald-500/10 to-[#FFF1B8]/20 blur-[140px] animate-pulse pointer-events-none" />

      {/* HUD Reticles and Corner Brackets */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-12 h-12 border-t-2 border-l-2 border-[#C9A227]/80" />
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 border-t-2 border-r-2 border-[#C9A227]/80" />
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-12 h-12 border-b-2 border-l-2 border-[#C9A227]/80" />
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 border-b-2 border-r-2 border-[#C9A227]/80" />

      {/* Center Container: Giant Official Logo & Scanning Laser */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto">
        
        {/* Holographic Laser Sweeper */}
        <div className="relative flex flex-col items-center">
          <div className="absolute -inset-x-8 sm:-inset-x-20 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF1B8] to-transparent animate-laser-sweep pointer-events-none shadow-[0_0_25px_#FFF1B8]" />

          {/* Freestanding Giant Logo (No boxes, no circles) */}
          <img
            src={officialLogoImg}
            alt="Covertech Inteligência em Segurança"
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            className="w-auto h-36 sm:h-48 md:h-60 lg:h-72 object-contain filter drop-shadow-[0_0_45px_rgba(201,162,39,0.85)] animate-logo-entrance transition-transform duration-500"
          />
        </div>

        {/* Tactical Sub-Bar: AI + Human Supervision Status */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3.5 w-full max-w-md">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/80 border border-[#C9A227]/50 backdrop-blur-md text-xs sm:text-sm text-[#FFF1B8] font-mono tracking-wider shadow-2xl">
            <Cpu size={16} className="text-[#C9A227] animate-spin" />
            <span className="font-semibold">INICIALIZANDO SISTEMA DE DEFESA 24H</span>
            <span className="text-emerald-400 font-bold tabular-nums">[{progress}%]</span>
          </div>

          {/* Glowing Progress Track */}
          <div className="w-64 sm:w-88 h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/20 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#C9A227] via-[#FFF1B8] to-emerald-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_#C9A227]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 font-mono tracking-widest uppercase mt-1">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>IA Analítica + Supervisão Humana Ativa</span>
          </div>
        </div>
      </div>

      {/* Skip Button for Instant Access */}
      <button
        type="button"
        onClick={() => {
          setStage('finished');
          document.body.style.overflow = '';
        }}
        className="absolute bottom-6 text-[11px] font-mono uppercase tracking-widest text-slate-400 hover:text-white px-4 py-1.5 rounded-md border border-white/10 hover:border-[#C9A227]/60 bg-black/60 backdrop-blur-sm transition-all hover:bg-[#C9A227]/15 cursor-pointer z-20"
      >
        Pular Introdução [ESC]
      </button>
    </div>
  );
};
