'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Collectie',    href: '/collectie'    },
  { label: 'Onze missie', href: '/onze-missie'  },
  { label: 'Community',   href: '/community'    },
]

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bs-offwhite/96 backdrop-blur-md border-b border-bs-sand shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="font-serif text-[22px] font-bold tracking-tight text-bs-black select-none"
          >
            Bible<span className="text-bs-gold">Signs</span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[13px] font-medium tracking-wide text-bs-dark hover:text-bs-black transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-3">
            {/* Primary CTA — desktop */}
            <Link
              href="/collectie"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-bs-black text-bs-offwhite text-[13px] font-medium tracking-wide hover:bg-bs-gold hover:text-bs-black transition-all duration-200"
            >
              Kies jouw BibleSign
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 6h8M6 2l4 4-4 4" />
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              aria-label="Menu openen"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-bs-dark hover:text-bs-black transition-colors"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="18" y1="6"  x2="6"  y2="18" />
                  <line x1="6"  y1="6"  x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="3" y1="7"  x2="21" y2="7"  />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-72 border-t border-bs-sand' : 'max-h-0'
        } bg-bs-offwhite`}
      >
        <div className="px-6 py-5 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-medium text-bs-dark hover:text-bs-black transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/collectie"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center w-full py-3 bg-bs-black text-bs-offwhite text-[13px] font-medium tracking-wide hover:bg-bs-gold hover:text-bs-black transition-all duration-200"
          >
            Kies jouw BibleSign
          </Link>
        </div>
      </div>
    </header>
  )
}
