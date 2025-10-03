export interface Profile {
  id: number;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  email: string;
  phone: string;
}

export interface Skill {
  id: number;
  name: string;
  iconUrl: string;
  category: string;
  proficiencyLevel: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  gitHubUrl: string;
  imageUrl: string;
  displayOrder: number;
}

export interface ContactLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
}