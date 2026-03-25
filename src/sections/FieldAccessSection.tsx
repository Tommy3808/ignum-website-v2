import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Lock,
  DollarSign,
  Cpu,
  TrendingUp,
  Key,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FieldAccessSectionProps {
  className?: string;
}

const FieldAccessSection = ({ className = '' }: FieldAccessSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const slotsRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    capital: '',
    useCase: '',
    volume: '50000',
    referral: '',
    name: '',
    email: '',
    company: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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
        formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        slotsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: slotsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    const capital = parseInt(formData.capital.replace(/[^0-9]/g, ''));
    if (!capital || capital < 1000000) {
      newErrors.capital = 'Minimum $1M USD required for Field Access';
    }

    if (!formData.useCase) {
      newErrors.useCase = 'Select a use case';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const formatCurrency = (value: string) => {
    const num = value.replace(/[^0-9]/g, '');
    if (!num) return '';
    return '$' + parseInt(num).toLocaleString('en-US');
  };

  const useCases = [
    'AI Training (LLM fine-tuning)',
    'Inference at scale',
    'Sovereign data processing',
    'Research compute',
    'Other (specify in message)',
  ];

  const slotsAvailable = 12;
  const slotsTaken = 4;

  if (submitted) {
    return (
      <section
        ref={sectionRef}
        id="fieldaccess"
        className={`relative bg-ignum-black py-24 lg:py-32 ${className}`}
      >
        <div className="px-6 lg:px-[7vw] max-w-2xl mx-auto text-center">
          <CheckCircle size={64} className="text-ignum-success mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ignum-offwhite mb-4">
            Application Received
          </h2>
          <p className="font-body text-lg text-ignum-gray mb-6">
            Your Field Access request has been submitted. Review queue position: #{slotsTaken + 1}
          </p>
          <p className="font-mono text-sm text-ignum-gray">
            Estimated response: 5–7 business days
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="fieldaccess"
      className={`relative bg-ignum-black py-24 lg:py-32 ${className}`}
    >
      <div className="px-6 lg:px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Headline + Info */}
          <div>
            <div ref={headlineRef} className="mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ignum-gray mb-4 block">
                Gated Access
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ignum-offwhite leading-[0.95] tracking-tight mb-6">
                The Field is not for everyone.
              </h2>
              <p className="font-body text-lg text-ignum-gray leading-relaxed mb-6">
                12 slots available Q2 2026. Review biweekly. 
                We do not respond to generic inquiries. Only concrete proposals.
              </p>
            </div>

            <div ref={slotsRef} className="space-y-4">
              <div className="card-dark p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-ignum-gray">
                    Slot Availability
                  </span>
                  <span className="font-mono text-xs text-ignum-copper">
                    Q2 2026
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: slotsAvailable }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 flex-1 ${
                        i < slotsTaken ? 'bg-ignum-copper' : 'bg-ignum-copper/20'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-ignum-offwhite">
                    {slotsTaken} taken
                  </span>
                  <span className="font-mono text-sm text-ignum-success">
                    {slotsAvailable - slotsTaken} available
                  </span>
                </div>
              </div>

              <div className="card-dark p-5">
                <h4 className="font-display text-sm font-bold text-ignum-offwhite uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Key size={16} className="text-ignum-copper" />
                  What You Get
                </h4>
                <ul className="space-y-2">
                  {[
                    'Direct access to 4× H200 SXM5 141 GB',
                    '7.3 MW power allocation',
                    '<20 ms latency to major cities',
                    'Private network options',
                    'TommyAI orchestration',
                    'Priority support queue',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-ignum-success flex-shrink-0" />
                      <span className="font-mono text-sm text-ignum-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-dark p-5 border-ignum-error/30">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={16} className="text-ignum-error" />
                  <span className="font-mono text-xs uppercase tracking-wider text-ignum-error">
                    Minimum Requirements
                  </span>
                </div>
                <p className="font-mono text-sm text-ignum-gray">
                  $1M USD annual capital operated minimum for Field Access consideration.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="card-dark p-8">
              <h3 className="font-display text-lg font-bold text-ignum-offwhite mb-6">
                Request Field Access
              </h3>

              {/* Capital */}
              <div className="mb-6">
                <label className="block font-mono text-xs uppercase tracking-wider text-ignum-gray mb-2">
                  Annual Capital Operated (USD) *
                </label>
                <div className="relative">
                  <DollarSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ignum-gray" />
                  <input
                    type="text"
                    name="capital"
                    value={formatCurrency(formData.capital)}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^0-9]/g, '');
                      setFormData((prev) => ({ ...prev, capital: raw }));
                      if (errors.capital) setErrors((prev) => ({ ...prev, capital: '' }));
                    }}
                    placeholder="$1,000,000"
                    className={`w-full pl-12 pr-4 py-3 bg-ignum-black border text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/50 focus:outline-none transition-colors ${
                      errors.capital ? 'border-ignum-error' : 'border-ignum-offwhite/20 focus:border-ignum-copper'
                    }`}
                  />
                </div>
                {errors.capital && (
                  <span className="font-mono text-xs text-ignum-error mt-1 block">{errors.capital}</span>
                )}
                <span className="font-mono text-[10px] text-ignum-gray mt-1 block">
                  Minimum $1M for Field access
                </span>
              </div>

              {/* Use Case */}
              <div className="mb-6">
                <label className="block font-mono text-xs uppercase tracking-wider text-ignum-gray mb-2">
                  Primary Use Case *
                </label>
                <div className="relative">
                  <Cpu size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ignum-gray" />
                  <select
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-10 py-3 bg-ignum-black border text-ignum-offwhite font-mono text-sm appearance-none focus:outline-none transition-colors ${
                      errors.useCase ? 'border-ignum-error' : 'border-ignum-offwhite/20 focus:border-ignum-copper'
                    }`}
                  >
                    <option value="">Select use case</option>
                    {useCases.map((uc) => (
                      <option key={uc} value={uc}>
                        {uc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-ignum-gray pointer-events-none" />
                </div>
                {errors.useCase && (
                  <span className="font-mono text-xs text-ignum-error mt-1 block">{errors.useCase}</span>
                )}
              </div>

              {/* Volume */}
              <div className="mb-6">
                <label className="block font-mono text-xs uppercase tracking-wider text-ignum-gray mb-2">
                  Expected Monthly Volume
                </label>
                <div className="relative">
                  <TrendingUp size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ignum-gray" />
                  <input
                    type="range"
                    name="volume"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 accent-ignum-copper"
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-mono text-xs text-ignum-gray">1,000 GPU-hrs</span>
                  <span className="font-mono text-sm text-ignum-copper font-bold">
                    {parseInt(formData.volume).toLocaleString()} GPU-hrs
                  </span>
                  <span className="font-mono text-xs text-ignum-gray">100,000 GPU-hrs</span>
                </div>
              </div>

              {/* Referral */}
              <div className="mb-6">
                <label className="block font-mono text-xs uppercase tracking-wider text-ignum-gray mb-2">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  placeholder="Priority review with valid referral"
                  className="w-full px-4 py-3 bg-ignum-black border border-ignum-offwhite/20 text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/50 focus:border-ignum-copper focus:outline-none transition-colors"
                />
                <span className="font-mono text-[10px] text-ignum-gray mt-1 block">
                  Priority review with valid referral
                </span>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-ignum-gray mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 bg-ignum-black border text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/50 focus:outline-none transition-colors ${
                      errors.name ? 'border-ignum-error' : 'border-ignum-offwhite/20 focus:border-ignum-copper'
                    }`}
                  />
                  {errors.name && (
                    <span className="font-mono text-xs text-ignum-error mt-1 block">{errors.name}</span>
                  )}
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-ignum-gray mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 bg-ignum-black border border-ignum-offwhite/20 text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/50 focus:border-ignum-copper focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <label className="block font-mono text-xs uppercase tracking-wider text-ignum-gray mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="work@company.com"
                  className={`w-full px-4 py-3 bg-ignum-black border text-ignum-offwhite font-mono text-sm placeholder:text-ignum-gray/50 focus:outline-none transition-colors ${
                    errors.email ? 'border-ignum-error' : 'border-ignum-offwhite/20 focus:border-ignum-copper'
                  }`}
                />
                {errors.email && (
                  <span className="font-mono text-xs text-ignum-error mt-1 block">{errors.email}</span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-copper flex items-center justify-center gap-2 group"
              >
                <Lock size={16} />
                Request Field Access
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="font-mono text-[10px] text-ignum-gray text-center mt-4">
                By submitting, you agree to our review process. 
                We only respond to qualified inquiries.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldAccessSection;
