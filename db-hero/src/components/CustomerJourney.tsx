import React, { useState } from 'react';
import { journey } from '../site.config';
import { PhoneMock } from './mockups/Mockups';
import { Reveal } from './ui/Reveal';

export const CustomerJourney: React.FC = () => {
  const [active, setActive] = useState(0);
  const step = journey[active];

  return (
    <section className="section journey">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow"><span className="dot" /> Customer journey</span>
          <h2 className="h2" style={{ marginTop: 14 }}>From Craving to Doorstep</h2>
          <p className="lede">Tap through the six steps a customer takes inside the app.</p>
        </div>

        <div className="journey__grid">
          <div className="journey__steps">
            {journey.map((s, i) => (
              <button
                key={s.n}
                className={`journey__step ${i === active ? 'is-on' : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="journey__num">{s.n}</span>
                <span className="journey__body">
                  <strong>{s.title}</strong>
                  <small>{s.body}</small>
                </span>
              </button>
            ))}
          </div>
          <Reveal className="journey__preview">
            <PhoneMock key={step.mockup + active} screen={step.mockup} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
