export interface CaseStudy {
  projectId: string;
  client?: string;
  timeline: string;
  role: string;
  challenge: string;
  solution: string;
  technicalDetails: string[];
  outcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    projectId: 'croda-consulting',
    client: 'Internal Venture',
    timeline: 'Aug 2025 - Present',
    role: 'Principal Engineer / Designer',
    challenge:
      'The default state of the web is bloat. Most local consulting sites in Portland average 3MB+ payload sizes, filled with stock photos and layout shifts. The challenge was to build a storefront that communicated technical competence instantly while loading in under 100ms on 4G.',
    solution:
      'Stripped away all non-essential assets. The design relies entirely on typography and spacing to create hierarchy, with dark-mode-only decisions that also reduce OLED energy consumption.',
    technicalDetails: [
      'Zero-runtime CSS: Tailwind for atomic class generation.',
      'Accessibility: 100/100 Lighthouse score via semantic HTML5 landmarks.',
      'Performance: sub-50ms FCP by inlining critical CSS.',
    ],
    outcome:
      'The site serves as a living filter for clients—attracting teams that value performance and clarity, while repelling those seeking generic gloss.',
  },
  {
    projectId: 'browser-daw',
    client: 'Personal R&D',
    timeline: 'Oct 2025 - Nov 2025',
    role: 'Full Stack Engineer',
    challenge:
      'JavaScript is single-threaded and relies on garbage collection, making real-time audio sequencing historically unreliable. The goal was to build a beat-maker with sub-10ms latency that felt native.',
    solution:
      'Implemented a lookahead scheduler using the Web Audio API hardware clock. The React UI is decoupled from the audio engine so UI lag never stutters audio.',
    technicalDetails: [
      'Audio engine: pure Web Audio API (OscillatorNodes, GainNodes).',
      'State management: transient state moved to Zustand to avoid re-render churn.',
      'Optimization: Canvas visualizer for 60fps without DOM overhead.',
    ],
    outcome:
      'A functional 16-step sequencer running entirely in-browser, proving complex scheduling is viable in modern V8 engines.',
  },
  {
    projectId: 'pq-security-maps',
    client: 'Technical Presentation Assets',
    timeline: 'Nov 2025 - Jan 2026',
    role: 'Information Designer',
    challenge:
      'Post-Quantum Cryptography is abstract and hard to visualize for non-technical stakeholders. Stock imagery leans on tired hacker tropes.',
    solution:
      'Developed a visual language based on network topologies, using industrial schematics and monospaced labels to illustrate migration paths.',
    technicalDetails: [
      'Tools: Figma for vector paths, Python for initial data plots.',
      'Style: high-contrast monochrome for projector readability.',
      'Format: vector SVGs for infinite scaling.',
    ],
    outcome:
      'Assets turned a theoretical math problem into a concrete infrastructure roadmap.',
  },
  {
    projectId: 'admin-ui',
    client: 'Open Source / Internal Tools',
    timeline: 'Dec 2025 - Jan 2026',
    role: 'UI Architect',
    challenge:
      'Most admin dashboards prioritize whitespace over data density. Monitoring server health required a cockpit interface with zero scrolling.',
    solution:
      'Built a component library on a 4px baseline grid using monospaced numerics and semantic color for status-only feedback.',
    technicalDetails: [
      'Component architecture: compound component pattern for flexible widgets.',
      'Performance: memoized heavy chart components to avoid re-renders.',
      'Theming: CSS variables for instant theme switching (dark-only in prod).',
    ],
    outcome:
      'A keyboard-navigable dashboard template that handles 50+ real-time data streams without UI lag.',
  },
  {
    projectId: 'maze-visuals',
    client: 'Creative Coding Experiment',
    timeline: 'Jan 2026',
    role: 'Creative Coder',
    challenge:
      'Needed technical, alive background visuals without distracting from on-screen content. Stock loops felt generic and 3D was overkill.',
    solution:
      'Wrote a generative script using the recursive backtracker algorithm, visualizing the process of maze generation rather than just the result.',
    technicalDetails: [
      'Algorithm: stack-based recursive backtracker in TypeScript.',
      'Rendering: HTML5 Canvas for pixel-perfect line drawing.',
      'Output: FFmpeg capture for seamless 4K loops.',
    ],
    outcome:
      'Created a library of seamless loops for social and web content without using AI image generation tools.',
  },
  {
    projectId: 'kimi-protocol',
    client: 'Open Source / Cryptography Research',
    timeline: 'Late 2025 - Present',
    role: 'Protocol Architect',
    challenge:
      'TLS 1.3 carries legacy baggage that makes it heavy for embedded systems. With NIST PQ standards finalized, there was a need for a born-post-quantum secure channel.',
    solution:
      'Architected Kimi v7/v8 as a deterministic, misuse-resistant AKE using canonical CBOR and a pure PQ suite with misuse-resistant encryption.',
    technicalDetails: [
      'Cryptography: ML-KEM-768, Falcon-512, and KangarooTwelve for hashing.',
      'Architecture: strict no_std compatibility for bare-metal IoT.',
      'Auditability: deterministic test vectors for every handshake state.',
    ],
    outcome:
      'A compact, formally auditable secure channel protocol used as a reference for deterministic PQ test vectors.',
  },
  {
    projectId: 'llm-orchestrator',
    client: 'Internal R&D / Open Source',
    timeline: 'Late 2025',
    role: 'Backend Architect',
    challenge:
      'Single-provider reliance created lock-in and high costs. Developers needed to route easy queries to cheaper models and complex tasks to reasoning models dynamically.',
    solution:
      'Architected a unified API gateway using a registry pattern. Added an ensemble agent to query multiple models and a ranker to score responses.',
    technicalDetails: [
      'Core: FastAPI with Pydantic v2 for strict schema validation.',
      'Resilience: circuit breakers and graceful degradation on provider outages.',
      'Intelligence: selector agent that analyzes prompt complexity for routing.',
    ],
    outcome:
      'A production-ready orchestration layer that reduces inference costs while increasing reliability through multi-provider fallback.',
  },
  {
    projectId: 'portfolio-simulator',
    client: 'FinTech / Investment Intelligence',
    timeline: 'Jan 2026',
    role: 'Frontend Lead',
    challenge:
      'Investors needed to stress-test AI infrastructure portfolios against geopolitical scenarios. Static spreadsheets failed to visualize real-time impacts.',
    solution:
      'Built a client-side simulation engine using Next.js and Zustand with scenario modeling and a custom alert engine for concentration risks.',
    technicalDetails: [
      'State management: Zustand with localStorage persistence.',
      'Visualization: Recharts for real-time allocation updates and risk heatmaps.',
      'Sharing: Base64 URL encoding for stateless scenario sharing.',
    ],
    outcome:
      'A responsive dashboard that models complex financial outcomes without server-side latency.',
  },
];
