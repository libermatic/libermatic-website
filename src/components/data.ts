export const services = [
  {
    icon: '.*',
    title: 'Web Apps',
    bullets: [
      'SPA / SSR architectures',
      'Offline-first & PWA capabilities',
      'Component systems & design tokens',
      'Accessibility (WCAG 2.1 AA+)',
    ],
  },
  {
    icon: '=>',
    title: 'Frappe / ERPNext',
    bullets: [
      'Custom modules & server scripts',
      'Legacy data migration',
      'Third-party integrations $ APIs',
      'System upgrades & maintenance',
    ],
  },
  {
    icon: '#!',
    title: 'Audits / Performance',
    bullets: [
      'Core Web Vitals optimization',
      'Database & query tuning',
      'Bundle analysis & tree-shaking',
      'Infrastructure security reviews',
    ],
  },
  {
    icon: '::',
    title: 'Infrastructure',
    bullets: [
      'CI/CD pipeline automation',
      'Containerization & orchestration',
      'Monitoring & observability',
      'Reverse proxies & edge caching',
    ],
  },
];

export const projects = [
  {
    name: 'NEXUS / DASHBOARD',
    category: 'WEB APP',
    stats: [
      { label: 'Lighthouse', value: 100 },
      { label: 'Load Time', value: '120ms' },
      { label: 'Bundle Size', value: '42kb' },
    ],
    desc: 'Real-time analytics dashboard. Zero dependencies. Pure SSR.',
  },
  {
    name: 'FORGE / E-COMMERCE',
    category: 'FULL STACK',
    stats: [
      { label: 'Lighthouse', value: 100 },
      { label: 'Load Time', value: '89ms' },
      { label: 'Bundle Size', value: '38kb' },
    ],
    desc: 'Headless commerce platform. Sub-100ms TTFB across all regions.',
  },
  {
    name: 'PULSE / HEALTH-API',
    category: 'API ENGINEERING',
    stats: [
      { label: 'Lighthouse', value: 100 },
      { label: 'Load Time', value: '45ms' },
      { label: 'Bundle Size', value: 'N/A' },
    ],
    desc: 'HIPAA-compliant API handling 2M+ daily requests at 99.99% uptime.',
  },
];

export const manifesto = [
  "We don't build websites. We build systems. Every pixel is intentional, every line of code is accountable, and every interaction is engineered to perform under real-world conditions. The modern web is bloated with framework bloat, unnecessary abstractions, and design patterns that prioritize aesthetics over substance. We reject that.",

  "Our approach is radical in its simplicity: raw HTML served at the speed of light, CSS that doesn't need a build step to work, and JavaScript only when the user actually needs interactivity. We strip away the ceremony and deliver applications that load instantly, render predictably, and degrade gracefully. This isn't minimalism for the sake of minimalism — it's engineering discipline applied to the web platform.",

  "We work with founders, technical teams, and organizations who understand that the best technology is the technology that gets out of the way. If your project demands performance that matters, accessibility that's real, and code that your team can maintain without a 47-slide onboarding deck — let's talk. We build for the long haul, not the demo day.",
];

export const stats = [
  { value: '147', label: 'Projects Shipped' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<50ms', label: 'Avg TTFB' },
  { value: '0', label: 'Bloat Dependencies' },
];

export const contactLines = [
  '$ echo "INITIATE PROJECT"',
  '',
  '> Name:        [input]',
  '> Email:       [input]',
  '> Project:     [input]',
  '> Budget:      [input]',
  '',
  '$> Sending...',
  '',
  '> Connection established. We reply within 24h.',
  '',
];
