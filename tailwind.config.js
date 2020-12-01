module.exports = {
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans:
          '"Poppins",-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      },
      fontSize: {
        sm: "0.8125rem",
        md: "0.875rem",
        "1xl": "1.375rem",
        "2.5xl": "1.625rem"
      },
      zIndex: {
        "75": 75,
        "100": 100
      }
    }
  },
  variants: {},
  xwind: {
    mode: "objectstyles"
  }
}
