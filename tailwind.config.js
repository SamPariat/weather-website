/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { spacegrotesk: ["Space Grotesk", "sans-serif"] },
      flexGrow: { 2: "2", 3: "3", 4: "4", 5: "5" },
      colors: {
        backgroundColor: "#90ADC6",
        primaryColor: "#E9EAEC",
        secondaryColor: "#FAD02C",
        textColor: "#333652",
      },
      // colors: {
      //   backgroundColor: "#004369",
      //   primaryColor: "#01949a",
      //   secondaryColor: "#db1f48",
      //   textColor: "#e5dd68",
      // },
    },
  },
  plugins: [],
};
