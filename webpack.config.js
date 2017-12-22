module.exports = {
  entry: './src/client.js',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }]
  },
  plugins: []
};
