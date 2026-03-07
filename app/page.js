'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PlayCircle, ArrowRight, Smartphone, MessageSquare, Layers, Info, Video } from 'lucide-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '@/components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = dynamic(() => import('@/components/homeservice'), { ssr: false })
const ProcessSection = dynamic(() => import('@/components/process'), { ssr: false })
const TestimonialSection = dynamic(() => import('@/components/testimonials'), { ssr: false })
// const WhyVideography = dynamic(() => import('@/components/whyvideo'), { ssr: false })
const AgencyPillars = dynamic(() => import('@/components/aboutagency/page'), { ssr: false })
const OurWork = dynamic(() => import('@/components/ourwork'), { ssr: false })

// ── Animation variants ──
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

// ── Data ──
const logos = [
  '/companies/Arise.png',
  '/companies/Fulcrum.png',
  '/companies/Hammad.png',
  '/companies/microsoft.png',
  '/companies/byjus.png',
  '/companies/balance.png',
  '/companies/edwise.png',
  '/companies/flind.png',
  '/companies/kundlas.png',
  '/companies/sarvam.svg',
  '/companies/jc.png',
  '/companies/ew.png',
  '/companies/fondocom.png',
  '/companies/11.png',
  '/companies/dr.png',
  '/companies/k.png',
  '/companies/t.png',
]

