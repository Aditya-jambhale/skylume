'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Youtube, Linkedin } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services#viral-shorts', label: 'Viral Shorts' },
  { href: '/services#event-production', label: 'Event Production' },
  { href: '/services#wedding-coverage', label: 'Wedding Coverage' },
  { href: '/services#documentary-shoot', label: 'Documentary Films' },
  { href: '/services#long-form-youtube', label: 'YouTube Production' },
  { href: '/services#podcast-production', label: 'Podcast Production' },
  { href: '/services#drone-shoot', label: 'Drone Shoots' },
]

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/skylumeproduction/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@SkylumeProduction', label: 'YouTube' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/digitallyusuf/', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-background pt-10">
      <div className="bg-white text-black rounded-t-[3.5rem] md:rounded-t-[6rem] overflow-hidden">
        <div className="relative z-10 pt-8 pb-12">

          {/* ── Top CTA band ── */}
          {/* <div className="border-b border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 py-8 flex items-center justify-between flex-wrap gap-6">
          <div>
            <p className="font-inter text-xs font-bold tracking-[0.22em] uppercase text-yellow-500 mb-2">
              Ready to Start?
            </p>
            <h3 className="font-inter font-black text-[clamp(1.75rem,4vw,3rem)] tracking-tight text-white leading-none uppercase">
              LET'S BUILD SOMETHING <span className="text-yellow-500">EXCEPTIONAL.</span>
            </h3>
          </div>
          <Link href="/contact" className="no-underline flex-shrink-0">
            <button className="bg-yellow-500 text-white font-inter text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[30px] py-[12px] border-none cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
              Book a Consultation
            </button>
          </Link>
        </div>
      </div> */}

          {/* ── Main footer grid ── */}
          <div className="max-w-[1300px] mx-auto px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1.2fr_1.2fr] gap-x-8 gap-y-10">

              {/* ── Brand column ── */}
              <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
                {/* Logo */}
                <Link href="/" className="no-underline flex items-center gap-2 group mb-6 w-fit mx-auto md:mx-0">
                  <Image
                    src="/about/logo.png"
                    alt="Skylume Logo"
                    width={34}
                    height={34}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="flex flex-col text-black">
                    <span className="font-bold uppercase text-xl lg:text-2xl tracking-[0.02em] leading-[0.9]">
                      Skylume Production
                    </span>
                  </div>
                </Link>

                <p className="font-medium text-sm text-black/60 leading-relaxed mb-8 max-w-[320px] mx-auto md:mx-0">
                  Crafting cinematic excellence and high-impact visual stories for global brands across Dubai, India, and the UAE.
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  <a href="mailto:info@skylumeproduction.com" className="no-underline group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform group-hover:scale-110">
                      <Mail size={16} />
                    </div>
                    <span className="text-[0.9rem] font-bold text-black border-b border-black/10 group-hover:border-black transition-colors">
                      info@skylumeproduction.com
                    </span>
                  </a>
                </div>

                <p className="hidden md:block text-xs text-black/40 font-medium">
                  Premium cinematic production & storytelling.
                </p>
              </div>

              {/* ── Quick Links ── */}
              <div className="col-span-1 text-center md:text-left">
                <h4 className="font-bold text-[0.85rem] text-black mb-6 uppercase tracking-wider">
                  Quick Links
                </h4>
                <ul className="flex flex-col gap-4">
                  {quickLinks.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="no-underline font-medium text-[0.9rem] text-black/60 hover:text-black transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Services ── */}
              <div className="col-span-1 text-center md:text-left">
                <h4 className="font-bold text-[0.85rem] text-black mb-6 uppercase tracking-wider">
                  Services
                </h4>
                <ul className="flex flex-col gap-4">
                  {serviceLinks.slice(0, 5).map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="no-underline font-medium text-[0.9rem] text-black/60 hover:text-black transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Contact ── */}
              <div className="col-span-2 md:col-span-1 text-center md:text-left flex flex-col items-center md:items-start whitespace-nowrap">
                <h4 className="font-bold text-[0.85rem] text-black mb-6 uppercase tracking-wider">
                  Contact
                </h4>
                <ul className="flex flex-col gap-4 items-center md:items-start">
                  <li className="flex items-center gap-2 group mb-2">
                    <MapPin size={16} className="text-black/40" />
                    <span className="text-[0.9rem] text-black/60 font-semibold tracking-tight">India &bull; Dubai &bull; UAE</span>
                  </li>
                  {socials.map(({ href, label, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline font-medium text-[0.9rem] text-black/60 hover:text-black transition-colors duration-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                          <Icon size={14} className="text-black" />
                        </div>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="mt-10 pt-6 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-semibold text-xs md:text-sm text-black/90">
                © {year} Skylume Production. All Rights Reserved.
              </p>
              <div className="flex items-center gap-8">
                {['Terms & Conditions', 'Privacy Policy'].map(item => (
                  <Link
                    key={item}
                    href="/contact"
                    className="no-underline font-semibold text-sm text-black/90 hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}