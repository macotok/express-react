# express-react

## 環境

```
node -v
v8.9.1
npm -v
5.6.0
```

## フロントエンド環境開発

### pakage.json

``` javascript:package.json
{
  "name": "react-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "webpack": "^3.10.0"
  }
}
```

### webpack.config.js

``` javascript:webpack.config.js
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
```

### .babelrc

``` javascript:.babelrc
{
  "presets": ["es2015", "react"],
}
```

## サーバーサイド環境開発

### packageをinstall

- express
- babel-cli

## 参考サイト

- [サーバーサイドReactをwebpackを使って最小構成で試す (ES6 ＆ TypeScript)](http://blog.namiking.net/post/2016/02/react-server-using-webpack/)
- [Web技術基礎 - Webpack](http://basic-webtech.axlight.com/webpack/html/)
- [Web技術基礎 - Express](http://basic-webtech.axlight.com/express/html/)
- [Nodeでサーバを立ててReactを使ったページでハロワをやってみる](https://dev.classmethod.jp/etc/node-react-hello-world/)
- [https://github.com/morizotter/js-study/tree/master/9.react-tutorial-2](https://github.com/morizotter/js-study/tree/master/9.react-tutorial-2)
- [Babelを使おう](https://qiita.com/foursue/items/d80667eff2faed8613f2)
- [React 入門チュートリアル①](https://qiita.com/stivan622/items/ef4a0b9d5c5190b0e150)
- [React 入門チュートリアル②](https://qiita.com/stivan622/items/96777804fd0d9ba1f6d1)
