
import { SiteContent } from './types';

export const CONTENT: SiteContent = {
  name: "[BUSINESS NAME]",
  tagline: "Building Your Dreams with Excellence",
  subtagline: "From custom new builds to luxury home remodeling, we bring expert craftsmanship and project transparency to every job.",
  aboutTitle: "Our Commitment to Quality",
  aboutContent: "With years of industry experience, we specialize in delivering high-quality construction and renovation services. Our mission is to transform your vision into reality through transparent communication and superior workmanship.",
  aboutImage: "https://images.unsplash.com/photo-1541913057-251c294a069d?auto=format&fit=crop&w=1200&q=80",
  heroImage: "https://images.unsplash.com/photo-1541888941259-79974df19602?auto=format&fit=crop&w=2000&q=80",
  services: [
    { id: '1', title: 'New Home Construction', description: 'From foundation to finish, we build custom homes tailored to your lifestyle and needs.', icon: 'Home' },
    { id: '2', title: 'Home Remodeling', description: 'Full-service renovations including kitchens, bathrooms, and complete home transformations.', icon: 'Hammer' },
    { id: '3', title: 'Commercial Buildouts', description: 'Professional commercial space construction designed for productivity and brand identity.', icon: 'Building2' },
    { id: '4', title: 'Custom Additions', description: 'Seamlessly integrate new rooms, decks, or extensions into your existing structure.', icon: 'Ruler' }
  ],
  reviews: [
    { id: 'r1', author: "[CLIENT NAME]", avatar: "https://i.pravatar.cc/150?u=1", rating: 5, date: "2 weeks ago", content: "They delivered our dream kitchen ahead of schedule and under budget. Highly recommend!" },
    { id: 'r2', author: "[CLIENT NAME]", avatar: "https://i.pravatar.cc/150?u=2", rating: 5, date: "1 month ago", content: "Professional, reliable, and the quality of work is outstanding. Best contractor we've hired." }
  ],
  comparisons: [
    {
      id: 'c1',
      title: 'Kitchen Renovation',
      description: 'A complete modernization of an outdated culinary space.',
      before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1556912177-f547c12dd0ee?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'c2',
      title: 'Structural Extension',
      description: 'Expanding living space with a modern architectural wing.',
      before: 'https://images.unsplash.com/photo-1541888941259-79974df19602?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    }
  ],
  gallery: [
    { id: 'g1', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', alt: 'Modern luxury kitchen renovation', category: 'Kitchen' },
    { id: 'g2', url: 'https://images.unsplash.com/photo-1620626011761-9963d7521476?auto=format&fit=crop&w=800&q=80', alt: 'Spacious bathroom remodel', category: 'Bathroom' },
    { id: 'g3', url: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&w=800&q=80', alt: 'Custom home framing', category: 'Construction' },
    { id: 'g4', url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80', alt: 'Modern open-plan living', category: 'Interior' },
    { id: 'g5', url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80', alt: 'Exterior facade finish', category: 'Exterior' },
    { id: 'g6', url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80', alt: 'Master suite transformation', category: 'Bedroom' }
  ]
};
