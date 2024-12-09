/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: {
          start: '#2A2634',
          end: '#1A1823',
        },
      },
    },
  },
  plugins: [],
}
