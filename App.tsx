import React, { useState, useEffect } from 'react';
import { 
  Building2, Home, Ruler, Hammer, Star, 
  Menu, X, MapPin, Phone, Mail, ArrowRight, 
  ShieldCheck, HardHat, BarChart, CheckCircle,
  Instagram, Facebook,
  Send, CheckCircle2, ChevronUp, Maximize2, Quote,
  Construction
} from 'lucide-react';
import { CONTENT } from './constants';
import { ReviewForm } from './ReviewForm';
import { GalleryImage } from './types';

const ServiceIcon = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'Building2': return <Building2 className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Ruler': return <Ruler className={className} />;
    case 'Hammer': return <Hammer className={className} />;
    default: return <HardHat className={className} />;
  }
};

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white py-3 md:py-4 shadow-lg border-b border-slate-100' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className={`flex items-center space-x-3 text-lg md:text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
        >
          <Construction className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
          <span className="uppercase">{CONTENT.name}</span>
        </a>
        
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {['Services', 'About', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] hover:text-blue-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Get a Quote
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-black/10 backdrop-blur-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 py-8 flex flex-col items-center space-y-6 animate-in shadow-2xl">
          {['Services', 'About', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-slate-900 font-bold uppercase tracking-widest text-base" 
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
          >
            Request Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 1000);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900 relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white p-2 z-[210] hover:bg-white/10 rounded-full transition-colors"><X className="w-8 h-8" /></button>
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img src={selectedImage.url} alt={selectedImage.alt} className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" />
            <div className="mt-8 text-center px-4 max-w-2xl">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] block mb-3">{selectedImage.category}</span>
              <h3 className="text-white text-2xl font-bold uppercase tracking-widest mb-2">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}

      {showBackToTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-[90] bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-slate-950 transition-all animate-fade-in border border-blue-500/20"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Hero Section */}
      <header id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <img src={CONTENT.heroImage} className="absolute inset-0 w-full h-full object-cover scale-105" alt="Custom Home Construction" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-slate-900/10 z-[1]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-sm text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-6 animate-fade-in shadow-2xl">
            Premier Residential Contractor
          </div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-6 leading-tight tracking-tighter animate-fade-in drop-shadow-2xl">
            {CONTENT.tagline}
          </h1>
          <p className="text-slate-100 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium animate-fade-in drop-shadow-lg opacity-95 px-4 sm:px-0">
            {CONTENT.subtagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-fade-in px-4 sm:px-0">
            <button onClick={() => scrollToId('contact')} className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white hover:text-blue-600 transition-all shadow-2xl shadow-blue-500/30">
              Start Your Build
            </button>
            <button onClick={() => scrollToId('gallery')} className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/40 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white/20 transition-all">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
          <div className="w-1 h-10 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
        </div>
      </header>

      <main>
        {/* Services Section */}
        <section id="services" className="py-24 px-4 md:px-6 bg-white border-b border-slate-50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
              <div className="max-w-2xl">
                <p className="text-blue-600 uppercase tracking-[0.4em] text-[11px] font-black mb-4">Our Expertise</p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Comprehensive Building Services</h2>
              </div>
              <p className="text-slate-500 max-w-xs font-medium uppercase tracking-widest text-[10px] leading-relaxed">
                From structural foundations to intricate architectural finishes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {CONTENT.services.map(s => (
                <article key={s.id} className="group flex flex-col h-full bg-white transition-all">
                  <div className="h-64 overflow-hidden relative rounded-2xl mb-8 shadow-sm">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <ServiceIcon name={s.icon} className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">{s.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Value Props / Stats */}
        <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
          <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=2000&q=80" className="absolute inset-0 w-full h-full object-cover opacity-10" alt="Worksite" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start text-center md:text-left">
              {[
                { icon: HardHat, title: "Owner-Operated", desc: "No middle managers. You work directly with our master builders to ensure your project receives absolute focus." },
                { icon: ShieldCheck, title: "Fixed Estimating", desc: "Our itemized quotes are final. We believe in financial integrity and respect for your investment from day one." },
                { icon: BarChart, title: "Modern Timelines", desc: "Utilizing modern project tracking to ensure materials arrive on time and milestones are met without fail." }
              ].map((prop, i) => (
                <div key={i} className="space-y-6 group">
                  <div className="w-16 h-1 bg-blue-600 mb-8 mx-auto md:mx-0 group-hover:w-full transition-all duration-500"></div>
                  <prop.icon className="w-12 h-12 text-blue-500 mb-2 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-widest leading-none">{prop.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed font-medium">{prop.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-[40px] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative overflow-hidden rounded-[32px] shadow-2xl h-[400px] sm:h-[600px]">
                  <img src={CONTENT.aboutImage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Blueprint Review" />
                </div>
              </div>
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-blue-600 uppercase tracking-[0.4em] text-[11px] font-black">Our Philosophy</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tighter">{CONTENT.aboutTitle}</h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">{CONTENT.aboutContent}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["Structural Excellence", "Premium Materials", "Safety-First Culture", "Local Compliance"].map(item => (
                    <div key={item} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="bg-blue-600 rounded-full p-1 flex-shrink-0"><CheckCircle className="text-white w-4 h-4" /></div>
                      <span className="font-bold text-[11px] uppercase tracking-widest text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollToId('contact')} className="group inline-flex items-center space-x-4 text-blue-600 font-black uppercase tracking-widest text-xs py-4 border-b-2 border-blue-600/20 hover:border-blue-600 transition-all">
                  <span>Speak with a Lead Contractor</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 bg-slate-50 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-20 space-y-4">
              <p className="text-blue-600 uppercase tracking-[0.4em] text-[11px] font-black">Our Portfolio</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">Craftsmanship in Focus</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {CONTENT.gallery.map(img => (
                <figure key={img.id} className="relative group overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-xl bg-slate-200" onClick={() => setSelectedImage(img)}>
                  <img src={img.url} className="w-full h-full object-cover transition-all duration-1000 md:group-hover:scale-110" alt={img.alt} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-8 left-8 right-8">
                      <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">{img.category}</span>
                      <h4 className="text-white font-bold text-xl sm:text-2xl leading-tight uppercase tracking-tight mb-6">{img.alt}</h4>
                      <div className="flex items-center space-x-3 text-[10px] text-white/80 font-black uppercase tracking-[0.2em]">
                        <Maximize2 className="w-4 h-4" />
                        <span>Enlarge Project</span>
                      </div>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="relative py-32 px-4 md:px-6 bg-white overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-16">
                <div className="space-y-4">
                  <p className="text-blue-600 uppercase tracking-[0.4em] text-[11px] font-black">Testimonials</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-slate-950">Trusted by Local Families</h2>
                </div>
                <div className="space-y-10">
                  {CONTENT.reviews.map(r => (
                    <blockquote key={r.id} className="bg-slate-50 p-8 sm:p-12 rounded-[40px] border border-slate-100 relative group">
                      <Quote className="absolute top-8 right-12 text-blue-600/10 w-24 h-24" />
                      <div className="flex items-center space-x-5 mb-8 relative">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-xl">{r.author.charAt(0)}</div>
                        <div>
                          <cite className="not-italic font-bold text-base uppercase tracking-widest text-slate-900">{r.author}</cite>
                          <div className="flex space-x-1.5 mt-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? 'fill-blue-600 text-blue-600' : 'text-slate-200'}`} />)}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed relative italic">"{r.content}"</p>
                    </blockquote>
                  ))}
                </div>
              </div>
              <div className="lg:sticky lg:top-32">
                <ReviewForm businessName={CONTENT.name} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 px-4 md:px-6 bg-slate-950">
          <div className="container mx-auto">
            <div className="bg-white rounded-[48px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
              <div className="relative p-10 md:p-20 bg-blue-600 text-white flex flex-col justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" alt="Project Documentation" />
                <div className="relative z-10 space-y-12">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tighter">Let's Discuss Your Build</h2>
                  <p className="text-blue-100 text-lg sm:text-xl leading-relaxed max-w-md font-medium">Ready to break ground? Contact our project management team for an introductory meeting and an itemized site estimate.</p>
                  <div className="space-y-8 pt-6">
                    <div className="flex items-center space-x-8">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 flex-shrink-0"><Phone className="w-7 h-7" /></div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 mb-1">Office Line</p>
                        <span className="font-black text-sm sm:text-lg uppercase tracking-widest">(555) 000-0000</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 flex-shrink-0"><Mail className="w-7 h-7" /></div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 mb-1">Direct Email</p>
                        <span className="font-black text-sm sm:text-lg uppercase tracking-widest text-wrap break-all">contact@yourbusiness.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:p-20 bg-white">
                {formSubmitted ? (
                  <div className="text-center animate-fade-in py-20 space-y-8">
                      <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">Inquiry Logged</h3>
                        <p className="text-slate-500 font-medium max-w-sm mx-auto">Our representative will contact you within 24 business hours to discuss your requirements.</p>
                      </div>
                      <button onClick={() => setFormSubmitted(false)} className="text-blue-600 font-black uppercase tracking-widest text-xs hover:underline pt-4">Start Another Request</button>
                  </div>
                ) : (
                  <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Full Name</label>
                        <input required type="text" className="w-full border-b border-slate-200 py-3 focus:border-blue-600 outline-none text-base transition-all bg-transparent font-bold" placeholder="E.g. Michael Thorne" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Email Address</label>
                        <input required type="email" className="w-full border-b border-slate-200 py-3 focus:border-blue-600 outline-none text-base transition-all bg-transparent font-bold" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Project Category</label>
                      <select className="w-full border-b border-slate-200 py-3 focus:border-blue-600 outline-none text-base transition-all bg-transparent font-bold cursor-pointer">
                        <option>Full Home Remodel</option>
                        <option>Structural Framing (New Build)</option>
                        <option>Architectural Addition</option>
                        <option>Custom Outdoor Space</option>
                        <option>General Contracting Consultation</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Project Overview</label>
                      <textarea className="w-full border-b border-slate-200 py-3 focus:border-blue-600 outline-none text-base transition-all bg-transparent font-bold resize-none min-h-[80px]" placeholder="Briefly describe your vision..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-950 text-white py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center space-x-4">
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 px-4 md:px-6 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20 items-center text-center md:text-left">
            <div className="space-y-6">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToId('home'); }} className="text-white text-2xl font-black tracking-tighter flex items-center justify-center md:justify-start space-x-3">
                  <Construction className="text-blue-600 w-8 h-8" />
                  <span className="uppercase">{CONTENT.name}</span>
                </a>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">Delivering elite residential construction and architectural integrity for over two decades.</p>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5">
                <TiktokIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center md:text-right space-y-4">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Headquarters</p>
              <address className="not-italic text-slate-500 font-medium text-sm leading-relaxed">
                Industrial Way, Suite 100<br />
                Business Heights<br />
                Licensed & Bonded #000-00000
              </address>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">&copy; 2024 {CONTENT.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 1.2em;
        }
        @media (min-width: 1024px) {
          header {
            background-attachment: fixed;
          }
        }
      `}</style>
    </div>
  );
}