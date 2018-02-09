var webpack = require('webpack');
var path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './scripts/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
              "eslint-loader",
              "babel-loader"],
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          use: [
                "style-loader",
                "css-loader"],
          exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg|otf|ttf|svg)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {name: './[path][hash].[ext]'}
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      settings: path.resolve(__dirname, './webpack.settings')
    }
  },
  watch: false,
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '/src/**'),
        to: path.join(__dirname, '/build')
      }, {
        from: path.join(__dirname, '/src/images'),
        to: path.join(__dirname, '/build/images')
      }, {
        from: path.join(__dirname, '/src/styles/css'),
        to: path.join(__dirname, '/build/styles/css')
      }
    ]),
    new CleanWebpackPlugin(['dist', 'build'], {
      verbose: true
    }),
    new webpack.ProvidePlugin({
      GLOBAL_VARS: 'settings'
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
