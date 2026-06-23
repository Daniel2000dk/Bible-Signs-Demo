import Link from 'next/link'

const trustPoints = [
  'Gratis verzending boven €50',
  '30 dagen retour',
  'Premium printkwaliteit',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Linkse scrim — tekst leesbaarheid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(4,3,2,0.92) 0%, rgba(4,3,2,0.80) 22%, rgba(4,3,2,0.50) 42%, rgba(4,3,2,0.12) 62%, transparent 76%)',
          zIndex: 1,
        }}
      />
      {/* Onderste scrim */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(4,3,2,0.72) 0%, rgba(4,3,2,0.10) 28%, transparent 50%)',
          zIndex: 1,
        }}
      />
      {/* Bovenste scrim */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: 140,
          background: 'linear-gradient(to bottom, rgba(4,3,2,0.55) 0%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Desktop: tekst links, gallerij rechts in de foto ── */}
      <div
        className="hidden lg:flex items-center relative"
        style={{ minHeight: '100vh', zIndex: 2 }}
      >
        <div
          className="flex flex-col animate-fade-up"
          style={{
            flex: '0 0 50%',
            paddingLeft: 'clamp(52px, 6.5vw, 104px)',
            paddingRight: 48,
            paddingTop: 100,
            paddingBottom: 88,
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3" style={{ marginBottom: 26 }}>
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
              fontSize: 'clamp(42px, 4.6vw, 72px)',
              lineHeight: 1.04,
              letterSpacing: '-0.022em',
              textShadow: '0 2px 40px rgba(0,0,0,0.80)',
              marginBottom: 22,
            }}
          >
            Maak{' '}
            <span
              style={{
                color: '#F5E070',
                textShadow:
                  '0 0 48px rgba(245,224,112,0.60), 0 2px 28px rgba(0,0,0,0.60)',
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
          <p
            style={{
              fontSize: 'clamp(14px, 1.08vw, 17px)',
              lineHeight: 1.74,
              color: 'rgba(255,252,245,0.85)',
              maxWidth: 400,
              marginBottom: 40,
              textShadow: '0 1px 16px rgba(0,0,0,0.60)',
            }}
          >
            Premium Bijbelse posters die je dagelijks herinneren aan
            waarheid, identiteit en rust in Christus.
          </p>

          {/* CTA knoppen */}
          <div className="flex items-center gap-5" style={{ marginBottom: 28 }}>
            <Link
              href="#customizer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.03]"
              style={{
                background:
                  'linear-gradient(135deg, #F0D060 0%, #C8A84B 60%, #A88830 100%)',
                color: '#1A1200',
                padding: '0 42px',
                height: 62,
                boxShadow:
                  '0 0 0 1.5px rgba(255,255,255,0.28), 0 8px 40px rgba(200,168,75,0.85), 0 2px 12px rgba(200,168,75,0.45)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.01em',
              }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              Kies jouw BibleSign
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>

            <Link
              href="/collectie"
              className="group inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-200 hover:text-white"
              style={{
                color: 'rgba(255,252,245,0.72)',
                textShadow: '0 1px 8px rgba(0,0,0,0.50)',
              }}
            >
              Bekijk collectie
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.85"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>
          </div>

          {/* Trust points */}
          <div className="flex items-center gap-5">
            {trustPoints.map((point, i) => (
              <div key={point} className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 15, height: 15, background: 'rgba(200,168,75,0.15)' }}
                  >
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5 3.5-4"
                        stroke="#C8A84B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 11.5,
                      color: 'rgba(255,252,245,0.70)',
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
                      height: 13,
                      background: 'rgba(245,240,232,0.10)',
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div
        className="lg:hidden flex flex-col relative"
        style={{ zIndex: 2, minHeight: '100svh', justifyContent: 'flex-end', paddingBottom: 60 }}
      >
        <div className="flex flex-col items-center text-center gap-5 px-6 pt-24 pb-6 animate-fade-up">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div
              style={{
                width: 20,
                height: 1,
                background: 'linear-gradient(90deg, rgba(200,168,75,0.1) 0%, #C8A84B 100%)',
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
            <div
              style={{
                width: 20,
                height: 1,
                background: 'linear-gradient(90deg, #C8A84B 0%, rgba(200,168,75,0.1) 100%)',
                flexShrink: 0,
              }}
            />
          </div>

          <h1
            className="font-bold text-white"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(34px, 9vw, 52px)',
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 32px rgba(0,0,0,0.80)',
            }}
          >
            Maak{' '}
            <span style={{ color: '#F5E070', textShadow: '0 0 32px rgba(245,224,112,0.55)' }}>
              Gods Woord
            </span>
            <br />
            zichtbaar in
            <br />
            jouw ruimte.
          </h1>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.68,
              color: 'rgba(245,240,232,0.72)',
              maxWidth: 320,
              textShadow: '0 1px 12px rgba(0,0,0,0.60)',
            }}
          >
            Premium Bijbelse posters die je dagelijks herinneren aan
            waarheid, identiteit en rust in Christus.
          </p>

          <div className="flex flex-wrap justify-center gap-3 items-center">
            <Link
              href="#customizer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 active:scale-[0.97]"
              style={{
                background: 'linear-gradient(135deg, #F0D060 0%, #C8A84B 60%, #A88830 100%)',
                color: '#1A1200',
                padding: '0 28px',
                height: 52,
                boxShadow:
                  '0 0 0 1.5px rgba(255,255,255,0.22), 0 6px 24px rgba(200,168,75,0.55)',
              }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              Kies jouw BibleSign
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>

            <Link
              href="/collectie"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium"
              style={{ color: 'rgba(245,240,232,0.55)', textShadow: '0 1px 8px rgba(0,0,0,0.50)' }}
            >
              Bekijk collectie
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.85">
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {trustPoints.map(point => (
              <div key={point} className="flex items-center gap-1.5">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 14, height: 14, background: 'rgba(200,168,75,0.13)' }}
                >
                  <svg width="6" height="6" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 3.5-4" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: 11.5, color: 'rgba(255,252,245,0.65)', textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
