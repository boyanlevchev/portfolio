var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var path = require('path');

var app = express();

app.use(sslRedirect());
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(process.env.PORT || 8080);

