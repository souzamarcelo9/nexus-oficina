// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-matrix-bg text-gray-400 font-mono text-sm border-t border-matrix-green/10 relative overflow-hidden pt-16 pb-8">
      {/* Detalhe estético de linha neon superior */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-matrix-green/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        {/* COLUNA 1: LOGO E SOBRE (4 colunas) */}
        <div className="md:col-span-4 space-y-4">
          <img 
            src="/logo.png" 
            alt="Nexus Oficina Logo" 
            className="h-9 w-auto object-contain"
          />
          <p className="text-xs text-gray-500 font-light leading-relaxed font-sans">
            Alta tecnologia em diagnóstico automotivo, reparos eletromecânicos e eletrônica embarcada de alta complexidade para veículos premium.
          </p>
          
          {/* Redes Sociais com Injeção Direta (Livre de Erros de Versão) */}
          <div className="flex items-center gap-4 pt-2">
            {/* Instagram (SVG Nativo) */}
            <motion.a
              href="https://www.instagram.com/nexus.oficina/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-2 bg-matrix-card border border-gray-800 rounded-md text-matrix-green hover:border-matrix-green shadow-sm hover:shadow-glow transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </motion.a>

            {/* Facebook (SVG Nativo) */}
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-2 bg-matrix-card border border-gray-800 rounded-md text-matrix-green hover:border-matrix-green shadow-sm hover:shadow-glow transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </motion.a>

            {/* Youtube (SVG Nativo) */}
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-2 bg-matrix-card border border-gray-800 rounded-md text-matrix-green hover:border-matrix-green shadow-sm hover:shadow-glow transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                <polygon points="10 15 15 12 10 9"/>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* COLUNA 2: LINKS RÁPIDOS / NAVEGAÇÃO (3 colunas) */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-white font-bold text-xs tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">
            // NAVEGAÇÃO
          </h3>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-matrix-green transition-colors block">SYSTEM.HOME</a></li>
            <li><a href="#sobre" className="hover:text-matrix-green transition-colors block">SYSTEM.SOBRE</a></li>
            <li><a href="#servicos" className="hover:text-matrix-green transition-colors block">SYSTEM.SERVICOS</a></li>
            <li><a href="#galeria" className="hover:text-matrix-green transition-colors block">SYSTEM.GALERIA</a></li>
            <li><a href="#agendamento" className="hover:text-matrix-green transition-colors block">SYSTEM.AGENDAMENTO</a></li>
          </ul>
        </div>

        {/* COLUNA 3: CONTATO E CANAIS (5 colunas) */}
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-white font-bold text-xs tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">
            // CONTATO_LOG
          </h3>
          <ul className="space-y-3 text-xs font-light">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-matrix-green shrink-0 mt-0.5" />
              <span>Estrada do Engenho Novo, 623<br />Anchieta — Rio de Janeiro, RJ</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-matrix-green shrink-0" />
              <a href="tel:21998761020" className="hover:text-matrix-green transition-colors">(21) 99876-1020</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-matrix-green shrink-0" />
              <a href="mailto:contato@nexusoficina.com.br" className="hover:text-matrix-green transition-colors">contato@nexusoficina.com.br</a>
            </li>
            <li className="flex items-start gap-3 border-t border-gray-900 pt-3 text-gray-500">
              <Clock size={16} className="text-matrix-green/60 shrink-0 mt-0.5" />
              <span>Segunda a Sexta: 08:00 às 18:00<br />Sábado: Fechado</span>
            </li>
          </ul>
        </div>

      </div>

      {/* LINHA FINAL: DIREITOS AUTORAIS */}
      <div className="container mx-auto px-6 max-w-6xl border-t border-gray-950 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-600">
        <p>© {currentYear} NEXUS OFICINA. Todos os direitos reservados.</p>
        <p className="tracking-wider">STATUS: <span className="text-matrix-green animate-pulse">ONLINE_</span></p>
      </div>
    </footer>
  );
}