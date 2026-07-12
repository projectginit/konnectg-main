/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A000D',
        'ink-soft': '#5A3347',
        purple: {
          900: '#3D0020',
          700: '#7B0040',
          600: '#8F0049',
          100: '#F5D6E4',
          50: '#FAF0F5',
        },
        gold: {
          DEFAULT: '#3D5A1A',
          dark: '#2D4412',
        },
        coral: '#B5003A',
        paper: '#E5E2C8',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        floatY: 'floatY 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}