import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Legacy (keep for existing component compat)
        'bs-offwhite': '#F5F0E8',
        'bs-black':    '#1A1A1A',
        'bs-dark':     '#4A4A4A',
        'bs-gold':     '#C8A84B',
        'bs-sand':     '#E8DDC8',
        'bs-green':    '#2F3A32',
        // Dark system
        'bs-void':     '#0C0E14',
        'bs-ink':      '#0A0C12',
        'bs-surface':  '#111418',
        'bs-lift':     '#181C24',
        'bs-navy':     '#0D1120',
        'bs-cream':    '#F5F0E8',
      },
      fontFamily: {
        sans:  ['var(--font-inter)',    'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia',   'serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)'    },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'  },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)'  },
        },
      },
      animation: {
        marquee:    'marquee 42s linear infinite',
        'fade-up':  'fadeUp  0.65s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in':  'fadeIn  0.5s ease both',
        float:      'float   5.5s ease-in-out infinite',
        shimmer:    'shimmer 2.4s ease infinite',
      },
    },
  },
  plugins: [],
}

export default config
