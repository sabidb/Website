import React from 'react';
import { techAreas } from '../site.config';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';

export const Technology: React.FC = () => (
  <section id="integrations" className="section technology">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow"><span className="dot" /> Technology &amp; integrations</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Integrations Designed Around Your Restaurant</h2>
        <p className="lede">We architect each system around the services a restaurant actually uses. These are capability areas — configured per project, not vendor claims.</p>
      </div>
      <div className="tech-grid">
        {techAreas.map((t, i) => (
          <Reveal key={t.title} className="tech-card" delay={(i % 4) * 50}>
            <div className="tech-card__icon"><Icon name={t.icon} size={20} /></div>
            <div>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
