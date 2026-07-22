export type ServiceCategory = 
  | 'government'
  | 'business'
  | 'printing'
  | 'design'
  | 'ict';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  categoryName: string;
  shortDesc: string;
  fullDesc: string;
  turnaroundTime: string;
  priceKes: number;
  priceNote?: string;
  requiredDocuments: string[];
  processSteps: {
    stepNumber: number;
    title: string;
    description: string;
  }[];
  popular?: boolean;
  officialPortal?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  location: string;
  serviceUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface OrderStatus {
  trackingId: string;
  serviceName: string;
  clientName: string;
  status: 'RECEIVED' | 'PROCESSING' | 'PENDING_DOCUMENT' | 'COMPLETED' | 'READY_FOR_PICKUP';
  progressPercent: number;
  estimatedCompletion: string;
  lastUpdated: string;
  notes: string;
}
