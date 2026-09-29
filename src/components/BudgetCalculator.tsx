import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageCircle, Building2, Shield, Sparkles, ClipboardCheck } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../config/contact';

export const BudgetCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState('Condomínio Residencial');
  const [propertySize, setPropertySize] = useState('Médio porte (10 a 50 unidades / salas)');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Câmeras IP 4K & CFTV',
    'Monitoramento 24h (IA + Supervisão Humana)',
    '★ Modalidade com Busca de Prestadores (3 Orçamentos)'
  ]);
  const [paymentPreference, setPaymentPreference] = useState('Parcelamento em até 18x no cartão');

  const propertyTypes = [
    'Condomínio Residencial',
    'Condomínio Comercial / Edifício',
    'Empresa / Barracão / Indústria',
    'Residência / Chácara',
  ];

  const sizeOptions = [
    'Pequeno porte (até 10 unidades / ambiente compacto)',
    'Médio porte (10 a 50 unidades / salas)',
    'Grande porte / Complexo Industrial',
  ];

  const availableServices = [
    '★ Modalidade com Busca de Prestadores (3 Orçamentos)',
    'Câmeras IP 4K & CFTV',
    'Monitoramento 24h (IA + Supervisão Humana)',
    'Controle de Acesso Facial & Biometria',
    'Alarme com Sensor de Intrusão Perimetral',
    'Portaria, Zeladoria & Vigia',
    'Auditoria e Consultoria de Riscos',
    'Manutenção Preventiva de Sistema Existente',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*SOLICITAÇÃO DE DIAGNÓSTICO E ORÇAMENTO - COVERTECH*\n\n` +
      `🏢 *Tipo de Imóvel:* ${propertyType}\n` +
      `📐 *Porte estimado:* ${propertySize}\n` +
      `🛠 *Serviços de Interesse:* ${selectedServices.join(', ')}\n` +
      `💳 *Previsão de Pagamento:* ${paymentPreference}\n` +
      `📍 *Região:* Curitiba e Região Metropolitana\n\n` +
      `Gostaria de receber uma análise técnica preliminar e agendar o contato da equipe do presidente Dhionatas Máximo da Covertech.`;
    return getWhatsAppUrl(text);
  };

  return (
    <section className="py-16 bg-[#0B0E15] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#111520] border border-[#C9A227]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Top Accent Beam */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5C158] uppercase tracking-wider mb-1">
                <Calculator size={15} />
                <span>Simulador de Necessidade & Orçamento</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Monte o Diagnóstico de Segurança para seu Imóvel
              </h3>
            </div>
            
            <div className="text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Resposta técnica em até 15 min</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Step 1 & 2: Property Type and Size */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  1. Qual é o perfil do seu imóvel?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                        propertyType === type
                          ? 'bg-[#C9A227]/20 border-[#C9A227] text-white font-semibold'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  2. Dimensão aproximada:
                </label>
                <div className="space-y-2">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setPropertySize(size)}
                      className={`w-full p-2.5 rounded-xl text-xs font-medium text-left border transition-all flex items-center justify-between ${
                        propertySize === size
                          ? 'bg-[#C9A227]/20 border-[#C9A227] text-white font-semibold'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span>{size}</span>
                      {propertySize === size && <Check size={14} className="text-[#C9A227]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  3. Preferência de Pagamento:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentPreference('Parcelamento em até 18x no cartão')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                      paymentPreference.includes('18x')
                        ? 'bg-[#C9A227]/20 border-[#C9A227] text-white font-semibold'
                        : 'bg-white/5 border-white/10 text-slate-300'
                    }`}
                  >
                    Até 18x no Cartão
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentPreference('À vista com condição especial')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                      paymentPreference.includes('À vista')
                        ? 'bg-[#C9A227]/20 border-[#C9A227] text-white font-semibold'
                        : 'bg-white/5 border-white/10 text-slate-300'
                    }`}
                  >
                    À Vista (Desconto)
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Services Checkboxes & Summary */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  4. Selecione os serviços necessários (múltipla escolha):
                </label>
                <div className="space-y-2">
                  {availableServices.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    const isDifferential = srv.startsWith('★');
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleService(srv)}
                        className={`w-full p-2.5 rounded-xl text-xs font-medium border transition-all flex items-center justify-between text-left ${
                          isSelected
                            ? isDifferential
                              ? 'bg-[#C9A227]/20 border-[#C9A227] text-[#FFF1B8] font-bold shadow-md'
                              : 'bg-emerald-500/10 border-emerald-500/50 text-emerald-200'
                            : isDifferential
                              ? 'bg-[#C9A227]/5 border-[#C9A227]/30 text-amber-200 hover:bg-[#C9A227]/10'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span className="pr-2">{srv}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                            isSelected
                              ? isDifferential
                                ? 'bg-[#C9A227] border-[#C9A227] text-black'
                                : 'bg-emerald-500 border-emerald-500 text-black'
                              : 'border-white/30'
                          }`}
                        >
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Action Box */}
              <div className="bg-[#0A0D14] p-5 rounded-2xl border border-white/10 mt-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Itens selecionados: <strong className="text-white">{selectedServices.length}</strong></span>
                  <span className="text-emerald-400 font-medium">Orçamento sem compromisso</span>
                </div>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient-btn w-full py-3.5 px-4 rounded-xl text-sm font-bold text-black flex items-center justify-center gap-2 uppercase tracking-wide shadow-lg shadow-[#C9A227]/25"
                >
                  <MessageCircle size={18} className="fill-black/30" />
                  <span>Enviar Diagnóstico no WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Você será atendido diretamente pelo WhatsApp oficial {CONTACT_INFO.phoneDisplay}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
