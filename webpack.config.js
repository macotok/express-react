const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    port: 3100,
    open: true,
  },
  entry: './client/app.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions:['.js', '.jsx']
  },
};
