import React from 'react';
import { Check } from 'lucide-react';
import { projects, featureChips } from '../site.config';
import { PhoneMock, BrowserMock } from './mockups/Mockups';
import { Reveal } from './ui/Reveal';

export const CaseStudy: React.FC = () => {
  const p = projects.find((x) => x.featured) || projects[0];
  if (!p) return null;

  return (
    <section className="section dark casestudy">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow--light"><span className="dot" /> Featured case study</span>
          <h2 className="h2" style={{ marginTop: 14 }}>{p.name}</h2>
          <p className="lede">{p.type} · {p.status}</p>
        </div>

        <div className="casestudy__grid">
          <Reveal className="casestudy__text">
            <div className="cs-block">
              <h3>The Challenge</h3>
              <p>The restaurant needed a dedicated digital ordering platform capable of supporting
                customers and restaurant operations across more than one branch.</p>
            </div>
            <div className="cs-block">
              <h3>The Solution</h3>
              <p>A connected restaurant ecosystem covering customer ordering, administration and
                operational workflows — designed to grow with the business.</p>
            </div>
            <div className="cs-block">
              <h3>Built Around the Restaurant</h3>
              <div className="chips">
                {featureChips.map((c) => (
                  <span className="chip" key={c}><Check size={14} /> {c}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="casestudy__visual" delay={120}>
            <div className="cs-browser"><BrowserMock screen="admin" /></div>
            <div className="cs-phone cs-phone--1"><PhoneMock screen="menu" /></div>
            <div className="cs-phone cs-phone--2"><PhoneMock screen="tracking" /></div>
          </Reveal>
        </div>

        <div className="casestudy__cols">
          {[
            { t: 'Customer Experience', b: 'Branded ordering, menu browsing, customization, checkout and live order tracking.' },
            { t: 'Admin Experience', b: 'Central control of products, orders, branches, customers, promotions and reports.' },
            { t: 'Multi-Branch Architecture', b: 'Branch-level operations with centralized ownership and branch-aware order management.' },
            { t: 'Operational Workflow', b: 'Order → kitchen → delivery flow with the information each role needs.' },
          ].map((c, i) => (
            <Reveal key={c.t} className="cs-col" delay={i * 60}>
              <h4>{c.t}</h4>
              <p>{c.b}</p>
            </Reveal>
          ))}
        </div>

        <p className="casestudy__note">
          This is a reference architecture used to demonstrate the systems we build. It contains
          no real customer data — your project would carry your brand, menu and workflows.
        </p>
      </div>
    </section>
  );
};
