import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { gallery, galleryCategories, type Category } from '../site.config';
import { Mockup } from './mockups/Mockups';

export const Showcase: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const shots = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((s) => s.category === filter)),
    [filter]
  );
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  // keep active index valid when filter changes
  useEffect(() => { setActive(0); }, [filter]);

  const current = shots[active] ?? shots[0];
  const prev = () => setActive((a) => (a - 1 + shots.length) % shots.length);
  const next = () => setActive((a) => (a + 1) % shots.length);

  // keyboard support in lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lightbox, shots.length]);

  // touch swipe
  const touch = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touch.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touch.current = null;
  };

  if (!current) return null;

  return (
    <section id="showcase" className="section section--tight showcase">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" /> App showcase</span>
          <h2 className="h2" style={{ marginTop: 14 }}>See the Kind of Screens We Build</h2>
          <p className="lede">Illustrative product screens across the customer app and operations. Real project screenshots drop straight into this gallery.</p>
        </div>

        <div className="showcase__filters" role="tablist" aria-label="Screenshot categories">
          {(['All', ...galleryCategories] as (Category | 'All')[]).map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`filter ${filter === c ? 'is-on' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="showcase__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <button className="stage-nav stage-nav--l" onClick={prev} aria-label="Previous screenshot"><ChevronLeft size={22} /></button>
          <div className="stage-frame">
            <Mockup screen={current.mockup} device={current.device} image={current.image} alt={current.alt} />
            <button className="stage-zoom" onClick={() => setLightbox(true)} aria-label="Open full-screen viewer">
              <Maximize2 size={16} /> View
            </button>
          </div>
          <button className="stage-nav stage-nav--r" onClick={next} aria-label="Next screenshot"><ChevronRight size={22} /></button>
        </div>

        <div className="showcase__caption">
          <strong>{current.title}</strong>
          <span className="muted">{current.category} · {active + 1} / {shots.length}</span>
        </div>

        <div className="showcase__thumbs" role="listbox" aria-label="Screenshot thumbnails">
          {shots.map((s, i) => (
            <button
              key={s.id}
              className={`thumb ${i === active ? 'is-on' : ''}`}
              onClick={() => setActive(i)}
              aria-label={s.title}
              aria-selected={i === active}
            >
              <div className="thumb__inner"><Mockup screen={s.mockup} device={s.device} image={s.image} alt={s.alt} /></div>
              <span>{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${current.title} — full screen`}>
          <button className="lightbox__close" onClick={() => setLightbox(false)} aria-label="Close viewer"><X size={24} /></button>
          <button className="lightbox__nav lightbox__nav--l" onClick={prev} aria-label="Previous"><ChevronLeft size={30} /></button>
          <div className="lightbox__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Mockup screen={current.mockup} device={current.device} image={current.image} alt={current.alt} />
            <div className="lightbox__caption">{current.title} · {current.category}</div>
          </div>
          <button className="lightbox__nav lightbox__nav--r" onClick={next} aria-label="Next"><ChevronRight size={30} /></button>
        </div>
      )}
    </section>
  );
};
