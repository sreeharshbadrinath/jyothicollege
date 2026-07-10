import React, { useState, useEffect } from 'react';
import { Calendar, Award, Shield, Library, TrendingUp, Users, Sparkles, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MILESTONES } from '../data';
import { Milestone } from '../types';

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState<number>(2027);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCelebration: false
  });

  // Calculate Countdown to JEC Silver Jubilee: July 1, 2027
  useEffect(() => {
    const jubileeDate = new Date('2027-07-01T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = jubileeDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isCelebration: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCelebration: false });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: Milestone['type']) => {
    switch (type) {
      case 'foundation':
        return <Library className="h-5 w-5 text-indigo-500" />;
      case 'achievement':
        return <Award className="h-5 w-5 text-amber-500" />;
      case 'expansion':
        return <TrendingUp className="h-5 w-5 text-emerald-500" />;
      default:
        return <Sparkles className="h-5 w-5 text-purple-500" />;
    }
  };

  const activeMilestone = MILESTONES.find(m => m.year === selectedYear) || MILESTONES[MILESTONES.length - 1];

  return (
    <section id="timeline" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative vector grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-px h-16 bg-[#111111]/20 mb-8" />
          <span className="text-[11px] font-black tracking-[0.3em] uppercase text-amber-600 mb-3 block">
            Institutional Legacy
          </span>
          <h2 className="clash text-4xl md:text-6xl font-bold tracking-tight text-[#111111] max-w-3xl leading-[1.1]">
            A Momentous Journey Toward <span className="italic font-light opacity-75 underline decoration-1 underline-offset-8">Silver Jubilee 2027</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl font-medium">
            Founded in 2002 under the Catholic Archdiocese of Trichur, Jyothi Engineering College has pioneered value-based technological breakthroughs for nearly 25 years.
          </p>
        </div>

        {/* Live Countdown Grid Section */}
        <div className="bg-[#f2f2f2] border border-[#111111]/10 rounded-sm p-8 md:p-12 mb-20 relative overflow-hidden shadow-sm">
          {/* Decorative ambient flare */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-amber-600 mb-3">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="text-xs font-black tracking-widest uppercase">Silver Jubilee Clock</span>
              </div>
              <h3 className="clash text-2xl md:text-3xl font-bold text-[#111111]">
                Counting Down to Twenty-Five Years of Excellence
              </h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Join our celebration of academic achievements, dynamic campus transformations, and standard-setting technology leaders shaping the world.
              </p>
            </div>

            <div className="lg:col-span-7 flex justify-center">
              {timeLeft.isCelebration ? (
                <div className="text-center p-6 bg-amber-100 rounded border border-amber-200">
                  <h4 className="clash text-2xl font-bold text-amber-800">
                    🎉 Celebration is Live! 🎉
                  </h4>
                  <p className="text-sm text-amber-700 mt-1">
                    Celebrating 25 Glorious Years (2002 — 2027) of Creating Technology Leaders!
                  </p>
                </div>
              ) : (
                <div className="flex gap-3 sm:gap-6 items-center">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Mins', value: timeLeft.minutes },
                    { label: 'Secs', value: timeLeft.seconds }
                  ].map((unit, idx) => (
                    <React.Fragment key={unit.label}>
                      <div className="flex flex-col items-center">
                        <div className="bg-white min-w-[70px] sm:min-w-[90px] h-[75px] sm:h-[95px] rounded border border-[#111111]/10 flex items-center justify-center shadow-sm">
                          <span className="clash text-2xl sm:text-4xl font-bold text-[#111111] tabular-nums">
                            {String(unit.value).padStart(2, '0')}
                          </span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 mt-2">
                          {unit.label}
                        </span>
                      </div>
                      {idx < 3 && (
                        <span className="clash text-xl sm:text-3xl font-light text-gray-300 select-none pb-5">
                          :
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Milestone Map Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Vertical Timeline Picker */}
          <div className="lg:col-span-4 flex flex-col gap-3 relative border-l border-[#111111]/10 pl-6 py-2">
            <span className="text-[11px] font-black tracking-widest uppercase text-gray-400 mb-2">
              Select Milestone Year
            </span>
            {MILESTONES.map((milestone) => {
              const isSelected = selectedYear === milestone.year;
              return (
                <button
                  key={milestone.year}
                  onClick={() => setSelectedYear(milestone.year)}
                  className={`text-left flex items-center justify-between group py-3 px-4 rounded border custom-transition cursor-pointer ${
                    isSelected
                      ? 'bg-[#111111] border-[#111111] text-white shadow-md'
                      : 'bg-transparent border-[#111111]/10 hover:border-[#111111] text-[#111111]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-full ${isSelected ? 'bg-white/10' : 'bg-[#111111]/5'}`}>
                      {getIcon(milestone.type)}
                    </div>
                    <span className="clash font-bold text-lg">{milestone.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${
                      isSelected ? 'text-white/60' : 'text-gray-400 group-hover:text-[#111111]'
                    }`}>
                      {milestone.type}
                    </span>
                    <ChevronRight className={`h-4 w-4 transform custom-transition ${
                      isSelected ? 'translate-x-0.5 text-amber-500' : 'translate-x-0 text-gray-400 group-hover:text-[#111111]'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Milestone Detail View */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
                className="bg-[#f2f2f2]/60 border border-[#111111]/10 rounded-sm p-8 md:p-12 min-h-[380px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#111111]/10 pb-6 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="clash text-5xl md:text-6xl font-black text-amber-600 leading-none">
                        {activeMilestone.year}
                      </span>
                      <div className="h-10 w-px bg-[#111111]/10" />
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                          MILESTONE CATEGORY
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#111111]">
                          {activeMilestone.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#111111]/5 shadow-sm text-xs font-bold text-[#111111]/70">
                      {getIcon(activeMilestone.type)}
                      <span className="capitalize">{activeMilestone.type} Phase</span>
                    </div>
                  </div>

                  <h3 className="clash text-2xl md:text-3xl font-bold text-[#111111] mb-4">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-gray-600 leading-[1.8] text-base md:text-lg">
                    {activeMilestone.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#111111]/10 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                      Silver Jubilee Verification State: Verified Record
                    </span>
                  </div>
                  {activeMilestone.year === 2027 ? (
                    <span className="text-[11px] font-black uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded">
                      Future Vision
                    </span>
                  ) : (
                    <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-500/10 px-3 py-1 rounded flex items-center gap-1">
                      <Check className="h-3 w-3" /> Historical Achievement
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
