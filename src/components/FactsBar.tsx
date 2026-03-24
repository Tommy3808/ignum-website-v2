const facts = [
  { label: 'Location', value: 'Cuadritos, Celaya · Parque Industrial' },
  { label: 'Phase 1 Footprint', value: '15,000 m²' },
  { label: 'On-Site Generation', value: '7.3 MW operational today' },
  { label: 'H200 SXM5 141GB', value: 'Deploying' },
  { label: 'IT Capacity', value: '2 MW IT Phase 1' },
  { label: 'Gas Pipeline', value: '25 km private' },
  { label: 'Substation', value: '20 MVA' },
  { label: 'Water', value: '3 wells · PTAR 1,500 m³/day' },
  { label: 'Latency QRO/CDMX/DFW', value: '5–12 ms / 18–28 ms / 42–55 ms' },
  { label: 'Structure', value: 'Holding → EnergyCore → SPV → HoldCo' },
];

const FactsBar = () => (
  <div className="w-full bg-ignum-charcoal/60 border-y border-ignum-offwhite/10 overflow-hidden">
    <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
      {[...facts, ...facts].map((f, i) => (
        <div key={i} className="flex items-center gap-2 px-6 py-3 flex-shrink-0">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ignum-gray/50">{f.label}</span>
          <span className="font-mono text-xs text-ignum-copper font-medium">{f.value}</span>
          <span className="text-ignum-offwhite/10 mx-2">·</span>
        </div>
      ))}
    </div>
  </div>
);

export default FactsBar;
