import React from 'react';
import { Check } from 'lucide-react';
import { solutions } from '../site.config';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';

export const WhatWeBuild: React.FC = () => (
  <section id="solutions" className="section">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow"><span className="dot" /> What we build</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Everything Your Restaurant Needs to Go Digital</h2>
        <p className="lede">
          A connected system built around how your restaurant actually operates — from the
          customer's first tap to the owner's end-of-day report.
        </p>
      </div>
      <div className="solutions-grid">
        {solutions.map((s, i) => (
          <Reveal key={s.title} className="card solution-card" delay={(i % 3) * 70}>
            <div className="card__icon"><Icon name={s.icon} size={22} /></div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <ul className="solution-card__points">
              {s.points.map((p) => (
                <li key={p}><Check size={14} /> {p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
