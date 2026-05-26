import Link from 'next/link'

export default function MissionCommunityTeaser() {
  return (
    <section className="bg-bs-offwhite">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Mission — dark */}
        <div className="bg-bs-black text-bs-offwhite py-20 md:py-24 px-8 md:px-16 flex flex-col justify-between gap-12 min-h-[420px]">
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-bs-gold">
            Onze missie
          </span>
          <div className="flex flex-col gap-6">
            <blockquote className="font-serif text-[24px] md:text-[30px] lg:text-[28px] xl:text-[32px] font-bold leading-[1.15] text-bs-offwhite">
              "Gods Woord hoeft niet te verstoppen
              achter je smaak.{' '}
              <em className="not-italic text-bs-gold">Jij ook niet.</em>"
            </blockquote>
            <p className="text-[14px] leading-relaxed text-bs-offwhite/55 max-w-sm">
              Premium christelijke posters voor jongeren die vanuit hun identiteit
              in Christus leven — krachtig, modern, zonder compromis.
              10% van elke aankoop wordt structureel gezaaid.
            </p>
          </div>
          <Link
            href="/onze-missie"
            className="self-start inline-flex items-center gap-2 text-[13px] font-medium text-bs-gold border-b border-bs-gold/30 hover:border-bs-gold pb-0.5 transition-colors duration-200"
          >
            Lees onze missie
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Right: Community — green */}
        <div className="bg-bs-green text-bs-offwhite py-20 md:py-24 px-8 md:px-16 flex flex-col justify-between gap-12 min-h-[420px]">
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-bs-gold">
            Community
          </span>
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-[24px] md:text-[30px] lg:text-[28px] xl:text-[32px] font-bold leading-[1.15] text-bs-offwhite">
              Word onderdeel van de{' '}
              <em className="not-italic text-bs-gold">beweging.</em>
            </h2>
            <ul className="flex flex-col gap-2.5">
              {[
                'Early access bij lancering',
                'Help de collectie vormen',
                'Welkomstkorting voor leden',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-bs-offwhite/70">
                  <span className="text-bs-gold text-xs shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/community"
            className="self-start inline-flex items-center gap-2 text-[13px] font-medium text-bs-gold border-b border-bs-gold/30 hover:border-bs-gold pb-0.5 transition-colors duration-200"
          >
            Doe mee
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
