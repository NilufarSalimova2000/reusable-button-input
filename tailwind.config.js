/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1200px"
        }
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textColor: "var(--color-text)",
        grey: "var(--color-grey)",
        bodyColor: "var(--color-bg)",
        error: "var(--color-error)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
