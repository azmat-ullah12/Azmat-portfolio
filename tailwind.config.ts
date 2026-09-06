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
        'deep-bg': '#0D0717',
        'secondary-bg': '#160D24',
        'surface-card': '#130A21',
        'surface-border': '#26173B',
        dark: '#FFFFFF',
        black: '#0D0717',
        navy: '#0D0717',
        'off-white': '#160D24',
        'soft-gray': '#26173B',
        'mid-gray': '#A1A1AA',
        muted: '#A1A1AA',
        lavender: '#EDE9FE',
        purple: {
          DEFAULT: '#7C3AED',
          deep: '#5B21B6',
          bright: '#8B5CF6',
          soft: '#A78BFA',
          'very-soft': '#1D1231',
        },
        'accent-blue': '#7C3AED',
        'accent-teal': '#8B5CF6',
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
