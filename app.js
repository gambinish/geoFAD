const express = require('express');
const app = express();

const bp = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = 5000;

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(bp.urlencoded({ extended: false }))

app.get('/fad', (req, res) => {
  // res.json('FAD1-DETAIL');
  res.render('form')
})

app.listen(PORT);