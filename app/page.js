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
      })
      if (res.ok) {
        setStatus({ loading: false, success: true, error: null })
        setFormData({ name: '', email: '', phone: '', projectType: '', details: '' })
      } else {
        const error = await res.json()
        throw new Error(error.message || 'Something went wrong')
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message })
    }
  }

  return (
    <div className="bg-background text-foreground overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="hero-section relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div ref={parallaxRef} className="absolute inset-0 z-0 scale-110">

          {/* Video Background - Hidden on mobile, shown on md+ */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <iframe
              src="https://www.youtube.com/embed/6fySMsilxJQ?autoplay=1&mute=1&loop=1&playlist=6fySMsilxJQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
              title="Skylume Hero Video"
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover "
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Cinematic Shade - Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >
          {/* Headline — Grouped for better alignment and responsive scaling */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <Image
                src="/about/logow.png"
                alt="Skylume Logo"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>
            <h1 className="font-inter text-[clamp(2.5rem,10vw,6rem)] font-black leading-none uppercase tracking-[0.1em] text-white italic">
              SKYLUME
            </h1>
            <h2 className="font-inter text-[clamp(1.5rem,6vw,3rem)] font-bold leading-none uppercase tracking-[0.3em] text-white/90 mt-2">
              PRODUCTION
            </h2>
          </div>

          {/* Eyebrow / Location / Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 mb-12"
          >
            <span className="font-inter text-[11px] md:text-[14px] font-bold tracking-[0.4em] uppercase text-white/80">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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
          <ScrollReveal animation="fade-up">
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
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-in" delay={0.3} className="relative z-10 w-full">
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
        </ScrollReveal>
      </section>
      <OurWork />

      {/* 4. ABOUT THE STUDIO */}
      <section className=" bg-background overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-16 lg:gap-15 items-start">

            {/* Left Content */}
            <ScrollReveal animation="fade-up">
              <div className="sticky ">
                <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)]">
                  <Info size={14} className="text-white fill-white/20" />
                  <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                    About the Studio
                  </span>
                </div>
                <h2 className="text-section-title text-white mb-4 uppercase">
                  BUILT AROUND <span className="text-yellow-500">STORY,</span> EXECUTION AND DETAIL.
                </h2>
                <div className="w-6 h-px bg-yellow-500 mb-10" />
                <p className="font-inter font-light text-[1.05rem] text-justify text-white/90 leading-[1.8] tracking-wide mb-10">
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
            </ScrollReveal>

            {/* Right Pillars - 3 Column Grid */}
            <div className="relative">
              <AgencyPillars />

              {/* Added Tagline below the grid */}
              <ScrollReveal animation="fade-up" delay={0.4}>
                <div className="mt-12 flex items-center justify-end gap-3 group">
                  <div className="w-1 h-7 bg-yellow-500  transition-all duration-300 group-hover:h-9" />
                  <p className="font-inter text-[0.95rem] md:text-[1.1rem] tracking-[0.1em] text-white/50 uppercase text-right leading-tight">
                    Craft work that cuts through noise — <br className="md:hidden" />
                    <span className="text-yellow-500 font-medium">and elevates brands with intention.</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* <WhyVideography /> */}

      <ServicesSection />

      <ProcessSection />

      {/* 8. EQUIPMENT */}
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
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)] mx-auto">
                <Video size={14} className="text-white fill-white/20" />
                <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                  Our Arsenal
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <h2 className="text-section-title text-white mb-8 uppercase">
                CINEMA-GRADE <span className="text-yellow-500 italic">TOOLS.</span><br />
                PROFESSIONAL OUTPUT.
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <p className="font-inter font-light text-[1.1rem] text-white/70 leading-relaxed max-w-2xl mx-auto">
                We operate with high-performance cinema systems and professional optics,
                ensuring every frame delivers uncompromising quality and cinematic depth.
              </p>
            </ScrollReveal>
          </div>

          {/* Equipment Grid */}
          <ScrollReveal animation="stagger-list" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {equipmentList.slice(0, showAllEquip ? equipmentList.length : 6).map((item, i) => (
                <div
                  key={item.title}
                  className="group relative bg-[#0a0a0a]/80 hover-lift backdrop-blur-xl border border-white/5 p-10 rounded-[2rem] hover:border-yellow-500/40 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
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

      <TestimonialSection />

      {/* 10. CONTACT FORM */}
      <section className="py-32 bg-background relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

        <div className="max-w-[840px] mx-auto px-6">
          <div className="mb-16 text-center">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)] mx-auto">
                <MessageSquare size={14} className="text-white fill-white/20" />
                <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                  Reach Out to us
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <h2 className="text-section-title text-white leading-[0.9] mb-6 uppercase">
                LET'S FUEL YOUR<br /><span className="text-yellow-500">NEXT VISION</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <p className="font-inter font-light text-[1rem] text-white/90 max-w-lg mx-auto leading-relaxed">
                Drop us a line about your production requirements. Our directors will review and get back within 24 business hours.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.4}>
            <form onSubmit={handleSubmit} className="bg-pf-card/30 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Work Email', name: 'email', type: 'email', placeholder: 'john@company.com' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+971 50 000 0000' },
                  { label: 'Project Type', name: 'projectType', type: 'text', placeholder: 'e.g. Brand Film, Social Campaign' },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name} className="flex flex-col">
                    <label className="font-inter text-[0.6rem] tracking-[0.2em] uppercase text-yellow-500 font-bold block mb-3">
                      {label}
                    </label>
                    <input
                      required
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                      placeholder={placeholder}
                      className="bg-white/5 border border-white/10 text-white p-5 rounded-xl font-inter text-[0.9rem] w-full outline-none transition-all focus:border-yellow-500 focus:bg-white/10"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <label className="font-inter text-[0.6rem] tracking-[0.2em] uppercase text-yellow-500 font-bold block mb-3">
                  Brief Overview
                </label>
                <textarea
                  required
                  name="details"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about your objectives, timeline, and any creative references..."
                  rows={5}
                  className="bg-white/5 border border-white/10 text-white p-5 rounded-xl font-inter text-[0.9rem] w-full outline-none transition-all focus:border-yellow-500 focus:bg-white/10 resize-none"
                />
              </div>

              <button
                disabled={status.loading}
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transition-transform group-hover:scale-105" />
                <div className="relative font-inter text-[0.9rem] font-bold tracking-[0.25em] uppercase text-white py-5 flex items-center justify-center gap-3">
                  {status.loading ? 'Transmitting...' : 'Initiate Briefing'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {status.success && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-inter text-center mt-6 text-sm">
                  Briefing received. Our team will contact you shortly.
                </motion.p>
              )}
              {status.error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-inter text-center mt-6 text-sm">
                  {status.error}
                </motion.p>
              )}
            </form>
          </ScrollReveal>

          {/* Direct Contact CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 overflow-hidden">
            <ScrollReveal animation="slide-right" delay={0.1}>
              <motion.a
                whileHover={{ y: -4 }}
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 py-6 rounded-2xl bg-green-500/5 border border-green-500/20 group hover:border-green-500/40 transition-all shadow-[0_0_30px_rgba(34,197,94,0.05)] w-full"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <Smartphone size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-inter text-[0.6rem] tracking-[0.25em] uppercase text-green-500/60 font-bold mb-0.5">Instant Chat</span>
                  <span className="block font-inter font-black text-xl tracking-wider text-white uppercase">WHATSAPP US</span>
                </div>
              </motion.a>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={0.2}>
              <motion.a
                whileHover={{ y: -4 }}
                href="tel:+971XXXXXXXXX"
                className="flex items-center justify-center gap-4 py-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 group hover:border-yellow-500/40 transition-all shadow-[0_0_30px_rgba(234,179,8,0.05)] w-full"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                  <MessageSquare size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-inter text-[0.6rem] tracking-[0.25em] uppercase text-yellow-500/60 font-bold mb-0.5">Speak with a Director</span>
                  <span className="block font-inter font-black text-xl tracking-wider text-white uppercase">CALL US NOW</span>
                </div>
              </motion.a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
