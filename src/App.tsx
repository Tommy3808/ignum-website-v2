import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import NoiseOverlay from './components/NoiseOverlay';
import FactsBar from './components/FactsBar';
import HeroSection from './sections/HeroSection';
import TheFieldSection from './sections/TheFieldSection';
import ProofSection from './sections/ProofSection';
import ProofSurface from './sections/ProofSurface';
import ThesisSection from './sections/ThesisSection';
import InfrastructureSection from './sections/InfrastructureSection';
import SecuritySection from './sections/SecuritySection';
import DeploySection from './sections/DeploySection';
import CommercialModel from './sections/CommercialModel';
import InstitutionalStructure from './sections/InstitutionalStructure';
import ExecutionDiscipline from './sections/ExecutionDiscipline';
import RoadmapSection from './sections/RoadmapSection';
import JurisdictionSection from './sections/JurisdictionSection';
import ComplianceSection from './sections/ComplianceSection';
import EcosystemSection from './sections/EcosystemSection';
import ArchivoSection from './sections/ArchivoSection';
import TokenSection from './sections/TokenSection';
import FieldAccessSection from './sections/FieldAccessSection';
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
        <FactsBar />
        {/* 2. The Sovereign Stack */}
        <TheFieldSection className="z-15" />
        {/* 3. Proof — Live Operations + Terminal Logs + TommyAI samples */}
        <ProofSection className="z-16" />
        {/* 4. Proof Surface — 6 data cards con badges */}
        <ProofSurface />
        {/* 5. Infrastructure Basis */}
        <InfrastructureSection className="z-30" />
        {/* 6. Thesis */}
        <ThesisSection className="z-35" />
        {/* 7. Connectivity */}
        <DeploySection className="z-40" />
        {/* 8. Security */}
        <SecuritySection className="z-45" />
        {/* 9. Jurisdiction */}
        <JurisdictionSection />
        {/* 10. Commercial Model */}
        <CommercialModel />
        {/* 11. Institutional Structure */}
        <InstitutionalStructure />
        {/* 12. Execution Discipline */}
        <ExecutionDiscipline />
        {/* 13. Roadmap */}
        <RoadmapSection />
        {/* 14. Compliance */}
        <ComplianceSection className="z-[60]" />
        {/* 15. Ecosystem */}
        <EcosystemSection className="z-[70]" />
        {/* 16. Archivo */}
        <ArchivoSection />
        {/* 17. Token $IGNUM */}
        <TokenSection className="z-[75]" />
        {/* 18. Field Access */}
        <FieldAccessSection />
        {/* 19. Private Access */}
        <PrivateAccess />
        {/* 20. Contact */}
        <ContactSection className="z-[90]" />
      </main>
    </div>
  );
}

export default App;
