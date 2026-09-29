import React, { useState, useEffect } from 'react';
import { ShieldAlert, MessageCircle, X, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';

export const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('covertech_exit_intent_shown');
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse moves upwards out of the window viewport
      if (e.clientY <= 10 && !sessionStorage.getItem('covertech_exit_intent_shown')) {
        setIsVisible(true);
        sessionStorage.setItem('covertech_exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!isVisible) return null;

  const whatsappUrl = getWhatsAppUrl('Olá! Antes de sair do site, gostaria de agendar o diagnóstico gratuito de vulnerabilidade da Covertech.');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#111520] border-2 border-[#C9A227] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black text-center overflow-hidden">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          aria-label="Fechar pop-up"
        >
          <X size={18} />
        </button>

        {/* Shield Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center text-[#E5C158] mx-auto mb-5 shadow-lg shadow-[#C9A227]/20">
          <ShieldAlert size={32} />
        </div>

        {/* Message */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158] mb-1 block">
          Espere um instante!
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Antes de sair... Proteja seu Patrimônio Hoje Mesmo
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          A maioria dos condomínios e empresas só descobre suas falhas de segurança após um prejuízo irreparável. Receba um <strong className="text-white">Diagnóstico Gratuito de Vulnerabilidade</strong> com o presidente Dhionatas Máximo e os especialistas da Covertech.
        </p>

        {/* Benefits list */}
        <div className="bg-[#0A0D14] rounded-xl p-4 text-left space-y-2 mb-6 border border-white/10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-[#C9A227] shrink-0" />
            <span>Mapeamento de pontos cegos e falhas perimétricas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-[#C9A227] shrink-0" />
            <span>Condição de pagamento em até 18x no cartão</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-[#C9A227] shrink-0" />
            <span>Atendimento prioritário em Curitiba e Região Metropolitana</span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsVisible(false)}
          className="gold-gradient-btn w-full py-4 px-6 rounded-xl text-sm font-bold text-black flex items-center justify-center gap-2 uppercase tracking-wide shadow-xl shadow-[#C9A227]/30"
        >
          <MessageCircle size={18} className="fill-black/30" />
          <span>Falar no WhatsApp sem Compromisso</span>
        </a>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="mt-3 text-xs text-slate-400 hover:text-slate-300 underline underline-offset-2"
        >
          Não obrigado, prefiro continuar navegando
        </button>

      </div>
    </div>
  );
};
