import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // warmer, more aged palette
        sand: '#ECE2CB',
        'sand-deep': '#D9CDB1',
        ink: '#1A1612',
        'ink-soft': '#3C342A',
        muted: '#7A6E5C',
        terracotta: '#A04B2D',
        olive: '#7A734A',
        line: '#BFB29A',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Times New Roman', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
