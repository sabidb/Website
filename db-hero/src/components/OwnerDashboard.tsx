import React from 'react';
import { ShoppingBag, Package, Tags, Building2, Users, Percent, BarChart3, Settings } from 'lucide-react';
import { BrowserMock } from './mockups/Mockups';
import { Reveal } from './ui/Reveal';

const controls = [
  { icon: ShoppingBag, label: 'Orders' },
  { icon: Package, label: 'Products' },
  { icon: Tags, label: 'Categories' },
  { icon: Building2, label: 'Branches' },
  { icon: Users, label: 'Customers' },
  { icon: Percent, label: 'Promotions' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Settings, label: 'Operational settings' },
];

export const OwnerDashboard: React.FC = () => (
  <section className="section dark ownerdash">
    <div className="container ownerdash__grid">
      <Reveal className="ownerdash__visual"><BrowserMock screen="admin" /></Reveal>
      <Reveal className="ownerdash__copy" delay={100}>
        <span className="eyebrow eyebrow--light"><span className="dot" /> Owner dashboard</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Full Control, One Screen</h2>
        <p className="lede">The owner dashboard puts every operational lever in one place — across all branches.</p>
        <div className="ownerdash__controls">
          {controls.map((c) => (
            <div className="ownerdash__control" key={c.label}>
              <c.icon size={18} /> <span>{c.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
