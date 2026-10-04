export type TabType = 'about' | 'resume' | 'portfolio' | 'terminal' | 'architecture' | 'chatops' | 'blog';

export type ThemeType = 'dark' | 'cyber' | 'light';

export interface ProjectMetric {
  label: string;
  val: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  copyright: string;
  copyrightClass: 'nda' | 'author' | 'commercial' | 'opensource';
  copyrightNotice: string;
  client: string;
  role: string;
  timeline: string;
  stack: string[];
  metrics: ProjectMetric[];
  overview: string;
  challenges: string[];
  solutions: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  bannerTag?: string;
  macTitle?: string;
}

export interface TimelineRole {
  role: string;
  company: string;
  locationOrEcosystem: string;
  period: string;
  pillColor: 'mint' | 'yellow' | 'blue' | 'lavender' | 'coral';
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  headerColor: string;
  skills: { name: string; isHighlight?: boolean }[];
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  excerpt: string;
  content: string;
}

export interface ChatAnswer {
  prompt: string;
  answer: string;
  citations: { name: string; type: string; pages: string }[];
}
