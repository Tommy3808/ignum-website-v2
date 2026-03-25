import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { ArrowRight } from 'lucide-react';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-4xl mx-auto py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ignum-copper mb-4">About IGNUM</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-8">
          IGNUM is built on a simple thesis:<br />
          <span className="text-gradient-copper">intelligence without infrastructure control is dependency.</span>
        </h1>

        <div className="space-y-8 font-body text-ignum-gray leading-relaxed">
          <p>IGNUM is a sovereign infrastructure thesis for AI operations in Latin America. The region needs private, controlled, strategically aligned AI environments beyond default external dependence.</p>
          <p>Most AI providers sell access. IGNUM is building control. Most infrastructure narratives focus on convenience. IGNUM focuses on sovereignty, deployment discipline, and long-term leverage.</p>
          <p>For organizations that understand the next competitive edge will come from private intelligence systems, infrastructure is no longer a commodity. It is a strategic asset.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12">
          {[
            { label: 'Infrastructure-first', desc: 'We begin with where intelligence runs, not only with what it says.' },
            { label: 'Controlled execution', desc: 'Private environments reduce exposure, dependency, and strategic fragility.' },
            { label: 'Regional alignment', desc: 'Execution in Latin America requires a different posture than dependence on external systems.' },
            { label: 'Strategic design', desc: 'IGNUM is built for long-horizon organizations, not short-term trend chasing.' },
          ].map((item, i) => (
            <div key={i} className="p-5 border border-ignum-offwhite/10">
              <p className="font-mono text-xs uppercase tracking-wider text-ignum-copper mb-2">{item.label}</p>
              <p className="font-body text-sm text-ignum-gray">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-ignum-offwhite/10 pt-12">
          <p className="font-mono text-xs uppercase tracking-wider text-ignum-gray/60 mb-2">Location</p>
          <p className="font-body text-ignum-offwhite mb-1">Cuadritos, Celaya, Guanajuato · México</p>
          <p className="font-mono text-sm text-ignum-gray mb-8">tommy@ignumprotocol.com</p>
          <a href="/access" className="btn-copper inline-flex items-center gap-2 group">Request a Briefing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
        </div>
      </div>
    </div>
  );
}
