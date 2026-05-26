export default function MissionSection() {
  return (
    <section id="missie" className="py-28 md:py-40 bg-bs-black text-bs-offwhite overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-14">

        {/* Label */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-bs-gold">
            Onze missie
          </span>
          <div className="w-px h-12 bg-bs-gold/30" />
        </div>

        {/* Main quote */}
        <blockquote className="flex flex-col gap-6">
          <p className="font-serif text-[28px] md:text-[38px] lg:text-[46px] font-bold leading-[1.15] tracking-tight text-bs-offwhite">
            Gods Woord hoeft niet te verstoppen<br className="hidden md:block" />{' '}
            achter je smaak.{' '}
            <em className="not-italic text-bs-gold">Jij ook niet.</em>
          </p>
        </blockquote>

        {/* Gold rule */}
        <div className="w-16 h-px bg-bs-gold/50" />

        {/* Body */}
        <p className="text-[16px] md:text-[18px] leading-relaxed text-bs-offwhite/70 max-w-2xl">
          BibleSigns maakt Gods Woord zichtbaar in ruimtes waar jongeren dagelijks leven,
          studeren, bidden en zoeken naar richting. Elke poster is ontworpen als herinnering
          aan waarheid, identiteit en rust in Christus — krachtig, modern, zonder compromis.
        </p>

        {/* Seed model callout */}
        <div className="w-full max-w-lg border border-bs-gold/25 p-8 flex flex-col gap-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bs-gold/40" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-bs-gold">
              Zaaimodel
            </span>
            <div className="w-8 h-px bg-bs-gold/40" />
          </div>
          <p className="font-serif text-[22px] md:text-[26px] font-bold text-bs-offwhite leading-snug">
            10% van elke aankoop<br />wordt gezaaid.
          </p>
          <p className="text-[13px] text-bs-offwhite/55 leading-relaxed">
            Transparant. Structureel. Als daad van rentmeesterschap.
            Elke aankoop bij BibleSigns is ook een daad van geven
            voor het Koninkrijk.
          </p>
        </div>

        {/* Brand tagline */}
        <p className="font-serif text-[20px] md:text-[24px] italic font-medium text-bs-gold/80">
          "Geloof dat je kamer versterkt."
        </p>
      </div>
    </section>
  )
}
