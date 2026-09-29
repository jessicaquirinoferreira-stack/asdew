import React from 'react';
import { MessageCircle, Instagram, ShieldAlert, ArrowRight, PhoneCall } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../config/contact';

export const FinalCTA: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl('Olá! Vim pelo site da Covertech e não quero deixar meu patrimônio vulnerável. Quero falar com o especialista.');

  return (
    <section id="contato" className="py-24 bg-[#0A0C10] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A227]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgent Shield Marker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold mb-6">
          <ShieldAlert size={16} className="text-red-400" />
          <span>Segurança não é despesa, é preservação de vidas e patrimônio</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          Não deixe sua empresa ou condomínio vulnerável. <span className="gold-gradient-text">Fale agora</span> com um especialista Covertech.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Mais de 10 anos protegendo Curitiba e Região Metropolitana. Faça um diagnóstico preventivo gratuito e conheça as condições em até 18x no cartão.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-btn w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-black flex items-center justify-center gap-3 uppercase tracking-wider shadow-2xl shadow-[#C9A227]/30"
          >
            <MessageCircle size={22} className="fill-black/30 shrink-0" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 border border-white/15 hover:border-[#C9A227] hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Instagram size={18} className="text-[#C9A227]" />
            <span>Seguir no Instagram</span>
          </a>
        </div>

        {/* Quick Phone & Direct Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <PhoneCall size={14} className="text-[#C9A227]" />
            Telefone / WhatsApp: <strong className="text-white">{CONTACT_INFO.phoneDisplay}</strong>
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Atendimento: 24 Horas / Todos os Dias</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Curitiba e Região Metropolitana - PR</span>
        </div>

      </div>
    </section>
  );
};
