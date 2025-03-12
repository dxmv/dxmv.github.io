export interface InDevelopmentProject {
  title: string;
  description: string;
  startDate: string;
  stats: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
}

export interface FinishedProject {
  title: string;
  tagline: string;
  longDescription: string;
  completionDate: string;
  stats: {
    label: string;
    value: string;
  }[];
  imageUrl: string | null;
  socialLinks: {
    platform: string;
    url: string;
  }[];
} 