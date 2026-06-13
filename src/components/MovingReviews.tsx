'use client'

import Link from 'next/link'

const reviews = [
  {
    name: 'Emma van den Berg',
    age: 22,
    location: 'Amsterdam',
    initials: 'EB',
    avatarBg: 'rgba(139,105,20,0.26)',
    text: 'Rustig, stijlvol en toch duidelijk Bijbels. Precies wat ik zocht voor mijn kamer.',
  },
  {
    name: 'Daan Hoekstra',
    age: 21,
    location: 'Utrecht',
    initials: 'DH',
    avatarBg: 'rgba(58,90,74,0.28)',
    text: 'Clean design met een diepe boodschap. Eindelijk iets dat echt bij mijn interieur past.',
  },
  {
    name: 'Sara Mulder',
    age: 24,
    location: 'Rotterdam',
    initials: 'SM',
    avatarBg: 'rgba(107,79,58,0.28)',
    text: 'De combinatie van interieur en geloof klopt hier echt. Het brengt rust in mijn ruimte.',
  },
  {
    name: 'Tobias de Wit',
    age: 20,
    location: 'Groningen',
    initials: 'TW',
    avatarBg: 'rgba(74,58,107,0.26)',
    text: 'Premium uitstraling, maar met een boodschap die je dagelijks raakt. Echt bijzonder.',
  },
  {
    name: 'Lisa Bakker',
    age: 23,
    location: 'Zwolle',
    initials: 'LB',
    avatarBg: 'rgba(90,58,58,0.28)',
    text: 'Mooi minimalistisch design, maar met echte betekenis. Het voelt niet als gewone decoratie.',
  },
  {
    name: 'Joris Vermeer',
    age: 25,
    location: 'Den Haag',
    initials: 'JV',
    avatarBg: 'rgba(47,74,74,0.26)',
    text: 'Niet schreeuwerig, maar juist krachtig door de eenvoud. Elke ochtend herinnert het me.',
  },
  {
    name: 'Noa de Vries',
    age: 22,
    location: 'Eindhoven',
    initials: 'NV',
    avatarBg: 'rgba(74,74,47,0.26)',
    text: 'Ik was verrast door hoe luxe het eruitziet. Past perfect in mijn slaapkamer.',
  },
  {
    name: 'Matthijs Jansen',
    age: 26,
    location: 'Arnhem',
    initials: 'MJ',
    avatarBg: 'rgba(58,74,90,0.26)',
    text: 'Het voelt als decoratie met diepgang. Gods Woord dagelijks zichtbaar — precies de bedoeling.',
  },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div
      className="shrink-0 w-[320px] md:w-[344px] mr-5 flex flex-col gap-5 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(30,26,18,0.97) 0%, rgba(20,16,10,0.99) 100%)',
        border: '1px solid rgba(245,240,232,0.07)',
        borderLeft: '2px solid rgba(200,168,75,0.42)',
        boxShadow:
          '0 4px 12px rgba(0,0,0,0.52), 0 14px 44px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.055)',
      }}
    >
      {/* Decorative large quote — depth element */}
      <span
        className="absolute top-2 right-4 select-none pointer-events-none font-serif"
        style={{
          fontSize: 88,
          lineHeight: 1,
          color: 'rgba(200,168,75,0.07)',
          fontFamily: 'Georgia, "Playfair Display", serif',
        }}
        aria-hidden
      >
        &rdquo;
      </span>

      {/* Stars */}
      <div className="flex gap-[3px]">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C8A84B">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p
        className="font-serif flex-1 relative z-10 italic"
        style={{
          fontSize: 15.5,
          lineHeight: 1.65,
          color: 'rgba(245,240,232,0.88)',
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-1">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
          style={{
            background: review.avatarBg,
            border: '1px solid rgba(200,168,75,0.30)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.32)',
            color: 'rgba(245,240,232,0.90)',
          }}
        >
          {review.initials}
        </div>
        <div>
          <p
            className="text-[12.5px] font-semibold leading-tight"
            style={{ color: 'rgba(245,240,232,0.90)' }}
          >
            {review.name}
          </p>
          <p
            className="text-[11px] mt-0.5"
            style={{ color: 'rgba(245,240,232,0.38)' }}
          >
            {review.age} jaar · {review.location}
          </p>
        </div>
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
      {/* Gradient connector */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 80,
          background: 'linear-gradient(180deg, rgba(245,240,232,0.055) 0%, transparent 100%)',
        }}
      />

      {/* Subtle warm glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: 300,
          background: 'radial-gradient(ellipse, rgba(200,168,75,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Section header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
          <div className="flex flex-col gap-3 max-w-[520px]">

            {/* Eyebrow with line */}
            <div className="inline-flex items-center gap-3 self-start">
              <span
                className="block shrink-0"
                style={{
                  width: 22,
                  height: 1,
                  background: 'linear-gradient(90deg, #C8A84B 0%, rgba(200,168,75,0.3) 100%)',
                }}
              />
              <span className="text-[10px] font-bold tracking-[0.32em] uppercase text-[#C8A84B]">
                Ervaringen van klanten
              </span>
            </div>

            <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#F5F0E8] leading-tight">
              Gemaakt voor kamers waar geloof
              <br className="hidden sm:block" /> dagelijks zichtbaar mag zijn.
            </h2>
            <p
              className="text-[14px] leading-relaxed mt-0.5"
              style={{ color: 'rgba(245,240,232,0.45)' }}
            >
              Ontdek hoe anderen BibleSigns ervaren in hun interieur.
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
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Marquee — animation unchanged */}
      <div className="relative group">
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
            <path d="M2 7h10M7 2l5 5-5 5" />
          </svg>
        </Link>
      </div>

    </section>
  )
}
