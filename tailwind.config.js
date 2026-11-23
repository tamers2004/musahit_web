/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF5FF',
          100: '#DCEBFF',
          200: '#C3DDFF',
          400: '#3B82F6',
          500: '#1769D2',
          600: '#1257B0',
          700: '#0F4A96',
        },
        ink: {
          950: '#172033',
          900: '#1D283C',
          800: '#2A3750',
          700: '#3B4A66',
        },
        muted: {
          DEFAULT: '#687386',
          light: '#8B95A7',
        },
        line: {
          DEFAULT: '#E7ECF2',
          strong: '#D5DEE9',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F7F9FC',
          tint: '#EEF5FF',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'Assistant', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(23, 32, 51, 0.18)',
        card: '0 8px 30px -18px rgba(23, 32, 51, 0.15)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
