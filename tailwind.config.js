module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "5px 5px 60px -15px rgba(0, 0, 0, 0.1)",
      },
    },
    colors: {
      indigo: {
        DEFAULT: "#514ead",
        50: "#f4f4fb",
        100: "#deddf3",
        200: "#bfc0e8",
        300: "#969cd9",
        400: "#6a6fc8",
        500: "#4646b9",
        600: "#423e93",
        700: "#3d377b",
        800: "#2c2853",
        900: "#10101E",
      },
      gray: {
        DEFAULT: "#6B7280",
        50: "#CDD0D5",
        100: "#C2C5CC",
        200: "#ACB0BA",
        300: "#969BA7",
        400: "#7F8694",
        500: "#6B7280",
        600: "#515761",
        700: "#383C43",
        800: "#1E2024",
        900: "#050506",
      },
    },
  },
  plugins: [],
};
