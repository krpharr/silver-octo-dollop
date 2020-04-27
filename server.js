var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
  res.send('Hello world(test2)!\n');
});

app.get('/api/test', function(req, res) {
  const jsonObj = {
    username: "Fred",
    type: "client"
  };
  res.json(jsonObj);
});

const port = 80;
app.listen(port);
console.log('Listening on port', port);