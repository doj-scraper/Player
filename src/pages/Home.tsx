import React from 'react';
import { MapPin, Cpu, Globe, ArrowRight, Download, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-8 md:ml-64 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-16 border-b border-border pb-12">
          <div className="relative group shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-surface-highlight overflow-hidden border border-border grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500">
              <img
                src="/assets/profile.webp"
                alt="Christopher Rodriguez"
                className="w-full h-full object-cover mix-blend-screen"
              />
            </div>
            <div className="absolute inset-0 bg-terminal-green/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300 pointer-events-none" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">
                Christopher Rodriguez
              </h1>
            </div>

            <h2 className="text-xl text-terminal-green font-mono mb-4">&lt;Web_Architect /&gt;</h2>

            <div className="flex flex-wrap gap-4 text-sm font-mono text-secondary">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> Portland, OR
              </span>
              <span className="flex items-center gap-1">
                <Cpu size={14} /> AI Integration
              </span>
              <span className="flex items-center gap-1">
                <Globe size={14} /> CRODA Consulting
              </span>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="flex items-center justify-between bg-surface border border-border px-4 py-2 mb-6 rounded-t-sm">
            <span className="font-mono text-xs text-secondary">README.md</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-border" />
              <div className="w-2 h-2 rounded-full bg-border" />
            </div>
          </div>

          <article className="space-y-6 text-primary/80 leading-relaxed font-sans">
            <p>
              I run <strong className="text-primary">CRODA Consulting</strong>, a digital agency serving the
              Portland area. My work sits at the intersection of brutalist web design, cybersecurity, and
              artificial intelligence. I don't build "slop"—I build high-performance tools for businesses
              that need clear signals in a noisy internet.
            </p>

            <h3 className="text-xl font-bold text-primary flex items-center gap-2 mt-8">
              <Terminal size={20} className="text-terminal-green" />
              Current Focus
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mt-4">
              <li className="bg-surface border border-border p-4 hover:border-terminal-green transition-colors">
                <strong className="block text-primary text-sm font-mono mb-1">Web Development</strong>
                <span className="text-sm text-secondary">
                  Building react-based dashboards and landing pages with zero layout shift.
                </span>
              </li>
              <li className="bg-surface border border-border p-4 hover:border-terminal-green transition-colors">
                <strong className="block text-primary text-sm font-mono mb-1">AI &amp; Security</strong>
                <span className="text-sm text-secondary">
                  Exploring LLM integration (Grok, Gemini) and post-quantum security visualizations.
                </span>
              </li>
              <li className="bg-surface border border-border p-4 hover:border-terminal-green transition-colors">
                <strong className="block text-primary text-sm font-mono mb-1">Audio Engineering</strong>
                <span className="text-sm text-secondary">
                  Developing browser-based DAWs and producing beats.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-primary mt-8">Select Clients &amp; Experience</h3>
            <p>
              My background spans technical writing, freelance content strategy, and full-stack development.
              I have consulted for local SMBs to improve their digital footprint and security posture.
            </p>
          </article>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-bold hover:bg-terminal-green transition-colors"
            >
              View Work Index <ArrowRight size={18} />
            </Link>
            <a
              href="/assets/resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-primary hover:border-primary transition-colors"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
