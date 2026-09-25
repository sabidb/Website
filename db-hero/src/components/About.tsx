import React from 'react';
import { brand } from '../site.config';
import { Reveal } from './ui/Reveal';

const pillars = [
  'Restaurant-specific software',
  'Custom workflows',
  'Multi-branch architecture',
  'Customer experience',
  'Operational systems',
  'Long-term scalability',
];

export const About: React.FC = () => (
  <section id="about" className="section about">
    <div className="container about__grid">
      <Reveal className="about__copy">
        <span className="eyebrow"><span className="dot" /> About {brand.name}</span>
        <h2 className="h2" style={{ marginTop: 14 }}>A Technology Partner for Restaurants</h2>
        <p className="lede">
          {brand.name} builds digital systems for restaurants — from customer ordering to the
          operations behind the counter. We focus on software that fits how a restaurant actually
          runs, and that keeps working as it grows from one branch to many.
        </p>
        <p className="about__text">
          We're not a marketplace and not an off-the-shelf template. Every platform is built around
          the restaurant's own brand, menu, workflows and integrations — designed to scale.
        </p>
      </Reveal>
      <Reveal className="about__pillars" delay={100}>
        {pillars.map((p, i) => (
          <div className="about__pillar" key={p}>
            <span className="about__pillar-n">{String(i + 1).padStart(2, '0')}</span>
            <span>{p}</span>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);
