import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  location: string;
  image: StaticImageData;
  thumbnail: StaticImageData;
  description: string;
  fullDescription: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  status: "Available" | "Sold" | "Coming Soon";
  completionDate: string;
  architect: string;
  features: string[];
  gallery: StaticImageData[];
}
