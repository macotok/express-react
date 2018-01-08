const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    port: 3100,
    open: true,
  },
  entry: {
    js: './client/src/js/app.js',
    style: './client/src/sass/style.scss',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader?outputStyle=expanded'],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './[name].css',
    }),
  ],
};
