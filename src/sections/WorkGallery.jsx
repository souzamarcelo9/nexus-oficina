// src/sections/WorkGallery.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// Adicione aqui os caminhos das fotos dos trabalhos realizados pela oficina
const IMAGENS_GALERIA = [
  { src: '/IMG_4012.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_4013.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_4282.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_4283.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_4591.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_4657.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_4910.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_5209.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_7183.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_7574.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_7593.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_7949.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_7971.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_8280.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_8860.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_8880.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_8886.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_9178.jpg', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/IMG_9186.PNG', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/diagnostico.png', legenda: "Nexus Oficina - Especialistas em veículos Premium" },
  { src: '/modulo.png', legenda: "Reparo e manutenção em módulos" },
  { src: '/revisao.png', legenda: "Revisão de veículo" },


];

export default function WorkGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 para esquerda, 1 para direita

  // Efeito de autoplay para a galeria (troca a cada 5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      proximoSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    })
  };

  const proximoSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % IMAGENS_GALERIA.length);
  };

  const slideAnterior = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + IMAGENS_GALERIA.length) % IMAGENS_GALERIA.length);
  };

  return (
    <section id="galeria" className="py-24 bg-matrix-bg text-white px-6 border-t border-gray-950 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-12">
          <span className="text-matrix-green font-mono text-sm tracking-widest uppercase block mb-2">
            // 02 . VISUAL LOGS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <Camera className="text-matrix-green w-6 h-6 md:w-8 md:h-8" /> 
            Nossa Oficina <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">Em Ação</span>
          </h2>
          <div className="w-24 h-1 bg-matrix-green mx-auto mt-4 shadow-glow" />
        </div>

        {/* CONTAINER DO CARROSSEL */}
        <div className="relative h-[300px] sm:h-[550px] w-full overflow-hidden rounded-xl border border-gray-900 bg-matrix-card shadow-2xl group">
          
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={currentIndex}
              src={IMAGENS_GALERIA[currentIndex].src}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Sombra interna para destacar texto e botões */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />

          {/* BOTÕES DE NAVEGAÇÃO (Aparecem no hover em desktop) */}
          <button
            onClick={slideAnterior}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-matrix-bg/80 border border-matrix-green/30 text-matrix-green rounded-full hover:bg-matrix-green hover:text-black transition-all md:opacity-0 md:group-hover:opacity-100 shadow-glow"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={proximoSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-matrix-bg/80 border border-matrix-green/30 text-matrix-green rounded-full hover:bg-matrix-green hover:text-black transition-all md:opacity-0 md:group-hover:opacity-100 shadow-glow"
          >
            <ChevronRight size={20} />
          </button>

          {/* LEGENDA DA IMAGEM ATUAL */}
          <div className="absolute bottom-6 left-6 right-6 font-mono">
            <p className="text-matrix-green text-xs tracking-wider uppercase mb-1">
              // LOG_FILE_{currentIndex + 1}.SYS
            </p>
            <p className="text-gray-200 text-sm md:text-base font-light">
              {IMAGENS_GALERIA[currentIndex].legenda}
            </p>
          </div>

          {/* PONTOS INDICADORES (DOTS) */}
          <div className="absolute top-6 right-6 flex gap-1.5">
            {IMAGENS_GALERIA.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-matrix-green shadow-glow' : 'w-2 bg-gray-600'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}