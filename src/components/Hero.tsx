import Link from 'next/link'
import Image from 'next/image'

const trustPoints = [
  'Gratis verzending boven €50',
  '30 dagen retour',
  'Premium printkwaliteit',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex flex-col"
      style={{
        paddingTop: 84,
        aspectRatio: '1896 / 829',
        minHeight: 480,
      }}
    >
      {/* ── Background image as absolute layer ── */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
        }}
      />

      {/* ── Primary overlay: dark left → transparent right ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(105deg, rgba(8,6,4,0.72) 0%, rgba(8,6,4,0.62) 28%, rgba(8,6,4,0.42) 45%, rgba(8,6,4,0.14) 62%, rgba(8,6,4,0.04) 78%, transparent 90%)',
        }}
      />

      {/* ── Bottom vignette ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 1,
          height: 180,
          background: 'linear-gradient(0deg, rgba(8,6,4,0.60) 0%, transparent 100%)',
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative max-w-[1320px] mx-auto pl-5 pr-6 md:pl-8 md:pr-10 w-full flex flex-col justify-center"
        style={{ flex: 1, zIndex: 2, paddingTop: '3vh', paddingBottom: '3vh' }}
      >
        <div className="flex flex-col gap-7 max-w-[540px] animate-fade-up">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 self-start">
            <span
              className="block shrink-0"
              style={{
                width: 28,
                height: 1,
                background: 'linear-gradient(90deg, #C8A84B 0%, rgba(200,168,75,0.3) 100%)',
              }}
            />
            <span className="text-[10px] font-bold tracking-[0.34em] uppercase text-[#C8A84B]">
              Premium Bijbelse Wanddecoratie
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-bold tracking-tight text-[#F5F0E8] leading-[0.97]"
            style={{ fontSize: 'clamp(41px, 5.2vw, 74px)' }}
          >
            Maak{' '}
            <span
              style={{
                color: '#C8A84B',
                textShadow: '0 0 60px rgba(200,168,75,0.28), 0 2px 20px rgba(200,168,75,0.14)',
              }}
            >
              Gods Woord
            </span>
            <br />
            zichtbaar in
            <br />
            jouw ruimte.
          </h1>

          {/* Subtext */}
          <p
            className="text-[16px] md:text-[17px] leading-relaxed max-w-[400px]"
            style={{ color: 'rgba(245,240,232,0.82)' }}
          >
            Premium Bijbelse posters die je dagelijks herinneren aan
            waarheid, identiteit en rust in Christus.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 items-start sm:items-center">
            <Link
              href="#customizer"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#C8A84B] text-[#1A1A1A] text-[14px] font-bold tracking-wide transition-all duration-300 hover:-translate-y-[3px] shadow-[0_10px_36px_rgba(200,168,75,0.50),0_2px_8px_rgba(200,168,75,0.28)] hover:shadow-[0_22px_72px_rgba(200,168,75,0.75),0_4px_16px_rgba(200,168,75,0.40)]"
              style={{ padding: '0 36px', height: 58 }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              Kies jouw BibleSign
              <svg
                width="15" height="15" viewBox="0 0 14 14"
                fill="none" stroke="currentColor" strokeWidth="2.2"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M2 7h10M7 2l5 5-5 5"/>
              </svg>
            </Link>

            <Link
              href="/collectie"
              className="group inline-flex items-center gap-2 px-3 text-[14px] font-medium transition-colors duration-200 hover:text-[rgba(245,240,232,0.88)]"
              style={{ color: 'rgba(245,240,232,0.62)' }}
            >
              Bekijk collectie
              <svg
                width="13" height="13" viewBox="0 0 14 14"
                fill="none" stroke="currentColor" strokeWidth="1.85"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <path d="M2 7h10M7 2l5 5-5 5"/>
              </svg>
            </Link>
          </div>

          {/* Microcopy */}
          <p
            className="text-[11.5px] -mt-2"
            style={{ color: 'rgba(245,240,232,0.28)' }}
          >
            Personaliseer kleur, lijst en Bijbelvertaling.
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                  style={{ background: 'rgba(200,168,75,0.18)' }}
                >
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5 3.5-4"
                      stroke="#C8A84B" strokeWidth="1.4"
                      strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[13px]" style={{ color: 'rgba(245,240,232,0.68)' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 pointer-events-none hidden md:flex flex-col items-center gap-2"
        style={{ zIndex: 2, opacity: 0.28 }}
      >
        <span className="text-[9px] tracking-[0.28em] uppercase text-[#F5F0E8] font-semibold">Scroll</span>
        <div
          className="w-px"
          style={{ height: 32, background: 'linear-gradient(180deg, #C8A84B 0%, transparent 100%)' }}
        />
      </div>

    </section>
  )
}
