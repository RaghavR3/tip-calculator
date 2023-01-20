/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "sky-blue": "#C5E4E7",
          green: "#00474B",
          grey: "#5E7A7D",
          orange: "#E17457",
          teal: "#9FE8DF",
        },
        secondary: {
          green: "#26C2AE",
          grey: "#7F9D9F",
        },
        tertiary: {
          grey: "#F3F9FA",
          green: "#3D6666",
        },
      },
      fontFamily: {
        body: "JetBrains Mono",
      },
    },
  },
  plugins: [],
};
