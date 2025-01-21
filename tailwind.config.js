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
      'medium-gray':'#919192',
      'custom-background-select': 'rgb(244 245 248)',
      'custom-text-select-blue': '#023376',
      'custom-text-select-gray': '#666E7A',
      'primary-gray': '#F2F2F4',
      'secundary-gray': '#4A4A4A',
      'dark-blue': '#002C63',
      'black-transparent': 'rgba(0, 0, 0, 0.2)',
      'black': '#00000'
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'home-background': "url('/src/assets/homeBackground.png')",
      }
    },
  },
  plugins: [],
}

