import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  ChevronRight,
  Minimize2,
  ClipboardCheck
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionUrl?: string;
  actionLabel?: string;
  timestamp: string;
}

export const CoverBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: ChatMessage[] = [
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Sou o assistente virtual da Covertech. Sabia que em nossos planos nós também vamos atrás de 3 orçamentos de serviços (como pintor ou eletricista) para você não perder tempo? Como posso te ajudar hoje?',
      timestamp: 'Agora',
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const quickReplies = [
    'Plano com 3 orçamentos',
    'Quero orçamento',
    'Monitoramento IA + Humano',
    'Instalação em até 18x',
    'Falar com a Presidência',
  ];

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUserMessage = (userText: string) => {
    if (!userText.trim()) return;

    const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Intelligent Bot response generation
    setTimeout(() => {
      let botResponse = '';
      let actionUrl = '';
      let actionLabel = 'Chamar no WhatsApp Agora';

      const lower = userText.toLowerCase();

      if (lower.includes('3 orçamentos') || lower.includes('serviços') || lower.includes('prestador') || lower.includes('pintor') || lower.includes('eletricista') || lower.includes('plano com 3')) {
        botResponse = 'Esse é o nosso grande diferencial! Em uma de nossas modalidades de planos, além de toda a segurança eletrônica e monitoramento, quando sua empresa ou condomínio precisa de um serviço (como pintor, eletricista ou pedreiro), a Covertech busca 3 orçamentos idôneos para você. Você só escolhe e aprova, sem perder tempo!';
        actionUrl = getWhatsAppUrl('Olá! Gostaria de saber mais detalhes sobre a modalidade de plano com busca de 3 orçamentos para prestadores de serviços.');
        actionLabel = 'Quero Conhecer Essa Modalidade';
      } else if (lower.includes('orçamento') || lower.includes('preco') || lower.includes('preço') || lower.includes('quanto custa')) {
        botResponse = 'Excelente! Elaboramos projetos sob medida para condomínios e empresas. Parcelamos equipamentos e instalação em até 18x no cartão! Vou te encaminhar agora para nossa equipe técnica.';
        actionUrl = getWhatsAppUrl('Olá! Estava no chat do site e gostaria de um orçamento personalizado para meu imóvel.');
      } else if (lower.includes('monitoramento') || lower.includes('24h') || lower.includes('alarme') || lower.includes('ia') || lower.includes('humano')) {
        botResponse = 'Nossa Central de Monitoramento 24h utiliza Inteligência Artificial avançada para detecção preditiva aliada à supervisão humana especializada constante para pronta-resposta. Para conhecer os planos disponíveis, clique abaixo:';
        actionUrl = getWhatsAppUrl('Olá! Quero conhecer os planos de Monitoramento 24h com Inteligência Artificial e supervisão humana da Covertech.');
      } else if (lower.includes('câmera') || lower.includes('camera') || lower.includes('18x') || lower.includes('cartão') || lower.includes('instalacao') || lower.includes('instalação')) {
        botResponse = 'Trabalhamos com câmeras IP 4K de alta definição e facilitamos a instalação em até 18x no cartão de crédito! Fale com nosso consultor no WhatsApp:';
        actionUrl = getWhatsAppUrl('Olá! Quero saber mais sobre a instalação de câmeras parcelada em até 18x.');
      } else if (lower.includes('curitiba') || lower.includes('onde') || lower.includes('região') || lower.includes('localização')) {
        botResponse = 'Atendemos presencialmente toda Curitiba e Região Metropolitana (São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo e demais cidades vizinhas). Deseja agendar uma visita técnica gratuita?';
        actionUrl = getWhatsAppUrl('Olá! Gostaria de agendar uma visita técnica presencial em Curitiba/Região.');
      } else if (lower.includes('especialista') || lower.includes('presidente') || lower.includes('dhionatas') || lower.includes('consultoria') || lower.includes('maranhao') || lower.includes('maranhão')) {
        botResponse = 'Perfeito! Nosso presidente Dhionatas Máximo e os consultores seniores da Covertech estão à disposição agora no WhatsApp:';
        actionUrl = getWhatsAppUrl('Olá! Gostaria de falar com o time do presidente Dhionatas Máximo da Covertech.');
      } else {
        botResponse = 'Para te atender da melhor forma e com precisão técnica personalizada, vou te encaminhar agora para nosso time no WhatsApp!';
        actionUrl = getWhatsAppUrl(`Olá! Vim pelo CoverBot com a seguinte dúvida: "${userText}"`);
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        actionUrl,
        actionLabel,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Trigger Button on Desktop & Mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        
        {/* Floating Chat Modal */}
        {isOpen && (
          <div className="w-[90vw] sm:w-[380px] h-[520px] max-h-[82vh] bg-[#0E121B] border border-[#C9A227]/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Chat Header */}
            <div className="bg-[#141924] border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center text-[#E5C158]">
                    <Bot size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#141924]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    CoverBot
                    <span className="text-[10px] font-normal text-[#C9A227] bg-[#C9A227]/10 px-1.5 py-0.5 rounded border border-[#C9A227]/20">
                      IA Covertech
                    </span>
                  </h4>
                  <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online • Resposta Imediata
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Minimizar chat"
              >
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#0A0C10]/60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#C9A227] text-black font-semibold rounded-br-none shadow-md'
                        : 'bg-[#181E2C] text-slate-200 border border-white/10 rounded-bl-none shadow-lg'
                    }`}
                  >
                    <p>{msg.text}</p>
                    
                    {msg.actionUrl && (
                      <a
                        href={msg.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block bg-emerald-500 hover:bg-emerald-400 text-black font-bold p-2.5 rounded-xl text-center text-xs transition-colors shadow-md flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle size={14} className="fill-black/20" />
                        <span>{msg.actionLabel || 'Falar no WhatsApp'}</span>
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1 bg-[#181E2C] text-slate-400 px-3 py-2 rounded-xl rounded-bl-none w-16 border border-white/10">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Pills */}
            <div className="p-2 bg-[#121622] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickReplies.map((reply, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleUserMessage(reply)}
                  className="whitespace-nowrap text-[11px] bg-white/5 hover:bg-[#C9A227]/20 border border-white/10 hover:border-[#C9A227] text-slate-300 hover:text-white px-2.5 py-1 rounded-full transition-all cursor-pointer shrink-0"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserMessage(inputValue);
              }}
              className="p-3 bg-[#141924] border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua dúvida ou serviço..."
                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#C9A227]"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-8 h-8 rounded-xl bg-[#C9A227] disabled:opacity-40 text-black flex items-center justify-center transition-all cursor-pointer shrink-0"
                aria-label="Enviar mensagem"
              >
                <Send size={14} />
              </button>
            </form>

          </div>
        )}

        {/* Trigger Button with Badge */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-2.5 bg-gradient-to-r from-[#171C28] to-[#0F131C] border border-[#C9A227] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-black transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Abrir assistente virtual CoverBot"
        >
          {/* Subtle Outer Glow */}
          <span className="absolute -inset-1 rounded-full bg-[#C9A227]/30 blur-sm group-hover:bg-[#C9A227]/50 transition-all pointer-events-none" />

          <div className="relative flex items-center justify-center w-6 h-6 text-[#E5C158]">
            {isOpen ? <X size={22} /> : <Bot size={22} />}
          </div>

          <div className="relative hidden sm:flex flex-col text-left leading-tight pr-1">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A227] font-bold flex items-center gap-1">
              <Sparkles size={11} />
              CoverBot IA
            </span>
            <span className="text-xs font-bold text-white">Tire Dúvidas 24h</span>
          </div>

          {/* Unread Alert Ping */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-[#0A0C10] text-[10px] font-bold text-white flex items-center justify-center animate-bounce">
              1
            </span>
          )}
        </button>

      </div>
    </>
  );
};
