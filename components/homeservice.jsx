import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  FileText, Film, Smartphone, Users, Sparkles, Briefcase, TrendingUp,
  MessageSquare, Zap, Radio, Home, Plane, Heart, Youtube, Globe, ArrowRight, ChevronDown,
  Palette, MonitorPlay, Camera, Clapperboard, Video
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const categorizedServices = [
  {
    category: "Production",
    services: [
      { id: 'commercial-films', title: 'Commercial & Brand Films', description: 'High-end cinematic films designed to solve business problems and elevate brand authority.', icon: Film },
      { id: 'documentary-shoot', title: 'Documentary Production', description: 'Authentic storytelling that captures deep human experiences and brand history.', icon: Video },
      { id: 'event-production', title: 'Event Photography & Videography', description: 'Comprehensive coverage of conferences and exhibitions with cinematic precision.', icon: Users },
      { id: 'wedding-coverage', title: 'Wedding Films & Photography', description: 'Timeless, emotional storytelling preserving your most significant milestones.', icon: Heart },
      { id: 'real-estate-visuals', title: 'Real Estate Visuals', description: 'Showmashing properties with cinematic drone and interior shots to drive sales.', icon: Home },
      { id: 'tour-videography', title: 'Travel & Tourism Productions', description: 'Dynamic coverage for travel brands and destination-based narratives.', icon: Globe },
      { id: 'drone-shoot', title: 'Aerial & Drone Cinematography', description: 'Cinema-grade aerial perspectives capturing cinematic scale and motion.', icon: Plane },
    ]
  },
  {
    category: "Content Production",
    services: [
      { id: 'podcast-production', title: 'Podcast Production', description: 'Professional multi-cam recordings and management for global distribution.', icon: Radio },
      { id: 'long-form-youtube', title: 'YouTube Video Production', description: 'High-retention video productions optimized for digital authority.', icon: Youtube },
      { id: 'viral-shorts', title: 'Social Media Content Creation', description: 'Viral shorts and reels engineered for reach and algorithmic amplification.', icon: Smartphone },
    ]
  },
  {
    category: "Post-Production",
    services: [
      { id: 'long-edit', title: 'Long-Form Editing', description: 'Polished narrative editing for films, documentaries, and series.', icon: Clapperboard },
      { id: 'short-edit', title: 'Short-Form Editing', description: 'Fast-paced, high-engagement editing for social media and ads.', icon: Zap },
      { id: 'motion-graphics', title: 'Motion Graphics & VFX', description: 'Advanced dynamic visuals and title sequences for modern productions.', icon: Sparkles },
      { id: 'color-grading', title: 'Professional Color Grading', description: 'Industry-standard color correction and cinematic look development.', icon: Palette },
    ]
  }
]
const allServicesFlat = categorizedServices.flatMap(c => c.services)

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section className="py-24 bg-black/70 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)]">
              <Sparkles size={14} className="text-white fill-white" />
              <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                Specialized Production
              </span>
            </div>
            <h2 className="font-inter font-black text-4xl md:text-6xl text-white tracking-tight leading-none m-0 uppercase">
              OUR <span className="text-yellow-500">EXPERTISE</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="font-inter font-light text-white/90 text-lg max-w-2xl leading-relaxed mt-4">
              Premium production workflows categorized for clarity and creative impact.
            </p>
          </ScrollReveal>
        </div>

        {/* Category Navigation - Mobile Dropdown / Desktop Tabs */}
        <div className="mb-20 relative px-2">

          {/* Mobile Filter View */}
          <div className="sm:hidden w-full flex flex-col items-center">
            <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              Filter by Category
            </span>
            <div className="relative w-full max-w-[280px]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full flex items-center justify-between bg-white/5 border border-white/10 px-6 py-4 rounded-xl font-inter text-[0.7rem] font-bold tracking-[0.15em] uppercase text-yellow-500 backdrop-blur-md"
              >
                {categorizedServices[activeTab].category}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 5, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 right-0 z-[100] mt-2 bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl p-1"
                  >
                    {categorizedServices.map((cat, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveTab(idx)
                          setIsMenuOpen(false)
                        }}
                        className={`
                          w-full text-left px-5 py-3.5 rounded-lg font-inter text-[0.7rem] font-bold tracking-[0.15em] uppercase transition-colors
                          ${activeTab === idx ? 'bg-yellow-500 text-black' : 'text-white/60 hover:bg-white/5 hover:text-white'}
                        `}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Tabs View */}
          <div className="hidden sm:flex justify-center">
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
              {categorizedServices.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    relative px-8 py-2.5 rounded-full font-inter text-[0.7rem] font-bold tracking-[0.15em] uppercase transition-all duration-500
                    ${activeTab === idx ? 'text-black' : 'text-white/40 hover:text-white'}
                  `}
                >
                  {activeTab === idx && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-yellow-500 rounded-full z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {categorizedServices[activeTab].services.map((service, sIdx) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="group bg-black/95 border border-white/20 p-8 rounded-xl transition-all duration-500 hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:-translate-y-1 relative overflow-hidden h-full"
                  >
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 h-full flex flex-col items-center text-center lg:items-start lg:text-left">
                      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center text-center justify-center mb-6 transition-colors group-hover:bg-yellow-500/10 border border-white/10 ">
                        <Icon className="text-white" size={24} />
                      </div>

                      <h3 className="font-inter font-bold text-xl text-white tracking-wide mb-3 transition-colors group-hover:text-yellow-500 uppercase">
                        {service.title}
                      </h3>

                      <p className="font-inter font-light text-[0.85rem] text-white/70 leading-relaxed mb-6 flex-grow ">
                        {service.description}
                      </p>

                      <Link href={`/services#${service.id}`}>
                        <button className="flex items-center gap-2 font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-yellow-500 transition-all">
                          See Details
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Bar */}
      <div className="mt-24 p-10 bg-pf-card border border-white/5 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-inter font-black text-2xl text-white tracking-tight mb-2 uppercase">
            READY TO <span className="text-yellow-500">START?</span>
          </h4>
          <p className="font-inter font-light text-white/90">Book a session with our directors to discuss your requirements.</p>
        </div>
        <Link href="/contact">
          <button className="bg-yellow-500 text-white font-inter text-[0.82rem] font-bold tracking-[0.12em] uppercase px-[36px] py-[14px] transition-all duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
            Book Consultation
          </button>
        </Link>
      </div>
    </section>
  )
}
