import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { deepDive } from '../site.config';
import { Mockup } from './mockups/Mockups';
import { Reveal } from './ui/Reveal';

const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export const DeepDive: React.FC = () => (
  <section id="features" className="section deepdive">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow"><span className="dot" /> How it works</span>
        <h2 className="h2" style={{ marginTop: 14 }}>What Each System Actually Does</h2>
        <p className="lede">A closer look at the three systems most restaurants start with — and the functions inside each.</p>
      </div>

      <div className="deepdive__rows">
        {deepDive.map((d, i) => (
          <Reveal key={d.title} className={`deepdive__row ${i % 2 === 1 ? 'is-reversed' : ''}`}>
            <div className="deepdive__media">
              <Mockup screen={d.mockup} device={d.device} />
            </div>
            <div className="deepdive__text">
              <span className="eyebrow"><span className="dot" /> {d.eyebrow}</span>
              <h3 className="deepdive__title">{d.title}</h3>
              <p className="deepdive__body">{d.body}</p>
              <ul className="deepdive__functions">
                {d.functions.map((f) => (
                  <li key={f}><span className="deepdive__tick"><Check size={14} /></span> {f}</li>
                ))}
              </ul>
              <button className="btn btn--ghost deepdive__cta" onClick={() => scrollTo('#contact')}>
                Ask for a demo of this <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
