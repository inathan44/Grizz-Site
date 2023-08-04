/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
      colors: {
        'off-black': '#3E3E3E',
        'logo-red': '#ff0c65',
      },
    },
  },
  plugins: [],
};
