var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(res, req) {
  res.send('Hello world(test2)!\n');
});

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port);
console.log('Listening on port', port);