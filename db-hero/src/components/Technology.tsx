import React from 'react';
import { ChevronDown } from 'lucide-react';
import { techAreas } from '../site.config';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';

export const Technology: React.FC = () => (
  <section id="integrations" className="section technology">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow"><span className="dot" /> Built around your business</span>
        <h2 className="h2" style={{ marginTop: 14 }}>The Technology, Without the Jargon</h2>
        <p className="lede">Your platform connects to the services a restaurant actually uses. These are capability areas — configured per project, not vendor claims.</p>
      </div>
      <div className="tech-grid">
        {techAreas.map((t, i) => (
          <Reveal key={t.title} className="tech-card" delay={(i % 3) * 50}>
            <div className="tech-card__icon"><Icon name={t.icon} size={20} /></div>
            <div>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <details className="tech-details">
        <summary>
          <span>Technical details</span>
          <ChevronDown size={18} />
        </summary>
        <div className="tech-details__body">
          <p>
            For technical stakeholders: each platform is built as a connected system — a customer
            front-end (app and/or web), an administration back-office, and the operational surfaces
            (POS, kitchen, delivery) that share one source of truth for menu, orders and branches.
          </p>
          <ul>
            <li>Cloud-hosted back-end with secure, role-based access for owners, managers and staff.</li>
            <li>Payment integration built around your selected provider and gateway.</li>
            <li>Integration points for notifications, maps/location, SMS/OTP and printing where required.</li>
            <li>Multi-branch data model: branch-level operations with centralized ownership and reporting.</li>
          </ul>
          <p className="tech-details__note">Exact stack and integrations are scoped per project — we don't advertise services a project doesn't use.</p>
        </div>
      </details>
    </div>
  </section>
);
