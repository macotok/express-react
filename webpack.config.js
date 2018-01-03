const path = require("path");

module.exports = {
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
    port: 3100,
    open: true,
  },
  entry: './lib/client/client.js',
  output: {
    path: path.resolve("./dist"),
    filename: 'app.js'
  },
  resolve: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};
