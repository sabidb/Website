import React from 'react';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';

const flow = [
  { icon: 'Smartphone', label: 'Customer' },
  { icon: 'LayoutDashboard', label: 'Restaurant App' },
  { icon: 'Puzzle', label: 'Order Management' },
  { icon: 'ChefHat', label: 'Kitchen' },
  { icon: 'Bike', label: 'Delivery' },
  { icon: 'Check', label: 'Customer' },
];

const ownerFlow = [
  { icon: 'Building2', label: 'Owner' },
  { icon: 'LayoutDashboard', label: 'Admin Dashboard' },
  { icon: 'BarChart3', label: 'Branches · Menu · Orders · Reports' },
];

export const HowItWorks: React.FC = () => (
  <section id="how" className="section dark howitworks">
    <div className="container">
      <div className="section-head center">
        <span className="eyebrow eyebrow--light"><span className="dot" /> How it works</span>
        <h2 className="h2" style={{ marginTop: 14 }}>One Connected Restaurant Ecosystem</h2>
        <p className="lede">From the customer placing an order to your team fulfilling it — every step flows through one system.</p>
      </div>

      <Reveal className="flow">
        {flow.map((f, i) => (
          <React.Fragment key={i}>
            <div className="flow__node">
              <div className="flow__icon"><Icon name={f.icon} size={22} /></div>
              <span>{f.label}</span>
            </div>
            {i < flow.length - 1 && <div className="flow__arrow" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </Reveal>

      <Reveal className="flow flow--owner" delay={120}>
        {ownerFlow.map((f, i) => (
          <React.Fragment key={i}>
            <div className="flow__node flow__node--gold">
              <div className="flow__icon"><Icon name={f.icon} size={22} /></div>
              <span>{f.label}</span>
            </div>
            {i < ownerFlow.length - 1 && <div className="flow__arrow flow__arrow--gold" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </Reveal>
    </div>
  </section>
);
