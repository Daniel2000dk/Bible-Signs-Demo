'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PosterDisplay from './PosterDisplay'
import { posterVariants } from '@/data/posterVariants'

export default function RotatingPosterPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused,     setIsPaused]     = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % posterVariants.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  const current = posterVariants[currentIndex]

  return (
    <div className="flex flex-col items-center gap-6">

      {/* ── Poster with 3D rotation ── */}
      <div
        className="relative"
        style={{ perspective: '1200px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Ambient wall glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 120% 80% at 50% 110%, rgba(0,0,0,0.10) 0%, transparent 70%)`,
            transform: 'translateY(20px)',
            filter: 'blur(24px)',
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ rotateY: -80, opacity: 0, scale: 0.97 }}
            animate={{ rotateY: 0,   opacity: 1, scale: 1    }}
            exit={{    rotateY:  80, opacity: 0, scale: 0.97 }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="animate-float"
          >
            <PosterDisplay design={current} size="hero" showFrame />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Indicator bar ── */}
      <div className="flex flex-col items-center gap-2 text-center">

        {/* Progress dots */}
        <div className="flex gap-1.5 mb-1">
          {posterVariants.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Poster ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex
                  ? 'w-5 h-1.5 bg-bs-gold'
                  : 'w-1.5 h-1.5 bg-bs-sand hover:bg-bs-dark'
              }`}
            />
          ))}
        </div>

        {/* Counter + theme label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${currentIndex}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-mono text-xs text-bs-gold tracking-widest">
              {String(currentIndex + 1).padStart(2, '0')} / {String(posterVariants.length).padStart(2, '0')}
            </span>
            <span className="text-xs font-medium text-bs-dark tracking-wide">
              {current.theme}
            </span>
          </motion.div>
        </AnimatePresence>

        <p className="text-[11px] text-bs-dark/60 tracking-wide mt-0.5">
          Vier stijlen. Eén waarheid. Jouw ruimte.
        </p>
      </div>
    </div>
  )
}
