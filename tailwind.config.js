module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        "wiggle-left": {
          // '0%, 100%': {
          //     transform: 'rotate(-0.2deg)',
          // },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(300px)",
          },
        },
        "button-pop": {
          "0%": {
            transform: "scale(0.95)",
          },
          "40%": {
            transform: "scale(1.02)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
        "wiggle-left": "wiggle-left 3s ease-in-out infinite",
        "wiggle-fast": "wiggle 2s ease-in-out infinite",
        "fade-in-down": "fade-in-down 8s ease-out infinite",
        "btn-pop": "button-pop ease-in-out",
      },
    },
  },
  plugins: [],
};
