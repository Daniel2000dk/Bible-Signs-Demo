'use client'

import { useEffect, useRef } from 'react'
import PosterCard3D from './PosterCard3D'
import { heroPosters } from '@/data/heroPosters'

const TOTAL = heroPosters.length
const POSTER_W = 230
const POSTER_H = 322

// 1 poster positie per 3800ms → volle rotatie in ~91 seconden
const SPEED = 1 / 3800

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

// Vaste keyframe posities per geheel offset-getal
const KEYFRAMES = [
  { x: 0,   z: 0,    rotY: 0,  scale: 1.00, opacity: 1.00, blur: 0   },
  { x: 295, z: -85,  rotY: 22, scale: 0.88, opacity: 0.72, blur: 0   },
  { x: 520, z: -170, rotY: 37, scale: 0.74, opacity: 0.34, blur: 1.2 },
  { x: 685, z: -235, rotY: 47, scale: 0.61, opacity: 0.09, blur: 2.8 },
  { x: 800, z: -280, rotY: 54, scale: 0.51, opacity: 0.00, blur: 4.0 },
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
  const isPausedRef = useRef(false)
  const posterRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf: number
    let last = performance.now()

    const tick = (now: number) => {
      // Cap dt zodat een tab-switch geen grote sprong veroorzaakt
      const dt = Math.min(now - last, 100)
      last = now

      if (!isPausedRef.current) {
        posRef.current = (posRef.current + dt * SPEED) % TOTAL
      }

      for (let i = 0; i < TOTAL; i++) {
        const el = posterRefs.current[i]
        if (!el) continue

        let offset = i - posRef.current
        if (offset > TOTAL / 2) offset -= TOTAL
        if (offset < -TOTAL / 2) offset += TOTAL

        const t = getTransform(offset)
        const opacity = Math.max(0, t.opacity)

        el.style.transform = `translate(-50%, -50%) translateX(${t.x.toFixed(1)}px) translateZ(${t.z.toFixed(1)}px) rotateY(${t.rotateY.toFixed(2)}deg) scale(${t.scale.toFixed(3)})`
        el.style.opacity = opacity.toFixed(3)
        el.style.zIndex = String(Math.max(1, Math.round(50 - Math.abs(offset) * 10)))
        el.style.filter = t.blur > 0.05 ? `blur(${t.blur.toFixed(2)}px)` : ''
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="relative w-full"
      style={{ perspective: '1600px' }}
      onMouseEnter={() => { isPausedRef.current = true }}
      onMouseLeave={() => { isPausedRef.current = false }}
    >
      {/* Carrousel podium */}
      <div className="relative w-full" style={{ height: 400 }}>

        {/* Ambient glow achter posters */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 58% at 50% 52%, rgba(200,168,75,0.075) 0%, rgba(200,168,75,0.018) 52%, transparent 74%)',
            zIndex: 0,
          }}
        />

        {/* Bodem fade → naadloos in sectie */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: 110,
            background: 'linear-gradient(to top, #1A1A1A 0%, transparent 100%)',
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
            }}
          >
            <PosterCard3D poster={poster} width={POSTER_W} height={POSTER_H} />
          </div>
        ))}
      </div>

      {/* Gouden boog — podium vloer effect */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: 72,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '66%',
          height: 52,
          borderBottom: '1px solid rgba(200,168,75,0.20)',
          borderLeft: '1px solid rgba(200,168,75,0.06)',
          borderRight: '1px solid rgba(200,168,75,0.06)',
          borderRadius: '0 0 50% 50%',
          zIndex: 38,
        }}
      />

      {/* Subtiel goud glinstering op de boog */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: 68,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50%',
          height: 4,
          background:
            'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(200,168,75,0.22) 0%, transparent 75%)',
          zIndex: 39,
        }}
      />
    </div>
  )
}
