'use client'

import { useEffect, useRef } from 'react'
import PosterCard3D from './PosterCard3D'
import { heroPosters } from '@/data/heroPosters'

const TOTAL = heroPosters.length
const POSTER_W = 230
const POSTER_H = 322

// Cinematic snelheid — volle rotatie in ~124 seconden
const SPEED = 1 / 5200

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

// 5 posters duidelijk zichtbaar, side posters minimale blur
const KEYFRAMES = [
  { x: 0,   z: 0,    rotY: 0,  scale: 1.00, opacity: 1.00, blur: 0   },
  { x: 255, z: -72,  rotY: 14, scale: 0.91, opacity: 0.86, blur: 0   },
  { x: 468, z: -142, rotY: 25, scale: 0.80, opacity: 0.60, blur: 0   },
  { x: 636, z: -202, rotY: 34, scale: 0.67, opacity: 0.22, blur: 0.7 },
  { x: 758, z: -252, rotY: 41, scale: 0.56, opacity: 0.00, blur: 1.4 },
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

        // Subtiel organisch zweven — gouden ratio voor niet-herhalend patroon
        const floatY = Math.sin(now / 2800 + i * 0.618) * 5

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
    <div
      className="relative w-full"
      style={{ perspective: '1400px' }}
    >
      {/* Carrousel podium */}
      <div className="relative w-full" style={{ height: 400 }}>

        {/* Ambient glow achter posters */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 68% 55% at 50% 50%, rgba(200,168,75,0.055) 0%, rgba(200,168,75,0.012) 58%, transparent 75%)',
            zIndex: 0,
          }}
        />

        {/* Bodem fade → naadloos in transparante achtergrond */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: 110,
            background: 'linear-gradient(to top, rgba(10,10,14,0.85) 0%, transparent 100%)',
            zIndex: 45,
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
              boxShadow: '0 28px 72px rgba(0,0,0,0.60), 0 8px 22px rgba(0,0,0,0.38)',
            }}
          >
            <PosterCard3D poster={poster} width={POSTER_W} height={POSTER_H} />
          </div>
        ))}
      </div>

    </div>
  )
}
