import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types';

const statusStyles: Record<Project['status'], string> = {
  live: 'text-terminal-green',
  archived: 'text-terminal-amber',
  'in-progress': 'text-terminal-amber',
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="group border border-border bg-surface p-6 hover:border-terminal-green transition-colors flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-mono text-secondary uppercase tracking-widest">{project.category}</p>
          <h3 className="text-xl font-bold text-primary mt-2 group-hover:text-terminal-green transition-colors">
            {project.title}
          </h3>
        </div>
        <span className={`text-xs font-mono ${statusStyles[project.status]}`}>
          {project.status.replace('-', ' ')}
        </span>
      </div>

      <p className="text-sm text-secondary leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-xs font-mono text-secondary">
        {project.techStack.map((tech) => (
          <span key={tech} className="border border-border px-2 py-1 bg-background">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs font-mono text-secondary pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-terminal-green transition-colors"
          >
            Live <ExternalLink size={14} />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-terminal-green transition-colors"
          >
            Repo <Github size={14} />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
