'use client'

import { useState } from 'react'

export default function CommunitySection() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="community" className="py-28 md:py-40 bg-bs-green text-bs-offwhite overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center flex flex-col items-center gap-12">

        {/* Label */}
        <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-bs-gold">
          Beweging
        </span>

        {/* Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-[38px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-tight text-bs-offwhite">
            Word onderdeel<br />
            van de{' '}
            <em className="not-italic text-bs-gold">beweging.</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed text-bs-offwhite/60 max-w-xl mx-auto">
            Een generatie christenen die hun geloof niet verstopt. Stem mee over nieuwe designs,
            ontvang early access en bouw mee aan iets dat er echt toe doet.
          </p>
        </div>

        {/* What you get */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
          {[
            { icon: '✦', title: 'Early access',   desc: 'Als eerste bestellen bij lancering'     },
            { icon: '✦', title: 'Help de collectie', desc: 'Stem mee over de volgende designs' },
            { icon: '✦', title: 'Welkomstkorting', desc: 'Exclusief voor community-leden'         },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2 text-center">
              <span className="text-bs-gold text-sm">{icon}</span>
              <p className="text-[14px] font-semibold text-bs-offwhite">{title}</p>
              <p className="text-[12px] text-bs-offwhite/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Email form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jouw@email.nl"
              required
              className="flex-1 px-5 py-4 bg-bs-offwhite/10 text-bs-offwhite placeholder-bs-offwhite/30 text-[14px] outline-none border border-bs-offwhite/15 focus:border-bs-gold/60 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-bs-gold text-bs-black text-[13px] font-semibold tracking-wide hover:bg-bs-offwhite transition-colors duration-200 whitespace-nowrap"
            >
              Word lid
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-2 py-4">
            <span className="text-bs-gold text-xl">✦</span>
            <p className="text-[16px] font-medium text-bs-offwhite">Je staat op de lijst.</p>
            <p className="text-[13px] text-bs-offwhite/50">
              We nemen contact op zodra de lancering dichterbij komt.
            </p>
          </div>
        )}

        {/* Trust note */}
        <p className="text-[12px] text-bs-offwhite/30 tracking-wide">
          Geen spam. Alleen het echte werk. · Uitschrijven kan altijd.
        </p>

      </div>
    </section>
  )
}
