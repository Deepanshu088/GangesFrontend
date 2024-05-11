/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        base: "0 0 11px rgba(33,33,33,.2)",
      },
      fontFamily: {
        gilda: "'Gilda Display', serif",
      },
      colors: {
        bgBookingGrayExtraLight: "#f9f9f9",
        bgBookingGrayLight: "#f5f5f5",
        primaryButtonColor: "#ad9700"
      }
    },
  },
  plugins: [],
}

