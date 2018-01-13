const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: './style.css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: [
    './client/src/js/app.js',
    './client/src/sass/style.scss',
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'app.js',
  },
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    port: 3100,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader?outputStyle=compressed',
          }],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    extractSass,
    new webpack.optimize.UglifyJsPlugin()
  ],
};
