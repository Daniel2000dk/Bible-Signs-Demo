'use client'

import Link from 'next/link'

const reviews = [
  {
    name: 'Emma van den Berg',
    location: 'Amsterdam, 22',
    initials: 'EB',
    avatarBg: '#2F3A32',
    text: 'Het voelt niet als een poster, maar als een dagelijkse herinnering.',
    tag: 'Concept reactie',
  },
  {
    name: 'Daan Hoekstra',
    location: 'Utrecht, 21',
    initials: 'DH',
    avatarBg: '#4A4A4A',
    text: 'Zo mooi en stijlvol. Past perfect in mijn kamer.',
    tag: 'Beta preview',
  },
  {
    name: 'Sara Mulder',
    location: 'Rotterdam, 24',
    initials: 'SM',
    avatarBg: '#2F3A32',
    text: 'Clean design met een diepe boodschap.',
    tag: 'Concept reactie',
  },
  {
    name: 'Tobias de Wit',
    location: 'Groningen, 20',
    initials: 'TW',
    avatarBg: '#4A4A4A',
    text: 'Eindelijk iets dat mijn kamer sfeer geeft én mijn geloof versterkt.',
    tag: 'Beta preview',
  },
  {
    name: 'Lisa Bakker',
    location: 'Zwolle, 23',
    initials: 'LB',
    avatarBg: '#2F3A32',
    text: 'Premium uitstraling, maar met een boodschap die echt raakt.',
    tag: 'Concept reactie',
  },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div
      className="shrink-0 w-[290px] md:w-[310px] flex flex-col gap-5 p-6 mr-4 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(245,240,232,0.09)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C8A84B">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="font-serif text-[15px] leading-relaxed text-[#F5F0E8] italic flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-[#F5F0E8] shrink-0"
            style={{ backgroundColor: review.avatarBg }}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#F5F0E8] leading-tight">
              {review.name}
            </p>
            <p className="text-[10px] text-[#F5F0E8]/38">{review.location}</p>
          </div>
        </div>
        <span className="text-[9px] font-semibold tracking-widest uppercase px-2 py-1 rounded bg-[rgba(245,240,232,0.07)] text-[#F5F0E8]/35 whitespace-nowrap">
          {review.tag}
        </span>
      </div>
    </div>
  )
}

export default function MovingReviews() {
  const duplicated = [...reviews, ...reviews]

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-[#1A1A1A]">

      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-10">
        <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C8A84B]">
              Eerste reacties
            </span>
            <h2 className="font-serif text-[26px] md:text-[34px] font-bold text-[#F5F0E8] leading-tight max-w-[480px]">
              Gemaakt voor kamers waar geloof dagelijks zichtbaar mag zijn.
            </h2>
            <p className="text-[11px] text-[#F5F0E8]/30 tracking-wide mt-1">
              Concept feedback & beta preview reacties — echte reviews volgen bij lancering.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/collectie"
            className="group hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-[#C8A84B] hover:text-[#D4B55E] transition-colors shrink-0 mb-1"
          >
            Bekijk collectie
            <svg
              width="14" height="14" viewBox="0 0 14 14"
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
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

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
            width="14" height="14" viewBox="0 0 14 14"
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
