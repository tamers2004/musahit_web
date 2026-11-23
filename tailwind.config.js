/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#060b16',
          900: '#0a1222',
          800: '#0f1b30',
          700: '#16243d',
        },
        accent: {
          400: '#38bdf8',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'Assistant', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(6, 182, 212, 0.45)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