const equipmentList = [
  {
    title: 'Sony FX3',
    desc: 'Full-frame cinema camera with 4K 120fps capability and S-Cinetone colour science.',
    image: '/equip/sonyfx3.png'
  },
  {
    title: 'Dji air 3s drone',
    desc: 'High resolution aerial photography and videography.',
    image: '/equip/drone.png'
  },
  {
    title: 'Sony A7 IV',
    desc: 'Hybrid mirrorless system for high-resolution stills and cinematic video.',
    image: '/equip/sonyaz.png'
  },
  {
    title: 'Sony A7 III',
    desc: 'Reliable full-frame performance for commercial and event productions.',
    image: '/equip/sonya73.png'
  },
  {
    title: '20mm Skylume Lens',
    desc: 'Ultra-wide perspective ideal for immersive cinematic compositions.',
    image: '/equip/20mmrb.png'
  },
  {
    title: '24mm Skylume Lens',
    desc: 'Versatile focal length for dynamic storytelling and interior coverage.',
    image: '/equip/24mmrb.png'
  },
  {
    title: '50mm Skylume Lens',
    desc: 'Natural perspective with beautiful depth and subject separation.',
    image: '/equip/50mmrb.png'
  },

  {
    title: 'Dji Rs4 gimbal',
    desc: 'Stabilizes camera movements for smooth and professional video.',
    image: '/equip/gimbal.png'
  },
]

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', details: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: null })
  const [showAllEquip, setShowAllEquip] = useState(false)
  const parallaxRef = useRef(null)

  useEffect(() => {
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // Force refresh ScrollTrigger after a slight delay to ensure all 
    // components (OurWork, Services, etc.) have calculated their real height
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        let errorMessage = 'Something went wrong';
        try {
          const errorData = await res.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonErr) {
          errorMessage = `Server Error: ${res.status}`;
        }
        throw new Error(errorMessage);
      }

      setStatus({ loading: false, success: true, error: null })
      setFormData({ name: '', email: '', phone: '', projectType: '', details: '' })
    } catch (err) {
      console.error('Submission Error:', err);
      // Handle the "Failed to fetch" error specifically
      const msg = err.message === 'Failed to fetch'
        ? 'Network error: Please check your connection or try again later.'
        : err.message;
      setStatus({ loading: false, success: false, error: msg });
    }
  }

  return (
    <div className="bg-background text-foreground">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="hero-section relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div ref={parallaxRef} className="absolute inset-0 z-0 scale-110">

          {/* Video Background - Self-hosted for performance */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            >
              <source src="https://ewxi2xhm73cm53ki.public.blob.vercel-storage.com/bts4.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Cinematic Shade - Multi-layer overlay for depth */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >
          {/* Headline — Grouped for better alignment and responsive scaling */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 180, scale: 0.5, rotate: -15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{
                delay: 0.8,
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="mb-4 relative z-0 pointer-events-none"
            >
              <Image
                src="/about/logow.png"
                alt="Skylume Logo"
                width={80}
                height={80}
                className="opacity-80 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                style={{ height: 'auto' }}
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.08em' }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 font-inter text-[clamp(3.5rem,10vw,5rem)] font-black leading-none uppercase leading-[0.9] text-white"
            >
              SKYLUME
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30, letterSpacing: '0.6em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.3em' }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 font-inter text-[clamp(1.2rem,4vw,2rem)] font-bold tracking-[0.3em] uppercase text-white/80 mt-4"
            >
              PRODUCTION
            </motion.h2>
          </div>

          {/* Eyebrow / Location / Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="flex flex-col items-center justify-center gap-4 mb-8"
          >
            <span className="font-inter text-[11px] md:text-[14px] font-semibold tracking-[0.5em] uppercase text-white/60">
              Dubai &bull; India &bull; UAE
            </span>

            {/* Visually hidden but SEO-rich description */}
            <p className="sr-only">
              Skylume Productions is a premier cinematic video production house in Dubai and India.
              We specialize in high-end brand films, real estate videography, and commercial content
              that scales global brands with precision and impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link href="#ourwork">
              <button className="px-12 py-4 bg-white text-black font-inter font-bold text-[0.8rem] tracking-[0.25em] uppercase transition-all hover:bg-yellow-500 hover:text-white border-none">
                Explore Our Works
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>


      {/* 2. BRAND LOGOS */}
      <ScrollReveal animation="fade-up">
        <section className="py-24 bg-background relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="font-inter text-[12vw] font-black text-white uppercase tracking-[-0.05em] leading-none text-center"
              style={{
                WebkitTextStroke: "1px rgba(250, 250, 250, 0.5)",
                textShadow: "0 0 20px rgba(250, 250, 250, 0.2)"
              }}
            >
              THE JOURNEY
            </motion.h2>
          </div>

          <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-yellow-500 mb-8 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,215,0,0.35)]">
              <Layers size={14} className="text-white fill-white" />
              <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                Global Partners
              </span>
            </div>
            <h2 className="text-sans text-[clamp(1.2rem,4vw,2.5rem)] font-black leading-[1.1] uppercase tracking-[0.1em] md:tracking-[0.2em] text-white mb-2">
              BRANDS UNDER <span className="text-yellow-500">OUR ROOF</span>
            </h2>
            <div className="w-12 h-px bg-yellow-500/30 mx-auto" />
          </div>

          <div className="relative z-10 w-full">
            <div className="flex overflow-hidden py-10">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
                className="flex items-center gap-16 md:gap-32 whitespace-nowrap px-12"
              >
                {[...logos, ...logos].map((logo, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-center group"
                  >
                    <div className="relative h-20 md:h-24 w-40 md:w-56 transition-all duration-500 scale-90 group-hover:scale-105 opacity-80 brightness-125 group-hover:opacity-100 group-hover:brightness-150">
                      <Image
                        src={logo}
                        alt={`Client Logo ${i}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 128px, 192px"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <OurWork />
      </ScrollReveal>

      {/* 4. ABOUT THE STUDIO */}
      <ScrollReveal animation="fade-up">
        <section className=" bg-background overflow-hidden border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-10 lg:gap-15 items-start">

              {/* Left Content */}
              <div className="sticky flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)]">
                  <Info size={14} className="text-white fill-white/20" />
                  <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                    About the Studio
                  </span>
                </div>
                <h2 className="text-section-title text-white mb-4 uppercase">
                  BUILT AROUND <span className="text-yellow-500">STORY,</span> EXECUTION AND DETAIL.
                </h2>
                <div className="w-6 h-px bg-yellow-500 mb-6 lg:mb-10" />
                <p className="font-inter font-light text-[1.05rem] text-center lg:text-justify text-white/90 leading-[1.8] tracking-wide mb-8 lg:mb-10">
                  Skylume Productions was built on a simple belief - <span className=" font-semibold">Every frame must serve a purpose.</span>
                  We don’t create content for attention. We create visuals that drive meaning, memory, and measurable impact.
                  From concept to post-production, every detail is engineered with clarity, discipline, and cinematic precision.
                  As we expand from India to Dubai, our philosophy remains unchanged
                </p>

                <Link href="/about">
                  <button className="font-inter font-bold text-[0.8rem] tracking-[0.2em] text-white border border-yellow-500 px-8 py-3 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]">
                    Our Journey →
                  </button>
                </Link>
              </div>

              {/* Right Pillars - 3 Column Grid */}
              <div className="relative mt-12 lg:mt-0">
                <AgencyPillars />

                {/* Added Tagline below the grid */}
                <div className="mt-8 lg:mt-12 flex items-center justify-center lg:justify-end gap-3 group">
                  <div className="hidden lg:block w-1 h-7 bg-yellow-500 transition-all duration-300 group-hover:h-9" />
                  <p className="font-inter text-[0.9rem] md:text-[1.1rem] tracking-[0.1em] text-white/50 uppercase text-center lg:text-right leading-tight">
                    Craft work that cuts through noise — <br className="lg:hidden" />
                    <span className="text-yellow-500 font-medium">and elevates brands with intention.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* <WhyVideography /> */}

      <ScrollReveal animation="fade-up">
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <ProcessSection />
      </ScrollReveal>

      {/* 8. EQUIPMENT */}
      <ScrollReveal animation="fade-up">
        <section className="py-24 bg-background relative overflow-hidden rounded-[2.5rem] md:rounded-[4.5rem] mx-4 md:mx-8">
          {/* Section Background Image with a slight scale effect */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/equip/equipmentsmain.jpeg"
              alt="Equipment Background"
              fill
              className="object-cover saturate-0 brightness-110"
            />
          </div>

          <div className="max-w-[1300px] mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)] mx-auto">
                <Video size={14} className="text-white fill-white/20" />
                <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                  Our Arsenal
                </span>
              </div>

              <h2 className="text-section-title text-white mb-8 uppercase">
                CINEMA-GRADE <span className="text-yellow-500 italic">TOOLS.</span><br />
                PROFESSIONAL OUTPUT.
              </h2>

              <p className="font-inter font-light text-[1.1rem] text-white/70 leading-relaxed max-w-2xl mx-auto">
                We operate with high-performance cinema systems and professional optics,
                ensuring every frame delivers uncompromising quality and cinematic depth.
              </p>
            </div>

            {/* Equipment Grid */}
            <ScrollReveal animation="stagger-list" stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {equipmentList.slice(0, showAllEquip ? equipmentList.length : 6).map((item, i) => (
                  <div
                    key={item.title}
                    className="group relative bg-[#0a0a0a]/80 hover-lift backdrop-blur-xl border border-white/5 p-8 rounded-[1.5rem] hover:border-yellow-500/40 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] text-center md:text-center"
                  >
                    {/* Image Wrap */}
                    <div className="relative h-64 w-full mb-10 flex items-center justify-center">
                      <div className="absolute inset-0 bg-yellow-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-1000 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="font-inter font-bold text-[1.8rem] tracking-tight text-white mb-4 group-hover:text-yellow-500 transition-colors duration-500 uppercase">
                        {item.title}
                      </h3>
                      <p className="font-inter font-light text-[1rem] text-white/40 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {!showAllEquip && equipmentList.length > 6 && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setShowAllEquip(true)}
                  className="font-inter font-bold text-[0.8rem] tracking-[0.2em] text-white border border-yellow-500 px-10 py-4 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
                >
                  See More →
                </button>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <TestimonialSection />
      </ScrollReveal>

      {/* 10. CONTACT FORM */}
      <ScrollReveal animation="fade-up">
        <section className="pt-24 md:pt-32 pb-16 bg-background relative overflow-hidden">

          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">

              {/* Left Side: Image & Info */}
              <div className="relative group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/contact.jpeg"
                    alt="Contact Skylume"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlay Info */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <h3 className="text-white font-black text-2xl uppercase mb-2 tracking-tight">
                      LET'S BUILD YOUR <br />
                      <span className="text-yellow-500">LEGACY.</span>
                    </h3>
                    <p className="text-white/60 font-inter text-sm leading-relaxed max-w-xs">
                      Join the list of global brands that trust Skylume for high-impact cinematic storytelling.
                    </p>
                  </div>
                </div>

                {/* Refined Small CTAs below image for desktop, or inside for aesthetic */}
                <div className="flex gap-6 mt-8">
                  <a href="mailto:info@skylumeproduction.com" className="group flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                      <MessageSquare size={14} />
                    </div>
                    <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white/40 group-hover:text-white transition-colors">info@skylumeproduction.com</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="mb-10 w-full">
                  <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 transition-all duration-300">
                    <MessageSquare size={12} className="text-yellow-500" />
                    <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-yellow-500">
                      Direct Briefing
                    </span>
                  </div>

                  <h2 className="text-white font-black uppercase leading-[1.1] mb-5
                             text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
                    FUEL YOUR <span className="text-yellow-500 italic underline decoration-white/10 underline-offset-8">NEXT VISION</span>
                  </h2>

                  <p className="font-inter text-white/50 text-[0.9rem] leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Drop us a line about your production requirements. Our directors will
                    review and get back within 24 business hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="bg-pf-card/20 border border-white/5 p-8 md:p-10 rounded-2xl backdrop-blur-sm shadow-2xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                      { label: 'Work Email', name: 'email', type: 'email', placeholder: 'john@company.com' },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+971 50 000 0000' },
                      { label: 'Project Type', name: 'projectType', type: 'text', placeholder: 'e.g. Brand Film, Campaign' },
                    ].map(({ label, name, type, placeholder }) => (
                      <div key={name} className="flex flex-col">
                        <label className="font-inter text-[0.6rem] tracking-[0.15em] uppercase text-yellow-500/80 font-bold mb-2.5">
                          {label}
                        </label>
                        <input
                          required
                          type={type}
                          name={name}
                          value={formData[name]}
                          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                          placeholder={placeholder}
                          className="bg-white/5 border border-white/10 text-white p-4 rounded-xl font-inter text-[0.9rem] outline-none transition-all focus:border-yellow-500 focus:bg-white/10"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <label className="font-inter text-[0.6rem] tracking-[0.15em] uppercase text-yellow-500/80 font-bold mb-2.5 block">
                      Brief Overview
                    </label>
                    <textarea
                      required
                      name="details"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about your objectives, timeline, and references..."
                      rows={4}
                      className="bg-white/5 border border-white/10 text-white p-4 rounded-xl font-inter text-[0.9rem] outline-none transition-all focus:border-yellow-500 focus:bg-white/10 resize-none w-full"
                    />
                  </div>

                  <button
                    disabled={status.loading}
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-xl bg-yellow-500 transition-all duration-300 hover:bg-yellow-400 active:scale-[0.98]"
                  >
                    <div className="relative font-inter font-bold uppercase text-black py-4
                                text-[0.75rem] tracking-[0.15em] flex items-center justify-center gap-3">
                      {status.loading ? 'Transmitting...' : 'Initiate Briefing'}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Status messages */}
                  <div className="min-h-[24px] mt-4 text-center">
                    {status.success && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-inter text-xs">
                        Briefing received. We'll contact you shortly.
                      </motion.p>
                    )}
                    {status.error && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-inter text-xs">
                        {status.error}
                      </motion.p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
