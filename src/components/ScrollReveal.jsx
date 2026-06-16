// src/components/ScrollReveal.jsx
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Estado inicial: Invisível e deslocado para baixo
      whileInView={{ opacity: 1, y: 0 }} // Estado quando entra na tela: Opacidade total e posição original
      viewport={{ 
        once: true,      // Executa a animação apenas uma vez (não repete ao subir o scroll)
        margin: "-150px" // Dispara a animação 150px antes da seção atingir o topo/meio da viewport
      }}
      transition={{ 
        duration: 0.8,   // Duração da transição (0.8 segundos para suavidade)
        ease: [0.21, 1.02, 0.43, 1.01] // Curva de aceleração customizada (Estilo Premium/Cubic Bezier)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}