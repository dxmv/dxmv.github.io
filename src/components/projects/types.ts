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
  description: string;
  longDescription: string;
  completionDate: string;
  stats: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
} 