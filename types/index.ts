export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  searchVolume?: string;
  results?: string;
  keyDeliverables?: string[];
  strategicApproach?: string[];
  achievements?: string[];
  impactMetrics?: string;
  overview?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Tool {
  name: string;
  description: string;
}




