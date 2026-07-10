import React from 'react';
import { Award, ShieldAlert, Sparkles, Building, Landmark, Globe, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';

// Custom Showcase Components
import Header from './components/Header';
import Timeline from './components/Timeline';
import Departments from './components/Departments';
import CampusGallery from './components/CampusGallery';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  
  // Custom Smooth Scrolling Navigation handler
  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of sticky navigation header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-primary antialiased selection:bg-[#111111] selection:text-white overflow-x-hidden font-sans">
      
      {/* Sticky Header */}
      <Header onNavigate={handleNavigation} />

      {/* Main Content Sections */}
      <main>
        
        {/* Section 1: Hero Showcase Section */}
        <section
          id="hero"
          className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 bg-bg-main overflow-hidden"
        >
          {/* Subtle architectural background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

          <div className="text-center relative z-10 max-w-7xl mx-auto">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-6 opacity-40 text-text-primary"
            >
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">
                EST. 2002
              </span>
              <div className="w-12 h-px bg-[#111111]" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">
                Silver Jubilee 2027
              </span>
            </motion.div>

            {/* Display Headings with custom "echo-layer" text overlay effects */}
            <div className="flex flex-col items-center select-none">
              
              {/* CREATING */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative inline-block clash font-black text-[9vw] xl:text-[150px] uppercase text-text-primary leading-[0.9] tracking-tighter"
              >
                CREATING
                <div className="echo-layer text-gray-1 translate-x-[-0.03em] translate-y-[-0.03em]">CREATING</div>
                <div className="echo-layer text-gray-2 translate-x-[-0.06em] translate-y-[-0.06em]">CREATING</div>
                <div className="echo-layer text-gray-3 translate-x-[-0.09em] translate-y-[-0.09em]">CREATING</div>
                <div className="echo-layer text-gray-4 translate-x-[-0.12em] translate-y-[-0.12em]">CREATING</div>
              </motion.div>

              {/* TECHNOLOGY */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative inline-block clash font-black text-[9vw] xl:text-[150px] uppercase text-text-primary leading-[0.9] tracking-tighter mt-1 md:mt-2"
              >
                TECHNOLOGY
                <div className="echo-layer text-gray-1 translate-x-[-0.03em] translate-y-[-0.03em]">TECHNOLOGY</div>
                <div className="echo-layer text-gray-2 translate-x-[-0.06em] translate-y-[-0.06em]">TECHNOLOGY</div>
                <div className="echo-layer text-gray-3 translate-x-[-0.09em] translate-y-[-0.09em]">TECHNOLOGY</div>
                <div className="echo-layer text-gray-4 translate-x-[-0.12em] translate-y-[-0.12em]">TECHNOLOGY</div>
              </motion.div>

              {/* LEADERS */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative inline-block clash font-black text-[9vw] xl:text-[150px] uppercase text-text-primary leading-[0.9] tracking-tighter mt-1 md:mt-2"
              >
                LEADERS
                <div className="echo-layer text-gray-1 translate-x-[-0.03em] translate-y-[-0.03em]">LEADERS</div>
                <div className="echo-layer text-gray-2 translate-x-[-0.06em] translate-y-[-0.06em]">LEADERS</div>
                <div className="echo-layer text-gray-3 translate-x-[-0.09em] translate-y-[-0.09em]">LEADERS</div>
                <div className="echo-layer text-gray-4 translate-x-[-0.12em] translate-y-[-0.12em]">LEADERS</div>
              </motion.div>

            </div>

            {/* OF TOMORROW Subtitle with spacer and Motto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-baseline gap-4 md:gap-6 px-4"
            >
              <span className="clash text-[36px] md:text-[48px] font-light italic opacity-60 tracking-tighter leading-none">
                OF TOMORROW
              </span>
              <div className="hidden md:block h-[2px] flex-grow bg-[#111111]/5" />
              <span className="text-sm md:text-base font-medium italic text-gray-500">
                Leading Kindly Light
              </span>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Momentous Legacy Overview */}
        <section className="py-24 md:py-36 px-6 md:px-12 bg-white relative">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* Architectural vertical divider */}
            <div className="w-px h-24 bg-text-primary/20 mb-12"></div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="clash text-4xl md:text-6xl font-bold text-center max-w-5xl mb-16 leading-[1.1] text-text-primary"
            >
              A Momentous Journey Toward{' '}
              <span className="italic font-light opacity-60 underline decoration-1 underline-offset-8">
                Silver Jubilee 2027
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
              {/* Accreditations Left Cards */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-8 border border-text-primary/10 rounded bg-[#f2f2f2]/50 hover:bg-white hover:border-[#111111]/30 custom-transition group"
                >
                  <h4 className="clash text-xl font-black mb-4 uppercase tracking-wider text-text-primary group-hover:text-amber-600 transition-colors">
                    NAAC 'A' GRADE
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                    Highly acclaimed institutional assessment. Certified with a premier 'A' grade, representing standard-setting infrastructure and teaching parameters.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-8 border border-text-primary/10 rounded bg-[#f2f2f2]/50 hover:bg-white hover:border-[#111111]/30 custom-transition group"
                >
                  <h4 className="clash text-xl font-black mb-4 uppercase tracking-wider text-text-primary group-hover:text-amber-600 transition-colors">
                    NBA ACCREDITED
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                    Core engineering disciplines are accredited by the National Board of Accreditation, ensuring degrees are globally respected under the Washington Accord.
                  </p>
                </motion.div>
              </div>

              {/* Institution Bio Right Text & Metrics */}
              <div className="lg:col-span-8 flex flex-col gap-8 lg:pl-6">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#111111]/80">
                  As Jyothi Engineering College approaches its momentous silver jubilee in 2027 to commemorate twenty-five years of academic excellence, this premier institution—founded in 2002 by the Catholic Archdiocese of Trichur and set against the picturesque backdrop of a lush campus in Cheruthuruthy—continues to cement its legacy.
                </p>
                <p className="text-base text-gray-500 leading-relaxed font-medium">
                  By seamlessly integrating rigorous core engineering disciplines with forward-looking technological innovation, we shape professionals ready for the global stage. Our commitment to excellence is reflected in our NAAC 'A' Grade and NBA-accredited programs, marking two decades of dedication to value-based technical education.
                </p>

                {/* Legacy Counter Badges */}
                <div className="flex flex-wrap items-center gap-8 lg:gap-12 mt-6 pt-6 border-t border-[#111111]/10">
                  <div className="flex flex-col">
                    <span className="clash text-4xl md:text-5xl font-black text-[#111111]">25+</span>
                    <span className="text-[9px] font-black tracking-widest uppercase text-gray-400 mt-1">
                      Years of Legacy
                    </span>
                  </div>
                  <div className="w-px h-12 bg-[#111111]/10"></div>
                  <div className="flex flex-col">
                    <span className="clash text-4xl md:text-5xl font-black text-[#111111]">A</span>
                    <span className="text-[9px] font-black tracking-widest uppercase text-gray-400 mt-1">
                      NAAC Grade
                    </span>
                  </div>
                  <div className="w-px h-12 bg-[#111111]/10"></div>
                  <div className="flex flex-col">
                    <span className="clash text-4xl md:text-5xl font-black text-[#111111]">NBA</span>
                    <span className="text-[9px] font-black tracking-widest uppercase text-gray-400 mt-1">
                      Accredited
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Large Metrics Ribbon Strip */}
        <section className="py-20 px-6 md:px-12 bg-[#f2f2f2]">
          <div className="max-w-[1440px] mx-auto border-y border-[#111111]/10 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: 'A', label: "NAAC 'A' Grade Status" },
                { metric: 'NBA', label: 'Accredited Branches' },
                { metric: 'ARCH', label: 'Archdiocese Trust Foundation' },
                { metric: '25', label: 'Years of Excellence' },
              ].map((strip, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center p-6 rounded hover:bg-white hover:shadow-sm custom-transition select-none"
                >
                  <span className="clash text-4xl md:text-5xl font-black text-[#111111] mb-2">
                    {strip.metric}
                  </span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">
                    {strip.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Interactive Milestone Timeline & Countdown */}
        <Timeline />

        {/* Section 5: Filterable Campus Virtual Tour & Bento Gallery */}
        <CampusGallery />

        {/* Section 6: Interactive B.Tech Departments Profile Explorer */}
        <Departments />

        {/* Section 8: Specializations / Inclusions Cards Block */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="flex flex-col items-center text-center mb-16">
              <div className="w-px h-16 bg-[#111111]/20 mb-8" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase opacity-40 mb-3">
                Value Additions
              </span>
              <h2 className="clash text-4xl md:text-6xl font-bold tracking-tight text-[#111111] max-w-4xl leading-[1.1]">
                Empowering Ecosystems
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Innovation Center */}
              <div className="service-card p-10 md:p-12 border border-[#1e1e1e]/10 custom-transition hover:bg-[#f2f2f2]/40 rounded-sm flex flex-col min-h-[460px] group">
                <div className="geometric-icon w-14 h-14 bg-[#111111] mb-10 flex items-center justify-center rounded">
                  <BrainCircuit className="h-6 w-6 text-white" />
                </div>
                <h4 className="clash text-2xl mb-4 font-bold text-[#111111]">
                  Innovation Center
                </h4>
                <p className="text-sm text-gray-500 leading-[1.7] mb-10 font-semibold">
                  Nurturing state-recognized startup ideas, digital mockups, and engineering patent breakthroughs through our dedicated on-campus incube wing.
                </p>
                <button
                  onClick={() => handleNavigation('inquiry')}
                  className="font-bold tracking-widest uppercase text-xs flex items-center gap-2 group cursor-pointer w-fit"
                >
                  <span>Explore Incubation →</span>
                </button>
              </div>

              {/* Card 2: Global Exchange */}
              <div className="service-card p-10 md:p-12 border border-[#1e1e1e]/10 custom-transition hover:bg-[#f2f2f2]/40 rounded-sm flex flex-col min-h-[460px] group">
                <div className="geometric-icon w-14 h-14 rounded-full bg-[#111111] mb-10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="clash text-2xl mb-4 font-bold text-[#111111]">
                  Global Exchange
                </h4>
                <p className="text-sm text-gray-500 leading-[1.7] mb-10 font-semibold">
                  Connecting our engineering candidates with global universities for credit transfer options, international semester programs, and research.
                </p>
                <button
                  onClick={() => handleNavigation('inquiry')}
                  className="font-bold tracking-widest uppercase text-xs flex items-center gap-2 group cursor-pointer w-fit"
                >
                  <span>Learn More →</span>
                </button>
              </div>

              {/* Card 3: Placement Hub */}
              <div className="service-card p-10 md:p-12 border border-[#1e1e1e]/10 custom-transition hover:bg-[#f2f2f2]/40 rounded-sm flex flex-col min-h-[460px] group">
                <div className="geometric-icon w-14 h-14 bg-transparent border-2 border-[#111111] mb-10 flex items-center justify-center rounded">
                  <Landmark className="h-6 w-6 text-[#111111]" />
                </div>
                <h4 className="clash text-2xl mb-4 font-bold text-[#111111]">
                  Placement Hub
                </h4>
                <p className="text-sm text-gray-500 leading-[1.7] mb-10 font-semibold">
                  Securing exceptional professional starts. Proudly tracking a 95%+ placement record across top-tier multinational product and consulting firms.
                </p>
                <button
                  onClick={() => handleNavigation('inquiry')}
                  className="font-bold tracking-widest uppercase text-xs flex items-center gap-2 group cursor-pointer w-fit"
                >
                  <span>View Placements →</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Section 9: FAQ Accordions & Dynamic Inquiry Contact Form */}
        <InquiryForm />

      </main>

      {/* High Fidelity Footer Section */}
      <Footer onNavigate={handleNavigation} />

    </div>
  );
}
