// src/sections/TestimonialsSection.jsx
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const depoimentos = [
  {
    nome: "Cinthia Oliveira",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    tempo: "um mês atrás",
    texto: "Serviço de qualidade prestado pelos profissionais Nathan e Lucas. Conseguiram resolver meu problema e com preço justo. Virou a oficina de referência quando eu e minha família precisa. Recomendo!",
    estrelas: 5
  },
  {
    nome: "Larissa Dias",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    tempo: "um mês atrás",
    texto: "Quero deixar aqui meu elogio a essa oficina, que é daquelas que a gente confia de olhos fechados. Atendimento impecável, atenção aos detalhes, honestidade e muito profissionalismo em tudo que fazem. Dá para ver o cuidado, a dedicação e o conhecimento em cada serviço realizado. Não é só conserto, é compromisso com o cliente, respeito e vontade real de entregar o melhor. Trabalho bem feito, equipe competente e um ambiente onde a gente se sente seguro e bem atendido. Recomendo de verdade, porque quando o serviço é bom, a gente faz questão de falar.",
    estrelas: 5
  },
  {
    nome: "Vitor Frota",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    tempo: "4 meses atrás",
    texto: "Excelente para quem busca honestidade, transparência, ótima qualidade de serviço e com o PREÇO JUSTO! Super recomendo",
    estrelas: 5
  },
  {
    nome: "Patrick Felix",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    tempo: "2 meses atrás",
    texto: "Excelente oficina com profissionais altamente qualificados. Loja limpa e organizada.",
    estrelas: 5
  },
  {
    nome: "Luan Lins",
    avatar: "https://ui-avatars.com/api/?name=Luan+Lins&background=131A20&color=39FF14&bold=true",
    tempo: "um ano atrás",
    texto: "Muito competente, não fica com ladainhas, vai direto ao ponto e explica o problema do carro e a necessidade da execução do serviço. Hoje, é minha primeira escolha quando se trata de cuidar do meu carro. Foi responsável pela mecânica do meu antigo carro, um Kwid, e agora do meu novo, que é um Sorento. Cumpre os prazos e os valores são compatíveis com o nível de serviço que oferece.",
    estrelas: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-matrix-bg text-white px-6 border-t border-gray-950 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-16">
          <span className="text-matrix-green font-mono text-sm tracking-widest uppercase block mb-2">
            // 04 . SOCIAL PROOF
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            A Opinião de Quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">Confia na Nexus</span>
          </h2>
          <div className="w-24 h-1 bg-matrix-green mx-auto mt-4 shadow-glow" />
        </div>

        {/* CONTAINER MASONRY (CSS COLUMNS) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border mx-auto mb-16 space-y-6">
          {depoimentos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-matrix-card border border-gray-900 p-6 rounded-xl flex flex-col justify-between hover:border-matrix-green/20 transition-all duration-300 shadow-xl relative group break-inside-avoid inline-block w-full"
            >
              <div>
                {/* Cabeçalho do Card */}
                <div className="flex items-center gap-3 mb-4">
                  <img src={item.avatar} alt={item.nome} className="w-10 h-10 rounded-full object-cover border border-gray-800" />
                  <div>
                    <h3 className="font-bold text-sm text-gray-200">{item.nome}</h3>
                    <p className="text-[10px] font-mono text-gray-500">{item.tempo}</p>
                  </div>
                </div>

                {/* Estrelas */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(item.estrelas)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-300 text-sm font-sans font-light leading-relaxed">
                  "{item.texto}"
                </p>
              </div>

              {/* Detalhe estético HUD */}
              <div className="absolute top-3 right-3 text-gray-700 font-mono text-[9px] group-hover:text-matrix-green/30 transition-colors">
                // FEEDBACK_LOG_{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÃO DO GOOGLE */}
        <div className="text-center">
          <motion.a
            href="https://maps.app.goo.gl/9Kx8Cd5xXWcSMCdn7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-sans font-bold text-white rounded-full bg-gradient-to-r from-[#0d4f1d] via-[#16652b] to-[#14532d] border border-matrix-green/30 hover:border-matrix-green shadow-lg hover:shadow-glow-intense transition-all duration-300 tracking-wide"
          >
            <Star size={16} fill="currentColor" className="text-amber-400 animate-pulse" />
            O que nossos clientes dizem no Google
            <ExternalLink size={14} className="opacity-60" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}