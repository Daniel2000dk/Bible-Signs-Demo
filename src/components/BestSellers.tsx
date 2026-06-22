'use client'

import Link from 'next/link'

const themes = [
  {
    id: 'identiteit',
    category: 'IDENTITEIT',
    title: 'Nieuw in Christus',
    verse: 'Wie in Christus is, is een nieuwe schepping.',
    reference: '2 Kor. 5:17',
    count: 8,
    featured: true,
  },
  {
    id: 'rust',
    category: 'RUST & VREDE',
    title: 'Stil in de storm',
    verse: 'De HEER is mijn herder, het ontbreekt mij aan niets.',
    reference: 'Psalm 23:1',
    count: 6,
    featured: false,
  },
  {
    id: 'moed',
    category: 'MOED & KRACHT',
    title: 'Onwankelbaar',
    verse: 'Wees sterk en moedig. Ik ben met u.',
    reference: 'Jozua 1:9',
    count: 5,
    featured: false,
  },
  {
    id: 'genade',
    category: 'GENADE',
    title: 'Genoeg voor nu',
    verse: 'Mijn genade is u genoeg, want Mijn kracht wordt volbracht in zwakheid.',
    reference: '2 Kor. 12:9',
    count: 4,
    featured: false,
  },
  {
    id: 'hoop',
    category: 'HOOP & ROEPING',
    title: 'Plannen van vrede',
    verse: 'Ik ken de plannen die Ik voor u heb, spreekt de HEER.',
    reference: 'Jer. 29:11',
    count: 7,
    featured: false,
  },
  {
    id: 'vrijheid',
    category: 'VRIJHEID & WAARHEID',
    title: 'Vrij gemaakt',
    verse: 'U zult de waarheid kennen, en de waarheid zal u vrijmaken.',
    reference: 'Joh. 8:32',
    count: 5,
    featured: false,
  },
]

function ThemeCard({ theme }: { theme: typeof themes[0] }) {
  return (
    <Link
      href="/collectie"
      className="group relative flex flex-col justify-between p-8 rounded-xl overflow-hidden transition-all duration-400"
      style={{
        background: 'rgba(14,16,22,0.92)',
        border: '1px solid rgba(200,168,75,0.08)',
        borderTop: '1px solid rgba(200,168,75,0.18)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.38)',
        minHeight: 240,
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-5px)'
        el.style.borderTopColor = 'rgba(200,168,75,0.52)'
        el.style.boxShadow = '0 12px 48px rgba(0,0,0,0.56), 0 0 0 1px rgba(200,168,75,0.10), 0 0 32px rgba(200,168,75,0.06)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        el.style.borderTopColor = 'rgba(200,168,75,0.18)'
        el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.38)'
      }}
    >
      {/* Ambient glow top-center */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          height: 80,
          background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(200,168,75,0.07) 0%, transparent 100%)',
        }}
      />

      {/* Top: category + count */}
      <div className="flex items-start justify-between gap-4">
        <span
          style={{
            fontSize: 8.5,
            fontWeight: 700,
            letterSpacing: '0.28em',
            color: '#C8A84B',
            textTransform: 'uppercase',
          }}
        >
          {theme.category}
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: 'rgba(245,240,232,0.25)',
            whiteSpace: 'nowrap',
          }}
        >
          {theme.count} designs
        </span>
      </div>

      {/* Middle: title + verse */}
      <div className="flex flex-col gap-3 my-auto py-6">
        <h3
          className="font-serif font-bold text-[#F5F0E8] leading-tight"
          style={{ fontSize: 'clamp(20px, 2vw, 24px)' }}
        >
          {theme.title}
        </h3>
        <p
          className="font-serif italic"
          style={{
            fontSize: 14,
            lineHeight: 1.60,
            color: 'rgba(245,240,232,0.45)',
          }}
        >
          &ldquo;{theme.verse}&rdquo;
        </p>
        <span
          style={{
            fontSize: 10.5,
            color: 'rgba(200,168,75,0.55)',
            marginTop: 2,
          }}
        >
          {theme.reference}
        </span>
      </div>

      {/* Bottom: CTA row */}
      <div className="flex items-center justify-between">
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(245,240,232,0.35)',
            transition: 'color 0.2s',
          }}
          className="group-hover:!text-[rgba(245,240,232,0.65)]"
        >
          Bekijk thema
        </span>
        <svg
          width="16" height="16" viewBox="0 0 14 14"
          fill="none" stroke="rgba(200,168,75,0.45)" strokeWidth="1.6"
          className="group-hover:translate-x-1 transition-transform duration-300"
          style={{ transition: 'stroke 0.2s, transform 0.3s' }}
        >
          <path d="M2 7h10M7 2l5 5-5 5" />
        </svg>
      </div>
    </Link>
  )
}

export default function BestSellers() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'rgba(13,15,20,0.80)',
        paddingTop: 96,
        paddingBottom: 96,
        borderTop: '1px solid rgba(200,168,75,0.06)',
      }}
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(200,168,75,0.025) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4 max-w-[580px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
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
                Collectie
              </span>
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: 'linear-gradient(90deg, #C8A84B 0%, transparent 100%)',
                  flexShrink: 0,
                }}
              />
            </div>

            <h2
              className="font-serif font-bold text-[#F5F0E8] leading-[1.10]"
              style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
            >
              Premium Bijbelse designs.
              <br />
              <span style={{ color: 'rgba(245,240,232,0.52)' }}>Kies jouw thema.</span>
            </h2>

            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.70,
                color: 'rgba(245,240,232,0.40)',
                marginTop: 2,
              }}
            >
              Elk ontwerp is handcrafted. Elke boodschap tijdloos — gemaakt om dagelijks bij te dragen aan jouw ruimte.
            </p>
          </div>

          <Link
            href="/collectie"
            className="group hidden md:inline-flex items-center gap-2.5 shrink-0 mb-1 transition-all duration-200"
            style={{
              fontSize: 12.5,
              fontWeight: 500,
              color: 'rgba(200,168,75,0.60)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C8A84B')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,168,75,0.60)')}
          >
            Bekijk alle designs
            <svg
              width="13" height="13" viewBox="0 0 14 14"
              fill="none" stroke="currentColor" strokeWidth="1.8"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </Link>
        </div>

        {/* Theme grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {themes.map(theme => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-14 pt-10"
          style={{ borderTop: '1px solid rgba(200,168,75,0.07)' }}
        >
          <p style={{ fontSize: 13.5, color: 'rgba(245,240,232,0.32)' }}>
            Beschikbaar in Nederlands en Engels · Kies jouw Bijbeltekst in de customizer
          </p>
          <Link
            href="/collectie"
            className="group relative shrink-0 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300 hover:-translate-y-[1px]"
            style={{
              fontSize: 13,
              background: 'rgba(200,168,75,0.12)',
              color: '#C8A84B',
              border: '1px solid rgba(200,168,75,0.28)',
              padding: '0 28px',
              height: 46,
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(200,168,75,0.18)'
              e.currentTarget.style.borderColor = 'rgba(200,168,75,0.52)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(200,168,75,0.12)'
              e.currentTarget.style.borderColor = 'rgba(200,168,75,0.28)'
            }}
          >
            Volledige collectie bekijken
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
