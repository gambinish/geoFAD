const express = require('express');
const app = express();

const bp = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = 5000;

const Inventory = require('./db/DS_Inventory.js')
const DS_Inv = new Inventory();

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(bp.urlencoded({ extended: false }))


app.get('/fad', (req, res) => {
  // res.json('FAD1-DETAIL');
  res.render('form')
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', (req, res) => {
  res.redirect('/fad');
})

app.post('/fad', (req, res) => {
  const item = req.body;
  // console.log(item);
  DS_Inv.add(item);
  res.redirect('http://127.0.0.1:8080/')
})

app.listen(PORT);