
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',

    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates


    './app/index.js',
    // the entry point of our app
  ],
  output: {
    filename: 'index_bundle.js',
    // the output bundle

    // path: resolve(__dirname, '/dist'),
    path: resolve(__dirname, 'app'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'app'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    stats: 'minimal',

    contentBase: resolve(__dirname, 'app'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};
