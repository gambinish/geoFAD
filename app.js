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

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')
app.use(cors())
app.use(bp.urlencoded({ extended: false }))


app.get('/fad', (req, res) => {
  res.render('form')
});

app.get("/proxy", (req, res) => {
  const downloading = req.query.url;
  request(downloading, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          res.header("Content-Type", response.headers["content-type"])
          res.send(body)
      }
  })
});

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/fad/:id', (req, res) => {

  // console.log('req', req)
  let { id } = req.params;
  console.log('id', id)
  console.log('req.query', req.query)
  let coords = req.query;
  console.log('coords', coords);

  let FAD_detail = DS_Inv.getItemById(id);
  console.log('FAD_detail', FAD_detail);

  // const { id } = req.params;
  // console.log('FAD-id: ', id);

  // console.log(item);
  // temp = item;
  // console.log('temp', temp)
  // console.log('item.id', item.id);
  // res.render('detail', item)
  res.render('detail', coords)
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
  res.redirect('/')
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
