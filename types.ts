
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  detailedDescription?: string;
  features?: string[];
  role?: string;
  status?: string;
  technicalDetails?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface SkillItem {
  name: string;
  desc?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  icon: string;
  items: SkillItem[];
}

export enum Section {
  Home = 'home',
  About = 'about',
  Projects = 'projects',
  Education = 'education',
  Skills = 'skills',
  Contact = 'contact'
}
