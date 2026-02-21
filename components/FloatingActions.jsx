'use client'

import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+971XXXXXXXXX"
        className="bg-white hover:bg-neutral-200 text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  )
}
