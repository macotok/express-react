const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('css/[name].css');

module.exports = [
  {
    entry: {
      app: ['./client/src/js/app.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    devServer: {
      contentBase: './dist',
      watchContentBase: true,
      port: 3000,
      open: true,
    },
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    // plugins: [
    //   new webpack.optimize.UglifyJsPlugin(),
    // ],
  },
  {
    entry: {
      style: ['./client/src/sass/style.scss'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'css/[name].css',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [{
              loader: 'css-loader',
            }, {
              loader: 'sass-loader',
            }],
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [
      extractSass,
    ],
  },
];
