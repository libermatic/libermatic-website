export interface Service {
  icon: string;
  title: string;
  bullets: string[];
}

export interface ProjectStat {
  label: string;
  value: string | number;
}

export interface Project {
  name: string;
  category: string;
  stats: ProjectStat[];
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}
