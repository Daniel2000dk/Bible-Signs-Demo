const quotes = [
  {
    text: '"Finally, a Christian brand that doesn\'t look like a church pamphlet. This is what we needed."',
    author: 'Community lid',
    source: 'Via Instagram',
    tag: 'Early feedback',
    tagBg: 'bg-bs-sand',
  },
  {
    text: '"Mijn kamer voelt eindelijk af. Elke ochtend zie ik iets dat me herinnert aan wie ik ben in Christus."',
    author: 'Beta tester',
    source: 'Studentenkamer, Utrecht',
    tag: 'Beta tester',
    tagBg: 'bg-bs-black text-bs-offwhite',
  },
  {
    text: '"Als christelijke student zocht ik dit al jaren. Modern, krachtig, echt Bijbels. Geen compromis."',
    author: 'Community lid',
    source: 'Via Discord',
    tag: 'Launch preview',
    tagBg: 'bg-bs-gold/20',
  },
]

export default function SocialProofSection() {
  return (
    <section className="py-24 md:py-32 bg-bs-offwhite border-t border-bs-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex flex-col gap-3 mb-14">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold">
            Community
          </span>
          <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-bs-black leading-tight">
            Wat de community zegt.
          </h2>
        </div>

        {/* Quote grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-8 p-8 border border-bs-sand/80 hover:border-bs-gold/30 hover:shadow-sm transition-all duration-300 bg-white/40"
            >
              {/* Quote text */}
              <div className="flex flex-col gap-4">
                <span className="font-serif text-[32px] text-bs-gold/40 leading-none">"</span>
                <p className="font-serif text-[16px] md:text-[17px] leading-relaxed text-bs-black italic">
                  {quote.text.replace(/^"|"$/g, '')}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-end justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-bs-black">{quote.author}</p>
                  <p className="text-[11px] text-bs-dark/60">{quote.source}</p>
                </div>
                <span
                  className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 ${quote.tagBg}`}
                >
                  {quote.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-bs-sand">
          <p className="font-serif text-[18px] md:text-[22px] font-bold text-bs-black italic">
            "Geloof dat je kamer versterkt."
          </p>
          <p className="text-[12px] text-bs-dark">
            Meer reacties verschijnen na de lancering.
          </p>
        </div>
      </div>
    </section>
  )
}
