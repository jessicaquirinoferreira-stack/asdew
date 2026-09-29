import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../config/contact';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl('Olá! Vim pelo site da Covertech e gostaria de atendimento imediato.');

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-emerald-300"
        aria-label={`Falar no WhatsApp com a Covertech ${CONTACT_INFO.phoneDisplay}`}
      >
        {/* Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        <MessageCircle size={24} className="fill-black/20 text-black shrink-0" />
        
        <div className="hidden sm:flex flex-col text-left leading-tight">
          <span className="text-xs uppercase tracking-wider text-black/80 font-bold">Fale Conosco</span>
          <span className="text-sm font-extrabold text-black font-display">{CONTACT_INFO.phoneDisplay}</span>
        </div>
      </a>
    </div>
  );
};
