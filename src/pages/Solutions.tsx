import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Server, Lock, Cpu, BookOpen, Shield, ArrowRight } from 'lucide-react';

const offers = [
  { icon: Server, title: 'Dedicated AI Infrastructure', body: 'Private compute environments for organizations requiring high control, operational separation, and long-term sovereignty.', tag: '$145–195 /kW-mes' },
  { icon: Lock, title: 'Private Inference Environments', body: 'Secure environments for internal decision systems, confidential workflows, and private AI use cases.', tag: 'By request' },
  { icon: Cpu, title: 'Custom Model Deployment', body: 'Deployment, orchestration, and operationalization of proprietary or adapted models in controlled environments.', tag: 'Custom' },
  { icon: BookOpen, title: 'Training Environments', body: 'Private training pathways for sensitive development, internal experimentation, and model iteration.', tag: 'Enterprise' },
  { icon: Shield, title: 'Sovereign Stack Advisory', body: 'Strategic design and deployment guidance for institutions building long-term AI capability with control in mind.', tag: 'Advisory' },
];

export default function Solutions() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ignum-copper mb-4">Deployment Pathways</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-6">
            Deployment pathways<br /><span className="text-gradient-copper">for serious AI operations.</span>
          </h1>
          <p className="font-body text-lg text-ignum-gray max-w-2xl leading-relaxed mb-10">
            IGNUM supports organizations that require private AI infrastructure, secure model environments, and controlled deployment options beyond commodity cloud dependence.
          </p>
          <a href="/access" className="btn-copper inline-flex items-center gap-2 group">Request Deployment Review <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
        </div>

        <div className="py-16 border-t border-ignum-offwhite/10">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-3">What IGNUM delivers</h2>
          <p className="font-body text-ignum-gray max-w-2xl mb-10 leading-relaxed">
            Infrastructure alone is not enough. The real advantage comes from translating infrastructure into operational capability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offers.map((o, i) => (
              <div key={i} className="p-6 border border-ignum-offwhite/10 bg-ignum-charcoal/30 hover:border-ignum-copper/30 transition-colors flex flex-col gap-4">
                <o.icon size={18} className="text-ignum-copper" />
                <div className="flex-1">
                  <h3 className="font-display text-base font-bold text-ignum-offwhite mb-2">{o.title}</h3>
                  <p className="font-body text-sm text-ignum-gray leading-relaxed">{o.body}</p>
                </div>
                <span className="font-mono text-xs text-ignum-copper border border-ignum-copper/30 px-2 py-1 w-fit">{o.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-ignum-offwhite/10">
          <h2 className="font-display text-2xl font-bold text-ignum-offwhite mb-8">Different levels of control</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { level: 'Entry', desc: 'For organizations beginning to evaluate private AI deployment.' },
              { level: 'Operational', desc: 'For teams already using AI and requiring more secure, structured environments.' },
              { level: 'Strategic', desc: 'For institutions building long-term sovereign AI capability.' },
            ].map((item, i) => (
              <div key={i} className="p-5 border border-ignum-offwhite/10">
                <p className="font-mono text-xs uppercase tracking-wider text-ignum-copper mb-2">{item.level}</p>
                <p className="font-body text-sm text-ignum-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-ignum-offwhite/10 text-center">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-4">Build the right deployment model</h2>
          <p className="font-body text-ignum-gray max-w-xl mx-auto mb-8">If your organization is evaluating private AI infrastructure or sovereign deployment in Latin America, IGNUM can help define the right operating model.</p>
          <div className="flex gap-4 justify-center">
            <a href="/access" className="btn-copper inline-flex items-center gap-2 group">Request Deployment Review <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
            <a href="/access" className="font-mono text-sm text-ignum-gray hover:text-ignum-copper transition-colors underline underline-offset-4">Request Private Briefing</a>
          </div>
        </div>
      </div>
    </div>
  );
}
