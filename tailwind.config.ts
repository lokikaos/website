import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0d0d0b',
        surface: '#111110',
        'surface-2': '#1a1917',
        border: '#222018',
        'border-light': '#2e2b26',
        'warm-white': '#ede8df',
        secondary: '#8a847c',
        muted: '#5c5853',
        gold: '#F5C400',
        'gold-dim': '#C49B00',
        'gold-light': '#FFD740',
        lou: '#00CCFF',
        'lou-dim': '#0099CC',
        'lou-dark': '#001A26',
        neon: '#39FF14',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-space)', 'system-ui', 'sans-serif'],
        intimate: ['var(--font-spectral)', 'Georgia', 'serif'],
      },
      animation: {
        breathe: 'breathe 8s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-6px)', opacity: '0.85' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-32px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
