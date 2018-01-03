'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var path = require("path");

app.get('/', function (req, res) {
  res.sendFile(path.resolve("./public/index.html"));
});

app.listen(3000, function () {
  console.log('app listening on port 3000');
});