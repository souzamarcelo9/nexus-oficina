// src/sections/SpecialHighlight.jsx
import { motion } from 'framer-motion';
import { Cpu, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function SpecialHighlight() {
  return (
    <section id="hb20-special" className="py-24 bg-matrix-card text-white px-6 border-t border-gray-950 relative overflow-hidden">
      
      {/* Detalhe de fundo futurista (Grid de linhas sutil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* BLOCO DE IMAGEM COM ANIMAÇÃO E GLOW */}
          <motion.div 
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Efeito de Aura Neon Verde atrás da imagem */}
            <div className="absolute -inset-2 bg-gradient-to-r from-matrix-green/30 to-transparent rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
            
            <div className="relative rounded-xl border border-matrix-green/30 overflow-hidden bg-matrix-bg shadow-2xl">
              <img 
                src="/folder.png" 
                alt="Módulo do Hyundai HB20 - Reparo Técnico" 
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500" 
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-12">
                <span className="flex items-center gap-2 text-matrix-green font-mono text-xs tracking-wider">
                  <Cpu className="w-4 h-4 animate-pulse" /> REPARO DE MÓDULOS E CENTRAIS
                </span>
              </div>
            </div>
          </motion.div>

          {/* TEXTO INFORMATIVO E DE CONVERSÃO */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs uppercase tracking-wide">
              <AlertTriangle size={14} /> Alerta de Defeito Crônico
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Problemas no Módulo de Transmissão do <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">Hyundai HB20</span>?
            </h2>

            <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
              Muitos proprietários enfrentam trancos violentos nas trocas de marcha, travamento em modo de emergência ou perda completa de comunicação com o painel. Concessionárias costumam condenar a caixa de câmbio inteira, gerando orçamentos abusivos.
            </p>

            <div className="border-l-2 border-matrix-green pl-4 my-4 bg-matrix-green/5 py-3 pr-2 rounded-r">
              <p className="text-sm text-gray-200 font-medium">
                Na <span className="text-matrix-green font-bold">Nexus Oficina</span>, nós isolamos a falha diretamente na placa eletrônica do módulo de transmissão, efetuando o reparo com componentes de engenharia automotiva atualizados.
              </p>
            </div>

            {/* Lista de Benefícios Rápidos */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-mono text-gray-400">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={16} className="text-matrix-green shrink-0" /> Diagnóstico via Scanner Dedicado
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={16} className="text-matrix-green shrink-0" /> Economia de até 70% vs Troca do Câmbio
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={16} className="text-matrix-green shrink-0" /> Garantia técnica estruturada
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={16} className="text-matrix-green shrink-0" /> Engenheiro especializado no RJ
              </li>
            </ul>

            <div className="pt-4">
              <a 
                href="#agendamento" 
                className="inline-flex bg-matrix-green text-black font-bold px-8 py-3.5 rounded shadow-glow hover:shadow-glow-intense transition-all duration-300 transform hover:-translate-y-0.5 font-mono text-sm tracking-wider"
              >
                SOLICITAR DIAGNÓSTICO HB20
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}