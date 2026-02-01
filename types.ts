
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

export interface ProjectComparison {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
}

export interface SiteContent {
  name: string;
  tagline: string;
  subtagline: string;
  aboutTitle: string;
  aboutContent: string;
  aboutImage: string;
  services: Service[];
  reviews: Review[];
  comparisons: ProjectComparison[];
  gallery: GalleryImage[];
  heroImage: string;
}
