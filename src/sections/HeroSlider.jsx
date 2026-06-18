import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {type: 'image', src:'/slid2.png'}, // Imagem do HB20/Módulo
  {type: 'image', src:'/foto5.jpg'}, // Imagem institucional
  {type: 'image', src:'/servicos.png'}, // Imagem institucional
  {type: 'image', src:'/slid1.png'},
  {type: 'image',src:'/slid3.png'},
  {type: 'image',src:'/slid4.png'},
  {type: 'video',src:'/oficina.mp4'},
  {type: 'video',src:'/reparochicote.mp4'},
  {type: 'video',src:'/bmw.mp4'},
  {type: 'video',src:'/escolamecanico.mp4'},
  // Se colocar um arquivo de vídeo na pasta public, configure assim:
  // { type: 'video', src: '/video-oficina.mp4' }
  // Adicione as outras fotos da oficina aqui
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Se o slide atual for imagem, muda automaticamente após 6 segundos
    // Se for vídeo, você pode aumentar o tempo para casar com a duração do vídeo
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const currentMedia = SLIDES[index];

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-matrix-bg flex items-center">
      
      {/* BACKGROUND MEDIA MEDIA RENDERING */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }} // Ajuste a opacidade para leitura do texto
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            {currentMedia.type === 'video' ? (
              <video
                src={currentMedia.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={currentMedia.src}
                alt="Nexus Oficina Background"
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Efeito de sombreamento inferior para emenda das seções */}
        <div className="absolute inset-0 bg-gradient-to-t from-matrix-bg via-transparent to-transparent" />
      </div>

      {/* TEXTO E CONTEÚDO CENTRAL */}
      <div className="container mx-auto px-6 z-10 relative text-white max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-matrix-green font-mono tracking-widest text-sm uppercase border border-matrix-green/30 px-3 py-1 rounded bg-matrix-green/10">
            Tecnologia Automotiva de Ponta
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 tracking-tight">
            NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-white">OFICINA</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl font-light">
            Especialistas em veículos premium, diagnósticos avançados e reparos complexos de módulos eletrônicos. Alta tecnologia para o seu veículo.
          </p>
          <a 
            href="#agendamento" 
            className="inline-block bg-matrix-green text-black font-bold px-8 py-4 rounded shadow-glow hover:shadow-glow-intense transition-all duration-300 transform hover:-translate-y-1"
          >
            Agendar Diagnóstico
          </a>
        </motion.div>
      </div>
    </div>
  );
}