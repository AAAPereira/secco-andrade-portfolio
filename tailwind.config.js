/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  safelist: [
    'col-span-10', 'col-span-8', 'col-span-4',
    'justify-center', 'items-center',
    'gap-2', 'gap-4', 'space-y-4',
    'text-theme-accent', 'bg-theme-primary', 'border-theme-primary',
    'timeline-ano', 'font-bold', 'text-center', 'text-xl',
    'relative', 'absolute', 'fixed', 'z-10',
    'w-1', 'w-full', 'h-8', 'mt-6', 'mt-24', 'mb-6', 'mt-[-14px]',
  ],

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

  corePlugins: {
    preflight: false, // ou false se quiser desligar os resets do Tailwind.
  },

  plugins: [],
};
