import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Lock, CheckCircle, ArrowRight } from 'lucide-react';

const pathways = [
  { title: 'Private Briefing', desc: 'For organizations seeking an initial confidential discussion on infrastructure, deployment, and strategic fit.' },
  { title: 'Enterprise Access', desc: 'For enterprises evaluating secure model environments, internal inference systems, or private AI deployment.' },
  { title: 'Government / Institutional', desc: 'For public-sector and institutional stakeholders exploring protected AI capability and sovereign deployment logic.' },
  { title: 'Strategic Partnership', desc: 'For operators, infrastructure partners, aligned builders, and potential collaborators.' },
  { title: 'Investor Access', desc: 'For long-horizon capital evaluating strategic infrastructure, deployment platforms, or sovereign AI capability in Latin America.' },
];

export default function Access() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [form, setForm] = useState({ name: '', org: '', role: '', email: '', region: '', type: '', sector: '', desc: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:tommy@ignumprotocol.com?subject=Strategic Access Request — ${form.type}&body=${encodeURIComponent(JSON.stringify(form, null, 2))}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="py-24 max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Lock size={14} className="text-ignum-copper" />
            <span className="font-mono text-xs uppercase tracking-widest text-ignum-copper">Strategic Access</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-6">
            Strategic access to<br /><span className="text-gradient-copper">sovereign AI infrastructure.</span>
          </h1>
          <p className="font-body text-lg text-ignum-gray max-w-2xl leading-relaxed">
            IGNUM engages with qualified institutions, enterprises, private capital, and strategic operators seeking controlled AI environments and private deployment pathways in Latin America.
          </p>
        </div>

        <div className="py-8 border-t border-ignum-offwhite/10">
          <p className="font-mono text-xs uppercase tracking-wider text-ignum-gray/60 mb-6">Access pathways</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {pathways.map((p, i) => (
              <div key={i} className="p-5 border border-ignum-offwhite/10 bg-ignum-charcoal/20 hover:border-ignum-copper/30 transition-colors">
                <p className="font-mono text-xs text-ignum-copper uppercase tracking-wider mb-2">{p.title}</p>
                <p className="font-body text-sm text-ignum-gray leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-ignum-offwhite mb-4">The standard</h2>
              <p className="font-body text-ignum-gray leading-relaxed mb-6">
                IGNUM is not designed as a mass-market platform. Strategic Access exists for organizations evaluating private AI infrastructure, controlled deployment, or long-horizon strategic alignment.
              </p>
              <p className="font-mono text-xs text-ignum-gray/50 border-l-2 border-ignum-copper/30 pl-4 leading-relaxed">
                The right conversations are more important than more conversations.
              </p>
            </div>

            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={32} className="text-ignum-success mb-4" />
                  <h3 className="font-display text-xl font-bold text-ignum-offwhite mb-2">Request received.</h3>
                  <p className="font-body text-ignum-gray text-sm">We review every inquiry personally. You'll hear from us within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-ignum-offwhite mb-4">Begin a confidential conversation</h3>
                  {[
                    { key: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text' },
                    { key: 'org', label: 'Organization', placeholder: 'Company or institution', type: 'text' },
                    { key: 'role', label: 'Role', placeholder: 'Your role', type: 'text' },
                    { key: 'email', label: 'Work Email', placeholder: 'work@organization.com', type: 'email' },
                    { key: 'region', label: 'Region', placeholder: 'Country / Region', type: 'text' },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-ignum-gray mb-1">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full px-4 py-3 bg-ignum-charcoal/40 border border-ignum-offwhite/10 text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/40 focus:border-ignum-copper focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-ignum-gray mb-1">Inquiry Type</label>
                    <select required value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                      className="w-full px-4 py-3 bg-ignum-charcoal/40 border border-ignum-offwhite/10 text-ignum-offwhite font-mono text-sm focus:border-ignum-copper focus:outline-none transition-colors">
                      <option value="">Select type</option>
                      <option>Private Briefing</option>
                      <option>Enterprise Inquiry</option>
                      <option>Government / Institutional Inquiry</option>
                      <option>Strategic Partnership</option>
                      <option>Investor Access</option>
                      <option>Other Strategic Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-ignum-gray mb-1">Brief Description</label>
                    <textarea placeholder="What are you evaluating?" rows={3}
                      value={form.desc} onChange={e => setForm(p => ({ ...p, desc: e.target.value }))}
                      className="w-full px-4 py-3 bg-ignum-charcoal/40 border border-ignum-offwhite/10 text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/40 focus:border-ignum-copper focus:outline-none transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full btn-copper flex items-center justify-center gap-2 group">
                    Request Access <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="font-mono text-[9px] text-ignum-gray/40 text-center uppercase tracking-wider">
                    Confidential discussions available for qualified organizations.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
