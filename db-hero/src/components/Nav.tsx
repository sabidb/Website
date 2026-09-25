import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { brand, nav } from '../site.config';
import './nav.css';

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="brandmark" onClick={(e) => { e.preventDefault(); go('#home'); }} aria-label={`${brand.name} home`}>
          <span className="brandmark__logo" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <rect width="32" height="32" rx="9" fill="url(#bg)" />
              <path d="M11 9v14M11 9c2.2 0 2.2 5 0 5M21 9v14M18.5 9v4.5c0 1.4 2.5 1.4 2.5 0V9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <defs><linearGradient id="bg" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#12a06a" /><stop offset="1" stopColor="#0a4d38" /></linearGradient></defs>
            </svg>
          </span>
          <span className="brandmark__name">{brand.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={(e) => { e.preventDefault(); go(n.href); }}>{n.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#contact" className="btn btn--primary nav__cta" onClick={(e) => { e.preventDefault(); go('#contact'); }}>
            Request a Demo <ArrowRight size={16} />
          </a>
          <button className="nav__burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="nav__mobile-links">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={(e) => { e.preventDefault(); go(n.href); }}>{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--primary btn--block" onClick={(e) => { e.preventDefault(); go('#contact'); }}>
          Request a Demo <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
};
