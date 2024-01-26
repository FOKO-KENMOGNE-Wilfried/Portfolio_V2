/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#434343",
        "secondary": "#2B2D2D",
      },
      spacing: {
        "navbar": "50%",
      },
      borderRadius: {
        "about": "60px",
      }
    },
  },
  plugins: [],
}