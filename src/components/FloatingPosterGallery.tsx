'use client'

import { useEffect, useRef } from 'react'
import PosterCard3D from './PosterCard3D'
import { heroPosters } from '@/data/heroPosters'

const TOTAL = heroPosters.length
const POSTER_W = 207
const POSTER_H = 290

// Rustige cinematic rotatie
const SPEED = 1 / 5200

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

// Centrale posters dominant, zijkant subtieler — geen zware blur
const KEYFRAMES = [
  { x: 0,   z: 0,    rotY: 0,  scale: 1.00, opacity: 1.00, blur: 0   },
  { x: 224, z: -64,  rotY: 13, scale: 0.90, opacity: 0.78, blur: 0   },
  { x: 412, z: -126, rotY: 22, scale: 0.79, opacity: 0.50, blur: 0.3 },
  { x: 560, z: -180, rotY: 31, scale: 0.66, opacity: 0.17, blur: 0.6 },
  { x: 668, z: -224, rotY: 38, scale: 0.55, opacity: 0.00, blur: 1.0 },
]

interface Transform {
  x: number
  z: number
  rotateY: number
  scale: number
  opacity: number
  blur: number
}

function getTransform(offset: number): Transform {
  const abs = Math.abs(offset)
  const sign = offset >= 0 ? 1 : -1
  const maxIdx = KEYFRAMES.length - 1

  if (abs >= maxIdx) {
    return {
      x: sign * KEYFRAMES[maxIdx].x,
      z: KEYFRAMES[maxIdx].z,
      rotateY: -sign * KEYFRAMES[maxIdx].rotY,
      scale: KEYFRAMES[maxIdx].scale,
      opacity: 0,
      blur: KEYFRAMES[maxIdx].blur,
    }
  }

  const lo = Math.floor(abs)
  const t = abs - lo
  const from = KEYFRAMES[lo]
  const to = KEYFRAMES[lo + 1]

  return {
    x: sign * lerp(from.x, to.x, t),
    z: lerp(from.z, to.z, t),
    rotateY: -sign * lerp(from.rotY, to.rotY, t),
    scale: lerp(from.scale, to.scale, t),
    opacity: lerp(from.opacity, to.opacity, t),
    blur: lerp(from.blur, to.blur, t),
  }
}

export default function FloatingPosterGallery() {
  const posRef = useRef(0)
  const posterRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf: number
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100)
      last = now

      posRef.current = (posRef.current + dt * SPEED) % TOTAL

      for (let i = 0; i < TOTAL; i++) {
        const el = posterRefs.current[i]
        if (!el) continue

        let offset = i - posRef.current
        if (offset > TOTAL / 2) offset -= TOTAL
        if (offset < -TOTAL / 2) offset += TOTAL

        const tr = getTransform(offset)
        const opacity = Math.max(0, tr.opacity)

        const floatY = Math.sin(now / 3200 + i * 0.618) * 4

        el.style.transform = `translate(-50%, calc(-50% + ${floatY.toFixed(1)}px)) translateX(${tr.x.toFixed(1)}px) translateZ(${tr.z.toFixed(1)}px) rotateY(${tr.rotateY.toFixed(2)}deg) scale(${tr.scale.toFixed(3)})`
        el.style.opacity = opacity.toFixed(3)
        el.style.zIndex = String(Math.max(1, Math.round(50 - Math.abs(offset) * 10)))
        el.style.filter = tr.blur > 0.05 ? `blur(${tr.blur.toFixed(2)}px)` : ''
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="relative w-full" style={{ perspective: '1400px' }}>
      <div className="relative w-full" style={{ height: 370 }}>

        {/* Subtiele ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 52%, rgba(200,168,75,0.042) 0%, transparent 72%)',
            zIndex: 0,
          }}
        />

        {heroPosters.map((poster, index) => (
          <div
            key={poster.id}
            ref={el => { posterRefs.current[index] = el }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: POSTER_W,
              height: POSTER_H,
              opacity: 0,
              willChange: 'transform, opacity',
              pointerEvents: 'none',
              boxShadow: '0 24px 64px rgba(0,0,0,0.58), 0 6px 18px rgba(0,0,0,0.34)',
            }}
          >
            <PosterCard3D poster={poster} width={POSTER_W} height={POSTER_H} />
          </div>
        ))}
      </div>
    </div>
  )
}
