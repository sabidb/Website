import React from 'react';
import { ArrowRight, PlayCircle, Check } from 'lucide-react';
import { brand, capabilities } from '../site.config';
import { PhoneMock, BrowserMock } from './mockups/Mockups';

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Hero: React.FC = () => (
  <section id="home" className="hero">
    <div className="hero__glow" aria-hidden="true" />
    <div className="container hero__grid">
      <div className="hero__copy">
        <span className="eyebrow eyebrow--light reveal is-in">
          <span className="dot" /> {brand.tagline.toUpperCase()} · {brand.taglineAr}
        </span>
        <h1 className="hero__title">
          Your Restaurant.<br />
          Your App.<br />
          <span className="hero__accent">Your Technology.</span>
        </h1>
        <p className="hero__lede">
          {brand.name} builds custom restaurant ordering platforms, POS, multi-branch
          systems, admin dashboards and digital operations — tailored to your business.
        </p>
        <div className="hero__cta">
          <button className="btn btn--light" onClick={() => scrollTo('#contact')}>
            Request a Demo <ArrowRight size={17} />
          </button>
          <button className="btn btn--outline-light" onClick={() => scrollTo('#projects')}>
            <PlayCircle size={18} /> View Our Work
          </button>
        </div>
        <ul className="hero__trust">
          {brand.trust.map((t) => (
            <li key={t}><Check size={14} /> {t}</li>
          ))}
        </ul>
        <ul className="hero__caps">
          {capabilities.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="hero__visual" aria-label="Illustrative preview of a restaurant POS, ordering app and admin dashboard">
        <div className="hero__browser"><BrowserMock screen="pos" url="pos.your-restaurant.sa" /></div>
        <div className="hero__phone hero__phone--1"><PhoneMock screen="menu" /></div>
        <div className="hero__float hero__float--a">Live orders · 4 branches</div>
        <div className="hero__float hero__float--b">Order #10482 · On the way</div>
      </div>
    </div>
  </section>
);
