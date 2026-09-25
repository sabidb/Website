import React from 'react';
import { reliability } from '../site.config';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';

export const Reliability: React.FC = () => (
  <section className="section reliability">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow"><span className="dot" /> Built to grow with you</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Serious Technology for Serious Restaurants</h2>
        <p className="lede">The principles we build every platform on — so it holds up as your business scales.</p>
      </div>
      <div className="reliability__grid">
        {reliability.map((r, i) => (
          <Reveal key={r.title} className="reliability__card" delay={(i % 3) * 60}>
            <div className="reliability__icon"><Icon name={r.icon} size={22} /></div>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
