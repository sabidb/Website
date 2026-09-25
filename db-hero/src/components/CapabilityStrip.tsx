import React from 'react';
import { capabilities } from '../site.config';
import { Icon } from './ui/Icon';

const iconFor: Record<string, string> = {
  'Customer Ordering': 'Smartphone',
  'Multi-Branch': 'Building2',
  'Admin Dashboard': 'LayoutDashboard',
  'Kitchen Operations': 'ChefHat',
  'Delivery Management': 'Bike',
  'Payment Integration': 'CreditCard',
};

export const CapabilityStrip: React.FC = () => (
  <div className="capstrip">
    <div className="container capstrip__inner">
      {capabilities.map((c) => (
        <div className="capstrip__item" key={c}>
          <Icon name={iconFor[c] || 'Puzzle'} size={18} />
          <span>{c}</span>
        </div>
      ))}
    </div>
  </div>
);
