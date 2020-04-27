var express = require('express');
var app = express();
app.get('/', function(res, req) {
  res.send('Hello world(test2)!\n');
});

var PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('Listening on port', port);