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
      style={{ background: '#1A1A1A', minHeight: '100svh', paddingTop: 80 }}
    >
      {/* Subtiele noise textuur */}
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

      {/* Centrale radiale gloed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 78% 52% at 50% 36%, rgba(200,168,75,0.038) 0%, transparent 65%)',
          zIndex: 0,
        }}
      />

      {/* ── Desktop: gecentraliseerde kolom ── */}
      <div
        className="hidden lg:flex flex-col items-center text-center"
        style={{ position: 'relative', zIndex: 1, paddingTop: 44, paddingBottom: 68 }}
      >
        {/* Eyebrow — symmetrisch */}
        <div className="flex items-center gap-3 animate-fade-up" style={{ marginBottom: 22 }}>
          <div
            style={{
              width: 36,
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
          <div
            style={{
              width: 36,
              height: 1,
              background: 'linear-gradient(90deg, #C8A84B 0%, rgba(200,168,75,0.08) 100%)',
              flexShrink: 0,
            }}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-bold text-[#F5F0E8] animate-fade-up"
          style={{
            fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            fontSize: 'clamp(42px, 5.2vw, 74px)',
            lineHeight: 1.04,
            letterSpacing: '-0.022em',
            maxWidth: 800,
          }}
        >
          Maak{' '}
          <span
            style={{
              color: '#C8A84B',
              textShadow:
                '0 0 56px rgba(200,168,75,0.22), 0 2px 20px rgba(200,168,75,0.10)',
            }}
          >
            Gods Woord
          </span>
          <br />
          zichtbaar in jouw ruimte.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.05vw, 16.5px)',
            lineHeight: 1.74,
            color: 'rgba(245,240,232,0.56)',
            maxWidth: 420,
            marginTop: 18,
          }}
        >
          Premium Bijbelse posters die je dagelijks herinneren aan
          waarheid, identiteit en rust in Christus.
        </p>

        {/* 3D Carrousel — volledige breedte */}
        <div className="w-full" style={{ marginTop: 44 }}>
          <FloatingPosterGallery />
        </div>

        {/* CTA knoppen */}
        <div className="flex items-center gap-5" style={{ marginTop: 32 }}>
          <Link
            href="#customizer"
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold text-[13.5px] tracking-wide transition-all duration-300 hover:-translate-y-[2px] text-[#1A1A1A]"
            style={{
              background: '#C8A84B',
              padding: '0 36px',
              height: 56,
              boxShadow:
                '0 8px 32px rgba(200,168,75,0.52), 0 2px 8px rgba(200,168,75,0.24)',
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
            style={{ color: 'rgba(245,240,232,0.44)' }}
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
        <div className="flex items-center gap-5" style={{ marginTop: 22 }}>
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
                <span style={{ fontSize: 11.5, color: 'rgba(245,240,232,0.48)' }}>
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

      {/* ── Mobile: gestapeld ── */}
      <div
        className="lg:hidden flex flex-col"
        style={{ position: 'relative', zIndex: 1 }}
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
                <span style={{ fontSize: 11.5, color: 'rgba(245,240,232,0.48)' }}>
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
