// src/sections/AboutSection.jsx
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Award, Target } from 'lucide-react';

export default function AboutSection() {
  // Configuração de animação para os blocos de métricas
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="sobre" className="py-24 bg-matrix-bg text-white px-6 relative overflow-hidden">
      {/* Detalhe estético de linha de varredura (Matrix Background Scanline) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-matrix-green/30 to-transparent animate-pulse" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* COLUNA 1: TEXTO INSTITUCIONAL */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-matrix-green font-mono text-sm tracking-widest uppercase block">
              // 01 . A DIGITAL ENGINE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Alta Performance em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">
                Engenharia Automotiva
              </span>
            </h2>
            
            <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
              A <strong className="text-white font-medium">Nexus Oficina</strong> nasceu da necessidade de preencher uma lacuna crítica no mercado de reposição automotiva: a fusão perfeita entre a mecânica de precisão e a eletrônica embarcada avançada.
            </p>
            
            <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
              Especializados em veículos das marcas mais exigentes do mundo, nossa infraestrutura replica os padrões de diagnóstico de montadoras premium europeias e asiáticas. Não trabalhamos com suposições; decodificamos barramentos de rede CAN, analisamos oscilogramas e reconstruímos módulos eletrônicos de alta complexidade técnica com precisão laboratorial.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs text-matrix-green">
              <div className="flex items-center gap-2 bg-matrix-card border border-matrix-green/20 px-3 py-1.5 rounded">
                <Cpu size={14} /> DIAGNÓSTICO DIGITAL
              </div>
              <div className="flex items-center gap-2 bg-matrix-card border border-matrix-green/20 px-3 py-1.5 rounded">
                <ShieldCheck size={14} /> PADRÃO PREMIUM
              </div>
            </div>
          </motion.div>

          {/* COLUNA 2: CARD GRID DE METRICAS/VALORES */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-matrix-card border border-gray-900 p-6 rounded-xl hover:border-matrix-green/30 transition-colors group"
            >
              <Award className="w-8 h-8 text-matrix-green mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-mono font-bold text-white tracking-tight">100%</h3>
              <p className="text-xs font-mono text-matrix-green uppercase tracking-wider mt-1">// Especializados</p>
              <p className="text-gray-400 text-xs font-light mt-2">Corpo técnico treinado e ferramental dedicado à linha premium.</p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-matrix-card border border-gray-900 p-6 rounded-xl hover:border-matrix-green/30 transition-colors group"
            >
              <Target className="w-8 h-8 text-matrix-green mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-mono font-bold text-white tracking-tight">Precision</h3>
              <p className="text-xs font-mono text-matrix-green uppercase tracking-wider mt-1">// Diagnósticos</p>
              <p className="text-gray-400 text-xs font-light mt-2">Scanners osciloscópicos de última geração para falhas intermitentes.</p>
            </motion.div>

            <div className="sm:col-span-2 p-6 bg-gradient-to-br from-matrix-card to-matrix-bg border border-matrix-green/10 rounded-xl flex items-center justify-between shadow-glow/5">
              <div className="font-mono">
                <p className="text-xs text-gray-500">// LOCALIZAÇÃO</p>
                <p className="text-sm font-bold text-gray-200 mt-1">Anchieta — Rio de Janeiro, RJ</p>
              </div>
              <div className="w-2.5 h-2.5 bg-matrix-green rounded-full animate-pulse shadow-glow" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}