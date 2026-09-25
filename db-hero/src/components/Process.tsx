import React from 'react';
import { process } from '../site.config';
import { Reveal } from './ui/Reveal';

export const Process: React.FC = () => (
  <section id="process" className="section dark process">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow eyebrow--light"><span className="dot" /> How we work</span>
        <h2 className="h2" style={{ marginTop: 14 }}>A Clear Path From Idea to Launch</h2>
        <p className="lede">We work as your technology partner — not a one-off build. Here's how a project runs.</p>
      </div>
      <ol className="process__track">
        {process.map((p, i) => (
          <Reveal key={p.n} className="process__step" as="li" delay={i * 70}>
            <div className="process__num">{p.n}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
