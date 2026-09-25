import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { waLink } from '../lib/links';

const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

/** Persistent mobile bar — restaurant owners often open the link via WhatsApp. */
export const MobileCTA: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`mobilecta ${show ? 'is-show' : ''}`} aria-hidden={!show}>
      <a className="mobilecta__wa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp">
        <MessageCircle size={20} />
      </a>
      <button className="btn btn--primary mobilecta__demo" onClick={() => scrollTo('#contact')}>
        Request Demo <ArrowRight size={16} />
      </button>
    </div>
  );
};
