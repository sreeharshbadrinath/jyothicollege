import React from 'react';
import { MapPin, Phone, Mail, Award, ArrowUp, CalendarRange } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e1e1e] text-[#f6f6f6]/60 py-24 px-6 md:px-12 border-t border-white/5 relative z-10">
      
      {/* Scroll to Top floating arrow */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 right-12 -translate-y-1/2 p-3 bg-amber-500 text-[#1e1e1e] hover:bg-amber-400 rounded-full cursor-pointer custom-transition shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Brand Details */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('hero')}>
            <img
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b01223cf-f9a9-41cb-9800-6ff6782c3043/1783696346863-927df03e/jyothilog.png"
              className="h-12 w-auto invert brightness-0"
              alt="JEC White Logo"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col text-white">
              <span className="clash font-bold text-2xl tracking-tighter">JYOTHI</span>
              <span className="text-[8px] tracking-[0.38em] uppercase font-bold opacity-60">
                Engineering College
              </span>
            </div>
          </div>
          <p className="text-xs leading-[1.8] max-w-xs text-[#f6f6f6]/50">
            Founded in 2002 by the Catholic Archdiocese of Trichur. A premier NBA accredited and NAAC Grade 'A' technological institution dedicated to value-driven academic excellence.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Award className="h-4 w-4 text-amber-500" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">
              Celebrating 25 Years of Excellence
            </span>
          </div>
        </div>

        {/* Quick Navigation links */}
        <div className="flex flex-col gap-5">
          <h5 className="text-white font-black tracking-widest uppercase text-xs">
            Showcase Fields
          </h5>
          <nav className="flex flex-col gap-3.5 text-xs">
            {[
              { id: 'academics', label: 'B.Tech Departments' },
              { id: 'timeline', label: 'Jubilee Timelines' },
              { id: 'campus', label: 'Campus Environment' },
              { id: 'inquiry', label: 'Inquiry Center' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="hover:text-white text-left transition-colors cursor-pointer w-fit"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Portals & Resources links */}
        <div className="flex flex-col gap-5">
          <h5 className="text-white font-black tracking-widest uppercase text-xs">
            Student Resources
          </h5>
          <nav className="flex flex-col gap-3.5 text-xs">
            <a href="https://jecc.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Official JEC Portal</a>
            <a href="#" className="hover:text-white transition-colors">KTU Student Portal</a>
            <a href="#" className="hover:text-white transition-colors">TATA-JEC Incubation</a>
            <a href="#" className="hover:text-white transition-colors">JEC Digital Library</a>
            <a href="#" className="hover:text-white transition-colors">Alumni Network</a>
          </nav>
        </div>

        {/* Physical Office Address Coordinates */}
        <div className="flex flex-col gap-5">
          <h5 className="text-white font-black tracking-widest uppercase text-xs">
            Admission Office
          </h5>
          <div className="flex flex-col gap-4 text-xs">
            <div className="flex items-start gap-3.5">
              <MapPin className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Cheruthuruthy, Thrissur District, Kerala, PIN - 679531</span>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span>+91 4884 259000</span>
                <span className="text-[10px] opacity-60">Hotline: +91 94477 77712</span>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>info@jecc.ac.in</span>
            </div>
          </div>
        </div>

      </div>

      {/* Baseline credits */}
      <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.25em] uppercase font-bold opacity-40">
        <span className="text-center md:text-left">© 2026 Jyothi Engineering College, Cheruthuruthy.</span>
        <span className="flex items-center gap-1.5 justify-center">
          <CalendarRange className="h-3.5 w-3.5 text-amber-500" />
          <span>EST. 2002 — Heading Kindly Light towards Silver Jubilee 2027</span>
        </span>
      </div>

    </footer>
  );
}
