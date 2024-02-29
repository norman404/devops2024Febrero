const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World 5');
})

module.exports = app;
