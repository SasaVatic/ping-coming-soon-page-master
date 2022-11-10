/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(223, 87%, 63%)",
        "pale-blue": "hsl(223, 100%, 88%)",
        "cornflower-blue": "hsl(223, 87%, 70%)",
        "light-red": "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        "very-dark-blue": "hsl(209, 33%, 12%)",
        nobel: "hsl(0, 0%, 70%)",
        whisper: "hsl(240, 33%, 97%)",
        "blue-haze": "hsl(229, 27%, 85%)",
      },
      fontFamily: {
        "libre-franklin": ["Libre Franklin", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        default: "20px",
        md: "22px",
        tiny: "10px",
      },
      maxWidth: {
        275: "280px",
      },
      width: {
        50: "200px",
        22: "90px",
      },
    },
  },
  plugins: [],
};
