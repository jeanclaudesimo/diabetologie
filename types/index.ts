// Gemeinsame Types für die gesamte Anwendung

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  details?: string[];
  category?: 'diabetes-types' | 'complications' | 'therapies' | 'education';
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  description: string;
  qualifications: string[];
  experience: string;
  image?: string;
  specializations?: string[];
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  benefits: string[];
  process?: string[];
  image?: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  treatment?: string;
  verified?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'treatment' | 'practice' | 'costs';
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'medical' | 'practice' | 'education';
  image?: string;
  author?: string;
}

export interface PracticeInfo {
  name: string;
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  contact: {
    phone: string;
    emergency?: string;
    email: string;
    fax?: string;
  };
  hours: {
    [key: string]: string;
  };
  certifications: string[];
  established: number;
}

export interface Stats {
  label: string;
  value: string;
  description?: string;
  icon?: string;
}

// Props für Section-Komponenten
export interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  image?: string;
  highlights?: string[];
}

export interface ServicesProps {
  title: string;
  subtitle?: string;
  services: Service[];
  layout?: 'grid' | 'list';
}

export interface TeamProps {
  title: string;
  subtitle?: string;
  members: TeamMember[];
}

export interface TreatmentsProps {
  title: string;
  subtitle?: string;
  treatments: Treatment[];
}

export interface TestimonialsProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export interface FAQProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
}

export interface ContactProps {
  title: string;
  subtitle?: string;
  practiceInfo: PracticeInfo;
  showMap?: boolean;
}

export interface AboutProps {
  title: string;
  subtitle?: string;
  description: string;
  mission?: string;
  values?: string[];
  equipment?: string[];
  image?: string;
}

export interface StatsProps {
  title?: string;
  subtitle?: string;
  stats: Stats[];
}

export interface NewsProps {
  title: string;
  subtitle?: string;
  articles: NewsArticle[];
}
