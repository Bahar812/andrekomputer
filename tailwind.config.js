/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00BFFF',
        'primary-dark': '#0099CC',
        'primary-light': '#33CCFF',
        'dark-bg': '#0A0F1C',
        'card-bg': '#121924',
        'accent': '#FF5E84'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 191, 255, 0.5)',
        'glow-strong': '0 0 25px rgba(0, 191, 255, 0.8)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom, rgba(10, 15, 28, 0.9), rgba(10, 15, 28, 1)), url("/src/assets/hero-bg.jpg")',
        'service-bg': 'linear-gradient(to right, rgba(10, 15, 28, 0.9), rgba(10, 15, 28, 0.7)), url("/src/assets/service-bg.jpg")',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};