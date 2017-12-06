var express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static('./src/'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(8080, () => {
  console.log('ClarkBook is now listening on port 8080!');
});
