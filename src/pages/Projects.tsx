import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/molecules/ProjectCard';
import type { ProjectCategory } from '../types';

const filterLabels: Record<ProjectCategory, string> = {
  webtool: 'Web Tools',
  professional: 'Professional',
  personal: 'Personal',
  graphics: 'Graphics',
  icons: 'Icons',
  backend: 'Backend',
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');

  const categories = useMemo(() => {
    const unique = new Set<ProjectCategory>();
    projects.forEach((project) => unique.add(project.category));
    return Array.from(unique);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-8 md:ml-64">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 border-b border-border pb-6">
          <h1 className="text-4xl font-bold text-primary tracking-tight">/work_index</h1>
          <p className="text-secondary font-mono text-sm mt-2">
            Filtered by signal. No filler. No slop.
          </p>
        </header>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={
              activeFilter === 'all'
                ? 'bg-terminal-green text-background px-4 py-2 text-xs font-mono uppercase tracking-widest'
                : 'border border-border text-secondary px-4 py-2 text-xs font-mono uppercase tracking-widest hover:border-terminal-green hover:text-primary'
            }
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? 'bg-terminal-green text-background px-4 py-2 text-xs font-mono uppercase tracking-widest'
                  : 'border border-border text-secondary px-4 py-2 text-xs font-mono uppercase tracking-widest hover:border-terminal-green hover:text-primary'
              }
            >
              {filterLabels[category] ?? category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
