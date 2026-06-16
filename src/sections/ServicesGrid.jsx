import { motion } from 'framer-motion';
import { Cpu, Activity, Shield, Disc, Wrench, Layers, Zap, Car } from 'lucide-react';

const listaServicos = [
  { title: "Reparo de Módulos Eletrônicos", icon: Cpu, desc: "Conserto especializado de ECUs, centrais e defeitos crônicos." },
  { title: "Diagnóstico Avançado", icon: Activity, desc: "Scanners de última geração para identificar falhas com precisão." },
  { title: "Manutenção de Sistema ABS", icon: Disc, desc: "Reparo em blocos ABS e sensores de velocidade de frenagem." },
  { title: "Reparo de Airbag", icon: Shield, desc: "Programação de módulos e manutenção preventiva do sistema de segurança." },
  { title: "Revisão Completa", icon: Wrench, desc: "Check-up preventivo baseado nos manuais das montadoras premium." },
  { title: "Câmbio Automático", icon: Layers, desc: "Troca de fluido, diagnóstico e solução de problemas de transmissão." },
  { title: "Injeção Eletrônica", icon: Zap, desc: "Análise de bicos, sensores e descarbonização de motores." },
  { title: "Veículos Premium", icon: Car, desc: "Atendimento especializado para marcas importadas e nacionais de luxo." },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-matrix-bg text-white px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white tracking-wider">SERVIÇOS REALIZADOS</h2>
          <div className="w-24 h-1 bg-matrix-green mx-auto mt-4 shadow-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listaServicos.map((servico, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-matrix-card border border-gray-800 p-6 rounded-lg hover:border-matrix-green/50 transition-all duration-300 group hover:shadow-glow"
            >
              <servico.icon className="w-10 h-10 text-matrix-green mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-lg mb-2 text-gray-100">{servico.title}</h3>
              <p className="text-gray-400 text-sm font-light">{servico.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}