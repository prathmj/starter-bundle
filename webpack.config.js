var webpack = require('webpack');
var path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './scripts/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
      { test: /\.(png|jpg|gif|jpeg|otf|svg)$/, loader: 'file-loader', exclude: /node_modules/, query: { name: './[path][hash].[ext]'}}
    ]
  },
  watch: false,
  plugins: [
    new CopyWebpackPlugin([
      { from: __dirname + '/src/index.html', to: __dirname + '/build' },
      { from: __dirname + '/src/images', to: __dirname + '/build/images' },
      { from: __dirname + '/src/styles/css', to: __dirname + '/build/styles/css' }
    ]),
    new CleanWebpackPlugin(['dist', 'build'], {
      verbose: true
    }),
    new webpack.ProvidePlugin({
      GLOBAL_VARS: 'settings'
    }),
    new webpack.NoErrorsPlugin()
  ]
};
