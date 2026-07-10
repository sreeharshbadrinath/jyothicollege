import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, SlidersHorizontal, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data';
import { GalleryImage } from '../types';

export default function CampusGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Infrastructure', 'Campus', 'Milestone', 'Academic'];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (imgId: string) => {
    const idx = GALLERY_IMAGES.findIndex(img => img.id === imgId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? GALLERY_IMAGES.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === GALLERY_IMAGES.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  const lightboxImage = lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  return (
    <section id="campus" className="py-24 px-6 md:px-12 bg-white relative">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-px h-16 bg-[#111111]/20 mb-8" />
          <span className="text-[11px] font-black tracking-[0.3em] uppercase opacity-40 mb-3">
            Campus Environment
          </span>
          <h2 className="clash text-4xl md:text-6xl font-bold tracking-tight text-[#111111] max-w-4xl leading-[1.1]">
            A Sanctuary of Knowledge
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl font-medium">
            Take a virtual tour of our lush 40-acre campus situated in Cheruthuruthy, Kerala, custom engineered with world-class smart labs and inspiring study corridors.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111111]/40 mr-2">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Filter Tour:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#f2f2f2] text-gray-500 hover:text-[#111111] hover:bg-[#111111]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Visual Showcase Bento-Inspired Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[280px]"
        >
          {filteredImages.map((image) => {
            // Map bento classes
            let gridClasses = 'lg:col-span-6 lg:row-span-2';
            if (image.id === 'img1') gridClasses = 'lg:col-span-8 lg:row-span-2'; // Infrastructure Large
            if (image.id === 'img2') gridClasses = 'lg:col-span-4 lg:row-span-2 rounded-full'; // Milestone Round Circular
            if (image.id === 'img3') gridClasses = 'lg:col-span-5 lg:row-span-2'; // Campus Wide
            if (image.id === 'img4') gridClasses = 'lg:col-span-7 lg:row-span-2'; // Academic Tall
            
            return (
              <motion.div
                layout
                key={image.id}
                onClick={() => openLightbox(image.id)}
                className={`relative group image-reveal bg-gray-200 cursor-pointer overflow-hidden ${
                  image.id === 'img2' ? 'rounded-full' : 'rounded-sm'
                } ${gridClasses}`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover custom-transition"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual hover overlays matching prompt aesthetics */}
                {image.id === 'img2' ? (
                  // Custom Circular Silver Jubilee overlay matching prompt
                  <div className="absolute inset-0 bg-[#111111]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-8 sm:p-12">
                    <Award className="text-5xl text-amber-500 mb-4 animate-pulse" />
                    <h4 className="clash text-2xl text-white mb-2">{image.title}</h4>
                    <p className="text-white/60 text-xs max-w-xs">{image.description}</p>
                    <div className="mt-6 px-4 py-1.5 border border-white/20 rounded-full text-white/40 text-[9px] font-bold uppercase tracking-widest">
                      25 Years
                    </div>
                  </div>
                ) : (
                  // Rectangular overlays
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 text-white">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500 mb-1">
                      {image.category}
                    </span>
                    <h4 className="clash text-2xl md:text-3xl font-bold leading-none mb-2">
                      {image.title}
                    </h4>
                    <p className="text-white/60 text-xs max-w-md line-clamp-2">
                      {image.description}
                    </p>
                    <div className="absolute top-6 right-6 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                      <Maximize2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty Search Result feedback */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-[#f2f2f2]/40 rounded border border-[#111111]/5">
            <ImageIcon className="h-10 w-10 text-gray-300 mx-auto mb-4" />
            <h4 className="clash text-lg font-bold text-[#111111]">No campus images found</h4>
            <p className="text-sm text-gray-500 mt-1">Please select another category to view tour.</p>
          </div>
        )}

        {/* Lightbox Modal Carousel */}
        <AnimatePresence>
          {lightboxIndex !== null && lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-[#111111]/95 z-50 flex flex-col items-center justify-center p-4 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Slider Content */}
              <div 
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left navigation arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Main Media Panel */}
                <motion.div
                  key={lightboxImage.id}
                  initial={{ scale: 0.95, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: -10 }}
                  className="bg-white/5 border border-white/10 rounded overflow-hidden max-h-[70vh] flex items-center justify-center"
                >
                  <img
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    className="max-w-full max-h-[65vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Right navigation arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
                  aria-label="Next Image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Metadata details caption below */}
                <div className="w-full text-center mt-6 text-white max-w-xl">
                  <span className="text-[10px] font-black tracking-widest uppercase text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded">
                    {lightboxImage.category} • Virtual Tour
                  </span>
                  <h3 className="clash text-2xl md:text-3xl font-bold mt-3">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    {lightboxImage.description}
                  </p>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mt-4">
                    IMAGE {lightboxIndex + 1} OF {GALLERY_IMAGES.length}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
