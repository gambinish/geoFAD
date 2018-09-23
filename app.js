const express = require('express');
const app = express();
const request = require('request');
const formidable = require('formidable');
const fs = require('fs')
const path = require('path');

const fishData = require('./data/fish.json')
const velocityData = require('./data/aviso.json')
const fadData = require('./data/FAD.json')
const cors = require('cors')
const bp = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = 5000;

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(bp.urlencoded({ extended: false }));
app.use(express.static('.'));

const Inventory = require('./db/DS_Inventory.js')
const DS_Inv = new Inventory();

const ReportLog = require('./db/RL_Inventory.js')
const RL_Inv = new ReportLog;

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')
app.use(cors())
app.use(bp.urlencoded({ extended: false }))

let temp = null;

app.get('/fad', (req, res) => {
  res.render('form')
});

app.get('/reportLogs', (req, res) => {
  const reports = RL_Inv.all();
  res.render('reportLog', { reports })
})

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

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/fad/:id', (req, res) => {
  let { id } = req.params;
  // let temp = id;
  // console.log('temp: ', temp);

  let FAD_detail = DS_Inv.getItemById(id);

  res.render('detail', FAD_detail)
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', (req, res) => {
  res.redirect('/fad');
})

app.post('/fad',  (req, res) => {
  // console.log('report body: ', req.body)
  const report = req.body;
  console.log('form submitted')
  const form = new formidable.IncomingForm();
  
  form.parse(req);

  form.on('fileBegin', (name, file) => {
    file.path = __dirname + '/images/' + file.name;
  })
  
  form.on('file', (name,file)=>{
    console.log('Uploaded', + file.name)
  })
 

    

  RL_Inv.add(report);
  res.redirect('/reportLogs')
})

app.get('/fish', (req, res) => {
  res.json(fishData)
})

app.get('/velocity', (req, res) => {
  res.json(velocityData)
})

app.get('/fadData', (req, res) => {
  res.json(fadData)
})

app.listen(PORT)
