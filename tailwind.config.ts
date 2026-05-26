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
        'bs-offwhite': '#F5F0E8',
        'bs-black':    '#1A1A1A',
        'bs-dark':     '#4A4A4A',
        'bs-gold':     '#C8A84B',
        'bs-sand':     '#E8DDC8',
        'bs-green':    '#2F3A32',
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
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee:   'marquee 35s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        float:     'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
