import React from 'react';
import officialLogoImg from '../assets/images/covertech_logo_official.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'splash';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Height tuned for razor-sharp visual balance, freestanding without any bounding box
  const heightClass =
    size === 'sm'
      ? 'h-9 sm:h-10'
      : size === 'md'
      ? 'h-11 sm:h-12'
      : size === 'lg'
      ? 'h-14 sm:h-16'
      : size === 'xl'
      ? 'h-20 sm:h-24'
      : size === 'hero'
      ? 'h-24 sm:h-32 md:h-36'
      : size === 'splash'
      ? 'h-36 sm:h-48 md:h-60'
      : 'h-12';

  return (
    <div className={`relative inline-flex items-center justify-center select-none group ${className}`}>
      {/* Golden Cyber Glow behind the Logo (no box, no circle) */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/20 via-[#FFF1B8]/15 to-transparent blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Official High-Resolution Logo Image - Fully Transparent & Visible */}
      <img
        src={officialLogoImg}
        alt="Covertech Inteligência em Segurança - Logomarca Oficial"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className={`${heightClass} w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(201,162,39,0.35)]`}
      />
    </div>
  );
};
