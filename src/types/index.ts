export type SkillCategory = 'all' | 'frontend' | 'backend' | 'cms' | 'tools';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cms' | 'tools';
  level: number; // 0 to 100
  experience: string;
  iconName: string;
  description: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  tools: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  category: 'Full-Stack' | 'WordPress' | 'Frontend' | 'Tools';
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  period: string;
  year: string;
  title: string;
  company: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  testimonial: string;
  projectDelivered: string;
}

export interface TechStackItem {
  name: string;
  category: string;
  iconName: string;
  description: string;
  color: string;
}
