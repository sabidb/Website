/**
 * SITE CONFIGURATION — single source of truth for content.
 *
 * Everything a non-developer needs to change lives here or in a `.env` file.
 * Sensitive/contact values are read from environment variables (VITE_*) with
 * safe fallbacks so nothing real is hardcoded. See `.env.example`.
 *
 * To rebrand: change `brand.name` (and optionally the palette in index.css).
 * To add a project: append to `projects`.
 * To wire real screenshots: give a gallery/journey item an `image` path
 *   (place the file in /public) — the mockup component is used only as a
 *   fallback when no image is provided.
 */

const env = import.meta.env;

export const brand = {
  name: (env.VITE_BRAND_NAME as string) || 'Qoot',
  // Short arabic-friendly tagline shown in the eyebrow.
  tagline: 'Restaurant Technology',
  taglineAr: 'تقنية المطاعم',
  domain: (env.VITE_BRAND_DOMAIN as string) || 'qoot.example',
};

export const contact = {
  // All configurable — set these in your deployment environment.
  email: (env.VITE_CONTACT_EMAIL as string) || 'hello@qoot.example',
  phone: (env.VITE_CONTACT_PHONE as string) || '+966500000000',
  // Digits only, international format, no "+" — used to build the wa.me link.
  whatsapp: (env.VITE_WHATSAPP_NUMBER as string) || '966500000000',
  whatsappMessage:
    (env.VITE_WHATSAPP_MESSAGE as string) ||
    "Hi, I saw your restaurant technology portfolio and I'd like to discuss building an app for my restaurant.",
  // Optional: endpoint that receives the contact form (leave empty to use mailto fallback).
  formEndpoint: (env.VITE_FORM_ENDPOINT as string) || '',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/** Trust / capability strip below the hero. */
export const capabilities = [
  'Customer Ordering',
  'Multi-Branch',
  'Admin Dashboard',
  'Kitchen Operations',
  'Delivery Management',
  'Payment Integration',
];

/** "What we build" cards. Icon names map to lucide-react icons in the component. */
export const solutions = [
  {
    icon: 'Smartphone',
    title: 'Customer App',
    body: 'Browse menus, customize products, manage carts, checkout and track orders.',
  },
  {
    icon: 'Building2',
    title: 'Multi-Branch Management',
    body: 'Manage multiple restaurant branches with appropriate branch-level access and centralized ownership.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Admin Dashboard',
    body: 'Manage products, orders, branches, customers, promotions and operational data.',
  },
  {
    icon: 'ChefHat',
    title: 'Kitchen Operations',
    body: 'Give kitchen staff the information they need to process incoming orders efficiently.',
  },
  {
    icon: 'Bike',
    title: 'Delivery Operations',
    body: 'Support restaurant delivery workflows and driver/order management where required.',
  },
  {
    icon: 'CreditCard',
    title: 'Payments',
    body: "Design the checkout architecture around the restaurant's selected payment provider.",
  },
  {
    icon: 'BarChart3',
    title: 'Reports',
    body: 'Give owners visibility into orders, sales and operational performance.',
  },
  {
    icon: 'Puzzle',
    title: 'Custom Integrations',
    body: "Build around the restaurant's existing systems and operational requirements.",
  },
] as const;

/** Feature chips used across the case study and multi-branch sections. */
export const featureChips = [
  'Customer Ordering',
  'Multi-Branch',
  'Admin Dashboard',
  'Order Management',
  'Kitchen Workflow',
  'Delivery Workflow',
  'Payments',
  'Reports',
];

/**
 * Screenshot gallery. `mockup` selects a built-in illustrative CSS screen.
 * When you have a real screenshot, add `image: '/screens/xyz.png'` and it
 * will be used instead of the mockup.
 */
export type Category =
  | 'Customer App'
  | 'Menu'
  | 'Checkout'
  | 'Order Tracking'
  | 'Admin'
  | 'Kitchen'
  | 'Delivery'
  | 'Reports';

export interface Shot {
  id: string;
  title: string;
  category: Category;
  device: 'phone' | 'browser';
  mockup: string; // key into the mockup registry
  image?: string; // optional real screenshot in /public
  alt: string;
}

export const galleryCategories: Category[] = [
  'Customer App',
  'Menu',
  'Checkout',
  'Order Tracking',
  'Admin',
  'Kitchen',
  'Delivery',
  'Reports',
];

export const gallery: Shot[] = [
  { id: 'g1', title: 'Home & Discovery', category: 'Customer App', device: 'phone', mockup: 'menu', alt: 'Customer app home screen showing restaurant branches and featured items' },
  { id: 'g2', title: 'Menu & Categories', category: 'Menu', device: 'phone', mockup: 'menu', alt: 'Menu screen with categories and product cards' },
  { id: 'g3', title: 'Product Customization', category: 'Menu', device: 'phone', mockup: 'product', alt: 'Product detail screen with customization options' },
  { id: 'g4', title: 'Cart & Checkout', category: 'Checkout', device: 'phone', mockup: 'checkout', alt: 'Checkout screen with order summary and payment' },
  { id: 'g5', title: 'Order Tracking', category: 'Order Tracking', device: 'phone', mockup: 'tracking', alt: 'Live order tracking screen with status timeline' },
  { id: 'g6', title: 'Admin Overview', category: 'Admin', device: 'browser', mockup: 'admin', alt: 'Admin dashboard overview with orders and metrics' },
  { id: 'g7', title: 'Kitchen Display', category: 'Kitchen', device: 'browser', mockup: 'kitchen', alt: 'Kitchen display system with incoming order tickets' },
  { id: 'g8', title: 'Delivery Board', category: 'Delivery', device: 'browser', mockup: 'delivery', alt: 'Delivery management board with drivers and orders' },
  { id: 'g9', title: 'Reports & Analytics', category: 'Reports', device: 'browser', mockup: 'reports', alt: 'Reports screen with sales charts and breakdowns' },
];

/** Customer journey steps. */
export const journey = [
  { n: '01', title: 'Discover Restaurant', body: 'Customer opens your branded app or ordering site.', mockup: 'menu' },
  { n: '02', title: 'Browse Menu', body: 'Explore categories, photos and item details.', mockup: 'menu' },
  { n: '03', title: 'Customize Order', body: 'Choose options, add-ons and quantities.', mockup: 'product' },
  { n: '04', title: 'Checkout', body: 'Review the cart and pay via the selected provider.', mockup: 'checkout' },
  { n: '05', title: 'Track Order', body: 'Follow the order status in real time.', mockup: 'tracking' },
  { n: '06', title: 'Receive Order', body: 'Pickup or delivery — completed and logged.', mockup: 'tracking' },
];

/**
 * Projects. Only one placeholder project is included by design — no fabricated
 * clients. Duplicate this object to add real projects later. `featured: true`
 * drives the case-study section.
 */
export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  capabilities: string[];
  featured?: boolean;
  status: string;
  shots: string[]; // gallery ids to display
}

