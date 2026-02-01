
import React, { useState, useEffect } from 'react';
import { 
  Building2, Home, Ruler, Hammer, Star, 
  Menu, X, MapPin, Phone, Mail, ArrowRight, 
  ShieldCheck, HardHat, BarChart, CheckCircle,
  Construction, Instagram, Facebook, Twitter,
  Send, CheckCircle2
} from 'lucide-react';
import { CONTENT } from './constants';
import { ReviewForm } from './ReviewForm';

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Building2': return <Building2 className="w-10 h-10" />;
    case 'Home': return <Home className="w-10 h-10" />;
    case 'Ruler': return <Ruler className="w-10 h-10" />;
    case 'Hammer': return <Hammer className="w-10 h-10" />;
    default: return <HardHat className="w-10 h-10" />;
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Services', 'About', 'Gallery', 'Reviews', 'Contact'];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-xl font-bold uppercase tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
          {CONTENT.name}
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95">
            Get Started
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t py-10 flex flex-col items-center space-y-6 animate-in slide-in-from-top shadow-2xl">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-900 font-bold uppercase tracking-widest text-sm" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-widest active:scale-95" onClick={() => setMobileMenuOpen(false)}>
            Free Estimate
          </a>
        </div>
      )}
    </nav>
  );
};

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setFormSubmitted(true);
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-white text-slate-900 scroll-smooth">
      <Navbar />
      
      {/* Hero */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Modern luxury residential construction site */}
        <img 
          src={CONTENT.heroImage} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="High-impact construction background"
        />
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-7xl font-extrabold uppercase mb-6 leading-tight tracking-tight animate-fade-in drop-shadow-2xl">
            {CONTENT.tagline}
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in [animation-delay:200ms] drop-shadow-lg">
            {CONTENT.subtagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <a href="#contact" className="bg-blue-600 text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl active:scale-95">
              Consult Now
            </a>
            <a href="#gallery" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded font-bold uppercase tracking-widest text-sm transition-all active:scale-95">
              View Work
            </a>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTENT.services.map(s => (
              <div key={s.id} className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto text-blue-500 mb-4">
                <HardHat className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase">Expert Craftsmanship</h3>
              <p className="text-slate-400 text-sm">We take pride in every detail, ensuring the highest standards of quality in every build.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto text-blue-500 mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase">Licensed & Insured</h3>
              <p className="text-slate-400 text-sm">Rest easy knowing your project is in safe, professional hands with full compliance.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto text-blue-500 mb-4">
                <BarChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase">Project Transparency</h3>
              <p className="text-slate-400 text-sm">Clear timelines, budget management, and frequent updates from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Construction progress in a custom home build */}
              <img 
                src={CONTENT.aboutImage} 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover" 
                alt="Construction progress in a custom home build" 
              />
            </div>
            <div>
              <h2 className="text-4xl font-black uppercase mb-6 leading-tight">{CONTENT.aboutTitle}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {CONTENT.aboutContent}
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Experienced Project Managers",
                  "Quality Material Sourcing",
                  "Dedicated Safety Protocols",
                  "Custom Design Consultations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wide">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-sm group hover:underline">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-24 bg-slate-50 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Photo Gallery</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTENT.gallery.map(img => (
              <div key={img.id} className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                {/* Specific project image thumbnail */}
                <img 
                  src={img.url} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={img.alt} 
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/40 px-6 py-2 bg-black/20 backdrop-blur-sm">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl font-black uppercase mb-12 leading-[0.9] tracking-tighter text-slate-900">Client Reviews</h2>
              <div className="space-y-8">
                {CONTENT.reviews.map(r => (
                  <div key={r.id} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 uppercase">
                        {r.author.charAt(1)}
                      </div>
                      <div>
                        <h4 className="font-bold uppercase text-sm tracking-widest">{r.author}</h4>
                        <div className="flex space-x-1 mt-1">
                          {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < r.rating ? 'fill-blue-600 text-blue-600' : 'text-slate-300'}`} />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed italic">"{r.content}"</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-32">
              <ReviewForm businessName={CONTENT.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
            <div className="p-12 lg:p-20 bg-blue-600 text-white">
              <h2 className="text-4xl lg:text-5xl font-black uppercase mb-8 leading-tight">Get in Touch</h2>
              <p className="text-blue-100 text-lg mb-12">Contact us today to discuss your project requirements and receive a detailed estimate.</p>
              <div className="space-y-10">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center"><MapPin className="w-6 h-6" /></div>
                  <span className="font-bold text-sm uppercase tracking-widest">[OFFICE ADDRESS]</span>
                </a>
                <a href="tel:5555555555" className="flex items-center space-x-6 hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center"><Phone className="w-6 h-6" /></div>
                  <span className="font-bold text-sm uppercase tracking-widest">[PHONE NUMBER]</span>
                </a>
                <a href="mailto:hello@example.com" className="flex items-center space-x-6 hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center"><Mail className="w-6 h-6" /></div>
                  <span className="font-bold text-sm uppercase tracking-widest">hello@example.com</span>
                </a>
              </div>
            </div>
            <div className="p-12 lg:p-20 relative min-h-[500px] flex items-center">
              {formSubmitted ? (
                <div className="text-center w-full animate-fade-in">
                    <div className="flex justify-center mb-6">
                        <CheckCircle2 className="w-20 h-20 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-black uppercase mb-4">Message Sent</h3>
                    <p className="text-slate-500 mb-8">Thank you for reaching out. One of our project managers will contact you within 24 hours.</p>
                    <button 
                        onClick={() => setFormSubmitted(false)}
                        className="text-blue-600 font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                        Send another message
                    </button>
                </div>
              ) : (
                <form className="space-y-8 w-full" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Name</label>
                      <input id="name" required type="text" className="w-full border-b border-slate-200 py-3 focus:border-blue-600 outline-none text-sm transition-all bg-transparent" placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email</label>
                      <input id="email" required type="email" className="w-full border-b border-slate-200 py-3 focus:border-blue-600 outline-none text-sm transition-all bg-transparent" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Project Interest</label>
                    <select id="interest" className="w-full border-b border-slate-200 py-3 focus:border-blue-600 outline-none text-sm transition-all bg-transparent cursor-pointer">
                      <option>Home Construction</option>
                      <option>Remodeling</option>
                      <option>Commercial Buildout</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Message</label>
                    <textarea id="message" required rows={3} className="w-full border-b border-slate-200 py-3 focus:border-blue-600 outline-none text-sm transition-all bg-transparent" placeholder="How can we help?"></textarea>
                  </div>
                  <button type="submit" className="bg-blue-600 text-white w-full py-5 font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all rounded shadow-xl flex items-center justify-center space-x-2 active:scale-95">
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>{CONTENT.name} &copy; {new Date().getFullYear()} // All Rights Reserved</div>
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Safety</a>
          </div>
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes slideInFromTop {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-in {
          animation: slideInFromTop 0.3s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
