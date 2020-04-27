var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let runPy = new Promise(function(success, nosuccess) {

  const { spawn } = require('child_process');
  const pyprog = spawn('python3', ['./test.py']);

  pyprog.stdout.on('data', function(data) {

    success(data);
  });

  pyprog.stderr.on('data', (data) => {

    nosuccess(data);
  });
});

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

app.get('/api/python', (req, res) => {

  res.write('welcome\n');

  runPy.then(function(fromRunpy) {
    console.log(fromRunpy.toString());
    res.end(fromRunpy);
  });
})

const port = 80;
app.listen(port);
console.log('Listening on port', port);