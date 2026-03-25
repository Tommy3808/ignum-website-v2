import { useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function Cookies() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-ignum-black">
      <Navigation />
      <div className="pt-24 px-8 md:px-16 lg:px-24 max-w-3xl mx-auto py-24 font-body text-ignum-gray leading-relaxed space-y-8">
        <h1 className="font-display text-4xl font-bold text-ignum-offwhite">Cookies Notice</h1>
        <p>This site may use standard technologies such as cookies or similar tools for security, performance, analytics, and site functionality.</p>
        <p>Users may manage browser settings to control cookie behavior.</p>
        <p className="font-mono text-xs text-ignum-gray/50">Final version should be aligned with applicable legal requirements. Last updated: March 2026.</p>
      </div>
    </div>
  );
}
