import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Camera, 
  Eye, 
  CreditCard, 
  UserCheck, 
  KeyRound, 
  Search, 
  Wrench, 
  FileText,
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  ClipboardCheck,
  Clock,
  Paintbrush,
  HardHat
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  badge?: string;
  description: string;
  highlights: string[];
  ctaMessage: string;
  isExclusiveFeatured?: boolean;
}

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'gestao' | 'eletronica' | 'patrimonial' | 'consultoria'>('all');

  const servicesList: ServiceItem[] = [
    {
      id: 'gestao-servicos-concierge',
      icon: ClipboardCheck,
      badge: 'Diferencial Exclusivo Covertech',
      isExclusiveFeatured: true,
      title: 'Modalidade Completa: Gestão & Cotação de Prestadores',
      description: 'Dentre os nossos planos, oferecemos esta modalidade única: além de todo o monitoramento e segurança, cuidamos da busca de mão de obra para você. Precisa de pintor, eletricista ou pedreiro? A Covertech vai atrás de 3 orçamentos idôneos e você só escolhe o melhor, sem perder tempo procurando.',
      highlights: [
        'Buscamos 3 orçamentos verificados para você',
        'Economia total de tempo de síndicos e gestores',
        'Pintura, manutenção, reformas, hidráulica e elétrica',
        'Segurança + Facilidade reunidas em uma só parceria'
      ],
      ctaMessage: 'Olá! Vim pelo site da Covertech e fiquei muito interessado no plano com o diferencial de Gestão e Cotação de Serviços (os 3 orçamentos). Como funciona?',
    },
    {
      id: 'seguranca-eletronica',
      icon: Camera,
      badge: 'Destaque Mais Solicitado',
      title: 'Segurança Eletrônica Avançada',
      description: 'Câmeras IP 4K de alta definição, sensores perimetrais inteligentes, centrais de alarme e cercas virtuais com inteligência artificial.',
      highlights: ['Gravação em nuvem e local', 'Visão noturna colorida Ultra-HD', 'Alarmes anti-invasão imediatos'],
      ctaMessage: 'Olá! Vim pelo site da Covertech e quero um orçamento para Segurança Eletrônica (Câmeras e Alarmes).',
    },
    {
      id: 'monitoramento-24h',
      icon: Eye,
      badge: 'IA + Supervisão Humana 24/7',
      title: 'Monitoramento 24h (IA + Supervisão Humana)',
      description: 'Central de operações ativa 24/7 que combina o poder analítico da Inteligência Artificial para detecção precoce de ameaças com a supervisão atenta e contínua de operadores humanos especializados.',
      highlights: ['Inteligência Artificial de detecção contínua', 'Supervisão humana ativa e pronta-resposta 24h', 'Alerta instantâneo com dupla contingência'],
      ctaMessage: 'Olá! Vim pelo site da Covertech e quero conhecer o Monitoramento 24h com Inteligência Artificial e Supervisão Humana para meu patrimônio.',
    },
    {
      id: 'instalacao-parcelada',
      icon: CreditCard,
      badge: 'Até 18x no Cartão',
      title: 'Instalação de Equipamentos Parcelada',
      description: 'Modernize todo o sistema de segurança da sua empresa ou condomínio sem descapitalizar o caixa. Equipamentos de ponta com garantia.',
      highlights: ['Parcelamento em até 18x no cartão', 'Infraestrutura e cabeamento estruturado', 'Garantia total e suporte técnico'],
      ctaMessage: 'Olá! Gostaria de uma cotação para Instalação de Equipamentos com parcelamento em até 18x no cartão.',
    },
    {
      id: 'controle-acesso',
      icon: KeyRound,
      badge: 'Zero Invasão',
      title: 'Controle de Acesso Inteligente',
      description: 'Reconhecimento facial biométrico ultra-rápido, cartões/TAGs RFID criptografados, catracas e cancelas de alta durabilidade.',
      highlights: ['Biometria facial sem toque', 'Relatório completo de entradas e saídas', 'Integração para moradores e visitantes'],
      ctaMessage: 'Olá! Quero um orçamento de Controle de Acesso Inteligente (Facial / TAGs) para meu condomínio/empresa.',
    },
    {
      id: 'consultoria-inteligencia',
      icon: ShieldCheck,
      badge: 'Mais de 10 Anos de Autoridade',
      title: 'Consultoria em Segurança & Inteligência',
      description: 'Mapeamento minucioso de vulnerabilidades, auditoria perimetral de riscos e desenvolvimento de protocolos customizados de defesa.',
      highlights: ['Relatório técnico de falhas invisíveis', 'Redução drástica de sinistros e custos', 'Planos de contingência executivos'],
      ctaMessage: 'Olá! Quero agendar uma Consultoria em Inteligência e Segurança com a equipe do presidente Dhionatas Máximo da Covertech.',
    },
    {
      id: 'portaria-zeladoria-vigia',
      icon: UserCheck,
      title: 'Portaria, Zeladoria & Vigia Patrimonial',
      description: 'Mão de obra rigorosamente treinada, com postura tática, verificação de antecedentes e supervisão periódica constante.',
      highlights: ['Profissionais qualificados e uniformizados', 'Fiscalização e ronda preventiva ativa', 'Substituição imediata em caso de falta'],
      ctaMessage: 'Olá! Gostaria de uma proposta para Portaria, Zeladoria e Vigia Patrimonial da Covertech.',
    },
    {
      id: 'investigacao-particular',
      icon: Search,
      title: 'Investigação Particular & Inteligência',
      description: 'Serviços confidenciais de inteligência corporativa, verificação de fraudes internas, due diligence e levantamentos estratégicos.',
      highlights: ['Sigilo absoluto e discrição jurídica', 'Equipamentos ocultos de alta precisão', 'Relatórios conclusivos com provas válidas'],
      ctaMessage: 'Olá! Gostaria de atendimento sigiloso sobre Investigação Particular e Inteligência Corporativa.',
    },
    {
      id: 'manutencao-preventiva',
      icon: Wrench,
      title: 'Manutenção Preventiva & Corretiva',
      description: 'Contratos ágeis de assistência técnica para garantir que nenhuma câmera ou portão eletrônico falhe no momento crítico.',
      highlights: ['Atendimento prioritário em Curitiba', 'Troca de conectores e fontes nobreak', 'Laudo técnico e revisão periódica'],
      ctaMessage: 'Olá! Preciso de Manutenção Preventiva/Corretiva para o sistema de segurança do meu condomínio/empresa.',
    },
  ];

  const filterMapping = {
    all: servicesList,
    gestao: servicesList.filter(s => s.id === 'gestao-servicos-concierge'),
    eletronica: servicesList.filter(s => ['seguranca-eletronica', 'monitoramento-24h', 'instalacao-parcelada', 'controle-acesso'].includes(s.id)),
    patrimonial: servicesList.filter(s => ['gestao-servicos-concierge', 'portaria-zeladoria-vigia', 'manutencao-preventiva'].includes(s.id)),
    consultoria: servicesList.filter(s => ['consultoria-inteligencia', 'investigacao-particular'].includes(s.id)),
  };

  const currentServices = filterMapping[selectedCategory];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#0A0C10] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C9A227]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#E5C158] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Soluções Completas de Ponta a Ponta</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Nossos Planos & <span className="gold-gradient-text">Serviços Especializados</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Unimos segurança preventiva com <strong>Inteligência Artificial</strong>, pronta-resposta e <strong>facilidades exclusivas de gestão</strong> que eliminam dores de cabeça de síndicos, condomínios e empresários.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* HIGHLIGHT BANNER: O GRANDE DIFERENCIAL COVERTECH (3 ORÇAMENTOS & GESTÃO) */}
        {/* ========================================================================= */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-[#171C28] via-[#1A2234] to-[#121622] border-2 border-[#C9A227] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
          {/* Golden Aura & Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#C9A227] text-black text-xs font-black uppercase tracking-wider shadow-md">
                  ★ Diferencial Exclusivo nos Planos
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                  Zero Estresse para Você
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display leading-tight">
                Além de Proteger, Cuidamos da <span className="gold-gradient-text">Procura de Serviços e Cotações</span> para Você
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Dentre os planos oferecidos pela <strong>Covertech</strong>, temos uma modalidade exclusiva pensada para poupar o seu tempo mais valioso:
              </p>

              {/* Practical Scenario Illustration Box */}
              <div className="rounded-2xl bg-black/50 border border-white/10 p-4 sm:p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center text-[#E5C158] shrink-0 mt-0.5">
                    <Paintbrush size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Como Funciona na Prática:</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      Sua empresa ou condomínio precisa de um <strong>pintor, eletricista, pedreiro ou encanador</strong>? Você não precisa perder tempo ligando para dezenas de profissionais desconhecidos.
                    </p>
                  </div>
                </div>

                {/* 3 Step Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <span className="text-[11px] font-bold text-[#C9A227] uppercase block mb-1">Passo 1</span>
                    <p className="text-xs text-slate-200">Você nos informa a necessidade de serviço ou reparo.</p>
                  </div>
                  <div className="bg-[#C9A227]/10 rounded-xl p-3 border border-[#C9A227]/30">
                    <span className="text-[11px] font-bold text-[#FFF1B8] uppercase block mb-1">Passo 2 • Trabalho Nosso</span>
                    <p className="text-xs text-white font-medium">A Covertech busca e seleciona <strong>3 orçamentos idôneos</strong> e confiáveis.</p>
                  </div>
                  <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/30">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase block mb-1">Passo 3 • Decisão Fácil</span>
                    <p className="text-xs text-slate-200">Você só avalia e aprova a melhor opção sem perder horas de trabalho!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-[#0F131C] border border-[#C9A227]/40 shadow-xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227] flex items-center justify-center text-[#E5C158] shadow-lg">
                <Clock size={28} />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
                  Tranquilidade Total
                </span>
                <h4 className="text-lg font-bold text-white">
                  Quer esse plano no seu Condomínio ou Empresa?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Atendimento personalizado com a equipe do presidente Dhionatas Máximo.
                </p>
              </div>

              <a
                href={getWhatsAppUrl('Olá! Quero saber mais sobre a modalidade de plano da Covertech que inclui a Busca de Serviços e os 3 Orçamentos.')}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-btn w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-black flex items-center justify-center gap-2 uppercase tracking-wide shadow-lg"
              >
                <MessageCircle size={17} className="fill-black/30" />
                <span>Consultar Este Plano no WhatsApp</span>
              </a>

              <span className="text-[11px] text-slate-400">
                Disponível para Curitiba e Região Metropolitana
              </span>
            </div>

          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Todos os Serviços' },
            { id: 'gestao', label: '★ Gestão de Prestadores (3 Orçamentos)' },
            { id: 'eletronica', label: 'Segurança Eletrônica & IA' },
            { id: 'patrimonial', label: 'Patrimonial & Vigia' },
            { id: 'consultoria', label: 'Consultoria Estratégica' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#C9A227] text-black shadow-lg shadow-[#C9A227]/25 scale-105'
                  : 'bg-[#141824] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service) => {
            const Icon = service.icon;
            const whatsappUrl = getWhatsAppUrl(service.ctaMessage);

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl bg-[#121622] border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl ${
                  service.isExclusiveFeatured
                    ? 'border-[#C9A227] shadow-xl shadow-[#C9A227]/15 bg-gradient-to-b from-[#171C28] to-[#121622]'
                    : 'border-white/10 hover:border-[#C9A227]/60 hover:shadow-[#C9A227]/10'
                }`}
              >
                {/* Accent top gradient on hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all ${
                      service.isExclusiveFeatured
                        ? 'bg-[#C9A227] text-black shadow-lg'
                        : 'bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#E5C158] group-hover:bg-[#C9A227] group-hover:text-black'
                    }`}>
                      <Icon size={26} />
                    </div>

                    {service.badge && (
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${
                        service.isExclusiveFeatured
                          ? 'bg-[#C9A227]/20 border-[#C9A227] text-[#FFF1B8]'
                          : 'bg-white/5 border-white/10 text-slate-300'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFF1B8] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {service.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 uppercase tracking-wide transition-all ${
                    service.isExclusiveFeatured
                      ? 'gold-gradient-btn text-black shadow-lg shadow-[#C9A227]/30'
                      : 'bg-white/5 hover:bg-[#C9A227] text-white hover:text-black border border-white/10 hover:border-[#C9A227]'
                  }`}
                >
                  <MessageCircle size={16} />
                  <span>Solicitar Cotação</span>
                  <ArrowUpRight size={15} className="opacity-70" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner 18x Installment */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#1A1F2D] via-[#141926] to-[#1A1F2D] border border-[#C9A227]/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227] flex items-center justify-center text-[#E5C158] shrink-0 hidden sm:flex">
              <CreditCard size={28} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5C158]">
                Condição Especial de Pagamento
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Equipamentos instalados com parcelamento em até 18x no cartão
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Modernize CFTV, sensores e controle de acesso sem afetar as reservas financeiras do condomínio ou empresa.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Quero conhecer as condições de parcelamento em até 18x para os serviços da Covertech.')}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-black uppercase tracking-wide whitespace-nowrap shadow-lg flex items-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Falar com Consultor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
