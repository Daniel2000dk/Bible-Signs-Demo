'use client'

const reviews = [
  {
    name: 'Emma van den Berg',
    location: 'Amsterdam',
    initials: 'EB',
    color: '#2F3A32',
    text: 'Eindelijk een christelijk postermerk dat er gewoon goed uitziet. Heb \'m al aan drie vrienden laten zien.',
    tag: 'Concept feedback',
  },
  {
    name: 'Daan Hoekstra',
    location: 'Utrecht',
    initials: 'DH',
    color: '#1A1A1A',
    text: 'Hangt nu boven mijn bureau. Elke ochtend een reminder van wie ik ben in Christus.',
    tag: 'Beta preview',
  },
  {
    name: 'Sara Mulder',
    location: 'Rotterdam',
    initials: 'SM',
    color: '#C8A84B',
    text: 'Finally, Christian decor that doesn\'t look like it\'s from 1995. My room genuinely thanks me.',
    tag: 'Concept feedback',
  },
  {
    name: 'Tobias de Wit',
    location: 'Groningen',
    initials: 'TW',
    color: '#4A4A4A',
    text: 'Had nooit gedacht dat ik iets christelijks zo mooi zou vinden. Precies wat ik al jaren zocht.',
    tag: 'Beta preview',
  },
  {
    name: 'Lisa Bakker',
    location: 'Zwolle',
    initials: 'LB',
    color: '#2F3A32',
    text: '"Be Still & Know" — vier woorden die mijn kamer nu sieren. Elke ochtend een aanraking van rust.',
    tag: 'Concept feedback',
  },
  {
    name: 'Joren Smit',
    location: 'Eindhoven',
    initials: 'JS',
    color: '#1A1A1A',
    text: 'Clean design, krachtige boodschap. Geen compromis op stijl of geloof. Dat is zeldzaam.',
    tag: 'Beta preview',
  },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="shrink-0 w-[300px] md:w-[330px] flex flex-col gap-5 p-7 bg-white border border-bs-sand mr-5">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C8A84B">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="font-serif text-[15px] leading-relaxed text-bs-black italic flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author + tag */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-bs-offwhite shrink-0"
            style={{ backgroundColor: review.color }}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-[12px] font-semibold text-bs-black leading-tight">{review.name}</p>
            <p className="text-[10px] text-bs-dark/60">{review.location}</p>
          </div>
        </div>
        <span className="text-[9px] font-semibold tracking-widest uppercase px-2 py-1 bg-bs-sand/50 text-bs-dark whitespace-nowrap">
          {review.tag}
        </span>
      </div>
    </div>
  )
}

export default function MovingReviews() {
  const duplicated = [...reviews, ...reviews]

  return (
    <section className="py-12 md:py-16 bg-bs-offwhite border-t border-bs-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold">
              Eerste reacties
            </span>
            <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-bs-black leading-tight">
              Wat mensen zeggen.
            </h2>
          </div>
          <p className="text-[12px] text-bs-dark/55 max-w-[240px] leading-relaxed md:text-right">
            Concept feedback & beta preview reacties.
            Echte reviews volgen bij lancering.
          </p>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative group">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bs-offwhite to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bs-offwhite to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] pl-6">
          {duplicated.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
