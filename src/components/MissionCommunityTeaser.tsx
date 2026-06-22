'use client'

import Link from 'next/link'

const communityBenefits = [
  'Early access bij lancering van nieuwe designs',
  'Meedenken over de collectie — jouw input telt',
  'Exclusieve welkomstkorting voor leden',
]

export default function MissionCommunityTeaser() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'rgba(10,12,18,0.80)',
        borderTop: '1px solid rgba(200,168,75,0.06)',
      }}
    >
      {/* Large editorial quote — full width top half */}
      <div className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden">
        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 40%, rgba(200,168,75,0.04) 0%, transparent 65%)',
          }}
        />

        {/* Large decorative serif " */}
        <div
          className="absolute top-6 left-8 pointer-events-none select-none hidden md:block"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 220,
            lineHeight: 1,
            color: 'rgba(200,168,75,0.04)',
          }}
          aria-hidden
        >
          &ldquo;
        </div>

        <div className="max-w-[1320px] mx-auto relative">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div
              style={{
                width: 28,
                height: 1,
                background: 'linear-gradient(90deg, transparent 0%, #C8A84B 100%)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.30em',
                textTransform: 'uppercase',
                color: '#C8A84B',
              }}
            >
              Onze missie
            </span>
          </div>

          {/* Editorial quote */}
          <blockquote
            className="font-serif font-bold text-[#F5F0E8] max-w-[820px]"
            style={{
              fontSize: 'clamp(28px, 4vw, 54px)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
            }}
          >
            &ldquo;Gods Woord hoeft niet
            <br />
            te verstoppen achter je smaak.{' '}
            <em className="not-italic" style={{ color: '#C8A84B' }}>
              Jij ook niet.
            </em>&rdquo;
          </blockquote>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.72,
              color: 'rgba(245,240,232,0.40)',
              maxWidth: 520,
              marginTop: 24,
            }}
          >
            Wij bestaan omdat geloof niet hoeft te verstoppen achter smaak.
            Gods Woord is krachtig genoeg voor de mooiste kamers — en voor
            de generatie die daarin woont.
          </p>

          {/* Zaai badge + mission link */}
          <div className="flex flex-wrap items-center gap-5 mt-10">
            <div
              className="inline-flex items-center gap-2.5"
              style={{
                border: '1px solid rgba(200,168,75,0.22)',
                padding: '8px 16px',
                borderRadius: 4,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <polygon
                  points="5 1 6.18 3.58 9 3.94 6.94 5.94 7.45 8.74 5 7.38 2.55 8.74 3.06 5.94 1 3.94 3.82 3.58 5 1"
                  fill="none"
                  stroke="#C8A84B"
                  strokeWidth="0.7"
                />
              </svg>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(200,168,75,0.70)',
                }}
              >
                10% wordt structureel gezaaid
              </span>
            </div>

            <Link
              href="/onze-missie"
              className="group inline-flex items-center gap-2 transition-colors duration-200 text-[rgba(245,240,232,0.40)] hover:text-[#C8A84B]"
              style={{ fontSize: 13, fontWeight: 500, textDecoration: 'none' }}
            >
              Lees onze missie
              <svg
                width="12" height="12" viewBox="0 0 14 14"
                fill="none" stroke="currentColor" strokeWidth="1.8"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Community strip */}
      <div
        style={{
          background: 'rgba(15,18,24,0.85)',
          borderTop: '1px solid rgba(200,168,75,0.08)',
          paddingTop: 56,
          paddingBottom: 60,
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            {/* Left: community copy */}
            <div className="flex flex-col gap-5 max-w-[560px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 22,
                    height: 1,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(200,168,75,0.70) 100%)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'rgba(200,168,75,0.70)',
                  }}
                >
                  Community
                </span>
              </div>

              <h2
                className="font-serif font-bold text-[#F5F0E8] leading-[1.14]"
                style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}
              >
                Word onderdeel van de{' '}
                <em className="not-italic" style={{ color: '#C8A84B' }}>
                  beweging.
                </em>
              </h2>

              <ul className="flex flex-col gap-3">
                {communityBenefits.map(benefit => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div
                      style={{
                        marginTop: 4,
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        background: 'rgba(200,168,75,0.10)',
                        border: '1px solid rgba(200,168,75,0.28)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="6" height="6" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5l2.5 2.5 3.5-4"
                          stroke="#C8A84B"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span style={{ fontSize: 14, color: 'rgba(245,240,232,0.55)', lineHeight: 1.55 }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col gap-4">
              <Link
                href="/community"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300 hover:-translate-y-[2px]"
                style={{
                  fontSize: 13,
                  background: 'rgba(200,168,75,0.10)',
                  color: '#C8A84B',
                  border: '1px solid rgba(200,168,75,0.32)',
                  padding: '0 36px',
                  height: 52,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(200,168,75,0.16)'
                  e.currentTarget.style.borderColor = 'rgba(200,168,75,0.55)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(200,168,75,0.10)'
                  e.currentTarget.style.borderColor = 'rgba(200,168,75,0.32)'
                }}
              >
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(200,168,75,0.12) 50%, transparent 100%)',
                  }}
                />
                Doe mee aan de community
                <svg
                  width="12" height="12" viewBox="0 0 14 14"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </Link>

              <p style={{ fontSize: 11.5, color: 'rgba(245,240,232,0.22)', textAlign: 'center' }}>
                Gratis · Geen spam · Altijd uitschrijven mogelijk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
