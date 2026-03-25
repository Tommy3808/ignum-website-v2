import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { ArrowRight } from 'lucide-react';

const beliefs = [
  { label: 'Infrastructure matters', desc: 'The foundation determines the ceiling. AI capability without infrastructure control remains fragile.' },
  { label: 'Control matters', desc: 'Operational leverage comes from controlling environments, not just consuming outputs.' },
  { label: 'Privacy matters', desc: 'Sensitive workflows and strategic processes require deliberate operational boundaries.' },
  { label: 'Jurisdiction matters', desc: 'Where intelligence runs and under what legal context it exists are strategic questions, not technical footnotes.' },
  { label: 'Long-horizon thinking', desc: 'Real advantage is built through resilience, optionality, and infrastructure discipline over time.' },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">

        {/* Hero */}
        <div className="py-24">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ignum-gray/50 mb-4">A sovereign infrastructure thesis for AI in Latin America</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-8">
            Intelligence without<br />infrastructure control<br /><span className="text-gradient-copper">is dependency.</span>
          </h1>
          <p className="font-body text-lg text-ignum-gray max-w-2xl leading-relaxed mb-10">
            IGNUM exists to help institutions, enterprises, private capital, and strategic operators build AI capability on a stronger foundation: private environments, controlled deployment, and sovereign infrastructure logic aligned with Latin America.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/access" className="btn-copper inline-flex items-center gap-2 group">Request a Private Briefing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
            <a href="/infrastructure" className="font-mono text-sm text-ignum-gray hover:text-ignum-copper transition-colors underline underline-offset-4">Explore Infrastructure</a>
          </div>
        </div>

        {/* What IGNUM is */}
        <div className="py-16 border-t border-ignum-offwhite/10">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-6">What IGNUM is</h2>
          <p className="font-body text-ignum-gray leading-relaxed max-w-3xl mb-4">
            IGNUM is not a generic AI services brand, a design studio with AI language, or a thin wrapper over external platforms.
          </p>
          <p className="font-body text-ignum-gray leading-relaxed max-w-3xl mb-4">
            It is a sovereign infrastructure thesis translated into operational capability — focused on the layer that determines how intelligence actually becomes strategic: where it runs, how it is deployed, how it is controlled, and whether it remains aligned with the long-term interests of the organization using it.
          </p>
          <p className="font-mono text-sm text-ignum-offwhite/60 border-l-2 border-ignum-copper/30 pl-4 mt-6">
            This is the layer most markets still underestimate. We do not.
          </p>
        </div>

        {/* Why IGNUM exists */}
        <div className="py-16 border-t border-ignum-offwhite/10">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-6">Why IGNUM exists</h2>
          <div className="font-body text-ignum-gray leading-relaxed max-w-3xl space-y-4">
            <p>AI adoption is accelerating across every serious sector. But most organizations still access intelligence through infrastructure they do not control, environments they did not design, and operating assumptions that do not serve long-term sovereignty.</p>
            <p>That creates a structural weakness. IGNUM exists because the next durable advantage in AI will not belong only to those with access to models. It will belong to those who control infrastructure, deployment, privacy, and operational continuity.</p>
            <p>For Latin America, that matters even more. The region does not only need AI adoption. It needs strategic infrastructure posture.</p>
          </div>
        </div>

        {/* What IGNUM believes */}
        <div className="py-16 border-t border-ignum-offwhite/10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ignum-gray/50 mb-3">The strongest AI posture begins below the model layer.</p>
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-8">What IGNUM believes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beliefs.map((b, i) => (
              <div key={i} className="p-5 border border-ignum-offwhite/10 hover:border-ignum-copper/30 transition-colors">
                <p className="font-mono text-xs uppercase tracking-wider text-ignum-copper mb-2">{b.label}</p>
                <p className="font-body text-sm text-ignum-gray leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Latin America */}
        <div className="py-16 border-t border-ignum-offwhite/10">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-6">Why Latin America</h2>
          <p className="font-body text-ignum-gray leading-relaxed max-w-3xl mb-4">
            Organizations operating in the region often face a mismatch between local strategic needs and the external infrastructure systems on which they currently depend. That mismatch affects privacy, flexibility, resilience, and long-term autonomy.
          </p>
          <p className="font-body text-ignum-gray leading-relaxed max-w-3xl">
            IGNUM is built with a regional thesis in mind: AI capability in Latin America should not be limited to borrowed infrastructure logic. It should be built with more control, more alignment, and more strategic intent.
          </p>
        </div>

        {/* Who IGNUM is for */}
        <div className="py-16 border-t border-ignum-offwhite/10">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-4">Who IGNUM is for</h2>
          <p className="font-body text-ignum-gray max-w-2xl mb-8 leading-relaxed">Organizations that cannot afford to treat intelligence capability as a generic external dependency.</p>
          <div className="flex flex-wrap gap-3">
            {['Governments & Institutions', 'Enterprises with sensitive workflows', 'Family offices & strategic capital', 'Industrial operators', 'AI-native ventures'].map((s, i) => (
              <span key={i} className="font-mono text-xs border border-ignum-offwhite/20 px-3 py-1.5 text-ignum-gray hover:border-ignum-copper/40 hover:text-ignum-offwhite transition-colors">{s}</span>
            ))}
          </div>
        </div>

        {/* Location + CTA */}
        <div className="py-16 border-t border-ignum-offwhite/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ignum-gray/50 mb-3">Built for organizations that take control seriously.</p>
              <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-6">Begin a strategic conversation</h2>
              <p className="font-body text-ignum-gray leading-relaxed mb-8">
                If your organization is evaluating private AI infrastructure, controlled deployment, or sovereign capability in Latin America, IGNUM offers a direct path to a confidential discussion.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/access" className="btn-copper inline-flex items-center gap-2 group">Request a Private Briefing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
                <a href="/access" className="font-mono text-sm text-ignum-gray hover:text-ignum-copper transition-colors underline underline-offset-4">Request Access</a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ignum-gray/50 mb-1">Operating base</p>
                <p className="font-body text-ignum-offwhite">Cuadritos, Celaya, Guanajuato · México</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ignum-gray/50 mb-1">Contact</p>
                <a href="mailto:tommy@ignumprotocol.com" className="font-mono text-sm text-ignum-copper hover:text-ignum-copper-light transition-colors">tommy@ignumprotocol.com</a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ignum-gray/50 mb-1">Infrastructure</p>
                <p className="font-body text-sm text-ignum-gray">7.3 MW on-site generation · 15,000 m² Phase 1 · 4× H200 SXM5 141GB deploying</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Footer */}
      <footer className="border-t border-ignum-offwhite/10 px-8 md:px-16 lg:px-24 py-8 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-ignum-gray/40 font-mono text-[10px] uppercase tracking-wider">
          <span>© 2026 IGNUM Protocol SAPI de CV</span>
          <span>Private AI infrastructure, controlled deployment environments, and sovereign intelligence pathways for Latin America.</span>
          <span>Mexican operating framework</span>
        </div>
      </footer>
    </div>
  );
}
