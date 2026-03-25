import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { ArrowRight, Zap, Lock, Globe, Shield } from 'lucide-react';

const pillars = [
  { icon: Zap, title: 'Private Training Environments', body: 'Controlled environments for model training, experimentation, and sensitive development workflows.' },
  { icon: Lock, title: 'Secure Inference Environments', body: 'Private inference layers for organizations that need internal intelligence systems without unnecessary exposure.' },
  { icon: Globe, title: 'Controlled Deployment', body: 'Deployment models designed around access discipline, operational clarity, and strategic control.' },
  { icon: Shield, title: 'Sovereign Stack Advisory', body: 'Infrastructure design aligned with long-term operational goals, not only short-term convenience.' },
];

export default function Infrastructure() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ignum-copper mb-4">Private AI Infrastructure</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-6">
            Infrastructure<br /><span className="text-gradient-copper">built for control.</span>
          </h1>
          <p className="font-body text-lg text-ignum-gray max-w-2xl leading-relaxed mb-10">
            Private AI training, inference, and deployment environments for organizations that require operational sovereignty, strategic resilience, and controlled execution in Latin America.
          </p>
          <div className="flex gap-4">
            <a href="/access" className="btn-copper flex items-center gap-2 group">Discuss Infrastructure <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
            <a href="/solutions" className="font-mono text-sm text-ignum-gray hover:text-ignum-copper transition-colors underline underline-offset-4">View Solutions</a>
          </div>
        </div>

        <div className="py-16 border-t border-ignum-offwhite/10">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-4">Infrastructure is the strategic layer</h2>
          <p className="font-body text-ignum-gray max-w-3xl leading-relaxed mb-12">
            Most organizations talk about models. Very few control where those models run. IGNUM is built around the premise that infrastructure determines resilience, privacy, leverage, and long-term independence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="p-6 border border-ignum-offwhite/10 bg-ignum-charcoal/30 hover:border-ignum-copper/30 transition-colors">
                <p.icon size={18} className="text-ignum-copper mb-3" />
                <h3 className="font-display text-lg font-bold text-ignum-offwhite mb-2">{p.title}</h3>
                <p className="font-body text-sm text-ignum-gray leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-ignum-offwhite/10">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-6">A different operating posture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Private by design', desc: 'Environments structured around controlled access and deliberate operational boundaries.' },
              { label: 'Deployment discipline', desc: 'Infrastructure pathways that prioritize governance, security posture, and execution logic.' },
              { label: 'Regional alignment', desc: 'A posture designed for organizations operating in Latin America requiring strategic local alignment.' },
            ].map((item, i) => (
              <div key={i} className="p-5 border border-ignum-offwhite/10">
                <p className="font-mono text-xs uppercase tracking-wider text-ignum-copper mb-2">{item.label}</p>
                <p className="font-body text-sm text-ignum-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-8 border border-ignum-copper/20 bg-ignum-copper/5">
            <h3 className="font-display text-2xl font-bold text-ignum-offwhite mb-3">7.3 MW · 15,000 m² · 4× H200 SXM5 · Celaya, Guanajuato</h3>
            <p className="font-body text-ignum-gray leading-relaxed">Physical infrastructure operating today. The base is real, the deployment is in progress, and the expansion path is structured.</p>
          </div>
        </div>

        <div className="py-16 border-t border-ignum-offwhite/10 text-center">
          <h2 className="font-display text-3xl font-bold text-ignum-offwhite mb-4">Build on controlled infrastructure</h2>
          <p className="font-body text-ignum-gray max-w-xl mx-auto mb-8">If your organization is evaluating private AI environments or controlled deployment in Latin America, IGNUM offers a direct starting point.</p>
          <a href="/access" className="btn-copper inline-flex items-center gap-2 group">Request Private Briefing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
        </div>
      </div>
    </div>
  );
}
