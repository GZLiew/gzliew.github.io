const path = require("path")

const alias = {
  "@/components": path.resolve(__dirname, `src/components`),
  "@/lib": path.resolve(__dirname, "src/lib"),
  "@/styles": path.resolve(__dirname, "src/styles"),
  "@/assets": path.resolve(__dirname, "src/assets"),
}

module.exports = alias
