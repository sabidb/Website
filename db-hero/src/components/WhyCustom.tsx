import React from 'react';
import { Check, Minus } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const marketplace = [
  'Platform dependency',
  'Less control over customer experience',
  'Marketplace-specific workflows',
];
const own = [
  'Branded customer experience',
  'Direct customer relationship',
  'Custom workflows',
  'Multi-branch control',
  'Custom integrations',
];

export const WhyCustom: React.FC = () => (
  <section className="section whycustom">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow"><span className="dot" /> Why custom technology</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Own Your Platform, Own Your Customers</h2>
        <p className="lede">A conceptual comparison to help you decide what fits your restaurant. Both models can coexist.</p>
      </div>

      <div className="compare">
        <Reveal className="compare__card compare__card--muted">
          <h3>Third-party marketplace</h3>
          <ul>
            {marketplace.map((m) => (
              <li key={m}><span className="mark mark--minus"><Minus size={13} /></span> {m}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="compare__card compare__card--own" delay={100}>
          <div className="compare__badge">Your own platform</div>
          <h3>Own digital platform</h3>
          <ul>
            {own.map((m) => (
              <li key={m}><span className="mark mark--check"><Check size={13} /></span> {m}</li>
            ))}
          </ul>
        </Reveal>
      </div>
      <p className="whycustom__note">We keep this comparison factual and configurable — we don't make unsupported claims about commissions or savings.</p>
    </div>
  </section>
);
