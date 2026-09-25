import React from 'react';
import {
  Smartphone, Building2, LayoutDashboard, ChefHat, Bike, CreditCard, BarChart3,
  Puzzle, MapPin, MessageSquare, Bell, Printer, Cloud, Check, ArrowRight, Monitor,
  Utensils, Coffee, Boxes, Network, ShieldCheck, Lock, Languages, ReceiptText, Workflow,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Smartphone, Building2, LayoutDashboard, ChefHat, Bike, CreditCard, BarChart3,
  Puzzle, MapPin, MessageSquare, Bell, Printer, Cloud, Check, ArrowRight, Monitor,
  Utensils, Coffee, Boxes, Network, ShieldCheck, Lock, Languages, ReceiptText, Workflow,
};

export const Icon: React.FC<{ name: string; size?: number; strokeWidth?: number }> = ({
  name, size = 22, strokeWidth = 2,
}) => {
  const C = map[name] || Puzzle;
  return <C size={size} strokeWidth={strokeWidth} />;
};
