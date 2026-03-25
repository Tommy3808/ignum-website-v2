import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    status: 'LIVE NOW',
    phase: 'Platform Basis',
    items: [
      '7.3 MW on-site cogeneration operational',
      '15,000 m² Phase 1 footprint',
      '4× H200 SXM5 141GB — deployment in progress',
      'Industrial utility base in place',
    ],
    color: 'border-ignum-success/40 bg-ignum-success/5',
    statusColor: 'text-ignum-success',
  },
  {
    status: 'PLANNED',
    phase: 'Phase 1 — 2 MW IT',
    timeline: 'Q2 2026 → 2027',
    items: [
      'Initial AI infrastructure buildout',
      'Anchor customer onboarding',
      'Structured power, cooling, and telecom stack',
      'Controlled revenue activation',
    ],
    color: 'border-ignum-copper/30 bg-ignum-copper/5',
    statusColor: 'text-ignum-copper',
  },
  {
    status: 'PLANNED',
    phase: 'Phase 2 — 8 MW IT',
    timeline: '2028 → 2029',
    items: [
      'Expanded AI colocation capacity',
      'Multi-client compute platform',
      'Additional cooling and telecom depth',
    ],
    color: 'border-ignum-offwhite/10',
    statusColor: 'text-ignum-gray',
  },
  {
    status: 'PLANNED',
    phase: 'Phase 3 — 15 MW IT',
    timeline: '2030 → 2031',
    items: [
      'Consolidated regional AI infrastructure campus',
      'Larger enterprise and sovereign workloads',
    ],
    color: 'border-ignum-offwhite/10',
    statusColor: 'text-ignum-gray',
  },
  {
    status: 'LONG-TERM',
    phase: 'Site-Scale Expansion',
    timeline: '2035+',
    items: [
      'Expansion path toward 100 MW',
      'Subject to contracted demand and capital execution',
    ],
    color: 'border-ignum-offwhite/5',
    statusColor: 'text-ignum-gray/50',
  },
];

interface RoadmapSectionProps { className?: string; }

const RoadmapSection = ({ className = '' }: RoadmapSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' };
      gsap.fromTo(headingRef.current, { y: '4vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'power2.out', scrollTrigger: st });
      gsap.fromTo(stagesRef.current?.children || [], { y: '5vh', opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, ease: 'power2.out', scrollTrigger: st });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="roadmap" className={`bg-ignum-black py-24 px-8 md:px-16 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ignum-copper mb-3">Roadmap</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-4">
            Structured Scale
          </h2>
          <p className="font-body text-ignum-gray max-w-xl leading-relaxed">
            The roadmap is designed to align infrastructure commissioning with contracted demand, utility readiness, and disciplined capital deployment.
          </p>
        </div>

        <div ref={stagesRef} className="space-y-4">
          {stages.map((s, i) => (
            <div key={i} className={`p-6 border ${s.color} grid grid-cols-1 md:grid-cols-4 gap-4`}>
              <div>
                <span className={`font-mono text-[9px] uppercase tracking-widest ${s.statusColor}`}>{s.status}</span>
                <p className="font-display text-base font-bold text-ignum-offwhite mt-1">{s.phase}</p>
                {s.timeline && <p className="font-mono text-[10px] text-ignum-gray/60 mt-1">{s.timeline}</p>}
              </div>
              <div className="md:col-span-3 space-y-1">
                {s.items.map((item, j) => (
                  <p key={j} className="font-mono text-xs text-ignum-gray/80 flex items-start gap-2">
                    <span className="text-ignum-copper mt-0.5">·</span>{item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-[10px] text-ignum-gray/40 mt-6">
          100 MW refers to long-term site-scale potential, not current commissioned capacity.
        </p>
      </div>
    </section>
  );
};

export default RoadmapSection;
