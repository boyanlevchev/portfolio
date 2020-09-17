const sslRedirect = require('heroku-ssl-redirect').default

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.use(sslRedirect());

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(process.env.PORT || 8080);
