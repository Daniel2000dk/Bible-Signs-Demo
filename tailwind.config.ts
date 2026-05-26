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
    },
  },
  plugins: [],
}

export default config
