import React from 'react';
import { Check } from 'lucide-react';
import { branches } from '../site.config';
import { Reveal } from './ui/Reveal';

const points = [
  'Branch-specific operations',
  'Branch-level access',
  'Centralized owner control',
  'Branch-aware order management',
  'Central reporting',
  'Scalable architecture',
];

export const MultiBranch: React.FC = () => (
  <section className="section multibranch">
    <div className="container multibranch__grid">
      <Reveal className="multibranch__copy">
        <span className="eyebrow"><span className="dot" /> Multi-branch</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Built for One Branch.<br />Ready for Many.</h2>
        <p className="lede">Start with a single location and scale to a group — without rebuilding your platform. Ownership stays central while each branch runs its own operations.</p>
        <ul className="checklist">
          {points.map((p) => (
            <li key={p}><span className="tick"><Check size={14} /></span> {p}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="branchtree" delay={120}>
        <div className="branchtree__owner">OWNER</div>
        <div className="branchtree__spine" aria-hidden="true" />
        <ul className="branchtree__list">
          {branches.map((b, i) => (
            <li key={b} className={i === branches.length - 1 ? 'is-future' : ''}>
              <span className="branchtree__connector" aria-hidden="true" />
              <div className="branchtree__branch">{b}</div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);
