/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#151518',
        customblack: '#09090B',
        customborder: '#27272A',
        customrouter: '#A3A3A3',
        customtext: '#FAFAFA',
        customdarkertext: '#A3A3A3',
        customtableline: '#27272A'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

