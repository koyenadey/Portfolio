export type skillsType = {
  title: string;
  imageSrc: string;
};

export type historyType = {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
};

export type projectType = {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
};

export type projectCard = {
  project: projectType;
};
