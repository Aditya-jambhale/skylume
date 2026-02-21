'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PlayCircle, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Testimonials() {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'podcast', 'commercial', 'events', 'social media']

  const testimonials = [
    {
      category: 'commercial',
      clientName: 'Sarah Johnson',
      company: 'TechVision Inc.',
      testimonial: 'Working with PrimeFrame Productions transformed our brand presence. The attention to detail and cinematic quality exceeded our expectations.',
      video: true
    },
    {
      category: 'events',
      clientName: 'Mohammed Al-Rashid',
      company: 'Dubai Events Co.',
      testimonial: 'Their event coverage was exceptional. They captured every important moment with professional precision and delivered ahead of schedule.',
      video: true
    },
    {
      category: 'podcast',
      clientName: 'Priya Sharma',
      company: 'The Growth Podcast',
      testimonial: 'The editing quality and turnaround time are unmatched. Our podcast production has never been better.',
      video: false
    },
    {
      category: 'commercial',
      clientName: 'David Chen',
      company: 'Luxury Real Estate',
      testimonial: 'The property walkthroughs they created helped us sell premium listings faster. Absolutely world-class work.',
      video: true
    },
    {
      category: 'social media',
      clientName: 'Aisha Khan',
      company: 'Fashion Brand',
      testimonial: 'Our Instagram engagement tripled after working with PrimeFrame. Their understanding of social media content is exceptional.',
      video: false
    },
    {
      category: 'events',
      clientName: 'Robert Martinez',
      company: 'Corporate Solutions',
      testimonial: 'They covered our annual conference with multiple camera setups and delivered a highlight reel that captured the energy perfectly.',
      video: true
    }
  ]

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter)

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Work That Speaks Before We Do
            </h1>
            <p className="text-xl text-neutral-400">
              Hear from brands and creators we've worked with across India, Dubai, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={filter === category ? 'bg-white text-black' : 'border-neutral-700 text-neutral-300 hover:bg-neutral-900'}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111111] border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors"
              >
                {testimonial.video && (
                  <div className="aspect-video bg-neutral-900 rounded-xl mb-6 flex items-center justify-center group cursor-pointer hover:bg-neutral-800 transition-colors">
                    <PlayCircle size={64} className="text-neutral-700 group-hover:text-white transition-colors" />
                  </div>
                )}
                
                <Quote className="text-neutral-700 mb-4" size={32} />
                
                <p className="text-neutral-300 leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="border-t border-neutral-800 pt-4">
                  <p className="font-semibold text-white">{testimonial.clientName}</p>
                  <p className="text-sm text-neutral-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Leading Brands
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-neutral-900 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <span className="text-neutral-600 text-xs font-semibold">CLIENT LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Let's create something exceptional together.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
