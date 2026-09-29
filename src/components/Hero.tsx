import React from 'react';
import { MessageCircle, ShieldCheck, ArrowRight, Award, AlertTriangle, Sparkles, CheckCircle2, ClipboardCheck } from 'lucide-react';
import heroImg from '../assets/images/hero_security_center_1790279433064.jpg';
import officialLogoImg from '../assets/images/covertech_logo_official.png';
import { getWhatsAppUrl } from '../config/contact';

export const Hero: React.FC = () => {
  const whatsappConsultoriaUrl = getWhatsAppUrl('Olá! Vim pelo site da Covertech e quero minha Consultoria Gratuita de Segurança para evitar riscos e prejuízos.');

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0A0C10]">
      {/* Background Cybernetic Grid & Ambient Lights */}
      <div className="absolute inset-0 tech-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Subtle Golden Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C9A227]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-10 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Cyber radar circle background */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#C9A227]/10 rounded-full pointer-events-none hidden xl:block">
        <div className="absolute inset-8 border border-dashed border-[#C9A227]/10 rounded-full" />
        <div className="absolute inset-24 border border-white/5 rounded-full" />
        <div className="w-full h-full animate-radar origin-center bg-gradient-to-tr from-transparent via-[#C9A227]/5 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Big Freestanding Official Logo, Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Freestanding Official Logo Highlight (Large, No Frame, Super High-Tech) */}
            <div className="mb-6 relative group inline-block">
              {/* Radial Golden Aura (No circle, smooth blur) */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A227]/30 via-[#FFF1B8]/20 to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <img
                src={officialLogoImg}
                alt="Covertech Inteligência em Segurança - Logomarca Oficial"
                fetchPriority="high"
                decoding="sync"
                loading="eager"
                className="relative h-20 sm:h-28 md:h-32 w-auto object-contain filter drop-shadow-[0_8px_30px_rgba(201,162,39,0.5)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold shadow-sm">
                <AlertTriangle size={15} className="text-amber-400 shrink-0" />
                <span>Diagnóstico de Vulnerabilidades • Curitiba e RMC</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#E5C158] text-xs font-semibold">
                <ClipboardCheck size={13} />
                <span>Planos com Busca de 3 Orçamentos</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 size={13} />
                <span>Nota 5.0 Google • Site Seguro</span>
              </div>
            </div>

            {/* Powerful Provocative Headline */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E5C158] mb-2 font-display">
              O ERRO QUE COLOCA EMPRESAS E CONDOMÍNIOS EM RISCO TODOS OS DIAS
            </p>

            {/* Main SEO H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Inteligência em Segurança para <span className="gold-gradient-text">Condomínios e Empresas</span> em Curitiba
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Mais de <strong className="text-white font-semibold">10 anos de experiência</strong> sob presidência de <strong>Dhionatas Máximo</strong>. 
              Monitoramento 24h unindo <strong className="text-[#FFF1B8]">Inteligência Artificial à supervisão humana contínua</strong> — e planos com a <strong className="text-[#E5C158]">gestão e busca de 3 orçamentos para qualquer serviço</strong> (como pintor, pedreiro ou eletricista) para você não perder tempo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={whatsappConsultoriaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-btn px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-black flex items-center justify-center gap-3 tracking-wide uppercase shadow-xl transition-all"
              >
                <MessageCircle size={20} className="fill-black/30 shrink-0" />
                <span>Quero minha Consultoria Gratuita</span>
              </a>

              <a
                href="#servicos"
                onClick={handleScrollToServices}
                className="px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-white/5 border border-white/15 hover:border-[#C9A227]/50 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Nossos Serviços & Diferenciais</span>
                <ArrowRight size={18} className="text-[#C9A227]" />
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-display text-white tabular-nums flex items-center gap-1">
                  10+ <span className="text-xs text-[#C9A227] font-normal font-sans">anos</span>
                </span>
                <span className="text-xs text-slate-400">Em Inteligência & Defesa</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-display text-[#E5C158] flex items-center gap-1">
                  3 Cotações
                </span>
                <span className="text-xs text-slate-400">Nós Buscamos p/ Você</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-1">
                  18x <span className="text-xs text-[#C9A227] font-normal font-sans">no cartão</span>
                </span>
                <span className="text-xs text-slate-400">Instalação Facilitada</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Tech Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border Frame */}
              <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-[#C9A227]/50 via-white/10 to-[#C9A227]/20 shadow-2xl shadow-black">
                <div className="relative rounded-xl overflow-hidden bg-[#0F131C]">
                  
                  {/* Real Generated Visual Asset */}
                  <img
                    src={heroImg}
                    alt="Centro de Operações e Monitoramento 24h Covertech em Curitiba"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center filter brightness-95 contrast-105"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />

                  {/* Dark Vignette Overlay with Gold Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/30 pointer-events-none" />

                  {/* High-Tech Tactical HUD Overlays */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 bg-[#0A0C10]/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-white">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-sans font-medium text-emerald-300">IA + SUPERVISÃO HUMANA 24H</span>
                    </div>

                    <div className="bg-[#0A0C10]/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#C9A227]/40 text-[#E5C158] font-sans text-[11px] font-semibold flex items-center gap-1.5">
                      <Award size={13} />
                      <span>TOP OF MIND 2025</span>
                    </div>
                  </div>

                  {/* Bottom Float Card: Emergency Direct Contact */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0D1119]/90 backdrop-blur-md p-4 rounded-xl border border-white/15 shadow-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#C9A227]/20 border border-[#C9A227]/50 flex items-center justify-center text-[#E5C158]">
                          <ShieldCheck size={22} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Proteção perimetral avançada</p>
                          <p className="text-sm font-bold text-white">Curitiba & Região Metropolitana</p>
                        </div>
                      </div>
                      
                      <a
                        href={whatsappConsultoriaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                        title="Chamar no WhatsApp"
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Decorative Corner Target Reticles */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#C9A227] pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#C9A227] pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
