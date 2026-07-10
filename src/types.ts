export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  intake: number;
  accredited: boolean;
  vision: string;
  labs: string[];
  careers: string[];
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
  type: 'achievement' | 'expansion' | 'foundation';
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Infrastructure' | 'Campus' | 'Milestone' | 'Academic';
  title: string;
  description: string;
  size: 'large' | 'small' | 'wide' | 'tall';
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  timestamp: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admission' | 'Academic' | 'Hostel' | 'Scholarship';
}
