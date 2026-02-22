'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const videos = [
  {
    url: 'https://drive.google.com/file/d/15ujpOoH9IkH3jXVFn534ms0vlEwvWG4S/preview',
    name: 'Client Name',
    company: 'Company Name',
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=15ujpOoH9IkH3jXVFn534ms0vlEwvWG4S',
    name: 'Client Name',
    company: 'Company Name',
  }
]

export default function TestimonialSection() {
  return (
    <section className="py-32 bg-[var(--navy-mid)]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
          <div>
            <span className="eyebrow block mb-4">Client Feedback</span>
            <h2 className="font-bebas text-[clamp(2.2rem,4.5vw,4rem)] leading-[0.95] tracking-[0.04em] text-white">
              REAL CLIENT<br />
              <span className="text-orange-500">EXPERIENCE</span>
            </h2>
          </div>

          <Link href="/testimonials">
            <button className="btn-outline">
              View All
            </button>
          </Link>
        </div>

        {/* Vertical Video Grid */}
        <div className="grid sm:grid-cols-2 gap-12 justify-center">

          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Video Frame */}
              <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-xl overflow-hidden border border-white/10 shadow-2xl">

                <video
                  src={video.url}
                  controls
                  className="w-full h-full object-cover"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <p className="font-bebas text-lg tracking-[0.05em] text-white">
                  {video.name}
                </p>
                <p className="font-barlow-condensed text-[0.65rem] tracking-[0.18em] uppercase text-orange-500/60 mt-1">
                  {video.company}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}