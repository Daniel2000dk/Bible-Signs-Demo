import Link from 'next/link'
import FloatingPosterGallery from './FloatingPosterGallery'
import PosterCard3D from './PosterCard3D'
import { heroPosters } from '@/data/heroPosters'

const trustPoints = [
  'Gratis verzending boven €50',
  '30 dagen retour',
  'Premium printkwaliteit',
]

const MOBILE_POSTERS = heroPosters.slice(0, 8)

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: 'transparent' }}
    >

      {/* ── Desktop: split — tekst links, gallery rechts ── */}
      <div
        className="hidden lg:flex items-center"
        style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}
      >

        {/* Links: tekst + CTA */}
        <div
          className="flex flex-col animate-fade-up"
          style={{
            flex: '0 0 44%',
            paddingLeft: 'clamp(48px, 6vw, 96px)',
            paddingRight: 40,
            paddingTop: 96,
            paddingBottom: 80,
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3" style={{ marginBottom: 24 }}>
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
              fontSize: 'clamp(40px, 4.4vw, 70px)',
              lineHeight: 1.04,
              letterSpacing: '-0.022em',
              textShadow: '0 2px 32px rgba(0,0,0,0.70)',
              marginBottom: 20,
            }}
          >
            Maak{' '}
            <span
              style={{
                color: '#F5E070',
                textShadow: '0 0 40px rgba(245,224,112,0.55), 0 2px 24px rgba(0,0,0,0.50)',
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
              fontSize: 'clamp(14px, 1.05vw, 17px)',
              lineHeight: 1.74,
              color: 'rgba(255,252,245,0.88)',
              maxWidth: 380,
              marginBottom: 36,
              textShadow: '0 1px 12px rgba(0,0,0,0.50)',
            }}
          >
            Premium Bijbelse posters die je dagelijks herinneren aan
            waarheid, identiteit en rust in Christus.
          </p>

          {/* CTA knoppen */}
          <div className="flex items-center gap-5" style={{ marginBottom: 26 }}>
            <Link
              href="#customizer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #F0D060 0%, #C8A84B 60%, #A88830 100%)',
                color: '#1A1200',
                padding: '0 42px',
                height: 62,
                boxShadow:
                  '0 0 0 1.5px rgba(255,255,255,0.28), 0 8px 40px rgba(200,168,75,0.80), 0 2px 12px rgba(200,168,75,0.40)',
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
              style={{ color: 'rgba(255,252,245,0.72)', textShadow: '0 1px 8px rgba(0,0,0,0.40)' }}
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
                    style={{ width: 15, height: 15, background: 'rgba(200,168,75,0.13)' }}
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
                  <span style={{ fontSize: 11.5, color: 'rgba(255,252,245,0.72)', textShadow: '0 1px 8px rgba(0,0,0,0.50)' }}>
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

        {/* Rechts: FloatingPosterGallery — naadloos in aurora */}
        <div
          className="relative"
          style={{ flex: '0 0 56%', height: '100vh', overflow: 'hidden' }}
        >
          {/* Links: blend naar aurora (hard → transparant) */}
          <div
            className="absolute inset-y-0 left-0 pointer-events-none"
            style={{
              width: 320,
              background:
                'linear-gradient(to right, rgba(12,10,8,1.0) 0%, rgba(12,10,8,0.72) 35%, rgba(12,10,8,0.20) 65%, transparent 100%)',
              zIndex: 11,
            }}
          />
          {/* Boven: fade in */}
          <div
            className="absolute inset-x-0 top-0 pointer-events-none"
            style={{
              height: 200,
              background: 'linear-gradient(to bottom, rgba(12,10,8,0.88) 0%, transparent 100%)',
              zIndex: 10,
            }}
          />
          {/* Onder: fade uit */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              height: 200,
              background: 'linear-gradient(to top, rgba(12,10,8,0.88) 0%, transparent 100%)',
              zIndex: 10,
            }}
          />
          {/* Gallery — verticaal gecentreerd */}
          <div className="absolute inset-0 flex items-center">
            <FloatingPosterGallery />
          </div>
        </div>
      </div>

      {/* ── Mobile: gestapeld ── */}
      <div
        className="lg:hidden flex flex-col"
        style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 40 }}
      >
        {/* Tekst + CTA blok */}
        <div className="flex flex-col items-center text-center gap-5 px-6 pt-8 pb-6 animate-fade-up">
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

          {/* Headline */}
          <h1
            className="font-bold text-[#F5F0E8]"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(34px, 9vw, 52px)',
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
            }}
          >
            Maak{' '}
            <span style={{ color: '#C8A84B' }}>Gods Woord</span>
            <br />
            zichtbaar in
            <br />
            jouw ruimte.
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.68,
              color: 'rgba(245,240,232,0.60)',
              maxWidth: 340,
            }}
          >
            Premium Bijbelse posters die je dagelijks herinneren aan
            waarheid, identiteit en rust in Christus.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 items-center">
            <Link
              href="#customizer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 active:scale-[0.97] text-[#1A1A1A]"
              style={{
                background: '#C8A84B',
                padding: '0 28px',
                height: 52,
                boxShadow: '0 6px 24px rgba(200,168,75,0.46)',
              }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              Kies jouw BibleSign
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>

            <Link
              href="/collectie"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium"
              style={{ color: 'rgba(245,240,232,0.46)' }}
            >
              Bekijk collectie
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.85"
              >
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {trustPoints.map(point => (
              <div key={point} className="flex items-center gap-1.5">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 14, height: 14, background: 'rgba(200,168,75,0.13)' }}
                >
                  <svg width="6" height="6" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5 3.5-4"
                      stroke="#C8A84B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span style={{ fontSize: 11.5, color: 'rgba(255,252,245,0.72)', textShadow: '0 1px 8px rgba(0,0,0,0.50)' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile posterstrip */}
        <div
          style={{
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 40,
            paddingTop: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 14,
              paddingLeft: 24,
              paddingRight: 24,
              width: 'max-content',
            }}
          >
            {MOBILE_POSTERS.map(poster => (
              <div
                key={poster.id}
                style={{ scrollSnapAlign: 'center', flexShrink: 0 }}
              >
                <PosterCard3D poster={poster} width={134} height={188} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
