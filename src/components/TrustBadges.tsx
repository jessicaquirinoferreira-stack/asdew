import React from 'react';
import { ShieldCheck, Star, Lock, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';

export const TrustBadges: React.FC = () => {
  return (
    <section className="relative py-8 bg-[#0B0E15] border-y border-[#C9A227]/25 overflow-hidden">
      {/* Background cyber accent */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#C9A227]/10 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Certificate 1: Google 5.0 Star Official Rating Certificate */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#141824] to-[#0E121B] p-5 border border-white/10 hover:border-[#C9A227]/50 shadow-xl transition-all duration-300 group">
            {/* Top Bar with Official Google Brand & Verification Tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {/* Official Google 4-Color Icon SVG */}
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
                  Google Avaliações
                </span>
              </div>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 size={12} />
                Certificado Oficial
              </span>
            </div>

            {/* Score & Stars */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl font-extrabold text-white font-display">5.0</span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} className="fill-[#FBBC05]" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Classificação Máxima de Satisfação
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Certificado oficial de reputação Google com 100% de avaliações 5 estrelas em atendimento, tempo de resposta, tecnologia e projetos de segurança em Curitiba.
            </p>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Auditoria Google Meu Negócio</span>
              <a
                href={getWhatsAppUrl('Olá! Vi a nota 5.0 no Google da Covertech e gostaria de agendar uma avaliação técnica.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A227] hover:text-[#FFF1B8] font-semibold flex items-center gap-1"
              >
                <span>Verificar</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Certificate 2: Official Site Seguro / SSL 256-bit Cryptography */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#141824] to-[#0E121B] p-5 border border-white/10 hover:border-emerald-500/50 shadow-xl transition-all duration-300 group">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {/* Official Green Padlock Icon */}
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Lock size={14} />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
                  Site Seguro Oficial
                </span>
              </div>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <ShieldCheck size={12} />
                Criptografia Ativa
              </span>
            </div>

            {/* Security Highlights */}
            <div className="flex items-center gap-3 mb-2">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white flex items-center gap-2">
                  SSL / TLS 256-Bit
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Protocolo HTTPS Protegido • LGPD Compliant
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Ambiente verificado com certificação de segurança digital. Seus dados de contato, projetos e relatórios de vulnerabilidade são transmitidos com sigilo e confidencialidade militar absoluta.
            </p>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Conexão Segura & Blindada</span>
              <span className="text-emerald-400 font-mono font-medium flex items-center gap-1">
                <Lock size={11} />
                256-bit Seguro
              </span>
            </div>
          </div>

          {/* Certificate 3: Troféu Imprensa 2025 Top of Mind Quality Gold */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#141824] to-[#0E121B] p-5 border border-white/10 hover:border-[#C9A227]/50 shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center text-[#E5C158] shrink-0">
                  <Award size={14} />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
                  Troféu Imprensa 2025
                </span>
              </div>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C9A227]/15 border border-[#C9A227]/35 text-[#E5C158]">
                Top of Mind Gold
              </span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">
                  Liderança & Inovação
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Entregue por Carlos Queiroz Maranhão
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Premiação outorgada à Covertech sob a presidência de <strong>Dhionatas Máximo</strong> pelo destaque no setor de segurança inteligente e monitoramento no Estado do Paraná.
            </p>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Jornal Diário Indústria & Comércio</span>
              <a
                href="#premios"
                className="text-[#C9A227] hover:text-[#FFF1B8] font-semibold flex items-center gap-1"
              >
                <span>Ver Homenagem</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
