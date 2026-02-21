'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function About() {
  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      content: 'During college, in the middle of uncertainty and lockdowns, Yusuf began exploring ways to earn independently. Without clarity on placements or traditional career paths, he turned to research — learning about freelancing platforms and digital opportunities. The first attempts were not successful. But the curiosity remained.'
    },
    {
      year: '2020',
      title: 'Discovering Podcast Editing',
      content: 'At a time when podcasts were just beginning to grow, Yusuf noticed a trend — long-form conversations were gaining attention. Instead of waiting for opportunity, he learned the craft himself. Through YouTube tutorials and constant experimentation, he built his foundation in editing. For nearly two years, he focused on mastering one thing: Structured, engaging podcast editing.'
    },
    {
      year: '2021',
      title: 'The First Clients',
      content: 'The first breakthrough came through online communities. A small opportunity turned into consistent work. One project became weekly collaborations. Weekly collaborations became long-term relationships. Consistency replaced uncertainty.'
    },
    {
      year: '2022',
      title: 'Expanding Through Freelancing Platforms',
      content: 'With growing confidence, Yusuf expanded to platforms like Upwork and Fiverr. Podcast editing became a structured service. Clients from different countries began trusting his process. What started as freelance work slowly became a professional discipline.'
    },
    {
      year: '2024',
      title: 'Transition into Videography',
      content: 'Editing built technical strength. But videography sparked something deeper. A documentary shoot marked a turning point. Handling camera, composition, lighting, and storytelling on ground shifted perspective. It was no longer just post-production. It was full-scale production.'
    },
    {
      year: '2024',
      title: 'Real-World Shoots & Expansion',
      content: 'From documentary shoots to client productions across cities, the transition became permanent. The passion for visual storytelling met structured execution. Videography was no longer experimentation. It was direction.'
    },
    {
      year: '2025',
      title: 'Building PrimeFrame Productions',
      content: 'As client work expanded, so did responsibility. Instead of remaining a solo freelancer, Yusuf began building a team. Developers. Designers. Editors. Management support. Today, PrimeFrame operates as a structured production house — combining editing expertise with cinematic production.'
    }
  ]

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Image
                    src="https://images.unsplash.com/photo-1615702669705-0d3002c6801c?w=800"
                    alt="Founder portrait"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full"
                  />
                  <p className="text-xs text-neutral-700 mt-2 italic">
                    /* Replace with actual founder image */
                  </p>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1584940120505-117038d90b05?w=400"
                  alt="Behind the scenes"
                  width={280}
                  height={280}
                  className="rounded-2xl"
                />
                <Image
                  src="https://images.pexels.com/photos/10657877/pexels-photo-10657877.jpeg?w=400"
                  alt="Production work"
                  width={280}
                  height={280}
                  className="rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                From Freelancing to Building a Production House
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                What began as curiosity during college turned into a structured journey of skill, 
                discipline, and storytelling. PrimeFrame is not the result of overnight success — 
                it is the result of years spent learning, adapting, and executing consistently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-4 bg-[#111111] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="timeline-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#1A1A1A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#timeline-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Journey</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              A honest progression from uncertainty to structured execution
            </p>
          </motion.div>

          {/* Desktop: Zig-zag timeline */}
          <div className="hidden md:block space-y-32">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2 md:text-right' : ''}>
                  <div className="relative">
                    <span className="text-8xl md:text-9xl font-bold text-neutral-900 opacity-20 absolute -top-12 ${index % 2 === 1 ? '-right-8' : '-left-8'}">
                      {item.year}
                    </span>
                    <div className="relative z-10 bg-black border border-neutral-800 rounded-2xl p-8">
                      <div className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 border-l-2 border-neutral-800"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-white rounded-full" />
                <div className="bg-black border border-neutral-800 rounded-2xl p-6">
                  <span className="text-5xl font-bold text-neutral-900 opacity-30 block mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Vision Behind PrimeFrame
            </h2>
            <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
              <p>
                To build a production agency that competes globally while staying grounded in 
                storytelling and execution.
              </p>
              <p>
                To combine editing precision with cinematic production.
              </p>
              <p>
                To ensure that every frame serves purpose — not just aesthetics.
              </p>
              <p className="text-white font-semibold text-xl pt-4">
                PrimeFrame is built on structure, consistency, and creative clarity. The goal is simple: 
                Produce work that represents brands at their highest standard.
              </p>
            </div>
            <div className="mt-12">
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                Start Your Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
