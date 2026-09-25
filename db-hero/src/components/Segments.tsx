import React from 'react';
import { segments } from '../site.config';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';

export const Segments: React.FC = () => (
  <section className="section section--tight segments">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow"><span className="dot" /> Who we build for</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Built Around Your Kind of Restaurant</h2>
        <p className="lede">From a single café to a national chain, the same connected system adapts to how you operate.</p>
      </div>
      <div className="segments__grid">
        {segments.map((s, i) => (
          <Reveal key={s.title} className="segment" delay={(i % 3) * 60}>
            <div className="segment__icon"><Icon name={s.icon} size={20} /></div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
