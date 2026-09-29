import React from 'react';
import { ShieldCheck, CreditCard, MapPin, Award } from 'lucide-react';

export const UrgencyBar: React.FC = () => {
  const triggers = [
    {
      icon: ShieldCheck,
      text: 'Monitoramento 24h em Tempo Real',
      highlight: 'IA + Supervisão Humana',
    },
    {
      icon: CreditCard,
      text: 'Instalação de Equipamentos',
      highlight: 'Parcelamento em até 18x no Cartão',
    },
    {
      icon: MapPin,
      text: 'Atendimento Rápido e Presencial',
      highlight: 'Curitiba e Região Metropolitana',
    },
    {
      icon: Award,
      text: 'Troféu Imprensa Brasil 2025 Gold',
      highlight: 'Entregue por Carlos Queiroz Maranhão',
    },
  ];

  return (
    <div className="relative z-20 border-y border-[#C9A227]/30 bg-[#0E121A]/95 backdrop-blur-md py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {triggers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-3.5 ${idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A227]/15 border border-[#C9A227]/40 flex items-center justify-center text-[#E5C158] shrink-0">
                  <Icon size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium">
                    {item.text}
                  </span>
                  <span className="text-sm font-bold text-white font-display tracking-wide">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
