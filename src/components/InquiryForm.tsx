import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, HelpCircle, ChevronDown, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { Inquiry } from '../types';
import { inquiriesCollection } from '../firebase';
import { addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';

export default function InquiryForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Computer Science & Engineering',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Listen to Firestore real-time updates
  useEffect(() => {
    const q = query(inquiriesCollection, orderBy('createdAt', 'desc'), limit(15));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedInquiries: Inquiry[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        loadedInquiries.push({
          id: doc.id,
          name: data.name || '',
          email: data.email || '',
          phone: data.phone || '',
          course: data.course || '',
          message: data.message || '',
          timestamp: data.timestamp || ''
        });
      });
      setInquiries(loadedInquiries);
    }, (error) => {
      console.error("Error listening to inquiries:", error);
    });

    return () => unsubscribe();
  }, []);

  // FAQ state
  const [activeFaqCategory, setActiveFaqCategory] = useState<'All' | 'Admission' | 'Academic' | 'Hostel' | 'Scholarship'>('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const courses = [
    'Computer Science & Engineering',
    'Artificial Intelligence & Data Science',
    'Electronics & Communication Engineering',
    'Robotics & Automation',
    'Mechanical Engineering',
    'Electrical & Electronics Engineering',
    'Civil Engineering'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validate
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please provide a valid phone number (min 10 digits)';
    }
    if (!formData.message.trim()) newErrors.message = 'Please type your inquiry message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Success - Save to Firestore
      const timestampStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      await addDoc(inquiriesCollection, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        message: formData.message,
        timestamp: timestampStr,
        createdAt: serverTimestamp()
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'Computer Science & Engineering',
        message: ''
      });

      // Reset success banner after 6 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    } catch (err) {
      console.error("Error adding inquiry to Firestore:", err);
    }
  };

  const filteredFaqs = activeFaqCategory === 'All'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeFaqCategory);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <section id="inquiry" className="py-24 px-6 md:px-12 bg-[#f2f2f2]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-px h-16 bg-[#111111]/20 mb-8" />
          <span className="text-[11px] font-black tracking-[0.3em] uppercase opacity-40 mb-3">
            Get In Touch
          </span>
          <h2 className="clash text-4xl md:text-6xl font-bold tracking-tight text-[#111111] max-w-4xl leading-[1.1]">
            Admission Inquiry Hub
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl font-medium">
            Contact our dedicated support cell today. Submit questions regarding admissions, scholarships, or hostels and receive rapid professional counseling feedback.
          </p>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white border border-[#111111]/10 rounded p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-amber-600" />
              <h3 className="clash text-2xl font-bold uppercase tracking-wider text-[#111111]">
                Admission Query Form
              </h3>
            </div>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded mb-6 flex items-start gap-3 shadow-inner"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Query Submitted Successfully!</h4>
                    <p className="text-xs text-emerald-700/90 mt-1">
                      Thank you for contacting Jyothi Engineering College. Our Silver Jubilee Admission Cell will review your academic goals and contact you back within 24 working hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded border bg-[#f2f2f2]/40 text-sm font-medium focus:outline-none focus:bg-white custom-transition ${
                      errors.name ? 'border-red-500' : 'border-[#111111]/10 focus:border-[#111111]'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-bold">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded border bg-[#f2f2f2]/40 text-sm font-medium focus:outline-none focus:bg-white custom-transition ${
                      errors.email ? 'border-red-500' : 'border-[#111111]/10 focus:border-[#111111]'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 font-bold">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9447XXXXXX"
                    className={`w-full px-4 py-3 rounded border bg-[#f2f2f2]/40 text-sm font-medium focus:outline-none focus:bg-white custom-transition ${
                      errors.phone ? 'border-red-500' : 'border-[#111111]/10 focus:border-[#111111]'
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 font-bold">{errors.phone}</span>}
                </div>

                {/* Preferred Course */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                    Preferred Stream
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded border bg-[#f2f2f2]/40 text-sm font-medium focus:outline-none focus:bg-white focus:border-[#111111] border-[#111111]/10 custom-transition cursor-pointer"
                  >
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                  Inquiry Message / Academic Goals
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your rank, marks or questions about JEC academics/hostels..."
                  className={`w-full px-4 py-3 rounded border bg-[#f2f2f2]/40 text-sm font-medium focus:outline-none focus:bg-white custom-transition ${
                    errors.message ? 'border-red-500' : 'border-[#111111]/10 focus:border-[#111111]'
                  }`}
                />
                {errors.message && <span className="text-[10px] text-red-500 font-bold">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#111111] text-white rounded text-[11px] font-bold uppercase tracking-widest hover:bg-[#111111]/85 custom-transition flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Submit Query to counselor</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

            {/* Simulated Live Inquiry Feed (Invaluable UX asset!) */}
            {inquiries.length > 0 && (
              <div className="mt-10 pt-8 border-t border-[#111111]/10">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#111111] mb-4 flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Active Inquiry Sessions ({inquiries.length})
                </h4>
                <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto pr-2">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-4 bg-[#f2f2f2]/50 border border-[#111111]/5 rounded flex flex-col justify-between">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-xs font-bold text-[#111111]">{inq.name}</span>
                        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">{inq.timestamp}</span>
                      </div>
                      <span className="text-[10px] font-black uppercase text-amber-600 tracking-wider mb-2">{inq.course}</span>
                      <p className="text-xs text-gray-500 italic leading-relaxed">"{inq.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FAQ/Contact details Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Quick Contacts */}
            <div className="bg-[#111111] text-white p-8 md:p-10 rounded shadow-md border border-white/5">
              <h4 className="clash text-2xl font-bold uppercase tracking-wider mb-6 text-white border-b border-white/10 pb-4">
                Office Information
              </h4>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">JEC Location Campus</span>
                    <p className="text-sm font-semibold text-white/90">
                      Jyothi Engineering College, Cheruthuruthy, Thrissur District, Kerala, Pin - 679531
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">Admission Cell Hotline</span>
                    <p className="text-sm font-semibold text-white/90">
                      +91 4884 259000
                    </p>
                    <span className="text-xs text-white/50 block">Mobile: +91 94477 77712</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">Official Support Email</span>
                    <p className="text-sm font-semibold text-white/90">
                      info@jecc.ac.in
                    </p>
                    <span className="text-xs text-white/50 block">Admissions: admission@jecc.ac.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-white border border-[#111111]/10 rounded p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="h-5 w-5 text-amber-600" />
                <h3 className="clash text-xl font-bold uppercase tracking-wider text-[#111111]">
                  Frequently Asked FAQs
                </h3>
              </div>

              {/* FAQ Toggles */}
              <div className="flex flex-col gap-3">
                {filteredFaqs.map((faq, index) => {
                  const isExpanded = expandedFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-[#111111]/10 rounded overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full py-4 px-5 text-left font-bold text-sm text-[#111111] hover:bg-[#f2f2f2]/30 flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`h-4 w-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180 text-amber-500' : 'rotate-0 text-gray-400'}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-xs text-gray-500 leading-relaxed bg-[#f2f2f2]/20">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
