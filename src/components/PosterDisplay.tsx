import React from 'react'
import type { PosterDesign } from '@/types'

type PosterSize = 'xs' | 'sm' | 'md' | 'lg' | 'hero'

interface PosterDisplayProps {
  design: PosterDesign
  size?: PosterSize
  showFrame?: boolean
  className?: string
}

const sizeConfig: Record<
  PosterSize,
  {
    width: number
    height: number
    framePx: number
    padding: number
    headingPx: number
    refPx: number
    logoPx: number
  }
> = {
  xs:   { width: 80,  height: 120, framePx: 3,  padding: 8,  headingPx: 11, refPx: 5,  logoPx: 5  },
  sm:   { width: 150, height: 225, framePx: 5,  padding: 14, headingPx: 20, refPx: 8,  logoPx: 7  },
  md:   { width: 200, height: 300, framePx: 6,  padding: 18, headingPx: 27, refPx: 10, logoPx: 8  },
  lg:   { width: 240, height: 360, framePx: 8,  padding: 22, headingPx: 34, refPx: 11, logoPx: 9  },
  hero: { width: 300, height: 450, framePx: 10, padding: 30, headingPx: 44, refPx: 13, logoPx: 10 },
}

export default function PosterDisplay({
  design,
  size = 'lg',
  showFrame = true,
  className = '',
}: PosterDisplayProps) {
  const cfg = sizeConfig[size]

  const shadow = showFrame
    ? `0 2px 6px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.12), 0 28px 72px rgba(0,0,0,0.10)`
    : 'none'

  const posterStyle: React.CSSProperties = {
    width:           cfg.width,
    height:          cfg.height,
    backgroundColor: design.background,
    display:         'flex',
    flexDirection:   'column',
    justifyContent:  'space-between',
    padding:         cfg.padding,
    boxSizing:       'border-box',
    flexShrink:      0,
    position:        'relative',
    ...(showFrame
      ? {
          border:    `${cfg.framePx}px solid ${design.frameColor}`,
          boxShadow: shadow,
        }
      : {}),
  }

  return (
    <div style={posterStyle} className={`poster-text ${className}`}>
      {/* Top — BibleSigns logomark */}
      <div
        style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    600,
          fontSize:      cfg.logoPx,
          letterSpacing: '0.22em',
          color:         design.accentColor,
          textTransform: 'uppercase',
          opacity:       0.65,
        }}
      >
        BIBLESIGNS
      </div>

      {/* Center — Main verse text */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            fontFamily:    'var(--font-playfair)',
            fontWeight:    700,
            fontSize:      cfg.headingPx,
            lineHeight:    1.05,
            letterSpacing: '-0.02em',
            color:         design.textColor,
            textTransform: 'uppercase',
          }}
        >
          {design.lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>

      {/* Bottom — Bible reference */}
      <div
        style={{
          fontFamily:    'var(--font-inter)',
          fontWeight:    400,
          fontSize:      cfg.refPx,
          letterSpacing: '0.18em',
          color:         design.accentColor,
          textTransform: 'uppercase',
        }}
      >
        {design.reference}
      </div>
    </div>
  )
}
