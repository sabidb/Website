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
  name: (env.VITE_BRAND_NAME as string) || 'RestoPOS',
  // Short arabic-friendly tagline shown in the eyebrow.
  tagline: 'Restaurant Technology',
  taglineAr: 'تقنية المطاعم',
  domain: (env.VITE_BRAND_DOMAIN as string) || 'restopos.sa',
  // Factual, non-fabricated trust points for the Saudi market.
  trust: ['Arabic & English', 'VAT-ready invoicing', 'Built for Saudi restaurants'],
};

export const contact = {
  // All configurable — set these in your deployment environment.
  email: (env.VITE_CONTACT_EMAIL as string) || 'hello@restopos.sa',
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
  { label: 'How It Works', href: '#how' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/** The moving parts of a real restaurant operation — used in "The problem we solve". */
export const operations = [
  'Customers', 'Menus', 'Orders', 'Branches', 'Kitchens',
  'Delivery', 'Payments', 'Promotions', 'Staff', 'Reporting',
];

/** Trust / capability strip below the hero. */
export const capabilities = [
  'Point of Sale',
  'Customer Ordering',
  'Multi-Branch',
  'Admin Dashboard',
  'Kitchen Operations',
  'Delivery Management',
  'Payment Integration',
];

/**
 * "What we build" cards. Each card carries a short summary (`body`) plus a few
 * concrete function bullets (`points`) so a restaurant owner understands
 * exactly what the system does — not just its name.
 * Icon names map to lucide-react icons in the component.
 */
export const solutions = [
  {
    icon: 'Monitor',
    title: 'Point of Sale (POS)',
    body: 'A fast cashier screen your staff use in-store — connected to the same menu, branches and reports as everything else.',
    points: ['Take dine-in, takeaway & delivery orders', 'VAT-compliant receipts', 'Works the same across every branch'],
  },
  {
    icon: 'Smartphone',
    title: 'Customer App',
    body: "Your own branded app where customers order directly from you — no marketplace between you and your guest.",
    points: ['Browse menu & customize items', 'Cart, checkout & secure payment', 'Live order tracking'],
  },
  {
    icon: 'Building2',
    title: 'Multi-Branch Management',
    body: 'Run many locations from one system, with each branch operating on its own while ownership stays central.',
    points: ['Branch-level menus & pricing', 'Branch-specific staff access', 'One owner view across all branches'],
  },
  {
    icon: 'LayoutDashboard',
    title: 'Admin Dashboard',
    body: 'The control room for the whole operation — where owners and managers run the business day to day.',
    points: ['Manage products, categories & prices', 'Track and update every order', 'Handle customers & promotions'],
  },
  {
    icon: 'ChefHat',
    title: 'Kitchen Operations',
    body: 'A clear kitchen view so staff always know what to cook next and nothing gets missed at the pass.',
    points: ['Incoming orders as live tickets', 'Item-by-item preparation detail', 'Mark items ready as they’re done'],
  },
  {
    icon: 'Bike',
    title: 'Delivery Operations',
    body: 'Keep your own delivery organised — from assigning a driver to getting the order to the door.',
    points: ['Assign orders to drivers', 'Track delivery status', 'Branch-aware delivery zones'],
  },
  {
    icon: 'CreditCard',
    title: 'Payments',
    body: "Checkout built around the payment provider you choose, so paying is smooth and money is accounted for.",
    points: ['Card & cash flows', 'Automatic VAT calculation', 'Payment status on every order'],
  },
  {
    icon: 'BarChart3',
    title: 'Reports',
    body: 'See how the business is really doing, with the numbers that matter for owners and managers.',
    points: ['Sales by day, branch & channel', 'Best-selling items', 'Operational performance'],
  },
  {
    icon: 'Puzzle',
    title: 'Custom Integrations',
    body: 'Connect the systems and services your restaurant already relies on, instead of forcing you to switch.',
    points: ['Payment & delivery providers', 'Printers & hardware', 'Third-party tools you already use'],
  },
] as const;

/**
 * Feature deep-dive — flagship systems shown with their mockup beside a clear,
 * plain-language explanation of what each one actually does.
 */
export const deepDive = [
  {
    eyebrow: 'For your staff',
    title: 'Point of Sale that just works',
    device: 'browser' as const,
    mockup: 'pos',
    body: "Your cashiers take orders on a fast, simple screen — dine-in, takeaway or delivery. Every sale is recorded, taxed correctly and flows into the same reports as your app orders.",
    functions: [
      'Tap items to build an order in seconds',
      'Switch between dine-in, takeaway & delivery',
      'Automatic VAT (15%) and clean receipts',
      'Cash and card payment flows',
      'Same menu and prices as every branch',
    ],
  },
  {
    eyebrow: 'For your customers',
    title: 'Your own ordering app',
    device: 'phone' as const,
    mockup: 'menu',
    body: 'Customers order straight from your branded app or website — you own the experience and the relationship, with no marketplace commission model in between.',
    functions: [
      'Browse a beautiful menu with photos',
      'Customize items, add-ons and quantities',
      'Secure checkout with saved details',
      'Live order tracking to the door',
      'Re-order favourites in one tap',
    ],
  },
  {
    eyebrow: 'For the owner',
    title: 'One dashboard for everything',
    device: 'browser' as const,
    mockup: 'admin',
    body: 'Run the whole business from one place: menus, orders, branches, staff, promotions and reports — with a live view across every location you operate.',
    functions: [
      'Manage products, categories & pricing',
      'See and update orders in real time',
      'Add branches and control staff access',
      'Run promotions and manage customers',
      'Sales & operations reports at a glance',
    ],
  },
];

/** Feature chips used across the case study and multi-branch sections. */
export const featureChips = [
  'Point of Sale',
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
  | 'POS'
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
  caption: string; // short contextual explanation shown with the screen
}

export const galleryCategories: Category[] = [
  'Customer App',
  'Menu',
  'Checkout',
  'Order Tracking',
  'POS',
  'Admin',
  'Kitchen',
  'Delivery',
  'Reports',
];

export const gallery: Shot[] = [
  { id: 'g1', title: 'Home & Discovery', category: 'Customer App', device: 'phone', mockup: 'menu', alt: 'Customer app home screen showing restaurant branches and featured items', caption: 'Customers land in your branded app, choose a branch and browse featured items.' },
  { id: 'g2', title: 'Menu & Categories', category: 'Menu', device: 'phone', mockup: 'menu', alt: 'Menu screen with categories and product cards', caption: 'A clear, photo-rich menu organised by category makes ordering effortless.' },
  { id: 'g3', title: 'Product Customization', category: 'Menu', device: 'phone', mockup: 'product', alt: 'Product detail screen with customization options', caption: 'Guests customise items with options and add-ons before adding to the cart.' },
  { id: 'g4', title: 'Cart & Checkout', category: 'Checkout', device: 'phone', mockup: 'checkout', alt: 'Checkout screen with order summary and payment', caption: 'A simple checkout with an itemised summary, VAT and the chosen payment method.' },
  { id: 'g5', title: 'Order Tracking', category: 'Order Tracking', device: 'phone', mockup: 'tracking', alt: 'Live order tracking screen with status timeline', caption: 'Customers follow their order in real time, from kitchen to delivery.' },
  { id: 'gpos', title: 'POS · Cashier', category: 'POS', device: 'browser', mockup: 'pos', alt: 'Point-of-sale cashier screen with order pad and payment', caption: 'Staff take in-store orders on a fast cashier screen, connected to the same system.' },
  { id: 'g6', title: 'Admin Overview', category: 'Admin', device: 'browser', mockup: 'admin', alt: 'Admin dashboard overview with orders and metrics', caption: 'Owners see live orders and key numbers across every branch at a glance.' },
  { id: 'g7', title: 'Kitchen Display', category: 'Kitchen', device: 'browser', mockup: 'kitchen', alt: 'Kitchen display system with incoming order tickets', caption: 'Incoming orders reach the kitchen as clear tickets so nothing is missed.' },
  { id: 'g8', title: 'Delivery Board', category: 'Delivery', device: 'browser', mockup: 'delivery', alt: 'Delivery management board with drivers and orders', caption: 'Assign orders to drivers and track delivery status from one board.' },
  { id: 'g9', title: 'Reports & Analytics', category: 'Reports', device: 'browser', mockup: 'reports', alt: 'Reports screen with sales charts and breakdowns', caption: 'Sales, channels and top items — the numbers owners actually use to decide.' },
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
    capabilities: ['Point of Sale', 'Customer Ordering', 'Multi-Branch', 'Admin Dashboard', 'Order Management', 'Kitchen Workflow', 'Delivery Workflow', 'Payments', 'Reports'],
    featured: true,
    status: 'Reference architecture',
    shots: ['g1', 'g2', 'gpos', 'g4', 'g5', 'g6', 'g7'],
  },
];

/** Technology / integration categories. Only capability areas — no vendor logos claimed. */
export const techAreas = [
  { icon: 'Monitor', title: 'POS Integrations', body: 'Connect the cashier/POS terminal to the same menu, orders and reports.' },
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

/** Restaurant segments we build for — credibility without naming clients. */
export const segments = [
  { icon: 'Utensils', title: 'Quick-service & fast food', body: 'High-volume ordering with fast POS and kitchen flow.' },
  { icon: 'Coffee', title: 'Cafés & bakeries', body: 'Menu-rich ordering with customization and loyalty in mind.' },
  { icon: 'ChefHat', title: 'Fine & casual dining', body: 'Table-side ordering, dine-in POS and branded apps.' },
  { icon: 'Boxes', title: 'Cloud & ghost kitchens', body: 'Delivery-first operations across multiple brands.' },
  { icon: 'Building2', title: 'Multi-branch chains', body: 'Central control with branch-level operations.' },
  { icon: 'Network', title: 'Franchises & groups', body: 'Consistent systems across every location you run.' },
];

/** Engagement / delivery process — shows we work as a partner. */
export const process = [
  { n: '01', title: 'Discover', body: 'Understand the restaurant, branches and requirements.' },
  { n: '02', title: 'Plan', body: 'Define the customer experience and operational system.' },
  { n: '03', title: 'Design', body: 'Create the interfaces and user experience.' },
  { n: '04', title: 'Build', body: 'Develop the application and backend systems.' },
  { n: '05', title: 'Integrate', body: 'Connect required services and restaurant workflows.' },
  { n: '06', title: 'Launch', body: 'Test, deploy and support the system.' },
];

/** "Built to grow with you" — factual architecture principles, not certifications. */
export const reliability = [
  { icon: 'ShieldCheck', title: 'You own your data & customers', body: 'Your platform and your customer relationships — not a marketplace’s.' },
  { icon: 'Cloud', title: 'Cloud-hosted & scalable', body: 'Runs in the cloud and scales as you add branches, orders and channels.' },
  { icon: 'Lock', title: 'Secure by design', body: 'Access control, secure payment flows and careful data handling.' },
  { icon: 'Languages', title: 'Arabic & English', body: 'Built for the Saudi market with right-to-left support in mind.' },
  { icon: 'ReceiptText', title: 'VAT-ready', body: 'Correct tax handling and clean, compliant receipts.' },
  { icon: 'Workflow', title: 'One system, every channel', body: 'App, POS, kitchen and delivery all stay in sync.' },
];

/** FAQ — answers a serious buyer's real objections. */
export const faq = [
  { q: 'Can you build an app for my restaurant?', a: 'Yes. We design and build custom customer ordering apps — with your menu, your branding and the workflow that fits how your restaurant operates.' },
  { q: 'Can you support multiple branches?', a: 'Yes. The system is built for multi-branch operation: each branch runs its own day-to-day while ownership and reporting stay central, and it scales as you add locations.' },
  { q: 'Can the system have my restaurant branding?', a: 'Yes. It’s your platform end to end — your name, colours, menu and experience, not a shared marketplace look.' },
  { q: 'Can you build an admin dashboard?', a: 'Yes. Owners and managers get a dashboard to manage products, orders, branches, customers, promotions and reports in one place.' },
  { q: 'Can you integrate payments?', a: 'Yes. Payment integration is designed around the provider you choose and your project’s requirements, with automatic VAT and clean receipts.' },
  { q: 'Can you build delivery functionality?', a: 'Yes, where it fits your operation — we support in-house delivery workflows such as assigning drivers and tracking delivery status.' },
  { q: 'Can you build a system specifically for my restaurant?', a: 'Yes — that’s the core of what we do. Every platform is custom-built around your menu, branches, operations and requirements.' },
  { q: 'How do we get started?', a: 'Request a demo → we discuss your requirements → we prepare a proposal → we design and build → we launch and support the system.' },
];
