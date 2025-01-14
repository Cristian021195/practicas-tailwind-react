/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-indigo': '#4f45e5',
      },
      keyframes: {
        wiggle: {
          '0%': { left: '-35%', rigth:'%100%' },
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite'
      }
    },
  },
  plugins: [
  ],
}

