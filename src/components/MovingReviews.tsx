'use client'

import Link from 'next/link'

const reviews = [
  {
    name: 'Emma van den Berg',
    location: 'Amsterdam, 22',
    initials: 'EB',
    text: 'Zo mooi en stijlvol. Past perfect in mijn kamer.',
    tag: 'Concept reactie',
  },
  {
    name: 'Daan Hoekstra',
    location: 'Utrecht, 21',
    initials: 'DH',
    text: 'Clean design met een diepe boodschap. Eindelijk iets dat echt bij mijn interieur past.',
    tag: 'Beta preview',
  },
  {
    name: 'Sara Mulder',
    location: 'Rotterdam, 24',
    initials: 'SM',
    text: 'Eindelijk iets dat mijn kamer sfeer geeft én mijn geloof versterkt.',
    tag: 'Concept reactie',
  },
  {
    name: 'Tobias de Wit',
    location: 'Groningen, 20',
    initials: 'TW',
    text: 'Premium uitstraling, maar met een boodschap die echt raakt.',
    tag: 'Beta preview',
  },
  {
    name: 'Lisa Bakker',
    location: 'Zwolle, 23',
    initials: 'LB',
    text: 'Het voelt niet als decoratie, maar als een dagelijkse herinnering aan wie ik ben in Christus.',
    tag: 'Concept reactie',
  },
  {
    name: 'Joris Vermeer',
    location: 'Den Haag, 25',
    initials: 'JV',
    text: 'Rustig, modern en toch duidelijk Bijbels. Dat is precies wat ik zocht.',
    tag: 'Beta preview',
  },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div
      className="shrink-0 w-[300px] md:w-[320px] mr-5 flex flex-col gap-5 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(245,240,232,0.10)',
        boxShadow: '0 2px 24px rgba(0,0,0,0.30)',
        borderLeft: '2px solid rgba(200,168,75,0.30)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#C8A84B">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif text-[15px] leading-relaxed text-[#F5F0E8]/88 italic flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-[#F5F0E8] shrink-0"
            style={{ background: 'rgba(200,168,75,0.16)', border: '1px solid rgba(200,168,75,0.22)' }}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#F5F0E8]/85 leading-tight">
              {review.name}
            </p>
            <p className="text-[10px] text-[#F5F0E8]/35 mt-0.5">{review.location}</p>
          </div>
        </div>
        <span className="text-[9px] font-semibold tracking-widest uppercase px-2 py-1 rounded whitespace-nowrap"
          style={{
            background: 'rgba(245,240,232,0.06)',
            color: 'rgba(245,240,232,0.30)',
          }}
        >
          {review.tag}
        </span>
      </div>
    </div>
  )
}

export default function MovingReviews() {
  const duplicated = [...reviews, ...reviews]

  return (
    <section
      className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden"
      style={{ background: '#1A1A1A' }}
    >
      {/* Gradient connector — smooth transition from hero off-white */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 80,
          background:
            'linear-gradient(180deg, rgba(245,240,232,0.055) 0%, transparent 100%)',
        }}
      />

      {/* Subtle warm glow — editorial touch */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: 300,
          background:
            'radial-gradient(ellipse, rgba(200,168,75,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Section header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
          <div className="flex flex-col gap-3 max-w-[520px]">
            <span className="text-[10px] font-bold tracking-[0.30em] uppercase text-[#C8A84B]">
              Eerste reacties op het concept
            </span>
            <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#F5F0E8] leading-tight">
              Gemaakt voor kamers waar geloof
              <br className="hidden sm:block" /> dagelijks zichtbaar mag zijn.
            </h2>
            <p className="text-[12px] text-[#F5F0E8]/28 tracking-wide mt-0.5 leading-relaxed">
              Concept feedback & beta preview reacties —
              echte reviews volgen bij lancering.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/collectie"
            className="group hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-[#C8A84B] hover:text-[#D4B55E] transition-colors shrink-0 mb-1"
          >
            Bekijk collectie
            <svg
              width="13" height="13" viewBox="0 0 14 14"
              fill="none" stroke="currentColor" strokeWidth="1.8"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M2 7h10M7 2l5 5-5 5"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative group">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] pl-6">
          {duplicated.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden max-w-[1320px] mx-auto px-6 mt-8">
        <Link
          href="/collectie"
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#C8A84B]"
        >
          Bekijk collectie
          <svg
            width="13" height="13" viewBox="0 0 14 14"
            fill="none" stroke="currentColor" strokeWidth="1.8"
            className="group-hover:translate-x-0.5 transition-transform"
          >
            <path d="M2 7h10M7 2l5 5-5 5"/>
          </svg>
        </Link>
      </div>

    </section>
  )
}
