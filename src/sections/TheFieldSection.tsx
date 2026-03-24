import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Cpu,
  Zap,
  MapPin,
  Shield,
  Network,
  Activity,
  TrendingUp,
  Droplets,
  Clock,
  DollarSign,
  Lock,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TheFieldSectionProps {
  className?: string;
}

const TheFieldSection = ({ className = '' }: TheFieldSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const [expandedPillar, setExpandedPillar] = useState<string | null>('silicon');
  const [liveMetrics, setLiveMetrics] = useState({
    power: 7.3,
    utilization: 94.2,
    temp: 42.8,
    pue: 1.18,
  });

  // Live metrics simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics({
        power: Number((7.1 + Math.random() * 0.4).toFixed(2)),
        utilization: Number((92 + Math.random() * 6).toFixed(1)),
        temp: Number((41 + Math.random() * 4).toFixed(1)),
        pue: Number((1.16 + Math.random() * 0.04).toFixed(2)),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        pillarsRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        dashboardRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        specsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: specsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      id: 'silicon',
      title: 'Silicon',
      icon: Cpu,
      headline: '4× H200 SXM5 141 GB HBM3e',
      subheadline: 'Live + cantidad total disponible',
      details: [
        { label: 'GPU Model', value: 'NVIDIA H200 SXM5' },
        { label: 'Memory', value: '141 GB HBM3e per GPU' },
        { label: 'Bandwidth', value: '4.8 TB/s' },
        { label: 'Status', value: 'Abierta sin usar' },
        { label: 'Total Compute', value: '4 GPUs active' },
      ],
    },
    {
      id: 'energy',
      title: 'Energy',
      icon: Zap,
      headline: '7.3 MW Trigeneración',
      subheadline: '$0.038–0.045/kWh interno',
      details: [
        { label: 'Installed Power', value: '7.3 MW on-site generation' },
        { label: 'Cost', value: '$0.038–0.045 USD/kWh' },
        { label: 'Type', value: 'Cogeneration + Cooling' },
        { label: 'Expansion', value: '100 MW long-term potential' },
        { label: 'Pipeline', value: '25 km private gas pipeline' },
      ],
    },
    {
      id: 'infra',
      title: 'Infra Física',
      icon: MapPin,
      headline: '15,000 m² Compute + 45 ha',
      subheadline: 'Campus autorizado a 100 MW',
      details: [
        { label: 'Compute Floor', value: '15,000 m² Phase 1' },
        { label: 'Campus Total', value: '45 hectares' },
        { label: 'Substation', value: '20 MVA' },
        { label: 'Water', value: '3 wells + PTAR 1,500 m³/day' },
        { label: 'Location', value: 'Celaya, Parque Industrial Cuadritos' },
      ],
    },
    {
      id: 'jurisdiction',
      title: 'Jurisdicción',
      icon: Shield,
      headline: 'MX Law + MLAT-Only',
      subheadline: 'Sin CLOUD Act exposure',
      details: [
        { label: 'Legal Framework', value: 'Mexican Law (LFPDPPP)' },
        { label: 'Data Access', value: 'MLAT treaty only' },
        { label: 'US Exposure', value: 'Zero CLOUD Act' },
        { label: 'Compliance', value: 'SOC 2 Type II, ISO 27001' },
        { label: 'Sovereignty', value: 'Jurisdicción local exclusiva' },
      ],
    },
    {
      id: 'orchestration',
      title: 'Orchestration',
      icon: Network,
      headline: 'TommyAI v11.0 + Heptágono',
      subheadline: 'Archivo Vivo + Field Access',
      details: [
        { label: 'AI Engine', value: 'TommyAI v11.0' },
        { label: 'Framework', value: 'Heptágono' },
        { label: 'Documentation', value: 'Archivo Vivo' },
        { label: 'Access', value: 'Field Access (gated)' },
        { label: 'Stack', value: 'Kubernetes-native, policy-driven' },
      ],
    },
  ];

  const latencyData = [
    { destination: 'Querétaro', latency: '5–12 ms', status: 'live' },
    { destination: 'CDMX', latency: '18–28 ms', status: 'live' },
    { destination: 'Dallas', latency: '42–55 ms', status: 'live' },
    { destination: 'Miami', latency: '65–80 ms', status: 'planned' },
  ];

  return (
    <section
      ref={sectionRef}
      id="thefield"
      className={`relative bg-ignum-black py-24 lg:py-32 ${className}`}
    >
      <div className="px-6 lg:px-[7vw]">
        {/* Headline */}
        <div ref={headlineRef} className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ignum-gray mb-4 block">
            20.3664° N, 100.8169° W
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-6">
            The Field.
          </h2>
          <p className="font-body text-lg md:text-xl text-ignum-gray max-w-2xl leading-relaxed">
            Infraestructura física verificable. No promesas. No vaporware. 
            Solo silicio, energía y jurisdicción que puedes auditar.
          </p>
        </div>

        {/* Interactive Pillars */}
        <div ref={pillarsRef} className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`card-dark p-6 cursor-pointer transition-all duration-300 ${
                expandedPillar === pillar.id
                  ? 'border-ignum-copper/60 lg:col-span-2'
                  : 'border-ignum-offwhite/10 hover:border-ignum-copper/30'
              }`}
              onClick={() =>
                setExpandedPillar(expandedPillar === pillar.id ? null : pillar.id)
              }
            >
              <div className="flex items-center justify-between mb-4">
                <pillar.icon
                  size={24}
                  className={
                    expandedPillar === pillar.id
                      ? 'text-ignum-copper'
                      : 'text-ignum-gray'
                  }
                />
                {expandedPillar === pillar.id ? (
                  <ChevronUp size={16} className="text-ignum-gray" />
                ) : (
                  <ChevronDown size={16} className="text-ignum-gray" />
                )}
              </div>

              <h3 className="font-display text-sm font-bold text-ignum-offwhite uppercase tracking-wider mb-2">
                {pillar.title}
              </h3>
              <p
                className={`font-display text-lg font-bold mb-1 ${
                  expandedPillar === pillar.id
                    ? 'text-ignum-copper'
                    : 'text-ignum-offwhite'
                }`}
              >
                {pillar.headline}
              </p>
              <p className="font-mono text-xs text-ignum-gray mb-4">
                {pillar.subheadline}
              </p>

              {expandedPillar === pillar.id && (
                <div className="mt-6 pt-6 border-t border-ignum-offwhite/10 space-y-3">
                  {pillar.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="font-mono text-xs text-ignum-gray uppercase tracking-wider">
                        {detail.label}
                      </span>
                      <span className="font-mono text-sm text-ignum-offwhite">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Live Energy Dashboard */}
        <div ref={dashboardRef} className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-bold text-ignum-offwhite flex items-center gap-3">
              <Activity size={20} className="text-ignum-copper animate-pulse" />
              Live Energy Dashboard
            </h3>
            <span className="font-mono text-xs text-ignum-gray uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ignum-success animate-pulse" />
              Real-time
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="card-dark p-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-ignum-copper" />
                <span className="font-mono text-xs text-ignum-gray uppercase tracking-wider">
                  Power Output
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl lg:text-4xl font-bold text-ignum-copper">
                  {liveMetrics.power.toFixed(2)}
                </span>
                <span className="font-mono text-sm text-ignum-gray">MW</span>
              </div>
            </div>

            <div className="card-dark p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-ignum-copper" />
                <span className="font-mono text-xs text-ignum-gray uppercase tracking-wider">
                  GPU Utilization
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl lg:text-4xl font-bold text-ignum-copper">
                  {liveMetrics.utilization.toFixed(1)}
                </span>
                <span className="font-mono text-sm text-ignum-gray">%</span>
              </div>
            </div>

            <div className="card-dark p-6">
              <div className="flex items-center gap-2 mb-2">
                <Droplets size={16} className="text-ignum-copper" />
                <span className="font-mono text-xs text-ignum-gray uppercase tracking-wider">
                  Cooling Temp
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl lg:text-4xl font-bold text-ignum-copper">
                  {liveMetrics.temp.toFixed(1)}
                </span>
                <span className="font-mono text-sm text-ignum-gray">°C</span>
              </div>
            </div>

            <div className="card-dark p-6">
              <div className="flex items-center gap-2 mb-2">
                <Activity size={16} className="text-ignum-copper" />
                <span className="font-mono text-xs text-ignum-gray uppercase tracking-wider">
                  PUE
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl lg:text-4xl font-bold text-ignum-copper">
                  {liveMetrics.pue.toFixed(2)}
                </span>
                <span className="font-mono text-sm text-ignum-gray">eff</span>
              </div>
            </div>
          </div>

          {/* Latency Table */}
          <div className="card-dark p-6">
            <h4 className="font-display text-sm font-bold text-ignum-offwhite uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock size={16} className="text-ignum-copper" />
              Latencias Medidas
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {latencyData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-ignum-black/50 border border-ignum-offwhite/5"
                >
                  <span className="font-mono text-sm text-ignum-offwhite">
                    {item.destination}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.status === 'live'
                          ? 'bg-ignum-success'
                          : 'bg-ignum-gray'
                      }`}
                    />
                    <span className="font-mono text-sm text-ignum-copper">
                      {item.latency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hardware Specs */}
        <div ref={specsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* H200 Image */}
          <div className="relative">
            <div className="border border-ignum-offwhite/10 overflow-hidden">
              <img
                src="/images/h200-sxm5-141gb.jpg"
                alt="NVIDIA H200 SXM5 141GB HBM3e"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-ignum-black/90 backdrop-blur-sm p-4 border border-ignum-copper/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-ignum-gray uppercase tracking-wider block mb-1">
                    NVIDIA H200 SXM5
                  </span>
                  <span className="font-display text-lg font-bold text-ignum-offwhite">
                    141 GB HBM3e
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-ignum-gray uppercase tracking-wider block mb-1">
                    Status
                  </span>
                  <span className="font-mono text-sm text-ignum-success flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-ignum-success animate-pulse" />
                    Abierta sin usar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Structure */}
          <div className="space-y-6">
            <div className="card-dark p-6">
              <h4 className="font-display text-sm font-bold text-ignum-offwhite uppercase tracking-wider mb-4 flex items-center gap-2">
                <DollarSign size={16} className="text-ignum-copper" />
                Pricing Transparente
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-ignum-black/50">
                  <span className="font-mono text-sm text-ignum-gray">
                    Energía (trigeneración)
                  </span>
                  <span className="font-mono text-lg text-ignum-copper font-bold">
                    $0.038–0.045/kWh
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-ignum-black/50">
                  <span className="font-mono text-sm text-ignum-gray">
                    Colocation HPC/AI
                  </span>
                  <span className="font-mono text-lg text-ignum-copper font-bold">
                    $/kW-mes + SLA
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-ignum-black/50">
                  <span className="font-mono text-sm text-ignum-gray">
                    Cooling-as-a-Service
                  </span>
                  <span className="font-mono text-lg text-ignum-copper font-bold">
                    Incluido
                  </span>
                </div>
              </div>
            </div>

            <div className="card-dark p-6">
              <h4 className="font-display text-sm font-bold text-ignum-offwhite uppercase tracking-wider mb-4 flex items-center gap-2">
                <Lock size={16} className="text-ignum-copper" />
                Estructura Institucional
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-ignum-copper/40" />
                  <span className="font-mono text-sm text-ignum-offwhite">
                    Holding Familiar
                  </span>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <div className="w-2 h-px bg-ignum-gray" />
                  <div className="w-3 h-3 bg-ignum-copper/60" />
                  <span className="font-mono text-sm text-ignum-offwhite">
                    EnergyCore Owner
                  </span>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <div className="w-2 h-px bg-ignum-gray" />
                  <div className="w-3 h-3 bg-ignum-copper" />
                  <span className="font-mono text-sm text-ignum-offwhite">
                    SPV Operativo
                  </span>
                </div>
              </div>
              <p className="font-mono text-xs text-ignum-gray mt-4 pt-4 border-t border-ignum-offwhite/10">
                El capital compra exposición al flujo y expansión, no al parque.
              </p>
            </div>

            <div className="card-dark p-6">
              <h4 className="font-display text-sm font-bold text-ignum-offwhite uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText size={16} className="text-ignum-copper" />
                Contratos Fundacionales
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '15-year PPA',
                  'Cooling-as-a-Service',
                  'Anchor LOI requirement',
                  '2 carrier/dark fiber',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 bg-ignum-black/50"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ignum-copper" />
                    <span className="font-mono text-xs text-ignum-offwhite">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheFieldSection;
