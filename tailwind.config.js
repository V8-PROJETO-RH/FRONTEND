/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'azul-infinito': '#12274B',
      'azul-tecnologia': '#0360DC',
      'verde-energia': '#65C98D',
      'roxo-misterio': '#8368C9',
      'rosa-nebulosa': '#C968C8',
      'white': '#ffffff',
      'primary-gray': '#F2F2F4',
      'secundary-gray': '#4A4A4A',
      'dark-blue': '#002C63',
      'black-transparent': 'rgba(0, 0, 0, 0.2)',
      'black': '#00000'
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

