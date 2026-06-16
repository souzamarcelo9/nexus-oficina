// src/sections/MovingCarSection.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MovingCarSection() {
  const containerRef = useRef(null);
  
  // Captura o progresso do scroll especificamente dentro desta seção
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Começa quando o topo da seção entra na tela e termina quando ela sai
  });

  // Mapeia o scroll para a posição X do carro (vai de -80% fora da tela até 100% cruzando a tela)
  const carX = useTransform(scrollYProgress, [0, 1], ["-50%", "120%"]);
  
  // Mapeia o scroll para o rastro neon esticar atrás do carro
  const trailWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      className="h-[40vh] bg-matrix-bg text-white relative overflow-hidden flex items-center border-t border-b border-gray-950"
    >
      {/* 1. Linha da Estrada / Pista Neon */}
      <div className="absolute w-full h-[2px] bg-gray-900 bottom-1/3 left-0">
        {/* Rastro Verde Neon Dinâmico */}
        <motion.div 
          style={{ width: trailWidth }} 
          className="h-full bg-matrix-green shadow-glow-intense"
        />
      </div>

      {/* 2. Textos Tecnológicos de Fundo (Estilo Matrix Decodificando) */}
      <div className="absolute inset-x-0 top-10 flex justify-between px-12 opacity-10 font-mono text-xs text-matrix-green pointer-events-none select-none">
        <div>SYS.LOC_ANCHIETA // SPEED_SENSOR_OK</div>
        <div className="hidden md:block">DYNAMIC_SCAN_ACTIVE // [0x7FFA23101B]</div>
        <div>NEXUS_ENGINE_STAGE_2</div>
      </div>

      {/* 3. O CARRO EM MOVIMENTO */}
      <motion.div 
        style={{ x: carX }} 
        className="absolute bottom-[calc(1/3-18px)] left-0 z-10 w-[280px] sm:w-[400px] pointer-events-none"
      >
        {/* 
          DICA: Substitua o src por uma imagem de um carro esportivo premium visto de perfil 
          com fundo transparente (Ex: Porsche, BMW ou Audi em PNG).
        */}
        <img 
          src="/vecteezy_sport-car-isolated-on-transparent-background-3d-rendering_19069363.png" 
          alt="Carro Premium em Movimento" 
          className="w-full h-auto object-contain filter drop-shadow-[0_4px_10px_rgba(57,255,20,0.2)]"
        />
        
        {/* Luz Neon embaixo do Carro (Underglow) */}
        <div className="absolute bottom-2 left-1/4 w-1/2 h-2 bg-matrix-green/50 blur-md rounded-full animate-pulse" />
      </motion.div>

      {/* Texto de efeito sobreposto */}
      <div className="container mx-auto px-6 relative z-0 flex flex-col justify-center h-full">
        <h3 className="font-mono text-xs tracking-[0.3em] text-matrix-green uppercase mb-2">
          // PERFORMANCE_CHECK
        </h3>
        <p className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-500 max-w-md uppercase">
          Precisão cirúrgica em <span className="text-white">sistemas de alta rodagem</span>.
        </p>
      </div>
    </section>
  );
}