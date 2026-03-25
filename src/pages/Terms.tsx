import { useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-3xl mx-auto py-24 font-body text-ignum-gray leading-relaxed space-y-8">
        <h1 className="font-display text-4xl font-bold text-ignum-offwhite">Terms of Use</h1>
        <p>By accessing this site, you agree to use it only for lawful purposes and in a manner consistent with its intended institutional and informational nature.</p>
        <p>The materials on this site are provided for general informational purposes and do not constitute a binding offer, legal commitment, or guarantee of service availability. Strategic discussions, infrastructure access, and any potential engagement are subject to further review, qualification, and separate agreement where applicable.</p>
        <p>IGNUM reserves the right to modify site content, access pathways, and communication processes at any time without prior notice.</p>
        <p className="font-mono text-xs text-ignum-gray/50">Formal legal review recommended before publication. Last updated: March 2026.</p>
      </div>
    </div>
  );
}
