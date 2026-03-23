import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ThesisSection from './sections/ThesisSection';
import InfrastructureSection from './sections/InfrastructureSection';
import SecuritySection from './sections/SecuritySection';
import DeploySection from './sections/DeploySection';
import ComplianceSection from './sections/ComplianceSection';
import PerformanceSection from './sections/PerformanceSection';
import EcosystemSection from './sections/EcosystemSection';
import ContactSection from './sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll) return;
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-ignum-black min-h-screen">
      <Navigation />
      
      <main className="relative">
        <HeroSection />
        <ThesisSection />
        <InfrastructureSection />
        <SecuritySection />
        <DeploySection />
        <ComplianceSection />
        <PerformanceSection />
        <EcosystemSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
