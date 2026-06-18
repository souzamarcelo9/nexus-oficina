// src/sections/LocationSection.jsx
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="como-chegar" className="py-24 bg-matrix-card text-white px-6 border-t border-gray-950 relative overflow-hidden">
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* TEXTO E INFORMAÇÕES DE ROTA */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-matrix-green font-mono text-sm tracking-widest uppercase block">
              // 05 . GEOLOCATION
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Como Chegar na <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">Nexus Oficina</span>
            </h2>
            <p className="text-gray-300 font-light leading-relaxed">
              Estamos localizados estrategicamente na região de Anchieta, proporcionando fácil acesso para motoristas vindos de diferentes pontos do Rio de Janeiro que buscam manutenção premium com transparência.
            </p>

            {/* Painel com Endereço Completo */}
            <div className="bg-matrix-bg p-5 rounded-xl border border-gray-900 space-y-4">
              <div className="flex gap-3">
                <MapPin className="text-matrix-green shrink-0 mt-1" size={18} />
                <div className="font-mono text-xs text-gray-400">
                  <p className="text-gray-200 font-bold text-sm font-sans mb-1">Endereço Operacional</p>
                  <p>Estrada do Engenho Novo, 623</p>
                  <p>Anchieta — Rio de Janeiro - RJ</p>
                  <p>CEP: 21625-130</p>
                </div>
              </div>
            </div>

            {/* Botão de Link Direto para o Maps */}
            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/9Kx8Cd5xXWcSMCdn7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-matrix-green text-black font-bold font-mono text-xs tracking-wider px-6 py-3.5 rounded shadow-glow hover:shadow-glow-intense transition-all duration-300"
              >
                <Navigation size={14} fill="currentColor" />
                ABRIR NO GOOGLE MAPS / TRAÇAR ROTA
              </a>
            </div>
          </motion.div>

          {/* MAPA EMBUTIDO (GOOGLE MAPS IFRAME) */}
          <motion.div 
            className="lg:col-span-7 h-[350px] md:h-[400px] w-full rounded-xl border border-matrix-green/20 overflow-hidden shadow-2xl relative bg-matrix-bg group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Mapa Interativo */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.2913164993134!2d-43.3986968!3d-22.8286952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be3f2cc8bb17b%3A0x1d1fc4da1f1a5f6a!2sEstr.%20do%20Engenho%20Novo%2C%20623%20-%20Anchieta%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021625-130!5e0!3m2!1spt-BR!2sbr!4v1718712345678!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.2)" }} // Filtro Matrix/Escuro para casar com o site
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Nexus Oficina"
            />
            {/* Detalhe estético HUD */}
            <div className="absolute top-4 left-4 font-mono text-[9px] bg-black/80 px-2 py-1 border border-matrix-green/30 text-matrix-green pointer-events-none rounded flex items-center gap-1.5">
              <Compass size={10} className="animate-spin [animation-duration:8s]" /> GPS_SIGNAL_STABLE
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}