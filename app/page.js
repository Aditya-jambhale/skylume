'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Camera, 
  Film, 
  Briefcase, 
  Users, 
  Building, 
  Sparkles, 
  Video,
  TrendingUp,
  Globe,
  Lightbulb,
  PlayCircle,
  Palette,
  Box,
  Boxes,
  Smartphone,
  Plane,
  PartyPopper,
  GraduationCap,
  Radio
} from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const services = [
    {
      icon: Camera,
      title: 'Exhibitions, Conference & Trade Show Filming',
      description: 'Capture large-scale events with cinematic precision, multi-camera coverage, and professional audio.',
      href: '/services#trade-show'
    },
    {
      icon: Briefcase,
      title: 'Corporate Films',
      description: 'Brand stories crafted to build authority, trust, and long-term positioning.',
      href: '/services#corporate-films'
    },
    {
      icon: TrendingUp,
      title: 'Promotional Brand Videos',
      description: 'Strategic promotional videos designed to elevate brand perception and drive engagement.',
      href: '/services#brand-videos'
    },
    {
      icon: Users,
      title: 'Executive Interviews',
      description: 'High-quality interview production with cinematic lighting and structured storytelling.',
      href: '/services#executive-interviews'
    },
    {
      icon: Building,
      title: 'Real Estate Product Demo',
      description: 'Luxury property walkthroughs and real estate visuals built to attract premium buyers.',
      href: '/services#real-estate'
    },
    {
      icon: Sparkles,
      title: 'Teaser / Trailer Videos',
      description: 'Short-form cinematic trailers that generate anticipation and audience excitement.',
      href: '/services#trailers'
    },
    {
      icon: Video,
      title: 'Behind The Scenes Videos',
      description: 'Authentic behind-the-scenes coverage that builds brand transparency and connection.',
      href: '/services#bts'
    },
    {
      icon: Film,
      title: 'Event Filming',
      description: 'Full-scale event production for corporate, political, and business gatherings.',
      href: '/services#event-filming'
    },
    {
      icon: PartyPopper,
      title: 'Wedding Videos',
      description: 'Cinematic wedding films designed to preserve memories with elegance and emotion.',
      href: '/services#wedding'
    },
    {
      icon: PartyPopper,
      title: 'Save The Date',
      description: 'Creative pre-wedding cinematic invitations designed for digital sharing.',
      href: '/services#save-the-date'
    },
    {
      icon: GraduationCap,
      title: 'Graduation Videos',
      description: 'Professional coverage for academic milestones and institutional events.',
      href: '/services#graduation'
    },
    {
      icon: Radio,
      title: 'Event AV Setup with Live Feed',
      description: 'Complete AV solutions with real-time broadcasting and live production management.',
      href: '/services#live-av'
    },
    {
      icon: Building,
      title: 'Burj Khalifa Projection',
      description: 'Large-scale projection production and execution for landmark events.',
      href: '/services#burj-projection'
    },
    {
      icon: Smartphone,
      title: 'Social Media Reels',
      description: 'High-impact short-form vertical videos optimized for reach and engagement.',
      href: '/services#reels'
    },
    {
      icon: Palette,
      title: '2D Animation Videos',
      description: 'Custom 2D animated videos for explainers, corporate messaging, and campaigns.',
      href: '/services#2d-animation'
    },
    {
      icon: Box,
      title: '3D Animation Videos',
      description: 'High-end 3D visual production for immersive brand storytelling.',
      href: '/services#3d-animation'
    },
    {
      icon: Globe,
      title: '360 / VR Videos',
      description: 'Immersive virtual experiences designed to elevate digital interaction.',
      href: '/services#vr'
    },
    {
      icon: Plane,
      title: 'Aerial / Drone / Chopper Cinematography',
      description: 'Professional aerial cinematography for real estate, events, and large-scale productions.',
      href: '/services#aerial'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We begin by understanding your brand, audience, and goals. Every successful production starts with clarity.',
      image: 'https://images.unsplash.com/photo-1597421568622-6ce6c2713887?w=800'
    },
    {
      number: '02',
      title: 'Creative Planning',
      description: 'Script development, concept direction, visual mood boards, and execution planning tailored to your vision.',
      image: 'https://images.unsplash.com/photo-1580168500910-a57358352f14?w=800'
    },
    {
      number: '03',
      title: 'Production',
      description: 'Our crew captures cinematic visuals using industry-grade equipment and structured direction.',
      image: 'https://images.unsplash.com/photo-1597421568622-6ce6c2713887?w=800'
    },
    {
      number: '04',
      title: 'Post-Production',
      description: 'Editing, sound design, color grading, and motion graphics crafted for engagement and retention.',
      image: 'https://images.pexels.com/photos/4793163/pexels-photo-4793163.jpeg?w=800'
    },
    {
      number: '05',
      title: 'Delivery & Optimization',
      description: 'Final formats optimized for web, social platforms, ads, and broadcast — ensuring maximum impact.',
      image: 'https://images.unsplash.com/photo-1599706747273-8e6caa20d436?w=800'
    }
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Replace with video in production */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1597421568622-6ce6c2713887?w=1920"
            alt="Cinematic production background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            PrimeFrame Productions
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Working with brands and creators across India, UAE, and US.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
            Explore Our Work
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Client Logo Strap */}
      <section className="py-16 border-y border-neutral-800 overflow-hidden">
        <motion.div {...fadeIn} className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Brands Under Our Roof</h2>
        </motion.div>
        <div className="relative">
          <div className="flex animate-marquee space-x-16">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="text-neutral-500 text-2xl font-bold whitespace-nowrap"
              >
                BRAND LOGO
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Agency */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built Around Story, Execution, and Detail.
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              PrimeFrame Productions was built on a simple belief — <span className="text-white font-semibold">Every frame should serve a purpose.</span>
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed mb-4">
              We combine cinematic production with performance strategy. From planning to post-production, 
              every step is handled with clarity and precision.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              As we scale from India to Dubai, our mission remains the same: 
              Deliver visuals that elevate brands beyond noise.
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Learn About Our Journey →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Videography Matters */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Sticky Image */}
            <div className="md:sticky md:top-32">
              <motion.div {...fadeIn}>
                <Image
                  src="https://images.unsplash.com/photo-1627736619924-ce6c159dedca?w=800"
                  alt="Professional videography equipment"
                  width={600}
                  height={800}
                  className="rounded-2xl"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Why Serious Brands Invest in High-Quality Videography
                </h2>
                <p className="text-xl text-neutral-400">
                  In today's market, attention is currency. The brands that win are the ones 
                  that are seen, remembered, and trusted.
                </p>
              </div>

              <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
                {[
                  {
                    number: '01',
                    title: 'Attention Is Shorter Than Ever',
                    content: 'Your audience scrolls in seconds. If your visuals don\'t immediately communicate quality and clarity, they move on. Professional videography stops the scroll. It signals authority before a single word is spoken.'
                  },
                  {
                    number: '02',
                    title: 'Trust Is Built Visually',
                    content: 'People trust what looks credible. Low-quality production subconsciously signals inexperience. Cinematic production signals structure, reliability, and professionalism. Before someone contacts you — they judge you.'
                  },
                  {
                    number: '03',
                    title: 'Premium Visuals Attract Premium Clients',
                    content: 'High-end videography positions your brand differently. It tells your audience: You take your business seriously. You value presentation. You operate at a higher standard. And premium clients are naturally drawn to premium presentation.'
                  },
                  {
                    number: '04',
                    title: 'Editing Determines Performance',
                    content: 'A video is not just about shooting — it\'s about structure. Retention-focused editing keeps viewers engaged, improves watch time, and increases inquiries and conversions. Good visuals impress. Strategic editing performs.'
                  },
                  {
                    number: '05',
                    title: 'Video Works Across Every Platform',
                    content: 'Your website. Instagram. LinkedIn. YouTube. Paid ads. One strong video becomes multiple strategic assets for growth.'
                  }
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeIn} className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <span className="text-5xl font-bold text-neutral-800">{item.number}</span>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="pt-8 border-t border-neutral-800">
                <p className="text-lg text-neutral-300 italic mb-6">
                  When done correctly, videography is not an expense. It is a brand asset that compounds over time. 
                  That is how we approach every project.
                </p>
                <Button className="bg-white text-black hover:bg-neutral-200">
                  See How We Apply This →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Comprehensive cinematic production services designed for modern brands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={service.href}>
                  <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-8 h-full hover:bg-[#1A1A1A] transition-all duration-300 group">
                    <div className="bg-neutral-900 rounded-xl p-3 w-fit mb-4 group-hover:bg-neutral-800 transition-colors">
                      <service.icon className="text-neutral-400 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-sm text-neutral-500 group-hover:text-white transition-colors">
                      Read More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mt-16 space-y-4">
            <h3 className="text-2xl font-bold">Not Sure Which Service Fits Your Vision?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                Book a Consultation
              </Button>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Explore Full Services →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Equipment. Professional Results.
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                We invest in industry-standard cinema cameras, lighting systems, and professional 
                audio setups to ensure consistency across every project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Replace with actual equipment image */}
              <Image
                src="https://images.unsplash.com/photo-1548552554-ac8ad1b37d6b?w=800"
                alt="Professional video equipment"
                width={600}
                height={400}
                className="rounded-2xl"
              />
              <p className="text-xs text-neutral-600 mt-2 italic">
                /* Replace this placeholder with actual equipment image provided by client */
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background SVG Illustration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A1A1A" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">PROCESS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Production Process</h2>
            <p className="text-lg text-neutral-400">
              A structured workflow designed for clarity, efficiency, and premium results.
            </p>
          </motion.div>

          {/* Desktop: Zig-zag layout */}
          <div className="hidden md:block space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative">
                    <span className="absolute -top-8 -left-8 text-8xl font-bold text-neutral-900 opacity-50">
                      {step.number}
                    </span>
                    <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-8 relative z-10">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={500}
                        height={300}
                        className="rounded-xl mb-6 w-full"
                      />
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-neutral-800"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-white rounded-full" />
                <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6">
                  <span className="text-4xl font-bold text-neutral-800 block mb-2">
                    {step.number}
                  </span>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={400}
                    height={250}
                    className="rounded-xl mb-4 w-full"
                  />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work That Speaks Before We Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black border border-neutral-800 rounded-2xl p-6"
              >
                <div className="aspect-video bg-neutral-900 rounded-xl mb-4 flex items-center justify-center">
                  <PlayCircle size={48} className="text-neutral-700" />
                </div>
                <p className="text-neutral-400 italic">
                  "Working with PrimeFrame elevated our brand presence significantly..."
                </p>
                <p className="text-sm text-neutral-600 mt-2">- Client Name, Company</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                View All Testimonials →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Something Worth Watching?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Whether you're building a brand in Dubai or growing in India — let's produce 
              visuals that represent your ambition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                Book a Consultation
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Start a Conversation</h2>
            <p className="text-lg text-neutral-400">
              Tell us about your project, and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-black border-neutral-800 text-white placeholder:text-neutral-600"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-black border-neutral-800 text-white placeholder:text-neutral-600"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="tel"
                placeholder="Phone Number"
                className="bg-black border-neutral-800 text-white placeholder:text-neutral-600"
              />
              <Input
                type="text"
                placeholder="Project Type"
                className="bg-black border-neutral-800 text-white placeholder:text-neutral-600"
              />
            </div>
            <Textarea
              placeholder="Tell us about your project..."
              rows={6}
              className="bg-black border-neutral-800 text-white placeholder:text-neutral-600"
            />
            <div className="text-center">
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200 w-full md:w-auto">
                Send Message
              </Button>
            </div>
          </form>

          <div className="grid md:grid-cols-2 gap-4 mt-12">
            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+971XXXXXXXXX"
              className="bg-white hover:bg-neutral-200 text-black font-semibold py-4 px-6 rounded-lg text-center transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
