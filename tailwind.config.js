/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      colors: {
        clifford: "#da373d",
      },
      fontFamily: {
        inter: ["Inter"],
        dancing: ["Dancing"],
        mon: ["Montserrat"],
      },
      colors: {
        aku: "#c0ffee",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        goyang: "goyang 3s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      keyframes: {
        weggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
