export interface OverviewData {
  projectName: string;
  tagline: string;
  background: string;
  role: string;
  duration: string;
  teamSize: string;
  projectUrl: string;
  githubUrl: string;
}

export interface TechCategory {
  id: string;
  name: string;
  tags: string[];
}

export interface ChallengeItem {
  id: string;
  challenge: string;
  solution: string;
  learning: string;
}

export interface MetricItem {
  id: string;
  metric: string;
  value: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  text: string;
}

export interface AchievementsData {
  metrics: MetricItem[];
  achievements: AchievementItem[];
  imageUrls: string[];
}

export interface PortfolioReadmeData {
  overview: OverviewData;
  techStack: TechCategory[];
  challenges: ChallengeItem[];
  achievements: AchievementsData;
}
