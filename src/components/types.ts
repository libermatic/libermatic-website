export interface Service {
  icon: string;
  title: string;
  bullets: string[];
}

export interface ProjectStat {
  lighthouse: number;
  loadTime: string;
  bundleSize: string;
}

export interface Project {
  name: string;
  category: string;
  stats: ProjectStat;
  desc: string;
}
