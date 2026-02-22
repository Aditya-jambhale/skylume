'use client'

import { motion } from 'framer-motion'

/* ─────────────────────────────────────────
   Step-specific SVG Icons
───────────────────────────────────────── */

const DiscoveryIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="31" y1="31" x2="42" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="18" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="22" y1="18" x2="22" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const ScriptIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect x="8" y="6" width="28" height="36" rx="4" stroke="currentColor" strokeWidth="2.5"/>
    <line x1="15" y1="16" x2="29" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="22" x2="29" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="28" x2="23" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 34 L36 30 L42 36 L38 40 L32 34Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="36" y1="30" x2="38" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const PreProdIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    {/* Location pin */}
    <path d="M24 6C17.9 6 13 10.9 13 17C13 25.5 24 42 24 42C24 42 35 25.5 35 17C35 10.9 30.1 6 24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="24" cy="17" r="4.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const ProductionIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    {/* Video camera */}
    <rect x="4" y="14" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M30 18L44 12V36L30 30V18Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="14" cy="24" r="4" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
)

const PostProdIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    {/* Monitor with timeline */}
    <rect x="4" y="6" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <line x1="4" y1="34" x2="44" y2="34" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="18" y1="42" x2="30" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="34" x2="24" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Timeline bars inside monitor */}
    <rect x="10" y="18" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="20" y="14" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="30" y="20" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const DeliveryIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    {/* Upload/send arrow */}
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
    <line x1="24" y1="32" x2="24" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <polyline points="16,23 24,15 32,23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="33" x2="32" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

/* ─────────────────────────────────────────
   Background SVG Illustrations (white)
───────────────────────────────────────── */

const BgCamera = ({ className }) => (
  <svg className={className} viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="70" width="160" height="120" rx="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="140" cy="130" r="42" stroke="currentColor" strokeWidth="2"/>
    <circle cx="140" cy="130" r="26" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="140" cy="130" r="12" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="80" y="42" width="55" height="30" rx="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="107" cy="57" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="155" y="42" width="55" height="30" rx="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="182" cy="57" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M116 57 Q138 46 155 57" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="220" y="85" width="42" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="68" y="188" width="24" height="45" rx="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="148" y="188" width="24" height="45" rx="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="22" y="90" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="22" y="116" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="22" y="142" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
)

const BgReel = ({ className }) => {
  const r2d = Math.PI / 180
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="2"/>
      <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="2"/>
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const x1 = 100 + 28 * Math.cos(deg * r2d), y1 = 100 + 28 * Math.sin(deg * r2d)
        const x2 = 100 + 56 * Math.cos(deg * r2d), y2 = 100 + 56 * Math.sin(deg * r2d)
        const cx = 100 + 73 * Math.cos(deg * r2d), cy = 100 + 73 * Math.sin(deg * r2d)
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5"/>
            <circle cx={cx} cy={cy} r="12" stroke="currentColor" strokeWidth="1.5"/>
          </g>
        )
      })}
    </svg>
  )
}

const BgTripod = ({ className }) => (
  <svg className={className} viewBox="0 0 180 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="55" y="18" width="70" height="48" rx="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="90" cy="42" r="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="90" cy="42" r="7" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="118" y="26" width="22" height="10" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="90" y1="66" x2="90" y2="120" stroke="currentColor" strokeWidth="2.5"/>
    <line x1="90" y1="120" x2="22" y2="260" stroke="currentColor" strokeWidth="2"/>
    <line x1="90" y1="120" x2="90" y2="268" stroke="currentColor" strokeWidth="2"/>
    <line x1="90" y1="120" x2="158" y2="260" stroke="currentColor" strokeWidth="2"/>
    <line x1="42" y1="192" x2="138" y2="192" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="22" cy="262" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="90" cy="270" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="158" cy="262" r="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const BgClapper = ({ className }) => (
  <svg className={className} viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="55" width="204" height="110" rx="8" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="22" width="204" height="36" rx="6" stroke="currentColor" strokeWidth="2" transform="rotate(-4 18 22)"/>
    {[0,1,2,3,4,5,6,7].map(i => (
      <line key={i} x1={26 + i * 28} y1="22" x2={38 + i * 28} y2="58" stroke="currentColor" strokeWidth="1.5" transform="rotate(-4 18 22)"/>
    ))}
    <line x1="18" y1="88" x2="222" y2="88" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="35" y="100" width="80" height="8" rx="2" stroke="currentColor" strokeWidth="1"/>
    <rect x="35" y="120" width="55" height="8" rx="2" stroke="currentColor" strokeWidth="1"/>
    <rect x="35" y="140" width="65" height="8" rx="2" stroke="currentColor" strokeWidth="1"/>
  </svg>
)

