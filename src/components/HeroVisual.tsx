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
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  const current = posterVariants[currentIndex]

  return (
    <div className="relative w-full">

      {/* ============================================================
          INTERIOR SCENE — premium CSS room with poster on the wall
      ============================================================ */}
      <div
        className="relative overflow-hidden rounded-[20px]"
        style={{ minHeight: 560 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* — Warm off-white wall — */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(152deg, #EDE8DC 0%, #E4D7BF 55%, #D9CAAB 100%)',
          }}
        />

        {/* — Deep green accent panel (left 34%) — */}
        <div
          className="absolute top-0 bottom-0 left-0"
          style={{
            width: '34%',
            background: 'linear-gradient(172deg, #2F3A32 0%, #1D2820 100%)',
          }}
        />

        {/* — Panel-to-wall hairline (gold tint) — */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: '34%',
            width: 1,
            background:
              'linear-gradient(180deg, rgba(200,168,75,0.22) 0%, rgba(200,168,75,0.08) 50%, transparent 100%)',
          }}
        />

        {/* — Warm natural light (window / lamp glow from upper-right) — */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 65% at 90% 15%, rgba(255,241,195,0.52) 0%, transparent 62%)',
          }}
        />

        {/* — Subtle secondary ambient bounce from lower-left — */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 45% 40% at 20% 90%, rgba(47,58,50,0.30) 0%, transparent 70%)',
          }}
        />

        {/* — Floor / surface gradient — */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '22%',
            background:
              'linear-gradient(0deg, rgba(160,143,115,0.60) 0%, transparent 100%)',
          }}
        />

        {/* — Wooden shelf (sits just above the floor zone) — */}
        <div
          className="absolute"
          style={{
            bottom: '19%',
            left: '34%',
            right: 0,
            height: 7,
            background: 'linear-gradient(180deg, #907250 0%, #6B5238 100%)',
            boxShadow:
              '0 5px 22px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.09)',
          }}
        />

        {/* — Small Bible prop on the shelf — */}
        <div
          className="absolute"
          style={{
            bottom: 'calc(19% + 7px)',
            right: '11%',
            width: 20,
            height: 28,
            background: 'linear-gradient(90deg, #1C2620 0%, #293625 100%)',
            boxShadow: '3px 4px 14px rgba(0,0,0,0.45)',
            borderRadius: '1px 2px 2px 1px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'rgba(200,168,75,0.65)',
              borderRadius: '1px 0 0 1px',
            }}
          />
        </div>

        {/* — Decorative small frame on green panel (art direction accent) — */}
        <div
          className="absolute"
          style={{
            top: '16%',
            left: '7%',
            width: '17%',
            height: '26%',
            border: '1px solid rgba(200,168,75,0.13)',
            borderRadius: 2,
            background: 'rgba(200,168,75,0.03)',
          }}
        />

        {/* — Grain texture overlay for depth — */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.038,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />

        {/* =======================================================
            POSTER HANGING ON THE WALL
        ======================================================= */}
        <div
          className="absolute flex items-start justify-center"
          style={{
            top: 0,
            bottom: '22%',
            left: '34%',
            right: 0,
            paddingTop: 28,
            paddingBottom: 18,
            paddingLeft: 16,
            paddingRight: 24,
            perspective: '1100px',
          }}
        >
          {/* Dark wood frame + poster */}
          <div className="relative" style={{ display: 'inline-block' }}>

            {/* Hanging nail */}
            <div
              style={{
                position: 'absolute',
                top: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0,
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'rgba(200,168,75,0.38)',
                  boxShadow: '0 0 4px rgba(200,168,75,0.22)',
                }}
              />
              <div
                style={{
                  width: 1,
                  height: 16,
                  background:
                    'linear-gradient(180deg, rgba(200,168,75,0.28) 0%, transparent 100%)',
                }}
              />
            </div>

            {/* Frame + poster shadow cast on wall */}
            <div
              style={{
                background: '#0E0E0E',
                padding: '7px 7px 13px 7px',
                borderRadius: 2,
                boxShadow: [
                  '0 2px 6px rgba(0,0,0,0.25)',
                  '0 16px 40px rgba(0,0,0,0.45)',
                  '0 40px 80px rgba(0,0,0,0.22)',
                  'inset 0 1px 0 rgba(255,255,255,0.06)',
                ].join(', '),
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ rotateY: -55, opacity: 0, scale: 0.97 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: 55, opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{ transformStyle: 'preserve-3d', display: 'block' }}
                >
                  <PosterDisplay design={current} size="lg" showFrame={false} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
      {/* end interior scene */}

      {/* =======================================================
          CAROUSEL CONTROLS — below the scene
      ======================================================= */}
      <div className="flex flex-col items-center gap-2 mt-5">

        {/* Dots */}
        <div className="flex gap-2">
          {posterVariants.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Poster ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-5 h-[6px] bg-bs-gold'
                  : 'w-[6px] h-[6px] bg-bs-sand hover:bg-bs-dark'
              }`}
            />
          ))}
        </div>

        {/* Label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${currentIndex}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[10px] text-bs-gold tracking-widest">
              {String(currentIndex + 1).padStart(2, '0')} / {String(posterVariants.length).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-medium text-bs-dark tracking-wide">
              {current.theme}
            </span>
          </motion.div>
        </AnimatePresence>

        <p className="text-[11px] text-bs-dark/55 tracking-wide">
          Vier stijlen. Eén waarheid. Jouw ruimte.
        </p>
      </div>

    </div>
  )
}
