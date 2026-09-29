import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Instagram, MessageCircle, MapPin, Phone, Lock, Star, Award } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../config/contact';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Segurança Eletrônica & CFTV IP',
    'Monitoramento 24h (IA + Supervisão Humana)',
    'Controle de Acesso Facial & Biometria',
    'Instalação Parcelada em até 18x',
    'Consultoria & Análise de Vulnerabilidades',
    'Portaria, Zeladoria & Apoio Operacional',
  ];

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços Especializados', href: '#servicos' },
    { label: 'Calculadora de Diagnóstico', href: '#calculadora' },
    { label: 'Sobre a Covertech', href: '#sobre' },
    { label: 'Galeria & Cases', href: '#projetos' },
    { label: 'Troféu Imprensa 2025', href: '#premios' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#07090D] border-t border-white/10 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand, Official Logo & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              Mais de 10 anos de experiência sob presidência de <strong>Dhionatas Máximo</strong>. 
              Aliamos Inteligência Artificial com supervisão humana 24 horas para proteger condomínios, empresas e indústrias em Curitiba e Região Metropolitana.
            </p>
            <p className="text-[11px] text-[#E5C158] font-semibold mb-6 flex items-center gap-1.5">
              <ShieldCheck size={14} />
              Troféu Imprensa Brasil 2025 entregue pelo jornalista Carlos Queiroz Maranhão
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#C9A227] hover:bg-[#C9A227]/10 transition-all"
                aria-label="Instagram @covertech_consultoria"
              >
                <Instagram size={18} />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 transition-all"
                aria-label="WhatsApp da Covertech"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-display">
              Serviços Especializados
            </h4>
            <ul className="space-y-2">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de mais informações sobre ${item}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E5C158] transition-colors text-xs text-slate-300 flex items-center gap-1.5"
                  >
                    <span className="text-[#C9A227]">›</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-display">
              Navegação
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-[#E5C158] transition-colors text-xs text-slate-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact and Location */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-display">
              Atendimento
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin size={15} className="text-[#C9A227] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone size={15} className="text-[#C9A227] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle size={15} className="text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-medium"
                >
                  WhatsApp Oficial
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                <span>Horário: 24h para monitoramento e emergências.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Official Certifications Trust Strip */}
        <div className="py-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Certificate 1 */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1 text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#FBBC05]" />
                ))}
                <span className="text-white font-bold ml-1 text-xs">5.0</span>
              </div>
              <span className="text-[11px] text-slate-400">Certificado Oficial Google</span>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Lock size={12} />
            </div>
            <div>
              <span className="text-white font-bold text-xs flex items-center gap-1.5">
                Site Seguro Oficial
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[11px] text-slate-400">Criptografia SSL 256-Bit Ativa</span>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-5 h-5 rounded bg-[#C9A227]/20 text-[#E5C158] flex items-center justify-center shrink-0">
              <Award size={12} />
            </div>
            <div>
              <span className="text-white font-bold text-xs">Troféu Imprensa 2025</span>
              <span className="text-[11px] text-slate-400">Top of Mind Quality Gold</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Covertech Inteligência em Segurança. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Curitiba e Região • Inteligência em Segurança</span>
            <span>·</span>
            <span className="text-slate-400">Proteção e Privacidade Garantidas</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
