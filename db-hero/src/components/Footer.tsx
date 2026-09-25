import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { brand, contact } from '../site.config';
import { waLink, telLink, mailLink } from '../lib/links';

const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer__grid">
      <div className="footer__brand">
        <div className="brandmark">
          <span className="brandmark__logo">
            <svg viewBox="0 0 32 32" width="26" height="26">
              <rect width="32" height="32" rx="9" fill="url(#fbg)" />
              <path d="M11 9v14M11 9c2.2 0 2.2 5 0 5M21 9v14M18.5 9v4.5c0 1.4 2.5 1.4 2.5 0V9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <defs><linearGradient id="fbg" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#12a06a" /><stop offset="1" stopColor="#0a4d38" /></linearGradient></defs>
            </svg>
          </span>
          <span className="brandmark__name" style={{ color: '#fff' }}>{brand.name}</span>
        </div>
        <p>Custom restaurant technology — ordering apps, multi-branch systems and admin dashboards built around your business.</p>
      </div>

      <div className="footer__col">
        <h4>Solutions</h4>
        <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollTo('#solutions'); }}>What we build</a>
        <a href="#showcase" onClick={(e) => { e.preventDefault(); scrollTo('#showcase'); }}>App showcase</a>
        <a href="#integrations" onClick={(e) => { e.preventDefault(); scrollTo('#integrations'); }}>Integrations</a>
      </div>

      <div className="footer__col">
        <h4>Company</h4>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); }}>Projects</a>
        <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('#process'); }}>Process</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}>About</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>Contact</a>
      </div>

      <div className="footer__col">
        <h4>Contact</h4>
        <a href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> WhatsApp</a>
        <a href={mailLink()}><Mail size={15} /> {contact.email}</a>
        <a href={telLink()}><Phone size={15} /> {contact.phone}</a>
      </div>
    </div>
    <div className="container footer__bottom">
      <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
      <span className="muted">Custom Restaurant Apps &amp; Multi-Branch Software</span>
    </div>
  </footer>
);
