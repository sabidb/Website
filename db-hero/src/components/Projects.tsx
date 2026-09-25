import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { projects, gallery } from '../site.config';
import { Mockup } from './mockups/Mockups';
import { Reveal } from './ui/Reveal';

const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export const Projects: React.FC = () => (
  <section id="projects" className="section projects">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow"><span className="dot" /> Projects</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Our Work</h2>
        <p className="lede">Built to be extended — each new restaurant project slots into the same structure. More case studies can be added as the portfolio grows.</p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => {
          const cover = gallery.find((g) => g.id === p.shots[0]) || gallery[0];
          return (
            <Reveal key={p.id} className="projectcard">
              <div className="projectcard__media">
                <Mockup screen={cover.mockup} device={cover.device} image={cover.image} alt={cover.alt} />
              </div>
              <div className="projectcard__body">
                <div className="projectcard__meta">
                  <span className="tag">{p.status}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="projectcard__type">{p.type}</p>
                <p>{p.description}</p>
                <div className="projectcard__caps">
                  {p.capabilities.slice(0, 6).map((c) => (
                    <span key={c} className="chip"><Check size={13} /> {c}</span>
                  ))}
                </div>
                <button className="btn btn--ghost" onClick={() => scrollTo('#showcase')}>
                  View Case Study <ArrowRight size={16} />
                </button>
              </div>
            </Reveal>
          );
        })}

        <Reveal className="projectcard projectcard--placeholder" delay={80}>
          <div className="projectcard__addbody">
            <div className="projectcard__addicon">+</div>
            <h3>Your restaurant here</h3>
            <p>New projects plug into the same data structure. When your platform ships, it becomes the next case study.</p>
            <button className="btn btn--primary" onClick={() => scrollTo('#contact')}>Start your project <ArrowRight size={16} /></button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
