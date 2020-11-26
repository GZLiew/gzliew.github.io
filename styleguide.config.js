const path = require("path")
const aliases = require("./aliases")

module.exports = {
  assetsDir: './src/assets/',
  moduleAliases: aliases,
  components: "./src/components/_common/**/*.tsx",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/StyleGuideWrapper.tsx")
  },
  ignore: ["./src/pages/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}", "./src/assets/**/*.{ts,tsx}"],
  propsParser: require("react-docgen-typescript").withCustomConfig("./tsconfig.json").parse,
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        }
      ]
    },
    resolve: {
      alias: aliases
    }
  }
}
