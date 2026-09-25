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
        <h2 className="finalcta__title">Ready to Build Your Restaurant's<br />Own Digital Platform?</h2>
        <p className="finalcta__lede">Tell us what you need. We'll help turn your restaurant workflow into a scalable digital system.</p>
        <div className="finalcta__cta">
          <button className="btn btn--light" onClick={() => scrollTo('#contact')}>Request a Demo <ArrowRight size={17} /></button>
          <a className="btn btn--whatsapp" href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp us</a>
        </div>
      </Reveal>
    </div>
  </section>
);
