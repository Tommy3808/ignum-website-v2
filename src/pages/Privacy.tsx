import { useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-3xl mx-auto py-24 font-body text-ignum-gray leading-relaxed space-y-8">
        <h1 className="font-display text-4xl font-bold text-ignum-offwhite">Privacy Policy</h1>
        <p>IGNUM is committed to handling inquiries and site interactions with discretion and operational seriousness.</p>
        <p>We collect only the information reasonably necessary to respond to inquiries, manage communications, and improve site functionality. We do not position the site as a public consumer platform, and we do not design our communication channels for unnecessary data exposure.</p>
        <p>Information submitted through forms may include contact details, organization information, and inquiry context. Such information is used to assess relevance, respond appropriately, and maintain communication where necessary.</p>
        <p>IGNUM may use standard site technologies for performance, security, and analytics.</p>
        <p className="font-mono text-xs text-ignum-gray/50">Additional legal language to be finalized with counsel before publication. Last updated: March 2026.</p>
      </div>
    </div>
  );
}
