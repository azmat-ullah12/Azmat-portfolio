import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#101114',
        black: '#09090B',
        navy: '#101114',
        'off-white': '#F7F7F5',
        'soft-gray': '#E5E5E3',
        'mid-gray': '#71717A',
        muted: '#71717A',
        purple: {
          DEFAULT: '#7C3AED',
          deep: '#5B21B6',
          bright: '#8B5CF6',
          soft: '#EDE9FE',
          'very-soft': '#F5F3FF',
        },
        'accent-blue': '#7C3AED',
        'accent-teal': '#7C3AED',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        'editorial': '1360px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
