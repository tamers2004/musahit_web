/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EDF4FF',
          100: '#DCE9FF',
          200: '#BFD6FF',
          300: '#93BAFF',
          400: '#4C93FF',
          500: '#1D6FF2',
          600: '#0F57CC',
          700: '#0B45A6',
          800: '#0A3A85',
        },
        ink: {
          950: '#070D1A',
          900: '#0B1424',
          800: '#16233A',
          700: '#2B3A52',
          600: '#3D4E68',
        },
        muted: {
          DEFAULT: '#5B6B82',
          light: '#8C9AB0',
        },
        line: {
          DEFAULT: '#E2E8F2',
          strong: '#CBD6E6',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F6F8FC',
          tint: '#EDF4FF',
        },
        navy: {
          950: '#040812',
          900: '#07101F',
          800: '#0B1830',
          700: '#122440',
          600: '#1A3152',
        },
        signal: {
          DEFAULT: '#35CFD9',
          soft: '#8DE7EC',
          deep: '#0FA3AE',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'Assistant', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        soft: '0 28px 70px -38px rgba(7, 13, 26, 0.32)',
        card: '0 12px 34px -24px rgba(7, 13, 26, 0.22)',
        float: '0 36px 90px -36px rgba(7, 13, 26, 0.42)',
        glow: '0 0 0 1px rgba(29, 111, 242, 0.16), 0 24px 70px -26px rgba(29, 111, 242, 0.5)',
        inset: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.92)', opacity: '0.55' },
          '100%': { transform: 'scale(1.45)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 46s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.8s ease-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        'fade-up': 'fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease both',
      },
    },
  },
  plugins: [],
}
