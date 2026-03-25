import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';

const pathways = [
  { title: 'Deployment Inquiry', desc: 'For organizations evaluating private AI environments, controlled inference, or custom deployment models.' },
  { title: 'Strategic Partnership', desc: 'For aligned infrastructure, operating, or ecosystem discussions.' },
  { title: 'Institutional / Government Inquiry', desc: 'For public-sector stakeholders exploring protected AI capability.' },
  { title: 'Private Briefing Request', desc: 'For confidential strategic discussions regarding fit, posture, and long-horizon capability.' },
  { title: 'General Strategic Inquiry', desc: 'For other serious discussions related to IGNUM\'s operating model.' },
];

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [form, setForm] = useState({ name: '', org: '', role: '', email: '', region: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nOrganization: ${form.org}\nRole: ${form.role}\nRegion: ${form.region}\nType: ${form.type}\n\n${form.message}`;
    window.location.href = `mailto:tommy@ignumprotocol.com?subject=IGNUM Inquiry — ${form.type}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">

        <div className="py-24">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ignum-gray/50 mb-4">For qualified organizations and strategic operators</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-6">
            Start a confidential<br /><span className="text-gradient-copper">conversation.</span>
          </h1>
          <p className="font-body text-lg text-ignum-gray max-w-xl leading-relaxed">
            For deployment inquiries, infrastructure discussions, strategic partnerships, institutional conversations, or private briefing requests.
          </p>
        </div>

        <div className="py-8 border-t border-ignum-offwhite/10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ignum-gray/50 mb-6">Contact pathways</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {pathways.map((p, i) => (
              <div key={i} className="p-4 border border-ignum-offwhite/10 hover:border-ignum-copper/30 transition-colors">
                <p className="font-mono text-xs text-ignum-copper uppercase tracking-wider mb-1">{p.title}</p>
                <p className="font-body text-xs text-ignum-gray leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ignum-gray/50 mb-3">Clear inquiries lead to better conversations.</p>
              <h2 className="font-display text-2xl font-bold text-ignum-offwhite mb-4">Direct, simple, institutional</h2>
              <p className="font-body text-ignum-gray leading-relaxed mb-6">
                IGNUM is structured for serious conversations around private AI infrastructure, controlled deployment, sovereign capability, and strategic alignment in Latin America.
              </p>
              <p className="font-body text-ignum-gray leading-relaxed mb-8">
                IGNUM prioritizes clarity and fit over volume. Where relevant, follow-up may include a private briefing, a deployment discussion, a sector-specific conversation, or a strategic access pathway.
              </p>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ignum-gray/50 mb-1">Direct contact</p>
                <a href="mailto:tommy@ignumprotocol.com" className="font-mono text-sm text-ignum-copper hover:text-ignum-copper-light transition-colors">tommy@ignumprotocol.com</a>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={32} className="text-ignum-success mb-4" />
                  <h3 className="font-display text-xl font-bold text-ignum-offwhite mb-2">Inquiry received.</h3>
                  <p className="font-body text-ignum-gray text-sm max-w-xs">IGNUM will review it for fit and follow up where relevant.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-ignum-offwhite mb-2">Submit an inquiry</h3>
                  <p className="font-body text-sm text-ignum-gray mb-4">Provide a concise description of your organization and area of interest.</p>
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
                      <option>Deployment Inquiry</option>
                      <option>Strategic Partnership</option>
                      <option>Institutional / Government Inquiry</option>
                      <option>Private Briefing Request</option>
                      <option>General Strategic Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-ignum-gray mb-1">Message</label>
                    <textarea placeholder="Brief description of your inquiry..." rows={4} required
                      value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-ignum-charcoal/40 border border-ignum-offwhite/10 text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/40 focus:border-ignum-copper focus:outline-none transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full btn-copper flex items-center justify-center gap-2 group">
                    Send Inquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="font-mono text-[9px] text-ignum-gray/40 text-center uppercase tracking-wider">
                    Confidential communication for qualified institutions and strategic operators.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Footer institucional */}
      <footer className="border-t border-ignum-offwhite/10 mt-16 px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-display text-sm font-bold text-ignum-offwhite mb-2">IGNUM</p>
            <p className="font-mono text-[10px] text-ignum-gray/50 leading-relaxed">Private AI infrastructure for Latin America.</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ignum-gray/40 mb-3">Navigation</p>
            {[['/', 'Home'], ['/infrastructure', 'Infrastructure'], ['/solutions', 'Solutions'], ['/about', 'About'], ['/access', 'Strategic Access']].map(([href, label]) => (
              <a key={href} href={href} className="block font-mono text-xs text-ignum-gray/60 hover:text-ignum-copper transition-colors mb-1">{label}</a>
            ))}
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ignum-gray/40 mb-3">Access</p>
            {[['/access', 'Request a Private Briefing'], ['/access', 'Request Access'], ['/contact', 'Deployment Inquiry']].map(([href, label], i) => (
              <a key={i} href={href} className="block font-mono text-xs text-ignum-gray/60 hover:text-ignum-copper transition-colors mb-1">{label}</a>
            ))}
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ignum-gray/40 mb-3">Legal</p>
            {[['/privacy', 'Privacy Policy'], ['/terms', 'Terms of Use'], ['/cookies', 'Cookies Notice']].map(([href, label]) => (
              <a key={href} href={href} className="block font-mono text-xs text-ignum-gray/60 hover:text-ignum-copper transition-colors mb-1">{label}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-ignum-offwhite/5 pt-6 flex flex-col md:flex-row justify-between gap-2">
          <p className="font-mono text-[9px] text-ignum-gray/30 uppercase tracking-wider">© 2026 IGNUM Protocol SAPI de CV. All rights reserved.</p>
          <p className="font-mono text-[9px] text-ignum-gray/30">IGNUM builds private AI infrastructure, controlled deployment environments, and sovereign intelligence pathways for Latin America.</p>
          <p className="font-mono text-[9px] text-ignum-gray/30">Mexican operating framework.</p>
        </div>
      </footer>
    </div>
  );
}
