import React from 'react';
import { ArrowRight } from 'lucide-react';
import { operations } from '../site.config';
import { Reveal } from './ui/Reveal';

export const Problem: React.FC = () => (
  <section className="section problem">
    <div className="container">
      <div className="problem__head">
        <Reveal className="problem__intro">
          <span className="eyebrow"><span className="dot" /> The problem we solve</span>
          <h2 className="h2" style={{ marginTop: 14 }}>Your Restaurant Is More Than an Ordering Page.</h2>
          <p className="lede">
            A modern restaurant runs on many moving parts at once. Most tools only handle one of
            them — leaving your team stitching systems together by hand.
          </p>
          <p className="problem__text">
            We connect all of it through one digital ecosystem, customised around the way your
            restaurant actually operates.
          </p>
        </Reveal>

        <Reveal className="problem__ops" delay={100}>
          {operations.map((op) => (
            <div className="problem__op" key={op}>
              <span className="problem__op-dot" aria-hidden="true" />
              {op}
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="problem__bar">
        <span>Ten moving parts</span>
        <ArrowRight size={18} className="problem__arrow" />
        <strong>One connected platform, built around your restaurant.</strong>
      </Reveal>
    </div>
  </section>
);
