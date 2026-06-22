import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Kies jouw tekst',
    description:
      'Browse de collectie en kies het Bijbelvers dat bij jou past. Je kiest zelf de taal — Nederlands of Engels.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 6.5V12l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Kies jouw stijl',
    description:
      'Selecteer een design — minimalistisch, bold of editorial. Elk ontwerp is handcrafted en klaar voor jouw ruimte.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Kies jouw lijst',
    description:
      'Kies je formaat en lijstkleur. Wij printen op premium papier, inlijsten met zorg en verzenden naar jouw deur.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <rect x="6" y="6" width="12" height="12" rx="1" />
      </svg>
    ),
  },
]

export default function HoeHetWerkt() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'rgba(20,22,24,0.76)',
        paddingTop: 96,
        paddingBottom: 96,
        borderTop: '1px solid rgba(200,168,75,0.06)',
      }}
    >
      {/* Background pattern: subtle diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(200,168,75,0.012) 0px, rgba(200,168,75,0.012) 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative">

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 28,
                height: 1,
                background: 'linear-gradient(90deg, transparent 0%, #C8A84B 100%)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.30em',
                textTransform: 'uppercase',
                color: '#C8A84B',
              }}
            >
              Hoe het werkt
            </span>
            <div
              style={{
                width: 28,
                height: 1,
                background: 'linear-gradient(90deg, #C8A84B 0%, transparent 100%)',
                flexShrink: 0,
              }}
            />
          </div>

          <h2
            className="font-serif font-bold text-[#F5F0E8]"
            style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.10 }}
          >
            Zo simpel werkt het.
          </h2>

          <p style={{ fontSize: 15, color: 'rgba(245,240,232,0.40)', lineHeight: 1.68, maxWidth: 420 }}>
            Van Bijbelvers naar premium wanddecoratie — in drie stappen.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 relative">

          {/* Horizontal connector line (desktop only) */}
          <div
            className="hidden md:block absolute pointer-events-none"
            style={{
              top: 40,
              left: '16.66%',
              right: '16.66%',
              height: 1,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(200,168,75,0.20) 15%, rgba(200,168,75,0.20) 50%, rgba(200,168,75,0.20) 85%, transparent 100%)',
            }}
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center gap-6 px-6 md:px-10 py-10 md:py-0 relative"
              style={{
                borderBottom:
                  index < steps.length - 1
                    ? '1px solid rgba(200,168,75,0.07)'
                    : 'none',
              }}
            >
              {/* Step number icon */}
              <div className="relative">
                {/* Outer ring */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    border: '1px solid rgba(200,168,75,0.18)',
                    background: 'rgba(200,168,75,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Inner dot ring */}
                  <div
                    style={{
                      position: 'absolute',
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      border: '1px solid rgba(200,168,75,0.10)',
                    }}
                  />
                  {/* Number */}
                  <span
                    className="font-serif font-bold"
                    style={{
                      fontSize: 22,
                      color: 'rgba(200,168,75,0.85)',
                      lineHeight: 1,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 max-w-[280px]">
                <h3
                  className="font-serif font-bold text-[#F5F0E8]"
                  style={{ fontSize: 20, lineHeight: 1.25 }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.70,
                    color: 'rgba(245,240,232,0.42)',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="flex flex-col items-center gap-4 mt-16 pt-14" style={{ borderTop: '1px solid rgba(200,168,75,0.07)' }}>
          <Link
            href="#customizer"
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              fontSize: 13.5,
              background: '#C8A84B',
              color: '#1A1A1A',
              padding: '0 40px',
              height: 56,
              boxShadow: '0 8px 32px rgba(200,168,75,0.36), 0 2px 8px rgba(200,168,75,0.20)',
              textDecoration: 'none',
            }}
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.20) 50%, transparent 100%)',
              }}
            />
            Kies jouw BibleSign
            <svg
              width="13" height="13" viewBox="0 0 14 14"
              fill="none" stroke="currentColor" strokeWidth="2.2"
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </Link>

          <p style={{ fontSize: 12, color: 'rgba(245,240,232,0.28)' }}>
            Kies tekst, stijl en lijst — wij doen de rest · Bezorging in 3–5 werkdagen
          </p>
        </div>
      </div>
    </section>
  )
}
