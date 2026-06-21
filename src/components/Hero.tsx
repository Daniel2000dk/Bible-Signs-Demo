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
      className="relative overflow-hidden lg:h-[78vh] lg:min-h-[720px]"
      style={{ background: '#1A1A1A', paddingTop: 80 }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '256px 256px',
          zIndex: 0,
        }}
      />

      {/* Deep left vignette — anchors text side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 80% at 0% 50%, rgba(12,10,8,0.55) 0%, transparent 65%)',
          zIndex: 0,
        }}
      />

      {/* ── Desktop layout: side-by-side ── */}
      <div
        className="hidden lg:flex h-full max-w-[1520px] mx-auto px-10 xl:px-16"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Left: Text + CTA */}
        <div
          className="flex flex-col justify-center gap-7 animate-fade-up"
          style={{
            width: '40%',
            flexShrink: 0,
            position: 'relative',
            zIndex: 10,
            paddingRight: 32,
          }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 self-start">
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1,
                background:
                  'linear-gradient(90deg, #C8A84B 0%, rgba(200,168,75,0.15) 100%)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#C8A84B',
              }}
            >
              Premium Bijbelse Wanddecoratie
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-bold text-[#F5F0E8]"
            style={{
              fontSize: 'clamp(38px, 4.6vw, 66px)',
              lineHeight: 1.03,
              letterSpacing: '-0.022em',
            }}
          >
            Maak{' '}
            <span
              style={{
                color: '#C8A84B',
                textShadow:
                  '0 0 48px rgba(200,168,75,0.22), 0 2px 16px rgba(200,168,75,0.12)',
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
              fontSize: 'clamp(14px, 1.1vw, 17px)',
              lineHeight: 1.72,
              color: 'rgba(245,240,232,0.68)',
              maxWidth: 370,
            }}
          >
            Premium Bijbelse posters die je dagelijks herinneren aan
            waarheid, identiteit en rust in Christus.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Link
              href="#customizer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 hover:-translate-y-[2px] text-[#1A1A1A]"
              style={{
                background: '#C8A84B',
                padding: '0 30px',
                height: 54,
                boxShadow:
                  '0 8px 28px rgba(200,168,75,0.48), 0 2px 8px rgba(200,168,75,0.22)',
                whiteSpace: 'nowrap',
              }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/22 to-transparent pointer-events-none" />
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
              className="group inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-200 hover:text-[rgba(245,240,232,0.82)]"
              style={{ color: 'rgba(245,240,232,0.50)' }}
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
          <div className="flex flex-wrap gap-x-5 gap-y-2.5">
            {trustPoints.map(point => (
              <div key={point} className="flex items-center gap-1.5">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 15, height: 15, background: 'rgba(200,168,75,0.14)' }}
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
                <span style={{ fontSize: 12, color: 'rgba(245,240,232,0.54)' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D gallery */}
        <div
          className="flex-1 relative"
          style={{ overflow: 'hidden' }}
        >
          <FloatingPosterGallery />
        </div>
      </div>

      {/* ── Mobile layout: stacked ── */}
      <div
        className="lg:hidden flex flex-col"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Text + CTA block */}
        <div className="flex flex-col gap-5 px-6 pt-8 pb-6 animate-fade-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 self-start">
            <span
              style={{
                display: 'block',
                width: 18,
                height: 1,
                background: 'linear-gradient(90deg, #C8A84B 0%, rgba(200,168,75,0.15) 100%)',
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
            className="font-serif font-bold text-[#F5F0E8]"
            style={{
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
              color: 'rgba(245,240,232,0.65)',
              maxWidth: 360,
            }}
          >
            Premium Bijbelse posters die je dagelijks herinneren aan
            waarheid, identiteit en rust in Christus.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href="#customizer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 active:scale-[0.97] text-[#1A1A1A]"
              style={{
                background: '#C8A84B',
                padding: '0 28px',
                height: 52,
                boxShadow: '0 6px 24px rgba(200,168,75,0.44)',
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
              style={{ color: 'rgba(245,240,232,0.48)' }}
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
          <div className="flex flex-wrap gap-x-4 gap-y-2">
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
                <span style={{ fontSize: 11.5, color: 'rgba(245,240,232,0.50)' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile poster strip */}
        <div
          style={{
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 32,
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
