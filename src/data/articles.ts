export interface Article {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: 'Engineering' | 'Design' | 'Security' | 'Audio';
  slug: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Case for Brutalist Web Design in 2026',
    date: '2026-01-15',
    summary:
      'Why removing "slop"—gradients, massive hero images, and scroll-jacking—increases conversion rates for local SMBs.',
    category: 'Design',
    slug: 'brutalist-web-design-2026',
    readTime: '4 min read',
  },
  {
    id: '2',
    title: 'Post-Quantum Cryptography: A Roadmap',
    date: '2025-12-02',
    summary:
      'Visualizing the migration path to lattice-based cryptography and what the NIST standardization means for TLS.',
    category: 'Security',
    slug: 'post-quantum-roadmap',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'Pushing the Web Audio API to the Limit',
    date: '2025-11-20',
    summary:
      'Building a zero-dependency browser DAW while managing scheduling, latency, and garbage collection.',
    category: 'Audio',
    slug: 'web-audio-api-limits',
    readTime: '12 min read',
  },
  {
    id: '4',
    title: 'Local LLMs vs. Cloud APIs: A Cost Analysis',
    date: '2025-10-05',
    summary:
      'Comparing the running costs of self-hosted Llama instances versus API calls for consulting automation.',
    category: 'Engineering',
    slug: 'local-llm-cost-analysis',
    readTime: '6 min read',
  },
];
