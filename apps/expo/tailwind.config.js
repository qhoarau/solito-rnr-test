// @ts-check

const { theme } = require('app/design/tailwind/theme')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: 'class',
  content: [
    'app/**/*.{js,jsx,ts,tsx}',
    './App.tsx',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    ...theme,
  },
  plugins: [require('tailwindcss-animate')],
}
