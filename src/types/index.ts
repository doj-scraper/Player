export type ProjectCategory = 'webtool' | 'professional' | 'personal' | 'graphics' | 'icons' | 'backend';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  status: 'live' | 'archived' | 'in-progress';
}

export interface Article {
  id: string;
  title: string;
  date: string;
  summary: string;
  slug: string;
  tags: string[];
}
