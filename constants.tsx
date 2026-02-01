import { SiteContent } from './types';

export const CONTENT: SiteContent = {
  name: "[BUSINESS NAME]",
  tagline: "Building Excellence from the Ground Up",
  subtagline: "Elite residential framing, luxury home remodeling, and comprehensive general contracting for discerning homeowners who value integrity and precision.",
  aboutTitle: "A Legacy of Precision & Partnership",
  aboutContent: "At [BUSINESS NAME], we believe that a house is more than a structure—it's a sanctuary. As owner-operators, we are present on every job site, ensuring that the integrity of your original vision is maintained from the first architectural consultation to the final finishing touch. Our commitment to transparent communication and master-level craftsmanship has made us a trusted partner for premium builds across the region.",
  aboutImage: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&w=1200&q=80",
  heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  reviewsBg: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=2000&q=80",
  services: [
    { 
      id: '1', 
      title: 'Structural Framing', 
      description: 'The bones of your home require absolute precision. We specialize in complex residential framing and heavy timber roof systems.', 
      icon: 'Home',
      image: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: '2', 
      title: 'Luxury Remodeling', 
      description: 'Transforming existing spaces into modern masterpieces. Our interior experts handle high-end kitchens, baths, and open-plan living.', 
      icon: 'Hammer',
      image: 'https://images.unsplash.com/photo-1556911227-4c1779180f8d?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: '3', 
      title: 'Additions & Decks', 
      description: 'Expand your footprint with seamless room additions or custom cedar decks designed for the ultimate outdoor lifestyle.', 
      icon: 'Ruler',
      image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: '4', 
      title: 'Project Management', 
      description: 'Full-service general contracting. We navigate permits, site prep, and subcontractor coordination so you don\'t have to.', 
      icon: 'Building2',
      image: 'https://images.unsplash.com/photo-1541604193435-225878996ac3?auto=format&fit=crop&w=800&q=80'
    }
  ],
  reviews: [
    { id: 'r1', author: "Sarah Henderson", avatar: "https://i.pravatar.cc/150?u=1", rating: 5, date: "October 2024", content: "[BUSINESS NAME] turned our 1970s kitchen into a modern chef's dream. Their attention to the framing details was unlike anything I've seen in previous renovations." },
    { id: 'r2', author: "Jameson Miller", avatar: "https://i.pravatar.cc/150?u=2", rating: 5, date: "September 2024", content: "Reliable, clean, and master-class woodworkers. They built a custom multi-level deck for us that has become our favorite part of the entire property." }
  ],
  comparisons: [],
  gallery: [
    { id: 'g1', url: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&w=800&q=80', alt: 'Precision Structural Timber Framing', category: 'Structural' },
    { id: 'g2', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', alt: 'Modern Marble Bathroom Renovation', category: 'Remodeling' },
    { id: 'g3', url: 'https://images.unsplash.com/photo-1556911227-4c1779180f8d?auto=format&fit=crop&w=800&q=80', alt: 'Custom Kitchen Cabinetry & Island', category: 'Remodeling' },
    { id: 'g4', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', alt: 'Architectural Home Addition Exterior', category: 'Additions' },
    { id: 'g5', url: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80', alt: 'Premium Cedar Entertainment Deck', category: 'Decks' },
    { id: 'g6', url: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800&q=80', alt: 'Architectural Planning & On-Site Consultation', category: 'General' }
  ]
};