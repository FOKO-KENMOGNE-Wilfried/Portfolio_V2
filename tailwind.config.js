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
        "img": "100px",
        "border": "450px"
      },
      borderRadius: {
        "about": "60px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}