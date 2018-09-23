const express = require('express');
const app = express();
const request = require('request');

const bp = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = 5000;

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(bp.urlencoded({ extended: false }));
app.use(express.static('.'));

app.get('/fad', (req, res) => {
  // res.json('FAD1-DETAIL');
  res.render('form')
});

app.get("/proxy", (req, res) => {
  const downloading = req.query.url;
  if (downloading.includes("GetCapabilities")) {
      request(downloading, function (error, response, body) {
          if (!error && response.statusCode === 200) {
              res.header("Content-Type", response.headers["content-type"])
              res.send(body)
          }
      })
  }
});

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(PORT);
