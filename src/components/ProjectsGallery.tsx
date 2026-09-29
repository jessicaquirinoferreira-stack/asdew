import React, { useState } from 'react';
import { 
  Building2, 
  Eye, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  MessageCircle, 
  X,
  ExternalLink,
  ChevronRight,
  Award
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';
import projectImg1 from '../assets/images/project_surveillance_tech_1790279465702.jpg';
import heroImg from '../assets/images/hero_security_center_1790279433064.jpg';
import trophyImg from '../assets/images/award_trofeu_imprensa_1790279455434.jpg';
import presidentImg from '../assets/images/dhionatas_maximo_president.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  location: string;
  image: string;
  description: string;
  techSpecs: string[];
  imageFit?: 'cover' | 'contain';
}

export const ProjectsGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'proj-1',
      title: 'Sistema de Acesso Facial & CFTV IP 4K',
      category: 'condominio',
      tag: 'Condomínio Residencial',
      location: 'Curitiba - PR',
      image: projectImg1,
      description: 'Implantação completa de reconhecimento facial na portaria social e de serviços, associada a 32 câmeras IP 4K com gravação em nuvem e inteligência perimetral.',
      techSpecs: ['32 Câmeras IP Ultra-HD', 'Terminais Faciais Hikvision/Intelbras', 'Zero fila e triagem ágil', 'Parcelado em até 18x'],
    },
    {
      id: 'proj-2',
      title: 'Central Integrada de Monitoramento 24h (IA + Supervisão Humana)',
      category: 'monitoramento',
      tag: 'Operação Crítica',
      location: 'Região Metropolitana de Curitiba',
      image: heroImg,
      description: 'Estruturação de central de inteligência e telemetria que une detecção preditiva por Inteligência Artificial e supervisão humana atenta e ininterrupta 24h por dia.',
      techSpecs: ['Inteligência Artificial + Supervisão Humana 24/7', 'Alerta automático via app', 'Link de dados com dupla contingência'],
    },
    {
      id: 'proj-3',
      title: 'Troféu Imprensa 2025 - Top of Mind Gold',
      category: 'destaque',
      tag: 'Reconhecimento Oficial',
      location: 'Curitiba e Paraná',
      image: trophyImg,
      description: 'Homenagem oficial recebida pela Covertech no Troféu Imprensa Brasil 2025, entregue pelo conceituado jornalista Carlos Queiroz Maranhão, reconhecendo a liderança da empresa sob presidência de Dhionatas Máximo.',
      techSpecs: ['Top of Mind Quality Gold', 'Jornal Diário Indústria & Comércio', 'Entregue por Carlos Queiroz Maranhão'],
    },
    {
      id: 'proj-4',
      title: 'Consultoria de Vulnerabilidade & Presidência',
      category: 'consultoria',
      tag: 'Auditoria Estratégica',
      location: 'Curitiba & RMC',
      image: presidentImg,
      imageFit: 'contain',
      description: 'Mapeamento perimétrico e diagnóstico de brechas em condomínios e empresas de alto padrão com consultoria executiva liderada pelo presidente Dhionatas Máximo.',
      techSpecs: ['Presidência Dhionatas Máximo', 'Laudo com mapa de calor de riscos', 'Revisão de procedimentos e blindagem preventiva'],
    },
  ];

  const filterOptions = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'condominio', label: 'Condomínios' },
    { id: 'monitoramento', label: 'Monitoramento 24h' },
    { id: 'consultoria', label: 'Consultoria' },
    { id: 'destaque', label: 'Em Evidência' },
  ];

  const filtered = selectedFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const getWhatsAppProjectUrl = (title: string) => {
    const text = `Olá! Vi o projeto "${title}" no site da Covertech e gostaria de solicitar um orçamento similar para meu imóvel.`;
    return getWhatsAppUrl(text);
  };

  return (
    <section id="projetos" className="py-20 lg:py-28 bg-[#0A0C10] relative overflow-hidden">
      {/* Background cyber pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C9A227]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#E5C158] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>Portfólio & Evidências Reais</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Cases & <span className="gold-gradient-text">Em Evidência</span>
            </h2>
            <p className="text-base text-slate-400 mt-2 max-w-xl">
              Confira instalações, operações ativas e o destaque da liderança da Covertech sob presidência de <strong>Dhionatas Máximo</strong>.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Quero conhecer mais cases e soluções da Covertech para meu condomínio ou empresa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E5C158] hover:text-white transition-colors"
          >
            <span>Solicitar Apresentação Técnica no WhatsApp</span>
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-[#C9A227] text-black shadow-lg shadow-[#C9A227]/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="group relative rounded-2xl bg-[#121622] border border-white/10 overflow-hidden hover:border-[#C9A227]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C9A227]/10 flex flex-col justify-between"
            >
              {/* Image Container with Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#07090D] flex items-center justify-center p-2">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full ${
                    proj.imageFit === 'contain'
                      ? 'object-contain object-center'
                      : 'object-cover object-center'
                  } group-hover:scale-105 transition-transform duration-500 filter brightness-95`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-transparent to-black/30 pointer-events-none" />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#E5C158] px-3 py-1 rounded-md shadow-md">
                    {proj.tag}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    <MapPin size={12} className="text-[#C9A227]" />
                    <span>{proj.location}</span>
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFF1B8] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Tech Specs */}
                  <div className="space-y-1.5 mb-6">
                    {proj.techSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={getWhatsAppProjectUrl(proj.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gold-gradient-btn py-3 px-4 rounded-xl text-xs font-bold text-black flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    <MessageCircle size={15} />
                    <span>Quero Solução Similar</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(proj)}
                    className="px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#C9A227] transition-all text-xs font-semibold cursor-pointer"
                  >
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-xl bg-[#111520] border border-[#C9A227]/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
                aria-label="Fechar modal"
              >
                <X size={18} />
              </button>

              <div className="mb-4">
                <span className="text-xs font-bold text-[#E5C158] uppercase tracking-wider">
                  {activeModalProject.tag} • {activeModalProject.location}
                </span>
                <h4 className="text-2xl font-bold text-white mt-1">
                  {activeModalProject.title}
                </h4>
              </div>

              <div className="rounded-xl overflow-hidden mb-5 max-h-72 bg-[#07090D] flex items-center justify-center p-2">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className={`w-full max-h-68 ${
                    activeModalProject.imageFit === 'contain'
                      ? 'object-contain'
                      : 'object-cover'
                  }`}
                />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {activeModalProject.description}
              </p>

              <div className="bg-black/30 p-4 rounded-xl border border-white/10 mb-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#E5C158] mb-2">
                  Especificações Técnicas
                </h5>
                <ul className="space-y-1.5">
                  {activeModalProject.techSpecs.map((spec, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                      <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <a
                  href={getWhatsAppProjectUrl(activeModalProject.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 gold-gradient-btn py-3 rounded-xl text-xs sm:text-sm font-bold text-black flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <MessageCircle size={16} />
                  <span>Consultar Solução no WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-3 rounded-xl bg-white/10 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
