import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, TrendingUp, Gauge, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PerformanceSectionProps {
  className?: string;
}

const PerformanceSection = ({ className = '' }: PerformanceSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const microListRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(
        textBlockRef.current,
        { x: '-55vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: '65vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        microListRef.current?.children || [],
        { y: '8vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
        0.15
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(
        textBlockRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.70
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: 0, opacity: 1 },
        { x: '22vw', opacity: 0, ease: 'power2.in' },
        0.70
      );

      scrollTl.fromTo(
        microListRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.85
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    { value: '< 12', unit: 'ms', label: 'Latencia QRO · medida' },
    { value: '$0.04', unit: '/kWh', label: 'Costo energético interno' },
    { value: '~70%', unit: 'menos', label: 'vs AWS/GCP/Azure' },
  ];

  const microItems = [
    { label: 'Cold-start optimized', icon: Rocket },
    { label: 'GPU bin-packing', icon: TrendingUp },
    { label: 'Predictive scaling', icon: Gauge },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest. We will be in touch soon.');
    setEmail('');
  };

  return (
    <section
      ref={sectionRef}
      id="performance"
      className={`section-pinned bg-ignum-black ${className}`}
    >
      {/* Text Block (Left) */}
      <div
        ref={textBlockRef}
        className="absolute left-[7vw] top-[22vh] w-[36vw] z-10"
        style={{ willChange: 'transform, opacity' }}
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-6">
          <span className="text-gradient-copper">Performance.</span>
        </h2>

        <p className="font-body text-base md:text-lg text-ignum-gray leading-relaxed max-w-md mb-10">
          Inference that feels instant. Training that scales without surprises.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-3xl lg:text-4xl font-bold text-ignum-copper">
                  {metric.value}
                </span>
                <span className="font-mono text-sm text-ignum-gray">{metric.unit}</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-ignum-gray/70">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Request Card (Right) */}
      <div
        ref={cardRef}
        className="absolute left-[52vw] top-[18vh] w-[41vw] h-[64vh] z-10"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="card-dark w-full h-full p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-ignum-offwhite mb-3">
              Request access
            </h3>
            <p className="font-body text-sm text-ignum-gray leading-relaxed mb-8">
              Join the early program. Priority for teams with latency-sensitive workloads.
            </p>

            {/* Metrics inside card */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-ignum-black/50 border border-ignum-offwhite/5">
                <div className="font-display text-2xl font-bold text-ignum-copper mb-1">
                  H200
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-ignum-gray/70">
                  SXM5 · 141GB HBM3e
                </div>
              </div>
              <div className="p-4 bg-ignum-black/50 border border-ignum-offwhite/5">
                <div className="font-display text-2xl font-bold text-ignum-copper mb-1">
                  15 MW
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-ignum-gray/70">
                  Fase I · En despliegue
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="work@company.com"
                className="w-full px-4 py-3 bg-ignum-black border border-ignum-offwhite/20 text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/50 focus:border-ignum-copper focus:outline-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn-copper flex items-center justify-center gap-2 group"
            >
              Get started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* Micro List */}
      <div
        ref={microListRef}
        className="absolute left-[7vw] top-[70vh] flex flex-wrap gap-4 z-10"
        style={{ willChange: 'transform, opacity' }}
      >
        {microItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-ignum-gray"
            style={{ willChange: 'transform, opacity' }}
          >
            <item.icon size={14} className="text-ignum-copper" />
            <span className="font-mono text-xs uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerformanceSection;
