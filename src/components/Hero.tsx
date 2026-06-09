import Link from 'next/link'
import HeroVisual from './HeroVisual'

const trustPoints = [
  'Gratis verzending boven €50',
  '30 dagen retour',
  'Premium printkwaliteit',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#F5F0E8]"
    >
      {/* Warm radial glow — shifts visual weight toward the poster side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 68% 28%, rgba(232,221,200,0.72) 0%, transparent 65%)',
        }}
      />

      {/* Subtle noise grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_560px] gap-14 lg:gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col gap-7 animate-fade-up">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 self-start">
              <span className="w-5 h-px bg-[#C8A84B]" />
              <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C8A84B]">
                Premium Bijbelse Wanddecoratie
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[48px] md:text-[58px] lg:text-[66px] xl:text-[74px] font-bold leading-[1.0] tracking-tight text-[#1A1A1A]">
              Maak{' '}
              <span
                className="text-[#C8A84B]"
                style={{ textShadow: '0 0 48px rgba(200,168,75,0.16)' }}
              >
                Gods Woord
              </span>
              {' '}zichtbaar<br className="hidden sm:block" /> in jouw ruimte.
            </h1>

            {/* Subtext */}
            <p className="text-[16px] md:text-[17px] leading-relaxed text-[#4A4A4A] max-w-[420px]">
              Premium Bijbelse posters die je dagelijks herinneren aan waarheid,
              identiteit en rust in Christus.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Primary — gold pill with shine */}
              <Link
                href="#customizer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-[17px] rounded-full bg-[#C8A84B] text-[#1A1A1A] text-[14px] font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_36px_rgba(200,168,75,0.42)]"
              >
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/28 to-transparent pointer-events-none" />
                Kies jouw BibleSign
                <svg
                  width="14" height="14" viewBox="0 0 14 14"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  <path d="M2 7h10M7 2l5 5-5 5"/>
                </svg>
              </Link>

              {/* Secondary — ghost pill */}
              <Link
                href="/collectie"
                className="inline-flex items-center justify-center gap-2 px-8 py-[17px] rounded-full border border-[#1A1A1A]/22 text-[#1A1A1A] text-[14px] font-medium tracking-wide hover:border-[#1A1A1A]/50 hover:bg-[#1A1A1A]/[0.04] transition-all duration-200"
              >
                Bekijk collectie
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-[11.5px] text-[#4A4A4A]/48 -mt-3">
              Personaliseer kleur, lijst en Bijbelvertaling.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" fill="rgba(200,168,75,0.13)"/>
                    <path
                      d="M4.5 7l2 2 3-3"
                      stroke="#C8A84B" strokeWidth="1.4"
                      strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[12px] text-[#4A4A4A]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero visual ── */}
          <div className="flex items-center justify-center lg:justify-end animate-fade-up">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  )
}
