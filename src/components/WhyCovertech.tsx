import React from 'react';
import { 
  ShieldCheck, 
  BrainCircuit, 
  TrendingUp, 
  Coins, 
  Award, 
  CheckCircle2, 
  MessageCircle,
  ExternalLink,
  ClipboardCheck
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';
import trophyImg from '../assets/images/award_trofeu_imprensa_1790279455434.jpg';
import presidentImg from '../assets/images/dhionatas_maximo_president.jpg';

export const WhyCovertech: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Segurança Preventiva Real',
      desc: 'Antecipamos o modus operandi criminoso antes que a invasão ocorra. Chega de agir apenas após o prejuízo consumado.',
    },
    {
      icon: ClipboardCheck,
      title: 'Diferencial: Gestão de Prestadores',
      desc: 'Precisa de pintor, eletricista ou reparos? Corremos atrás de 3 orçamentos idôneos para você. Você só aprova e não perde tempo.',
    },
    {
      icon: TrendingUp,
      title: 'IA + Supervisão Humana 24h',
      desc: 'Detecção por visão computacional associada a operadores táticos prontos para acionamento imediato 24 horas por dia.',
    },
    {
      icon: Coins,
      title: 'Instalação Facilitada até 18x',
      desc: 'Equipamentos modernos e de alta confiabilidade parcelados em até 18x no cartão, viabilizando a proteção sem descapitalizar.',
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#0E121B] relative overflow-hidden border-t border-white/10">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#E5C158] text-xs font-bold uppercase tracking-wider mb-4">
            <Award size={14} />
            <span>Autoridade & Mais de 10 Anos de Mercado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Por que confiar na <span className="gold-gradient-text">Covertech</span>?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Nossa missão é simples e inegociável: <strong>evitar que seu patrimônio e as vidas sob sua responsabilidade sofram riscos e prejuízos</strong>, oferecendo soluções que descomplicam o dia a dia de síndicos e gestores.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="rounded-2xl bg-[#141824] p-6 border border-white/10 hover:border-[#C9A227]/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#E5C158] mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFF1B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 size={13} />
                  <span>Padrão Covertech Garantido</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Spotlight Section: Troféu Imprensa 2025 & Presidência Dhionatas Máximo */}
        <div id="premios" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Troféu Imprensa 2025 */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#1A1F2D] via-[#141925] to-[#0F131C] border border-[#C9A227]/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A227]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#C9A227]/20 border border-[#C9A227]/40 px-3 py-1 rounded-md">
                  Prêmio Nacional 2025
                </span>
                <span className="text-xs text-slate-400">Jornal Diário Indústria & Comércio</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border border-[#C9A227]/40 shadow-lg">
                  <img
                    src={trophyImg}
                    alt="Troféu Imprensa Brasil 2025 - Top of Mind Quality Gold entregue à Covertech"
                    referrerPolicy="no-referrer"
                    className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 text-[10px] text-center text-[#E5C158] font-bold">
                    TOP OF MIND QUALITY GOLD
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Troféu Imprensa Brasil 2025
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    Reconhecimento oficial de excelência e liderança em inteligência de segurança, entregue pelo prestigiado jornalista <strong>Carlos Queiroz Maranhão</strong> à <strong>Covertech</strong>.
                  </p>
                  <p className="text-xs text-slate-400">
                    Homenagem destacada nos principais veículos de imprensa e no Jornal Diário Indústria & Comércio, consolidando a Covertech como referência máxima em segurança eletrônica e consultoria no Paraná.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-medium">
                Destaque no perfil @covertech_consultoria
              </span>
              <a
                href="https://www.instagram.com/covertech_consultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#E5C158] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Ver Destaque no Instagram</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Card 2: Presidência Dhionatas Máximo (Foto Inteira e Ajustada Perfeitamente) */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#141825] via-[#111520] to-[#0B0E15] border border-white/10 hover:border-[#C9A227]/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#C9A227]/10 border border-[#C9A227]/30 px-3 py-1 rounded-md">
                  Presidência & Liderança
                </span>
                <span className="text-xs text-[#C9A227] font-semibold">10+ Anos de Atuação</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                
                {/* Container da foto do presidente ajustado perfeitamente para exibir 100% da foto inteira sem cortes */}
                <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border border-[#C9A227]/40 bg-[#07090D] shadow-xl flex items-center justify-center p-1.5 group-hover:border-[#C9A227] transition-all">
                  
                  {/* Subtle golden ambient glow inside the frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C9A227]/15 via-transparent to-transparent pointer-events-none" />

                  <img
                    src={presidentImg}
                    alt="Dhionatas Máximo - Presidente da Covertech Inteligência em Segurança"
                    referrerPolicy="no-referrer"
                    className="w-full h-72 sm:h-80 object-contain object-center rounded-xl transition-transform duration-500 group-hover:scale-[1.02] filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Badge de identificação sobre a foto */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1 text-[11px] text-center text-[#FFF1B8] font-semibold shadow-md">
                    Dhionatas Máximo • Presidente
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <h3 className="text-2xl font-bold text-white mb-1 font-display">
                    Dhionatas Máximo
                  </h3>
                  <p className="text-xs text-[#C9A227] font-semibold uppercase tracking-wider mb-3">
                    Presidente da Covertech Inteligência em Segurança
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    Sob a presidência de <strong>Dhionatas Máximo</strong>, a Covertech revolucionou a proteção patrimonial ao integrar <strong>Inteligência Artificial de alta precisão, supervisão humana especializada 24h e soluções práticas de facilitação</strong> para gestores e condomínios.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-[#C9A227] pl-3 py-0.5">
                    “Nosso compromisso é desonerar o síndico e o empresário: garantimos segurança máxima com IA e agilizamos desde a pronta-resposta até a busca de prestadores e 3 orçamentos confiáveis.”
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de falar com o time do presidente Dhionatas Máximo da Covertech para uma consultoria técnica.')}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-btn w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-black flex items-center justify-center gap-2 uppercase tracking-wide shadow-lg"
              >
                <MessageCircle size={16} />
                <span>Falar com a Presidência e Consultoria no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
