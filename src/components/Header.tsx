import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageCircle, Instagram, Menu, X, Shield, PhoneCall } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../config/contact';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Prêmios', href: '#premios' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = getWhatsAppUrl('Olá! Vim pelo site da Covertech e gostaria de falar com um especialista em segurança.');

  return (
    <>
      {/* Top Gold Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#C9A227] via-[#FFF1B8] to-[#C9A227] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0C10]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80 py-3'
            : 'bg-gradient-to-b from-[#0A0C10]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark / Logo */}
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] rounded-lg"
              aria-label="Covertech Inteligência em Segurança - Página Inicial"
            >
              <Logo size={isScrolled ? 'sm' : 'md'} />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-slate-300 hover:text-[#C9A227] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Social Icons + Primary CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Instagram link */}
              <a
                href="https://www.instagram.com/covertech_consultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#C9A227] hover:bg-[#C9A227]/10 transition-all"
                title="Instagram @covertech_consultoria"
                aria-label="Perfil do Instagram Covertech"
              >
                <Instagram size={17} />
              </a>

              {/* Discreet direct WhatsApp icon */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 transition-all"
                title={`WhatsApp direto: ${CONTACT_INFO.phoneDisplay}`}
                aria-label="Abrir WhatsApp da Covertech"
              >
                <PhoneCall size={16} />
              </a>

              {/* Primary Gold CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-btn px-4 py-2 rounded-lg text-xs md:text-sm font-semibold text-black flex items-center gap-2 tracking-wide uppercase shadow-lg shadow-[#C9A227]/20 whitespace-nowrap"
              >
                <MessageCircle size={17} className="fill-black/30" />
                <span>Falar no WhatsApp Agora</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-btn px-3 py-1.5 rounded-md text-xs font-semibold text-black flex items-center gap-1.5"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0D1017] border-b border-white/10 px-4 pt-4 pb-6 mt-3 shadow-2xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#C9A227] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/covertech_consultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  <Instagram size={18} className="text-[#C9A227]" />
                  <span>@covertech_consultoria</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient-btn w-full justify-center py-3 rounded-lg text-sm font-semibold text-black flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Falar no WhatsApp {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
