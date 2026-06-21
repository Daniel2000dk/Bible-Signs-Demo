'use client'

import { useState, useEffect } from 'react'
import PosterCard3D from './PosterCard3D'
import { heroPosters } from '@/data/heroPosters'

const TOTAL = heroPosters.length
const POSTER_W = 200
const POSTER_H = 280

interface PosterTransform {
  x: number
  z: number
  rotateY: number
  scale: number
  opacity: number
  blur: number
  zIndex: number
}

function getTransform(offset: number): PosterTransform {
  const abs = Math.abs(offset)
  const sign = offset === 0 ? 1 : offset > 0 ? 1 : -1

  switch (abs) {
    case 0:
      return { x: 0, z: 0, rotateY: 0, scale: 1, opacity: 1, blur: 0, zIndex: 20 }
    case 1:
      return { x: sign * 236, z: -72, rotateY: -sign * 21, scale: 0.89, opacity: 0.70, blur: 0, zIndex: 18 }
    case 2:
      return { x: sign * 414, z: -144, rotateY: -sign * 35, scale: 0.77, opacity: 0.36, blur: 1.5, zIndex: 16 }
    case 3:
      return { x: sign * 558, z: -204, rotateY: -sign * 45, scale: 0.64, opacity: 0.10, blur: 3, zIndex: 14 }
    default:
      return { x: sign * 670, z: -248, rotateY: -sign * 52, scale: 0.54, opacity: 0, blur: 4, zIndex: 12 }
  }
}

export default function FloatingPosterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TOTAL)
    }, 3600)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      className="w-full h-full relative"
      style={{ perspective: '1400px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient glow behind posters */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 54%, rgba(200,168,75,0.065) 0%, rgba(200,168,75,0.02) 50%, transparent 75%)',
        }}
      />

      {/* Bottom fade-out to blend with section edge */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 120,
          background: 'linear-gradient(0deg, #1A1A1A 0%, transparent 100%)',
          zIndex: 30,
        }}
      />

      {heroPosters.map((poster, index) => {
        let offset = index - currentIndex
        if (offset > TOTAL / 2) offset -= TOTAL
        if (offset < -TOTAL / 2) offset += TOTAL

        const t = getTransform(offset)

        return (
          <div
            key={poster.id}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: POSTER_W,
              height: POSTER_H,
              transform: `translate(-50%, -50%) translateX(${t.x}px) translateZ(${t.z}px) rotateY(${t.rotateY}deg) scale(${t.scale})`,
              opacity: t.opacity,
              filter: t.blur > 0 ? `blur(${t.blur}px)` : undefined,
              zIndex: t.zIndex,
              transition:
                'transform 0.72s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.72s ease, filter 0.72s ease',
              willChange: 'transform, opacity',
              pointerEvents: offset === 0 ? 'auto' : 'none',
            }}
          >
            <PosterCard3D poster={poster} width={POSTER_W} height={POSTER_H} />
          </div>
        )
      })}
    </div>
  )
}
