const express = require('express'),
  app = express(),
  path = require('path'),
  mongoose = require('mongoose');

app.use(express.static('./dist/'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080, () => {
  console.log('ClarkBook is now listening on port 8080!');
});
