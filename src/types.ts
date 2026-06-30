export interface Skill {
  name: string;
  category: 'Business Analysis' | 'Data Analytics' | 'Product Analytics' | 'Tools & Tech';
  level: number; // 0-100 percentage
  description: string;
  iconName: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: 'internship' | 'full-time' | 'contract';
  responsibilities: string[];
  metrics: { label: string; value: string; desc: string }[];
  tools: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Business Analysis' | 'Data Analytics' | 'Product Analytics' | 'AI & Tech';
  problem: string;
  approach: string[];
  impact: string[];
  metrics: { label: string; value: string }[];
  tools: string[];
  githubUrl: string;
  demoUrl?: string;
  keyInsights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  badgeColor: string;
}

export interface Education {
  degree: string;
  college: string;
  duration: string;
  location: string;
  gpa: string;
  courses: string[];
}
