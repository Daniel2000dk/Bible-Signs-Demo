const quotes = [
  {
    text: 'Finally, a Christian brand that doesn\'t look like a church pamphlet. This is exactly what we needed.',
    author: 'Community lid',
    source: 'Via Instagram',
    tag: 'Concept feedback',
    tagStyle: 'bg-bs-sand text-bs-black',
  },
  {
    text: 'Mijn kamer voelt eindelijk af. Elke ochtend zie ik iets dat me herinnert aan wie ik ben in Christus.',
    author: 'Beta tester',
    source: 'Studentenkamer, Utrecht',
    tag: 'Beta preview',
    tagStyle: 'bg-bs-black text-bs-offwhite',
  },
  {
    text: 'Als christelijke student zocht ik dit al jaren. Modern, krachtig, echt Bijbels. Geen compromis.',
    author: 'Community lid',
    source: 'Via Discord',
    tag: 'Concept feedback',
    tagStyle: 'bg-bs-gold/20 text-bs-black',
  },
]

export default function SocialProofSection() {
  return (
    <section className="py-14 md:py-20 bg-bs-offwhite border-t border-bs-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold">
              Eerste reacties
            </span>
            <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-bs-black leading-tight">
              Wat mensen zeggen.
            </h2>
          </div>
          <p className="text-[12px] text-bs-dark/50 max-w-[220px] leading-relaxed md:text-right">
            Concept feedback & beta preview reacties — verzameld voor de lancering.
          </p>
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
                <span className="font-serif text-[28px] text-bs-gold/35 leading-none">&ldquo;</span>
                <p className="font-serif text-[16px] md:text-[17px] leading-relaxed text-bs-black italic">
                  {quote.text}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-end justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-bs-black">{quote.author}</p>
                  <p className="text-[11px] text-bs-dark/55">{quote.source}</p>
                </div>
                <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 ${quote.tagStyle}`}>
                  {quote.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-bs-sand">
          <p className="font-serif text-[18px] md:text-[22px] font-bold text-bs-black italic">
            &ldquo;Geloof dat je kamer versterkt.&rdquo;
          </p>
          <p className="text-[12px] text-bs-dark/50">
            Meer reacties verschijnen na de lancering.
          </p>
        </div>

      </div>
    </section>
  )
}
