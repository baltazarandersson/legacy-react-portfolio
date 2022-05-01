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
        DEFAULT: "#6361AD",
        50: "#F8F8FC",
        100: "#E5E5F5",
        200: "#C0BFE8",
        300: "#9A98DC",
        400: "#7875CC",
        500: "#5B58B6",
        600: "#474491",
        700: "#373668",
        800: "#242343",
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
