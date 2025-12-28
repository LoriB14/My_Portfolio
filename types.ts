
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  difficulty: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export enum Section {
  Home = 'home',
  Projects = 'projects',
  Skills = 'skills',
  Contact = 'contact'
}
