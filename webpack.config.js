const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

const config = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new ESLintWebpackPlugin({
      extensions: ['js'],
      emitError: true,
      failOnError: true,
      emitWarning: true,
      failOnWarning: false,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    open: true,
    port: 9000,
    hot: true,
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components'),
      constants: path.join(__dirname, 'src/constants'),
    },
  },
}

module.exports = () => {
  if (process.env.NODE_ENV.includes('production')) {
    config.mode = 'production'
    config.optimization = {
      minimize: true,
      mangleWasmImports: true,
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      providedExports: true,
      mangleExports: 'size',
    }
    config.devtool = 'source-map'
  } else {
    config.mode = 'development'
    config.devtool = 'cheap-module-source-map'
  }
  return config
}
