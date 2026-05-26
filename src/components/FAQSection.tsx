'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqItems } from '@/data/faq'

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { id: string; question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-bs-sand last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span
          className={`text-[15px] md:text-[16px] font-medium leading-snug transition-colors duration-200 ${
            isOpen ? 'text-bs-black' : 'text-bs-dark group-hover:text-bs-black'
          }`}
        >
          {item.question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-200 ${
            isOpen
              ? 'border-bs-gold text-bs-gold rotate-45'
              : 'border-bs-sand text-bs-dark group-hover:border-bs-dark'
          }`}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="6" y1="1" x2="6" y2="11"/>
            <line x1="1" y1="6" x2="11" y2="6"/>
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{    height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14px] md:text-[15px] text-bs-dark leading-relaxed max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id))

  return (
    <section id="faq" className="py-14 md:py-20 bg-bs-sand/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">

          {/* Left: header */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold">
              Veelgestelde vragen
            </span>
            <h2 className="font-serif text-[26px] md:text-[34px] font-bold text-bs-black leading-tight">
              Alles wat<br />
              je wil weten.
            </h2>
            <p className="text-[14px] text-bs-dark leading-relaxed">
              Niet gevonden wat je zoekt? Stuur een bericht via{' '}
              <a
                href="mailto:hallo@biblesigns.nl"
                className="text-bs-black border-b border-bs-gold/40 hover:border-bs-gold transition-colors"
              >
                hallo@biblesigns.nl
              </a>
            </p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
