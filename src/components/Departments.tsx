import React, { useState } from 'react';
import { Award, BookOpen, Users, Terminal, Cpu, Landmark, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DEPARTMENTS } from '../data';

export default function Departments() {
  const [selectedDeptId, setSelectedDeptId] = useState<string>('cse');

  const activeDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[0];

  return (
    <section id="academics" className="py-24 px-6 md:px-12 bg-[#f2f2f2]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-px h-16 bg-[#111111]/20 mb-8" />
          <span className="text-[11px] font-black tracking-[0.3em] uppercase opacity-40 mb-3">
            Academic Fields
          </span>
          <h2 className="clash text-4xl md:text-6xl font-bold tracking-tight text-[#111111] max-w-4xl leading-[1.1]">
            Engineering the Leaders of Tomorrow
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl font-medium">
            Explore our state-of-the-art B.Tech programs. Blending rigorous theoretical core mechanics with industry-driven engineering innovations.
          </p>
        </div>

        {/* Dynamic Mobile Layout / Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-[#111111]/5">
          {DEPARTMENTS.map((dept) => {
            const isSelected = dept.id === selectedDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`px-4 sm:px-6 py-3 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#111111] text-white shadow-sm scale-102'
                    : 'bg-white border border-[#111111]/5 text-gray-500 hover:text-[#111111] hover:border-[#111111]'
                }`}
              >
                {dept.shortName}
              </button>
            );
          })}
        </div>

        {/* Layout Grid: Tab Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Metrics Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-8 border border-[#111111]/10 rounded shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">
                Annual Seat Intake
              </span>
              <div className="flex items-baseline gap-2">
                <span className="clash text-5xl font-black text-[#111111]">
                  {activeDept.intake}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase">seats per year</span>
              </div>
            </div>

            <div className="bg-white p-8 border border-[#111111]/10 rounded shadow-sm flex flex-col justify-between min-h-[140px]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">
                  Accreditation Status
                </span>
                <div className="flex items-center gap-2.5">
                  <div className={`p-1 rounded-full ${activeDept.accredited ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}>
                    <ShieldCheck className={`h-5 w-5 ${activeDept.accredited ? 'text-emerald-600' : 'text-amber-600'}`} />
                  </div>
                  <span className="clash text-lg font-bold uppercase tracking-wider text-[#111111]">
                    {activeDept.accredited ? 'NBA Accredited' : 'Approved Program'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                {activeDept.accredited 
                  ? 'Accredited by National Board of Accreditation, adhering to international Washington Accord parameters.'
                  : 'AICTE approved program aligned with Kerala Technological University (KTU) frameworks.'
                }
              </p>
            </div>

            <div className="bg-[#111111] text-white p-8 border border-white/5 rounded shadow-md">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 block mb-3">
                Institutional Quality
              </span>
              <h4 className="clash text-xl font-bold mb-2 tracking-wide text-white">NAAC 'A' GRADE COLLEGE</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                As a premier technological institution, JEC has been evaluated and certified with premier NAAC 'A' grade status for high caliber student learning systems.
              </p>
            </div>
          </div>

          {/* Core Content details Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDept.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#111111]/10 rounded p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-[500px]"
              >
                <div>
                  <div className="border-b border-[#111111]/10 pb-6 mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">
                      Engineering Stream Profile
                    </span>
                    <h3 className="clash text-3xl md:text-4xl font-bold text-[#111111] mt-1">
                      {activeDept.name}
                    </h3>
                    <p className="mt-4 text-gray-500 leading-relaxed text-base">
                      {activeDept.description}
                    </p>
                  </div>

                  {/* Vision Box */}
                  <div className="mb-8">
                    <h4 className="text-[11px] font-black tracking-widest uppercase text-gray-400 mb-3 flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" /> Department Vision
                    </h4>
                    <p className="text-sm italic font-medium text-gray-600 bg-[#f2f2f2] p-5 rounded border-l-2 border-[#111111]/30 leading-relaxed">
                      "{activeDept.vision}"
                    </p>
                  </div>

                  {/* Lab Units & Placements Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Labs List */}
                    <div>
                      <h4 className="text-[11px] font-black tracking-widest uppercase text-gray-400 mb-3 flex items-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5" /> Core Lab Installations
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {activeDept.labs.map((lab, index) => (
                          <li key={index} className="text-xs font-semibold text-gray-700 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
                            <span>{lab}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Careers List */}
                    <div>
                      <h4 className="text-[11px] font-black tracking-widest uppercase text-gray-400 mb-3 flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5" /> Professional Placements
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeDept.careers.map((career, index) => (
                          <span
                            key={index}
                            className="text-[10px] font-bold uppercase tracking-wider text-gray-600 bg-[#f2f2f2] border border-[#111111]/5 px-3 py-1.5 rounded"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-xs text-gray-400 font-semibold">
                    *Curriculum designed under KTU with comprehensive credit courses.
                  </div>
                  <a
                    href="#inquiry"
                    className="text-xs font-black uppercase tracking-widest text-[#111111] hover:text-amber-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Course Brochure →</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
