'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Shop',         href: '/collectie'   },
  { label: "Thema's",     href: '/collectie'   },
  { label: 'Onze missie', href: '/onze-missie' },
  { label: 'Community',   href: '/community'   },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0806]/92 backdrop-blur-md border-b border-[rgba(245,240,232,0.09)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[84px]">

          {/* ── Logo ── */}
          <Link href="/" className="select-none flex items-center gap-2.5 shrink-0 group">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M8 1v14M1 8h14" stroke="#C8A84B" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="flex items-baseline">
              <span className="font-sans text-[16px] font-bold tracking-[0.22em] uppercase text-[#F5F0E8] group-hover:text-white transition-colors duration-200">
                BIBLE
              </span>
              <span className="font-sans text-[16px] font-bold tracking-[0.22em] uppercase text-[#C8A84B]">
                SIGNS
              </span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="relative text-[11px] font-semibold tracking-[0.13em] uppercase text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[#C8A84B] after:transition-all after:duration-250 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-4">

            {/* Search — desktop */}
            <button
              aria-label="Zoeken"
              className="hidden md:flex items-center justify-center w-8 h-8 text-[#F5F0E8]/38 hover:text-[#F5F0E8] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>

            {/* Account — desktop */}
            <button
              aria-label="Account"
              className="hidden md:flex items-center justify-center w-8 h-8 text-[#F5F0E8]/38 hover:text-[#F5F0E8] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </button>

            {/* Divider */}
            <div className="hidden md:block w-px h-4 bg-[rgba(245,240,232,0.1)]" />

            {/* Cart */}
            <button
              aria-label="Winkelwagen"
              className="relative flex items-center justify-center w-8 h-8 text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors duration-200"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-[14px] h-[14px] rounded-full bg-[#C8A84B] flex items-center justify-center text-[#1A1A1A] text-[8px] font-bold leading-none">
                0
              </span>
            </button>

            {/* Hamburger — mobile */}
            <button
              aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden flex items-center justify-center w-8 h-8 text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors"
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="3" y1="7"  x2="21" y2="7"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="17" x2="21" y2="17"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'max-h-80 border-t border-[rgba(245,240,232,0.08)]'
            : 'max-h-0'
        } bg-[#111111]`}
      >
        <div className="px-6 py-7 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-[12px] font-semibold tracking-[0.13em] uppercase text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="h-px bg-[rgba(245,240,232,0.08)] my-1" />
          <Link
            href="#customizer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C8A84B] text-[#1A1A1A] text-[13px] font-bold tracking-wide"
          >
            Kies jouw BibleSign
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M2 7h10M7 2l5 5-5 5"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
