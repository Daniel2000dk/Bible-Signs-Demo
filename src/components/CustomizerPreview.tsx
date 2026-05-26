'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PosterDisplay from './PosterDisplay'
import type { PosterDesign, CustomizerTextOption, CustomizerColorOption } from '@/types'
import Link from 'next/link'

type TabType = 'text' | 'color' | 'frame'

const textOptions: CustomizerTextOption[] = [
  { lines: ['YOU ARE', 'CHOSEN', 'AND LOVED'], reference: '1 PETER 2:9',       label: 'Chosen & Loved'  },
  { lines: ['BE STILL', 'AND KNOW'],           reference: 'PSALM 46:10',        label: 'Be Still & Know' },
  { lines: ['WALK', 'BY FAITH'],               reference: '2 CORINTHIANS 5:7',  label: 'Walk by Faith'   },
  { lines: ['NEW', 'CREATION'],                reference: '2 CORINTHIANS 5:17', label: 'New Creation'    },
]

const colorOptions: CustomizerColorOption[] = [
  { name: 'Warm off-white', value: '#F5F0E8', textColor: '#1A1A1A', frameColor: '#B8A898' },
  { name: 'Bijna zwart',    value: '#1A1A1A', textColor: '#F5F0E8', frameColor: '#0A0A0A' },
  { name: 'Zand',           value: '#E8DDC8', textColor: '#1A1A1A', frameColor: '#A89880' },
  { name: 'Diep groen',     value: '#2F3A32', textColor: '#F5F0E8', frameColor: '#1A2218' },
]

const frameOptions = [
  { label: 'Geen lijst',   value: 'none',  price: ''     },
  { label: 'Witte lijst',  value: 'white', price: '+€25' },
  { label: 'Zwarte lijst', value: 'black', price: '+€25' },
  { label: 'Houten lijst', value: 'wood',  price: '+€28' },
]

const translationOptions = ['HSV', 'NBV21', 'ESV', 'NIV', 'KJV']

const tabs: { key: TabType; label: string; step: string }[] = [
  { key: 'text',  label: 'Bijbeltekst', step: '01' },
  { key: 'color', label: 'Kleur',       step: '02' },
  { key: 'frame', label: 'Lijst',       step: '03' },
]

