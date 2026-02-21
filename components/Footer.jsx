'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">PrimeFrame</h3>
            <p className="text-neutral-400 text-sm">
              Premium cinematic production services for brands across India, Dubai, and UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#corporate-films" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Corporate Films
                </Link>
              </li>
              <li>
                <Link href="/services#brand-videos" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Brand Videos
                </Link>
              </li>
              <li>
                <Link href="/services#trade-show" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Event Filming
                </Link>
              </li>
              <li>
                <Link href="/services#reels" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Social Media Reels
                </Link>
              </li>
              <li>
                <Link href="/services#aerial" className="text-neutral-400 hover:text-white text-sm transition-colors">
                  Drone Cinematography
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-neutral-400 text-sm">
                <MapPin size={16} />
                <span>India | Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-2 text-neutral-400 text-sm">
                <Phone size={16} />
                <span>+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2 text-neutral-400 text-sm">
                <Mail size={16} />
                <span>info@primeframe.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © {currentYear} PrimeFrame Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
