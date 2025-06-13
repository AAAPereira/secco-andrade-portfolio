// File: tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-900': '#0A1634',
        'dark-800': '#1a1a1a',
        'yellow-custom': '#ffcc00',
        cyan: {
          500: '#06b6d4',
          400: '#22d3ee',
        },
        green: {
          500: '#00ff99',
        },
      },
    },
  },
  plugins: [],
}
