import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { faq } from '../site.config';
import { waLink } from '../lib/links';
import { Reveal } from './ui/Reveal';

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" /> FAQ</span>
          <h2 className="h2" style={{ marginTop: 14 }}>Questions Restaurant Owners Ask</h2>
          <p className="lede">Don't see your question? Message us — we'll answer directly.</p>
        </div>

        <Reveal className="faq__list">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__ic">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
                </button>
                <div className="faq__a" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </Reveal>

        <div className="faq__cta">
          <a className="btn btn--whatsapp" href={waLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
