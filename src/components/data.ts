export const meta = {
  status: '[SYSTEM_ONLINE: 99.9%]',
  timezone: new Date()
    .toLocaleString('en-US', { timeZoneName: 'short' })
    .split(' ')
    .slice(-1)[0],
  capacity: '[CAPACITY: AVAILABLE]',
  version: 'v2.4.1',
  loadTime: '12ms',
};

export const services = [
  {
    icon: '//',
    title: 'Custom Web Apps',
    bullets: [
      '[x] SPA / SSA architectures',
      '[x] State management & data flows',
      '[x] Component systems & design tokens',
      '[x] Accessibility (WCAG 2.1 AA+)',
    ],
  },
  {
    icon: '->',
    title: 'API Engineering',
    bullets: [
      '[x] REST & GraphQL endpoints',
      '[x] Authentication & rate limiting',
      '[x] Database modeling & migrations',
      '[x] Webhook & event-driven systems',
    ],
  },
  {
    icon: '[x]',
    title: 'Performance Optimization',
    bullets: [
      '[x] Core Web Vitals auditing',
      '[x] Bundle analysis & tree-shaking',
      '[x] Caching strategies & edge delivery',
      '[x] Lighthouse score: 100/100 target',
    ],
  },
  {
    icon: '//',
    title: 'Infrastructure',
    bullets: [
      '[x] CI/CD pipeline design',
      '[x] Container orchestration',
      '[x] Monitoring & observability',
      '[x] Auto-scaling & load balancing',
    ],
  },
];

export const projects = [
  {
    name: 'NEXUS / DASHBOARD',
    category: 'WEB APP',
    stats: { lighthouse: 100, loadTime: '120ms', bundleSize: '42kb' },
    desc: 'Real-time analytics dashboard. Zero dependencies. Pure SSR.',
  },
  {
    name: 'FORGE / E-COMMERCE',
    category: 'FULL STACK',
    stats: { lighthouse: 100, loadTime: '89ms', bundleSize: '38kb' },
    desc: 'Headless commerce platform. Sub-100ms TTFB across all regions.',
  },
  {
    name: 'PULSE / HEALTH-API',
    category: 'API ENGINEERING',
    stats: { lighthouse: 100, loadTime: '45ms', bundleSize: 'N/A' },
    desc: 'HIPAA-compliant API handling 2M+ daily requests at 99.99% uptime.',
  },
];

export const manifesto = [
  "We don't build websites. We build systems. Every pixel is intentional, every line of code is accountable, and every interaction is engineered to perform under real-world conditions. The modern web is bloated with framework bloat, unnecessary abstractions, and design patterns that prioritize aesthetics over substance. We reject that.",

  "Our approach is radical in its simplicity: raw HTML served at the speed of light, CSS that doesn't need a build step to work, and JavaScript only when the user actually needs interactivity. We strip away the ceremony and deliver applications that load instantly, render predictably, and degrade gracefully. This isn't minimalism for the sake of minimalism — it's engineering discipline applied to the web platform.",

  "We work with founders, technical teams, and organizations who understand that the best technology is the technology that gets out of the way. If your project demands performance that matters, accessibility that's real, and code that your team can maintain without a 47-slide onboarding deck — let's talk. We build for the long haul, not the demo day.",
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
