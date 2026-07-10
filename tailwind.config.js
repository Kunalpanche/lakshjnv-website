/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B00",
          blue: "#1E3A8A",
          yellow: "#FACC15",
          bg: "#F8FAFC",
          ink: "#0F172A",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 70px -30px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
