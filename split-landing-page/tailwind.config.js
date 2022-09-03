/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/index.js'],
  theme: {
    extend: {
      backgroundImage: {
        ps5: "url('https://50projects50days.com/projects/split-landing-page/ps.jpg')",
        xbox: "url('https://50projects50days.com/projects/split-landing-page/xbox.jpg')",
      },
    },
  },
  plugins: [],
};
