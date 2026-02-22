'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const whyPoints = [
  {
    n: '01',
    stat: '80%',
    label: 'Higher Conversion',
    title: 'Video Converts Better Than Any Other Format',
    body: 'Landing pages with video convert up to 80% more than those without. Viewers retain 95% of a message from video vs. 10% from text — the numbers make the case.',
  },
  {
    n: '02',
    stat: '3×',
    label: 'More Engagement',
    title: 'Algorithms Reward Video Above Everything',
    body: 'Every major platform — Instagram, LinkedIn, YouTube, Google — actively amplifies video content. Brands that invest in video get 3x more organic reach.',
  },
  {
    n: '03',
    stat: '90%',
    label: 'Trust Uplift',
    title: 'Trust Is Built in the First 8 Seconds',
    body: '90% of customers say video directly influences purchasing decisions. A well-crafted brand film signals credibility before a single word is read.',
  },
  {
    n: '04',
    stat: '∞',
    label: 'Compound Value',
    title: 'A Single Film Works Across Every Channel',
    body: 'One production — cut into ads, reels, testimonials, and more. Video is the highest-ROI asset a brand can create.',
  },
]

export default function WhyVideography() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <section ref={containerRef} className="relative bg-[var(--navy)] overflow-hidden">

      {/* ───────────── TOP STRIP ───────────── */}
      <div className="border-y border-white/[0.05] overflow-hidden py-2 bg-white/[0.02]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex items-center">
              {['80% higher conversion', '3× organic reach', 'Trust built in 8 seconds', 'Highest ROI asset'].map((t, ti) => (
                <span key={ti} className="inline-flex items-center gap-4 px-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  <span className="font-barlow text-[0.7rem] tracking-[0.16em] uppercase text-white/40">{t}</span>
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">

        {/* ───────────── HEADER ───────────── */}
        <div className="pt-16 pb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="eyebrow block mb-4">Why It Matters</span>
            <h2 className="font-bebas text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.95] tracking-[0.04em] text-white">
              WHY BRANDS INVEST<br />
              IN <span className="text-orange-500">VIDEO</span>
            </h2>
          </div>

          <p className="font-barlow font-light text-[0.85rem] text-[var(--muted)] leading-[1.8] max-w-[280px]">
            In today's market, attention is currency. The brands that win are seen, remembered, and trusted.
          </p>
        </div>

        {/* ───────────── MAIN GRID ───────────── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-14 pb-20 items-start">

          {/* LEFT CONTENT */}
          <div>
            {whyPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="py-6 border-b border-white/[0.05]"
              >
                <div className="flex gap-4">

                  {/* Stat */}
                  <div className="shrink-0">
                    <div className="w-[56px] h-[56px] rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <span className="font-bebas text-[1.2rem] text-orange-500">
                        {item.stat}
                      </span>
                    </div>
                    <span className="block mt-2 font-barlow text-[0.55rem] tracking-[0.12em] uppercase text-white/30 text-center">
                      {item.label}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bebas text-[0.7rem] tracking-[0.1em] text-orange-500/60">{item.n}</span>
                      <div className="flex-1 h-px bg-orange-500/10" />
                    </div>

                    <h3 className="font-bebas text-[1rem] tracking-[0.03em] text-white mb-2 leading-tight">
                      {item.title.toUpperCase()}
                    </h3>

                    <p className="font-barlow font-light text-[0.82rem] text-[var(--muted)] leading-[1.8] max-w-[480px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="pt-8">
              <button className="btn-primary">
                See How We Apply This
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:block">
            <div className="sticky top-24">

              <div className="relative overflow-hidden rounded-lg border border-white/[0.08] shadow-2xl" style={{ aspectRatio: '4/5' }}>
                <motion.div style={{ y: imageY }} className="absolute inset-[-6%]">
                  <Image
                    src="https://images.unsplash.com/photo-1627736619924-ce6c159dedca?w=900&q=85"
                    alt="Videography"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-sm border-t border-white/[0.06]">
                  <p className="font-bebas text-[1rem] tracking-[0.04em] text-white leading-snug">
                    VIDEO IS A <span className="text-orange-500">COMPOUNDING</span> BRAND ASSET.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ───────────── BOTTOM BANNER ───────────── */}
      <div className="relative h-[160px] overflow-hidden border-t border-white/[0.05]">

        <Image
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1920&auto=format&fit=crop"
          alt="Cinematic background"
          fill
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-transparent to-[var(--navy)]" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-bebas text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-[0.05em] text-white leading-tight max-w-2xl"
          >
            THE BRANDS THAT LEAD THEIR MARKET{' '}
            <span className="text-orange-500">SHOW UP ON SCREEN.</span>
          </motion.p>
        </div>
      </div>

    </section>
  )
}