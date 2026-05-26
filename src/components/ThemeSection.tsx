import Link from 'next/link'
import PosterDisplay from './PosterDisplay'
import { themes } from '@/data/themes'
import type { Theme } from '@/types'

function ThemeCard({ theme }: { theme: Theme }) {
  const isDark =
    theme.poster.background === '#1A1A1A' || theme.poster.background === '#2F3A32'

  return (
    <Link
      href={theme.href}
      className="group relative flex flex-col overflow-hidden border border-bs-sand/80 hover:border-bs-gold/40 hover:shadow-lg transition-all duration-300 bg-bs-offwhite"
    >
      {/* Poster thumbnail zone */}
      <div
        className="relative flex items-center justify-center py-10"
        style={{ backgroundColor: theme.poster.background }}
      >
        <PosterDisplay design={theme.poster} size="sm" showFrame />

        {/* Number badge */}
        <span
          className="absolute top-4 left-4 text-[11px] font-mono tracking-widest"
          style={{ color: theme.poster.accentColor, opacity: 0.8 }}
        >
          {theme.number}
        </span>
      </div>

      {/* Text content */}
      <div
        className={`p-6 flex flex-col gap-3 flex-1 ${
          isDark ? '' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-[19px] font-bold text-bs-black leading-tight group-hover:text-bs-black transition-colors">
            {theme.title}
          </h3>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="1.6"
            className="text-bs-gold mt-0.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          >
            <path d="M3 13 13 3M7 3h6v6"/>
          </svg>
        </div>

        <p className="text-[13px] leading-relaxed text-bs-dark">
          {theme.description}
        </p>

        <span className="text-[12px] font-medium text-bs-gold tracking-wide mt-auto pt-2">
          Ontdek thema →
        </span>
      </div>
    </Link>
  )
}

export default function ThemeSection() {
  return (
    <section id="themas" className="py-14 md:py-20 bg-bs-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold">
              Vind jouw thema
            </span>
            <h2 className="font-serif text-[30px] md:text-[40px] font-bold text-bs-black leading-tight">
              Elke poster<br />
              vertelt een verhaal.
            </h2>
          </div>
          <p className="text-[15px] text-bs-dark max-w-xs leading-relaxed md:text-right">
            Vier thema's. Elk ontworpen om dagelijks iets te zeggen over
            wie jij bent in Christus.
          </p>
        </div>

        {/* Theme grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {themes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  )
}
