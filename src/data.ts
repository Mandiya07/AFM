import { Product, Testimonial, FAQItem } from './types';
import casketHero from './assets/images/casket_hero_1780108055321.png';
import coffinOak from './assets/images/coffin_oak_1780108071438.png';
import casketDome from './assets/images/casket_dome_1780108087868.png';
import mouldingWood from './assets/images/moulding_wood_1780108104774.png';
import casketBespoke from './assets/images/casket_bespoke_1780108126500.png';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'The Heritage Sovereign Casket',
    category: 'casket',
    description: 'A masterfully crafted solid mahogany casket with intricate gold-leaf detailing and premium velvet interior.',
    longDescription: 'The Heritage Sovereign represents the pinnacle of AFM craftsmanship. Carved from ethically sourced solid mahogany, this casket features deep, rich wood tones complemented by subtle gold-leaf trim. The interior is hand-upholstered in premium ivory velvet, offering an unparalleled dignified resting place.',
    image: casketHero,
    material: 'Solid Mahogany',
    finish: 'High-Gloss Hand-Rubbed Polish',
    features: ['Solid brass swing bar handles', 'Adjustable bed system', 'Memory safe drawer', 'Custom engraving available'],
    dimensions: '82" L x 28" W x 23" H'
  },
  {
    id: 'p2',
    name: 'The Century Oak Coffin',
    category: 'coffin',
    description: 'Traditional elegance realized in solid oak with pure brass fittings and a tailored linen interior.',
    image: coffinOak,
    material: 'Solid Oak',
    finish: 'Satin Matte',
    features: ['Traditional shape', 'Pure brass handles', 'Linen interior', 'Eco-friendly varnish']
  },
  {
    id: 'p3',
    name: 'Classic Dome Casket',
    category: 'casket',
    description: 'A timeless dome design crafted from cherry wood veneer over a solid hardwood core.',
    image: casketDome,
    material: 'Cherry Veneer / Hardwood Core',
    finish: 'Cherry Satin',
    features: ['Dome lid', 'Silver-tone hardware', 'Crepe interior']
  },
  {
    id: 'p4',
    name: 'Regal Crown Moulding',
    category: 'moulding',
    description: 'Intricately carved architectural trim used for finishing premium caskets and custom interiors.',
    image: mouldingWood,
    material: 'Pine / Saligna',
    finish: 'Unfinished / Raw'
  },
  {
    id: 'p5',
    name: 'Bespoke Protea Series',
    category: 'bespoke',
    description: 'Custom-designed caskets featuring hand-carved South African flora motifs.',
    image: casketBespoke,
    material: 'Kiaat / African Teak',
    finish: 'Natural Oil'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'David Nhlapo',
    role: 'Director',
    company: 'Nhlapo & Sons Funeral Services',
    quote: 'AFM has been our most reliable partner for over a decade. Their commitment to quality and understanding of the tight timelines in our industry is unmatched. The craftsmanship of their caskets brings immense comfort to the families we serve.'
  },
  {
    id: 't2',
    name: 'Sarah van der Merwe',
    role: 'Procurement Manager',
    company: 'Restful Estates Distributors',
    quote: 'The industrial capacity of AFM allows us to fulfill our wholesale needs seamlessly without ever compromising on the dignity or finish of the products. Their bespoke options are truly works of art.'
  },
  {
    id: 't3',
    name: 'Khanya Mbeki',
    role: 'Funeral Director',
    company: 'Mbeki Memorials',
    quote: 'From their standard standard coffins to their highly personalized bespoke caskets, AFM consistently delivers excellence. Their team is compassionate, professional, and treats every order with the respect it deserves.'
  }
];

export const faqs: FAQItem[] = [
  {
    question: 'Do you sell directly to the public?',
    answer: 'While our primary operations involve supplying B2B to funeral homes, parlours, and distributors across South Africa, we do offer bespoke customisations directly to families working through their chosen funeral director.',
    category: 'Ordering'
  },
  {
    question: 'How long does a bespoke casket take to manufacture?',
    answer: 'Standard bespoke modifications (finishes, interior colors) typical take 48-72 hours. Highly intricate hand-carved details or fully custom designs require a consultation to establish a precise timeline, usually ranging from 1 to 2 weeks.',
    category: 'Customization'
  },
  {
    question: 'What is your wholesale manufacturing capacity?',
    answer: 'Operating from our industrial facility in Johannesburg, we can comfortably manufacture and process hundreds of standard coffin units per week to meet high-volume distribution demands safely and efficiently.',
    category: 'Wholesale'
  },
  {
    question: 'Do you offer delivery services outside of Gauteng?',
    answer: 'Yes, we have a robust logistics network and offer secure distribution to all provinces in South Africa. Please contact our wholesale team for cross-border shipping capabilities.',
    category: 'Delivery'
  }
];
