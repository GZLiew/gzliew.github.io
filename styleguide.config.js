const path = require("path")
const aliases = require("./aliases")

const docs = path.resolve(__dirname)

const outputConfig = {
  path: `${docs}/public/styleguide`,
  filename: 'build/bundle.js',
  chunkFilename: 'build/[name].js',
}

module.exports = {
  assetsDir: './src/assets/',
  styleguideDir: './public',
  moduleAliases: aliases,
  components: "./src/components/_common/**/*.tsx",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/StyleGuideWrapper.tsx")
  },
  ignore: ["./src/pages/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}", "./src/assets/**/*.{ts,tsx}"],
  propsParser: require("react-docgen-typescript").withCustomConfig("./tsconfig.json").parse,
  dangerouslyUpdateWebpackConfig: (config) => {
    config.output = outputConfig
    return config
  },
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
