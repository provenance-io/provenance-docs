/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{md,mdx,js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx,js,jsx,ts,tsx}',
  ],
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  plugins: [],
};
