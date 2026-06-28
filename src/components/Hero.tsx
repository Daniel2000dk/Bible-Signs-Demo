import Link from 'next/link'

const trustPoints = [
  'Gratis verzending boven €50',
  '30 dagen retour',
  'Premium printkwaliteit',
]

export default function Hero() {
  return (
    <>
      {/* ═══════════════════════════════════════
          DESKTOP HERO (lg en groter)
      ═══════════════════════════════════════ */}
      <section
        id="home"
        className="hidden lg:block relative overflow-hidden"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: '92% auto',
          backgroundPosition: '82% center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#080604',
          minHeight: '82vh',
          maskImage: 'linear-gradient(to bottom, black 0%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 95%, transparent 100%)',
        }}
      >
        {/* Links scrim — tekst leesbaarheid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(4,3,2,0.92) 0%, rgba(4,3,2,0.80) 22%, rgba(4,3,2,0.50) 42%, rgba(4,3,2,0.12) 62%, transparent 76%)',
            zIndex: 1,
          }}
        />
        {/* Bodem scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(4,3,2,0.55) 0%, rgba(4,3,2,0.05) 22%, transparent 40%)',
            zIndex: 1,
          }}
        />
        {/* Boven scrim — transparante navbar */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: 220,
            background: 'linear-gradient(to bottom, rgba(4,3,2,0.82) 0%, rgba(4,3,2,0.48) 42%, transparent 100%)',
            zIndex: 1,
          }}
        />
        {/* Rechts diepte-vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 64% at 80% 50%, transparent 0%, rgba(4,3,2,0.14) 52%, rgba(4,3,2,0.40) 100%)',
            zIndex: 1,
          }}
        />

        <div className="flex items-start relative" style={{ zIndex: 2 }}>
          <div
            className="flex flex-col animate-fade-up"
            style={{
              flex: '0 0 50%',
              paddingLeft: 'clamp(64px, 7.5vw, 116px)',
              paddingRight: 48,
              paddingTop: 112,
              paddingBottom: 48,
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: 'linear-gradient(90deg, rgba(200,168,75,0.08) 0%, #C8A84B 100%)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: '0.30em',
                  textTransform: 'uppercase',
                  color: '#C8A84B',
                }}
              >
                Premium Bijbelse Wanddecoratie
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-white"
              style={{
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontSize: 'clamp(52px, 5.5vw, 84px)',
                lineHeight: 1.08,
                letterSpacing: '-0.022em',
                textShadow: '0 2px 36px rgba(0,0,0,0.80)',
                marginBottom: 22,
              }}
            >
              Maak{' '}
              <span
                style={{
                  color: '#F5E070',
                  textShadow: '0 0 44px rgba(245,224,112,0.38), 0 2px 24px rgba(0,0,0,0.60)',
                }}
              >
                Gods Woord
              </span>
              <br />
              zichtbaar in
              <br />
              jouw ruimte.
            </h1>

            {/* Subtekst */}
            <p
              style={{
                fontSize: 'clamp(16px, 1.18vw, 18px)',
                lineHeight: 1.74,
                color: 'rgba(255,252,245,0.91)',
                maxWidth: 420,
                marginBottom: 32,
                textShadow: '0 1px 14px rgba(0,0,0,0.60)',
              }}
            >
              Premium Bijbelse posters voor jongeren en jongvolwassenen
              die Gods Woord zichtbaar willen maken in hun kamer.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6" style={{ marginBottom: 22 }}>
              <Link
                href="#customizer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full font-bold tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.025]"
                style={{
                  fontSize: 15,
                  background: 'linear-gradient(135deg, #F2D458 0%, #C8A84B 55%, #A88830 100%)',
                  color: '#160F00',
                  padding: '0 52px',
                  height: 66,
                  boxShadow:
                    '0 0 0 1.5px rgba(255,255,255,0.24), 0 8px 44px rgba(200,168,75,0.82), 0 2px 14px rgba(200,168,75,0.42)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.015em',
                }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/28 to-transparent pointer-events-none" />
                Kies jouw BibleSign
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </Link>

              <Link
                href="/collectie"
                className="group inline-flex items-center gap-2 font-medium transition-colors duration-200 hover:text-white"
                style={{
                  fontSize: 14,
                  color: 'rgba(255,252,245,0.84)',
                  textShadow: '0 1px 8px rgba(0,0,0,0.45)',
                }}
              >
                Bekijk collectie
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </Link>
            </div>

            {/* USP's */}
            <div className="flex items-center gap-6">
              {trustPoints.map((point, i) => (
                <div key={point} className="flex items-center gap-6">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex items-center justify-center rounded-full shrink-0"
                      style={{ width: 17, height: 17, background: 'rgba(200,168,75,0.18)' }}
                    >
                      <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5l2.5 2.5 3.5-4"
                          stroke="#C8A84B"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: 13.5,
                        color: 'rgba(255,252,245,0.88)',
                        textShadow: '0 1px 8px rgba(0,0,0,0.55)',
                      }}
                    >
                      {point}
                    </span>
                  </div>
                  {i < trustPoints.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        height: 15,
                        background: 'rgba(245,240,232,0.14)',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MOBIELE HERO (kleiner dan lg)
          Achtergrond: hero-bg.jpg gecentreerd
          Korter zodat social proof direct zichtbaar
      ═══════════════════════════════════════ */}
      <section
        id="home-mobile"
        className="lg:hidden relative overflow-hidden flex flex-col justify-end"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: '55% center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#070503',
          minHeight: '88svh',
          maskImage: 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)',
        }}
      >
        {/* Donkere overlay van onderaf — tekst leesbaarheid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(4,3,2,0.97) 0%, rgba(4,3,2,0.82) 25%, rgba(4,3,2,0.35) 52%, rgba(4,3,2,0.08) 72%, transparent 100%)',
            zIndex: 1,
          }}
        />
        {/* Boven scrim — navbar */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: 160,
            background: 'linear-gradient(to bottom, rgba(4,3,2,0.72) 0%, rgba(4,3,2,0.28) 50%, transparent 100%)',
            zIndex: 1,
          }}
        />

        {/* ── Tekst content + CTA ── */}
        <div
          className="relative flex flex-col animate-fade-up"
          style={{ padding: '0 28px 36px', zIndex: 2 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5" style={{ marginBottom: 14 }}>
            <div
              style={{
                width: 20,
                height: 1,
                background: 'linear-gradient(90deg, rgba(200,168,75,0.15) 0%, #C8A84B 100%)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#C8A84B',
              }}
            >
              Premium Bijbelse Wanddecoratie
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-bold text-white"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(36px, 9.5vw, 50px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}
          >
            Maak{' '}
            <span style={{ color: '#F5E070', textShadow: '0 0 28px rgba(245,224,112,0.40)' }}>
              Gods Woord
            </span>
            <br />
            zichtbaar in
            <br />
            jouw ruimte.
          </h1>

          {/* Subtekst */}
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.65,
              color: 'rgba(255,252,245,0.68)',
              marginBottom: 26,
            }}
          >
            Premium Bijbelse posters die Gods Woord<br />
            zichtbaar maken in jouw kamer.
          </p>

          {/* CTA's */}
          <div className="flex flex-col gap-3" style={{ marginBottom: 22 }}>
            <Link
              href="#customizer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold tracking-wide transition-all duration-300 active:scale-[0.97]"
              style={{
                fontSize: 15,
                background: 'linear-gradient(135deg, #F2D458 0%, #C8A84B 55%, #A88830 100%)',
                color: '#160F00',
                height: 58,
                boxShadow: '0 0 0 1.5px rgba(255,255,255,0.22), 0 6px 32px rgba(200,168,75,0.70)',
                letterSpacing: '0.01em',
              }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              Kies jouw BibleSign
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.3">
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>
            <Link
              href="/collectie"
              className="inline-flex items-center justify-center gap-2 font-medium"
              style={{ fontSize: 14, color: 'rgba(255,252,245,0.55)', height: 40 }}
            >
              Bekijk collectie
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>
          </div>

          {/* USP's */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {trustPoints.map(point => (
              <div key={point} className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 15, height: 15, background: 'rgba(200,168,75,0.16)' }}
                >
                  <svg width="6" height="6" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 3.5-4" stroke="#C8A84B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: 12, color: 'rgba(255,252,245,0.60)' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
