import RotatingPosterPreview from './RotatingPosterPreview'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px]">

      {/* Ground shadow for 3D depth */}
      <div
        className="absolute -bottom-8 left-8 right-8 h-16 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(26,26,26,0.22) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Main editorial panel */}
      <div
        className="relative rounded-[28px] overflow-hidden"
        style={{
          background: 'linear-gradient(148deg, #EDE4D0 0%, #E0D4BB 100%)',
          boxShadow: [
            'inset 0 1px 0 rgba(255,255,255,0.45)',
            '0 40px 100px rgba(26,26,26,0.14)',
            '0 8px 24px rgba(26,26,26,0.09)',
          ].join(', '),
        }}
      >
        {/* Top edge catch-light */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent pointer-events-none" />

        {/* Soft vignette for room-wall feeling */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 85% 75% at 50% 0%, rgba(255,255,255,0.10) 0%, transparent 55%)',
          }}
        />

        {/* Poster */}
        <div className="relative flex flex-col items-center justify-center px-8 py-10">
          <RotatingPosterPreview />
        </div>

        {/* Bottom edge line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(26,26,26,0.10)] pointer-events-none" />
      </div>

      {/* Decorative gold accent rings */}
      <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full border border-[#C8A84B]/14 pointer-events-none" />
      <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full border border-[#C8A84B]/22 pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full border border-[#C8A84B]/10 pointer-events-none" />
    </div>
  )
}
