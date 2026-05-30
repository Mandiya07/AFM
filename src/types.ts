export interface Product {
  id: string;
  name: string;
  category: 'casket' | 'coffin' | 'moulding' | 'trim' | 'bespoke';
  description: string;
  longDescription?: string;
  image: string;
  material: string;
  finish: string;
  features?: string[];
  dimensions?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
