const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    dest: "public"
  },
  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY
  }
})
