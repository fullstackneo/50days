/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./src/**/*.{html,js}'],
  content: ['./src/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};
