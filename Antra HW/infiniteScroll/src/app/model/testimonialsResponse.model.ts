import { Testimonial } from "./testimonial.model";

export interface TestimonialsResponse {
    hasNext: boolean;
    testimonials: Testimonial[];
  }