// src/components/Navbar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-matrix-bg/70 backdrop-blur-md border-b border-matrix-green/10 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <a href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo_oficial.jpg" 
            alt="Nexus Oficina Logo" 
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wider">
          <a href="#" className="text-gray-400 hover:text-matrix-green transition-colors">// HOME</a>
          <a href="#servicos" className="text-gray-400 hover:text-matrix-green transition-colors">// SERVIÇOS</a>
          <a href="#hb20-special" className="text-gray-400 hover:text-matrix-green transition-colors">// HB20</a>
          <a href="#galeria" className="text-gray-400 hover:text-matrix-green transition-colors">// GALERIA</a>
          <a 
            href="#agendamento" 
            className="border border-matrix-green/40 text-matrix-green hover:bg-matrix-green/10 px-4 py-2 rounded transition-all duration-300 shadow-glow hover:border-matrix-green"
          >
            AGENDAR DIAGNÓSTICO
          </a>
          
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-matrix-green p-2 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-matrix-bg/95 border-b border-matrix-green/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5 font-mono text-base tracking-wide">
              <a href="#" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-matrix-green">// HOME</a>
              <a href="#servicos" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-matrix-green">// SERVIÇOS</a>
              <a href="#hb20-special" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-matrix-green">// CASO HB20</a>
              <a 
                href="#agendamento" 
                onClick={() => setIsOpen(false)}
                className="block text-center border border-matrix-green text-matrix-green py-3 rounded bg-matrix-green/5"
              >
                AGENDAR DIAGNÓSTICO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}