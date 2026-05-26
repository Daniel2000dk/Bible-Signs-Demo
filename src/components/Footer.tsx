import Link from 'next/link'

const shopLinks = [
  { label: 'Alle designs',    href: '/collectie'        },
  { label: 'Identiteit',      href: '/collectie'        },
  { label: 'Rust & Vrede',    href: '/collectie'        },
  { label: 'Kracht & Moed',   href: '/collectie'        },
  { label: 'Doel & Richting', href: '/collectie'        },
]

const brandLinks = [
  { label: 'Onze missie',   href: '/onze-missie' },
  { label: 'Zaaimodel',     href: '/onze-missie' },
  { label: 'Community',     href: '/community'   },
  { label: 'Personaliseer', href: '/collectie'   },
  { label: 'FAQ',           href: '/community'   },
]

const legalLinks = [
  { label: 'Privacybeleid',        href: '#' },
  { label: 'Algemene voorwaarden', href: '#' },
  { label: 'Cookiebeleid',         href: '#' },
  { label: 'Retourbeleid',         href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-bs-black text-bs-offwhite pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-14 border-b border-bs-offwhite/10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link
              href="/"
              className="font-serif text-[22px] font-bold tracking-tight"
            >
              Bible<span className="text-bs-gold">Signs</span>
            </Link>
            <p className="text-[13px] text-bs-offwhite/50 leading-relaxed max-w-[200px]">
              Premium christelijke posters die jongeren écht willen ophangen.
            </p>
            <p className="font-serif text-[13px] italic text-bs-gold/70">
              &ldquo;Geloof dat je kamer versterkt.&rdquo;
            </p>

            {/* Seed badge */}
            <div className="inline-flex items-center gap-2 self-start mt-1 border border-bs-gold/20 px-3 py-1.5">
              <span className="text-bs-gold text-[10px]">✦</span>
              <span className="text-[10px] text-bs-gold tracking-widest font-semibold uppercase">
                10% wordt gezaaid
              </span>
            </div>
          </div>

          {/* Shop links */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-bs-gold">
              Collectie
            </p>
            <nav className="flex flex-col gap-2.5">
              {shopLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[13px] text-bs-offwhite/50 hover:text-bs-offwhite transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Brand links */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-bs-gold">
              Merk
            </p>
            <nav className="flex flex-col gap-2.5">
              {brandLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[13px] text-bs-offwhite/50 hover:text-bs-offwhite transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + contact */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-bs-gold">
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
                  className="text-[13px] text-bs-offwhite/50 hover:text-bs-offwhite transition-colors duration-150 flex items-center gap-2"
                >
                  {label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-40">
                    <path d="M2 8 8 2M5 2h3v3" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-bs-gold">
                Contact
              </p>
              <a
                href="mailto:hallo@biblesigns.nl"
                className="text-[13px] text-bs-offwhite/50 hover:text-bs-offwhite transition-colors duration-150"
              >
                hallo@biblesigns.nl
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-bs-offwhite/30">
            © {new Date().getFullYear()} BibleSigns. Alle rechten voorbehouden.
          </p>
          <nav className="flex flex-wrap gap-4 justify-center sm:justify-end">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[11px] text-bs-offwhite/25 hover:text-bs-offwhite/60 transition-colors duration-150"
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
