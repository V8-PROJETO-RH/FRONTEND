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
      'header-gray': '#F2F2F4',
      'white': '#ffffff',
      'medium-gray':'#919192'
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