/* ─────────────────────────────────────────
   Step Data
───────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Discovery & Briefing',
    desc: 'We understand your brand\'s mission, goals, target audience, and visual tone to define a clear creative direction.',
    Icon: DiscoveryIcon,
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&fit=crop',
  },
  {
    n: '02',
    title: 'Script & Concept',
    desc: 'Our writers craft a compelling story and structured script tailored to your message and audience.',
    Icon: ScriptIcon,
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&fit=crop',
  },
  {
    n: '03',
    title: 'Pre-Production',
    desc: 'We handle location scouting, casting, production design, and scheduling for a smooth shoot day.',
    Icon: PreProdIcon,
   img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&fit=crop',
  },
  {
    n: '04',
    title: 'Production',
    desc: 'Our crew brings the vision to life using industry-grade cameras and professional on-set direction.',
    Icon: ProductionIcon,
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80&fit=crop',
  },
  {
    n: '05',
    title: 'Post-Production',
    desc: 'Editing, colour grading, sound design and motion graphics refined for maximum engagement.',
    Icon: PostProdIcon,
    img: 'https://images.unsplash.com/photo-1581090700227-4c4f50e48e2b?w=800&q=80&fit=crop',
  },
  {
    n: '06',
    title: 'Delivery & Deploy',
    desc: 'Final formats optimised for web, social, and broadcast — with publishing support if needed.',
    Icon: DeliveryIcon,
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80&fit=crop',
  },
]

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-[var(--navy)] overflow-hidden">

      {/* ── Background Illustrations ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* <BgCamera  className="absolute -bottom-4 -left-6 w-72 h-52 text-white/[0.07]" /> */}
        {/* <BgReel    className="absolute top-6 right-[40%] w-36 h-36 text-white/[0.05] rotate-12" /> */}
        <BgTripod  className="absolute bottom-0 right-20 w-28 h-44 text-white/[1]" />
        <BgClapper className="absolute top-16 left-40 w-48 h-36 text-white/[1] -rotate-6" />
        {/* <BgReel    className="absolute -top-4 left-12 w-24 h-24 text-white/[1] -rotate-12" /> */}
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="eyebrow block mb-4">How We Work</span>
          <h2 className="font-bebas text-[clamp(2.4rem,6vw,4.5rem)] tracking-[0.04em] text-white leading-[0.95]">
            OUR <span className="text-orange-500">PRODUCTION</span><br />PROCESS
          </h2>
        </motion.div>

       {/* ── Steps Grid ── */}
<div className="relative">

  {/* Horizontal connector line — desktop only */}
  <div
    className="hidden lg:block absolute top-[80px] left-0 right-0 h-px bg-white/[0.08] z-0"
    aria-hidden="true"
  />

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-4">
    {steps.map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
          duration: 0.8,
          delay: i * 0.12,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true, margin: '-40px' }}
        whileHover={{ y: -6 }}
        className="relative group flex flex-col transition-all duration-500"
      >

        {/* ── Image card ── */}
        <div className="relative overflow-hidden rounded-xl mb-5"
             style={{ aspectRatio: '4/3' }}>

          {/* Image */}
          <motion.img
            src={step.img}
            alt={step.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{ filter: ' brightness(1)' }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Orange left accent bar — animated glow */}
          <motion.div
            className="absolute top-0 left-0 w-[3px] h-full bg-orange-500"
            whileHover={{
              boxShadow: '0 0 15px rgba(249,115,22,0.6)'
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Ghost step number */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.18, y: 0 }}
            transition={{ delay: i * 0.12 + 0.3 }}
            className="absolute bottom-1 left-3 font-bebas text-[4rem] sm:text-[3.5rem] leading-none text-white select-none"
          >
            {step.n}
          </motion.span>

          {/* Icon */}
          <motion.div
            className="absolute top-3 right-3 w-10 h-10 rounded-lg
                       bg-orange-500/20 border border-orange-500/40
                       backdrop-blur-sm flex items-center justify-center text-orange-400"
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          >
            <step.Icon />
          </motion.div>

          {/* Timeline connector */}
          <div className="hidden xl:flex absolute -bottom-[2.6rem] left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-10">
            <motion.div
              className="w-px h-5 bg-white/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ originY: 0 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-500/20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: i * 0.12 + 0.2 }}
            />
          </div>
        </div>

        {/* ── Text ── */}
        <div className="xl:pt-8 transition-all duration-300 group-hover:translate-y-1">

          <div className="flex items-center gap-2 mb-2">
            <span className="font-bebas text-orange-500 text-sm tracking-widest">
              {step.n}
            </span>
            <motion.div
              className="flex-1 h-px bg-orange-500/25"
              whileHover={{ scaleX: 1.1 }}
              transition={{ duration: 0.4 }}
              style={{ originX: 0 }}
            />
          </div>

          <h3 className="font-bebas text-[1rem] tracking-[0.05em] text-white mb-2 uppercase leading-tight transition-colors duration-300 group-hover:text-orange-400">
            {step.title}
          </h3>

          <p className="font-barlow font-light text-[0.72rem] text-[var(--muted)] leading-[1.75] transition-colors duration-300 group-hover:text-white/70">
            {step.desc}
          </p>
        </div>

        {/* Mobile arrow */}
        {i < steps.length - 1 && (
          <motion.div
            className="flex sm:hidden items-center justify-center py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 + 0.4 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="10" y1="2" x2="10" y2="14"
                stroke="rgba(249,115,22,0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="3 2"
              />
              <polyline
                points="5,11 10,16 15,11"
                stroke="rgba(249,115,22,0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}

      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}