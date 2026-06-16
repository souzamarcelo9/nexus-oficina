// src/components/WhatsAppButton.jsx
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Configurações do WhatsApp
  const phoneNumber = "5521998761020"; // Código do país (55) + DDD (21) + Número
  const textMessage = "Olá! Gostaria de agendar um diagnóstico avançado na Nexus Oficina.";
  
  // Codifica a mensagem para o padrão de URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      
      {/* Efeito de Ondas/Pulsação Neon por trás do botão */}
      <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-matrix-green/30 opacity-75 pointer-events-none" />

      {/* Botão Principal com Framer Motion */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-matrix-bg border-2 border-matrix-green text-matrix-green rounded-full shadow-glow hover:shadow-glow-intense hover:bg-matrix-green hover:text-black transition-colors duration-300 group"
      >
        {/* Ícone de Balão de Conversa */}
        <MessageCircle className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12" />

        {/* Tooltip Indicativo que aparece no Hover (Desktop) */}
        <span className="absolute right-16 bg-matrix-card border border-matrix-green/30 text-matrix-green text-xs font-mono tracking-wider py-1.5 px-3 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
          // SUPORTE TÉCNICO
        </span>
      </motion.a>
    </div>
  );
}