import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { waLink } from '../lib/links';
import { Reveal } from './ui/Reveal';

const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export const FinalCTA: React.FC = () => (
  <section className="section finalcta dark">
    <div className="finalcta__glow" aria-hidden="true" />
    <div className="container">
      <Reveal className="finalcta__inner">
        <h2 className="finalcta__title">Your Restaurant Deserves Technology<br />Built Around It.</h2>
        <p className="finalcta__lede">From customer ordering to branch operations, we build digital systems designed around your restaurant.</p>
        <div className="finalcta__cta">
          <button className="btn btn--light" onClick={() => scrollTo('#contact')}>Request a Demo <ArrowRight size={17} /></button>
          <button className="btn btn--outline-light" onClick={() => scrollTo('#projects')}>Explore Our Work</button>
          <a className="btn btn--whatsapp" href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
        </div>
      </Reveal>
    </div>
  </section>
);
