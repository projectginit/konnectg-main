/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1F1535',
        'ink-soft': '#5B5570',
        purple: {
          900: '#2C0E4A',
          700: '#5B2A8C',
          600: '#6B2FA0',
          100: '#EDE3FB',
          50: '#F4EEFB',
        },
        gold: {
          DEFAULT: '#F5C518',
          dark: '#E0A800',
        },
        coral: '#FF6B5C',
        paper: '#FBF8F2',
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
