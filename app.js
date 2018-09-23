const express = require('express');
const app = express();
const request = require('request');

const fishData = require('./data/fish.json')
const velocityData = require('./data/aviso.json')
const fadData = require('./data/FAD.json')
const cors = require('cors')
const bp = require('body-parser');
const exphbs = require('express-handlebars');
const url = require('url')
const http = require('http')

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
  request(downloading, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          res.header("Content-Type", response.headers["content-type"])
          res.send(body)
      }
  })
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

app.post('/fad', (req, res) => {
  // console.log('report body: ', req.body)
  const report = req.body;
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

app.get('/marine-debris-report', (req, res) => {
    const reportUrl = "http://www.marinedebris.engr.uga.edu/scripts/retrieve_recent_stories.php";
    request.post({url: reportUrl, form: {max_num: 20}}, function(err, response, body){
        if (!err && response.statusCode === 200) {
            res.header("Content-Type", "application/json");
            res.send(body)
        }
    })
})

app.get('/proxied_image', function(request_from_client, response_to_client){
    var image_url = request_from_client.query.url;

    var image_host_name = url.parse(image_url).hostname
    var filename = url.parse(image_url).pathname.split("/").pop()

    // var http_client = http.createClient(80, image_host_name);
    // var image_get_request = http_client.request('GET', image_url, {"host": image_host_name});
    //

    var image_get_request = http.request({
        host: image_host_name,
        method: 'GET',
        path: image_url,
        port: 80
    });

    image_get_request.addListener('response', function(proxy_response){
        var current_byte_index = 0;
        var response_content_length = parseInt(proxy_response.headers["content-length"]);
        var response_body = new Buffer(response_content_length);

        proxy_response.setEncoding('binary');
        proxy_response.addListener('data', function(chunk){
            response_body.write(chunk, current_byte_index, "binary");
            current_byte_index += chunk.length;
        });
        proxy_response.addListener('end', function(){
            response_to_client.contentType(filename);
            response_to_client.send(response_body);
        });
    });
    image_get_request.end();
});

app.listen(PORT)
