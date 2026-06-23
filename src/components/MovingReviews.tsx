'use client'

import Link from 'next/link'

const reviews = [
  {
    id: 1,
    name: 'Emma van den Berg',
    age: 22,
    location: 'Amsterdam',
    initials: 'EB',
    theme: 'IDENTITEIT',
    text: 'Ik hing eerst van die zoete aquarel-prints — mooi, maar nooit echt van mij. Dit is anders. Het vers over nieuwe schepping hangt nu boven mijn bureau. Elke ochtend herinnert het me aan wie ik werkelijk ben in Christus.',
  },
  {
    id: 2,
    name: 'Daan Hoekstra',
    age: 21,
    location: 'Utrecht',
    initials: 'DH',
    theme: 'PREMIUM',
    text: 'Als interieur-bewuste student was ik sceptisch over christelijke posters. Maar dit is gewoon goed design. De typografie, de verhoudingen, de lijst — je merkt dat er écht over nagedacht is. Dit is geen massaproduct.',
  },
  {
    id: 3,
    name: 'Sara Mulder',
    age: 24,
    location: 'Rotterdam',
    initials: 'SM',
    theme: 'RUST',
    text: 'Cadeau gekregen van mijn vriendin. Ik moest toegeven: dit hangt echt mooi. Nu een week later kijk ik er elke ochtend naar. Het brengt rust — niet alleen door het vers, maar ook door het design zelf.',
  },
  {
    id: 4,
    name: 'Tobias de Wit',
    age: 20,
    location: 'Groningen',
    initials: 'TW',
    theme: 'STIJL',
    text: 'Op mijn kamer hingen IKEA-prints en een christelijke poster uit de kerk. Nu hangt BibleSigns. Iedereen vraagt waar ik het vandaan heb. Dat zegt eigenlijk genoeg.',
  },
  {
    id: 5,
    name: 'Lisa Bakker',
    age: 23,
    location: 'Zwolle',
    initials: 'LB',
    theme: 'KWALITEIT',
    text: 'Premium, stijlvol en Bijbels tegelijk — ik dacht niet dat die combinatie echt bestond. Maar dit is het. De poster van Psalm 23 maakt mijn slaapkamer compleet. Niet als religieus symbool, maar als echte kunst.',
  },
  {
    id: 6,
    name: 'Joris Vermeer',
    age: 25,
    location: 'Den Haag',
    initials: 'JV',
    theme: 'DIEPGANG',
    text: 'De kwaliteit is opvallend. Het papier, de dikte, de manier waarop het vers ademruimte krijgt. Dit is niet iets wat je snel weggooit. Dit hangt er over tien jaar nog — en de boodschap is dan nog steeds onveranderd.',
  },
  {
    id: 7,
    name: 'Noa de Vries',
    age: 22,
    location: 'Eindhoven',
    initials: 'NV',
    theme: 'BALANS',
    text: 'Ik was bang dat het te kerkelijk zou aanvoelen. Maar dit is gewoon interieur. Sterk. Modern. Met een boodschap. Dat evenwicht dat ik zocht — hier is het. Voelt aan als jezelf ophangen, maar dan mooier.',
  },
  {
    id: 8,
    name: 'Matthijs Jansen',
    age: 26,
    location: 'Arnhem',
    initials: 'MJ',
    theme: 'COLLECTIE',
    text: 'Begon met één. Nu drie. Ze vullen elkaar prachtig aan in de woonkamer. Gasten vragen altijd wie het design heeft gemaakt — en dan vertel je het verhaal erachter. Dat is het mooie aan dit merk.',
  },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <article
      className="shrink-0 mr-5 flex flex-col gap-0 relative overflow-hidden"
      style={{
        width: 348,
        background: 'linear-gradient(145deg, rgba(20,17,11,0.97) 0%, rgba(12,10,6,0.99) 100%)',
        border: '1px solid rgba(200,168,75,0.10)',
        borderLeft: '1.5px solid rgba(200,168,75,0.40)',
        borderRadius: 16,
        boxShadow:
          '0 2px 0 rgba(255,255,255,0.028) inset, 0 8px 32px rgba(0,0,0,0.56), 0 28px 72px rgba(0,0,0,0.32)',
      }}
    >
      {/* Top section */}
      <div className="flex flex-col gap-4 p-7 pb-5 flex-1">
        {/* Header: stars + theme */}
        <div className="flex items-center justify-between">
          <div className="flex gap-[3px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#C8A84B">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span
            style={{
              fontSize: 8.5,
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'rgba(200,168,75,0.55)',
              fontFamily: 'var(--font-inter)',
            }}
          >
            {review.theme}
          </span>
        </div>

        {/* Large decorative quote glyph */}
        <span
          className="absolute top-3 right-5 select-none pointer-events-none font-serif"
          style={{
            fontSize: 96,
            lineHeight: 1,
            color: 'rgba(200,168,75,0.055)',
            fontFamily: 'Georgia, serif',
          }}
          aria-hidden
        >
          &rdquo;
        </span>

        {/* Review text */}
        <p
          className="font-serif italic relative z-10 flex-1"
          style={{
            fontSize: 15,
            lineHeight: 1.68,
            color: 'rgba(245,240,232,0.86)',
          }}
        >
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Separator */}
      <div
        style={{
          height: 1,
          marginLeft: 28,
          marginRight: 28,
          background: 'rgba(200,168,75,0.10)',
        }}
      />

      {/* Author section */}
      <div className="flex items-center gap-3 px-7 py-5">
        <div
          className="flex items-center justify-center rounded-full shrink-0 font-bold"
          style={{
            width: 36,
            height: 36,
            background: 'rgba(200,168,75,0.11)',
            border: '1px solid rgba(200,168,75,0.28)',
            color: 'rgba(200,168,75,0.90)',
            fontSize: 11,
            letterSpacing: '0.04em',
          }}
        >
          {review.initials}
        </div>
        <div>
          <p style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(245,240,232,0.88)' }}>
            {review.name}
          </p>
          <p style={{ fontSize: 11, marginTop: 2, color: 'rgba(245,240,232,0.35)' }}>
            {review.age} jaar · {review.location}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function MovingReviews() {
  const duplicated = [...reviews, ...reviews]

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'transparent',
        paddingTop: 20,
        paddingBottom: 88,
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '55%',
          height: 360,
          background: 'radial-gradient(ellipse, rgba(200,168,75,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Section header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

          <div className="flex flex-col gap-4 max-w-[560px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: 'linear-gradient(90deg, transparent 0%, #C8A84B 100%)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.30em',
                  textTransform: 'uppercase',
                  color: '#C8A84B',
                }}
              >
                Ervaringen van klanten
              </span>
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: 'linear-gradient(90deg, #C8A84B 0%, transparent 100%)',
                  flexShrink: 0,
                }}
              />
            </div>

            <h2
              className="font-serif font-bold text-[#F5F0E8] leading-[1.12]"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
            >
              Gemaakt voor kamers waar
              <br />
              <span style={{ color: '#C8A84B' }}>geloof</span>{' '}
              dagelijks zichtbaar mag zijn.
            </h2>

            <p style={{ fontSize: 14, color: 'rgba(245,240,232,0.42)', lineHeight: 1.7, marginTop: 2 }}>
              Echte ervaringen van de BibleSigns community.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/collectie"
            className="group hidden md:inline-flex items-center gap-2 shrink-0 mb-1 transition-colors duration-200 text-[rgba(200,168,75,0.70)] hover:text-[#C8A84B]"
            style={{ fontSize: 13, fontWeight: 500 }}
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

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 pointer-events-none z-10"
          style={{
            width: 100,
            background: 'linear-gradient(90deg, rgba(10,10,14,0.92) 0%, transparent 100%)',
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none z-10"
          style={{
            width: 100,
            background: 'linear-gradient(270deg, rgba(10,10,14,0.92) 0%, transparent 100%)',
          }}
        />

        <div
          className="flex w-max animate-marquee"
          style={{ paddingLeft: 24 }}
        >
          {duplicated.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden max-w-[1320px] mx-auto px-6 mt-10">
        <Link
          href="/collectie"
          className="inline-flex items-center gap-2"
          style={{ fontSize: 13, fontWeight: 500, color: '#C8A84B' }}
        >
          Bekijk collectie
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M2 7h10M7 2l5 5-5 5" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
