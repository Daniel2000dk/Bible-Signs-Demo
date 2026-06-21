import React from 'react'
import { HeroPoster } from '@/data/heroPosters'

interface PosterCard3DProps {
  poster: HeroPoster
  width?: number
  height?: number
  style?: React.CSSProperties
}

export default function PosterCard3D({
  poster,
  width = 200,
  height = 280,
  style,
}: PosterCard3DProps) {
  const framePad = Math.round(width * 0.038)
  const innerPadV = Math.round(height * 0.082)
  const innerPadH = Math.round(width * 0.078)
  const lineOffset = Math.round(height * 0.048)
  const categorySize = Math.max(5.5, Math.round(width * 0.033))
  const titleSize = Math.max(12, Math.round(width * 0.086))
  const verseSize = Math.max(6.5, Math.round(width * 0.04))
  const refSize = Math.max(5.5, Math.round(width * 0.034))
  const dividerW = Math.round(width * 0.1)

  return (
    <div style={{ width, height, flexShrink: 0, ...style }}>
      {/* Black picture frame */}
      <div
        style={{
          width: '100%',
          height: '100%',
          padding: framePad,
          background: 'linear-gradient(150deg, #191917 0%, #0E0E0C 55%, #131311 100%)',
          boxShadow: [
            '0 2px 8px rgba(0,0,0,0.55)',
            '0 10px 30px rgba(0,0,0,0.65)',
            '0 24px 72px rgba(0,0,0,0.45)',
          ].join(', '),
          position: 'relative',
        }}
      >
        {/* Gold hairline on frame inner edge */}
        <div
          style={{
            position: 'absolute',
            inset: framePad - 1,
            border: '1px solid rgba(200,168,75,0.14)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Off-white poster interior */}
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#F5F0E8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${innerPadV}px ${innerPadH}px`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top gold rule */}
          <div
            style={{
              position: 'absolute',
              top: lineOffset,
              left: innerPadH,
              right: innerPadH,
              height: 1,
              background: 'rgba(200,168,75,0.42)',
            }}
          />
          {/* Bottom gold rule */}
          <div
            style={{
              position: 'absolute',
              bottom: lineOffset,
              left: innerPadH,
              right: innerPadH,
              height: 1,
              background: 'rgba(200,168,75,0.42)',
            }}
          />

          {/* Poster content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: Math.round(height * 0.026),
              textAlign: 'center',
              width: '100%',
            }}
          >
            {/* Category eyebrow */}
            <span
              style={{
                fontSize: categorySize,
                letterSpacing: '0.22em',
                color: '#C8A84B',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 700,
                textTransform: 'uppercase' as const,
              }}
            >
              {poster.category}
            </span>

            {/* Gold divider */}
            <div
              style={{
                width: dividerW,
                height: 1,
                background: 'rgba(200,168,75,0.55)',
              }}
            />

            {/* Main title */}
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontSize: titleSize,
                fontWeight: 700,
                color: '#1A1A1A',
                lineHeight: 1.2,
                textAlign: 'center',
                letterSpacing: '-0.01em',
              }}
            >
              {poster.title}
            </h3>

            {/* Bible verse */}
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontSize: verseSize,
                fontStyle: 'italic',
                color: '#4A4A4A',
                lineHeight: 1.65,
                textAlign: 'center',
                maxWidth: '88%',
              }}
            >
              {poster.verse}
            </p>

            {/* Reference */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: Math.round(width * 0.024),
                marginTop: Math.round(height * 0.008),
              }}
            >
              <div
                style={{
                  width: Math.round(width * 0.068),
                  height: 1,
                  background: 'rgba(200,168,75,0.45)',
                }}
              />
              <span
                style={{
                  fontSize: refSize,
                  color: '#C8A84B',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              >
                {poster.reference}
              </span>
              <div
                style={{
                  width: Math.round(width * 0.068),
                  height: 1,
                  background: 'rgba(200,168,75,0.45)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
