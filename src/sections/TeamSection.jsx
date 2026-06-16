// src/sections/TeamSection.jsx
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu } from 'lucide-react';

const equipe = [
  {
    nome: "Nathan Lima",
    cargo: "Engenharia Eletrônica & Diagnóstico",
    imagem: "/mecanico3.png", // Sua foto enviada
    certificacoes: ["Diagnóstico Avançado", "Reparo de Módulos", "Redes CAN"]
  },
  {
    nome: "Lucas Mendonça",
    cargo: "Engenharia Eletrônica & Diagnóstico",
    imagem: "/mecanico1.png", // Sua foto enviada
    certificacoes: ["Diagnóstico Avançado", "Reparo de Módulos", "Redes CAN"]
  },
  
];

export default function TeamSection() {
  return (
    <section id="equipe" className="py-24 bg-matrix-card text-white px-6 border-t border-gray-950 relative overflow-hidden">
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-16">
          <span className="text-matrix-green font-mono text-sm tracking-widest uppercase block mb-2">
            // 03 . EXPERTS ON DEMAND
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Especialistas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">Alta Complexidade</span>
          </h2>
          <div className="w-24 h-1 bg-matrix-green mx-auto mt-4 shadow-glow" />
        </div>

        {/* GRID DE PROFISSIONAIS */}
        <div className="flex flex-wrap justify-center gap-8">
          {equipe.map((membro, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="w-full sm:w-[350px] bg-matrix-bg border border-gray-900 rounded-xl overflow-hidden hover:border-matrix-green/40 transition-all duration-300 shadow-xl hover:shadow-glow group"
            >
              
              {/* CONTAINER DA FOTO COM PROPORÇÃO IGUAL À ENVIADA */}
              <div className="w-full h-[450px] overflow-hidden relative bg-gray-950">
                <img 
                  src={membro.imagem} 
                  alt={membro.nome} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                {/* Gradiente escuro sutil para dar contraste na base da imagem */}
                <div className="absolute inset-0 bg-gradient-to-t from-matrix-bg via-transparent to-transparent" />
              </div>

              {/* INFORMAÇÕES TÉCNICAS */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{membro.nome}</h3>
                  <p className="text-matrix-green font-mono text-xs mt-1 uppercase tracking-wider">// {membro.cargo}</p>
                </div>

                <div className="w-full h-[1px] bg-gray-900" />

                {/* TAGS DE CAPACITAÇÃO */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Especialidades Ativas</p>
                  <div className="flex flex-wrap gap-2">
                    {membro.certificacoes.map((cert, cIdx) => (
                      <span 
                        key={cIdx} 
                        className="inline-flex items-center gap-1.5 bg-matrix-card border border-matrix-green/15 text-gray-300 font-mono text-xs py-1 px-2.5 rounded-md"
                      >
                        <ShieldCheck size={12} className="text-matrix-green" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}