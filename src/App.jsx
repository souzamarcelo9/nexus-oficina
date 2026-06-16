// src/App.jsx
import Navbar from './components/Navbar';
import HeroSlider from './sections/HeroSlider';
import AboutSection from './sections/AboutSection';
import ServicesGrid from './sections/ServicesGrid';
import SpecialHighlight from './sections/SpecialHighlight';
import LeadForm from './sections/LeadForm';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollReveal from './components/ScrollReveal'; // <-- Importe o novo Wrapper
import TeamSection from './sections/TeamSection';
import WorkGallery from './sections/WorkGallery';
import Footer from './components/Footer';
import MovingCarSection from './sections/MovingCarSection';

export default function App() {
  return (
    <div className="min-h-screen bg-matrix-bg font-sans selection:bg-matrix-green selection:text-black overflow-x-hidden pt-20">
      
      <Navbar />
      
      {/* O HeroSlider geralmente não precisa de scroll reveal pois já está visível logo no primeiro carregamento */}
      <HeroSlider />
      
      {/* Seção Sobre */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* Seção de Serviços */}
      <ScrollReveal>
        <div id="servicos">
          <ServicesGrid />
        </div>
      </ScrollReveal>

      {/* Galeria de Fotos dos Serviços */}
      <ScrollReveal>
        <WorkGallery /> {/* <-- Posicione aqui */}
      </ScrollReveal>

      {/* Seção Interativa do Carro (Não precisa de ScrollReveal pois ela se move pelo próprio scroll) */}
      <MovingCarSection /> {/* <-- Posicione aqui */}

      <ScrollReveal>
        <TeamSection /> {/* <-- Posicione aqui abaixo do Sobre e acima dos Serviços */}
      </ScrollReveal>

      {/* Seção Destaque HB20 */}
      <ScrollReveal>
        <SpecialHighlight />
      </ScrollReveal>

      {/* Formulário de Captura de Leads */}
      <ScrollReveal>
        <LeadForm />
      </ScrollReveal>

      {/* Rodapé */}
      <Footer />

      <WhatsAppButton />

    </div>
  );
}