export const projects: Project[] = [
  {
    id: 'p1',
    name: 'Sample Restaurant Platform',
    type: 'Multi-branch quick-service restaurant',
    description:
      'A connected restaurant ecosystem covering customer ordering, administration and operational workflows — used here to demonstrate the architecture we build around each restaurant.',
    capabilities: ['Customer Ordering', 'Multi-Branch', 'Admin Dashboard', 'Order Management', 'Kitchen Workflow', 'Delivery Workflow', 'Payments', 'Reports'],
    featured: true,
    status: 'Reference architecture',
    shots: ['g1', 'g2', 'g4', 'g5', 'g6', 'g7'],
  },
];

/** Technology / integration categories. Only capability areas — no vendor logos claimed. */
export const techAreas = [
  { icon: 'CreditCard', title: 'Payments', body: 'Architected around your chosen payment provider and gateway.' },
  { icon: 'MapPin', title: 'Maps & Location', body: 'Address, branch and delivery-zone handling.' },
  { icon: 'MessageSquare', title: 'SMS / OTP', body: 'Phone verification and transactional messaging.' },
  { icon: 'Bell', title: 'Notifications', body: 'Order updates and operational alerts.' },
  { icon: 'Printer', title: 'Printing', body: 'Kitchen and receipt printing where required.' },
  { icon: 'Bike', title: 'Delivery', body: 'In-house delivery workflows and driver assignment.' },
  { icon: 'Cloud', title: 'Cloud Infrastructure', body: 'Scalable hosting and data storage.' },
  { icon: 'BarChart3', title: 'Analytics', body: 'Operational and sales reporting.' },
];

export const branches = ['Branch 01', 'Branch 02', 'Branch 03', 'Branch 04', 'Future Branches'];