export default function CustomizerPreview() {
  const [activeTab,           setActiveTab]           = useState<TabType>('text')
  const [selectedTextIndex,   setSelectedTextIndex]   = useState(0)
  const [selectedColorIndex,  setSelectedColorIndex]  = useState(0)
  const [selectedFrame,       setSelectedFrame]       = useState('none')
  const [selectedTranslation, setSelectedTranslation] = useState('HSV')

  const selectedText  = textOptions[selectedTextIndex]
  const selectedColor = colorOptions[selectedColorIndex]

  const currentDesign: PosterDesign = {
    id:          'customizer',
    lines:       selectedText.lines,
    reference:   selectedText.reference,
    theme:       'Jouw BibleSign',
    background:  selectedColor.value,
    textColor:   selectedColor.textColor,
    accentColor: '#C8A84B',
    frameColor:  selectedColor.frameColor,
  }

  return (
    <section id="personaliseer" className="py-24 md:py-32 bg-bs-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex flex-col gap-3 mb-14">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold">
            Personaliseer
          </span>
          <h2 className="font-serif text-[36px] md:text-[48px] font-bold text-bs-black leading-tight">
            Van Bijbeltekst<br />
            naar poster in 3 stappen.
          </h2>
          <p className="text-[14px] text-bs-dark max-w-md leading-relaxed">
            Kies je vers, je kleur en je lijst. Zie het direct live — zo ziet jouw poster eruit.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Controls ── */}
          <div className="flex flex-col gap-6">

            {/* Step tabs */}
            <div className="flex gap-0 border-b border-bs-sand">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex flex-col items-center gap-0.5 px-5 py-3 text-[12px] font-medium tracking-wide transition-all duration-200 border-b-2 -mb-px ${
                    activeTab === tab.key
                      ? 'border-bs-gold text-bs-black'
                      : 'border-transparent text-bs-dark hover:text-bs-black'
                  }`}
                >
                  <span className="text-[9px] text-bs-gold/70 font-mono">{tab.step}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8  }}
                  animate={{ opacity: 1, y: 0  }}
                  exit={{    opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >

                  {/* Stap 01 — Bijbeltekst */}
                  {activeTab === 'text' && (
                    <div className="flex flex-col gap-2">
                      {textOptions.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedTextIndex(i)}
                          className={`flex items-center justify-between px-4 py-3.5 border text-left transition-all duration-150 ${
                            selectedTextIndex === i
                              ? 'border-bs-gold bg-bs-gold/[0.06] text-bs-black'
                              : 'border-bs-sand text-bs-dark hover:border-bs-dark/30 hover:text-bs-black bg-white/60'
                          }`}
                        >
                          <div>
                            <p className="text-[13px] font-medium">{opt.label}</p>
                            <p className="text-[11px] text-bs-dark/60 tracking-widest uppercase mt-0.5">{opt.reference}</p>
                          </div>
                          {selectedTextIndex === i && (
                            <span className="text-bs-gold text-lg">✦</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Stap 02 — Kleur */}
                  {activeTab === 'color' && (
                    <div className="grid grid-cols-2 gap-3">
                      {colorOptions.map((col, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedColorIndex(i)}
                          className={`flex items-center gap-3 px-4 py-3 border transition-all duration-150 ${
                            selectedColorIndex === i
                              ? 'border-bs-gold'
                              : 'border-bs-sand hover:border-bs-dark/30'
                          }`}
                        >
                          <span
                            className="w-6 h-6 rounded-full shrink-0 border border-black/10"
                            style={{ backgroundColor: col.value }}
                          />
                          <span className="text-[13px] font-medium text-bs-black">{col.name}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Stap 03 — Lijst */}
                  {activeTab === 'frame' && (
                    <div className="flex flex-col gap-2">
                      {frameOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setSelectedFrame(opt.value)}
                          className={`flex items-center justify-between px-4 py-3.5 border transition-all duration-150 ${
                            selectedFrame === opt.value
                              ? 'border-bs-gold bg-bs-gold/[0.06]'
                              : 'border-bs-sand hover:border-bs-dark/30 bg-white/60'
                          }`}
                        >
                          <span className="text-[13px] font-medium text-bs-black">{opt.label}</span>
                          <span className="text-[12px] text-bs-gold font-medium">{opt.price}</span>
                        </button>
                      ))}
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bijbelvertaling — subtle secondary option */}
            <div className="pt-4 border-t border-bs-sand/60">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-bs-dark/50">
                  Vertaling
                </span>
                {translationOptions.map((tr) => (
                  <button
                    key={tr}
                    onClick={() => setSelectedTranslation(tr)}
                    className={`text-[12px] font-medium transition-all duration-150 pb-0.5 border-b ${
                      selectedTranslation === tr
                        ? 'text-bs-black border-bs-gold'
                        : 'text-bs-dark/50 border-transparent hover:text-bs-dark hover:border-bs-dark/30'
                    }`}
                  >
                    {tr}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary + CTA */}
            <div className="flex flex-col gap-4 pt-4 border-t border-bs-sand">
              <div className="text-[13px] text-bs-dark">
                <span className="font-medium text-bs-black">{selectedText.label}</span>
                {' · '}
                <span className="font-medium text-bs-black">{selectedColor.name}</span>
                {' · '}
                <span className="font-medium text-bs-black">{selectedTranslation}</span>
                {selectedFrame !== 'none' && (
                  <>
                    {' · '}
                    <span className="font-medium text-bs-black">
                      {frameOptions.find(f => f.value === selectedFrame)?.label}
                    </span>
                  </>
                )}
              </div>
              <Link
                href="/collectie"
                className="inline-flex items-center justify-center gap-2 py-4 bg-bs-black text-bs-offwhite text-[14px] font-medium tracking-wide hover:bg-bs-gold hover:text-bs-black transition-all duration-200"
              >
                Kies jouw BibleSign
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Live poster preview ── */}
          <div className="flex flex-col items-center gap-4 lg:sticky lg:top-28">
            <div
              className="relative flex items-center justify-center w-full py-16"
              style={{
                backgroundColor:
                  currentDesign.background === '#1A1A1A' || currentDesign.background === '#2F3A32'
                    ? '#141414'
                    : '#E8E2D8',
                backgroundImage: `radial-gradient(ellipse at 50% 30%, rgba(200,168,75,0.05) 0%, transparent 70%)`,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentDesign.background}-${currentDesign.lines.join('')}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1   }}
                  exit={{    opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <PosterDisplay
                    design={currentDesign}
                    size="md"
                    showFrame={selectedFrame !== 'none'}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-[12px] text-bs-dark/50 text-center tracking-wide">
              Live preview — zo ziet jouw poster eruit
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
