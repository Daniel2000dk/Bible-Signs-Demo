'use client'

import Link from 'next/link'

const shopLinks = [
  { label: 'Alle designs',    href: '/collectie' },
  { label: 'Identiteit',      href: '/collectie' },
  { label: 'Rust & Vrede',    href: '/collectie' },
  { label: 'Kracht & Moed',   href: '/collectie' },
  { label: 'Hoop & Roeping',  href: '/collectie' },
]

const brandLinks = [
  { label: 'Onze missie',   href: '/onze-missie' },
  { label: 'Zaaimodel',     href: '/onze-missie'  },
  { label: 'Community',     href: '/community'    },
  { label: 'Personaliseer', href: '/collectie'    },
  { label: 'FAQ',           href: '/community'    },
]

const legalLinks = [
  { label: 'Privacybeleid',        href: '#' },
  { label: 'Algemene voorwaarden', href: '#' },
  { label: 'Retourbeleid',         href: '#' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(6,7,10,0.72)',
        borderTop: '1px solid rgba(200,168,75,0.08)',
      }}
    >
      {/* Top gold accent line */}
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent 0%, rgba(200,168,75,0.25) 30%, rgba(200,168,75,0.25) 70%, transparent 100%)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">

        {/* Main grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14"
          style={{ borderBottom: '1px solid rgba(245,240,232,0.06)' }}
        >

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 select-none group" style={{ textDecoration: 'none' }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M8 1v14M1 8h14" stroke="#C8A84B" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="flex items-baseline">
                <span
                  className="font-sans font-bold tracking-[0.22em] uppercase transition-colors duration-200 group-hover:text-white"
                  style={{ fontSize: 15, color: '#F5F0E8' }}
                >
                  BIBLE
                </span>
                <span
                  className="font-sans font-bold tracking-[0.22em] uppercase"
                  style={{ fontSize: 15, color: '#C8A84B' }}
                >
                  SIGNS
                </span>
              </span>
            </Link>

            <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.38)', lineHeight: 1.68, maxWidth: 200 }}>
              Premium christelijke posters die jongeren écht willen ophangen.
            </p>

            <p
              className="font-serif italic"
              style={{ fontSize: 13, color: 'rgba(200,168,75,0.60)', lineHeight: 1.5 }}
            >
              &ldquo;Geloof dat je kamer versterkt.&rdquo;
            </p>

            {/* Zaai badge */}
            <div
              className="self-start inline-flex items-center gap-2"
              style={{
                border: '1px solid rgba(200,168,75,0.18)',
                padding: '6px 12px',
                borderRadius: 3,
                marginTop: 4,
              }}
            >
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                <polygon
                  points="5 1 6.18 3.58 9 3.94 6.94 5.94 7.45 8.74 5 7.38 2.55 8.74 3.06 5.94 1 3.94 3.82 3.58 5 1"
                  fill="none"
                  stroke="#C8A84B"
                  strokeWidth="0.8"
                />
              </svg>
              <span
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: '0.20em',
                  textTransform: 'uppercase',
                  color: 'rgba(200,168,75,0.65)',
                }}
              >
                10% wordt gezaaid
              </span>
            </div>
          </div>

          {/* Shop links */}
          <div className="flex flex-col gap-5">
            <p
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(200,168,75,0.70)',
              }}
            >
              Collectie
            </p>
            <nav className="flex flex-col gap-2.5">
              {shopLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{ fontSize: 13, color: 'rgba(245,240,232,0.38)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.70)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.38)')}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Brand links */}
          <div className="flex flex-col gap-5">
            <p
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(200,168,75,0.70)',
              }}
            >
              Merk
            </p>
            <nav className="flex flex-col gap-2.5">
              {brandLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{ fontSize: 13, color: 'rgba(245,240,232,0.38)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.70)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.38)')}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + contact */}
          <div className="flex flex-col gap-5">
            <p
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(200,168,75,0.70)',
              }}
            >
              Volg ons
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'TikTok',    href: '#' },
                { label: 'Pinterest', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-1.5 transition-colors duration-150"
                  style={{ fontSize: 13, color: 'rgba(245,240,232,0.38)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.70)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.38)')}
                >
                  {label}
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ opacity: 0.35 }}>
                    <path d="M2 8 8 2M5 2h3v3" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 mt-1">
              <p
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(200,168,75,0.70)',
                }}
              >
                Contact
              </p>
              <a
                href="mailto:hallo@biblesigns.nl"
                style={{ fontSize: 13, color: 'rgba(245,240,232,0.38)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.70)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.38)')}
              >
                hallo@biblesigns.nl
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: 11.5, color: 'rgba(245,240,232,0.22)' }}>
            © {new Date().getFullYear()} BibleSigns. Alle rechten voorbehouden.
          </p>

          <nav className="flex flex-wrap gap-5 justify-center sm:justify-end">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{ fontSize: 11, color: 'rgba(245,240,232,0.18)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.50)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.18)')}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
