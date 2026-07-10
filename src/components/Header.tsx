import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'academics', label: 'Academics' },
    { id: 'timeline', label: 'Milestones' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'inquiry', label: 'Inquiry Hub' },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[80px] z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f2f2f2]/95 backdrop-blur-md shadow-sm border-b border-[#111111]/5'
            : 'bg-[#f2f2f2]/90 backdrop-blur-md border-b border-[#111111]/5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-12">
          {/* Logo Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleItemClick('hero')}
          >
            <div className="relative">
              <img
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b01223cf-f9a9-41cb-9800-6ff6782c3043/1783696346863-927df03e/jyothilog.png"
                className="h-10 w-auto custom-transition group-hover:scale-105"
                alt="JEC Logo"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="clash font-bold text-xl md:text-2xl tracking-tighter leading-none text-[#111111]">
                JYOTHI
              </span>
              <span className="text-[9px] font-black tracking-[0.18em] uppercase text-[#111111]/60">
                Engineering College
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-[13px] font-black uppercase tracking-widest text-[#111111] hover:text-[#b6b5b5] transition-all duration-150 cursor-pointer relative py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#111111] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Quick Contact / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleItemClick('inquiry')}
              className="px-6 py-2.5 rounded-full border border-[#1e1e1e] text-[11px] font-bold uppercase tracking-widest bg-[#111111] text-white hover:bg-transparent hover:text-[#111111] custom-transition cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border border-[#111111]/10 text-[#111111] hover:bg-[#111111]/5 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#111111] z-40 md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[280px] sm:w-[320px] h-full bg-[#f2f2f2] shadow-2xl z-50 p-6 flex flex-col justify-between border-l border-[#111111]/10 md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-[#111111]/10">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/b01223cf-f9a9-41cb-9800-6ff6782c3043/1783696346863-927df03e/jyothilog.png"
                      className="h-8 w-auto"
                      alt="JEC Logo"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col">
                      <span className="clash font-bold text-lg leading-none">JYOTHI</span>
                      <span className="text-[7px] font-bold uppercase tracking-wider opacity-60">
                        Engineering College
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full hover:bg-[#111111]/5"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6 pt-10">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className="text-[14px] font-black uppercase tracking-widest text-left text-[#111111] hover:text-[#b6b5b5] transition-colors py-1 border-b border-[#111111]/5"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-4 pt-6 border-t border-[#111111]/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]/60">
                  <Award className="h-4 w-4 text-amber-500" />
                  <span>NAAC 'A' Grade • NBA Accredited</span>
                </div>
                <button
                  onClick={() => handleItemClick('inquiry')}
                  className="w-full py-3 rounded-full bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#111111]/85 custom-transition"
                >
                  <span>Admission Inquiry</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
