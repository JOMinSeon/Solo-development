// Hero Section
export interface Hero {
  badge: string;
  title: string;
  description: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
}

// Differentiator Card
export interface Differentiator {
  id: string;
  icon: 'Zap' | 'Users' | 'Code' | 'Lightbulb' | 'TrendingUp';
  title: string;
  description: string;
  keyPoints: string[];
}

// Proof Stat
export interface ProofStat {
  value: string;
  label: string;
  context?: string;
}

// Service Offering
export interface Service {
  id: string;
  icon: 'Globe' | 'Smartphone' | 'Link' | 'Lightbulb' | 'Layers';
  title: string;
  subtitle: string;
  description: string;
  scope: string[];
  notIncluded?: string[];
  estimatedDuration: string;
  startingPrice: string;
  examples?: string[];
}

// Process Step
export interface ProcessStep {
  step: number;
  phase: string;
  description: string;
  duration: string;
  deliverables: string[];
  communication: string;
}

// Pricing Model
export interface PricingModel {
  type: 'project-based' | 'hourly';
  description: string;
  pros: string[];
  cons: string[];
}

export interface PriceExample {
  projectType: string;
  scope: string;
  estimatedCost: string;
  duration: string;
  example: string;
}

export interface AdditionalService {
  service: string;
  price: string;
  description: string;
}

// Success Story
export interface SuccessStory {
  id: string;
  projectName: string;
  clientName: string;
  clientType: string;
  description: string;
  results: string[];
  tech: string[];
  period: string;
  link?: string;
  imageUrl?: string;
}

// FAQ Item
export interface FAQItem {
  id: string;
  category: 'timeline' | 'cost' | 'communication' | 'technical' | 'security';
  question: string;
  answer: string;
}

// CTA Channel
export interface CTAChannel {
  id: string;
  icon: 'Calendar' | 'Mail' | 'MessageSquare' | 'Phone';
  title: string;
  description: string;
  actionText: string;
  actionHref: string;
}