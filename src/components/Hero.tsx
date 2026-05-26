import Link from 'next/link'
import RotatingPosterPreview from './RotatingPosterPreview'

const trustPoints = [
  'Gratis verzending boven €50',
  '30 dagen retour',
  'Premium printkwaliteit',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at 70% 40%, #EDE5D5 0%, #F5F0E8 65%)',
      }}
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-6 lg:gap-7">

            {/* Launch label */}
            <div className="inline-flex items-center gap-2 self-start">
              <span
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-bs-gold"
              >
                Premium Bijbelse wanddecoratie
              </span>
              <span className="w-6 h-px bg-bs-gold" />
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-serif text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-bold leading-[1.0] tracking-tight text-bs-black">
                Maak{' '}
                <em
                  className="not-italic"
                  style={{ color: '#C8A84B' }}
                >
                  Gods Woord
                </em>{' '}
                zichtbaar in<br className="hidden md:block" /> jouw ruimte.
              </h1>
            </div>

            {/* Body */}
            <p className="text-[16px] md:text-[18px] leading-relaxed text-bs-dark max-w-[460px]">
              Geen goedkope prints, maar krachtige Bijbelse posters die jou
              dagelijks herinneren aan waarheid, identiteit en rust — in
              een design dat jouw kamer versterkt.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#shop"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-bs-black text-bs-offwhite text-[14px] font-medium tracking-wide hover:bg-bs-gold hover:text-bs-black transition-all duration-200"
              >
                Kies jouw BibleSign
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="1.8"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <path d="M2 7h10M7 2l5 5-5 5"/>
                </svg>
              </Link>

              <Link
                href="#themas"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-bs-black/20 text-bs-black text-[14px] font-medium tracking-wide hover:border-bs-black hover:bg-bs-black/5 transition-all duration-200"
              >
                Vind jouw thema
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-1.5">
                  <span className="text-bs-gold text-xs">✦</span>
                  <span className="text-[12px] text-bs-dark">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Rotating poster ── */}
          <div className="flex items-center justify-center lg:justify-end">
            <RotatingPosterPreview />
          </div>
        </div>
      </div>

    </section>
  )
}
