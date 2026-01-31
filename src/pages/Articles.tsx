import React from 'react';
import { FileText, ArrowUpRight, Hash, Clock } from 'lucide-react';
import { articles } from '../data/articles';

const Articles: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-8 md:ml-64 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-border pb-6 flex items-end justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary tracking-tight mb-2">/system_log</h1>
            <p className="text-secondary font-mono text-sm">
              Thoughts on Engineering, Design, and Security.
            </p>
          </div>
          <div className="hidden sm:block text-xs font-mono text-terminal-green animate-pulse">
            ● STREAM_ACTIVE
          </div>
        </header>

        <div className="flex flex-col border-t border-border">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group relative flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 border-b border-border hover:bg-surface/50 transition-colors px-2 -mx-2 sm:px-4 sm:-mx-4"
            >
              <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2 sm:w-48 shrink-0">
                <span className="font-mono text-sm text-secondary group-hover:text-terminal-green transition-colors">
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border border-border text-secondary bg-surface group-hover:border-terminal-green/50 transition-colors">
                  <Hash size={10} />
                  {article.category}
                </span>
              </div>

              <div className="flex-grow">
                <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-terminal-green transition-colors flex items-center gap-2">
                  {article.title}
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                  />
                </h2>
                <p className="text-secondary text-sm leading-relaxed max-w-2xl">{article.summary}</p>

                <div className="mt-3 flex items-center gap-2 text-xs font-mono text-secondary/50">
                  <Clock size={12} />
                  {article.readTime}
                </div>
              </div>

              <div className="hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-10 text-terminal-green transition-opacity duration-300">
                <FileText size={24} strokeWidth={1.5} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-secondary">// END_OF_LOG</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
