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
import NoiseOverlay from './components/NoiseOverlay';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all sections to mount before setting up global snap
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-ignum-black min-h-screen">
      <Navigation />
      <NoiseOverlay />
      
      <main className="relative">
        <HeroSection className="z-10" />
        <ThesisSection className="z-20" />
        <InfrastructureSection className="z-30" />
        <SecuritySection className="z-40" />
        <DeploySection className="z-50" />
        <ComplianceSection className="z-[60]" />
        <PerformanceSection className="z-[70]" />
        <EcosystemSection className="z-[80]" />
        <ContactSection className="z-[90]" />
      </main>
    </div>
  );
}

export default App;
