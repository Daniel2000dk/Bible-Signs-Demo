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
      className="relative overflow-hidden flex flex-col justify-center"
      style={{
        paddingTop: 84,
        minHeight: '100vh',
        background:
          'linear-gradient(150deg, #F8F4EC 0%, #F5F0E8 40%, #EEE7D8 100%)',
      }}
    >
      {/* Subtle warm radial glow — right side pulls visual depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 75% at 72% 38%, rgba(232,220,196,0.60) 0%, transparent 65%)',
        }}
      />

      {/* Premium noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.022,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 w-full py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_510px] xl:grid-cols-[1fr_550px] gap-12 lg:gap-14 xl:gap-16 items-center">

          {/* ─── LEFT: Editorial Copy ─── */}
          <div className="flex flex-col gap-7 animate-fade-up">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 self-start">
              <span
                className="block shrink-0"
                style={{
                  width: 24,
                  height: 1,
                  background:
                    'linear-gradient(90deg, #C8A84B 0%, rgba(200,168,75,0.4) 100%)',
                }}
              />
              <span className="text-[10px] font-bold tracking-[0.32em] uppercase text-[#C8A84B]">
                Premium Bijbelse Wanddecoratie
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif font-bold tracking-tight text-[#1A1A1A] leading-[0.93]"
              style={{ fontSize: 'clamp(48px, 6.2vw, 86px)' }}
            >
              Maak{' '}
              <span
                style={{
                  color: '#C8A84B',
                  textShadow: '0 2px 44px rgba(200,168,75,0.18)',
                }}
              >
                Gods Woord
              </span>
              <br />
              zichtbaar in
              <br />
              jouw ruimte.
            </h1>

            {/* Subtext */}
            <p className="text-[16px] md:text-[17px] leading-relaxed text-[#4A4A4A] max-w-[420px]">
              Premium Bijbelse posters die je dagelijks herinneren aan
              waarheid, identiteit en rust in Christus.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 items-start sm:items-center">

              {/* Primary — gold pill */}
              <Link
                href="#customizer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#C8A84B] text-[#1A1A1A] text-[14px] font-bold tracking-wide transition-all duration-300 hover:-translate-y-[2px] shadow-[0_8px_28px_rgba(200,168,75,0.32)] hover:shadow-[0_18px_58px_rgba(200,168,75,0.65)]"
                style={{ padding: '0 40px', height: 60 }}
              >
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                Kies jouw BibleSign
                <svg
                  width="15" height="15" viewBox="0 0 14 14"
                  fill="none" stroke="currentColor" strokeWidth="2.2"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M2 7h10M7 2l5 5-5 5"/>
                </svg>
              </Link>

              {/* Secondary — ghost/text link */}
              <Link
                href="/collectie"
                className="group inline-flex items-center gap-2 px-3 text-[14px] font-medium text-[#1A1A1A]/55 hover:text-[#1A1A1A] transition-colors duration-200"
              >
                Bekijk collectie
                <svg
                  width="13" height="13" viewBox="0 0 14 14"
                  fill="none" stroke="currentColor" strokeWidth="1.85"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <path d="M2 7h10M7 2l5 5-5 5"/>
                </svg>
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-[11.5px] text-[#4A4A4A]/40 -mt-2">
              Personaliseer kleur, lijst en Bijbelvertaling.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 pt-1">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(200,168,75,0.12)' }}
                  >
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5 3.5-4"
                        stroke="#C8A84B" strokeWidth="1.4"
                        strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#4A4A4A]/65">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT: Hero Visual ─── */}
          <div
            className="flex items-center justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: '0.12s' }}
          >
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  )
}
