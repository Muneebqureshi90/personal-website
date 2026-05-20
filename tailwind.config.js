/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        bg2: '#111118',
        bg3: '#16161f',
        surface: '#1c1c28',
        surface2: '#22222f',
        accent: '#f97316',
        accent2: '#fb923c',
        textMain: '#f0f0f5',
        text2: '#9191a8',
        text3: '#5f5f78',
        green: '#22c55e',
        blue: '#3b82f6',
        purple: '#a855f7',
        teal: '#14b8a6',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderColor: {
        border1: 'rgba(255,255,255,0.07)',
        border2: 'rgba(255,255,255,0.12)',
      }
    },
  },
  plugins: [],
}