const path = require("path");

module.exports = {
  devServer: {
    contentBase: "./public",
    watchContentBase: true,
    port: 3100,
    open: true,
  },
  entry: './src/client/client.js',
  output: {
    path: path.resolve("./public"),
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
