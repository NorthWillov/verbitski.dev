module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#0D1B34",
        "accent-2": "#BDC6D7",
        "accent-3": "#14A6A8",
        "accent-4": "#3A3A3A",
        "accent-5": "#C0C0C0",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        sans: ["ubunturegular", "sans-serif"],
        serif: ["Arial", "serif"],
        bold: ["ubuntubold", "sans-serif"],
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      height: {
        100: "30rem",
      },
    },
  },
};
