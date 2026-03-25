import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import NoiseOverlay from './components/NoiseOverlay';
import FactsBar from './components/FactsBar';
import HeroSection from './sections/HeroSection';
import ProofSurface from './sections/ProofSurface';
import TheFieldSection from './sections/TheFieldSection';
import ThesisSection from './sections/ThesisSection';
import InfrastructureSection from './sections/InfrastructureSection';
import SecuritySection from './sections/SecuritySection';
import DeploySection from './sections/DeploySection';
import CommercialModel from './sections/CommercialModel';
import InstitutionalStructure from './sections/InstitutionalStructure';
import ExecutionDiscipline from './sections/ExecutionDiscipline';
import RoadmapSection from './sections/RoadmapSection';
import ComplianceSection from './sections/ComplianceSection';
import EcosystemSection from './sections/EcosystemSection';
import TokenSection from './sections/TokenSection';
import PrivateAccess from './sections/PrivateAccess';
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
      <NoiseOverlay />
      <Navigation />
      <main className="relative">
        {/* 1. Hero */}
        <HeroSection className="z-10" />
        {/* Facts ticker */}
        <FactsBar />
        {/* 2. Proof Surface */}
        <ProofSurface />
        {/* 3. The Sovereign Stack */}
        <TheFieldSection className="z-20" />
        {/* 4. Infrastructure Basis */}
        <InfrastructureSection className="z-30" />
        {/* 5. Connectivity */}
        <DeploySection className="z-40" />
        {/* 6. Commercial Model */}
        <CommercialModel />
        {/* 7. Institutional Structure */}
        <InstitutionalStructure />
        {/* 8. Execution Discipline */}
        <ExecutionDiscipline />
        {/* 9. Roadmap */}
        <RoadmapSection />
        {/* Supporting sections */}
        <ThesisSection className="z-50" />
        <SecuritySection className="z-[60]" />
        <ComplianceSection className="z-[70]" />
        <EcosystemSection className="z-[80]" />
        <TokenSection className="z-[85]" />
        {/* 10. Private Access */}
        <PrivateAccess />
        {/* Contact */}
        <ContactSection className="z-[90]" />
      </main>
    </div>
  );
}

export default App;
