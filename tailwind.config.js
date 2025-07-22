/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-slow': 'spin 400s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        besley: ['Besley', 'serif'],
        mulish: ['Mulish', 'sans-serif']
      },
      screens: {
        'md': '1280px',
        'sm': '1025px',
        'xs': '600px',
      },
    },
  },
  plugins: [
  ],
}
