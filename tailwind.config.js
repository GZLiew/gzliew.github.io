module.exports = {
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans:
          '"Poppins",-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },
      colors: {
        pink: "#f95688"
      },
      fontSize: {
        button: "1rem"
      }
    }
  },
  variants: {}
}
