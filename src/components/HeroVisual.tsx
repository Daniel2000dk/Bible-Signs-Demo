'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PosterDisplay from './PosterDisplay'
import { posterVariants } from '@/data/posterVariants'

export default function HeroVisual() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % posterVariants.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [isPaused])

  const current = posterVariants[currentIndex]

  return (
    <div
      className="relative w-full max-w-[540px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ═══════════════════════════════════════
          CINEMATIC ROOM SCENE
          Dark editorial interior — warm candlelight + gallery picture light
      ═══════════════════════════════════════ */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 22,
          minHeight: 580,
          background: 'linear-gradient(160deg, #1C1914 0%, #0D0C0A 50%, #161310 100%)',
        }}
      >

        {/* ── Lighting layer 1: Overhead gallery/picture light (from top-center) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 85% at 52% -8%, rgba(255,228,148,0.24) 0%, rgba(200,168,75,0.06) 48%, transparent 72%)',
          }}
        />

        {/* ── Lighting layer 2: Warm candle glow (bottom-right area) ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '10%',
            right: '16%',
            width: 160,
            height: 160,
            background:
              'radial-gradient(circle, rgba(255,168,48,0.38) 0%, rgba(200,110,18,0.16) 45%, transparent 75%)',
            borderRadius: '50%',
          }}
        />

        {/* ── Lighting layer 3: Subtle green ambient from bottom-left ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: 0,
            left: 0,
            width: '42%',
            height: '38%',
            background:
              'radial-gradient(circle at 25% 100%, rgba(47,58,50,0.18) 0%, transparent 70%)',
          }}
        />

        {/* ── Edge vignette — deepens all corners ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 48%, rgba(0,0,0,0.70) 100%)',
          }}
        />

        {/* ── Grain texture for premium depth ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.042,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />

        {/* ═══════════════════════════════════════
            POSTER AREA (upper 78% of scene)
        ═══════════════════════════════════════ */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: 0,
            bottom: '22%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 52,
            paddingBottom: 12,
            perspective: '1100px',
          }}
        >
          {/* Picture light bar (gallery fixture above frame) */}
          <div
            style={{
              position: 'absolute',
              top: 28,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 210,
              height: 6,
              borderRadius: 3,
              background:
                'linear-gradient(90deg, #2A1E0C 0%, #7A6032 35%, #A88A4A 50%, #7A6032 65%, #2A1E0C 100%)',
              boxShadow:
                '0 0 22px rgba(200,158,72,0.42), 0 3px 10px rgba(0,0,0,0.55)',
            }}
          />
          {/* Cone of light from picture light */}
          <div
            style={{
              position: 'absolute',
              top: 34,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 340,
              height: 240,
              background:
                'radial-gradient(ellipse 58% 100% at 50% 0%, rgba(255,238,182,0.17) 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />

          {/* POSTER + FRAME — floating with gentle 3D tilt */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          >
            <div
              style={{
                transform: 'rotateY(-5deg) rotateX(1.5deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Dark wood frame */}
              <div
                style={{
                  padding: '10px 10px 16px',
                  background:
                    'linear-gradient(148deg, #2B1C0E 0%, #180E04 58%, #241609 100%)',
                  borderRadius: 3,
                  position: 'relative',
                  boxShadow: [
                    '0 4px 14px rgba(0,0,0,0.60)',
                    '0 22px 65px rgba(0,0,0,0.82)',
                    '0 55px 110px rgba(0,0,0,0.42)',
                    '-7px 10px 38px rgba(0,0,0,0.38)',
                    'inset 0 1px 0 rgba(255,255,255,0.07)',
                  ].join(', '),
                }}
              >
                {/* Gold inner bevel hairline */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 5,
                    border: '1px solid rgba(200,168,75,0.24)',
                    borderRadius: 1,
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />
                {/* Frame top highlight (from picture light hitting top edge) */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '15%',
                    right: '15%',
                    height: 1,
                    background: 'rgba(255,238,180,0.22)',
                    borderRadius: 1,
                    zIndex: 1,
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.975 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.975 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <PosterDisplay design={current} size="lg" showFrame={false} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════
            CONSOLE TABLE (lower 22% of scene)
        ═══════════════════════════════════════ */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: '22%' }}
        >
          {/* Floor shadow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(0deg, rgba(6,4,2,0.96) 0%, rgba(8,6,3,0.22) 100%)',
            }}
          />

          {/* Table surface — sits at 28% from top of console zone */}
          <div
            style={{
              position: 'absolute',
              top: '28%',
              left: '7%',
              right: '7%',
              height: 9,
              background: 'linear-gradient(180deg, #503618 0%, #2E1C0A 100%)',
              borderRadius: '2px 2px 0 0',
              boxShadow:
                '0 -3px 14px rgba(0,0,0,0.72), 0 6px 22px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.09)',
            }}
          />

          {/* Table face */}
          <div
            style={{
              position: 'absolute',
              top: 'calc(28% + 9px)',
              left: '7%',
              right: '7%',
              bottom: 0,
              background: 'linear-gradient(180deg, #231507 0%, #0C0703 100%)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.65)',
            }}
          />

          {/* ── Bible (left of center) ── */}
          <div
            style={{
              position: 'absolute',
              bottom: '72%',
              left: '24%',
              width: 24,
              height: 32,
              background: 'linear-gradient(90deg, #1C1C1A 0%, #242220 100%)',
              borderRadius: '1px 2px 2px 1px',
              boxShadow: '3px 7px 20px rgba(0,0,0,0.85)',
            }}
          >
            {/* Gold spine */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 3,
                background: 'rgba(200,168,75,0.58)',
                borderRadius: '1px 0 0 1px',
              }}
            />
            {/* Cover detail line */}
            <div
              style={{
                position: 'absolute',
                bottom: '30%',
                left: '28%',
                right: '12%',
                height: 1,
                background: 'rgba(200,168,75,0.18)',
              }}
            />
          </div>

          {/* ── Second small book (adjacent) ── */}
          <div
            style={{
              position: 'absolute',
              bottom: '72%',
              left: 'calc(24% + 28px)',
              width: 18,
              height: 26,
              background: 'linear-gradient(90deg, #2C2018 0%, #3C2E1E 100%)',
              borderRadius: '1px 2px 2px 1px',
              boxShadow: '2px 5px 14px rgba(0,0,0,0.75)',
            }}
          />

          {/* ── Thin decorative vessel ── */}
          <div
            style={{
              position: 'absolute',
              bottom: '72%',
              right: '36%',
              width: 11,
              height: 38,
              background: 'linear-gradient(90deg, #3A3028 0%, #524638 50%, #3A3028 100%)',
              borderRadius: '40% 40% 25% 25% / 20% 20% 10% 10%',
              boxShadow: '2px 6px 18px rgba(0,0,0,0.72)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: -2,
                right: -2,
                height: 4,
                background: 'rgba(200,168,75,0.18)',
                borderRadius: '50%',
              }}
            />
          </div>

          {/* ── Candle (right area) ── */}
          <div
            style={{
              position: 'absolute',
              bottom: '72%',
              right: '22%',
            }}
          >
            {/* Outer flame glow */}
            <div
              style={{
                position: 'absolute',
                top: -18,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 26,
                height: 26,
                background:
                  'radial-gradient(circle, rgba(255,192,56,0.72) 0%, rgba(255,130,18,0.28) 50%, transparent 80%)',
                borderRadius: '50%',
                filter: 'blur(3px)',
              }}
            />
            {/* Flame */}
            <div
              style={{
                position: 'absolute',
                top: -11,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 5,
                height: 11,
                background:
                  'linear-gradient(0deg, rgba(255,115,15,0.95) 0%, rgba(255,235,120,0.98) 65%, rgba(255,250,200,0.90) 100%)',
                borderRadius: '50% 50% 0 0',
                filter: 'blur(0.5px)',
              }}
            />
            {/* Candle body */}
            <div
              style={{
                width: 15,
                height: 36,
                background:
                  'linear-gradient(90deg, #C0B494 0%, #ECD9B4 50%, #C4B290 100%)',
                borderRadius: '4px 4px 2px 2px',
                boxShadow: '2px 6px 18px rgba(0,0,0,0.65)',
                position: 'relative',
              }}
            >
              {/* Wax drip */}
              <div
                style={{
                  position: 'absolute',
                  top: 1,
                  left: '18%',
                  width: 5,
                  height: 9,
                  background: '#ECD9B4',
                  borderRadius: '0 0 4px 4px',
                }}
              />
            </div>
          </div>
        </div>

      </div>
      {/* End room scene */}

      {/* ─── CAROUSEL CONTROLS ─── */}
      <div className="flex flex-col items-center gap-2.5 mt-5">
        <div className="flex gap-2.5">
          {posterVariants.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Poster ${i + 1}`}
              style={{
                width: i === currentIndex ? 24 : 7,
                height: 7,
                borderRadius: 9999,
                background:
                  i === currentIndex ? '#C8A84B' : 'rgba(200,168,75,0.22)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.35s ease',
              }}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={`label-${currentIndex}`}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.22 }}
            className="text-[11px] font-medium text-[#4A4A4A]/50 tracking-wider"
          >
            {current.theme}
          </motion.p>
        </AnimatePresence>
      </div>

    </div>
  )
}
