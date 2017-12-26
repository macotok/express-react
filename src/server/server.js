import express from 'express';
const app = express();
const path = require("path")

app.get('/', (req, res) => {
  res.sendFile(path.resolve("./public/index.html"))
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
