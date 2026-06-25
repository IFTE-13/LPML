import type { StaticImageData } from "next/image";

export interface LeadershipMember {
  name: string;
  role: string;
  photo: StaticImageData;
  bio: string;
  linkedin?: string;
  email?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: StaticImageData;
  specialty: string;
  experience?: string;
  email?: string;
  linkedin?: string;
}

export interface Department {
  title: string;
  description: string;
  members: TeamMember[];
}