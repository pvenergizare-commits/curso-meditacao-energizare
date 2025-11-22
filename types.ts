import { ReactNode } from "react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TimelineItem {
  title: string;
  description: string;
  duration?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  image: string;
}
