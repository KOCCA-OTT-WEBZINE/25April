// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // font sizes
        '.text-title-lg': {
          fontSize: 'var(--title-lg)',
        },
        '.text-title-md': {
          fontSize: 'var(--title-md)',
        },
        '.text-title-sm': {
          fontSize: 'var(--title-sm)',
        },

        '.text-text-lg': {
          fontSize: 'var(--text-lg)',
        },
        '.text-text-md': {
          fontSize: 'var(--text-md)',
        },
        '.text-text-sm': {
          fontSize: 'var(--title-sm)',
        },
      });
    }),
  ],
};
