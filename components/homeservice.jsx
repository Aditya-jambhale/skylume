'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Camera, Film, Briefcase, Users, Building, Sparkles, Video,
  TrendingUp, Globe, Lightbulb, Palette, Box,
  Smartphone, Plane, PartyPopper, GraduationCap, Radio, ArrowUpRight, ChevronLeft, ChevronRight
} from 'lucide-react'

const categories = [
  {
    label: 'Corporate',
    services: [
      { title: 'Corporate Films',           href: '/services#corporate-films',      description: 'Brand stories crafted to build authority, trust, and long-term positioning.',                              image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80' },
      { title: 'Promotional Brand Videos',  href: '/services#brand-videos',         description: 'Strategic promotional videos designed to elevate brand perception and drive engagement.',               image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80' },
      { title: 'Executive Interviews',      href: '/services#executive-interviews', description: 'High-quality interview production with cinematic lighting and structured storytelling.',                 image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80' },
      { title: 'Behind The Scenes Videos',  href: '/services#bts',                  description: 'Authentic behind-the-scenes coverage that builds brand transparency and connection.',                    image: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?w=800&q=80' },
    ]
  },
  {
    label: 'Events',
    services: [
      { title: 'Exhibitions & Trade Show Filming', href: '/services#trade-show',      description: 'Capture large-scale events with cinematic precision, multi-camera coverage, and professional audio.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
      { title: 'Event Filming',                    href: '/services#event-filming',   description: 'Full-scale event production for corporate, political, and business gatherings.',                        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80' },
      { title: 'Event AV Setup with Live Feed',    href: '/services#live-av',         description: 'Complete AV solutions with real-time broadcasting and live production management.',                     image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80' },
      { title: 'Burj Khalifa Projection',          href: '/services#burj-projection', description: 'Large-scale projection production and execution for landmark events.',                                  image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
    ]
  },
  {
    label: 'Personal',
    services: [
      { title: 'Wedding Videos',     href: '/services#wedding',       description: 'Cinematic wedding films designed to preserve memories with elegance and emotion.',          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80' },
      { title: 'Save The Date',      href: '/services#save-the-date', description: 'Creative pre-wedding cinematic invitations designed for digital sharing.',                   image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80' },
      { title: 'Graduation Videos',  href: '/services#graduation',    description: 'Professional coverage for academic milestones and institutional events.',                     image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80' },
    ]
  },
  {
    label: 'Real Estate',
    services: [
      { title: 'Real Estate Product Demo',         href: '/services#real-estate', description: 'Luxury property walkthroughs and real estate visuals built to attract premium buyers.',               image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
      { title: 'Aerial & Drone Cinematography',    href: '/services#aerial',      description: 'Professional aerial cinematography for real estate, events, and large-scale productions.',            image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80' },
    ]
  },
  {
    label: 'Digital',
    services: [
      { title: 'Social Media Reels',    href: '/services#reels',        description: 'High-impact short-form vertical videos optimized for reach and engagement.',               image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80' },
      { title: 'Teaser / Trailer Videos', href: '/services#trailers',   description: 'Short-form cinematic trailers that generate anticipation and audience excitement.',          image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80' },
      { title: '2D Animation Videos',   href: '/services#2d-animation', description: 'Custom 2D animated videos for explainers, corporate messaging, and campaigns.',             image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80' },
      { title: '3D Animation Videos',   href: '/services#3d-animation', description: 'High-end 3D visual production for immersive brand storytelling.',                           image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&q=80' },
      { title: '360 / VR Videos',       href: '/services#vr',           description: 'Immersive virtual experiences designed to elevate digital interaction.',                    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80' },
    ]
  },
]

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={service.href}
      className="no-underline block flex-shrink-0 w-[260px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full h-80 rounded-sm overflow-hidden cursor-pointer"
      >
        {/* Background image */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          style={{
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            filter: 'grayscale(20%)',
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-all duration-400"
          style={{
            background: hovered
              ? 'linear-gradient(to top, rgba(7,11,22,0.97) 0%, rgba(7,11,22,0.5) 55%, rgba(7,11,22,0.15) 100%)'
              : 'linear-gradient(to top, rgba(7,11,22,0.92) 0%, rgba(7,11,22,0.35) 60%, rgba(7,11,22,0.05) 100%)',
          }}
        />

        {/* Orange top accent line */}
        <div
          className="absolute top-0 left-0 h-0.5 bg-orange-500 transition-all duration-500"
          style={{ width: hovered ? '100%' : '40px' }}
        />

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3">
          <div>
            {/* Description — slides up on hover */}
            <div
              className="mb-2 transition-all duration-350"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateY(0)' : 'translateY(6px)',
              }}
            >
              <p className="font-barlow font-light text-xs text-slate-400 leading-relaxed line-clamp-2">
                {service.description}
              </p>
            </div>
            <h3 className="font-bebas text-lg tracking-widest text-white leading-tight m-0">
              {service.title.toUpperCase()}
            </h3>
          </div>

          {/* Arrow button */}
          <div
            className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              transform: hovered ? 'scale(1.1) rotate(-10deg)' : 'scale(1) rotate(0deg)',
              boxShadow: hovered ? '0 0 20px rgba(249,115,22,0.5)' : 'none',
            }}
          >
            <ArrowUpRight size={18} color="white" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [paused, setPaused] = useState(false)
  const scrollRef = useRef(null)
  const intervalRef = useRef(null)

  const startAutoSwitch = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab(prev => (prev + 1) % categories.length)
    }, 3500)
  }, [])

  const stopAutoSwitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    if (!paused) startAutoSwitch()
    return stopAutoSwitch
  }, [paused, startAutoSwitch])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0
  }, [activeTab])

  const handleTabClick = (i) => {
    setActiveTab(i)
    stopAutoSwitch()
    setPaused(true)
    setTimeout(() => setPaused(false), 8000)
  }

  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 580, behavior: 'smooth' })
  }

  return (
    <section
      className="py-32 overflow-hidden bg-[var(--navy)]"
      onMouseEnter={() => { stopAutoSwitch(); setPaused(true) }}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1300px] mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex justify-between items-end flex-wrap gap-8 mb-14">
          <div>
            <span className="eyebrow block mb-4">What We Do</span>
            <h2 className="font-bebas text-[clamp(3rem,7vw,5.5rem)] tracking-widest text-white leading-none">
              OUR <span className="text-orange-500">SERVICES</span>
            </h2>
          </div>
          <p className="font-barlow font-light text-[var(--muted)] text-base leading-relaxed max-w-sm">
            18 services across corporate, events, real estate, digital, and personal production — all under one roof.
          </p>
        </div>

        {/* ── Tabs + Nav ── */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-0.5">

          {/* Tabs */}
          <div className="flex gap-0.5 flex-wrap">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                className={[
                  'font-barlow-condensed text-xs font-bold tracking-[0.18em] uppercase',
                  'px-7 py-3 border-none cursor-pointer transition-all duration-250 relative',
                  activeTab === i
                    ? 'bg-orange-500 text-white'
                    : 'bg-[var(--navy-light)] text-[var(--muted)] hover:text-white',
                ].join(' ')}
              >
                {cat.label}

                {/* Sweeping progress bar — auto mode */}
                {activeTab === i && !paused && (
                  <motion.div
                    key={`prog-${activeTab}-${i}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 3.5, ease: 'linear' }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50 origin-left"
                  />
                )}
                {/* Static bar — paused */}
                {activeTab === i && paused && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50" />
                )}
              </button>
            ))}
          </div>

          {/* Scroll arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 bg-[var(--navy-light)] border border-white/5 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-orange-500"
              style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
            >
              <ChevronLeft size={18} color="white" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 bg-orange-500 border-none flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-orange-400"
              style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
            >
              <ChevronRight size={18} color="white" />
            </button>
          </div>
        </div>

        {/* ── Card Row ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-6 pt-6 cursor-grab"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={e => {
                const el = e.currentTarget
                el.style.cursor = 'grabbing'
                const startX = e.pageX - el.offsetLeft
                const scrollLeft = el.scrollLeft
                const onMove = ev => { el.scrollLeft = scrollLeft - (ev.pageX - el.offsetLeft - startX) }
                const onUp = () => { el.style.cursor = 'grab'; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
                window.addEventListener('mousemove', onMove)
                window.addEventListener('mouseup', onUp)
              }}
            >
              <style>{`div::-webkit-scrollbar { display: none; }`}</style>

              {categories[activeTab].services.map((s, i) => (
                <ServiceCard key={`${activeTab}-${i}`} service={s} index={i} />
              ))}

              {/* All Services CTA card */}
              <Link href="/services" className="no-underline flex-shrink-0 w-[260px] block">
                <div
                  className="h-80 bg-orange-500/10 border border-orange-500/30 flex flex-col justify-center items-center text-center p-8 cursor-pointer rounded-sm transition-colors duration-300 hover:bg-orange-500/20"
                >
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                    <ArrowUpRight size={24} color="white" />
                  </div>
                  <h3 className="font-bebas text-2xl tracking-widest text-white leading-tight mb-3">
                    VIEW ALL<br />18 SERVICES
                  </h3>
                  <p className="font-barlow font-light text-[var(--muted)] text-xs leading-relaxed">
                    Explore our complete production catalogue
                  </p>
                </div>
              </Link>
            </div>

            {/* Progress dots */}
            <div className="flex gap-1.5 mt-2">
              {categories[activeTab].services.map((_, i) => (
                <div
                  key={i}
                  className="h-0.5 rounded-sm bg-orange-500 transition-all duration-300"
                  style={{ width: i === 0 ? 24 : 6, background: i === 0 ? 'var(--orange)' : 'rgba(255,255,255,0.15)' }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA bar ── */}
        <div className="mt-16 flex justify-between items-center flex-wrap gap-8 p-10 bg-[var(--navy-mid)] border-l-[3px] border-orange-500">
          <p className="font-bebas text-[clamp(1.25rem,2.5vw,2rem)] tracking-widest text-white">
            NOT SURE WHICH SERVICE FITS YOUR{' '}
            <span className="text-orange-500">VISION?</span>
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact">
              <button className="btn-primary">Book a Consultation</button>
            </Link>
            <Link href="/services">
              <button className="btn-outline">Browse All Services</button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}