module.exports = {
  content: ["./*.html"], // Include all HTML files in the root directory
  theme: {
    extend: {
      colors: {
        primaryTheme: "#5FC7E6",
        firstTheme: "#035661",
        secondTheme: "#f0af4a",
        thirdTheme: "#97BCB6",
      },
      screens: {
        "custom-540": "540px",
        "3xl": "1820px", // Larger screen breakpoints
        "4k": "2560px",
        "5k": "3200px",
        "6k": "3800px",
        // Custom breakpoint for 540px
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        ubuntu: ['"Ubuntu Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
